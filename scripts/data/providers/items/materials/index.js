// Pocket Wikipedia Foundation - Materials Aggregator
// Combines all material subcategories

import { ingots } from './ingots.js';
import { gems } from './gems.js';
import { mobDrops } from './drops.js';
import { craftingMaterials } from './crafting.js';
import { honeycomb } from './honeycomb.js';

export const materials = {
    ...ingots,
    ...gems,
    ...mobDrops,
    ...craftingMaterials,
    ...honeycomb
};
