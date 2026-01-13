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
    "minecraft:golden_axe": {
        id: "minecraft:golden_axe",
        name: "Golden Axe",
        maxStack: 1,
        durability: 33,
        enchantable: true,
        usage: {
            primaryUse: "Chopping wood at maximum speed",
            secondaryUse: "Melee combat (weak)"
        },
        combat: {
            attackDamage: 3,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x3", "Stick x2"]
        },
        specialNotes: [
            "Fastest axe for chopping wood",
            "Extremely low durability (33 uses)",
            "Deals 3 attack damage (1.5 hearts)",
            "High enchantability"
        ],
        description: "The Golden Axe is the fastest tool for chopping wood and related blocks in Minecraft, surpassing all other axes in speed. However, this efficiency is hindered by its extremely low durability of 33 uses, making it impractical for large-scale deforestation. In Bedrock Edition, it deals 3 points of damage (1.5 hearts), which is significantly lower than its Java Edition counterpart and even weaker than a wooden sword. It is crafted using three Gold Ingots and two Sticks."
    },
    "minecraft:iron_axe": {
        id: "minecraft:iron_axe",
        name: "Iron Axe",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Chopping wood and wood-based blocks efficiently",
            secondaryUse: "Melee combat weapon"
        },
        combat: {
            attackDamage: 5,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x3", "Stick x2"]
        },
        specialNotes: [
            "Deals 5 attack damage (2.5 hearts) in Bedrock Edition",
            "Has 251 durability, making it a good mid-game tool",
            "Can be used to strip logs by right-clicking them",
            "In Bedrock Edition, axes do less damage than swords of the same tier",
            "Can receive Efficiency, Unbreaking, Fortune, or Silk Touch enchantments"
        ],
        description: "The Iron Axe is a durable and efficient tool for gathering wood and related blocks. Crafted with three iron ingots and two sticks, it provides a significant upgrade over stone axes in terms of mining speed and durability. In Bedrock Edition, it deals 5 points of damage, which is less than an iron sword, distinguishing its combat role from the Java Edition version. It also possesses the utility to strip logs for decorative purposes and can be enchanted to further enhance its gathering capabilities."
    },
    "minecraft:diamond_axe": {
        id: "minecraft:diamond_axe",
        name: "Diamond Axe",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "Chopping wood and wood-based blocks efficiently",
            secondaryUse: "High-damage melee weapon"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x3", "Stick x2"]
        },
        specialNotes: [
            "Deals 7 attack damage (3.5 hearts) in Bedrock Edition",
            "Has 1562 durability",
            "Can be used to strip logs by right-clicking them",
            "Can receive Efficiency, Unbreaking, Fortune, or Silk Touch enchantments"
        ],
        description: "The Diamond Axe is a high-tier tool used for chopping wood and related blocks. It offers a significant durability upgrade over iron, lasting for 1562 uses. In Bedrock Edition, it deals 7 points of damage, making it a viable weapon, though slightly weaker than a diamond sword. It can be upgraded to a Netherite Axe using a Smithing Table."
    },
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
