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
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["End Stone"],
        generation: {
            dimension: "The End",
            yRange: "Surface layer"
        },
        description: "End Stone is the most abundant block in the End dimension, forming the entire surface of the void islands. It has a distinctive yellowish-beige color with a slightly porous texture. End Stone is highly blast-resistant, making it useful for defensive structures and mob-proof farms. It cannot be crafted but is plentiful in the End dimension. End Stone can be crafted into End Stone Bricks, which offer a smoother building alternative. In Bedrock Edition, Endermen can pick up and place End Stone, adding a dynamic element to building in this dimension. Its unique color palette makes it ideal for desert-themed or alien architectural designs."
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
    }
};
