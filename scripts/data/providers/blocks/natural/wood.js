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
    },
    "minecraft:stripped_bamboo": {
        id: "minecraft:stripped_bamboo",
        name: "Block of Stripped Bamboo",
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
        drops: ["Block of Stripped Bamboo"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Block of Bamboo using Axe"
        },
        description: "The Block of Stripped Bamboo is created by using an axe on a regular Block of Bamboo. It features the same segmented texture but without the bark, revealing a smoother interior. Introduced in 1.19, it can be crafted into bamboo planks or used decoratively. Like all bamboo blocks, it is highly flammable with hardness and blast resistance of 2.0. Its unique linear pattern distinguishes it from traditional log-based blocks, making it ideal for exotic Asian-inspired architectural designs."
    },
    "minecraft:warped_stem": {
        id: "minecraft:warped_stem",
        name: "Warped Stem",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Stem"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest"
        },
        description: "Warped Stem is a turquoise-colored, log-like block found in the Warped Forest biome of the Nether. Unlike Overworld logs, warped stems are fire-resistant and do not burn. They serve as the 'wood' of the huge fungi in the biome. They can be stripped using an axe to create Stripped Warped Stem, or crafted into Warped Planks. The animated texture of the stem pulses slightly, adding a unique alien feel to builds."
    },
    "minecraft:pale_oak_wood": {
        id: "minecraft:pale_oak_wood",
        name: "Pale Oak Wood",
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
        drops: ["Pale Oak Wood"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Logs"
        },
        description: "Pale Oak Wood is a block with the bark texture of Pale Oak logs on all six sides, introduced in Minecraft 1.21.50. It is crafted by arranging four Pale Oak Logs in a 2x2 grid. Unlike logs, which have a top and bottom 'rings' texture, wood blocks appear as bark on every face, making them ideal for creating seamless organic structures like custom trees or roots. Like other wood blocks, it can be stripped using an axe to create Stripped Pale Oak Wood."
    },
    "minecraft:crimson_stem": {
        id: "minecraft:crimson_stem",
        name: "Crimson Stem",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Stem"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson Forest"
        },
        description: "Crimson Stem is a log-like block found in the Crimson Forest biome of the Nether. It serves as the trunk of huge crimson fungi. Unlike Overworld logs, crimson stems are fire-resistant and do not burn. They can be stripped using an axe to create Stripped Crimson Stem, or crafted into Crimson Planks. The stem has a pulsating animation similar to Warped Stem."
    },
    "minecraft:crimson_hyphae": {
        id: "minecraft:crimson_hyphae",
        name: "Crimson Hyphae",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Hyphae"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Stem"
        },
        description: "Crimson Hyphae is a block with the bark texture of Crimson Stem on all six sides. It can be crafted by arranging four Crimson Stems in a 2x2 grid. It is often used in building for creating custom trees or organic structures where the log rings are not desired. Like the stem, it is fire-resistant and can be stripped to create Stripped Crimson Hyphae."
    },
    "minecraft:acacia_log": {
        id: "minecraft:acacia_log",
        name: "Acacia Log",
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
        drops: ["Acacia Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Savanna Biomes"
        },
        description: "Acacia Log is a wood block obtained from Acacia trees found in the Savanna biome. It features a distinctive gray bark and a vibrant orange interior. Like other logs, it can be stripped with an axe, crafted into Acacia Planks, or used as fuel. The unique color of Acacia wood makes it a popular choice for colorful and exotic builds."
    },
    "minecraft:birch_log": {
        id: "minecraft:birch_log",
        name: "Birch Log",
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
        drops: ["Birch Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Birch Forest Biomes"
        },
        description: "Birch Log is a wood block obtained from Birch trees found in Birch Forest biomes. It is easily recognizable by its white, paper-like bark with black horizontal marks. The wood inside is a pale, creamy color. Birch logs can be crafted into Birch Planks, stripped with an axe, or used as fuel. Their bright appearance is excellent for modern and clean architectural styles."
    },
    "minecraft:spruce_log": {
        id: "minecraft:spruce_log",
        name: "Spruce Log",
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
        drops: ["Spruce Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga Biomes"
        },
        description: "Spruce Log is a wood block obtained from Spruce trees found in Taiga, Old Growth Pine Taiga, and Snowy Taiga biomes. It has a dark brown bark and a similar colored interior. Spruce logs are a versatile building material, often used for rustic and medieval structures. They can be crafted into Spruce Planks, stripped with an axe to create Stripped Spruce Logs, or used as fuel."
    }
};
