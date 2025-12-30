// Pocket Wikipedia Foundation - Special Food Data
// ============================================
// This file contains: Golden apple, enchanted golden apple,
// golden carrot, honey bottle, rotten flesh, spider eye,
// poisonous potato, ominous bottle
// ============================================

/**
 * Special food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const specialFood = {
    "minecraft:enchanted_golden_apple": {
        id: "minecraft:enchanted_golden_apple",
        name: "Enchanted Golden Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Powerful food with status effects",
            secondaryUse: "PvP and boss fights"
        },
        food: {
            hunger: 4,
            saturation: 9.6
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in dungeon, mineshaft, desert temple, and ancient city chests"]
        },
        specialNotes: [
            "Grants Absorption IV for 2 minutes (8 extra hearts)",
            "Grants Regeneration II for 20 seconds in Java, 30 seconds in Bedrock",
            "Grants Fire Resistance I for 5 minutes",
            "Grants Resistance I for 5 minutes",
            "Cannot be crafted - must be found in loot chests",
            "Extremely rare drop from structure exploration"
        ],
        description: "The Enchanted Golden Apple, also known as the 'Notch Apple' or 'God Apple', is the most powerful food item in Minecraft. It provides multiple powerful status effects including Absorption, Regeneration, Fire Resistance, and Resistance, making it invaluable for difficult combat situations. Unlike regular golden apples, it cannot be crafted and must be found in dungeon chests."
    }
};
