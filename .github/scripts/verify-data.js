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
 * Read and combine all changed data files
 */
function getChangedData(changedFiles) {
    let allData = '';

    for (const file of changedFiles) {
        const fullPath = path.resolve(__dirname, '../..', file);
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            allData += `\n--- File: ${file} ---\n${content}\n`;
        }
    }

    return allData;
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
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
            tools: [{ googleSearch: {} }]
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

    // Get all changed data
    const dataContent = getChangedData(changedFiles);

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
