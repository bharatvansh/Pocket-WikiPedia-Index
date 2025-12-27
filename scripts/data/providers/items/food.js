// Pocket Wikipedia Foundation - Food Data
// Contains data for food/consumable items

/**
 * Food data registry
 * @type {Object.<string, import('../item_types').ItemDetails>}
 */
export const food = {
    "minecraft:apple": {
        id: "minecraft:apple",
        name: "Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food (restores 4 hunger)",
            secondaryUse: "Crafting Golden Apples"
        },
        crafting: {
            recipeType: "N/A",
            ingredients: ["Found naturally"]
        },
        specialNotes: [
            "Restores 2.4 saturation points",
            "Can drop from Oak and Dark Oak leaves"
        ],
        description: "Apples are a common food source that can be found in chests or obtained from oak trees. They restore 4 hunger points and 2.4 saturation points when eaten. Apples can also be crafted into golden apples for more powerful effects."
    },
    "minecraft:enchanted_golden_apple": {
        id: "minecraft:enchanted_golden_apple",
        name: "Enchanted Golden Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food with powerful status effects",
            secondaryUse: "Emergency healing and protection"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests"]
        },
        specialNotes: [
            "Restores 4 hunger points",
            "Provides Regeneration II for 20 seconds",
            "Provides Absorption IV for 2 minutes",
            "Provides Fire Resistance I for 5 minutes",
            "Provides Resistance I for 5 minutes",
            "Extremely rare, found in dungeons, desert temples, mineshafts, and bastions"
        ],
        description: "The Enchanted Golden Apple, also known as a Notch Apple, is an extremely rare and powerful food item. It provides multiple beneficial status effects including regeneration, absorption, fire resistance, and damage resistance. Unlike regular golden apples, it cannot be crafted and must be found in loot chests throughout the world."
    }
};
