/**
 * PR Scope Validation Script
 * Ensures PRs only modify files in allowed directories (data files only).
 * Prevents PRs from sneaking in changes to core codebase alongside valid data entries.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Allowed file patterns for data contribution PRs
 * Files outside these patterns will be flagged
 */
const ALLOWED_PATTERNS = [
    // Data provider files
    /^scripts\/data\/providers\/.+\.js$/,
    // Search index files
    /^scripts\/data\/search\/.+\.js$/
];

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = { baseRef: 'main', output: null, status: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--base' && args[i + 1]) {
            options.baseRef = args[++i];
        } else if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        } else if (args[i] === '--status' && args[i + 1]) {
            options.status = args[++i];
        }
    }

    return options;
}

/**
 * Get list of changed files in the PR
 */
function getChangedFiles(baseRef) {
    try {
        // Get list of files changed between base branch and HEAD
        const result = execSync(`git diff --name-only origin/${baseRef}...HEAD`, {
            encoding: 'utf8',
            cwd: path.resolve(__dirname, '../..')
        });

        return result.trim().split('\n').filter(f => f.length > 0);
    } catch (error) {
        console.error('Error getting changed files:', error.message);
        return [];
    }
}

/**
 * Check if a file path is allowed
 */
function isFileAllowed(filePath) {
    // Normalize path separators
    const normalizedPath = filePath.replace(/\\/g, '/');

    return ALLOWED_PATTERNS.some(pattern => pattern.test(normalizedPath));
}

/**
 * Categorize changed files
 */
function categorizeFiles(files) {
    const allowed = [];
    const disallowed = [];

    for (const file of files) {
        if (isFileAllowed(file)) {
            allowed.push(file);
        } else {
            disallowed.push(file);
        }
    }

    return { allowed, disallowed };
}

/**
 * Format report
 */
function formatReport(allowed, disallowed) {
    let report = '';

    report += `### PR Scope Validation\n`;
    report += `- **Allowed file changes:** ${allowed.length}\n`;
    report += `- **Disallowed file changes:** ${disallowed.length}\n\n`;

    if (disallowed.length === 0) {
        report += `### ✅ PR Scope Valid\n\n`;
        report += `This PR only modifies allowed data files.\n\n`;

        if (allowed.length > 0) {
            report += `**Files changed:**\n`;
            for (const file of allowed) {
                report += `- \`${file}\`\n`;
            }
        }
    } else {
        report += `### ❌ Unauthorized File Changes Detected\n\n`;
        report += `This PR modifies files outside the allowed data directories. Data contribution PRs should ONLY modify:\n`;
        report += `- \`scripts/data/providers/**/*.js\` (data files)\n`;
        report += `- \`scripts/data/search/**/*.js\` (search index files)\n\n`;

        report += `#### 🚫 Disallowed Changes (${disallowed.length})\n\n`;
        report += `The following files are NOT allowed to be modified in data contribution PRs:\n\n`;
        for (const file of disallowed) {
            report += `- \`${file}\`\n`;
        }

        report += `\n#### ℹ️ What to do?\n\n`;
        report += `1. If you only intended to add data entries, please remove the changes to files listed above.\n`;
        report += `2. If you need to make code changes, please create a **separate PR** for code modifications.\n`;
        report += `3. Data contributions should contain ONLY data files and their index registrations.\n`;

        if (allowed.length > 0) {
            report += `\n#### ✅ Allowed Changes (${allowed.length})\n\n`;
            for (const file of allowed) {
                report += `- \`${file}\`\n`;
            }
        }
    }

    return report;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('🔒 PR Scope Validation');
    console.log('======================\n');

    // Get changed files
    console.log(`Checking files changed against origin/${options.baseRef}...\n`);
    const changedFiles = getChangedFiles(options.baseRef);

    if (changedFiles.length === 0) {
        console.log('No files changed.');
        if (options.status) {
            fs.writeFileSync(options.status, 'no_issues');
        }
        return;
    }

    console.log(`Found ${changedFiles.length} changed files:`);
    for (const file of changedFiles) {
        console.log(`  - ${file}`);
    }

    // Categorize files
    const { allowed, disallowed } = categorizeFiles(changedFiles);

    console.log(`\n✅ Allowed: ${allowed.length}`);
    console.log(`❌ Disallowed: ${disallowed.length}`);

    if (disallowed.length > 0) {
        console.log('\nDisallowed files:');
        for (const file of disallowed) {
            console.log(`  ❌ ${file}`);
        }
    }

    // Generate report
    const report = formatReport(allowed, disallowed);
    console.log('\n' + report);

    // Write output
    if (options.output) {
        fs.writeFileSync(options.output, report);
        console.log(`Report saved to: ${options.output}`);
    }

    // Write status
    if (options.status) {
        const status = disallowed.length > 0 ? 'has_issues' : 'no_issues';
        fs.writeFileSync(options.status, status);
        console.log(`Status: ${status}`);
    }

    // Exit with error if disallowed files found
    if (disallowed.length > 0) {
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
