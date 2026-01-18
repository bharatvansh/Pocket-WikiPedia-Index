
const fs = require('fs');
const content = fs.readFileSync('scripts/data/providers/items/misc/other.js', 'utf8');

// Use a simplified regex to find objects
const entries = content.match(/"minecraft:[\w_]+":\s*{[\s\S]*?}/g);

entries.forEach(entry => {
    const idMatch = entry.match(/"id":\s*"(.*?)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const descMatch = entry.match(/"description":\s*"(.*?)"/);
    if (descMatch) {
        const desc = descMatch[1];
        if (desc.length >= 600) {
            console.log(`ID: ${id} - Description too long: ${desc.length}`);
        }
    }
    
    const notesMatch = entry.match(/"specialNotes":\s*\[([\s\S]*?)\]/);
    if (notesMatch) {
        const notesStr = notesMatch[1];
        const notes = notesStr.split(',').map(n => n.trim().replace(/^"|"$/g, ''));
        notes.forEach((note, i) => {
            if (note.length >= 120) {
                console.log(`ID: ${id} - Note ${i} too long: ${note.length}`);
            }
        });
    }
});
