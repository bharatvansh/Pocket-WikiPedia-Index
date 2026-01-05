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
            yRange: "63 to 100"
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
        drops: ["Pale Oak Leaves"],
        generation: {
            dimension: "Overworld",
            yRange: "63 to 100"
        },
        description: "Pale Oak Leaves are the distinctive foliage of Pale Oak trees in the Pale Garden biome, added in Minecraft Bedrock Edition 1.21.50. These pale gray leaves create a ghostly canopy that filters light uniquely compared to other tree types. When broken with shears, they drop the leaf block itself for easy collection. The muted color palette of pale oak leaves makes them ideal for creating ethereal forest landscapes, spectral garden builds, or adding subtle contrast to other biomes."
    },
    "minecraft:cherry_log": {
        id: "minecraft:cherry_log",
        name: "Cherry Log",
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
        drops: ["Cherry Log"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 192"
        },
        description: "Cherry logs are obtained from cherry trees found in the vibrant cherry grove biome. They feature a unique dark purple bark and a beautiful pinkish interior, making them highly desirable for decorative building. Like other logs, they can be crafted into cherry planks, stripped to create stripped cherry logs, or used as fuel in a furnace."
    },
    "minecraft:mangrove_log": {
        id: "minecraft:mangrove_log",
        name: "Mangrove Log",
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
        drops: ["Mangrove Log"],
        generation: {
            dimension: "Overworld",
            yRange: "63 to 70"
        },
        description: "Mangrove Logs are obtained from Mangrove trees found in Mangrove Swamps. They have a dark brown bark and a deep red interior. Like other logs, they can be crafted into planks or stripped with an axe. Their unique color makes them excellent for building."
    },
    "minecraft:bamboo_block": {
        id: "minecraft:bamboo_block",
        name: "Block of Bamboo",
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
        drops: ["Block of Bamboo"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 9 Bamboo"
        },
        description: "A block of bamboo is a wood-like block crafted from nine bamboo items. It functions similarly to other logs, meaning it can be stripped with an axe to create stripped bamboo blocks or crafted into bamboo planks. It features a unique segmented appearance."
    },
    "minecraft:cherry_leaves": {
        id: "minecraft:cherry_leaves",
        name: "Cherry Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Cherry Sapling", "Stick", "Cherry Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 192"
        },
        description: "Cherry Leaves are the beautiful pink foliage of cherry trees found in the cherry grove biome. They drop pink petals that create a unique atmosphere around the tree. These leaves have a low hardness and blast resistance, and they are highly flammable. When broken without shears or silk touch, they have a small chance of dropping cherry saplings and sticks. In Bedrock Edition, they were added as part of the 1.20 Trails & Tales update, bringing a vibrant and aesthetic touch to any landscape or garden build."
    }
};
