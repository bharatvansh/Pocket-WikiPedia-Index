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
    "minecraft:golden_leggings": {
        id: "minecraft:golden_leggings",
        name: "Golden Leggings",
        maxStack: 1,
        durability: 105,
        enchantable: true,
        usage: {
            primaryUse: "Leg armor providing moderate protection",
            secondaryUse: "Used to prevent Piglin aggression in the Nether"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x7"]
        },
        specialNotes: [
            "Provides 3 armor points when worn",
            "Has only 105 durability, lowest among all legging types",
            "Highest enchantability value of 25, allowing better enchantments at lower levels",
            "Prevents Piglins from becoming hostile when worn in the Nether",
            "Can be repaired with gold ingots on an anvil",
            "Weakest in protection but useful for Nether exploration",
            "Commonly found in Nether fortress chests and Ruined Portal chests"
        ],
        description: "Golden Leggings are leg armor crafted from seven gold ingots. While they provide 3 armor points, they have the lowest durability of all legging types at just 105 uses, making them fragile in prolonged combat. However, their true value lies in their exceptionally high enchantability (25) and their ability to prevent Piglin aggression in the Nether. When wearing any piece of golden armor, including these leggings, Piglins will not attack you on sight, making them essential for safely exploring Nether fortresses, Bastion Remnants, and trading with Piglins."
    }
};
