// Pocket Wikipedia Foundation - Hoes Data
// ============================================
// This file contains: Wooden hoe, stone hoe, iron hoe,
// golden hoe, diamond hoe, netherite hoe
// ============================================

/**
 * Hoe items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const hoes = {
    "minecraft:netherite_hoe": {
        id: "minecraft:netherite_hoe",
        name: "Netherite Hoe",
        maxStack: 1,
        durability: 2032,
        enchantable: true,
        usage: {
            primaryUse: "Tilling dirt, grass, and coarse dirt blocks into farmland",
            secondaryUse: "Harvesting blocks like leaves, hay, and sponges faster"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Hoe", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Highest tier hoe with 2032 durability in Bedrock Edition",
            "Immune to fire and lava - floats on the surface if dropped",
            "Used to till dirt, grass, and coarse dirt into farmland",
            "Can harvest leaves, hay blocks, and sponges very quickly",
            "Upgraded from Diamond Hoe using a Smithing Template",
            "Enchantable with Fortune, Silk Touch, and Efficiency"
        ],
        description: "The Netherite Hoe is the highest-tier hoe in Minecraft Bedrock Edition, offering the greatest durability and speed for tilling and harvesting. Beyond its primary function of creating farmland, it is exceptionally efficient at breaking blocks like hay, sponges, and leaves. Like all netherite equipment, it is fire-resistant and will float in lava, ensuring it won't be lost to fire. It represents the pinnacle of agricultural tools for dedicated players."
    },
    "minecraft:wooden_hoe": {
        id: "minecraft:wooden_hoe",
        name: "Wooden Hoe",
        maxStack: 1,
        durability: 60,
        enchantable: true,
        usage: {
            primaryUse: "Tilling dirt and grass into farmland",
            secondaryUse: "Harvesting organic blocks like leaves and sculk"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Planks x2", "Stick x2"]
        },
        specialNotes: [
            "Deals 2 attack damage (1 heart) in Bedrock Edition",
            "Has low durability (60 uses)",
            "Used to turn Coarse Dirt into Dirt",
            "Can be used as fuel in a furnace",
            "Speed increases on blocks like Hay Bales and Leaves"
        ],
        description: "The Wooden Hoe is a basic farming tool crafted from two planks and two sticks. It allows players to till dirt and grass blocks into farmland for planting crops, or to harvest organic blocks like leaves and hay bales slightly faster than by hand. With only 60 durability and low mining speed, it is primarily a starter tool. In Bedrock Edition, it deals 2 points of damage. It can also be used as furnace fuel."
    },
    "minecraft:stone_hoe": {
        id: "minecraft:stone_hoe",
        name: "Stone Hoe",
        maxStack: 1,
        durability: 132,
        enchantable: true,
        usage: {
            primaryUse: "Tilling dirt and grass into farmland",
            secondaryUse: "Harvesting organic blocks efficiently"
        },
        combat: {
            attackDamage: 3,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cobblestone x2", "Stick x2"]
        },
        specialNotes: [
            "Deals 3 attack damage (1.5 hearts) in Bedrock Edition",
            "Has 132 durability, better than wood",
            "Harvests sponge, wet sponge, and hay bales faster",
            "Can be crafted with Cobblestone, Blackstone, or Cobbled Deepslate",
            "Efficient for early-game farming"
        ],
        description: "The Stone Hoe provides a solid upgrade over the wooden variant, offering more than double the durability (132 uses) and increased mining speed. Crafted with two blocks of cobblestone (or equivalent stone variants) and two sticks, it is a reliable tool for establishing larger farms early in the game. It effectively tills soil and harvests vegetation-based blocks. In Bedrock Edition, it serves as a weak weapon with 3 attack damage."
    },
    "minecraft:iron_hoe": {
        id: "minecraft:iron_hoe",
        name: "Iron Hoe",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Tilling dirt and grass into farmland",
            secondaryUse: "Harvesting organic blocks quickly"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x2", "Stick x2"]
        },
        specialNotes: [
            "Deals 4 attack damage (2 hearts) in Bedrock Edition",
            "Has 251 durability, suitable for medium farming",
            "Greatly increases speed on Sculk and Leaves",
            "Standard mid-game farming tool",
            "Enchantable with Unbreaking and Efficiency"
        ],
        description: "The Iron Hoe is a durable farming tool crafted from two iron ingots and two sticks. With 251 durability and higher efficiency, it makes clearing leaves, harvesting hay bales, and mining sculk blocks much faster than lower-tier hoes. It is essential for maintaining large agricultural areas without frequent tool replacement. In Bedrock Edition, it deals 4 damage, offering some defensive capability while tending to crops."
    },
    "minecraft:golden_hoe": {
        id: "minecraft:golden_hoe",
        name: "Golden Hoe",
        maxStack: 1,
        durability: 32,
        enchantable: true,
        usage: {
            primaryUse: "Tilling dirt and grass into farmland",
            secondaryUse: "Fastest harvesting of leaves and bells"
        },
        combat: {
            attackDamage: 1,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x2", "Stick x2"]
        },
        specialNotes: [
            "Extremely low durability (32 uses).",
            "Highest enchantability tier among hoes.",
            "Harvests certain blocks slightly faster than iron.",
            "Deals 1 attack damage in Bedrock Edition.",
            "Frequently dropped by Piglins in the Nether."
        ],
        description: "The Golden Hoe is a fast but fragile farming tool. While it shares the same tilling capability as other hoes, it excels in its high enchantability, allowing for easier access to top-tier enchantments. However, its extremely low durability of just 32 uses makes it impractical for large-scale farming. It is often obtained via bartering with Piglins or found in Ruined Portal chests. In Bedrock, it provides minimal combat value with only 1 attack damage."
    }
};
