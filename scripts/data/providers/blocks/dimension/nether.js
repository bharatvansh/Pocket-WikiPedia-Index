// Pocket Wikipedia Foundation - Nether Blocks Data
// ============================================
// This file contains: Netherrack, nether bricks, red nether bricks,
// nether wart block, warped wart block, crimson nylium, warped nylium,
// crimson stem, warped stem, shroomlight, basalt, smooth basalt,
// polished basalt, blackstone variants, gilded blackstone,
// soul sand, soul soil, magma block, glowstone
// ============================================

/**
 * Nether dimension blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const netherBlocks = {
    "minecraft:magma": {
        id: "minecraft:magma",
        name: "Magma Block",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 3,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Magma Block"],
        generation: {
            dimension: "Nether",
            yRange: "All Y-levels"
        },
        description: "A light-emitting naturally-occurring block found in the Nether and the Overworld. It causes continuous fire damage to entities standing on it, except for those with fire resistance or frost walker boots. It creates downward bubble columns when placed underwater."
    },
    "minecraft:blackstone": {
        id: "minecraft:blackstone",
        name: "Blackstone",
        hardness: 1.5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Blackstone"],
        generation: {
            dimension: "Nether",
            yRange: "Basalt deltas, underground (Y 5-36), and bastion remnants"
        },
        description: "Blackstone is a dark gray stone-like block introduced in Minecraft 1.16, found naturally in the Nether. It generates abundantly in basalt deltas, below lava seas, underground, and in bastion remnants. Piglins can barter 8-16 blackstone blocks when given gold ingots. Blackstone substitutes for cobblestone in many crafting recipes including stone tools, furnaces, and brewing stands. It can be crafted into polished blackstone, bricks, and decorative forms. With hardness of 1.5 and blast resistance of 6, blackstone provides excellent building material with a unique dark aesthetic."
    },
    "minecraft:basalt": {
        id: "minecraft:basalt",
        name: "Basalt",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Basalt"],
        generation: {
            dimension: "Nether",
            yRange: "Soul sand valleys (all Y-levels) and Basalt deltas"
        },
        description: "Basalt is a dark gray volcanic rock block found exclusively in the Nether, introduced in Minecraft 1.16. It generates naturally as tall pillars in soul sand valleys and as regular terrain in basalt deltas. Basalt can also form when lava flows over blue ice adjacent to soul soil. Players can craft four basalt into polished basalt for a smoother aesthetic. With a hardness of 1.25 and blast resistance of 4.2, basalt is moderately durable. Its distinctive vertical columnar texture makes it popular for architectural pillars and decorative stonework in Nether-themed builds."
    },
    "minecraft:netherrack": {
        id: "minecraft:netherrack",
        name: "Netherrack",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Netherrack"],
        generation: {
            dimension: "Nether and Overworld (ruined portals)",
            yRange: "Nether: all Y-levels; Overworld: Y 0-128 (ruined portals)"
        },
        description: "Netherrack is the primary building block of the Nether dimension, forming the majority of its terrain. This reddish-gray rock has a relatively low hardness of 0.4, making it easy to mine with any pickaxe. Netherrack's most notable property is that fire placed on top of it burns indefinitely, making it useful for fireplaces and nether portals. It also generates as part of ruined portals in both dimensions and bastion remnants. Despite its low blast resistance, netherrack remains a common building material due to its abundance and atmospheric appearance."
    },
    "minecraft:soul_sand": {
        id: "minecraft:soul_sand",
        name: "Soul Sand",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Soul Sand"],
        generation: {
            dimension: "Nether",
            yRange: "Soul sand valleys and bastion remnants (Y 20-70)"
        },
        description: "Soul Sand is a brownish-gray block with distinctive bubble textures found abundantly in soul sand valleys and bastion remnants. It slows down entities walking on it to about 40% of normal speed, making it useful for traps and mob farms. When underwater, soul sand creates upward bubble columns that lift entities, enabling water elevators. It can support various Nether plants like nether wart and soul torches. Soul sand is also an essential ingredient in crafting soul fire torches and is used in the Wither spawning ritual. With a hardness of 0.5 and blast resistance of 0.5, it's relatively soft and requires only a shovel to mine."
    }
};
