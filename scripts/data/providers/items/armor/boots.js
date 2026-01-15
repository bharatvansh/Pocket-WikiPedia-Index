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
    }
};
