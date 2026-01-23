// Pocket Wikipedia Foundation - Weapons Aggregator
// Combines all weapon subcategories

import { swords } from './swords.js';
import { rangedWeapons } from './ranged.js';
import { projectiles } from './projectiles.js';
import { spears } from './spears.js';

export const weapons = {
    ...swords,
    ...rangedWeapons,
    ...projectiles,
    ...spears
};
