// Pocket Wikipedia Foundation - Stone Blocks Data
// ============================================
// This file contains: Stone variants, deepslate variants, cobblestone,
// smooth stone, stone bricks, mossy variants, cracked variants,
// andesite, diorite, granite (and polished versions), tuff, calcite,
// dripstone, basalt, blackstone variants
// ============================================

/**
 * Stone-type blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const stoneBlocks = {
    "minecraft:stone": {
        id: "minecraft:stone",
        name: "Stone",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Cobblestone"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 320"
        },
        description: "Stone is a durable building material that requires a pickaxe to mine. It's commonly found underground and can be smelted from cobblestone. Stone is resistant to explosions and is often used for construction."
    },
    "minecraft:deepslate": {
        id: "minecraft:deepslate",
        name: "Deepslate",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Cobbled Deepslate"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 8"
        },
        description: "Deepslate is a harder variant of stone found in the deepest layers of the Overworld. It generates below Y-level 0 and becomes more common below Y-level -8. Deepslate takes twice as long to mine as stone and has a distinctive dark gray appearance with subtle cracks."
    }
};
