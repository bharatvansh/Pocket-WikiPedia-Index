// Pocket Wikipedia Foundation - Natural Blocks Aggregator
// Combines all natural/terrain block subcategories

import { stoneBlocks } from './stone.js';
import { dirtBlocks } from './dirt.js';
import { oreBlocks } from './ores.js';
import { woodBlocks } from './wood.js';
import { vegetationBlocks } from './vegetation.js';

export const naturalBlocks = {
    ...stoneBlocks,
    ...dirtBlocks,
    ...oreBlocks,
    ...woodBlocks,
    ...vegetationBlocks
};
