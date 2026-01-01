// Pocket Wikipedia Foundation - Miscellaneous Items Aggregator
// Combines all miscellaneous item subcategories

import { dyes } from './dyes.js';
import { smithingTemplates } from './smithing.js';
import { musicDiscs } from './music_discs.js';
import { spawnEggs } from './spawn_eggs.js';
import { bannerPatterns } from './banners.js';
import { miscItems } from './other.js';
import { utilityItems } from './utility.js';

export const misc = {
    ...dyes,
    ...smithingTemplates,
    ...musicDiscs,
    ...spawnEggs,
    ...bannerPatterns,
    ...miscItems,
    ...utilityItems
};
