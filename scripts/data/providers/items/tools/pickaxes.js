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
    "minecraft:stone_pickaxe": {
        id: "minecraft:stone_pickaxe",
        name: "Stone Pickaxe",
        maxStack: 1,
        durability: 132,
        enchantable: true,
        usage: {
            primaryUse: "Mining stone and iron ore",
            secondaryUse: "Basic mining tool for early game"
        },
        combat: {
            attackDamage: 3,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cobblestone x3", "Stick x2"]
        },
        specialNotes: [
            "Can mine Iron Ore, Lapis Lazuli Ore, and Copper Ore",
            "Cannot mine Diamond, Gold, Redstone, or Emerald ores",
            "Durability of 132 is significantly higher than wooden pickaxe (60)",
            "Efficient and cheap to craft using abundant cobblestone"
        ],
        description: "The Stone Pickaxe is a reliable early-game tool in Minecraft, crafted from three cobblestone and two sticks. With 132 durability, it lasts more than twice as long as a wooden pickaxe and mines blocks faster. It is essential for progressing through the game's tiers, as it is the minimum requirement to mine iron ore, copper ore, and lapis lazuli. However, it cannot mine higher-tier ores like gold, diamond, or redstone, requiring an upgrade to an iron pickaxe for those resources."
    },
    "minecraft:diamond_pickaxe": {
        id: "minecraft:diamond_pickaxe",
        name: "Diamond Pickaxe",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "Mining blocks efficiently",
            secondaryUse: "Required to mine obsidian and ancient debris"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
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
    "minecraft:netherite_pickaxe": {
        id: "minecraft:netherite_pickaxe",
        name: "Netherite Pickaxe",
        maxStack: 1,
        durability: 2032,
        enchantable: true,
        usage: {
            primaryUse: "Mining blocks with maximum efficiency",
            secondaryUse: "Highly durable tool for long mining sessions"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Pickaxe", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Highest tier pickaxe in the game with 2032 durability",
            "Immune to fire and lava - will float on top if dropped",
            "Increased mining speed over diamond (9x multiplier)",
            "Requires a Smithing Table and a Netherite Upgrade Template to craft"
        ],
        description: "The Netherite Pickaxe is the ultimate mining tool in Minecraft, surpassing even diamond in terms of durability and efficiency. It is created by upgrading a diamond pickaxe with a netherite ingot and a smithing template at a smithing table. Beyond its superior stats, it is fire-resistant, meaning it won't burn in lava if dropped. Its high durability and speed make it the perfect choice for late-game players focused on large-scale excavation."
    }
};
