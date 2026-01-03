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
 * @property {string} _sn - Pre-computed lowercase name for fast searching
 * @property {string} _si - Pre-computed lowercase ID for fast searching
 */

/**
 * Helper to add pre-computed lowercase search keys to entries
 * @param {object} entry - Original entry
 * @returns {SearchEntry} Entry with search keys
 */
const addSearchKeys = (entry) => ({
    ...entry,
    _sn: entry.name.toLowerCase(),
    _si: entry.id.toLowerCase()
});

/**
 * Combined search index containing all entries with pre-computed lowercase keys
 * Maintains the same order as the original: Blocks, Items, Mobs
 * @type {SearchEntry[]}
 */
export const searchIndex = Object.freeze([
    ...blockIndex.map(addSearchKeys),
    ...itemIndex.map(addSearchKeys),
    ...mobIndex.map(addSearchKeys)
]);

/**
 * Pre-computed category counts (computed once at import time)
 * This avoids repeated .filter() calls every time the menu opens
 */
export const indexCounts = {
    blocks: blockIndex.length,
    items: itemIndex.length,
    mobs: mobIndex.length,
    total: blockIndex.length + itemIndex.length + mobIndex.length
};
