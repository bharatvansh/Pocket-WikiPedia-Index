// Pocket Wikipedia Foundation - Search Index
// Aggregates all search indices from modular files

import { blockIndex } from './block_index.js';
import { itemIndex } from './item_index.js';
import { mobIndex } from './mob_index.js';

/**
 * @typedef {Object} SearchEntry
 * @property {string} id - Namespace ID (e.g., "minecraft:creeper")
 * @property {string} name - Display Name
 * @property {"block"|"item"|"mob"} category - Entry category
 * @property {string} icon - Path to texture icon
 * @property {string} themeColor - Minecraft color code for this entry (e.g., "§a" for green)
 *                                 NOTE: Never use black (§0) - use darkGray (§8) instead for dark colors
 */

/**
 * Combined search index containing all entries
 * Maintains the same order as the original: Blocks, Items, Mobs
 * @type {SearchEntry[]}
 */
export const searchIndex = [
    ...blockIndex,
    ...itemIndex,
    ...mobIndex
];
