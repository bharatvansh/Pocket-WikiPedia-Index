const fs = require('fs');
function getKeys(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/id:\s*"(minecraft:[\w_]+)"/g) || [];
    return new Set(matches.map(m => m.match(/id:\s*"(.*?)"/)[1]));
}
const mainKeys = getKeys('main_index.js');
const branchKeys = getKeys('scripts/data/search/item_index.js');
const deleted = [];
for (let key of mainKeys) { if (!branchKeys.has(key)) deleted.push(key); }
const added = [];
for (let key of branchKeys) { if (!mainKeys.has(key)) added.push(key); }
console.log('DELETED:', deleted);
console.log('ADDED:', added);
