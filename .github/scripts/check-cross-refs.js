/**
 * Cross-Reference Validation Script
 * Ensures all data entries in providers are registered in their corresponding search index files
 * and vice versa - all index entries have corresponding data.
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
    const options = { output: null, status: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        } else if (args[i] === '--status' && args[i + 1]) {
            options.status = args[++i];
        }
    }

    return options;
}

/**
 * Extract all entry IDs from a data file by dynamically importing it
 */
async function extractDataEntryIds(filePath) {
    const ids = [];

    try {
        const fileUrl = 'file://' + filePath.replace(/\\/g, '/');
        const module = await import(fileUrl);

        for (const [exportName, exportValue] of Object.entries(module)) {
            if (typeof exportValue === 'object' && exportValue !== null && !Array.isArray(exportValue)) {
                // This is a data registry object (e.g., neutralMobs, hostileMobs)
                for (const [key, entry] of Object.entries(exportValue)) {
                    if (typeof entry === 'object' && entry !== null && entry.id) {
                        ids.push(entry.id);
                    }
                }
            }
        }
    } catch (error) {
        console.log(`  Warning: Could not import ${path.basename(filePath)}: ${error.message}`);
    }

    return ids;
}

/**
 * Extract all entry IDs from a search index file
 */
async function extractIndexEntryIds(filePath) {
    const ids = [];

    try {
        const fileUrl = 'file://' + filePath.replace(/\\/g, '/');
        const module = await import(fileUrl);

        for (const [exportName, exportValue] of Object.entries(module)) {
            if (Array.isArray(exportValue)) {
                // This is a search index array (e.g., mobIndex, blockIndex)
                for (const entry of exportValue) {
                    if (typeof entry === 'object' && entry !== null && entry.id) {
                        ids.push(entry.id);
                    }
                }
            }
        }
    } catch (error) {
        console.log(`  Warning: Could not import ${path.basename(filePath)}: ${error.message}`);
    }

    return ids;
}

/**
 * Recursively find all JS files in a directory (excluding index.js)
 */
function findDataFiles(dir, files = []) {
    if (!fs.existsSync(dir)) return files;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            findDataFiles(fullPath, files);
        } else if (entry.name.endsWith('.js') && entry.name !== 'index.js') {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Cross-reference check for a specific data type (mob, block, item)
 */
async function checkCrossReferences(dataType, providerDir, indexFile) {
    const issues = [];

    console.log(`\n📂 Checking ${dataType}...`);

    // Get all data files
    const dataFiles = findDataFiles(providerDir);
    console.log(`  Found ${dataFiles.length} data files`);

    // Extract all IDs from data files
    const dataIds = new Set();
    for (const file of dataFiles) {
        const ids = await extractDataEntryIds(file);
        for (const id of ids) {
            dataIds.add(id);
        }
    }
    console.log(`  Found ${dataIds.size} entries in data files`);

    // Extract all IDs from search index
    const indexIds = new Set();
    if (fs.existsSync(indexFile)) {
        const ids = await extractIndexEntryIds(indexFile);
        for (const id of ids) {
            indexIds.add(id);
        }
        console.log(`  Found ${indexIds.size} entries in search index`);
    } else {
        console.log(`  Warning: Search index file not found: ${indexFile}`);
    }

    // Check for entries in data but not in index
    for (const id of dataIds) {
        if (!indexIds.has(id)) {
            issues.push({
                type: 'missing_from_index',
                dataType,
                id,
                message: `Entry '${id}' exists in data files but is NOT registered in ${path.basename(indexFile)}`
            });
        }
    }

    // Check for entries in index but not in data
    for (const id of indexIds) {
        if (!dataIds.has(id)) {
            issues.push({
                type: 'missing_from_data',
                dataType,
                id,
                message: `Entry '${id}' is registered in ${path.basename(indexFile)} but has NO corresponding data file`
            });
        }
    }

    if (issues.length === 0) {
        console.log(`  ✅ All ${dataType} entries are properly cross-referenced`);
    } else {
        console.log(`  ❌ Found ${issues.length} cross-reference issues`);
    }

    return {
        issues,
        dataCount: dataIds.size,
        indexCount: indexIds.size
    };
}

/**
 * Format issues into markdown report
 */
function formatReport(allIssues, summary) {
    let report = '';

    report += `### Cross-Reference Validation\n`;
    report += `- **Mobs:** ${summary.mobs.dataCount} data entries, ${summary.mobs.indexCount} index entries\n`;
    report += `- **Blocks:** ${summary.blocks.dataCount} data entries, ${summary.blocks.indexCount} index entries\n`;
    report += `- **Items:** ${summary.items.dataCount} data entries, ${summary.items.indexCount} index entries\n`;
    report += `- **Total Issues:** ${allIssues.length}\n\n`;

    if (allIssues.length === 0) {
        report += `### ✅ All Entries Properly Cross-Referenced\n\n`;
        report += `Every data entry has a corresponding search index entry and vice versa.\n`;
    } else {
        report += `### ❌ Cross-Reference Issues Detected\n\n`;

        // Group issues by type
        const missingFromIndex = allIssues.filter(i => i.type === 'missing_from_index');
        const missingFromData = allIssues.filter(i => i.type === 'missing_from_data');

        if (missingFromIndex.length > 0) {
            report += `#### 🔴 Entries Missing from Search Index (${missingFromIndex.length})\n\n`;
            report += `These entries exist in data files but are NOT registered in the search index. Users won't be able to find them!\n\n`;
            for (const issue of missingFromIndex) {
                report += `- **${issue.dataType}:** \`${issue.id}\`\n`;
            }
            report += `\n`;
        }

        if (missingFromData.length > 0) {
            report += `#### 🟠 Index Entries Missing Data (${missingFromData.length})\n\n`;
            report += `These entries are in the search index but have no corresponding data. Clicking them will cause errors!\n\n`;
            for (const issue of missingFromData) {
                report += `- **${issue.dataType}:** \`${issue.id}\`\n`;
            }
            report += `\n`;
        }
    }

    return report;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('🔗 Cross-Reference Validation');
    console.log('=============================');

    const dataDir = path.resolve(__dirname, '../../scripts/data');

    // Define paths for each data type
    const config = {
        mobs: {
            providerDir: path.join(dataDir, 'providers/mobs'),
            indexFile: path.join(dataDir, 'search/mob_index.js')
        },
        blocks: {
            providerDir: path.join(dataDir, 'providers/blocks'),
            indexFile: path.join(dataDir, 'search/block_index.js')
        },
        items: {
            providerDir: path.join(dataDir, 'providers/items'),
            indexFile: path.join(dataDir, 'search/item_index.js')
        }
    };

    const allIssues = [];
    const summary = {
        mobs: { dataCount: 0, indexCount: 0 },
        blocks: { dataCount: 0, indexCount: 0 },
        items: { dataCount: 0, indexCount: 0 }
    };

    // Check each data type
    for (const [dataType, paths] of Object.entries(config)) {
        const result = await checkCrossReferences(dataType, paths.providerDir, paths.indexFile);
        allIssues.push(...result.issues);

        // Use counts from validation (avoids re-importing and potential discrepancies)
        summary[dataType].dataCount = result.dataCount;
        summary[dataType].indexCount = result.indexCount;
    }

    // Generate report
    const report = formatReport(allIssues, summary);
    console.log('\n' + report);

    // Write output
    if (options.output) {
        fs.writeFileSync(options.output, report);
        console.log(`Report saved to: ${options.output}`);
    }

    // Write status
    if (options.status) {
        const status = allIssues.length > 0 ? 'has_issues' : 'no_issues';
        fs.writeFileSync(options.status, status);
        console.log(`Status: ${status}`);
    }

    // Exit with error if issues found
    if (allIssues.length > 0) {
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
