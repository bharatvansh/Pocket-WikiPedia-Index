// Pocket Wikipedia Foundation - End Blocks Data
// ============================================
// This file contains: End stone, end stone bricks, purpur block,
// purpur pillar, purpur stairs, purpur slab, end rod, chorus plant,
// chorus flower, dragon egg, end portal frame, end gateway
// ============================================

/**
 * End dimension blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const endBlocks = {
    "minecraft:end_stone": {
        id: "minecraft:end_stone",
        name: "End Stone",
        hardness: 3.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["End Stone"],
        generation: {
            dimension: "The End",
            yRange: "Main island surface"
        },
        description: "End Stone is the primary building block that makes up the surface of the End dimension's main island. It has a distinctive tan-yellow color with small embedded particles that resemble stars or eyes. With a hardness of 3.0 and blast resistance of 9.0, it is significantly more durable than stone and can be mined with any pickaxe, though it takes longer without a proper tool. End Stone is used to craft end stone bricks and can be crafted into crafting tables, furnaces, and other utility blocks in the End. It's an essential material for building in the End dimension and provides excellent protection against the Ender Dragon's attacks due to its higher blast resistance compared to most Overworld blocks."
    },
    "minecraft:end_rod": {
        id: "minecraft:end_rod",
        name: "End Rod",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 14,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["End Rod"],
        generation: {
            dimension: "The End",
            yRange: "End Cities"
        },
        description: "End Rods are decorative light-emitting blocks that generate naturally in End Cities. They emit a light level of 14 and can be placed in any orientation, making them versatile for directional lighting designs. Crafted from one Blaze Rod and one Popped Chorus Fruit, they can be instantly mined with any tool or by hand. End Rods are particularly useful for modern builds and serve as a stylish alternative to torches, with their distinctive white glow and sleek rod design that fits well in futuristic or End-themed construction projects."
    },
    "minecraft:end_stone_bricks": {
        id: "minecraft:end_stone_bricks",
        name: "End Stone Bricks",
        hardness: 3.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["End Stone Bricks"],
        generation: {
            dimension: "The End",
            yRange: "End Cities"
        },
        description: "End Stone Bricks are crafted variants of end stone, created by placing four end stone blocks in a 2x2 crafting grid. They generate naturally in End Cities and serve as a durable building material with the same hardness (3.0) and blast resistance (9.0) as regular end stone. The distinctive tan color and brick texture provide excellent aesthetic variety for End-themed builds. Like other brick blocks, end stone bricks can be crafted into stairs, slabs, and walls using a stonecutter or crafting table, offering versatility for detailed architectural work in the End dimension."
    },
    "minecraft:purpur_block": {
        id: "minecraft:purpur_block",
        name: "Purpur Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Purpur Block"],
        generation: {
            dimension: "The End",
            yRange: null
        },
        description: "Purpur Block is a decorative purple stone-like block found exclusively in End Cities and End Ships. It can be crafted by placing four popped chorus fruit in a 2x2 grid, making it renewable. Purpur blocks come in several variants including stairs, slabs, pillars, and chiseled forms. With a hardness of 1.5 and blast resistance of 6.0, purpur blocks provide moderate durability while offering a unique purple aesthetic that fits the End dimension's color palette. They are essential building materials for players exploring the End and are commonly used in End-themed architecture."
    }
};
