// Pocket Wikipedia Foundation - Item Content Provider
// Aggregates all item data from modular subcategory folders

import { tools } from './tools/index.js';
import { weapons } from './weapons/index.js';
import { armor } from './armor/index.js';
import { consumables } from './consumables/index.js';
import { materials } from './materials/index.js';
import { misc } from './misc/index.js';

/**
 * @typedef {Object} ItemDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} maxStack - Maximum stack size
 * @property {number} durability - Durability value (0 if not applicable)
 * @property {boolean} enchantable - Whether the item can be enchanted
 * @property {Object} [usage] - Usage information
 * @property {string} [usage.primaryUse] - Primary use case
 * @property {string} [usage.secondaryUse] - Secondary use case
 * @property {Object} [combat] - Combat stats
 * @property {number} [combat.attackDamage] - Attack damage
 * @property {number} [combat.attackSpeed] - Attack speed
 * @property {Object} [crafting] - Crafting information
 * @property {string} [crafting.recipeType] - Recipe type
 * @property {string[]} [crafting.ingredients] - Required ingredients
 * @property {string[]} [specialNotes] - Special notes about the item
 * @property {string} description - Detailed description
 */

// Combine all item data into a single registry
const itemData = {
    ...tools,
    ...weapons,
    ...armor,
    ...consumables,
    ...materials,
    ...misc
};

/**
 * Get detailed information for a specific item
 * @param {string} itemId
 * @returns {Promise<ItemDetails>}
 */
export async function getItemDetails(itemId) {
    if (itemData[itemId]) {
        return itemData[itemId];
    }

    throw new Error(`Item details not found for: ${itemId}`);
}
