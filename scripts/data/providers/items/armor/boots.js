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
            "Provides 1 defense point (same as leather/gold)",
            "Durability: 195 (same as Iron Boots)",
            "Enchantability: 12 (Higher than Iron's 9)",
            "Can be repaired with Iron Ingots or Chains in an Anvil",
            "Obtainable via Armorer villager trades or Buried Treasure",
            "Semi-transparent texture allows skin visibility"
        ],
        description: "Chainmail Boots are a unique type of armor in Minecraft Bedrock Edition that offers moderate durability equal to iron boots but provides the same protection level as leather or gold boots. Distinguished by their see-through mesh texture, they cannot be crafted by players and must be obtained through trading with Armorer villagers, found as rare loot in structures, or dropped by armor-wearing mobs."
    }
};
