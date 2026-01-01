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
    const options = { test: false, diff: null, output: null, status: null, json: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--test') {
            options.test = true;
        } else if (args[i] === '--diff' && args[i + 1]) {
            options.diff = args[++i];
        } else if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        } else if (args[i] === '--status' && args[i + 1]) {
            options.status = args[++i];
        } else if (args[i] === '--json' && args[i + 1]) {
            options.json = args[++i];
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
 * Verify all data with Gemini using three-step approach:
 * Step 1: Use Google Search grounding to verify data
 * Step 2: Re-verify any flagged issues with fresh grounding (reduces false positives)
 * Step 3: Parse the result into structured output
 * (Gemini doesn't support tools + structured output together)
 */
async function verifyWithGemini(dataContent) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY environment variable is not set');
    }

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Step 1: Initial verification with Google Search grounding
    const verifyPrompt = `You are a Minecraft Bedrock Edition wiki data verifier.

Review the following Minecraft data changes (git diff format) and verify their accuracy.

${dataContent}

Instructions:
- Use Google Search to verify each piece of information from official Minecraft sources.
- Check if descriptions, stats, behaviors, and other data are accurate for Minecraft Bedrock Edition.
- Only flag actual factual errors, not style preferences.
- ALWAYS count how many data entries you verified.

Response format:
1. First state: "Verified X entries" (where X is the count of items/mobs/blocks checked)
2. If issues found, list each:
   - Item ID and name
   - Which field is wrong  
   - Current value vs correct value
   - Brief explanation
3. If all data is correct, end with: "All entries are accurate."

Example good response: "Verified 3 entries. All entries are accurate."
Example with issues: "Verified 5 entries. Found 1 issue: minecraft:pig has incorrect health value..."`;


    console.log('Step 1: Initial verification with Google Search grounding...');
    const verifyResponse = await client.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: verifyPrompt,
        config: {
            tools: [{ googleSearch: {} }]
        }
    });

    const initialVerificationText = verifyResponse.text;
    console.log('Initial verification result:', initialVerificationText);

    // Check if any issues were found in the initial verification
    const hasInitialIssues = !initialVerificationText.toLowerCase().includes('all entries are accurate') &&
        !initialVerificationText.toLowerCase().includes('all data is correct') &&
        !initialVerificationText.toLowerCase().includes('no issues found') &&
        (initialVerificationText.toLowerCase().includes('issue') ||
            initialVerificationText.toLowerCase().includes('incorrect') ||
            initialVerificationText.toLowerCase().includes('wrong') ||
            initialVerificationText.toLowerCase().includes('error'));

    let finalVerificationText = initialVerificationText;

    // Step 2: Re-verify each issue INDEPENDENTLY (reduces false positives)
    if (hasInitialIssues) {
        console.log('\nStep 2: Re-verifying each flagged issue independently with fresh grounding...');

        // First, extract individual issues from the initial verification text
        // We'll ask Gemini to parse and re-verify each issue separately
        const extractPrompt = `Extract the individual issues from this verification report.
Return a JSON array of issues found. Each issue should have: itemId, itemName, field, currentValue, correctValue, explanation.

Report:
${initialVerificationText}

If no issues were actually found, return an empty array: []`;

        const extractResponse = await client.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: extractPrompt,
            config: {
                responseMimeType: 'application/json'
            }
        });

        let extractedIssues = [];
        try {
            extractedIssues = JSON.parse(extractResponse.text);
        } catch (e) {
            console.log('Could not parse issues, falling back to batch re-verification');
            extractedIssues = [];
        }

        if (extractedIssues.length > 0) {
            console.log(`Found ${extractedIssues.length} issue(s) to re-verify independently`);

            // Re-verify each issue in parallel with fresh Google Search
            const reVerifyPromises = extractedIssues.map(async (issue, index) => {
                const reVerifyPrompt = `You are a Minecraft Bedrock Edition wiki data verifier performing a SECOND verification pass on a SINGLE issue.

ISSUE TO VERIFY:
- Item: ${issue.itemName} (${issue.itemId})
- Field: ${issue.field}
- Current Value: ${issue.currentValue}
- Claimed Correct Value: ${issue.correctValue}
- Reason Given: ${issue.explanation}

Instructions:
- Use Google Search to verify this SPECIFIC issue from official Minecraft sources.
- Be VERY CAREFUL and THOROUGH - only confirm if you are CERTAIN the data is wrong.
- Check multiple sources (Minecraft Wiki, official docs) to confirm.

Response format (be concise):
1. State your verdict: CONFIRMED (the data IS wrong) or FALSE POSITIVE (the original data was correct)
2. Briefly explain with sources
3. If CONFIRMED, state the correct value`;

                try {
                    console.log(`  Re-verifying issue ${index + 1}/${extractedIssues.length}: ${issue.itemId} - ${issue.field}`);
                    const response = await client.models.generateContent({
                        model: 'gemini-3-flash-preview',
                        contents: reVerifyPrompt,
                        config: {
                            tools: [{ googleSearch: {} }]
                        }
                    });

                    const verdict = response.text;
                    const isConfirmed = verdict.toLowerCase().includes('confirmed') &&
                        !verdict.toLowerCase().includes('false positive');

                    console.log(`    Result: ${isConfirmed ? 'CONFIRMED ❌' : 'FALSE POSITIVE ✅'}`);

                    return {
                        ...issue,
                        reVerifyResult: verdict,
                        isConfirmed
                    };
                } catch (error) {
                    console.log(`    Error re-verifying: ${error.message}`);
                    // On error, assume it's confirmed to be safe
                    return { ...issue, reVerifyResult: 'Error during re-verification', isConfirmed: true };
                }
            });

            const reVerifiedIssues = await Promise.all(reVerifyPromises);

            // Build final verification text from confirmed issues only
            const confirmedIssues = reVerifiedIssues.filter(i => i.isConfirmed);
            const falsePositives = reVerifiedIssues.filter(i => !i.isConfirmed);

            console.log(`\nRe-verification complete: ${confirmedIssues.length} confirmed, ${falsePositives.length} false positives`);

            finalVerificationText = `Re-verified ${extractedIssues.length} issues independently.\n\n`;

            if (confirmedIssues.length > 0) {
                finalVerificationText += `CONFIRMED ISSUES (${confirmedIssues.length}):\n`;
                confirmedIssues.forEach(issue => {
                    finalVerificationText += `- ${issue.itemName} (${issue.itemId}): ${issue.field} = ${issue.currentValue} should be ${issue.correctValue}\n`;
                    finalVerificationText += `  Verification: ${issue.reVerifyResult}\n\n`;
                });
            }

            if (falsePositives.length > 0) {
                finalVerificationText += `\nFALSE POSITIVES (${falsePositives.length}):\n`;
                falsePositives.forEach(issue => {
                    finalVerificationText += `- ${issue.itemName} (${issue.itemId}): ${issue.field} - Original data was correct\n`;
                });
            }

            if (confirmedIssues.length === 0) {
                finalVerificationText += '\nAll entries are accurate. (All flagged issues were false positives)';
            }
        } else {
            console.log('No structured issues to re-verify, using original result');
        }
    } else {
        console.log('\nStep 2: Skipped (no issues found in initial verification)');
    }

    // Step 3: Parse into structured format
    const parsePrompt = `Parse the following verification report into structured JSON format.

Report:
${finalVerificationText}

Return JSON matching this schema:
{
  "summary": { "totalEntriesVerified": number, "issuesFound": number },
  "hasIssues": boolean (true if any CONFIRMED problems found, false if all correct or all were false positives),
  "issues": [{ "itemId": string, "itemName": string, "field": string, "currentValue": string, "correctValue": string, "explanation": string }],
  "overallAssessment": string
}

IMPORTANT:
- Only include CONFIRMED issues in the issues array.
- Do NOT include items marked as "FALSE POSITIVE" - those are correct data.
- If the report says "All entries are accurate" or all issues were false positives, set hasIssues to false and issues to empty array.`;

    console.log('\nStep 3: Parsing into structured format...');
    const parseResponse = await client.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: parsePrompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: verificationSchema
        }
    });

    // Parse the structured JSON response
    const result = JSON.parse(parseResponse.text);
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

        // Write JSON result for auto-fix script
        if (options.json) {
            fs.writeFileSync(options.json, JSON.stringify(result, null, 2));
            console.log(`JSON result saved to: ${options.json}`);
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
