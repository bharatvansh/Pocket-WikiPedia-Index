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
    }
};
