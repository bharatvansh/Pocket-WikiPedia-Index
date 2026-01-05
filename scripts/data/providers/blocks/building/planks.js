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
    }
};
