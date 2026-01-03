// Pocket Wikipedia Foundation - Consumables Aggregator
// Combines all consumable subcategories

import { rawFood } from './food_raw.js';
import { cookedFood } from './food_cooked.js';
import { specialFood } from './food_special.js';
import { potions } from './potions.js';
import { suspiciousStew } from './suspicious_stew.js';

export const consumables = {
    ...rawFood,
    ...cookedFood,
    ...specialFood,
    ...potions,
    ...suspiciousStew
};
