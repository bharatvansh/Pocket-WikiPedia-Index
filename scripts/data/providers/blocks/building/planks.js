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
        description: "Cherry Planks are a beautiful pink-toned building material introduced in Minecraft 1.20 Trails & Tales update, crafted from cherry logs found in the rare cherry grove biome. These planks feature a distinctive warm pink color that ranges from soft pastel to deeper coral hues, making them highly sought after for creating vibrant, eye-catching builds. Cherry planks can be crafted into all standard wooden components including stairs, slabs, doors, trapdoors, fences, fence gates, and pressure plates. The cherry wood type also supports crafting of essential items such as boats, buttons, signs, and tool handles. Their unique pink color palette makes cherry planks perfect for building sakura-themed structures, romantic cottages, or any project requiring a splash of warm, natural color. Despite their delicate appearance, cherry planks have the same hardness and blast resistance as other wood planks, making them both beautiful and functional."
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
        description: "Pale Oak Planks are a versatile building material crafted from Pale Oak Logs, found in the eerie Pale Garden biome. They feature a distinctively muted, desaturated color palette that ranges from pale cream to light gray, setting them apart from the warmer tones of traditional wood types. Introduced in Minecraft Bedrock Edition 1.21.50, these planks are essential for crafting various pale oak themed items such as stairs, slabs, doors, and fences. Their ghostly appearance makes them ideal for constructing atmospheric builds, spectral mansions, or any structure requiring a somber or weathered wood aesthetic."
    }
};
