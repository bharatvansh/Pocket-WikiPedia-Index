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
    "minecraft:diamond_boots": {
        id: "minecraft:diamond_boots",
        name: "Diamond Boots",
        maxStack: 1,
        durability: 429,
        enchantable: true,
        usage: {
            primaryUse: "Strong foot protection",
            secondaryUse: "Base for Netherite Boots upgrade"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x4"]
        },
        specialNotes: [
            "Provides 3 armor points (1.5 hearts)",
            "Has 429 durability points in Bedrock Edition",
            "Can be enchanted with Feather Falling and Frost Walker",
            "Crafted with 4 diamonds",
            "Essential for late-game builds using Netherite upgrades"
        ],
        description: "Diamond Boots provide excellent foot protection, offering 3 armor points and high durability. They are highly sought after not just for their defense, but for the unique enchantments they can carry, such as Feather Falling, which significantly reduces fall damage. Like all pieces of diamond armor, they can be upgraded into Netherite Boots at a Smithing Table, provided the player has a Smithing Template and a Netherite Ingot."
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
