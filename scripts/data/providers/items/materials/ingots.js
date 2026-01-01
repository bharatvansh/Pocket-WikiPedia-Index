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
            primaryUse: "Upgrading diamond gear to netherite tier at a smithing table",
            secondaryUse: "Crafting lodestones and beacons, and repairing netherite equipment"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Netherite Scrap x4", "Gold Ingot x4"]
        },
        specialNotes: [
            "Netherite gear has higher durability and damage than diamond",
            "Netherite items float in lava and are fire resistant",
            "Netherite Scrap is obtained by smelting Ancient Debris found in the Nether",
            "Ancient Debris must be mined with a Diamond or Netherite pickaxe",
            "Can be used to craft a Lodestone (8 ingots + 1 chiseled stone bricks)",
            "Can be used as beacon payment for status effects",
            "Netherite ingots can also be found in Bastion Remnant chests"
        ],
        description: "Netherite Ingots are the most valuable crafting material in Minecraft, obtained by combining four Netherite Scraps with four Gold Ingots. These rare ingots are used at a smithing table to upgrade diamond tools, weapons, and armor to the superior netherite tier, which provides enhanced durability, damage output, and the unique benefit of fire resistance. Unlike other materials, netherite items will float in lava rather than burning, making them invaluable for Nether exploration. Beyond upgrading gear, Netherite Ingots can repair netherite equipment at an anvil, craft Lodestones for compass navigation in any dimension, and serve as beacon fuel for powerful status effects."
    }
};
