// Pocket Wikipedia Foundation - Raw Food Data
// ============================================
// This file contains: Raw beef, raw porkchop, raw chicken,
// raw mutton, raw rabbit, raw cod, raw salmon, tropical fish,
// pufferfish, apple, melon slice, sweet berries, glow berries,
// carrot, potato, beetroot, dried kelp, chorus fruit
// ============================================

/**
 * Raw food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const rawFood = {
    "minecraft:apple": {
        id: "minecraft:apple",
        name: "Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Crafting golden apples"
        },
        food: {
            hunger: 4,
            saturation: 2.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Drops from oak and dark oak leaves"]
        },
        specialNotes: [
            "Restores 4 hunger points (2 drumsticks)",
            "Has a 0.5% chance to drop from oak or dark oak leaves when broken",
            "Can be used to craft golden apples with gold ingots"
        ],
        description: "Apples are a common food item that can be obtained by breaking oak or dark oak leaves, or found in various structure chests. They provide moderate hunger restoration and are essential ingredients for crafting golden apples."
    }
};
