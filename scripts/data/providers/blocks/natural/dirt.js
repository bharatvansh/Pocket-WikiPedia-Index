// Pocket Wikipedia Foundation - Dirt & Soil Blocks Data
// ============================================
// This file contains: Dirt, coarse dirt, rooted dirt, grass block,
// podzol, mycelium, mud, packed mud, muddy mangrove roots,
// clay, gravel, sand, red sand, soul sand, soul soil,
// farmland, dirt path
// ============================================

/**
 * Dirt and soil blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const dirtBlocks = {
    "minecraft:dirt": {
        id: "minecraft:dirt",
        name: "Dirt",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dirt"],
        generation: {
            dimension: "Overworld",
            yRange: "0-256"
        },
        description: "Dirt is one of the most common blocks in Minecraft. It can be easily dug up with a shovel and is often found in large quantities near the surface. Dirt can be converted to farmland or used as a building material."
    }
};
