// Pocket Wikipedia Foundation - Pickaxes Data
// ============================================
// This file contains: Wooden pickaxe, stone pickaxe, iron pickaxe,
// golden pickaxe, diamond pickaxe, netherite pickaxe
// ============================================

/**
 * Pickaxe items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const pickaxes = {
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
    }
};
