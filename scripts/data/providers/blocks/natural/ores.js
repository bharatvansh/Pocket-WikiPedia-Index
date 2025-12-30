// Pocket Wikipedia Foundation - Ore Blocks Data
// ============================================
// This file contains: All ore variants (stone and deepslate versions),
// coal ore, iron ore, copper ore, gold ore, redstone ore,
// lapis lazuli ore, diamond ore, emerald ore, nether gold ore,
// nether quartz ore, ancient debris
// ============================================

/**
 * Ore blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const oreBlocks = {
    "minecraft:copper_ore": {
        id: "minecraft:copper_ore",
        name: "Copper Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Copper (2-5)"],
        generation: {
            dimension: "Overworld",
            yRange: "-16 to 112"
        },
        description: "Copper Ore is a common ore found in the Overworld that drops raw copper when mined. It can be smelted into copper ingots, which are used to craft various copper blocks, lightning rods, and spyglasses. Copper blocks naturally oxidize over time, changing from orange to green."
    }
};
