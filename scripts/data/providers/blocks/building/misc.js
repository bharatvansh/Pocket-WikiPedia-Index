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
    }
};
