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
    "minecraft:basalt": {
        id: "minecraft:basalt",
        name: "Basalt",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Basalt"],
        generation: {
            dimension: "Nether",
            yRange: "Y-level 0 to 90; Basalt Deltas"
        },
        description: "Basalt is a dark, fine-grained volcanic rock that generates in the Nether, particularly in the Basalt Deltas biome. It forms natural pillars and columns that can extend from Y=0 to Y=90, creating unique vertical formations. Basalt can be mined with any pickaxe and drops itself without Silk Touch, making it easily accessible. It serves as a building material with a polished variant for aesthetic variety. Unlike stone, basalt cannot be crafted into stairs or slabs, but it can be placed on its side, creating interesting patterns for builders seeking a dark, stone-like appearance."
    }
};
