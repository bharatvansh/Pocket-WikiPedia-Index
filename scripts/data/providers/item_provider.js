// Pocket Wikipedia Foundation - Item Content Provider
// Provides detailed item information on demand

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

/**
 * Get detailed information for a specific item
 * @param {string} itemId
 * @returns {Promise<ItemDetails>}
 */
export async function getItemDetails(itemId) {
    const itemData = {
        "minecraft:iron_sword": {
            id: "minecraft:iron_sword",
            name: "Iron Sword",
            maxStack: 1,
            durability: 250,
            enchantable: true,
            usage: {
                primaryUse: "Melee combat",
                secondaryUse: "Breaking cobwebs quickly"
            },
            combat: {
                attackDamage: 6,
                attackSpeed: 1.6
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Iron Ingot x2", "Stick"]
            },
            specialNotes: [
                "Can be repaired with Iron Ingots",
                "Can receive Sharpness, Smite, or Bane of Arthropods"
            ],
            description: "The Iron Sword is a versatile weapon that deals moderate damage. It's more durable than wooden or stone swords but less powerful than diamond or netherite swords. Iron swords can be enchanted with various combat-related enchantments."
        },
        "minecraft:apple": {
            id: "minecraft:apple",
            name: "Apple",
            maxStack: 64,
            durability: 0,
            enchantable: false,
            usage: {
                primaryUse: "Food (restores 4 hunger)",
                secondaryUse: "Crafting Golden Apples"
            },
            crafting: {
                recipeType: "N/A",
                ingredients: ["Found naturally"]
            },
            specialNotes: [
                "Restores 2.4 saturation points",
                "Can drop from Oak and Dark Oak leaves"
            ],
            description: "Apples are a common food source that can be found in chests or obtained from oak trees. They restore 4 hunger points and 2.4 saturation points when eaten. Apples can also be crafted into golden apples for more powerful effects."
        },
        "minecraft:diamond_pickaxe": {
            id: "minecraft:diamond_pickaxe",
            name: "Diamond Pickaxe",
            maxStack: 1,
            durability: 1561,
            enchantable: true,
            usage: {
                primaryUse: "Mining blocks efficiently",
                secondaryUse: "Required to mine obsidian and ancient debris"
            },
            combat: {
                attackDamage: 5,
                attackSpeed: 1.2
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Diamond x3", "Stick x2"]
            },
            specialNotes: [
                "Can be repaired with Diamonds or another Diamond Pickaxe",
                "Can receive Efficiency, Fortune, Silk Touch, Unbreaking, and Mending enchantments",
                "Mining speed multiplier: 8x",
                "Essential for mining obsidian, ancient debris, and deepslate blocks efficiently"
            ],
            description: "The Diamond Pickaxe is one of the most durable and efficient mining tools in Minecraft. It's required to mine obsidian and ancient debris, making it essential for accessing the Nether and creating netherite equipment. With proper enchantments, it can last thousands of uses."
        },
        "minecraft:bow": {
            id: "minecraft:bow",
            name: "Bow",
            maxStack: 1,
            durability: 384,
            enchantable: true,
            usage: {
                primaryUse: "Ranged combat with arrows",
                secondaryUse: "Activating targets and buttons from distance"
            },
            combat: {
                attackDamage: 9,
                attackSpeed: 1.0
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Stick x3", "String x3"]
            },
            specialNotes: [
                "Damage ranges from 1 to 9 depending on charge time",
                "Can be enchanted with Power, Punch, Flame, Infinity, Unbreaking, and Mending",
                "Requires arrows to shoot (unless enchanted with Infinity)",
                "Fully charged arrows have maximum range of 120 blocks",
                "Can be repaired with another bow or string"
            ],
            description: "The Bow is a ranged weapon that shoots arrows at enemies from a distance. It must be charged before firing, with longer charge times resulting in more damage and longer range. Bows are essential for fighting enemies from safety and can be enhanced with various enchantments."
        }
    };

    if (itemData[itemId]) {
        return itemData[itemId];
    }

    throw new Error(`Item details not found for: ${itemId}`);
}
