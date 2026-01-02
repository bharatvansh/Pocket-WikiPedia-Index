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
    "minecraft:soul_sand": {
        id: "minecraft:soul_sand",
        name: "Soul Sand",
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
        drops: ["Soul Sand"],
        generation: {
            dimension: "Nether",
            yRange: "0-31 (Soul Sand Valley)"
        },
        description: "Soul Sand is a distinctive brown, bubbling sand block found primarily in the Nether, particularly in Soul Sand Valleys. Entities walking on soul sand are slowed to about 40% of their normal speed, making movement difficult, unless they are wearing boots enchanted with Soul Speed. The block is essential for farming Nether Warts, as it is the only block they can grow on. Soul sand also creates upward bubble columns when placed underwater, which can lift entities and boats to the surface. When broken by magma blocks below water, soul sand creates downward bubble columns. The block has a slightly lower height than most blocks, making it slightly difficult to walk up from. Soul sand is not affected by gravity, unlike regular sand, and it can burn indefinitely on its top side when exposed to fire, creating soul fire. Its distinctive texture and properties make it valuable for creating themed Nether builds, traps, and automated transportation systems."
    }
};
