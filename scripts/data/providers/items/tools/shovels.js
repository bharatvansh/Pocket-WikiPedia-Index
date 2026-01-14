// Pocket Wikipedia Foundation - Shovels Data
// ============================================
// This file contains: Wooden shovel, stone shovel, iron shovel,
// golden shovel, diamond shovel, netherite shovel
// ============================================

/**
 * Shovel items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const shovels = {
    "minecraft:wooden_shovel": {
        id: "minecraft:wooden_shovel",
        name: "Wooden Shovel",
        maxStack: 1,
        durability: 60,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, and gravel",
            secondaryUse: "Creating grass paths"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Any Planks", "Stick x2"]
        },
        specialNotes: [
            "Lowest tier shovel with 60 durability",
            "Deals 2 attack damage (1 heart)",
            "Can be used as fuel in a furnace",
            "Good for early game land clearing",
            "Crafted using 1 Wooden Plank and 2 Sticks"
        ],
        description: "The Wooden Shovel is the most basic digging tool in Minecraft Bedrock Edition, crafted from a single wooden plank and two sticks. With a durability of 60 and an attack damage of 2, it serves as an essential starter tool for gathering resources like dirt, sand, and gravel. It can also be used to create grass paths or extinguish campfires, and unlike other shovels, it can be used as fuel in a furnace."
    },
    "minecraft:stone_shovel": {
        id: "minecraft:stone_shovel",
        name: "Stone Shovel",
        maxStack: 1,
        durability: 132,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, and gravel",
            secondaryUse: "Creating grass paths"
        },
        combat: {
            attackDamage: 3,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cobblestone/Blackstone", "Stick x2"]
        },
        specialNotes: [
            "Deals 3 attack damage (1.5 hearts)",
            "Has 132 durability (more than double wood)",
            "Efficient early-game tool",
            "Crafted using Cobblestone or Blackstone",
            "Can break snow layers quickly"
        ],
        description: "The Stone Shovel is a common early-game tool that offers a significant upgrade over its wooden counterpart. Crafted using cobblestone or blackstone and two sticks, it provides 132 durability and deals 3 attack damage. It is an efficient choice for clearing large areas of soil, sand, or gravel before iron becomes readily available. Like other shovels, it can create path blocks and extinguish campfires."
    },
    "minecraft:netherite_shovel": {
        id: "minecraft:netherite_shovel",
        name: "Netherite Shovel",
        maxStack: 1,
        durability: 2032,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, gravel, and snow efficiently",
            secondaryUse: "Creating grass paths and extinguishing campfires"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Shovel", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Most durable shovel with 2032 durability in Bedrock Edition",
            "Immune to fire and lava - will not burn if dropped in lava",
            "Can create grass paths by right-clicking grass blocks",
            "Able to extinguish campfires without taking damage",
            "Upgraded from Diamond Shovel using a Smithing Template",
            "Enchanted with Efficiency for near-instant block mining"
        ],
        description: "The Netherite Shovel is the most powerful and durable digging tool available in Minecraft Bedrock Edition. It can clear through large amounts of soft materials like dirt, sand, and gravel with incredible speed, especially when enchanted with Efficiency. Its fire resistance allows it to survive in lava, a trait shared by all netherite-tier items. Additionally, it can be used to create decorative paths on grass blocks or to safely extinguish campfires."
    },
    "minecraft:iron_shovel": {
        id: "minecraft:iron_shovel",
        name: "Iron Shovel",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, and gravel",
            secondaryUse: "Creating grass paths"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot", "Stick x2"]
        },
        specialNotes: [
            "Deals 4 attack damage (2 hearts) in Bedrock Edition",
            "Has 251 durability, making it durable for most tasks",
            "Can break dirt-based blocks much faster than hand or stone tools",
            "Crafted using 1 Iron Ingot and 2 Sticks",
            "Can extinguish campfires by right-clicking"
        ],
        description: "The Iron Shovel is a versatile digging tool used to harvest dirt, sand, gravel, and snow efficiently. Crafted from one iron ingot and two sticks, it has a durability of 251, making it a dependable mid-game tool. In Bedrock Edition, it deals 4 damage (2 hearts). It allows players to quickly clear land, collect resources like flint from gravel, and create grass paths by right-clicking on grass blocks."
    },
    "minecraft:diamond_shovel": {
        id: "minecraft:diamond_shovel",
        name: "Diamond Shovel",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, and gravel efficiently",
            secondaryUse: "Creating grass paths"
        },
        combat: {
            attackDamage: 5,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond", "Stick x2"]
        },
        specialNotes: [
            "Deals 5 attack damage (2.5 hearts)",
            "High durability of 1562",
            "Digs blocks very quickly",
            "Can be upgraded to Netherite Shovel"
        ],
        description: "The Diamond Shovel is a durable and efficient tool for excavating soil, sand, and gravel. Crafted with a single diamond and two sticks, it boasts a durability of 1562, allowing for extensive landscaping projects without frequent repairs. In Bedrock Edition, it deals 5 attack damage. It is also a prerequisite for crafting the Netherite Shovel."
    },
    "minecraft:golden_shovel": {
        id: "minecraft:golden_shovel",
        name: "Golden Shovel",
        maxStack: 1,
        durability: 33,
        enchantable: true,
        usage: {
            primaryUse: "Fastest digging of dirt and sand",
            secondaryUse: "Creating grass paths"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot", "Stick x2"]
        },
        specialNotes: [
            "Fastest mining speed of all shovels",
            "Very low durability (33 uses)",
            "High enchantability for better enchantments",
            "Deals 2 attack damage (1 heart)"
        ],
        description: "The Golden Shovel is a specialized tool known for its extreme digging speed, which surpasses even diamond and netherite tools on compatible blocks. However, its utility is limited by its very low durability of only 33 uses. Crafted from a gold ingot and two sticks, it is primarily useful for tasks requiring speed over longevity or for obtaining high-level enchantments due to its high enchantability."
    }
};
