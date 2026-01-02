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
    "minecraft:crying_obsidian": {
        id: "minecraft:crying_obsidian",
        name: "Crying Obsidian",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 10,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Crying Obsidian"],
        generation: {
            dimension: "Nether",
            yRange: "Ruined Portals, Bartering, Bastion Remnants"
        },
        description: "Crying Obsidian is a luminous variant of obsidian that emits purple particles and light level 10. Found in ruined portals and bastion remnants, or obtained by bartering gold ingots with piglins. Like regular obsidian, it is blast-resistant (1200) and requires a diamond or netherite pickaxe to mine. Its primary use is crafting Respawn Anchors, which allow players to set their spawn point in the Nether. It cannot be used to construct Nether portals."
    },
    "minecraft:shroomlight": {
        id: "minecraft:shroomlight",
        name: "Shroomlight",
        hardness: 1,
        blastResistance: 1,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 15,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Shroomlight"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson and Warped Forests"
        },
        description: "Shroomlight is a light-emitting block found naturally in Crimson and Warped Forests in the Nether, growing near the top of huge fungi. It provides a light level of 15, the highest in the game. Shroomlights can be mined fastest with a hoe but can be broken by hand. They are renewable by growing huge fungi using bone meal on nylium. Unlike glowstone, shroomlights are solid blocks and can transmit redstone signals."
    },
    "minecraft:gilded_blackstone": {
        id: "minecraft:gilded_blackstone",
        name: "Gilded Blackstone",
        hardness: 1.5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Gilded Blackstone", "Gold Nugget"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants"
        },
        description: "Gilded Blackstone is a variant of blackstone found exclusively in Bastion Remnants. It has a chance to drop gold nuggets when mined, or the block itself if mined with Silk Touch. Piglins are attracted to it and will become hostile if a player breaks it."
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
            silkTouch: false
        },
        drops: ["Basalt"],
        generation: {
            dimension: "Nether",
            yRange: "Basalt Deltas, Soul Sand Valleys"
        },
        description: "Basalt is a dark, igneous rock found in the Nether. It generates as pillars in Soul Sand Valleys and covers the landscape in Basalt Deltas. It can be directionally placed like logs. Basalt can be generated renewably by flowing lava over soul soil adjacent to blue ice."
    },
    "minecraft:soul_soil": {
        id: "minecraft:soul_soil",
        name: "Soul Soil",
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
        drops: ["Soul Soil"],
        generation: {
            dimension: "Nether",
            yRange: "Soul Sand Valleys"
        },
        description: "Soul Soil is a block found abundantly in Soul Sand Valleys. Unlike Soul Sand, it does not slow down movement. Fire lit on Soul Soil burns as blue Soul Fire, which does twice the damage of normal fire. It is used to construct the Wither."
    }
};
