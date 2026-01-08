// Pocket Wikipedia Foundation - Nether Blocks Data
// ============================================
// This file contains: Netherrack, nether bricks, red nether bricks,
// nether wart block, warped wart block, crimson nylium, warped nylium,
// crimson stem, warped stem, shroomlight, basalt, smooth basalt,
// polished basalt, blackstone variants, gilded blackstone,
// soul sand, soul soil, magma block, glowstone, crying obsidian
// ============================================

/**
 * Nether dimension blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const netherBlocks = {
    "minecraft:nether_bricks": {
        id: "minecraft:nether_bricks",
        name: "Nether Bricks",
        hardness: 2,
        blastResistance: 2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Nether Bricks"],
        generation: {
            dimension: "Nether",
            yRange: "Nether Fortresses (Y 60-120)"
        },
        description: "Nether Bricks are the primary building blocks of Nether fortresses, massive structures that generate in the Nether dimension. These dark reddish-brown bricks are crafted from four nether brick items, which are smelted from netherrack. Nether bricks are fire-resistant and immune to ghast fireballs, making them excellent for defensive structures. They can be crafted into stairs, slabs, walls, fences, and other decorative variants. Nether bricks are not affected by wither or ender dragon attacks, providing durable construction in hostile dimensions."
    },
    "minecraft:quartz_block": {
        id: "minecraft:quartz_block",
        name: "Quartz Block",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Quartz Block"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants, crafted from Nether Quartz"
        },
        description: "Quartz Block is a white crystalline building block crafted from four nether quartz items. It generates naturally in bastion remnants and can be obtained from nether quartz ore in the Nether. Quartz blocks come in several variants: standard quartz, chiseled quartz with intricate patterns, pillar quartz with a vertical texture, and smooth quartz made by smelting. They are popular for clean, modern builds and offer a bright white aesthetic. Quartz blocks are blast-resistant and require a pickaxe to mine, making them versatile decorative materials for elegant structures."
    },
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
        drops: ["Gilded Blackstone or Gold Nuggets (10% chance for 2-5 nuggets)"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants and bastion chests"
        },
        description: "Gilded blackstone is a rare gold-flecked variant of blackstone found exclusively in Bastion Remnants within the Nether. When mined with any pickaxe, it has a 10% chance to drop 2-5 gold nuggets instead of the block itself. However, mining with a pickaxe enchanted with Silk Touch always drops the block. It has the same hardness and blast resistance as regular blackstone, making it a decorative alternative with gold flecks that offer the possibility of yielding gold nuggets when mined. It substitutes for blackstone in crafting recipes and is an excellent source of renewable gold in the Nether."
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
            yRange: "Soul Sand Valley and Basalt Deltas biomes"
        },
        description: "Basalt is a dark gray volcanic rock that forms naturally in the Nether's Soul Sand Valley and Basalt Deltas biomes. It generates in tall pillar formations and can also form when lava flows over soul soil adjacent to blue ice. Basalt is a solid block that can be mined with any pickaxe, dropping itself. It serves primarily as a building material with a unique dark aesthetic and can be smelted into smooth basalt. Unlike many other Nether blocks, basalt does not generate in bastion remnants but can be found throughout the Nether's unique volcanic landscapes."
    },
    "minecraft:smooth_basalt": {
        id: "minecraft:smooth_basalt",
        name: "Smooth Basalt",
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
        drops: ["Smooth Basalt"],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes and Ancient Cities"
        },
        description: "Smooth basalt is an ornamental variant of basalt with a polished, refined texture. It naturally generates as the outer layer of amethyst geodes and can be found in Ancient Cities deep underground. Alternatively, it can be crafted by smelting regular basalt in a furnace. Unlike its rough counterpart, smooth basalt cannot naturally generate in the Nether. It shares the same hardness and blast resistance as basalt, making it a durable decorative block. Its smooth appearance makes it popular for modern builds and clean architectural designs, especially in underground structures.",
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
            silkTouch: false,
        },
        drops: ["Soul Sand"],
        generation: {
            dimension: "Nether",
            yRange: "Soul Sand Valley (Y 0-128)",
        },
        description: "Soul Sand is a unique block found naturally in the Nether, primarily within the Soul Sand Valley biome. It significantly slows down the movement of most mobs and players walking upon it, and it also causes them to sink slightly into the block. When placed under water, it creates a bubble column that pushes entities and items upwards, which is essential for many water-based elevator designs. Soul Sand is also a requirement for summoning the Wither and can be used to grow nether wart.",
    },
    "minecraft:nether_gold_ore": {
    id: "minecraft:nether_gold_ore",
    name: "Nether Gold Ore",
    hardness: 3.0,
    blastResistance: 3.0,
    flammability: false,
    gravityAffected: false,
    transparent: false,
    luminance: 0,
    mining: {
        tool: "Pickaxe",
        minTier: "Wood",
        silkTouch: true
    },
    drops: ["Gold Nuggets (2-6, increased with Fortune)"],
    generation: {
        dimension: "Nether",
        yRange: "10 to 117"
    },
    description: "Nether Gold Ore is a mineral block found exclusively in Nether that drops gold nuggets instead of raw gold when mined. It generates in ore blobs throughout all Nether biomes from Y-levels 10 to 117, attempting to replace netherrack 10 times per chunk. When mined with any pickaxe, it drops 2-6 gold nuggets. Fortune enchantment can multiply drops: Fortune I has 33.3% chance for 2x drops, Fortune II has 25% chance for 2x or 3x, and Fortune III has 20% chance each for 2x, 3x, or 4x drops. Breaking nether gold ore angers nearby piglins, similar to other gold-related blocks. Silk Touch can be used to obtain the ore itself, which can then be smelted into gold ingots for efficiency."
    },
    "minecraft:crimson_nylium": {
        id: "minecraft:crimson_nylium",
        name: "Crimson Nylium",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Netherrack"],
        generation: {
            dimension: "Nether",
            yRange: "Any"
        },
        description: "Crimson Nylium is a grass-like block found exclusively in the Crimson Forest biome of the Nether. It is a variant of netherrack covered in reddish fungal growth. While it looks like grass, it must be mined with a pickaxe. If mined without Silk Touch, it drops netherrack. Players can use bone meal on netherrack adjacent to crimson nylium to spread it, or use bone meal on the nylium itself to grow crimson fungi and roots. It is essential for growing huge crimson fungi, which provide crimson stems and other nether vegetation."
    },
    "minecraft:warped_nylium": {
        id: "minecraft:warped_nylium",
        name: "Warped Nylium",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Netherrack (default) or Warped Nylium (Silk Touch)"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest (Surface)"
        },
        description: "Warped Nylium is a variant of netherrack covered in warped fungus, found naturally generating as the surface layer of Warped Forest biomes. It has a teal-blue grass-like texture on top and a netherrack texture on the bottom. Like crimson nylium, it can be spread to adjacent netherrack blocks using bone meal. When mined without Silk Touch, it drops netherrack; with Silk Touch, it drops itself. It serves as a spawnable surface for warped fungi, roots, and vines when bone meal is applied."
    }
    };
