// Pocket Wikipedia Foundation - Leggings Data
// ============================================
// This file contains: Leather pants, chainmail leggings,
// iron leggings, golden leggings, diamond leggings,
// netherite leggings
// ============================================

/**
 * Leggings items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const leggings = {
    "minecraft:chainmail_leggings": {
        id: "minecraft:chainmail_leggings",
        name: "Chainmail Leggings",
        maxStack: 1,
        durability: 225,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Decoration or trophy armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests", "Trading with Armorer villagers", "Dropped by mobs"]
        },
        specialNotes: [
            "Provides 4 armor points (Iron provides 5)",
            "Durability: 225 (same as Iron Leggings)",
            "Enchantability: 12 (Higher than Iron's 9)",
            "Can be repaired with Iron Ingots in an Anvil",
            "Obtainable via Armorer villager trades or Buried Treasure",
            "Partially transparent texture"
        ],
        description: "Chainmail Leggings provide 4 armor points of protection for the legs, one point less than Iron Leggings, while maintaining the same durability of 225. They possess a higher enchantability rating (12), allowing for potentially better enchantment rolls. Uncraftable in survival, they are primarily sourced from Armorer villagers, loot chests, or drops from armored mobs. Like other chainmail pieces, they can be repaired using Iron Ingots in an anvil."
    },
    "minecraft:netherite_leggings": {
        id: "minecraft:netherite_leggings",
        name: "Netherite Leggings",
        maxStack: 1,
        durability: 555,
        enchantable: true,
        usage: {
            primaryUse: "Superior leg protection",
            secondaryUse: "Fire resistance and knockback protection"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Leggings", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Provides 6 armor points (same as Diamond)",
            "Durability: 555 (Diamond has 495 in Bedrock)",
            "Grants 10% knockback resistance",
            "Item is immune to fire and lava damage",
            "Requires Smithing Table and Upgrade Template to craft",
            "Highest tier of leg protection in the game"
        ],
        description: "Netherite Leggings are the strongest and most durable leg armor in Minecraft Bedrock Edition. They provide the same 6 points of armor as Diamond Leggings but offer significantly higher durability and built-in knockback resistance. A unique property of netherite equipment is its immunity to fire and lava; if dropped, the item will float on top of lava rather than burning. They are crafted by upgrading Diamond Leggings with a Netherite Ingot and a Smithing Template at a Smithing Table."
    },
    "minecraft:leather_leggings": {
        id: "minecraft:leather_leggings",
        name: "Leather Pants",
        maxStack: 1,
        durability: 75,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Can be dyed various colors"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather x7"]
        },
        specialNotes: [
            "Provides 2 armor points (1 full armor icon)",
            "Durability: 75 (Bedrock Edition)",
            "Only armor type that can be dyed in a cauldron (Bedrock)",
            "Protects the wearer from freezing in powder snow",
            "Can be crafted using 7 Leather pieces"
        ],
        description: "Leather Pants (Leather Leggings) are a basic tier of leg armor providing 2 points of protection. While they offer the lowest defense among armor materials, they have the unique ability to be dyed in over 12 million color combinations using a cauldron in Bedrock Edition. Additionally, they are essential for traversing snowy biomes, as they prevent the player from sinking into and freezing within Powder Snow blocks."
    },
    "minecraft:iron_leggings": {
        id: "minecraft:iron_leggings",
        name: "Iron Leggings",
        maxStack: 1,
        durability: 225,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Decoration on armor stands"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x7"]
        },
        specialNotes: [
            "Provides 5 armor points (2.5 armor icons)",
            "Durability: 225 (Bedrock Edition)",
            "Crafted using 7 Iron Ingots in an inverted U-shape",
            "Provides more protection than chainmail or gold leggings",
            "Can be smelted into an Iron Nugget"
        ],
        description: "Iron Leggings provide a reliable 5 points of protection for a player's legs. As part of a full iron set, they offer substantial defense during the middle stages of survival gameplay. With a durability of 225, they last significantly longer than gold or leather versions. They are frequently dropped by armored mobs and can be found in various loot chests throughout the Overworld. Like other iron tools and armor, they can be smelted down in a furnace to recover a single Iron Nugget."
    }
};
