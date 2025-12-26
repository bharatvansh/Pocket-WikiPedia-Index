// Pocket Wikipedia Foundation - Item Content Provider
// Provides detailed item information on demand

/**
 * @typedef {Object} ItemDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} maxStack - Maximum stack size
 * @property {number} durability - Durability value (0 if not applicable)
 * @property {boolean} enchantable - Whether the item can be enchanted
 * @property {string} description - Detailed description
 */

/**
 * Get detailed information for a specific item
 * @param {string} itemId
 * @returns {Promise<ItemDetails>}
 */
export async function getItemDetails(itemId) {
    // In a real implementation, this could fetch from a larger database
    // For now, we return predefined data for our sample entries
    
    const itemData = {
        "minecraft:iron_sword": {
            id: "minecraft:iron_sword",
            name: "Iron Sword",
            maxStack: 1,
            durability: 250,
            enchantable: true,
            description: "The Iron Sword is a versatile weapon that deals moderate damage. It's more durable than wooden or stone swords but less powerful than diamond or netherite swords. Iron swords can be enchanted with various combat-related enchantments."
        },
        "minecraft:apple": {
            id: "minecraft:apple",
            name: "Apple",
            maxStack: 64,
            durability: 0,
            enchantable: false,
            description: "Apples are a common food source that can be found in chests or obtained from oak trees. They restore 4 hunger points and 2.4 saturation points when eaten. Apples can also be crafted into golden apples for more powerful effects."
        }
    };
    
    if (itemData[itemId]) {
        return itemData[itemId];
    }
    
    throw new Error(`Item details not found for: ${itemId}`);
}