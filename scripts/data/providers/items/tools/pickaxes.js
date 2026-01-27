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
    "minecraft:golden_pickaxe": {
        id: "minecraft:golden_pickaxe",
        name: "Golden Pickaxe",
        maxStack: 1,
        durability: 33,
        enchantable: true,
        usage: {
            primaryUse: "Fastest mining of low-tier blocks",
            secondaryUse: "Speedrunning or clearing stone quickly"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x3", "Stick x2"]
        },
        specialNotes: [
            "Fastest mining tool in the game",
            "Extremely low durability (33 uses)",
            "Cannot mine Iron Ore or higher tiers",
            "High enchantability"
        ],
        description: "The Golden Pickaxe is the fastest mining tool in Minecraft, capable of breaking blocks significantly faster than diamond or netherite tools. However, this speed is offset by its extremely low durability of 33 uses and its inability to mine ores such as iron, gold, diamond, or redstone. Crafted from three Gold Ingots and two Sticks, it is primarily used for specific tasks requiring speed rather than longevity, or for easily obtaining high-level enchantments."
    },
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
    },
    "minecraft:wooden_pickaxe": {
        id: "minecraft:wooden_pickaxe",
        name: "Wooden Pickaxe",
        maxStack: 1,
        durability: 60,
        enchantable: true,
        usage: {
            primaryUse: "Basic mining of stone and coal",
            secondaryUse: "Fuel for furnace (burns for 10 seconds)"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Planks x3", "Stick x2"]
        },
        specialNotes: [
            "Lowest durability (60) of all pickaxes",
            "Cannot mine Iron Ore, Lapis Lazuli, or higher tiers",
            "Can be used as fuel in a furnace",
            "Essential for the first few minutes of gameplay"
        ],
        description: "The Wooden Pickaxe is the most basic mining tool in Minecraft, typically the first tool a player crafts. Made from three wooden planks and two sticks, it is essential for mining stone and coal. However, it has very low durability (60 uses) and cannot mine iron ore or other higher-tier blocks."
    },
    "minecraft:iron_pickaxe": {
        id: "minecraft:iron_pickaxe",
        name: "Iron Pickaxe",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Mining ores (diamond, gold, redstone)",
            secondaryUse: "Durable mid-game mining tool"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x3", "Stick x2"]
        },
        specialNotes: [
            "Required to mine Diamond, Gold, Redstone, and Emerald ores",
            "Significantly more durable (251) than Stone (132)",
            "Efficient and relatively cheap to mass-produce",
            "Can break almost all blocks that require a pickaxe"
        ],
        description: "The Iron Pickaxe is the workhorse of Minecraft tools, offering a balance of durability and mining capability. Crafted with three iron ingots and two sticks, it is required to mine diamond, gold, redstone, and emerald ores. With 251 durability, it is reliable for most mid-game mining tasks."
    },
    "minecraft:copper_pickaxe": {
        id: "minecraft:copper_pickaxe",
        name: "Copper Pickaxe",
        maxStack: 1,
        durability: 180,
        enchantable: true,
        usage: {
            primaryUse: "Mining blocks",
            secondaryUse: "Effective for copper and iron ores"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Copper Ingot x3", "Stick x2"]
        },
        specialNotes: [
            "Can mine Iron, Lapis, and Copper ores",
            "180 durability; positioned between Stone and Iron tools",
            "Mines faster than Stone but slower than Iron",
            "Part of the Copper Age game drop"
        ],
        description: "The Copper Pickaxe is a durable utility tool added in Minecraft's Copper Age (1.21.111). Positioned between stone and iron in performance, it offers 180 durability points, making it a reliable choice for extended mining sessions when iron is scarce. It is capable of mining iron ore, lapis lazuli, and other stone-tier blocks. Its introduction provides a meaningful use for the massive amounts of copper players often accumulate."
    }
};
