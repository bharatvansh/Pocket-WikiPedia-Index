// Pocket Wikipedia Foundation - Decorative Blocks Aggregator
// Combines all decorative block subcategories

import { lightingBlocks } from './lighting.js';
import { sculkBlocks } from './sculk.js';
import { coralBlocks } from './coral.js';
import { miscDecorativeBlocks } from './misc.js';

export const decorativeBlocks = {
    ...lightingBlocks,
    ...sculkBlocks,
    ...coralBlocks,
    ...miscDecorativeBlocks
};
