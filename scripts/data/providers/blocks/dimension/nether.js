// Pocket Wikipedia Foundation - Nether Blocks Data
// ============================================
// This file contains: Netherrack, nether bricks, red nether bricks,
// nether wart block, warped wart block, crimson nylium, warped nylium,
// crimson stem, warped stem, shroomlight, basalt, smooth basalt,
// polished basalt, blackstone variants, gilded blackstone,
// soul sand, soul soil, magma block, glowstone
// ============================================

/**
 * Nether dimension blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const netherBlocks = {
    "minecraft:magma": {
        id: "minecraft:magma",
        name: "Magma Block",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 3,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Magma Block"],
        generation: {
            dimension: "Nether",
            yRange: "All Y-levels"
        },
        description: "A light-emitting naturally-occurring block found in the Nether and the Overworld. It causes continuous fire damage to entities standing on it, except for those with fire resistance or frost walker boots. It creates downward bubble columns when placed underwater."
    },
    "minecraft:blackstone": {
        id: "minecraft:blackstone",
        name: "Blackstone",
        hardness: 1.5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Blackstone"],
        generation: {
            dimension: "Nether",
            yRange: "Basalt deltas, underground (Y 5-36), and bastion remnants"
        },
        description: "Blackstone is a dark gray stone-like block introduced in Minecraft 1.16, found naturally in the Nether. It generates abundantly in basalt deltas, below lava seas, underground, and in bastion remnants. Piglins can barter 8-16 blackstone blocks when given gold ingots. Blackstone substitutes for cobblestone in many crafting recipes including stone tools, furnaces, and brewing stands. It can be crafted into polished blackstone, bricks, and decorative forms. With hardness of 1.5 and blast resistance of 6, blackstone provides excellent building material with a unique dark aesthetic."
    }
};
