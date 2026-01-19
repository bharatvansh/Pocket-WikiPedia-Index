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
    "minecraft:white_concrete_powder": {
        id: "minecraft:white_concrete_powder",
        name: "White Concrete Powder",
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
        drops: ["White Concrete Powder"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "White Concrete Powder is a colorful, gravity-affected block introduced in the 1.12 update of Bedrock Edition. It is crafted from a combination of sand, gravel, and white dye. When it comes into contact with water (including water sources, flowing water, or rain), it instantly solidifies into White Concrete, a smooth and vibrant building material. This transition is essential for creating clean-looking modern structures. Due to its gravity-affected property, it can be used in various falling-block traps or mechanisms, though its primary use remains as a precursor to concrete."
    }
};
