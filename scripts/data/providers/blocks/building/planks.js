// Pocket Wikipedia Foundation - Plank Blocks Data
// ============================================
// This file contains: All wood plank types (oak, spruce, birch,
// jungle, acacia, dark oak, mangrove, cherry, pale oak, bamboo,
// crimson, warped)
// ============================================

/**
 * Plank blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const plankBlocks = {
    "minecraft:cherry_planks": {
        id: "minecraft:cherry_planks",
        name: "Cherry Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Logs"
        },
        description: "Cherry Planks are a pink-toned building material introduced in the 1.20 update. Crafted from cherry logs found in cherry grove biomes, they offer a warm pink palette ideal for vibrant or sakura-themed builds. Like other wood types, they can be crafted into stairs, slabs, doors, fences, boats, and signs. Despite their delicate appearance, they share the same hardness and blast resistance as other wood planks, making them both decorative and functional. These planks are perfect for adding a natural splash of color to any construction project."
    },
    "minecraft:pale_oak_planks": {
        id: "minecraft:pale_oak_planks",
        name: "Pale Oak Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Logs"
        },
        description: "Pale Oak Planks are crafted from Pale Oak Logs found in the eerie Pale Garden biome. Featuring a muted, desaturated palette of pale cream to light gray, they stand out from warmer wood types. Introduced in update 1.21.50, these planks are essential for crafting pale oak stairs, slabs, doors, and fences. Their ghostly aesthetic is perfect for atmospheric builds, spectral mansions, or any project needing a somber, weathered wood look."
    },
    "minecraft:bamboo_mosaic": {
        id: "minecraft:bamboo_mosaic",
        name: "Bamboo Mosaic",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Mosaic"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Slabs"
        },
        description: "Bamboo Mosaic is a unique decorative variant of the bamboo wood set, featuring a distinct checkered pattern. Introduced in Minecraft 1.20, it provides a specialized aesthetic that differs from regular bamboo planks. It is crafted by arranging two bamboo slabs in a vertical line. This block can be further crafted into bamboo mosaic stairs and slabs, allowing for intricate and stylized architectural designs. While it shares the same physical properties as other planks, its unique texture makes it ideal for modern or Eastern-inspired builds."
    },
    "minecraft:bamboo_planks": {
        id: "minecraft:bamboo_planks",
        name: "Bamboo Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Block of Bamboo"
        },
        description: "Bamboo Planks are a wood-like building material introduced in the 1.20 update. Crafted from blocks of bamboo, these planks have a unique light yellow color and linear texture. They can be used to craft bamboo-themed items like stairs, slabs, doors, fences, and the bamboo raft. While they function like other wood in terms of durability, their exotic appearance makes them ideal for tropical or modern designs. They provide a versatile alternative for builders seeking a fresh aesthetic, and their inclusion adds more variety to the game's wood-based construction options."
    },
    "minecraft:pale_oak_bricks": {
        id: "minecraft:pale_oak_bricks",
        name: "Pale Oak Bricks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Pale Oak Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "Pale Oak Bricks are refined building materials from Minecraft Bedrock 1.21.50's Pale Garden update. Crafted from four pale oak planks in a 2x2 grid, they feature the signature muted, ghostly gray-brown color with a classic brick pattern. Unlike standard wood, they are not flammable, making them valuable for fire-resistant construction in the eerie Pale Garden biome. They can be further crafted into stairs, slabs, and walls, perfect for atmospheric builds."
    },
    "minecraft:pale_oak_stairs": {
        id: "minecraft:pale_oak_stairs",
        name: "Pale Oak Stairs",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "Pale Oak Stairs are versatile building components from Minecraft Bedrock 1.21.50. Crafted from six pale oak planks, they create elegant transitions in builds. The muted, desaturated color palette creates an ethereal, ghostly atmosphere perfect for spectral mansions or atmospheric structures. Like all wooden stairs, they work with slabs for trapdoors and pair with other pale oak pieces. Their standard wood hardness and blast resistance make them practical for general construction."
    },
    "minecraft:warped_planks": {
        id: "minecraft:warped_planks",
        name: "Warped Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Planks"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Stem"
        },
        description: "Warped Planks are a wood-type building block native to the Nether's Warped Forest. They are crafted from warped stems or hyphae. One of their most significant properties is being completely fire-resistant, making them an excellent choice for construction in the Nether or near lava. They feature a unique turquoise-teal color that doesn't exist in Overworld wood sets. Like other planks, they can be crafted into various subsets like stairs, slabs, fences, and doors. Despite being 'wood', they do not burn and cannot be used as fuel in a furnace."
    },
    "minecraft:crimson_planks": {
        id: "minecraft:crimson_planks",
        name: "Crimson Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Planks"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Stem"
        },
        description: "Crimson Planks are the fire-resistant counterpart to Warped Planks, found in the Nether's Crimson Forest. They are crafted from crimson stems or hyphae and possess a deep burgundy-red color. Like their warped cousins, crimson planks are impervious to fire and lava, making them ideal for hazardous environments. They provide a unique gothic aesthetic to builds and can be used to craft a full set of crimson-colored wooden items. They are a vital resource for players establishing permanent bases in the Nether who want to avoid the risks of traditional wood."
    },
    "minecraft:mangrove_planks": {
        id: "minecraft:mangrove_planks",
        name: "Mangrove Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A"
        },
        description: "Mangrove Planks are a deep red building material harvested from Mangrove trees in the Mangrove Swamp biome. They were introduced in the 1.19 Wild Update. Like other wood types, they are versatile and can be crafted into stairs, slabs, doors, and fences. Their rich coloration makes them a favorite for adding bold accents to builds, especially in tropical or nautical themes. They share the same physical properties as other wood planks, offering both durability and aesthetic appeal for a wide range of construction projects."
    },
    "minecraft:oak_planks": {
        id: "minecraft:oak_planks",
        name: "Oak Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oak Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Oak Logs"
        },
        description: "Oak Planks are one of the most fundamental building blocks in Minecraft, crafted from oak logs. They have a classic warm-brown color that makes them suitable for a wide variety of architectural styles, from simple starter huts to complex medieval structures. As a versatile crafting material, they are essential for creating tools, chests, doors, and fences. Oak trees are prevalent across many biomes, ensuring that oak planks are almost always accessible to players. Their balanced aesthetic and ease of acquisition make them a staple of any survival world."
    },
    "minecraft:spruce_planks": {
        id: "minecraft:spruce_planks",
        name: "Spruce Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Spruce Logs"
        },
        description: "Spruce Planks are a darker, more rustic-looking wood type harvested from spruce logs, typically found in cold taiga and snowy biomes. Their rich, dark brown texture is highly favored by builders for creating cozy cabins, medieval castles, and northern-themed structures. Like other planks, they are completely flammable and can be used as fuel or crafted into various wooden furniture and components. Their color provides a striking contrast when paired with lighter materials like birch or stone, making them a key element in sophisticated building palettes."
    },
    "minecraft:birch_planks": {
        id: "minecraft:birch_planks",
        name: "Birch Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Logs"
        },
        description: "Birch Planks feature a very light, pale tan color that offers a bright and clean aesthetic, distinct from the warmer tones of other wood types. Harvested from birch trees found in birch forests, these planks are a favorite for modern architecture, interior design, and airy, minimalist builds. They can be crafted into all standard wooden items, including stairs, slabs, and signs, all of which retain the signature light birch hue. Their high contrast when used alongside darker blocks makes them excellent for highlighting structural details or creating checkered floors."
    },
    "minecraft:jungle_planks": {
        id: "minecraft:jungle_planks",
        name: "Jungle Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Logs"
        },
        description: "Jungle Planks are crafted from the logs of the massive trees inhabiting jungle biomes. They possess a unique brownish-red hue with a hint of green, reflecting the lush and vibrant environment where they originate. These planks are ideal for tropical-themed builds, treehouses, and exotic furniture. While functionally identical to other wood planks in terms of durability and crafting uses, their specific coloration adds a touch of the wild to any construction project. They are often used in tandem with bamboo and jungle leaves to create immersive rainforest bases."
    },
    "minecraft:acacia_planks": {
        id: "minecraft:acacia_planks",
        name: "Acacia Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Logs"
        },
        description: "Acacia Planks are a highly distinctive wood type with a vibrant orange interior, harvested from the umbrella-shaped trees of the savanna biome. Their bold and warm coloration makes them stand out significantly from the more traditional browns of oak or spruce. Acacia planks are frequently used for accents, specialized flooring, or to create themed structures that match the dry, sunny atmosphere of the savanna. Like other wood types, they are essential for crafting a full set of orange-hued doors, fences, and boats, providing a unique palette for creative builders."
    }
};
