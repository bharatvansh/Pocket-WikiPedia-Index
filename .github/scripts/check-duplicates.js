/**
 * Duplicate Entry Check Script
 * Validates that newly added entries don't already exist in the data files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = { diff: null, output: null, status: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--diff' && args[i + 1]) {
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
 * Extract IDs from diff content (looking for newly added entries)
 * Matches patterns like: "minecraft:creeper": { or id: "minecraft:creeper"
 */
function extractAddedIdsFromDiff(diffContent) {
    const addedIds = new Set();
    const lines = diffContent.split('\n');

    for (const line of lines) {
        // Only look at added lines (starting with +)
        if (!line.startsWith('+')) continue;
        // Skip diff headers
        if (line.startsWith('+++')) continue;

        // Match object key pattern: "minecraft:something": {
        const keyMatch = line.match(/"(minecraft:[^"]+)":\s*\{/);
        if (keyMatch) {
            addedIds.add(keyMatch[1]);
        }

        // Match id field pattern: id: "minecraft:something"
        const idMatch = line.match(/id:\s*"(minecraft:[^"]+)"/);
        if (idMatch) {
            addedIds.add(idMatch[1]);
        }
    }

    return addedIds;
}

/**
 * Get all existing IDs from data files in the BASE branch (before PR changes)
 * Uses git show to get the original file content, not the merged checkout
 */
async function getAllExistingIds(dataDir) {
    const existingIds = new Map(); // id -> file path
    const { execSync } = await import('child_process');
    const repoRoot = path.resolve(__dirname, '../..');
    const baseRef = process.env.BASE_REF || 'main';

    async function scanDir(dir) {
        if (!fs.existsSync(dir)) return;

        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await scanDir(fullPath);
            } else if (entry.name.endsWith('.js') && entry.name !== 'index.js') {
                // Get relative path from repo root for git show
                const relativePath = path.relative(repoRoot, fullPath).replace(/\\/g, '/');

                try {
                    // Get file content from BASE branch (origin/<base_ref>), not current checkout
                    const originalContent = execSync(
                        `git show origin/${baseRef}:${relativePath}`,
                        { encoding: 'utf8', cwd: repoRoot, stdio: ['pipe', 'pipe', 'pipe'] }
                    );

                    // Match all id fields: id: "minecraft:something"
                    const idMatches = originalContent.matchAll(/id:\s*"(minecraft:[^"]+)"/g);
                    for (const match of idMatches) {
                        existingIds.set(match[1], fullPath);
                    }

                    // Also match object keys: "minecraft:something": {
                    const keyMatches = originalContent.matchAll(/"(minecraft:[^"]+)":\s*\{/g);
                    for (const match of keyMatches) {
                        existingIds.set(match[1], fullPath);
                    }
                } catch (e) {
                    // File might not exist in base branch (new file) - that's OK, skip it
                    console.log(`  Skipping ${entry.name} (not in base branch or error)`);
                }
            }
        }
    }

    await scanDir(dataDir);
    return existingIds;
}

/**
 * Check for duplicate entries
 */
async function checkDuplicates(diffPath) {
    const issues = [];

    // Read diff content
    if (!fs.existsSync(diffPath)) {
        console.log('No diff file found, skipping duplicate check');
        return { issues, addedCount: 0 };
    }

    const diffContent = fs.readFileSync(diffPath, 'utf8');

    // Extract IDs from the diff (newly added entries)
    const addedIds = extractAddedIdsFromDiff(diffContent);
    console.log(`Found ${addedIds.size} potential new entries in diff`);

    if (addedIds.size === 0) {
        return { issues, addedCount: 0 };
    }

    // Get all existing IDs from the base data
    const dataDir = path.resolve(__dirname, '../../scripts/data/providers');
    const existingIds = await getAllExistingIds(dataDir);
    console.log(`Found ${existingIds.size} existing entries in data files`);

    // Check for duplicates
    for (const id of addedIds) {
        if (existingIds.has(id)) {
            issues.push({
                type: 'duplicate_entry',
                id: id,
                existingFile: existingIds.get(id),
                message: `Entry '${id}' already exists in ${path.basename(existingIds.get(id))}`
            });
        }
    }

    return { issues, addedCount: addedIds.size };
}

/**
 * Format issues into markdown report
 */
function formatReport(issues, addedCount) {
    let report = '';

    report += `### Duplicate Check\n`;
    report += `- **New Entries Found:** ${addedCount}\n`;
    report += `- **Duplicates Detected:** ${issues.length}\n\n`;

    if (issues.length === 0) {
        report += `### ✅ No Duplicates Found\n\n`;
        report += `All new entries are unique and can be safely added.\n`;
    } else {
        report += `### ❌ Duplicate Entries Detected\n\n`;
        report += `The following entries already exist in the data files:\n\n`;

        for (const issue of issues) {
            report += `- **\`${issue.id}\`** - Already exists in \`${path.basename(issue.existingFile)}\`\n`;
        }

        report += `\n> **Note:** Please remove the duplicate entries or rename them if they are intentionally different variants.\n`;
    }

    return report;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('🔍 Duplicate Entry Check');
    console.log('========================\n');

    if (!options.diff) {
        console.error('Error: --diff argument is required');
        process.exit(1);
    }

    const { issues, addedCount } = await checkDuplicates(options.diff);

    // Generate report
    const report = formatReport(issues, addedCount);
    console.log('\n' + report);

    // Write output
    if (options.output) {
        fs.writeFileSync(options.output, report);
        console.log(`Report saved to: ${options.output}`);
    }

    // Write status
    if (options.status) {
        const status = issues.length > 0 ? 'has_issues' : 'no_issues';
        fs.writeFileSync(options.status, status);
        console.log(`Status: ${status}`);
    }

    // Exit with error if duplicates found
    if (issues.length > 0) {
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
