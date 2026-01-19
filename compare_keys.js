
const fs = require('fs');

function getKeys(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/"minecraft:[\w_]+":/g) || [];
    return new Set(matches.map(m => m.replace(/"/g, '').replace(':', '')));
}

const mainKeys = getKeys('main_other.js'); // I'll save them first
const branchKeys = getKeys('scripts/data/providers/items/misc/other.js');

const deleted = [];
for (let key of mainKeys) {
    if (!branchKeys.has(key)) {
        deleted.push(key);
    }
}

const added = [];
for (let key of branchKeys) {
    if (!mainKeys.has(key)) {
        added.push(key);
    }
}

console.log('DELETED:', deleted);
console.log('ADDED:', added);
