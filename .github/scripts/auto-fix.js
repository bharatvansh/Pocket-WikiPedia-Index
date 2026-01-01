/**
 * Pocket Wikipedia Auto-Fix Script
 * Uses Gemini to automatically fix data accuracy issues found during verification
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
    const options = { issues: null, output: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--issues' && args[i + 1]) {
            options.issues = args[++i];
        } else if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        }
    }

    return options;
}

/**
 * Recursively find all .js files in a directory
 */
function findJsFilesRecursive(dir, files = []) {
    if (!fs.existsSync(dir)) return files;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            findJsFilesRecursive(fullPath, files);
        } else if (entry.name.endsWith('.js') && entry.name !== 'index.js') {
            files.push(fullPath);
        }
    }
    return files;
}

/**
 * Find the source file containing a specific item ID
 */
function findSourceFile(itemId, dataDir) {
    const categories = ['mobs', 'blocks', 'items'];

    for (const category of categories) {
        const categoryDir = path.join(dataDir, 'providers', category);
        if (!fs.existsSync(categoryDir)) continue;

        // Recursively find all JS files in this category
        const files = findJsFilesRecursive(categoryDir);

        for (const filePath of files) {
            const content = fs.readFileSync(filePath, 'utf8');

            // Check if this file contains the item ID
            if (content.includes(`"${itemId}"`)) {
                return { filePath, content, category };
            }
        }
    }

    return null;
}

/**
 * Extract the full entry for an item from file content
 */
function extractEntry(content, itemId) {
    // Find the start of the entry
    const entryStart = content.indexOf(`"${itemId}":`);
    if (entryStart === -1) return null;

    // Find the opening brace of the entry object
    const openBrace = content.indexOf('{', entryStart);
    if (openBrace === -1) return null;

    // Find matching closing brace
    let braceCount = 1;
    let pos = openBrace + 1;
    while (braceCount > 0 && pos < content.length) {
        if (content[pos] === '{') braceCount++;
        else if (content[pos] === '}') braceCount--;
        pos++;
    }

    const entryEnd = pos;
    const entryContent = content.substring(openBrace, entryEnd);

    return {
        start: entryStart,
        end: entryEnd,
        content: entryContent,
        fullMatch: content.substring(entryStart, entryEnd)
    };
}

/**
 * Ask Gemini to fix the entry
 */
async function fixWithGemini(client, entry, issue) {
    const fixPrompt = `You are fixing a Minecraft Bedrock Edition wiki data entry.

Current entry for "${issue.itemId}":
${entry.content}

ISSUE: The field "${issue.field}" currently has value: ${issue.currentValue}
CORRECT VALUE: ${issue.correctValue}
REASON: ${issue.explanation}

Instructions:
1. Fix ONLY the "${issue.field}" field to have the correct value
2. Keep all other fields exactly the same
3. Maintain proper JavaScript object syntax
4. Return ONLY the fixed entry object (starting with { and ending with })
5. Do NOT include the key "${issue.itemId}:", just the object itself
6. Do NOT include any explanation, markdown, or code fences`;

    const response = await client.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: fixPrompt
    });

    let fixedContent = response.text.trim();

    // Clean up any markdown code fences if present
    if (fixedContent.startsWith('```')) {
        fixedContent = fixedContent.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
    }

    return fixedContent.trim();
}

/**
 * Apply fix to file content
 */
function applyFix(content, itemId, entry, fixedEntry) {
    // Replace the old entry content with the fixed content
    const before = content.substring(0, entry.start);
    const after = content.substring(entry.end);

    return before + `"${itemId}": ` + fixedEntry + after;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('🔧 Pocket Wikipedia Auto-Fix');
    console.log('============================\n');

    if (!options.issues) {
        console.error('Error: --issues argument required');
        process.exit(1);
    }

    if (!process.env.GEMINI_API_KEY) {
        console.error('Error: GEMINI_API_KEY environment variable not set');
        process.exit(1);
    }

    // Read verification results
    const issuesPath = path.resolve(options.issues);
    if (!fs.existsSync(issuesPath)) {
        console.log('No issues file found, nothing to fix');
        process.exit(0);
    }

    const verificationResult = JSON.parse(fs.readFileSync(issuesPath, 'utf8'));

    if (!verificationResult.hasIssues || verificationResult.issues.length === 0) {
        console.log('No issues to fix');
        process.exit(0);
    }

    console.log(`Found ${verificationResult.issues.length} issue(s) to fix\n`);

    const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const dataDir = path.resolve(__dirname, '../../scripts/data');
    const fixes = [];
    const failures = [];

    for (const issue of verificationResult.issues) {
        console.log(`\nFixing: ${issue.itemName} (${issue.itemId})`);
        console.log(`  Field: ${issue.field}`);
        console.log(`  Current: ${issue.currentValue}`);
        console.log(`  Correct: ${issue.correctValue}`);

        try {
            // Find the source file
            const sourceFile = findSourceFile(issue.itemId, dataDir);
            if (!sourceFile) {
                console.log(`  ❌ Could not find source file for ${issue.itemId}`);
                failures.push({ issue, reason: 'Source file not found' });
                continue;
            }

            console.log(`  File: ${path.basename(sourceFile.filePath)}`);

            // Extract the entry
            const entry = extractEntry(sourceFile.content, issue.itemId);
            if (!entry) {
                console.log(`  ❌ Could not extract entry from file`);
                failures.push({ issue, reason: 'Could not extract entry' });
                continue;
            }

            // Get fix from Gemini
            const fixedEntry = await fixWithGemini(client, entry, issue);

            // Validate the fix looks reasonable
            if (!fixedEntry.startsWith('{') || !fixedEntry.endsWith('}')) {
                console.log(`  ❌ Invalid fix format from Gemini`);
                failures.push({ issue, reason: 'Invalid fix format' });
                continue;
            }

            // Apply the fix
            const fixedContent = applyFix(sourceFile.content, issue.itemId, entry, fixedEntry);

            // Write the fixed file
            fs.writeFileSync(sourceFile.filePath, fixedContent);
            console.log(`  ✅ Fixed successfully`);

            fixes.push({
                itemId: issue.itemId,
                itemName: issue.itemName,
                field: issue.field,
                oldValue: issue.currentValue,
                newValue: issue.correctValue,
                file: path.basename(sourceFile.filePath)
            });

        } catch (error) {
            console.log(`  ❌ Error: ${error.message}`);
            failures.push({ issue, reason: error.message });
        }
    }

    // Generate summary
    console.log('\n============================');
    console.log('Summary:');
    console.log(`  ✅ Fixed: ${fixes.length}`);
    console.log(`  ❌ Failed: ${failures.length}`);

    // Write output summary
    if (options.output) {
        let summary = `## 🔧 Auto-Fix Summary\n\n`;
        summary += `- **Fixed:** ${fixes.length}\n`;
        summary += `- **Failed:** ${failures.length}\n\n`;

        if (fixes.length > 0) {
            summary += `### Fixes Applied\n\n`;
            for (const fix of fixes) {
                summary += `- **${fix.itemName}** (\`${fix.itemId}\`)\n`;
                summary += `  - Field: \`${fix.field}\`\n`;
                summary += `  - Changed: \`${fix.oldValue}\` → \`${fix.newValue}\`\n`;
                summary += `  - File: \`${fix.file}\`\n\n`;
            }
        }

        if (failures.length > 0) {
            summary += `### Failed Fixes\n\n`;
            for (const failure of failures) {
                summary += `- **${failure.issue.itemName}** (\`${failure.issue.itemId}\`): ${failure.reason}\n`;
            }
        }

        fs.writeFileSync(options.output, summary);
        console.log(`\nSummary saved to: ${options.output}`);
    }

    // Exit with appropriate code
    if (fixes.length > 0) {
        console.log('\n✅ Fixes applied successfully');
        process.exit(0);
    } else {
        console.log('\n❌ No fixes could be applied');
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
