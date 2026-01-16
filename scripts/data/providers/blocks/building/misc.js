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
    },
    "minecraft:hay_block": {
        id: "minecraft:hay_block",
        name: "Hay Bale",
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
        drops: ["Hay Bale"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Pillager Outposts"
        },
        description: "A Hay Bale is a decorative and functional block crafted from nine wheat or found naturally in villages and pillager outposts. It is unique for its ability to reduce fall damage by 80% when landed on, making it a lifesaver in parkour or high-altitude builds. Hay bales can be used to feed horses, llamas, and donkeys to heal them or speed up the growth of foals, and are required to breed llamas. When placed under a campfire, they increase the smoke height significantly, which is useful for signaling. They are flammable and orientable like logs."
    },
    "minecraft:white_terracotta": {
        id: "minecraft:white_terracotta",
        name: "White Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["White Terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands, Plains Villages"
        },
        description: "White Terracotta is a smooth, dyed clay block with a subtle off-white or creamy tint. It is primarily found in the Badlands biome or as a building material in plains villages. Crafted by smelting clay blocks into terracotta and then dyeing them with white dye, it provides a clean, matte finish that is highly valued for modern and minimalist builds. In Bedrock Edition, it requires a pickaxe to harvest; breaking it by hand yields no drops. Its high blast resistance compared to other decorative blocks like wool makes it a durable choice for colorful constructions."
    },
    "minecraft:orange_terracotta": {
        id: "minecraft:orange_terracotta",
        name: "Orange Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Orange Terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands, Savanna Villages"
        },
        description: "Orange Terracotta is a vibrant, earth-toned block found abundantly in the Badlands biome and occasionally in savanna village houses. It is created by smelting clay and applying orange dye, or found naturally in massive strata. It features a warm, orange-brown hue that fits perfectly with desert or Mediterranean-style architecture. Like all terracotta variants, it has a hardness of 1.25 and requires a pickaxe for collection. Its matte texture is distinct from the glossy look of concrete, providing a more natural feel to builds. It can also be further smelted into orange glazed terracotta."
    }
};
