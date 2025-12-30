// Pocket Wikipedia Foundation - Armor Aggregator
// Combines all armor subcategories

import { helmets } from './helmets.js';
import { chestplates } from './chestplates.js';
import { leggings } from './leggings.js';
import { boots } from './boots.js';

export const armor = {
    ...helmets,
    ...chestplates,
    ...leggings,
    ...boots
};
