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
    "minecraft:tuff_stairs": {
        id: "minecraft:tuff_stairs",
        name: "Tuff Stairs",
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
        drops: ["Tuff Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Tuff Stairs are the stair-shaped variant of tuff. They can be crafted from tuff using the standard stair recipe or made more efficiently in a stonecutter. In Bedrock Edition they are waterloggable, and their stair shape makes them useful for compact staircases, roof slopes, and detailed trim while keeping the same dark gray tuff palette."
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
    "minecraft:resin_brick_stairs": {
        id: "minecraft:resin_brick_stairs",
        name: "Resin Brick Stairs",
        hardness: 2.0,
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
        drops: ["Resin Brick Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Resin Bricks"
        },
        description: "Resin Brick Stairs are a stair block variant made from Resin Bricks, introduced in Minecraft 1.21.50. They feature a distinctive warm, orange-toned brick texture. Like other stairs, they allow entities to change elevation without jumping and can be used for roofs, detailed walls, and corner connections. They are crafted using 6 Resin Bricks in a stair pattern or by using a Stonecutter. These stairs are part of the resin block family, which also includes blocks, slabs, walls, and chiseled variants."
    },
    "minecraft:polished_tuff_wall": {
        id: "minecraft:polished_tuff_wall",
        name: "Polished Tuff Wall",
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
        drops: ["Polished Tuff Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Polished Tuff Wall is a decorative barrier block introduced in Minecraft 1.21. Crafted from six polished tuff blocks in a crafting table or via a stonecutter, it shares the smooth, dark gray aesthetic of the polished tuff family. Like other walls, it can be used to create fences, parapets, and complex architectural details. It connects to adjacent walls and blocks, making it versatile for structural designs. It generates naturally in Trial Chambers and requires a wooden pickaxe or better to mine."
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
        description: "Tuff Brick Slab is a half-block variant of tuff bricks, introduced in Minecraft 1.21. It features the distinct brick pattern of tuff bricks but in a slab form, perfect for detailed flooring, steps, and roofing. Crafted from three tuff bricks in a row or using a stonecutter, it allows for more precise building and decoration without the bulk of full blocks. These slabs generate naturally in Trial Chambers and require a wooden pickaxe or better to be mined."
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
            yRange: "Trial Chambers"
        },
        description: "Tuff Brick Stairs are the stair variant of tuff bricks, introduced in Minecraft 1.21. They allow for smooth elevation changes and detailed architectural features like roofs and corner trims, maintaining the rugged brick aesthetic of the tuff family. Crafted from six tuff bricks or via a stonecutter, they are essential for cohesive builds using tuff materials. They generate naturally in Trial Chambers and can be waterlogged, adding to their versatility in various building styles."
    },
    "minecraft:pale_oak_slab": {
        id: "minecraft:pale_oak_slab",
        name: "Pale Oak Slab",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "Pale Oak Slab is a half-block building component crafted from Pale Oak Planks, introduced in Minecraft 1.21.50. It features the same muted, ghostly wood texture as the planks, allowing for detailed construction in Pale Garden builds. Slabs can be placed in the upper or lower half of a block space and are essential for flooring, roofing, and smooth elevation changes. They can be crafted in a crafting table or using a stonecutter."
    },
    "minecraft:resin_brick_slab": {
        id: "minecraft:resin_brick_slab",
        name: "Resin Brick Slab",
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
        drops: ["Resin Brick Slab"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Resin Bricks"
        },
        description: "Resin Brick Slab is a half-block variant of Resin Bricks, introduced in Minecraft 1.21.50. It allows for more precise building and decoration with the distinctive warm, orange-toned brick texture of resin. Crafted from three Resin Bricks in a row or using a stonecutter, it is perfect for flooring, steps, and roofing. Like other resin brick blocks, it is durable and blast-resistant, serving as a key component in the resin block family."
    },
    "minecraft:mud_brick_stairs": {
        id: "minecraft:mud_brick_stairs",
        name: "Mud Brick Stairs",
        hardness: 1.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Mud Brick Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Mud Bricks"
        },
        description: "Mud Brick Stairs are the stair-shaped variant of mud bricks, introduced in 1.19's Wild Update. They offer a warm, earthy-brown aesthetic that is perfect for desert, swamp, or rustic-themed builds. Crafted from six mud bricks or via a stonecutter, they allow for smooth vertical transitions and detailed roofing. While they have relatively low blast resistance compared to stone stairs, they provide a unique texture that bridges the gap between wood and stone. They can be waterlogged and placed in various orientations to create complex architectural details."
    }
};
