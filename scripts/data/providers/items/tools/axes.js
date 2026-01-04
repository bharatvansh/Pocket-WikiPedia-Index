// Pocket Wikipedia Foundation - Axes Data
// ============================================
// This file contains: Wooden axe, stone axe, iron axe,
// golden axe, diamond axe, netherite axe
// ============================================

/**
 * Axe items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const axes = {
    "minecraft:netherite_axe": {
        id: "minecraft:netherite_axe",
        name: "Netherite Axe",
        maxStack: 1,
        durability: 2032,
        enchantable: true,
        usage: {
            primaryUse: "Fastest tool for breaking wood-based blocks",
            secondaryUse: "High-damage melee weapon and stripping logs"
        },
        combat: {
            attackDamage: 8,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Axe", "Netherite Ingot"]
        },
        specialNotes: [
            "Highest durability of all axes at 2032 points",
            "Highest mining speed for wood, pumpkins, and melons",
            "Can be used to strip logs or remove wax from copper by right-clicking",
            "On Bedrock Edition, it deals 8 damage (4 hearts), same as a Netherite Sword",
            "Does not burn in lava or fire if dropped",
            "Requires a Smithing Table to upgrade from a Diamond Axe"
        ],
        description: "The Netherite Axe is the most powerful and durable wood-cutting tool available in Minecraft Bedrock Edition. Crafted by upgrading a Diamond Axe with a Netherite Ingot and a Smithing Template, it offers unparalleled mining speed and 2032 durability points. Like other netherite equipment, it is resistant to fire and lava damage, remaining as a floating item if dropped in them. Beyond felling trees, it serves as a formidable melee weapon and can be used to strip bark from logs or scrape oxidation off copper blocks."
    }
};
