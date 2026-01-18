import('./scripts/data/providers/items/misc/other.js')
    .then(() => console.log('Parsed successfully'))
    .catch(e => {
        console.error(e);
        process.exit(1);
    });
