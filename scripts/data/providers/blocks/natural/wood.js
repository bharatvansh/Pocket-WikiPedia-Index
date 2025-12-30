// Pocket Wikipedia Foundation - Wood & Log Blocks Data
// ============================================
// This file contains: All log types (oak, spruce, birch, jungle,
// acacia, dark oak, mangrove, cherry, pale oak, crimson stem,
// warped stem), stripped logs, wood blocks, stripped wood,
// leaves (all types), bamboo block, bamboo mosaic
// ============================================

/**
 * Wood and log blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const woodBlocks = {
    "minecraft:pale_oak_log": {
        id: "minecraft:pale_oak_log",
        name: "Pale Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "Pale Oak Log is a wood type unique to the Pale Garden biome, introduced in Minecraft Bedrock Edition 1.21.50. These pale, grayish-brown logs form the trunks of Pale Oak trees, creating an eerie atmosphere with their muted coloration. Like other logs, they can be stripped with an axe and crafted into pale oak planks, stripped pale oak logs, or pale oak wood. The distinctive appearance of pale oak makes it popular for atmospheric builds, especially those seeking a ghostly or mystical aesthetic."
    },
    "minecraft:pale_oak_leaves": {
        id: "minecraft:pale_oak_leaves",
        name: "Pale Oak Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Sapling"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "Pale Oak Leaves are the distinctive foliage of Pale Oak trees in the Pale Garden biome, added in Minecraft Bedrock Edition 1.21.50. These pale gray leaves create a ghostly canopy that filters light uniquely compared to other tree types. When broken with shears, they drop pale oak saplings for propagation. The muted color palette of pale oak leaves makes them ideal for creating ethereal forest landscapes, spectral garden builds, or adding subtle contrast to other biomes."
    }
};
