// Pocket Wikipedia Foundation - Dimension Blocks Aggregator
// Combines all dimension-specific block subcategories

import { netherBlocks } from './nether.js';
import { endBlocks } from './end.js';

export const dimensionBlocks = {
    ...netherBlocks,
    ...endBlocks
};
