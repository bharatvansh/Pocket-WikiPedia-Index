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
        description: "Bamboo Planks are a wood-like building block crafted from Blocks of Bamboo, introduced in the 1.20 Trails & Tales update. They have a unique yellowish texture resembling woven bamboo strips. Unlike other planks which are crafted from logs, these are made from bamboo blocks. They can be used to craft stairs, slabs, fences, doors, trapdoors, signs, buttons, pressure plates, and the unique Bamboo Mosaic block. They serve as a renewable building material that can be farmed efficiently."
    }
};
