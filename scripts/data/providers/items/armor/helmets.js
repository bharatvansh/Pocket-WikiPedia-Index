// Pocket Wikipedia Foundation - Helmets Data
// ============================================
// This file contains: Leather cap, chainmail helmet, iron helmet,
// golden helmet, diamond helmet, netherite helmet, turtle shell
// ============================================

/**
 * Helmet items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const helmets = {
    "minecraft:turtle_helmet": {
        id: "minecraft:turtle_helmet",
        name: "Turtle Shell",
        maxStack: 1,
        durability: 275,
        enchantable: true,
        usage: {
            primaryUse: "Protective headgear granting Water Breathing",
            secondaryUse: "Brewing Potion of the Turtle Master"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Turtle Scute x5"]
        },
        specialNotes: [
            "Provides 2 armor points (equal to Golden/Iron Helmet)",
            "Grants Water Breathing effect for 10 seconds when entering water",
            "Can be used in a Brewing Stand to brew Potion of the Turtle Master",
            "Crafted with 5 Turtle Scutes in an 'n' shape",
            "Repairable with Turtle Scutes in an anvil"
        ],
        description: "The Turtle Shell is a unique helmet crafted from Turtle Scutes dropped by baby turtles when they grow up. When worn, it provides 2 armor points and a special perk: 10 seconds of Water Breathing status effect whenever the player enters water or bubble columns. This timer resets once the player surfaces. Beyond protection, it is a key ingredient in alchemy, used to brew the Potion of the Turtle Master, which grants high resistance at the cost of movement speed."
    }
};
