/**
 * Pocket Wikipedia Data Verification Script
 * Simple: Send all changes to Gemini, get verification report
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
 * Get only the actual changes (diff) from git
 */
function getChangedData() {
    try {
        // Get the diff of changes in data files
        const { execSync } = require('child_process');

        // For PR: diff against base branch. For local: diff against HEAD~1
        let diff = '';
        try {
            // Try PR diff first (GitHub Actions sets these)
            const baseSha = process.env.GITHUB_BASE_SHA || process.env.BASE_SHA;
            const headSha = process.env.GITHUB_SHA || 'HEAD';

            if (baseSha) {
                diff = execSync(`git diff ${baseSha} ${headSha} -- "scripts/data/"`, {
                    encoding: 'utf8',
                    cwd: path.resolve(__dirname, '../..')
                });
            } else {
                // Local: diff against previous commit
                diff = execSync('git diff HEAD~1 HEAD -- "scripts/data/"', {
                    encoding: 'utf8',
                    cwd: path.resolve(__dirname, '../..')
                });
            }
        } catch (e) {
            // Fallback: show staged + unstaged changes
            diff = execSync('git diff HEAD -- "scripts/data/"', {
                encoding: 'utf8',
                cwd: path.resolve(__dirname, '../..')
            });
        }

        return diff;
    } catch (error) {
        console.error('Error getting git diff:', error.message);
        return '';
    }
}

/**
 * Verify all data with Gemini in one request
 */
async function verifyWithGemini(dataContent) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `You are a Minecraft Bedrock Edition wiki data verifier.

Review the following Minecraft data new entries and verify their accuracy using your knowledge.

${dataContent}

- Use Internet Web to verify each piece of info from high quality and updated sources.
- Compare your finding with the existing changes data.

For each entry that has an issue, list:
- The item name and ID
- What's wrong
- The correct value

Format your response as a simple markdown report:
- Start with a summary (how many verified, how many have issues)
- Then list any issues found with corrections
- Be concise, only mention items that have actual problems

If everything looks correct, just say "All data verified successfully."`;

    const response = await client.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: {
            thinkingConfig: {
                thinkingLevel: 'HIGH'  // Maximum reasoning depth
            },
            tools: [{ googleSearch: {} }]  // Google Search grounding enabled
        }
    });

    return response.text;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('🔍 Pocket Wikipedia Data Verification');
    console.log('=====================================\n');

    // Test mode
    if (options.test) {
        console.log('Running in test mode...\n');

        if (!process.env.GEMINI_API_KEY) {
            console.log('⚠️  GEMINI_API_KEY not set. Skipping API test.\n');
            console.log('To test locally, set the environment variable:\n');
            console.log('  $env:GEMINI_API_KEY = "your-api-key"  (PowerShell)');
            process.exit(0);
        }

        const testData = `
"minecraft:dirt": {
    name: "Dirt",
    description: "A common block found almost everywhere",
    hardness: 0.5
}`;

        console.log('Testing with sample data...');
        const result = await verifyWithGemini(testData);
        console.log('\nResult:\n', result);
        return;
    }

    // Get git diff of changed data
    console.log('Getting changes from git diff...\n');
    const dataContent = getChangedData();

    if (!dataContent.trim()) {
        console.log('No data content found in changed files.');
        if (options.output) {
            fs.writeFileSync(options.output, '✅ No verifiable data found.\n');
        }
        return;
    }

    // Verify with Gemini
    console.log('Sending to Gemini for verification...\n');

    try {
        const report = await verifyWithGemini(dataContent);

        console.log('--- Verification Report ---\n');
        console.log(report);

        if (options.output) {
            fs.writeFileSync(options.output, report);
            console.log(`\nReport saved to: ${options.output}`);
        }
    } catch (error) {
        const errorMsg = `❌ Verification failed: ${error.message}`;
        console.error(errorMsg);
        if (options.output) {
            fs.writeFileSync(options.output, errorMsg);
        }
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
