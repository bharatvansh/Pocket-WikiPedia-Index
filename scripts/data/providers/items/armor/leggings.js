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
    }
};
