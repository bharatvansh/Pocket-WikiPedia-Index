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
            "Can be used as payment to power or activate a beacon"
        ],
        description: "Netherite Ingots are rare materials used to create Minecraft's strongest gear. Both the ingots and items made from them are fire-resistant and float on lava. To craft one, combine four netherite scraps (smelted from ancient debris) with four gold ingots. At a Smithing Table, use an ingot and a Netherite Upgrade Template to transform diamond tools and armor into netherite versions. This increases durability, efficiency, and knockback resistance while preserving existing enchantments."
    },
    "minecraft:netherite_scrap": {
        id: "minecraft:netherite_scrap",
        name: "Netherite Scrap",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Netherite Ingots",
            secondaryUse: "Used as a rare material for late-game progression"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Ancient Debris", "Fuel (Furnace or Blast Furnace)"]
        },
        specialNotes: [
            "Obtained by smelting Ancient Debris found deep in the Nether",
            "Completely immune to fire and lava damage",
            "Four scraps combined with four gold ingots create one Netherite Ingot",
            "Non-renewable resource found at Y levels 8-22 in Bedrock Edition",
            "Found in Bastion Remnant chests (approx. 15-25% chance)"
        ],
        description: "Netherite Scrap is an incredibly rare and durable material found in the depths of the Nether. It is produced by smelting Ancient Debris, a tough ore that only generates in small veins near the bottom of the dimension. Because it is a Netherite-tier material, it is entirely immune to fire and lava, floating on top of lava pools instead of burning. Its sole purpose is to be combined with gold ingots to create Netherite Ingots, which are essential for upgrading diamond gear to the highest level of protection and efficiency."
    }
};
