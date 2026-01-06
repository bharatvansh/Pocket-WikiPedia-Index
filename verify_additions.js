#!/usr/bin/env node
/**
 * Verification script for new block additions
 */

import { blockIndex } from './scripts/data/search/block_index.js';
import { getBlockDetails } from './scripts/data/providers/blocks/index.js';

const NEW_BLOCKS = [
    'minecraft:tuff_brick_slab',
    'minecraft:waxed_weathered_copper_bulb',
    'minecraft:exposed_chiseled_copper'
];

console.log('=== Verifying New Block Additions ===\n');

let allValid = true;

for (const blockId of NEW_BLOCKS) {
    console.log(`Checking: ${blockId}`);
    
    // Check if in search index
    const searchEntry = blockIndex.find(entry => entry.id === blockId);
    if (searchEntry) {
        console.log(`  ✓ Found in search index`);
        console.log(`    - Name: ${searchEntry.name}`);
        console.log(`    - Category: ${searchEntry.category}`);
        console.log(`    - Theme Color: ${searchEntry.themeColor}`);
    } else {
        console.log(`  ✗ NOT found in search index`);
        allValid = false;
    }
    
    // Check if in provider
    try {
        const providerEntry = await getBlockDetails(blockId);
        console.log(`  ✓ Found in provider registry`);
        console.log(`    - Hardness: ${providerEntry.hardness}`);
        console.log(`    - Blast Resistance: ${providerEntry.blastResistance}`);
        console.log(`    - Mining Tool: ${providerEntry.mining.tool}`);
        console.log(`    - Description Length: ${providerEntry.description.length} chars`);
        
        // Validate required fields
        if (!providerEntry.hardness || !providerEntry.blastResistance || 
            !providerEntry.mining || !providerEntry.drops || 
            !providerEntry.generation || !providerEntry.description) {
            console.log(`  ✗ Missing required fields`);
            allValid = false;
        }
    } catch (error) {
        console.log(`  ✗ NOT found in provider registry: ${error.message}`);
        allValid = false;
    }
    
    console.log('');
}

console.log('=== Summary ===');
console.log(`Total blocks in search index: ${blockIndex.length}`);
console.log(`\nValidation: ${allValid ? '✓ ALL CHECKS PASSED' : '✗ SOME CHECKS FAILED'}`);

process.exit(allValid ? 0 : 1);
