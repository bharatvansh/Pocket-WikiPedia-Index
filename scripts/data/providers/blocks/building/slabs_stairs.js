// Pocket Wikipedia Foundation - Slabs & Stairs Blocks Data
// ============================================
// This file contains: All slab variants (wood, stone, brick, etc.),
// all stair variants (wood, stone, brick, etc.), walls (all types)
// ============================================

/**
 * Slabs, stairs, and walls blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const slabsStairsBlocks = {
    "minecraft:polished_tuff_stairs": {
        id: "minecraft:polished_tuff_stairs",
        name: "Polished Tuff Stairs",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Tuff Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Polished Tuff Stairs are the stair-shaped variant of polished tuff, introduced in Minecraft 1.21 as part of the Trial Chambers block palette. They are primarily used to create smooth staircases, sloped roofs, and detailed edging while keeping the same dark gray tone as other tuff variants. Polished tuff stairs can be crafted from polished tuff in the standard stair recipe or obtained more efficiently by stonecutting a polished tuff block. They also generate naturally in Trial Chambers, where they appear alongside other tuff and copper blocks in hallways and room details."
    },
    "minecraft:tuff_slab": {
        id: "minecraft:tuff_slab",
        name: "Tuff Slab",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Tuff Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Tuff Slabs are the half-block variant of tuff introduced in version 1.21. They provide a low-profile alternative for detailed flooring, ceilings, and architecture while keeping tuff's distinctive dark gray texture. Slabs are crafted by placing three tuff blocks horizontally in a crafting grid or by using a stonecutter. They generate naturally within Trial Chambers, often forming part of the corridors' floors and ceilings. Like other slabs, they can be placed in the top or bottom half of a block space or combined into a double slab, allowing for smooth architectural transitions."
    },
    "minecraft:polished_tuff_slab": {
        id: "minecraft:polished_tuff_slab",
        name: "Polished Tuff Slab",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Tuff Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Polished Tuff Slabs are refined half-block variants of polished tuff introduced in 1.21. They feature a smooth texture ideal for sophisticated architectural designs. Slabs are crafted from polished tuff blocks or produced efficiently via a stonecutter. They generate naturally in Trial Chambers as decorative flooring and ceiling accents. These blocks are valuable for creating seamless transitions, detailed trim, and intricate patterns that require both the polished aesthetic and the utility of half-blocks."
    },
    "minecraft:tuff_brick_slab": {
        id: "minecraft:tuff_brick_slab",
        name: "Tuff Brick Slab",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Tuff Brick Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted / Stonecutting (Trial Chambers palette)"
        },
        description: "The Tuff Brick Slab is the slab variant of tuff bricks, introduced in Minecraft 1.21 for the Trial Chambers block palette. It can be crafted from three tuff bricks or made in a stonecutter from tuff, polished tuff, or tuff bricks. In Bedrock Edition it is waterloggable and drops only when mined with a pickaxe, making it a sturdy half-block for floors, ceilings, and trim."
    },
    "minecraft:tuff_brick_stairs": {
        id: "minecraft:tuff_brick_stairs",
        name: "Tuff Brick Stairs",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Tuff Brick Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted / Stonecutting (Trial Chambers palette)"
        },
        description: "Tuff Brick Stairs are the stair-shaped variant of tuff bricks introduced in Minecraft 1.21. They are crafted from tuff bricks in the standard stair recipe or obtained via a stonecutter from tuff, polished tuff, or tuff bricks. In Bedrock Edition they are waterloggable and require a pickaxe to drop, offering rugged, dark gray steps for staircases, roofs, and detailed edging."
    },
    "minecraft:tuff_brick_wall": {
        id: "minecraft:tuff_brick_wall",
        name: "Tuff Brick Wall",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Tuff Brick Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted / Stonecutting (Trial Chambers palette)"
        },
        description: "The Tuff Brick Wall is the wall variant of tuff bricks added in Minecraft 1.21. It is crafted from six tuff bricks or made in a stonecutter from tuff, polished tuff, or tuff bricks, and it connects to form railings and borders. In Bedrock Edition it is waterloggable and drops only when mined with a pickaxe, giving builders a dark, brick-textured barrier for courtyards and dungeon builds."
    }
};
