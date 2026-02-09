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
            yRange: "Trial Chambers"
        },
        description: "Tuff Brick Walls are decorative barrier blocks introduced in Minecraft 1.21. Crafted from Tuff Bricks, they feature a sophisticated dark gray, masonry-style texture that matches the Trial Chambers' aesthetic. These walls connect to each other and surrounding blocks, forming a continuous barrier that is 1.5 blocks high for most entities. They generate naturally in Trial Chambers and can be crafted using six Tuff Bricks or a stonecutter. Their rugged, stone-brick appearance makes them excellent for defensive perimeters, dungeon-themed builds, and modern industrial designs."
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
    "minecraft:resin_brick_wall": {
        id: "minecraft:resin_brick_wall",
        name: "Resin Brick Wall",
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
        drops: ["Resin Brick Wall"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Resin Brick Walls are decorative barrier blocks introduced in the Minecraft 1.21.50 Winter Drop. Crafted from six Resin Bricks or via a stonecutter, they feature a vibrant orange-brown texture that matches the resin block family. These walls can be used to create detailed boundaries, railings, and architectural accents while providing the same durability as full resin bricks. Like other stone-type walls, they connect to adjacent blocks and walls, making them versatile for structural designs in warm-toned builds."
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
    },
    "minecraft:bamboo_stairs": {
        id: "minecraft:bamboo_stairs",
        name: "Bamboo Stairs",
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
        drops: ["Bamboo Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Planks"
        },
        description: "Bamboo Stairs are a building block crafted from bamboo planks, introduced in Minecraft 1.20 as part of the bamboo wood set. They feature a unique 'woven' texture distinct from traditional wood planks, offering a tropical or oriental aesthetic to structures. Like other stairs, they allow for smooth elevation changes and can be used for detailed roofing and trim. They are flammable and can be broken most efficiently with an axe. Bamboo stairs are also waterloggable, making them versatile for various architectural and landscape designs."
    },
    "minecraft:bamboo_slab": {
        id: "minecraft:bamboo_slab",
        name: "Bamboo Slab",
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
        drops: ["Bamboo Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Planks"
        },
        description: "Bamboo Slab is a half-block variant of bamboo planks, featuring the same distinctive yellow-tan woven texture. It provides a low-profile building option for floors, ceilings, and intricate architectural details. Crafted by placing three bamboo planks horizontally or using a stonecutter, it is an essential part of the bamboo wood family. Bamboo slabs are flammable and can be combined into double slabs or placed in the top half of a block space. They offer a unique natural look that complements tropical, rustic, and modern builds effortlessly."
    },
    "minecraft:mangrove_slab": {
        id: "minecraft:mangrove_slab",
        name: "Mangrove Slab",
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
        drops: ["Mangrove Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A"
        },
        description: "Mangrove Slab is a half-block variant of Mangrove planks. It allows for more precise elevation changes and detailed architectural features while maintaining the rich, deep red aesthetic of Mangrove wood. It is crafted from three Mangrove planks or via a stonecutter in the standard recipe. Like other wooden slabs, it is flammable and can be waterlogged, providing versatility for various building styles from swampy docks to sophisticated interior flooring."
    },
    "minecraft:red_sandstone_slab": {
        id: "minecraft:red_sandstone_slab",
        name: "Red Sandstone Slab",
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
        drops: ["Red Sandstone Slab"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Red Sandstone Slabs are half-block variants of red sandstone, offering versatile building options for floors, ceilings, and roofs. They provide a compact way to create smooth elevation changes without the bulk of a full block. These slabs can be crafted from red sandstone blocks or produced efficiently using a stonecutter. Because they are stone-based, they are fire-resistant and provide moderate protection against explosions. They can be placed in the upper or lower half of a block or combined into a double slab."
    },
    "minecraft:cut_red_sandstone_slab": {
        id: "minecraft:cut_red_sandstone_slab",
        name: "Cut Red Sandstone Slab",
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
        drops: ["Cut Red Sandstone Slab"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Cut Red Sandstone Slab is a refined half-block building component crafted from cut red sandstone. It features the same vibrant orange-red color as regular red sandstone but with a smoother, more uniform 'cut' texture. These slabs are essential for creating detailed architectural trim, smooth elevation changes, and sophisticated flooring in mesa or desert-themed builds. In Bedrock Edition, they are fire-resistant and require a pickaxe of wooden tier or higher to drop as an item. They can be produced efficiently using a stonecutter."
    },
    "minecraft:red_sandstone_wall": {
        id: "minecraft:red_sandstone_wall",
        name: "Red Sandstone Wall",
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
        drops: ["Red Sandstone Wall"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Red Sandstone Wall is a decorative masonry block crafted from Red Sandstone. It features the same vibrant orange-red color as the base block and provides a sturdy, 1.5-block high barrier that prevents most mobs from jumping over. These walls connect to each other and adjacent blocks, making them versatile for creating perimeters, railings, and architectural details in mesa or desert-themed builds. They can be crafted using six Red Sandstone blocks or more efficiently via a stonecutter."
    },
    "minecraft:smooth_stone_slab": {
        id: "minecraft:smooth_stone_slab",
        name: "Smooth Stone Slab",
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
        drops: ["Smooth Stone Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only or Villages"
        },
        description: "Smooth Stone Slabs are the half-block variant of smooth stone. They feature a clean, light gray surface with a distinct border, making them a popular choice for flooring and architectural detailing. They were originally one of the 'seamless' double slabs in Bedrock Edition. They can be obtained by smelting stone slabs in a furnace or more commonly by crafting them from smooth stone blocks. They also generate naturally in certain village houses, particularly those of butchers."
    },
    "minecraft:smooth_sandstone_slab": {
        id: "minecraft:smooth_sandstone_slab",
        name: "Smooth Sandstone Slab",
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
        drops: ["Smooth Sandstone Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Smooth Sandstone Slabs are half-block versions of smooth sandstone. They have a refined, uniform appearance compared to regular sandstone slabs, lacking the layered texture and featuring a smooth yellow-tan color. They are crafted from smooth sandstone blocks or can be made directly in a stonecutter. Their clean aesthetic makes them excellent for desert-themed builds, interior flooring, and smooth architectural transitions where a warm tone is desired."
    },
    "minecraft:smooth_red_sandstone_slab": {
        id: "minecraft:smooth_red_sandstone_slab",
        name: "Smooth Red Sandstone Slab",
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
        drops: ["Smooth Red Sandstone Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Smooth Red Sandstone Slabs are the half-block variant of smooth red sandstone. They provide a sleek, vibrant orange-red surface that is much more uniform than regular red sandstone. These slabs are crafted from smooth red sandstone blocks or created using a stonecutter. They are perfect for adding detailed trim, smooth slopes, and elegant flooring to mesa-inspired builds or any architecture where a bold, warm color palette is needed without the rugged texture of natural sandstone."
    },
    "minecraft:oak_stairs": {
        id: "minecraft:oak_stairs",
        name: "Oak Stairs",
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
        drops: ["Oak Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Shipwrecks, Mineshafts, Strongholds"
        },
        description: "Oak Stairs are a common building block crafted from Oak Planks. They allow for smooth elevation changes without jumping and are frequently used for roofs, chairs, and decorative trim. They can be waterlogged and placed in various orientations, including upside down. Oak wood is the most abundant wood type in Minecraft, making these stairs a staple in early-game construction and village architecture. They are flammable and can be broken most efficiently with an axe."
    },
    "minecraft:spruce_stairs": {
        id: "minecraft:spruce_stairs",
        name: "Spruce Stairs",
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
        drops: ["Spruce Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga Villages, Shipwrecks, Igloos"
        },
        description: "Spruce Stairs are crafted from Spruce Planks and feature a dark, rustic brown tone. Popular in medieval and cabin-style builds, they offer a cozy aesthetic compared to the lighter oak variant. Like all stairs, they are waterloggable and can be placed in multiple directions to create complex shapes like corners and eaves. They naturally generate in Taiga villages and shipwreck structures. Being a wood product, they are flammable and are best harvested using an axe."
    },
    "minecraft:stone_stairs": {
        id: "minecraft:stone_stairs",
        name: "Stone Stairs",
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
        drops: ["Stone Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Stone Stairs are a stair-shaped building block crafted from regular stone. They allow players and mobs to change elevation smoothly without jumping, making them ideal for staircases, roofs, and decorative architectural trim. In Bedrock Edition, they provide a clean, gray aesthetic that matches natural stone environments and stone-based structures. They can be crafted using six stone blocks in a crafting table or more efficiently created via a stonecutter. Like other stone-based variants, they are fire-resistant and possess a blast resistance of 6.0."
    },
    "minecraft:birch_stairs": {
        id: "minecraft:birch_stairs",
        name: "Birch Stairs",
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
        drops: ["Birch Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages (occasional), Shipwrecks"
        },
        description: "Birch Stairs are a light-colored wood building block made from Birch Planks. Their pale, almost white appearance makes them ideal for modern architectural designs, bright interiors, and highlighting dark areas. They share the same functional properties as other wooden stairs, including the ability to be waterlogged and placed upside down. While less common in natural structures than oak or spruce, they are a favorite among players for clean and minimalist aesthetics."
    },
    "minecraft:jungle_stairs": {
        id: "minecraft:jungle_stairs",
        name: "Jungle Stairs",
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
        drops: ["Jungle Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle Temples, Shipwrecks"
        },
        description: "Jungle Stairs are crafted from Jungle Planks and possess a unique pinkish-tan hue. They are most commonly found in Jungle Temples and shipwrecked vessels. These stairs are perfect for tropical-themed builds and complement other jungle-derived materials like vines and bamboo. They provide the standard stair utility, allowing for seamless vertical movement and versatile decorative applications. Like other wood variants, they are flammable and can be mined with any tool, though an axe is preferred."
    },
    "minecraft:acacia_stairs": {
        id: "minecraft:acacia_stairs",
        name: "Acacia Stairs",
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
        drops: ["Acacia Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Savanna Villages, Shipwrecks"
        },
        description: "Acacia Stairs are vibrant orange-colored stairs crafted from Acacia Planks. They naturally occur in Savanna villages, where they form roofs and seating for the unique local architecture. Their bold color makes them a standout choice for high-contrast builds and desert-themed landscaping. Acacia stairs are waterloggable and can be used to create intricate rooflines or detailed wall patterns. They are flammable and are most quickly broken using an axe."
    },
    "minecraft:prismarine_stairs": {
        id: "minecraft:prismarine_stairs",
        name: "Prismarine Stairs",
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
        drops: ["Prismarine Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "Prismarine Stairs are a decorative block variant of prismarine, primarily used for underwater or aquatic-themed construction. Introduced in the 1.8 update, they feature the same animated blue-green texture as regular prismarine blocks. They can be crafted using six prismarine blocks or processed through a stonecutter for better efficiency. Like other stairs, they are waterloggable and can be placed in various orientations to create complex shapes. Their color and texture make them ideal for building monuments, temples, and detailed ocean floor structures."
    },
    "minecraft:dark_prismarine_stairs": {
        id: "minecraft:dark_prismarine_stairs",
        name: "Dark Prismarine Stairs",
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
        drops: ["Dark Prismarine Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "Dark Prismarine Stairs are the darkened variant of prismarine stairs, crafted from dark prismarine. They offer a deep teal-cyan color that provides a striking contrast in builds, especially in aquatic environments. Like other prismarine variants, they are moderately durable and blast-resistant. They are frequently used in ocean monuments and high-end underwater bases for their smooth, dark aesthetic. They can be crafted in a crafting table or more efficiently using a stonecutter. Their ability to be waterlogged allows them to blend seamlessly into submerged architecture."
    },
    "minecraft:prismarine_brick_stairs": {
        id: "minecraft:prismarine_brick_stairs",
        name: "Prismarine Brick Stairs",
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
        drops: ["Prismarine Brick Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "Prismarine Brick Stairs are decorative blocks featuring the characteristic tiled pattern of prismarine bricks. They provide a refined and structured look for buildings, often used as trim or structural accents in ocean monuments. These stairs share the same hardness and blast resistance as other prismarine variants but offer a distinct geometric texture. They are crafted from prismarine bricks or via a stonecutter. As with all stairs, they are waterloggable, making them perfect for grand underwater entrances, decorative pillars, and complex ceiling designs in submerged palaces."
    },
    "minecraft:red_nether_brick_stairs": {
        id: "minecraft:red_nether_brick_stairs",
        name: "Red Nether Brick Stairs",
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
        drops: ["Red Nether Brick Stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Red Nether Bricks"
        },
        description: "Red Nether Brick Stairs are a fire-resistant building block crafted from red nether bricks. They offer a vibrant crimson-red alternative to the dark purple of standard nether brick stairs, making them highly desirable for Nether-themed architecture and high-contrast builds. They share the same durability as nether bricks and are immune to ghast fireballs. Like standard nether bricks, they produce \"bass drum\" sounds when placed under a note block. They can be crafted in a crafting grid or via a stonecutter, providing a sturdy and atmospheric way to create stairs and roofs in the Nether."
    },
    "minecraft:crimson_stairs": {
        id: "minecraft:crimson_stairs",
        name: "Crimson Stairs",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks"
        },
        description: "Crimson Stairs are fire-resistant stairs crafted from crimson planks, a wood-type native to the Crimson Forest in the Nether. Unlike Overworld wooden stairs, they do not burn, making them ideal for construction in the Nether or near lava. They feature a deep maroon and red color scheme with an alien, fungal texture. They can be crafted using six crimson planks or via a stonecutter. Like all wooden stairs, they are best harvested with an axe. Their unique resistance to fire and distinctive color palette make them a favorite for builders seeking both safety and a dark, rustic aesthetic."
    },
    "minecraft:cherry_stairs": {
        id: "minecraft:cherry_stairs",
        name: "Cherry Stairs",
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
        drops: ["Cherry Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks"
        },
        description: "Cherry Stairs are crafted from Cherry Planks and feature a light pink, aesthetic tone. Introduced in 1.20, they are popular for cute and colorful builds, offering a unique palette compared to other wood variants. Like all stairs, they are waterloggable and can be placed in multiple directions to create complex shapes like corners and eaves. They provide smooth elevation changes without jumping. Being a wood product, they are flammable and are best harvested using an axe."
    },
    "minecraft:cherry_slab": {
        id: "minecraft:cherry_slab",
        name: "Cherry Slab",
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
        drops: ["Cherry Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks"
        },
        description: "Cherry Slab is a half-block variant of Cherry planks, featuring the same distinctive pink texture. It provides a low-profile building option for floors, ceilings, and intricate architectural details. Crafted by placing three cherry planks horizontally or using a stonecutter, it is an essential part of the cherry wood family. Cherry slabs are flammable and can be combined into double slabs or placed in the top half of a block space. They offer a unique aesthetic that complements floral and colorful builds."
    },
    "minecraft:cobbled_deepslate_stairs": {
        id: "minecraft:cobbled_deepslate_stairs",
        name: "Cobbled Deepslate Stairs",
        hardness: 3.5,
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
        drops: ["Cobbled Deepslate Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted/Stonecut"
        },
        description: "Cobbled Deepslate Stairs are a stair variant of cobbled deepslate, featuring a dark, rugged texture perfect for subterranean architecture. They allow for smooth vertical movement and are frequently used in the construction of roofs, seating, and detailed underground passages. In Bedrock Edition, they can be crafted using six cobbled deepslate blocks or more efficiently via a stonecutter. Like other deepslate variants, they are tougher than standard stone stairs, offering both durability and a somber, industrial aesthetic to any build."
    },
    "minecraft:cobbled_deepslate_slab": {
        id: "minecraft:cobbled_deepslate_slab",
        name: "Cobbled Deepslate Slab",
        hardness: 3.5,
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
        drops: ["Cobbled Deepslate Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted/Stonecut"
        },
        description: "Cobbled Deepslate Slab is the half-block variant of cobbled deepslate, providing a versatile building component for floors, ceilings, and intricate architectural highlights. It retains the signature dark gray and fractured appearance of cobbled deepslate, making it ideal for detailing caves or creating atmospheric pathways. These slabs can be combined into double slabs or placed in various halves of a block space. They are fire-resistant and require a pickaxe to mine, offering a sturdy and dark-toned alternative to regular stone slabs."
    },
    "minecraft:cobbled_deepslate_wall": {
        id: "minecraft:cobbled_deepslate_wall",
        name: "Cobbled Deepslate Wall",
        hardness: 3.5,
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
        drops: ["Cobbled Deepslate Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted/Stonecut"
        },
        description: "Cobbled Deepslate Walls are decorative barrier blocks used to create perimeters, fortifications, or garden boundaries with a dark, stony aesthetic. They connect to adjacent walls and blocks, forming a continuous barrier that is 1.5 blocks high for most entities, preventing them from jumping over. Crafted from six cobbled deepslate blocks or via a stonecutter, these walls are more durable than their cobblestone counterparts. They are perfect for reinforcing underground structures or adding a layer of security to grim, fortress-style builds."
    },
    "minecraft:deepslate_brick_stairs": {
        id: "minecraft:deepslate_brick_stairs",
        name: "Deepslate Brick Stairs",
        hardness: 3.5,
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
        drops: ["Deepslate Brick Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities, Crafted/Stonecut"
        },
        description: "Deepslate Brick Stairs are a refined stair variant crafted from deepslate bricks. They feature a sophisticated, dark masonry pattern that provides a more polished look than cobbled deepslate stairs while maintaining the same high durability. These stairs are essential for creating grand staircases, clean rooflines, and detailed trim in dark-themed architecture. They generate naturally in Ancient Cities and are favored by builders for their uniform, elegant appearance. Like other deepslate variants, they are fire-resistant and must be mined with a pickaxe."
    },
    "minecraft:deepslate_brick_slab": {
        id: "minecraft:deepslate_brick_slab",
        name: "Deepslate Brick Slab",
        hardness: 3.5,
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
        drops: ["Deepslate Brick Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities, Crafted/Stonecut"
        },
        description: "Deepslate Brick Slab is the half-block counterpart to deepslate bricks, featuring the same dark, tiled masonry texture. It offers a compact building option for flooring, ceilings, and decorative accents where a full block would be too bulky. These slabs are perfect for creating smooth transitions in tiered architecture and are frequently used in modern or gothic-style builds. They generate naturally within the structures of Ancient Cities. Because they are stone-based, they provide excellent fire resistance and durability, making them as practical as they are aesthetic."
    },
    "minecraft:deepslate_tile_stairs": {
        id: "minecraft:deepslate_tile_stairs",
        name: "Deepslate Tile Stairs",
        hardness: 3.5,
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
        drops: ["Deepslate Tile Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities, Crafted/Stonecut"
        },
        description: "Deepslate Tile Stairs are the polished, stair-shaped variant of deepslate tiles, introduced in 1.17 Caves & Cliffs. They feature a sophisticated dark-gray tiled pattern that is perfect for professional-looking staircases, sloped roofs, and architectural trim. Crafted from deepslate tiles or more efficiently in a stonecutter, they share the same high durability and blast resistance (6.0) as other deepslate family blocks. They generate naturally in Ancient Cities, often forming part of the grand structures and walkways. Like most stone stairs, they can be waterlogged and placed upside down."
    },
    "minecraft:deepslate_tile_slab": {
        id: "minecraft:deepslate_tile_slab",
        name: "Deepslate Tile Slab",
        hardness: 3.5,
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
        drops: ["Deepslate Tile Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities, Crafted/Stonecut"
        },
        description: "Deepslate Tile Slab is a half-block variant of deepslate tiles, featuring the same dark and elegant tiled texture. It provides a sleek, low-profile option for detailed flooring, ceilings, and various architectural highlights. These slabs can be crafted from deepslate tiles or produced via a stonecutter. They are highly durable with a blast resistance of 6.0 and hardness of 3.5. Naturally occurring in Ancient Cities, they are versatile for creating tiered transitions and smooth surface patterns. Like other slabs, they can be placed in the upper or lower half of a block space."
    },
    "minecraft:deepslate_tile_wall": {
        id: "minecraft:deepslate_tile_wall",
        name: "Deepslate Tile Wall",
        hardness: 3.5,
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
        drops: ["Deepslate Tile Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities, Crafted/Stonecut"
        },
        description: "Deepslate Tile Walls are sturdy, decorative barriers crafted from deepslate tiles. They feature a dark, refined masonry texture that provides a modern and sleek look compared to the rugged appearance of cobbled deepslate walls. Like other wall types, they connect to adjacent blocks and walls to form a continuous barrier 1.5 blocks high for most entities, making them effective for security and decoration. They are naturally found in Ancient Cities and can be crafted from six deepslate tile blocks or using a stonecutter. Their high blast resistance makes them ideal for fortified structures."
    },
    "minecraft:andesite_wall": {
        id: "minecraft:andesite_wall",
        name: "Andesite Wall",
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
        drops: ["Andesite Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A"
        },
        description: "Andesite Wall is a decorative building block crafted from Andesite. Introduced to provide more variety in stone-based barriers, it features the smooth, gray texture of andesite. Like other walls, it is 1.5 blocks high for most entities, preventing them from jumping over it, while only taking up a single block space visually. It connects to adjacent blocks and walls, making it ideal for creating intricate railings, garden boundaries, and structural detailing. It can be crafted from six andesite blocks or produced via a stonecutter."
    },
    "minecraft:diorite_wall": {
        id: "minecraft:diorite_wall",
        name: "Diorite Wall",
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
        drops: ["Diorite Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A"
        },
        description: "Diorite Wall is a decorative masonry block made from Diorite. It shares the characteristic 'bird poop' white and gray speckled texture of diorite, offering a bright and clean aesthetic for perimeters and decorative accents. It behaves identically to other wall types, connecting to nearby blocks and providing a 1.5-block high barrier for pathfinding. Whether used for modern architecture or rustic garden fences, diorite walls are a durable and stylistic choice. They are crafted in a crafting table or stonecutter from diorite blocks."
    },
    "minecraft:granite_wall": {
        id: "minecraft:granite_wall",
        name: "Granite Wall",
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
        drops: ["Granite Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A"
        },
        description: "Granite Wall is a sturdy decorative block crafted from Granite, featuring a warm, reddish-brown stone texture. It provides excellent utility for creating boundaries, protective railings, and architectural details that require a more colorful stone palette. Like all walls, it connects smoothly with other walls and solid blocks, creating a continuous and secure barrier. Granite walls are particularly effective in desert or mountain-themed builds, matching the natural tones of the earth. They can be manufactured using six granite blocks or more efficiently with a stonecutter."
    },
    "minecraft:andesite_stairs": {
        id: "minecraft:andesite_stairs",
        name: "Andesite Stairs",
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
        drops: ["Andesite Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted/Stonecut"
        },
        description: "Andesite Stairs are decorative stone blocks that provide smooth elevation changes in builds. Featuring the neutral, speckled gray texture of andesite, they are ideal for creating detailed rooflines, subtle architectural trim, and sturdy staircases. They are crafted using six andesite blocks in a crafting table or more efficiently via a stonecutter. Like other stone-based stairs, they are fire-resistant, blast-resistant, and can be waterlogged. Their industrial gray appearance makes them a versatile choice for both modern structures and dungeon-themed environments."
    },
    "minecraft:diorite_stairs": {
        id: "minecraft:diorite_stairs",
        name: "Diorite Stairs",
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
        drops: ["Diorite Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted/Stonecut"
        },
        description: "Diorite Stairs provide a bright, clean aesthetic for vertical transitions and architectural detailing. Featuring the signature white and gray speckled texture of diorite, these stairs are perfect for highlighting edges or creating contrast in darker builds. They are produced by crafting six diorite blocks together or using a stonecutter for a one-to-one conversion. Diorite stairs are fireproof and possess moderate blast resistance, making them durable for various construction projects. They can be placed in multiple orientations to create complex shapes like pillars or cornices."
    },
    "minecraft:granite_stairs": {
        id: "minecraft:granite_stairs",
        name: "Granite Stairs",
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
        drops: ["Granite Stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted/Stonecut"
        },
        description: "Granite Stairs offer a warm, earthy-red stone texture for architectural designs. They are perfect for creating rustic accents, sloped roofs, and grand staircases that require a more colorful stone palette than standard gray variants. These stairs are formed by crafting six granite blocks in a stair pattern or by using a stonecutter. As a stone material, they are non-flammable and explosion-resistant. Granite stairs pair excellently with other warm blocks like bricks or sandstone, providing both functional utility and a distinctive aesthetic touch to any structure."
    },
    "minecraft:polished_andesite_stairs": {
        id: "minecraft:polished_andesite_stairs",
        name: "Polished Andesite Stairs",
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
        drops: ["minecraft:polished_andesite_stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted/Stonecut"
        },
        description: "Polished Andesite Stairs are a smooth, gray decorative building block crafted from polished andesite. They provide a refined and clean aesthetic for staircases, sloped roofs, and architectural detailing in both modern and traditional builds. Like other stone-based stairs, they are fire-resistant and have a blast resistance of 6.0 in Bedrock Edition. They can be waterlogged and placed in various orientations to create complex shapes like cornices and eaves."
    },
    "minecraft:polished_diorite_stairs": {
        id: "minecraft:polished_diorite_stairs",
        name: "Polished Diorite Stairs",
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
        drops: ["minecraft:polished_diorite_stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted/Stonecut"
        },
        description: "Polished Diorite Stairs offer a bright, polished white and gray speckled appearance for vertical transitions. Crafted from polished diorite, they are ideal for creating high-contrast architectural accents and elegant staircases in Bedrock Edition. They share the same durability as other stone-based variants and are immune to fire. Their smooth, refined texture makes them a favorite for modern interior designs and sophisticated exterior trim where a clean, stone look is desired."
    },
    "minecraft:polished_granite_stairs": {
        id: "minecraft:polished_granite_stairs",
        name: "Polished Granite Stairs",
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
        drops: ["minecraft:polished_granite_stairs"],
        generation: {
            dimension: "None",
            yRange: "Crafted/Stonecut"
        },
        description: "Polished Granite Stairs provide a warm, pinkish-brown stone texture with a refined, smooth finish. They are perfect for adding color and sophistication to staircases, sloped roofs, and decorative cornices in Bedrock Edition. Crafted from polished granite, these stairs are fire-resistant and offer solid protection against explosions. Their rich, earthy tones pair well with other warm blocks like bricks and sandstone, making them a versatile choice for a wide range of architectural styles and structural details."
    },
    "minecraft:oak_slab": {
        id: "minecraft:oak_slab",
        name: "Oak Slab",
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
        drops: ["Oak Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Oak Planks"
        },
        description: "The Oak Slab is a versatile half-block building material and one of the most fundamental construction items in Minecraft. Crafted from Oak Planks, it is widely used for creating smooth elevation changes, detailed flooring, and efficient roofing. Slabs can be placed in either the upper or lower half of a block space, allowing for intricate architectural designs. When two slabs of the same type are stacked, they form a double slab. In Bedrock Edition, oak slabs are flammable and can also serve as a fuel source in furnaces. Their warm, classic wood texture makes them a favorite for both interior and exterior detailing."
    },
    "minecraft:spruce_slab": {
        id: "minecraft:spruce_slab",
        name: "Spruce Slab",
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
        drops: ["Spruce Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga Villages, Shipwrecks, or Crafted"
        },
        description: "Spruce Slab is a half-block building component crafted from Spruce Planks. It features the deep, rustic brown texture characteristic of the spruce wood family, making it ideal for flooring, roofing, and intricate architectural details in cabin or medieval-style builds. Slabs can be placed in either the top or bottom half of a block space or combined into a double slab. In Bedrock Edition, it is flammable and can generate naturally in Taiga villages and shipwrecks."
    },
    "minecraft:petrified_oak_slab": {
        id: "minecraft:petrified_oak_slab",
        name: "Petrified Oak Slab",
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
        drops: ["Petrified Oak Slab"],
        generation: {
            dimension: "None",
            yRange: "Unobtainable (Legacy)"
        },
        description: "The Petrified Oak Slab is a unique legacy block in Minecraft Bedrock Edition that appears identical to a standard oak slab but behaves like stone. Unlike regular wooden slabs, it is non-flammable and must be mined with a pickaxe to be dropped. It was originally the only type of wooden slab when slabs were first introduced and used stone properties. While it can no longer be crafted in modern versions, it remains in the game's code and can be obtained via commands or in older upgraded worlds."
    },

    "minecraft:bamboo_mosaic_slab": {
        id: "minecraft:bamboo_mosaic_slab",
        name: "Bamboo Mosaic Slab",
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
        drops: ["Bamboo Mosaic Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Mosaic"
        },
        description: "Bamboo Mosaic Slab is a decorative half-block variant of the Bamboo Mosaic. It features a unique woven pattern different from standard bamboo planks. It can be used for flooring, roofing, and intricate designs. Like other wooden slabs, it is flammable. It is crafted from Bamboo Mosaic blocks or via a stonecutter."
    },
    "minecraft:cobblestone_wall": {
        id: "minecraft:cobblestone_wall",
        name: "Cobblestone Wall",
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
        drops: ["Cobblestone Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted"
        },
        description: "Cobblestone Walls are versatile defensive and decorative blocks made from cobblestone. They function similarly to fences, preventing most mobs from jumping over them as they have a collision height of 1.5 blocks. When placed adjacent to each other, they connect to form a continuous barrier. They can also support banners and torches. Their durability and ease of crafting make them a popular choice for perimeter walls and detailing in medieval-style builds."
    },
    "minecraft:mossy_cobblestone_wall": {
        id: "minecraft:mossy_cobblestone_wall",
        name: "Mossy Cobblestone Wall",
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
        drops: ["Mossy Cobblestone Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle Temples, Dungeons, or Crafted"
        },
        description: "Mossy Cobblestone Walls are decorative barrier blocks that combine the rugged texture of cobblestone with overgrown moss. They function as a 1.5-block high barrier for pathfinding, preventing most mobs from jumping over them while occupying only a single block space. These walls are ideal for creating ancient, weathered structures, medieval fortifications, or garden boundaries that blend with lush environments. They generate naturally in jungle temples and dungeons or can be crafted. In Bedrock Edition, they can be waterlogged and connect seamlessly to adjacent walls and blocks."
    },
    "minecraft:mangrove_stairs": {
        id: "minecraft:mangrove_stairs",
        name: "Mangrove Stairs",
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
        drops: ["Mangrove Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Mangrove Planks"
        },
        description: "Mangrove Stairs are versatile building blocks introduced in the 1.19 Wild Update, crafted from Mangrove Planks. They feature a distinct deep red coloration characteristic of the Mangrove wood set, offering a rich and warm aesthetic for tropical or nautical-themed builds. Like all wooden stairs, they allow for smooth elevation changes and can be used to create detailed roofs, furniture, and architectural trim. They are waterloggable and can be placed in various orientations. In Bedrock Edition, they share the same physical properties as other wood planks, being fully flammable."
    },
    "minecraft:mud_brick_slab": {
        id: "minecraft:mud_brick_slab",
        name: "Mud Brick Slab",
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
        drops: ["Mud Brick Slab"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Mud Bricks"
        },
        description: "Mud Brick Slabs are half-block variants of mud bricks, introduced in the 1.19 Wild Update. They offer a warm, earthy-brown aesthetic perfect for rustic, desert, or swamp-themed builds. Crafted from three mud bricks or via a stonecutter, they allow for precise elevation changes and detailed architectural accents. Like full mud bricks, they are fire-resistant and provide a solid, grounded feel to any structure. They are especially useful for creating smooth pathways, tiered landscaping, and intricate rooflines that blend seamlessly with natural environments."
    },
    "minecraft:dark_oak_stairs": {
        id: "minecraft:dark_oak_stairs",
        name: "Dark Oak Stairs",
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
        drops: ["Dark Oak Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Dark Oak Planks"
        },
        description: "Dark Oak Stairs are decorative building blocks crafted from dark oak planks. They feature the same rich, dark brown color as the rest of the dark oak wood set, making them perfect for creating moody or sophisticated architecture. Like all stairs, they allow for smooth vertical movement and can be used for detailed roofing, furniture, and trim. They are waterloggable and can be placed in various orientations. They are flammable and are most efficiently harvested with an axe."
    },
    "minecraft:polished_blackstone_wall": {
        id: "minecraft:polished_blackstone_wall",
        name: "Polished Blackstone Wall",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Blackstone Wall"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Polished Blackstone"
        },
        description: "Polished Blackstone Walls are durable decorative barriers crafted from polished blackstone. They provide a 1.5-block high collision box, making them excellent for containing mobs or securing perimeters in the Nether. Featuring a sleek, dark masonry texture, they offer a sophisticated and somber aesthetic for fortresses and gothic-style builds. Like other wall types, they connect to adjacent blocks and walls to form a continuous barrier, and they are highly resistant to explosions."
    },
    "minecraft:crimson_slab": {
        id: "minecraft:crimson_slab",
        name: "Crimson Slab",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Slab"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks"
        },
        description: "Crimson Slabs are half-block building components crafted from crimson planks, a fire-resistant wood type native to the Nether's Crimson Forests. They feature a unique deep maroon and red fungal texture. Unlike Overworld wooden slabs, crimson slabs are completely immune to fire and lava, making them essential for safe construction in the Nether. They can be placed in the upper or lower half of a block space or combined into double slabs. Their rich color and fireproof nature make them ideal for both aesthetic detailing and functional structures in hazardous environments."
    },
    "minecraft:mossy_stone_brick_stairs": {
        id: "minecraft:mossy_stone_brick_stairs",
        name: "Mossy Stone Brick Stairs",
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
        drops: ["Mossy Stone Brick Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Jungle Temples, or Crafted"
        },
        description: "Mossy Stone Brick Stairs are a weathered and overgrown variant of stone brick stairs, featuring a distinct texture of cracked stone and green vines. They share the same high durability and blast resistance as regular stone brick stairs, making them excellent for building sturdy, ancient-looking structures. Naturally generating in strongholds and jungle temples, they can also be crafted by combining mossy stone bricks or using a stonecutter. Like other stairs, they are waterloggable and can be placed in various orientations to create complex architectural details."
    },
    "minecraft:mossy_stone_brick_slab": {
        id: "minecraft:mossy_stone_brick_slab",
        name: "Mossy Stone Brick Slab",
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
        drops: ["Mossy Stone Brick Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Jungle Temples, or Crafted"
        },
        description: "Mossy Stone Brick Slab is a weathered half-block variant of stone bricks, featuring a blend of cracked masonry and overgrown green moss. It offers a compact building option for detailed flooring, steps, and roofing in ancient or rustic-themed builds. In Bedrock Edition, it is fire-resistant and provides solid blast protection, matching the durability of regular stone bricks. It can be crafted from three mossy stone bricks or more efficiently via a stonecutter. Its aged appearance makes it ideal for ruins, jungle-themed structures, and atmospheric pathways."
    },
    "minecraft:nether_brick_slab": {
        id: "minecraft:nether_brick_slab",
        name: "Nether Brick Slab",
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
        drops: ["Nether Brick Slab"],
        generation: {
            dimension: "Nether",
            yRange: "Nether Fortresses"
        },
        description: "Nether Brick Slabs are fire-resistant half-blocks crafted from Nether Bricks, essential for building in the hazardous Nether dimension. They naturally generate within the massive corridors of Nether Fortresses, providing durable walkways and decorative trim that are immune to ghast fireballs. Because they are stone-based, they provide reliable protection against fire and explosions. Slabs can be placed in either the upper or lower half of a block space or combined into double slabs, offering versatile options for detailed architecture, roofing, and smooth elevation changes."
    },
    "minecraft:red_nether_brick_slab": {
        id: "minecraft:red_nether_brick_slab",
        name: "Red Nether Brick Slab",
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
        drops: ["minecraft:red_nether_brick_slab"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Red Nether Bricks"
        },
        description: "Red Nether Brick Slabs are durable, fire-resistant half-blocks crafted from Red Nether Bricks. They offer the same striking crimson hue as their full-block counterparts, making them a popular choice for Nether-themed architecture, roofing, and flooring. In Bedrock Edition, they are highly resistant to explosions and immune to fire, providing excellent protection against Ghast fireballs. They can be placed in top or bottom halves of a block space, allowing for versatile architectural designs and preventing most mob spawns when placed on the bottom half."
    },
    "minecraft:mossy_stone_brick_wall": {
        id: "minecraft:mossy_stone_brick_wall",
        name: "Mossy Stone Brick Wall",
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
        drops: ["Mossy Stone Brick Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds"
        },
        description: "Mossy Stone Brick Walls are durable decorative barriers that combine the refined masonry of stone bricks with weathered moss. They provide a 1.5-block high collision box for entities, preventing most mobs from jumping over them while only occupying a single block space visually. They are ideal for creating ancient ruins, castle fortifications, or garden boundaries in lush environments. Naturally found in Strongholds in Bedrock Edition, they can also be crafted by combining Mossy Stone Bricks or using a stonecutter. They are fireproof and highly resistant to explosions."
    },
    "minecraft:smooth_sandstone_stairs": {
        id: "minecraft:smooth_sandstone_stairs",
        name: "Smooth Sandstone Stairs",
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
        drops: ["Smooth Sandstone Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "None"
        },
        description: "Smooth Sandstone Stairs are a refined building block that provides smooth elevation changes with a clean, uniform texture. Unlike regular sandstone stairs, they lack the grainy, layered appearance, offering a more polished look for desert-themed architecture. They are crafted from smooth sandstone blocks or made directly in a stonecutter. As a stone material, they are fire-resistant and offer moderate blast protection. Builders often use them for elegant staircases, sloped roofs, and decorative detailing in high-end desert builds where a sophisticated aesthetic is desired."
    },
    "minecraft:oxidized_cut_copper_stairs": {
        id: "minecraft:oxidized_cut_copper_stairs",
        name: "Oxidized Cut Copper Stairs",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Oxidized Cut Copper Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally (Final stage)"
        },
        description: "Oxidized Cut Copper Stairs are a decorative building block that represents the final stage of the copper weathering process. They feature the iconic teal-green patina that occurs when copper is exposed to the elements over time. These stairs are perfect for creating aged roofs, detailed trim, or weathered monuments. They can be waxed to preserve their green color or scraped with an axe to revert them to a previous weathering stage, offering great versatility for industrial or historic builds."
    },
    "minecraft:weathered_cut_copper_stairs": {
        id: "minecraft:weathered_cut_copper_stairs",
        name: "Weathered Cut Copper Stairs",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Weathered Cut Copper Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally"
        },
        description: "Weathered Cut Copper Stairs represent the intermediate stage of the copper oxidation process in a stair shape. They feature a prominent blue-green patina mixed with remaining brownish-orange tones, offering a classic aged look. Builders use these stairs to create detailed gradients and weathered architectural features like sloped roofs and decorative trim. In Bedrock Edition, they can be waxed with honeycomb to lock their current state or scraped with an axe to revert them to the exposed stage. They require a stone pickaxe or better to mine."
    },
    "minecraft:andesite_slab": {
        id: "minecraft:andesite_slab",
        name: "Andesite Slab",
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
        drops: ["Andesite Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Andesite Slabs are the half-block variant of andesite, offering a low-profile building option while retaining the block's characteristic speckled gray texture. Like other slabs, they are versatile for creating detailed flooring, ceilings, and smooth elevation changes without the bulk of a full block. They can be crafted from three andesite blocks in a horizontal row or obtained more efficiently through a stonecutter. Because they are stone-based, they are non-flammable and provide reliable protection against environmental hazards, making them a staple in both interior and exterior designs."
    },
    "minecraft:smooth_red_sandstone_stairs": {
        id: "minecraft:smooth_red_sandstone_stairs",
        name: "Smooth Red Sandstone Stairs",
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
        drops: ["Smooth Red Sandstone Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Smooth Red Sandstone Stairs are a refined building block providing smooth vertical transitions with a sleek, vibrant orange-red texture. Unlike standard red sandstone stairs, they feature a uniform appearance without the natural layering, making them ideal for modern Mesa-inspired or desert architecture. These stairs are crafted from smooth red sandstone blocks or produced efficiently using a stonecutter. They are fire-resistant and offer moderate blast protection. Their clean aesthetic is perfect for creating grand staircases, elegant roofs, and detailed architectural trim in high-end builds."
    },
    "minecraft:smooth_quartz_stairs": {
        id: "minecraft:smooth_quartz_stairs",
        name: "Smooth Quartz Stairs",
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
        drops: ["Smooth Quartz Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Smooth Quartz Stairs are the refined stair-shaped variant of smooth quartz, highly valued for their sleek and borderless appearance. Smelting quartz blocks into smooth quartz significantly increases their durability, making these stairs tougher than their regular quartz counterparts. They are essential for modern architectural designs, providing clean lines for staircases, sloped roofs, and minimalist furniture. Crafted from smooth quartz blocks or via a stonecutter, they offer a bright, professional aesthetic. Like other stone stairs, they are fireproof, blast-resistant, and waterloggable."
    },
    "minecraft:mossy_cobblestone_stairs": {
        id: "minecraft:mossy_cobblestone_stairs",
        name: "Mossy Cobblestone Stairs",
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
        drops: ["Mossy Cobblestone Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Mossy Cobblestone Stairs are a decorative building block that combines the rugged, time-worn texture of cobblestone with lush green moss. Perfect for ancient ruins, overgrown castles, or rustic garden paths, they provide a sense of history and age to any structure. Like standard cobblestone stairs, they are durable and fire-resistant, requiring a pickaxe to mine efficiently. They can be crafted from mossy cobblestone blocks or created using a stonecutter. In Bedrock Edition, they can be waterlogged and placed in various orientations to create complex architectural details."
    },
    "minecraft:mossy_cobblestone_slab": {
        id: "minecraft:mossy_cobblestone_slab",
        name: "Mossy Cobblestone Slab",
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
        drops: ["Mossy Cobblestone Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Mossy Cobblestone Slab is the half-block variant of mossy cobblestone, featuring a distinctive mixture of weathered stone and organic moss growth. It offers a compact building option for detailed flooring, atmospheric pathways, and aged roofing where a full block would be too bulky. These slabs can be combined into double slabs or placed in the top or bottom half of a block space. They share the same high durability and fire resistance as regular cobblestone products and can be crafted manually or produced efficiently with a stonecutter."
    },
    "minecraft:polished_blackstone_stairs": {
        id: "minecraft:polished_blackstone_stairs",
        name: "Polished Blackstone Stairs",
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
        drops: ["Polished Blackstone Stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Polished Blackstone"
        },
        description: "Polished Blackstone Stairs are a sleek, dark building block crafted from polished blackstone. They provide a sophisticated and somber aesthetic, perfect for fortresses, gothic-style architecture, and Nether-based structures. With a hardness of 1.5 and a blast resistance of 6.0, they offer reliable durability against most environmental hazards. Like other stairs, they allow for smooth elevation changes and can be waterlogged in Bedrock Edition. They are primarily obtained through crafting or by using a stonecutter on polished blackstone blocks."
    },
    "minecraft:polished_blackstone_brick_stairs": {
        id: "minecraft:polished_blackstone_brick_stairs",
        name: "Polished Blackstone Brick Stairs",
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
        drops: ["minecraft:polished_blackstone_brick_stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants"
        },
        description: "Polished Blackstone Brick Stairs are a decorative building block crafted from Polished Blackstone Bricks. They share the same dark, ornate brick pattern and durability as their base block, making them ideal for creating intricate staircases and detailing in dark-themed constructions. They generate naturally within Bastion Remnants and can be crafted using a stonecutter or by arranging Polished Blackstone Bricks in a stair pattern. Like other Blackstone variants, they are highly resistant to explosions and provide a sophisticated aesthetic for Nether constructions."
    },
    "minecraft:polished_blackstone_brick_slab": {
        id: "minecraft:polished_blackstone_brick_slab",
        name: "Polished Blackstone Brick Slab",
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
        drops: ["minecraft:polished_blackstone_brick_slab"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants"
        },
        description: "Polished Blackstone Brick Slabs are half-height versions of Polished Blackstone Bricks, used for flooring, ceilings, and architectural layering. They exhibit a detailed brick texture, providing a clean and dark finish. Naturally found in Bastion Remnants, these slabs are often used in bridges and decorative trims. They are crafted from Polished Blackstone Bricks or via a stonecutter. They are non-flammable and possess high blast resistance, ensuring that constructions remain intact in the Nether while being placeable in both upper and lower halves of a block space."
    },
    "minecraft:polished_blackstone_brick_wall": {
        id: "minecraft:polished_blackstone_brick_wall",
        name: "Polished Blackstone Brick Wall",
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
        drops: ["minecraft:polished_blackstone_brick_wall"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants"
        },
        description: "Polished Blackstone Brick Walls are decorative barriers that connect to adjacent blocks and other walls. They feature the same refined brick design as Polished Blackstone Bricks, offering a dark and sturdy option for fencing or structural support. These walls generate naturally in Bastion Remnants and are crafted from Polished Blackstone Bricks or by using a stonecutter. When placed, they automatically form posts and connect to neighboring blocks, creating a seamless barrier. Their high durability makes them perfect for securing areas against ghasts and other Nether threats."
    },
    "minecraft:birch_slab": {
        id: "minecraft:birch_slab",
        name: "Birch Slab",
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
        drops: ["Birch Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Planks"
        },
        description: "The Birch Slab is a light-colored half-block building material crafted from birch planks. Its pale, almost white texture makes it ideal for modern designs, clean interiors, and highlighting architectural details. Slabs can be placed in either the top or bottom half of a block space or combined into a double slab. In Bedrock Edition, birch slabs are flammable and have a hardness of 2.0 and blast resistance of 3.0. They provide a versatile way to create smooth elevation changes, detailed flooring, and sleek roofing while maintaining a bright and welcoming aesthetic."
    },
    "minecraft:diorite_slab": {
        id: "minecraft:diorite_slab",
        name: "Diorite Slab",
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
        drops: ["Diorite Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Diorite Slabs are the half-block variant of diorite, featuring the characteristic speckled white and gray appearance of the stone. They provide a bright and clean aesthetic for flooring, ceilings, and architectural detailing where a full block would be too large. These slabs can be crafted from three diorite blocks in a horizontal row or produced more efficiently using a stonecutter. As a stone-based material, they are non-flammable and provide moderate protection against environmental hazards. They can be placed in either the top or bottom half of a block space or combined into a double slab."
    },
    "minecraft:granite_slab": {
        id: "minecraft:granite_slab",
        name: "Granite Slab",
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
        drops: ["Granite Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Granite Slabs are half-block building components crafted from granite, featuring a warm, pinkish-brown stone texture. They allow for smooth elevation changes, detailed flooring, and sleek roofing while maintaining the characteristic speckled appearance of granite. These slabs can be crafted from three granite blocks or obtained more efficiently through a stonecutter. As a stone-based material, they are non-flammable and provide moderate protection against environmental hazards. They can be combined into double slabs or placed in various halves of a block space for versatile building."
    },
    "minecraft:deepslate_brick_wall": {
        id: "minecraft:deepslate_brick_wall",
        name: "Deepslate Brick Wall",
        hardness: 3.5,
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
        drops: ["Deepslate Brick Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities, Crafted/Stonecut"
        },
        description: "Deepslate Brick Walls are sturdy decorative barriers crafted from deepslate bricks, introduced in the 1.17 Caves & Cliffs update. They feature a sophisticated dark masonry pattern that provides a more polished look than cobbled deepslate walls. These walls generate naturally in Ancient Cities and are essential for securing perimeters or adding architectural detail to subterranean builds. They connect to adjacent blocks and walls, forming a 1.5-block high collision box. As a deepslate variant, they are tougher than standard stone walls and must be mined with a pickaxe."
    },
    "minecraft:nether_brick_wall": {
        id: "minecraft:nether_brick_wall",
        name: "Nether Brick Wall",
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
        drops: ["Nether Brick Wall"],
        generation: {
            dimension: "Nether",
            yRange: "Nether Fortresses"
        },
        description: "Nether Brick Walls are sturdy, fire-resistant barriers that generate naturally within the dark, sprawling corridors of Nether Fortresses. They provide a 1.5-block high collision box, making them ideal for securing perimeters and containing hostile mobs in the Nether. Unlike wooden fences, they are immune to ghast fireballs and lava, making them essential for safe construction in the Nether dimension. They can be crafted from six nether brick blocks or produced via a stonecutter. Their dark, gothic aesthetic is a favorite for builders creating fortresses and atmospheric structures."
    },
    "minecraft:red_nether_brick_wall": {
        id: "minecraft:red_nether_brick_wall",
        name: "Red Nether Brick Wall",
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
        drops: ["Red Nether Brick Wall"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Red Nether Bricks"
        },
        description: "Red Nether Brick Wall is a sturdy, fire-resistant decorative barrier crafted from red nether bricks. It provides a 1.5-block high collision box that prevents most mobs from jumping over, while occupying only a single block space visually. Its vibrant crimson-red color offers a striking alternative to standard nether brick walls, perfect for Nether fortresses and high-contrast architecture. Like other walls, it connects to adjacent blocks and is completely immune to ghast fireballs."
    },
    "minecraft:prismarine_slab": {
        id: "minecraft:prismarine_slab",
        name: "Prismarine Slab",
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
        drops: ["Prismarine Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "Prismarine Slabs are decorative half-blocks featuring the animated blue-green texture of prismarine. They generate naturally within Ocean Monuments, forming parts of the grand underwater architecture. These slabs are versatile for creating detailed aquatic-themed floors, ceilings, and smooth elevation changes. Because they are stone-based, they are fireproof and offer reliable blast resistance. They can be crafted from three prismarine blocks or produced via a stonecutter. Like other slabs, they can be waterlogged, allowing them to blend perfectly into submerged temples and high-end underwater bases."
    },
    "minecraft:prismarine_wall": {
        id: "minecraft:prismarine_wall",
        name: "Prismarine Wall",
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
        drops: ["Prismarine Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "Prismarine Wall is a decorative barrier block made from prismarine, primarily used for underwater or aquatic-themed construction. It shares the characteristic animated blue-green texture of the prismarine family. Like other walls, it stands 1.5 blocks high for most entities, preventing them from jumping over while occupying a single block space. It connects to adjacent walls and blocks, making it ideal for creating intricate railings and structural detailing in submerged temples and bases."
    },
    "minecraft:blackstone_stairs": {
        id: "minecraft:blackstone_stairs",
        name: "Blackstone Stairs",
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
        drops: ["Blackstone Stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants, Ruined Portals"
        },
        description: "Blackstone Stairs are rugged, dark-toned stairs that provide a somber and ancient aesthetic to any build. Naturally generating in Bastion Remnants and Ruined Portals, they are a primary building component for Piglin architecture. They share the same high blast resistance and durability as regular stone, but with a unique dark gray-to-black color palette. Blackstone stairs are essential for creating detailed rooflines, grand staircases, and atmospheric trim in Nether-themed builds. They can be crafted from six blackstone blocks or made more efficiently using a stonecutter. They are also waterloggable."
    },
    "minecraft:blackstone_wall": {
        id: "minecraft:blackstone_wall",
        name: "Blackstone Wall",
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
        drops: ["Blackstone Wall"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants"
        },
        description: "Blackstone Wall is a rugged, dark-toned decorative barrier that provides a somber and ancient aesthetic to any build. Naturally generating in Bastion Remnants, it is a primary building component for Piglin architecture. It shares the same high blast resistance and durability as regular stone but with a unique dark gray-to-black color palette. These walls connect to adjacent blocks and walls to form a continuous barrier, perfect for secure perimeters in the hazardous Nether environment."
    },
    "minecraft:bamboo_mosaic_stairs": {
        id: "minecraft:bamboo_mosaic_stairs",
        name: "Bamboo Mosaic Stairs",
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
        drops: ["Bamboo Mosaic Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Mosaic"
        },
        description: "Bamboo Mosaic Stairs are a decorative building block crafted from Bamboo Mosaic, introduced in Minecraft 1.20. They feature a unique 'woven' or 'checkerboard' texture distinct from traditional bamboo planks, offering a tropical and refined aesthetic. Like other stairs, they allow for smooth elevation changes and are waterloggable in Bedrock Edition. They are flammable and are most efficiently harvested with an axe. Their intricate design makes them ideal for detailed roofing, oriental-themed builds, and sophisticated interior accents."
    },
    "minecraft:oxidized_cut_copper_slab": {
        id: "minecraft:oxidized_cut_copper_slab",
        name: "Oxidized Cut Copper Slab",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Oxidized Cut Copper Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally (Final stage)"
        },
        description: "Oxidized Cut Copper Slab is a building block that represents the final oxidation stage of cut copper in slab form. It features the iconic teal-green patina and a tiled masonry texture, perfect for low-profile roofing, detailed pathways, and decorative accents in weathered or industrial builds. Like other copper blocks, it can be waxed to preserve its color or scraped with an axe to revert it to a previous oxidation stage. In Bedrock Edition, it requires a stone pickaxe or better to mine and is waterloggable."
    },
    "minecraft:exposed_cut_copper_stairs": {
        id: "minecraft:exposed_cut_copper_stairs",
        name: "Exposed Cut Copper Stairs",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["minecraft:exposed_cut_copper_stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally or crafted"
        },
        description: "Exposed Cut Copper Stairs are a decorative building block that represents the first stage of the copper oxidation process in a stair shape. They feature a slightly tarnished brownish-orange appearance, showing the early effects of weathering on copper. These stairs are perfect for creating rustic rooflines, detailed trim, or industrial-themed staircases. They can be waxed with honeycomb to lock in their current look or scraped with an axe to revert them to the fresh copper stage. Like other copper blocks, they naturally oxidize over time into the weathered stage."
    },
    "minecraft:waxed_exposed_cut_copper_stairs": {
        id: "minecraft:waxed_exposed_cut_copper_stairs",
        name: "Waxed Exposed Cut Copper Stairs",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Waxed Exposed Cut Copper Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Exposed Cut Copper or via Honeycomb application"
        },
        description: "Waxed Exposed Cut Copper Stairs are a decorative building block that has been treated with honeycomb to lock in its first stage of oxidation. They feature a unique tiled texture with a slightly tarnished, brownish-orange appearance that will not change over time. These stairs are perfect for creating permanent rustic rooflines or industrial-themed staircases. In Bedrock Edition, they require a stone-tier pickaxe or better to harvest. Players can remove the wax with an axe if they wish to allow the copper to continue its natural weathering process."
    },
    "minecraft:exposed_cut_copper_slab": {
        id: "minecraft:exposed_cut_copper_slab",
        name: "Exposed Cut Copper Slab",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["minecraft:exposed_cut_copper_slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally or crafted"
        },
        description: "Exposed Cut Copper Slab is a decorative half-block representing the first stage of copper oxidation. It features a slightly tarnished brownish-orange appearance, showing early signs of weathering on its tiled surface. It is ideal for creating rustic rooflines, industrial pathways, and detailed trim where a less-than-pristine copper look is desired. In Bedrock Edition, it can be waxed to preserve its current state or scraped with an axe to revert it. It naturally evolves into weathered cut copper over time and requires a stone pickaxe or better to mine."
    },
    "minecraft:acacia_slab": {
        id: "minecraft:acacia_slab",
        name: "Acacia Slab",
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
        drops: ["Acacia Slab"],
        generation: {
            dimension: "Overworld",
            yRange: "Savanna Villages, Shipwrecks"
        },
        description: "Acacia Slab is a building block crafted from Acacia Planks, featuring a vibrant orange hue characteristic of the savanna wood set. It is used to create smooth elevation changes, detailed flooring, and efficient roofing while maintaining a warm and unique aesthetic. Like other wooden slabs, it can be placed in either the upper or lower half of a block space or combined into a double slab. In Bedrock Edition, it is flammable and can be waterlogged. It generates naturally in savanna villages and shipwrecks, and can be crafted by placing three acacia planks horizontally in a crafting grid."
    },
    "minecraft:warped_stairs": {
        id: "minecraft:warped_stairs",
        name: "Warped Stairs",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:warped_stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Planks"
        },
        description: "Warped Stairs are fire-resistant stairs crafted from warped planks, found in the Warped Forest biome of the Nether. They feature a unique teal and cyan color palette with a fungal texture. Unlike ordinary wooden stairs, they are completely immune to fire and lava, making them ideal for safe building in the Nether. They can be crafted using six warped planks or a stonecutter. Like other wood products, they are best harvested with an axe. Their vibrant color and resistance to burning make them a popular choice for both Nether and Overworld builds."
    },
    "minecraft:sandstone_stairs": {
        id: "minecraft:sandstone_stairs",
        name: "Sandstone Stairs",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["minecraft:sandstone_stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Desert Villages and Temples"
        },
        description: "Sandstone Stairs are building blocks crafted from sandstone, providing a warm, yellowish-tan aesthetic. They naturally generate in desert villages and desert temples, where they are used for roofs, entrances, and decorative accents. These stairs allow players and mobs to change elevation smoothly without jumping. While they have lower blast resistance than stone stairs, they are fire-resistant and ideal for desert-themed architecture. They can be crafted from six sandstone blocks or produced more efficiently using a stonecutter."
    },
    "minecraft:quartz_stairs": {
        id: "minecraft:quartz_stairs",
        name: "Quartz Stairs",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["minecraft:quartz_stairs"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Blocks of Quartz"
        },
        description: "Quartz Stairs are elegant white building blocks crafted from blocks of quartz. They are highly favored for their clean, bright appearance, making them perfect for modern and classical architectural designs. Like other stairs, they facilitate smooth vertical movement and can be placed in various orientations, including upside down for eaves and cornices. They are fire-resistant and provide a sophisticated look to any structure. They can be crafted using six blocks of quartz in a crafting table or made more efficiently in a stonecutter."
    },
    "minecraft:red_sandstone_stairs": {
        id: "minecraft:red_sandstone_stairs",
        name: "Red Sandstone Stairs",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["minecraft:red_sandstone_stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Desert Villages and Temples"
        },
        description: "Red Sandstone Stairs are building blocks crafted from red sandstone, offering a warm and vibrant orange-red aesthetic. They naturally generate in desert villages and desert temples, where they are used for roofs, entrances, and decorative accents. These stairs allow for smooth elevation changes without jumping. While they have lower blast resistance than stone stairs, they are fire-resistant and ideal for mesa or desert-themed architecture. In Bedrock Edition, they can be crafted from six red sandstone blocks or produced efficiently using a stonecutter."
    }
};
