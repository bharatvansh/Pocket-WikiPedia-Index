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
            primaryUse: "Foot protection",
            secondaryUse: "Base for crafting Netherite Boots"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x4"]
        },
        specialNotes: [
            "Provides 3 armor points and 2 armor toughness.",
            "Protects the feet and allows for unique enchantments like Feather Falling.",
            "Necessary for crafting Netherite Boots.",
            "Can be enchanted with Depth Strider or Frost Walker.",
            "Durable footwear crafted from four diamonds."
        ],
        description: "Diamond Boots offer 3 points of armor and 2 points of toughness for the player's feet. While providing the same defense as a helmet, they allow for unique and powerful enchantments such as Feather Falling, which reduces fall damage, or Depth Strider for faster swimming. Crafted from four diamonds, they possess 429 durability points and serve as the template for upgrading to Netherite Boots, which adds knockback resistance and fire immunity."
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
