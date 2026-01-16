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
    "minecraft:chainmail_boots": {
        id: "minecraft:chainmail_boots",
        name: "Chainmail Boots",
        maxStack: 1,
        durability: 195,
        enchantable: true,
        usage: {
            primaryUse: "Foot protection",
            secondaryUse: "Decoration or trophy armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests", "Trading with Armorer villagers", "Dropped by mobs"]
        },
        specialNotes: [
            "Provides 1 defense point (half shirt)",
            "Durability: 195 (Same as Iron Boots in Bedrock)",
            "Enchantability: 12 (Higher than Iron, lower than Gold)",
            "Cannot be crafted; found in structures or traded",
            "Repaired using Iron Ingots in an Anvil"
        ],
        description: "Chainmail Boots are a type of armor that offers the same protection as Gold Boots but with significantly higher durability, matching Iron. They are unique as they cannot be crafted and are only obtained through trading with Armorer villagers, finding them in Buried Treasure, or as rare drops from mobs. They provide moderate protection for the feet and have a distinctive mesh appearance."
    },
    "minecraft:leather_boots": {
        id: "minecraft:leather_boots",
        name: "Leather Boots",
        maxStack: 1,
        durability: 65,
        enchantable: true,
        usage: {
            primaryUse: "Basic foot protection",
            secondaryUse: "Walking on powder snow"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather x4"]
        },
        specialNotes: [
            "Provides 1 armor point",
            "Allows the player to walk on Powder Snow without falling through",
            "Can be dyed in a cauldron to various colors",
            "Lowest durability of all armor types",
            "Obtainable by killing cows or through crafting"
        ],
        description: "Leather Boots provide minimal defense of 1 armor point but offer a unique survival benefit: they allow players to safely walk across Powder Snow without sinking or taking freeze damage. They are also the only boots that can be customized with dyes in a cauldron, allowing for millions of color combinations. While they have the lowest durability of any boot type, their utility in snowy biomes makes them valuable."
    },
    "minecraft:iron_boots": {
        id: "minecraft:iron_boots",
        name: "Iron Boots",
        maxStack: 1,
        durability: 195,
        enchantable: true,
        usage: {
            primaryUse: "Standard foot protection",
            secondaryUse: "Mid-game survival"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x4"]
        },
        specialNotes: [
            "Provides 2 armor points",
            "Durability: 195",
            "Reliable mid-tier armor choice",
            "Can be found in many loot chests including villages and strongholds",
            "Repaired using Iron Ingots in an Anvil"
        ],
        description: "Iron Boots are a staple of mid-game survival, providing 2 points of armor protection and decent durability. They are cost-effective to craft and maintain, as they can be repaired using ubiquitous iron ingots. Beyond crafting, they are frequently found in loot chests across the Overworld, making them one of the most common armor pieces for players transitioning from early to late game."
    },
    "minecraft:golden_boots": {
        id: "minecraft:golden_boots",
        name: "Golden Boots",
        maxStack: 1,
        durability: 91,
        enchantable: true,
        usage: {
            primaryUse: "Foot protection",
            secondaryUse: "Piglin neutrality"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x4"]
        },
        specialNotes: [
            "Provides 1 armor point",
            "High enchantability value (25)",
            "Prevents Piglins from being hostile in the Nether",
            "Faster degradation due to low durability (91)",
            "Can be repaired with Gold Ingots"
        ],
        description: "Golden Boots provide 1 armor point and share the high enchantability characteristic of all gold gear. Their primary strategic use is in the Nether, where wearing any gold armor piece prevents Piglins from attacking the player on sight. Despite their low durability, they are an efficient choice for Nether travel when heavy protection isn't the priority. They are crafted from 4 gold ingots or found in Nether loot."
    },
    "minecraft:netherite_boots": {
        id: "minecraft:netherite_boots",
        name: "Netherite Boots",
        maxStack: 1,
        durability: 481,
        enchantable: true,
        usage: {
            primaryUse: "Superior foot protection",
            secondaryUse: "Fire resistance and knockback protection"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Boots", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Provides 3 armor points (same as Diamond)",
            "Durability: 481 (Diamond has 429 in Bedrock)",
            "Grants 10% knockback resistance",
            "Item is immune to fire and lava damage",
            "Requires Smithing Table and Upgrade Template to craft",
            "Highest tier of foot protection in the game"
        ],
        description: "Netherite Boots are the ultimate foot protection in Minecraft Bedrock Edition. Providing 3 points of armor, they match Diamond Boots in defensive value but possess significantly higher durability and built-in knockback resistance. Like all netherite gear, these boots are immune to fire and lava, floating safely if dropped into heat. They must be crafted by upgrading Diamond Boots using a Netherite Ingot and a Netherite Upgrade Smithing Template at a Smithing Table."
    }
};
