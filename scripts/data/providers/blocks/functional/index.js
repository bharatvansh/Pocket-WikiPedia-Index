// Pocket Wikipedia Foundation - Functional Blocks Aggregator
// Combines all functional block subcategories

import { redstoneBlocks } from './redstone.js';
import { containerBlocks } from './containers.js';
import { workstationBlocks } from './workstations.js';
import { interactiveBlocks } from './interactive.js';

export const functionalBlocks = {
    ...redstoneBlocks,
    ...containerBlocks,
    ...workstationBlocks,
    ...interactiveBlocks
};
