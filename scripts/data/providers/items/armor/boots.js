// Pocket Wikipedia Foundation - Boots Data
// ============================================
// This file contains: Leather boots, chainmail boots, iron boots,
// golden boots, diamond boots, netherite boots
// ============================================

/**
 * Boots items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const boots = {
    "minecraft:iron_boots": {
        id: "minecraft:iron_boots",
        name: "Iron Boots",
        maxStack: 1,
        durability: 195,
        enchantable: true,
        usage: {
            primaryUse: "Protective footwear providing armor points",
            secondaryUse: "Can be enchanted with various protection enchantments"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x4"]
        },
        specialNotes: [
            "Provides 2 armor points when worn",
            "Has 195 durability in Bedrock Edition",
            "Can be repaired with iron ingots on an anvil",
            "Enchantable with Protection, Feather Falling, Blast Protection, and more",
            "Commonly dropped by zombies and found in village chests",
            "Mid-tier armor with balanced protection and accessibility",
            "Can be upgraded to netherite using a smithing table"
        ],
        description: "Iron Boots are mid-tier protective footwear crafted from four iron ingots. They provide 2 armor points and have 195 durability, offering a good balance between protection and resource cost. These boots are commonly found in village armorer chests or dropped by zombies wearing them. Iron Boots can be enchanted with powerful enchantments like Feather Falling to reduce fall damage, or Protection to increase overall defense. They serve as an essential piece of armor for players progressing through the mid-game, and can later be upgraded to netherite boots for superior protection."
    }
};
