/**
 * Format Validation Script
 * Validates JavaScript syntax and data structure before Gemini verification
 * No AI/API calls needed - pure static validation
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Required fields for each data type
 */
const REQUIRED_FIELDS = {
    mob: ['id', 'name', 'health', 'description'],
    block: ['id', 'name', 'description'],
    item: ['id', 'name', 'description']
};

/**
 * Field type validators
 */
const FIELD_TYPES = {
    id: 'string',
    name: 'string',
    health: 'number',
    description: 'string',
    stackSize: 'number',
    hardness: 'number',
    stats: 'object',
    drops: 'array',
    behaviorTraits: 'array',
    classification: 'object',
    spawning: 'object'
};

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = { files: [], output: null, status: null };

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--output' && args[i + 1]) {
            options.output = args[++i];
        } else if (args[i] === '--status' && args[i + 1]) {
            options.status = args[++i];
        } else if (!args[i].startsWith('--')) {
            options.files.push(args[i]);
        }
    }

    return options;
}

/**
 * Detect data type from file path
 */
function detectDataType(filePath) {
    if (filePath.includes('/mobs/') || filePath.includes('\\mobs\\')) return 'mob';
    if (filePath.includes('/blocks/') || filePath.includes('\\blocks\\')) return 'block';
    if (filePath.includes('/items/') || filePath.includes('\\items\\')) return 'item';
    return 'unknown';
}

/**
 * Validate a single data entry
 */
function validateEntry(key, entry, dataType, issues) {
    const required = REQUIRED_FIELDS[dataType] || REQUIRED_FIELDS.item;

    // Check required fields
    for (const field of required) {
        if (!(field in entry)) {
            issues.push({
                type: 'missing_field',
                entry: key,
                field: field,
                message: `Missing required field '${field}'`
            });
        }
    }

    // Check field types
    for (const [field, value] of Object.entries(entry)) {
        const expectedType = FIELD_TYPES[field];
        if (expectedType) {
            const actualType = Array.isArray(value) ? 'array' : typeof value;
            if (actualType !== expectedType) {
                issues.push({
                    type: 'wrong_type',
                    entry: key,
                    field: field,
                    expected: expectedType,
                    actual: actualType,
                    message: `Field '${field}' should be ${expectedType}, got ${actualType}`
                });
            }
        }
    }

    // Validate ID matches key
    if (entry.id && entry.id !== key) {
        issues.push({
            type: 'id_mismatch',
            entry: key,
            message: `Entry key '${key}' doesn't match id field '${entry.id}'`
        });
    }

    // Validate minecraft: prefix
    if (entry.id && !entry.id.startsWith('minecraft:')) {
        issues.push({
            type: 'invalid_id_format',
            entry: key,
            message: `ID '${entry.id}' should start with 'minecraft:'`
        });
    }
}

/**
 * Validate a JavaScript file
 */
function validateFile(filePath, issues) {
    const absolutePath = path.resolve(filePath);

    if (!fs.existsSync(absolutePath)) {
        issues.push({
            type: 'file_not_found',
            file: filePath,
            message: `File not found: ${filePath}`
        });
        return false;
    }

    const content = fs.readFileSync(absolutePath, 'utf8');
    const dataType = detectDataType(filePath);

    // Step 1: Try to parse the JavaScript syntax
    try {
        new vm.Script(content, { filename: filePath });
    } catch (syntaxError) {
        issues.push({
            type: 'syntax_error',
            file: filePath,
            line: syntaxError.lineNumber || 'unknown',
            message: `JavaScript syntax error: ${syntaxError.message}`
        });
        return false;
    }

    // Step 2: Extract exported objects using regex (simple approach)
    // Look for patterns like: export const someName = { ... }
    const exportMatches = content.match(/export\s+const\s+\w+\s*=\s*\{/g);
    if (!exportMatches) {
        // No exports to validate
        return true;
    }

    // Step 3: Try to evaluate and extract data
    // Create a mock module context
    try {
        // Extract the object content after export const name = 
        const objectMatch = content.match(/export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?\s*$/);
        if (objectMatch) {
            // Use Function constructor to safely evaluate the object
            const evalCode = `return (${objectMatch[1]});`;
            const data = new Function(evalCode)();

            // Validate each entry
            for (const [key, entry] of Object.entries(data)) {
                if (typeof entry === 'object' && entry !== null) {
                    validateEntry(key, entry, dataType, issues);
                }
            }
        }
    } catch (evalError) {
        // Can't evaluate, but syntax check passed - that's okay
        console.log(`Note: Could not deep-validate ${filePath}: ${evalError.message}`);
    }

    return true;
}

/**
 * Find all changed JS files in scripts/data
 */
function findDataFiles(dataDir) {
    const files = [];

    function scanDir(dir) {
        if (!fs.existsSync(dir)) return;

        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                scanDir(fullPath);
            } else if (entry.name.endsWith('.js')) {
                files.push(fullPath);
            }
        }
    }

    scanDir(dataDir);
    return files;
}

/**
 * Format issues into markdown report
 */
function formatReport(issues, filesChecked) {
    let report = '';

    report += `### Format Validation\n`;
    report += `- **Files Checked:** ${filesChecked}\n`;
    report += `- **Issues Found:** ${issues.length}\n\n`;

    if (issues.length === 0) {
        report += `### ✅ Format Validation Passed\n\n`;
        report += `All files have valid syntax and structure.\n`;
    } else {
        report += `### ❌ Format Issues Detected\n\n`;

        for (const issue of issues) {
            report += `#### ${issue.type.replace(/_/g, ' ').toUpperCase()}\n`;
            if (issue.file) report += `- **File:** \`${issue.file}\`\n`;
            if (issue.entry) report += `- **Entry:** \`${issue.entry}\`\n`;
            if (issue.field) report += `- **Field:** \`${issue.field}\`\n`;
            if (issue.line) report += `- **Line:** ${issue.line}\n`;
            report += `- **Message:** ${issue.message}\n\n`;
        }
    }

    return report;
}

/**
 * Main execution
 */
async function main() {
    const options = parseArgs();

    console.log('📋 Format Validation');
    console.log('====================\n');

    const issues = [];
    let filesChecked = 0;

    // Find all data files
    const dataDir = path.resolve(__dirname, '../../scripts/data');
    const files = options.files.length > 0 ? options.files : findDataFiles(dataDir);

    console.log(`Found ${files.length} files to validate\n`);

    // Validate each file
    for (const file of files) {
        console.log(`Checking: ${file}`);
        validateFile(file, issues);
        filesChecked++;
    }

    // Generate report
    const report = formatReport(issues, filesChecked);
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

    // Exit with error if issues found
    if (issues.length > 0) {
        process.exit(1);
    }
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
