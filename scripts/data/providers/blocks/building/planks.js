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
        description: "Oak Planks are a common building block crafted from Oak Logs. They feature a light brown color with a classic wood grain texture. As one of the most widely used materials, they are essential for crafting tools, crafting tables, chests, and sticks. They have a hardness of 2.0 and blast resistance of 3.0, making them suitable for basic shelter. Oak planks are flammable and can be used as fuel. They are the base material for oak stairs, slabs, fences, and doors."
    },
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
    }
};
