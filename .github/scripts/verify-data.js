/**
 * Pocket Wikipedia Data Verification Script
 * Uses Google Gemini with Grounding (Google Search) to verify Minecraft wiki data
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lazy-initialize Gemini client
let geminiClient = null;

function getGeminiClient() {
    if (!geminiClient) {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY environment variable is not set');
        }
        geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return geminiClient;
}

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = { test: false, files: null, output: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--test') {
            options.test = true;
        } else if (args[i] === '--files' && args[i + 1]) {
            options.files = args[++i];
        } else if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        }
    }

    return options;
}

/**
 * Extract data entries from JavaScript files
 */
async function extractDataEntries(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const entries = [];

    // Extract entries from search_index.js
    if (filePath.includes('search_index.js')) {
        const indexRegex = /{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*category:\s*"([^"]+)"/g;
        let match;
        while ((match = indexRegex.exec(content)) !== null) {
            entries.push({
                id: match[1],
                name: match[2],
                category: match[3],
                type: 'index',
                file: filePath
            });
        }
    }

    // Extract entries from provider files
    if (filePath.includes('_provider.js')) {
        // Match block/item/mob data objects
        const dataRegex = /"(minecraft:[^"]+)":\s*{([^}]+(?:{[^}]*}[^}]*)*)}/g;
        let match;
        while ((match = dataRegex.exec(content)) !== null) {
            const id = match[1];
            const dataBlock = match[2];

            // Extract key properties
            const nameMatch = dataBlock.match(/name:\s*"([^"]+)"/);
            const descMatch = dataBlock.match(/description:\s*"([^"]+)"/);
            const hardnessMatch = dataBlock.match(/hardness:\s*([\d.]+)/);
            const healthMatch = dataBlock.match(/health:\s*([\d.]+)/);

            if (nameMatch) {
                entries.push({
                    id,
                    name: nameMatch[1],
                    description: descMatch ? descMatch[1] : null,
                    hardness: hardnessMatch ? parseFloat(hardnessMatch[1]) : null,
                    health: healthMatch ? parseFloat(healthMatch[1]) : null,
                    type: 'provider',
                    file: filePath,
                    rawData: dataBlock
                });
            }
        }
    }

    return entries;
}

/**
 * Verify a single entry using Gemini with Google Search grounding
 */
async function verifyEntry(entry) {
    let prompt = `Please verify the following Minecraft Bedrock Edition information for "${entry.name}" (${entry.id}). `;
    prompt += `Search the official Minecraft Wiki and reliable sources to confirm accuracy.\n\n`;

    if (entry.description) {
        prompt += `Description: "${entry.description}"\n`;
    }
    if (entry.hardness !== null) {
        prompt += `Hardness: ${entry.hardness}\n`;
    }
    if (entry.health !== null) {
        prompt += `Health: ${entry.health}\n`;
    }
    if (entry.rawData) {
        prompt += `\nFull data:\n${entry.rawData}\n`;
    }

    prompt += `\nRespond in this exact JSON format:
{
  "verified": true/false,
  "accuracy": "high/medium/low",
  "issues": ["list of any inaccuracies found"],
  "corrections": ["suggested corrections if any"],
  "sources": ["URLs of sources checked"]
}`;

    try {
        const client = getGeminiClient();

        // Use Gemini with Google Search grounding
        const response = await client.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }]
            }
        });

        const content = response.text;

        // Extract JSON from response
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return {
                entry,
                result: JSON.parse(jsonMatch[0]),
                success: true
            };
        }

        return {
            entry,
            result: { verified: false, issues: ['Could not parse verification response'] },
            success: false
        };
    } catch (error) {
        return {
            entry,
            result: { verified: false, issues: [`API error: ${error.message}`] },
            success: false
        };
    }
}

/**
 * Generate markdown report
 */
function generateReport(results) {
    let report = '';
    let verified = 0;
    let issues = 0;
    let errors = 0;

    for (const { entry, result, success } of results) {
        if (!success) {
            errors++;
            report += `### ❌ ${entry.name} (${entry.id})\n`;
            report += `**Error:** ${result.issues.join(', ')}\n\n`;
        } else if (result.verified && result.issues.length === 0) {
            verified++;
            report += `### ✅ ${entry.name} (${entry.id})\n`;
            report += `**Accuracy:** ${result.accuracy}\n\n`;
        } else {
            issues++;
            report += `### ⚠️ ${entry.name} (${entry.id})\n`;
            report += `**Accuracy:** ${result.accuracy}\n`;

            if (result.issues && result.issues.length > 0) {
                report += `**Issues Found:**\n`;
                for (const issue of result.issues) {
                    report += `- ${issue}\n`;
                }
            }

            if (result.corrections && result.corrections.length > 0) {
                report += `\n**Suggested Corrections:**\n`;
                for (const correction of result.corrections) {
                    report += `- ${correction}\n`;
                }
            }

            if (result.sources && result.sources.length > 0) {
                report += `\n**Sources:**\n`;
                for (const source of result.sources) {
                    report += `- ${source}\n`;
                }
            }
            report += '\n';
        }
    }

    // Summary
    const summary = `### Summary\n\n` +
        `| Status | Count |\n` +
        `|--------|-------|\n` +
        `| ✅ Verified | ${verified} |\n` +
        `| ⚠️ Issues Found | ${issues} |\n` +
        `| ❌ Errors | ${errors} |\n\n`;

    return summary + report;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('🔍 Pocket Wikipedia Data Verification');
    console.log('=====================================\n');

    // Test mode - verify sample entries
    if (options.test) {
        console.log('Running in test mode...\n');

        if (!process.env.GEMINI_API_KEY) {
            console.log('⚠️  GEMINI_API_KEY not set. Skipping API test.\n');
            console.log('To test locally, set the environment variable:\n');
            console.log('  $env:GEMINI_API_KEY = "your-api-key"  (PowerShell)');
            console.log('  set GEMINI_API_KEY=your-api-key       (CMD)');
            console.log('  export GEMINI_API_KEY=your-api-key    (Bash)\n');
            process.exit(0);
        }

        // Test with a single entry
        const testEntry = {
            id: 'minecraft:dirt',
            name: 'Dirt',
            description: 'Dirt is one of the most common blocks in Minecraft.',
            hardness: 0.5,
            type: 'test',
            file: 'test'
        };

        console.log(`Testing verification for: ${testEntry.name}`);
        const result = await verifyEntry(testEntry);
        console.log('\nResult:', JSON.stringify(result, null, 2));
        return;
    }

    // Get changed files
    let changedFiles = [];

    if (options.files) {
        const filesContent = fs.readFileSync(options.files, 'utf8');
        changedFiles = filesContent
            .split('\n')
            .map(f => f.trim())
            .filter(f => f && f.includes('scripts/data/'));
    }

    if (changedFiles.length === 0) {
        console.log('No data files changed. Skipping verification.');
        if (options.output) {
            fs.writeFileSync(options.output, '✅ No data changes detected.\n');
        }
        return;
    }

    console.log(`Found ${changedFiles.length} changed data file(s):\n`);
    changedFiles.forEach(f => console.log(`  - ${f}`));
    console.log('');

    // Extract all entries from changed files
    const allEntries = [];
    for (const file of changedFiles) {
        const fullPath = path.resolve(__dirname, '../..', file);
        if (fs.existsSync(fullPath)) {
            const entries = await extractDataEntries(fullPath);
            allEntries.push(...entries);
        }
    }

    if (allEntries.length === 0) {
        console.log('No data entries found in changed files.');
        if (options.output) {
            fs.writeFileSync(options.output, '✅ No verifiable data entries found.\n');
        }
        return;
    }

    console.log(`Found ${allEntries.length} data entries to verify.\n`);

    // Verify entries (limit to avoid rate limits)
    const entriesToVerify = allEntries.slice(0, 10); // Max 10 per run
    if (allEntries.length > 10) {
        console.log(`⚠️  Limiting to first 10 entries to avoid rate limits.\n`);
    }

    const results = [];
    for (const entry of entriesToVerify) {
        console.log(`Verifying: ${entry.name}...`);
        const result = await verifyEntry(entry);
        results.push(result);

        // Rate limit: wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Generate report
    const report = generateReport(results);
    console.log('\n' + report);

    if (options.output) {
        fs.writeFileSync(options.output, report);
        console.log(`\nReport saved to: ${options.output}`);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
