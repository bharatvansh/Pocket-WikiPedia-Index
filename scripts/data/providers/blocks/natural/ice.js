// Pocket Wikipedia Foundation - Ice Blocks Data
// ============================================
// This file contains: Ice, Packed Ice, Blue Ice, Frosted Ice
// ============================================

/**
 * Ice-type blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const iceBlocks = {
    "minecraft:blue_ice": {
        id: "minecraft:blue_ice",
        name: "Blue Ice",
        hardness: 2.8,
        blastResistance: 2.8,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Blue Ice"],
        generation: {
            dimension: "Overworld",
            yRange: "Frozen Ocean biomes (Icebergs) and Ancient Cities"
        },
        description: "Blue Ice is a solid, slippery block that naturally generates at the bottom of icebergs in Frozen Ocean biomes and within Ancient Cities. It is significantly more slippery than normal ice or packed ice, making it ideal for high-speed item transportation and boat travel. With a hardness of 2.8 and blast resistance of 2.8, it is significantly more durable than regular ice. Unlike normal ice, blue ice does not melt near light sources. It can be mined with any tool, but using a pickaxe is the fastest method. It can also be crafted by combining nine packed ice blocks."
    }
};
