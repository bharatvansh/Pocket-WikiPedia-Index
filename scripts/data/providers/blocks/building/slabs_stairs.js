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
        description: "Tuff Slab is the half-block variant of tuff introduced in Minecraft 1.21, providing builders with a low-profile alternative for creating detailed flooring, ceiling details, and subtle architectural features. This slab form takes up only half the height of a full block while maintaining the distinctive dark gray texture and properties of natural tuff. Tuff slabs can be crafted from tuff blocks using the standard slab recipe (three tuff blocks arranged horizontally in a crafting grid), making them an efficient way to create detailed builds with minimal resource waste. They generate naturally within Trial Chambers corridors, where they often appear as part of the structured floor and ceiling patterns. When placing tuff slabs, players can create smooth transitions between full-height walls and decorative elements, making them essential for sophisticated architectural projects that require both functionality and aesthetic appeal."
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
        description: "Polished Tuff Slab is the refined, half-block variant of polished tuff introduced in Minecraft 1.21, offering builders a smooth-textured alternative to regular tuff slabs for more sophisticated architectural designs. This slab form maintains the elegant, refined appearance of polished tuff while providing the space-efficient benefits of half-block construction. Polished tuff slabs can be efficiently crafted from polished tuff blocks using the standard slab recipe or created more precisely through stonecutting, which allows for precise control over quantities needed for large projects. They appear naturally in Trial Chambers as part of the structured interior design, often serving as decorative flooring accents and ceiling details that complement the smoother architectural elements found throughout the complex. These slabs are particularly valuable for creating seamless transitions between different building materials, detailed trim work, and sophisticated flooring patterns that require both the aesthetic appeal of polished surfaces and the practical benefits of half-block construction."
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
            yRange: "Trial Chambers"
        },
        description: "Tuff Brick Slab is the half-block variant of tuff bricks introduced in Minecraft 1.21, providing builders with a darker and more textured alternative to standard tuff slabs for detailed architectural work. This slab combines the distinctive bricked pattern of tuff bricks with the space-efficient nature of half-block construction, making it ideal for creating sophisticated flooring patterns, ceiling details, and decorative accents throughout builds. Tuff brick slabs can be crafted from tuff brick blocks using the standard slab recipe or obtained more efficiently through stonecutting, which allows precise control over the quantities needed for large-scale projects. They generate naturally within Trial Chambers as part of the structured interior design, often appearing alongside other tuff variants to create visual depth and architectural interest in hallways and rooms. When combined with other tuff family blocks, tuff brick slabs enable builders to create complex layered designs that showcase the full range of textures available in the tuff block palette, making them essential for sophisticated builds that require both aesthetic variety and practical construction flexibility."
    }
};
