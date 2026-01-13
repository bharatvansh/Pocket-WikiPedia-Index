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
    "minecraft:diamond_hoe": {
        id: "minecraft:diamond_hoe",
        name: "Diamond Hoe",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "Tilling dirt and grass into farmland",
            secondaryUse: "Harvesting leaves, sculk, and sponges"
        },
        combat: {
            attackDamage: 5,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x2", "Stick x2"]
        },
        specialNotes: [
            "Has 1562 durability",
            "Used to till dirt, grass, and coarse dirt into farmland",
            "Can harvest leaves, sculk blocks, and sponges efficiently",
            "Can be upgraded to Netherite Hoe"
        ],
        description: "The Diamond Hoe is a high-durability tool primarily used for farming. It can till ground into farmland and is the effective tool for harvesting leaves, sculk, and sponges. With 1562 durability, it lasts a very long time. It can be upgraded to a Netherite Hoe for maximum durability and fire resistance."
    },
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
    }
};
