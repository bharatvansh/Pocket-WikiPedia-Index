// Pocket Wikipedia Foundation - Concrete & Terracotta Blocks Data
// ============================================
// This file contains: Concrete (all 16 colors), concrete powder
// (all 16 colors), terracotta (unglazed), glazed terracotta
// (all 16 colors), stained terracotta (all 16 colors)
// ============================================

/**
 * Concrete and terracotta blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const concreteBlocks = {
    // Add concrete and terracotta block entries here
    "minecraft:white_concrete": {
        id: "minecraft:white_concrete",
        name: "White Concrete",
        hardness: 1.8,
        blastResistance: 1.8,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["White Concrete"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "White Concrete is a durable building block known for its solid, vibrant white color and smooth texture. It is formed when White Concrete Powder comes into contact with water, rain, or cauldron water. Unlike wool, it is not flammable, making it a safer choice for building structures. It requires a pickaxe to mine; otherwise, it drops nothing. It is widely used in modern architectural builds due to its clean appearance."
    },
    "minecraft:orange_concrete": {
        id: "minecraft:orange_concrete",
        name: "Orange Concrete",
        hardness: 1.8,
        blastResistance: 1.8,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Orange Concrete"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Orange Concrete is a vibrant building block with a solid, matte orange color and smooth texture. It is created when Orange Concrete Powder interacts with water. Unlike wool, it is not flammable, making it a safe and durable material for construction. With a hardness of 1.8, it requires a pickaxe to be mined effectively; otherwise, the block is lost. Its bold color makes it ideal for modern architecture, pixel art, and colorful accents in builds."
    },
    "minecraft:white_glazed_terracotta": {
        id: "minecraft:white_glazed_terracotta",
        name: "White Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["White Glazed Terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Underwater Ruins, Trail Ruins"
        },
        description: "White Glazed Terracotta is a decorative block with a unique, ornate pattern that can be rotated to create larger circular or geometric designs. It is obtained by smelting White Terracotta in a furnace. In Bedrock Edition, it generates naturally in underwater ruins and trail ruins. Unlike standard terracotta, it has a glossy finish and cannot be pushed by sticky pistons (they don't stick to it), making it useful for redstone machinery. It requires a pickaxe to mine and serves as a distinct, patterned building material."
    }
};
