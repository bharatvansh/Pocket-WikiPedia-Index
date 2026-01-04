// Pocket Wikipedia Foundation - Building Blocks Aggregator
// Combines all building block subcategories

import { plankBlocks } from './planks.js';
import { brickBlocks } from './bricks.js';
import { concreteBlocks } from './concrete.js';
import { glassBlocks } from './glass.js';
import { copperBlocks } from './copper.js';
import { slabsStairsBlocks } from './slabs_stairs.js';
import { miscBuildingBlocks } from './misc.js';

export const buildingBlocks = {
    ...plankBlocks,
    ...brickBlocks,
    ...concreteBlocks,
    ...glassBlocks,
    ...copperBlocks,
    ...slabsStairsBlocks,
    ...miscBuildingBlocks
};
