/**
 * Pocket Wikipedia Data Verification Script
 * Uses Gemini structured output for reliable issue detection
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * JSON Schema for structured verification response
 */
const verificationSchema = {
    type: "object",
    properties: {
        summary: {
            type: "object",
            properties: {
                totalEntriesVerified: {
                    type: "number",
                    description: "Total number of data entries that were verified"
                },
                issuesFound: {
                    type: "number",
                    description: "Number of entries with issues"
                }
            },
            required: ["totalEntriesVerified", "issuesFound"]
        },
        hasIssues: {
            type: "boolean",
            description: "True if any data accuracy issues were found, false if all data is correct"
        },
        issues: {
            type: "array",
            description: "List of issues found. Empty array if no issues.",
            items: {
                type: "object",
                properties: {
                    itemId: {
                        type: "string",
                        description: "The Minecraft item/block/mob ID (e.g., minecraft:dirt)"
                    },
                    itemName: {
                        type: "string",
                        description: "Human readable name of the item"
                    },
                    field: {
                        type: "string",
                        description: "Which field has the issue (e.g., description, hardness, stackSize)"
                    },
                    currentValue: {
                        type: "string",
                        description: "The incorrect value currently in the data"
                    },
                    correctValue: {
                        type: "string",
                        description: "The correct value based on verification"
                    },
                    explanation: {
                        type: "string",
                        description: "Brief explanation of why this is incorrect"
                    }
                },
                required: ["itemId", "itemName", "field", "currentValue", "correctValue", "explanation"]
            }
        },
        overallAssessment: {
            type: "string",
            description: "Brief overall assessment of the data quality"
        }
    },
    required: ["summary", "hasIssues", "issues", "overallAssessment"]
};

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = { test: false, diff: null, output: null, status: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--test') {
            options.test = true;
        } else if (args[i] === '--diff' && args[i + 1]) {
            options.diff = args[++i];
        } else if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        } else if (args[i] === '--status' && args[i + 1]) {
            options.status = args[++i];
        }
    }

    return options;
}

/**
 * Convert structured response to markdown report
 */
function formatReport(result) {
    let report = '';

    report += `### Summary\n`;
    report += `- **Entries Verified:** ${result.summary.totalEntriesVerified}\n`;
    report += `- **Issues Found:** ${result.summary.issuesFound}\n\n`;

    if (result.hasIssues && result.issues.length > 0) {
        report += `### ⚠️ Issues Detected\n\n`;

        for (const issue of result.issues) {
            report += `#### ${issue.itemName} (\`${issue.itemId}\`)\n`;
            report += `- **Field:** \`${issue.field}\`\n`;
            report += `- **Current Value:** ${issue.currentValue}\n`;
            report += `- **Correct Value:** ${issue.correctValue}\n`;
            report += `- **Explanation:** ${issue.explanation}\n\n`;
        }
    } else {
        report += `### ✅ All Data Verified Successfully\n\n`;
    }

    report += `### Assessment\n${result.overallAssessment}\n`;

    return report;
}

/**
 * Verify all data with Gemini using structured output
 */
async function verifyWithGemini(dataContent) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `You are a Minecraft Bedrock Edition wiki data verifier.

Review the following Minecraft data changes (git diff format) and verify their accuracy.

${dataContent}

Instructions:
- Use Google Search to verify each piece of information from official Minecraft sources.
- Check if descriptions, stats, behaviors, and other data are accurate for Minecraft Bedrock Edition.
- Only flag actual factual errors, not style preferences.
- Set hasIssues to true ONLY if you find genuine data accuracy problems.
- If all data is correct, set hasIssues to false and leave issues array empty.`;

    const response = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: verificationSchema,
            tools: [{ googleSearch: {} }]
        }
    });

    // Parse the structured JSON response
    const result = JSON.parse(response.text);
    return result;
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

    // Read diff from file (provided by GitHub Actions workflow)
    let diffContent = '';

    if (options.diff) {
        const diffPath = path.resolve(options.diff);
        console.log(`Reading diff from: ${diffPath}\n`);

        if (fs.existsSync(diffPath)) {
            diffContent = fs.readFileSync(diffPath, 'utf8');
            console.log(`Found ${diffContent.split('\n').length} lines of diff\n`);
        } else {
            console.log('Diff file not found');
        }
    }

    if (!diffContent.trim()) {
        console.log('No data changes found.');
        if (options.output) {
            fs.writeFileSync(options.output, '✅ No verifiable data found.\n');
        }
        if (options.status) {
            fs.writeFileSync(options.status, 'no_issues');
        }
        return;
    }

    // Verify with Gemini
    console.log('Sending to Gemini for verification...\n');

    try {
        // verifyWithGemini returns structured JSON object
        const result = await verifyWithGemini(diffContent);

        console.log('--- Structured Result ---\n');
        console.log(JSON.stringify(result, null, 2));

        // Convert to markdown report for output
        const report = formatReport(result);
        console.log('\n--- Markdown Report ---\n');
        console.log(report);

        if (options.output) {
            fs.writeFileSync(options.output, report);
            console.log(`\nReport saved to: ${options.output}`);
        }

        // Write status file for GitHub Actions - directly use the boolean from structured output
        if (options.status) {
            const status = result.hasIssues ? 'has_issues' : 'no_issues';
            fs.writeFileSync(options.status, status);
            console.log(`Status: ${status} (from structured output)`);
        }
    } catch (error) {
        const errorMsg = `❌ Verification failed: ${error.message}`;
        console.error(errorMsg);
        if (options.output) {
            fs.writeFileSync(options.output, errorMsg);
        }
        if (options.status) {
            fs.writeFileSync(options.status, 'has_issues');  // Treat errors as issues
        }
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
