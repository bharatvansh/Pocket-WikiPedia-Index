// Pocket Wikipedia Foundation - Ingots & Raw Materials Data
// ============================================
// This file contains: Iron ingot, gold ingot, copper ingot,
// netherite ingot, netherite scrap, raw iron, raw gold, raw copper,
// iron nugget, gold nugget
// ============================================

/**
 * Ingot and raw material items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const ingots = {
    "minecraft:netherite_ingot": {
        id: "minecraft:netherite_ingot",
        name: "Netherite Ingot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Upgrading diamond equipment to netherite in a smithing table",
            secondaryUse: "Crafting Blocks of Netherite and applying armor trims"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["4x Netherite Scrap", "4x Gold Ingot"]
        },
        specialNotes: [
            "Immune to fire and lava - will float on top of lava if dropped",
            "Used with a Netherite Upgrade Smithing Template to upgrade diamond gear",
            "Preserves enchantments, durability, and custom names when upgrading items",
            "Required to create the highest tier of tools and armor in the game",
            "Can be used as a beacon base or to power a beacon"
        ],
        description: "The Netherite Ingot is an extremely rare and powerful crafting material used to create the strongest equipment available in Minecraft. Unlike most items, netherite ingots and all gear made from them are completely fire-resistant and will float safely on the surface of lava if dropped. To obtain a single ingot, players must combine four netherite scraps, obtained by smelting ancient debris found deep within the Nether, with four gold ingots in a shapeless crafting recipe. Using a Smithing Table, players can use these ingots along with a Netherite Upgrade Smithing Template to transform diamond tools, weapons, and armor into their netherite counterparts, significantly increasing their durability, efficiency, and knockback resistance while retaining all existing enchantments."
    }
};
