// Pocket Wikipedia Foundation - Nether Blocks Data
// ============================================
// This file contains: Netherrack, nether bricks, red nether bricks,
// nether wart block, warped wart block, crimson nylium, warped nylium,
// crimson stem, warped stem, shroomlight, basalt, smooth basalt,
// polished basalt, weeping vines, crimson fungus, warped fungus,
// blackstone variants, gilded blackstone,
// soul sand, soul soil, magma block, glowstone, crying obsidian
// ============================================

/**
 * Nether dimension blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const netherBlocks = {
    "minecraft:netherrack": {
        id: "minecraft:netherrack",
        name: "Netherrack",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: false,
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
            dimension: "Nether",
            yRange: "All Y-levels"
        },
        description: "Netherrack is the most common block in the Nether, forming the majority of the terrain. It has a hardness of 0.4 and blast resistance of 0.4, making it relatively soft but still requires a pickaxe to mine. Fire can burn indefinitely on top of netherrack, allowing players to create eternal flames. In Bedrock Edition, netherrack can generate as part of nether portals when they spawn, making it renewable. This reddish-brown block serves as the primary building material for Nether structures and can be smelted into nether bricks."
    },
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
    },
    "minecraft:nether_wart_block": {
        id: "minecraft:nether_wart_block",
        name: "Nether Wart Block",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Nether Wart Block"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson Forest biome"
        },
        description: "Nether Wart Block is a decorative block found naturally in Crimson Forest biomes in the Nether, typically forming the leaves of huge crimson fungi. It can be crafted from nine nether wart items but, unlike other storage blocks, it cannot be crafted back into nether wart. This red, textured block shares similar properties with wood but cannot be used as fuel or to create planks. It is best mined with a hoe. While primarily decorative, it serves as a key atmospheric element of the Crimson Forest, matching the red hue of the biome."
    },
    "minecraft:warped_wart_block": {
        id: "minecraft:warped_wart_block",
        name: "Warped Wart Block",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Wart Block"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest biome"
        },
        description: "Warped Wart Block is a decorative block found naturally in Warped Forest biomes in the Nether, forming the foliage of huge warped fungi. It has a distinct teal-blue color and texture similar to nether wart blocks. Unlike nether wart blocks, it cannot be crafted from any item, nor can it be crafted into anything. It is purely a natural block obtained by mining huge warped fungi or finding it in bastion remnant chests. The fastest way to mine it is with a hoe. It provides a unique alien aesthetic for builders looking for vibrant blue organic materials."
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
            yRange: "Soul Sand Valley"
        },
        description: "Soul Soil is a block naturally found in the Soul Sand Valley biome of the Nether. Unlike Soul Sand, it does not slow down movement and is a full solid block. Soul Fire burns indefinitely on top of Soul Soil. It is used to craft Soul Torches and Soul Campfires. It produces basalt when lava flows over it while it is next to Blue Ice."
    },
    "minecraft:soul_fire": {
        id: "minecraft:soul_fire",
        name: "Soul Fire",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 10,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Nether",
            yRange: "Soul Sand Valley biomes"
        },
        description: "Soul Fire is a turquoise-colored variant of fire that naturally generates in Soul Sand Valleys in the Nether. It is created when fire is ignited on soul sand or soul soil blocks. Soul fire deals twice the damage of regular fire (1 heart per second) and does not go out naturally on its native blocks. It emits a light level of 10, which is dimmer than standard fire. In Bedrock Edition, soul fire is essential for crafting soul torches, soul lanterns, and soul campfires. It also repels Piglins, making it a useful defensive tool when exploring the Nether's more hazardous regions."
    },
    "minecraft:crimson_roots": {
        id: "minecraft:crimson_roots",
        name: "Crimson Roots",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Roots (with Shears)"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson Forest"
        },
        description: "Crimson Roots are decorative vegetation blocks found in the Crimson Forest biome. They generate naturally on top of Crimson Nylium. Using Bone Meal on Crimson Nylium will produce Crimson Roots along with Crimson Fungi. They are non-solid blocks that break instantly when mined. To collect them as an item, Shears must be used; otherwise, they drop nothing. They do not burn, despite being vegetation."
    },
    "minecraft:warped_roots": {
        id: "minecraft:warped_roots",
        name: "Warped Roots",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Roots (with Shears)"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest"
        },
        description: "Warped Roots are decorative vegetation blocks native to the Warped Forest biome in the Nether. They grow naturally on Warped Nylium and share the biome's distinctive teal color scheme. Like their crimson counterparts, they can be generated by using Bone Meal on Warped Nylium. They require Shears to be harvested as an item. These roots add detail to the alien landscape of the Warped Forest and are safe from fire."
    },
    "minecraft:nether_sprouts": {
        id: "minecraft:nether_sprouts",
        name: "Nether Sprouts",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Nether Sprouts (with Shears)"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest"
        },
        description: "Nether Sprouts are small, grass-like vegetation found exclusively in the Warped Forest biome. They grow on Warped Nylium alongside Warped Roots and Fungi. Unlike roots, they appear as small clumps of teal grass. They can be harvested using Shears. When composted, they have a 50% chance of raising the compost level. They provide a subtle, grassy detail to Warped Forest builds and do not burn."
    },
    "minecraft:twisting_vines": {
        id: "minecraft:twisting_vines",
        name: "Twisting Vines",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Twisting Vines (33% chance)"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest"
        },
        description: "Twisting Vines are a climbing plant found in the Warped Forest biome of the Nether. They grow upward from the ground, unlike weeping vines which grow downward. Players can climb them like ladders. Bone meal can be applied to extend their growth. They break instantly by hand, having a 33% chance to drop themselves, but shears or Silk Touch always yield the item. They are fire-resistant and add verticality to the Warped Forest landscape."
    },
    "minecraft:quartz_ore": {
        id: "minecraft:quartz_ore",
        name: "Nether Quartz Ore",
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
        drops: ["Nether Quartz (1, affected by Fortune)"],
        generation: {
            dimension: "Nether",
            yRange: "10 to 117"
        },
        description: "Nether Quartz Ore is a common ore found exclusively in the Nether, appearing embedded in Netherrack. It is the only natural source of Nether Quartz, which is used for crafting various redstone components like comparators and observers, as well as decorative quartz blocks. When mined with a pickaxe, it drops one piece of Nether Quartz and experience orbs. It can be found at all altitudes in the Nether but is most abundant between Y-levels 10 and 117. Like other Nether ores, it is safe from lava and fire."
    },
    "minecraft:chiseled_nether_bricks": {
        id: "minecraft:chiseled_nether_bricks",
        name: "Chiseled Nether Bricks",
        hardness: 2.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Chiseled Nether Bricks"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from 2 Nether Brick Slabs"
        },
        description: "Chiseled Nether Bricks are a decorative variant of Nether Bricks, featuring a unique skull-like or geometric pattern. Introduced in the Nether Update, they add architectural detail to Nether-themed builds. They are crafted by stacking two Nether Brick slabs vertically in a crafting grid or by using a stonecutter on a Nether Brick block. Like regular Nether Bricks, they are fire-resistant and require a pickaxe to mine. They also produce a unique \"bass drum\" sound when placed under a note block."
    },
    "minecraft:polished_blackstone": {
        id: "minecraft:polished_blackstone",
        name: "Polished Blackstone",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Blackstone"],
        generation: {
            dimension: "Nether",
            yRange: null
        },
        description: "Polished Blackstone is a dark, sleek building block crafted from four Blackstone blocks in a 2x2 grid or processed through a stonecutter. It features a smoother finish compared to raw Blackstone, making it a popular choice for detailed Nether-themed architecture and elegant dark builds. It generates naturally in Bastion Remnants, often forming parts of the structural foundation and decorative trim. Like its base form, it is fire-resistant and requires a pickaxe to mine. Polished Blackstone can be further processed into slabs, stairs, and walls, or used to craft Polished Blackstone Bricks."
    },
    "minecraft:chiseled_polished_blackstone": {
        id: "minecraft:chiseled_polished_blackstone",
        name: "Chiseled Polished Blackstone",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Chiseled Polished Blackstone"],
        generation: {
            dimension: "Nether",
            yRange: null
        },
        description: "Chiseled Polished Blackstone is a decorative variant of Blackstone featuring an intricate piglin-snout pattern. It is primarily used as an accent block in Nether-themed builds or to denote structural importance. This block can be crafted by vertically stacking two Polished Blackstone slabs in a crafting table or by using a stonecutter. It generates naturally in Bastion Remnants, particularly in treasury rooms and throne areas. It has the same hardness and blast resistance as regular Blackstone and serves as a stylish decorative element that reflects the history of the Nether."
    },
    "minecraft:polished_blackstone_bricks": {
        id: "minecraft:polished_blackstone_bricks",
        name: "Polished Blackstone Bricks",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Blackstone Bricks"],
        generation: {
            dimension: "Nether",
            yRange: null
        },
        description: "Polished Blackstone Bricks are a refined building block crafted from four Polished Blackstone blocks. They feature a classic brick pattern in a deep dark gray color, offering a sophisticated look for fortress-like constructions in the Nether. These bricks generate naturally in Bastion Remnants, forming large sections of the walls and bridges. They are highly durable and blast-resistant, making them excellent for protective structures. Builders often use them alongside other Blackstone variants to create depth and texture in dark-themed architectural designs."
    },
    "minecraft:cracked_polished_blackstone_bricks": {
        id: "minecraft:cracked_polished_blackstone_bricks",
        name: "Cracked Polished Blackstone Bricks",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Cracked Polished Blackstone Bricks"],
        generation: {
            dimension: "Nether",
            yRange: null
        },
        description: "Cracked Polished Blackstone Bricks are a weathered variant of polished blackstone bricks, achieved by smelting them in a furnace. They add a sense of age and decay to structures, making them ideal for building ruins or ancient-looking citadels in the Nether dimension. They also generate naturally in Bastion Remnants, where they reflect the wear and tear of the harsh Nether environment over time. Despite their cracked appearance, they retain the same hardness and blast resistance as their intact counterparts. They do not have further crafted variants like slabs or stairs."
    },
    "minecraft:cracked_nether_bricks": {
        id: "minecraft:cracked_nether_bricks",
        name: "Cracked Nether Bricks",
        hardness: 2.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Cracked Nether Bricks"],
        generation: {
            dimension: "None"
        },
        description: "Cracked Nether Bricks are a decorative variant of nether bricks that appear aged and fractured. They are obtained by smelting regular nether bricks in a furnace. These blocks provide a weathered aesthetic to Nether fortresses and other dark-themed builds, suggesting long-term exposure to the Nether's intense heat. While they share the same resistance and hardness as regular nether bricks, they cannot be used to craft stairs or slabs. They are particularly effective when mixed with standard nether bricks to create textured, ruined walls and historical structures."
    },
    "minecraft:quartz_pillar": {
        id: "minecraft:quartz_pillar",
        name: "Quartz Pillar",
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
        drops: ["Quartz Pillar"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants, crafted from 2 Quartz Blocks"
        },
        description: "Quartz Pillar is a decorative variant of the quartz block, featuring a distinctive cylindrical texture with vertical lines. It is primarily used for constructing columns, pillars, and grand architectural features in classical or modern builds. It can be placed in different orientations, allowing the lines to run vertically or horizontally. Quartz pillars are crafted by vertically stacking two quartz blocks or obtained via a stonecutter. They generate naturally in bastion remnants and provide a clean, elegant aesthetic while maintaining the same properties as standard quartz blocks."
    },
    "minecraft:weeping_vines": {
        id: "minecraft:weeping_vines",
        name: "Weeping Vines",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Weeping Vines (with Shears)"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson Forest (ceiling)"
        },
        description: "Weeping Vines are red, climbable plants that grow downwards from the ceilings of Crimson Forests in the Nether. They can grow up to 26 blocks long and can be extended using bone meal. Unlike Overworld vines, they are non-flammable and grow from the top down. Players can climb them like ladders to navigate the vertical terrain of the Nether. To harvest them as an item, Shears must be used, although they can be broken instantly by any tool. They provide an atmospheric red aesthetic to the Crimson Forest biome."
    },
    "minecraft:crimson_fungus": {
        id: "minecraft:crimson_fungus",
        name: "Crimson Fungus",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Fungus"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson Forest"
        },
        description: "Crimson Fungus is a mushroom-like block found naturally in the Crimson Forest biome of the Nether. It is primarily used to grow huge crimson fungi by using bone meal on it when placed on crimson nylium. This fungus is non-flammable and can be placed on various Nether surfaces including soul sand and soul soil. Hoglins are notably afraid of warped fungus, but they are not repelled by the crimson variant. It can also be used as an ingredient for suspicious stew or to breed Striders in Bedrock Edition."
    },
    "minecraft:warped_fungus": {
        id: "minecraft:warped_fungus",
        name: "Warped Fungus",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Fungus"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest"
        },
        description: "Warped Fungus is a teal-colored mushroom variant found in the Warped Forest biome. It is a vital resource in the Nether, used to breed and lead Striders, and can be combined with a fishing rod to create a Warped Fungus on a Stick. Notably, Hoglins are afraid of warped fungus and will stay at least 7 blocks away from it. When bone meal is used on a warped fungus placed on warped nylium, it grows into a huge warped fungus. Like its crimson counterpart, it is fire-resistant and serves as a decorative or functional botanical element."
    },
    "minecraft:polished_basalt": {
        id: "minecraft:polished_basalt",
        name: "Polished Basalt",
        hardness: 1.25,
        blastResistance: 4.25,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Basalt"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants, crafted from 4 Basalt"
        },
        description: "Polished Basalt is a decorative variant of basalt with a smooth finish and a cleaner texture. It is crafted from four regular basalt blocks in a 2x2 pattern or processed via a stonecutter. It generates naturally in some bastion remnant structures and provides a sophisticated dark gray aesthetic for building. Like logs, polished basalt is a directional block and can be placed in three different orientations. It maintains the same durability as raw basalt, requiring a pickaxe to mine efficiently and offering moderate resistance to explosions."
    },
    "minecraft:nether_brick_fence": {
        id: "minecraft:nether_brick_fence",
        name: "Nether Brick Fence",
        hardness: 2.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Nether Brick Fence"],
        generation: {
            dimension: "Nether",
            yRange: "48–72 (Nether Fortresses)"
        },
        description: "Nether Brick Fence is a dark, fire-resistant barrier block found naturally in Nether Fortresses. Unlike wooden fences, it is immune to fire and cannot be burned, making it a superior choice for building in the Nether or near lava. It has a higher blast resistance than most Overworld fences and requires a pickaxe to mine. While it does not connect to wooden fences, it connects to most solid blocks and other nether brick fence pieces. It is crafted from nether bricks and nether brick items, providing a sturdy and atmospheric defensive perimeter for any fortress or dark-themed build."
    },
    "minecraft:warped_door": {
        id: "minecraft:warped_door",
        name: "Warped Door",
        hardness: 3,
        blastResistance: 3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Door"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Planks"
        },
        description: "The Warped Door is a unique, fireproof door crafted from warped planks found in the Nether's Warped Forest. Unlike Overworld wooden doors, it does not burn or catch fire, making it an essential building component for bases in the Nether. It features a striking teal color and a strange, alien-like texture that matches the warped wood family. Functionally, it behaves like a standard door that players can open and close manually, but its resistance to fire and lava provides superior protection in hazardous environments."
    },
    "minecraft:crimson_door": {
        id: "minecraft:crimson_door",
        name: "Crimson Door",
        hardness: 3,
        blastResistance: 3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Door"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks"
        },
        description: "The Crimson Door is a fire-resistant door made from crimson planks, native to the Crimson Forest biomes in the Nether. It shares the fireproof properties of all Nether wood types, ensuring it remains intact even when exposed to nearby lava or fire. Its deep maroon and red hues provide a dark, rustic aesthetic that complements netherrack and blackstone builds. Like other doors in Bedrock Edition, it can be used to block mob pathfinding and can be opened by hand or with redstone signals, all while resisting the Nether's heat."
    },
    "minecraft:glowing_obsidian": {
        id: "minecraft:glowing_obsidian",
        name: "Glowing Obsidian",
        hardness: 20.0,
        blastResistance: 1200.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 12,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Obsidian"],
        generation: {
            dimension: "Overworld",
            yRange: "Spawned by Nether Reactor"
        },
        description: "Glowing Obsidian is a rare legacy block that was primarily generated by the Nether Reactor in Minecraft Pocket Edition. When the reactor was activated, it transformed the surrounding cobblestone into this glowing, red-veined variant of obsidian. It functions similarly to regular obsidian in terms of its high blast resistance and mining difficulty but emits a distinct red glow at light level 12. In modern Bedrock Edition, it has been replaced by crying obsidian and other mechanics, but can still be seen in legacy worlds."
    },
    "minecraft:crimson_fence": {
        id: "minecraft:crimson_fence",
        name: "Crimson Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Fence"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks and Sticks"
        },
        description: "Crimson Fences are fire-resistant barrier blocks introduced in the Nether Update. Crafted from crimson planks and sticks, they share the unique property of all crimson wood variants in being completely immune to fire and lava. This makes them ideal for building enclosures and decorative barriers in the harsh environment of the Nether. Functionally, they behave like Overworld fences, with a height of 1.5 blocks for collision purposes, preventing most mobs from jumping over them. Their deep maroon color provides a distinct, rustic look for dark-themed constructions."
    },
    "minecraft:warped_fence": {
        id: "minecraft:warped_fence",
        name: "Warped Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Fence"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Planks and Sticks"
        },
        description: "Warped Fences are teal-colored, fireproof barriers that naturally complement the alien landscape of the Warped Forest. Like their crimson counterparts, they are crafted from warped planks and sticks and possess a total immunity to fire damage. They are commonly used by players to create safe perimeters in the Nether without the risk of them burning down. In terms of mechanics, they provide the same 1.5-block collision height as standard fences, ensuring they effectively contain or repel mobs. Their vibrant teal hue makes them stand out as a unique architectural element in modern or otherworldly builds."
    },
    "minecraft:crimson_fence_gate": {
        id: "minecraft:crimson_fence_gate",
        name: "Crimson Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Fence Gate"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks and Sticks"
        },
        description: "The Crimson Fence Gate is a fire-resistant entryway designed to be used in conjunction with crimson fences or other solid blocks. It shares the fireproof quality of the crimson forest's wood, ensuring it remains intact even when exposed to the Nether's intense heat or lava flows. It can be opened or closed by players and can also be triggered via redstone signals. When opened, it allows passage for players and most entities, while being 1.5 blocks high when closed. This gate is essential for creating secure yet accessible enclosures in the Nether, offering a cohesive aesthetic with its deep red wood."
    },
    "minecraft:red_nether_bricks": {
        id: "minecraft:red_nether_bricks",
        name: "Red Nether Bricks",
        hardness: 2.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Red Nether Bricks"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted"
        },
        description: "Red Nether Bricks are a decorative variant of Nether Bricks with a vibrant dark red color. Unlike standard nether bricks which are found naturally in fortresses, red nether bricks can only be obtained through crafting. They provide a striking contrast and are often used by players to create menacing or elegant structures. They share the same high blast resistance and fire resistance as standard nether bricks, making them ideal for building in the hostile environment of the Nether."
    },
    "minecraft:warped_fence_gate": {
        id: "minecraft:warped_fence_gate",
        name: "Warped Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Fence Gate"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Planks and Sticks"
        },
        description: "The Warped Fence Gate is a teal-colored, fireproof interactive barrier native to the Warped Forest in the Nether. Crafted from warped planks and sticks, it is completely immune to fire and lava, unlike Overworld fence gates. It functions as a secure entrance that can be opened manually or via redstone. Its vibrant teal hue and alien texture provide a unique aesthetic for builds in hazardous environments while effectively containing or repelling mobs."
    },
    "minecraft:crimson_standing_sign": {
        id: "minecraft:crimson_standing_sign",
        name: "Crimson Standing Sign",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:crimson_sign"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted only"
        },
        description: "The Crimson Standing Sign is a fire-resistant functional block crafted from crimson planks and a stick. Native to the Crimson Forest, it shares the non-flammable properties of all Nether wood types. It can be placed on top of solid blocks and rotated in 16 directions to display text on both sides. In Bedrock Edition, the text can be edited, dyed with various colors, or made to glow using glow ink sacs. Its vibrant dark red hue provides a unique aesthetic that complements Nether-themed builds and high-contrast designs."
    },
    "minecraft:warped_standing_sign": {
        id: "minecraft:warped_standing_sign",
        name: "Warped Standing Sign",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:warped_sign"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted only"
        },
        description: "The Warped Standing Sign is a teal-colored, fireproof functional block made from warped planks. It is completely immune to fire and lava, making it a reliable choice for labeling in the hazardous Nether environment. Like other signs in Bedrock Edition, it can be placed on the floor in 16 different orientations and features text that can be customized on both sides. Its otherworldly teal color and unique texture make it stand out in any build, especially those utilizing the alien aesthetic of the Warped Forest biome."
    }
};
