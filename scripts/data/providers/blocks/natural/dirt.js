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
    },
    "minecraft:mud": {
        id: "minecraft:mud",
        name: "Mud",
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
        drops: ["Mud"],
        generation: {
            dimension: "Overworld",
            yRange: "Mangrove Swamp Biome"
        },
        description: "Mud is a decorative block found naturally in mangrove swamps. It can also be created by using a water bottle on a dirt block. When placed on top of a block with pointed dripstone underneath, it eventually dries out and converts into clay. It slightly sinks entities that walk on it, similar to soul sand but without the slowing effect."
    },
    "minecraft:packed_mud": {
        id: "minecraft:packed_mud",
        name: "Packed Mud",
        hardness: 1.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Packed Mud"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Packed Mud is a building block crafted from mud and wheat. It is used as a decorative block or as an ingredient to craft mud bricks. Unlike regular mud, entities do not sink into packed mud, and it is mined faster with a pickaxe rather than a shovel."
    },
    "minecraft:suspicious_sand": {
        id: "minecraft:suspicious_sand",
        name: "Suspicious Sand",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: true,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Desert Pyramids, Desert Wells, and Warm Ocean Ruins"
        },
        description: "Suspicious sand is a fragile, gravity-affected block found in various structures like desert pyramids and warm ocean ruins. Using a brush on naturally generated suspicious sand reveals hidden items, such as pottery sherds, emeralds, or sniffer eggs. Once the brushing process is complete, the block turns into regular sand, and if broken or moved by a piston, it drops nothing."
    }
};
