// Pocket Wikipedia Foundation - Miscellaneous Building Blocks Data
// ============================================
// This file contains: Bookshelf and other miscellaneous building blocks
// ============================================

/**
 * Miscellaneous building blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const miscBuildingBlocks = {
    "minecraft:bookshelf": {
        id: "minecraft:bookshelf",
        name: "Bookshelf",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["3 Books (or itself with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Strongholds, Woodland Mansions"
        },
        description: "A Bookshelf is a decorative and functional block crafted from six wooden planks and three books. When placed near an Enchanting Table, bookshelves increase the maximum enchantment level available, requiring exactly 15 bookshelves arranged within two blocks to reach level 30 enchantments. Without Silk Touch, breaking a bookshelf drops three books rather than the block itself, making it a storage option for books. Bookshelves are flammable and naturally generate in villages, stronghold libraries, and woodland mansions, serving both aesthetic and practical purposes in builds."
    },
    "minecraft:dried_kelp_block": {
        id: "minecraft:dried_kelp_block",
        name: "Dried Kelp Block",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dried Kelp Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 9 dried kelp"
        },
        description: "A Dried Kelp Block is a decorative and functional block crafted from nine pieces of dried kelp. It serves as an incredibly efficient fuel source in furnaces, smelting up to 20 items per block—which is 2.5 times more than coal. Beyond its use as fuel, it can be used as a building material with a unique dark green, wrapped texture. It can also be placed in a composter, with a 50% chance to increase the compost level. Unlike some other bundled blocks, dried kelp blocks do not have a specific orientation when placed and appear identical from all sides."
    }
};
