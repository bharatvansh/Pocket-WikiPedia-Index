// Pocket Wikipedia Foundation - Brick Blocks Data
// ============================================
// This file contains: Bricks, stone bricks (all variants),
// deepslate bricks, nether bricks (all variants), end stone bricks,
// prismarine bricks, mud bricks, polished blackstone bricks,
// quartz bricks, tuff bricks, resin bricks
// ============================================

/**
 * Brick blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const brickBlocks = {
    "minecraft:sandstone": {
        id: "minecraft:sandstone",
        name: "Sandstone",
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
        drops: ["Sandstone"],
        generation: {
            dimension: "Overworld",
            yRange: "Deserts, Beaches (Y -60 to 64)"
        },
        description: "Sandstone is a solid block related to sand that generates naturally in deserts and beaches below layers of sand. It comes in two color variants: regular sandstone (yellow-tan) and red sandstone (reddish-orange). Sandstone requires a wooden pickaxe or better to mine efficiently, dropping itself when broken. It has three decorative variants: chiseled sandstone with hieroglyphic patterns, cut sandstone with a smoother texture, and smooth sandstone made by smelting regular sandstone. Sandstone is commonly used for desert-themed builds and offers good blast resistance despite its relatively low hardness."
    },
    "minecraft:mud_bricks": {
        id: "minecraft:mud_bricks",
        name: "Mud Bricks",
        hardness: 1.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Mud Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Mud Bricks are decorative building blocks introduced in Minecraft 1.19. They are crafted by placing four Packed Mud in a 2x2 square. Packed Mud itself is made from Mud and Wheat. Mud Bricks feature a warm, reddish-brown color with a classic brick texture, perfect for rustic or desert builds. They are fire-resistant and require a pickaxe to mine efficiently. Players can further craft them into stairs, slabs, and walls, providing architectural versatility for warm-toned designs."
    },
    "minecraft:quartz_bricks": {
        id: "minecraft:quartz_bricks",
        name: "Quartz Bricks",
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
        drops: ["Quartz Bricks"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants, crafted from 4 Quartz Blocks"
        },
        description: "Quartz Bricks are decorative building blocks introduced in Minecraft 1.17 as part of the Caves and Cliffs update. They are crafted by placing four quartz blocks in a 2x2 grid, providing a distinctive white brick pattern texture. Quartz bricks generate naturally in bastion remnants and can also be obtained through crafting. They require only a wooden pickaxe to mine and are renewable since quartz blocks themselves are crafted from nether quartz. Unlike regular quartz blocks, quartz bricks have a more intricate brick-like texture that adds detail to builds. They offer a clean white aesthetic for Nether-themed or modern builds while maintaining low hardness and blast resistance."
    },
    "minecraft:tuff_bricks": {
        id: "minecraft:tuff_bricks",
        name: "Tuff Bricks",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Tuff Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Tuff Bricks are decorative blocks introduced in Minecraft 1.21. Crafted by placing four polished tuff in a 2x2 grid, they feature a dark gray, stone-like texture. These bricks can be used to create slabs, stairs, walls, and chiseled variants. While craftable, they also generate naturally within Trial Chambers. Tuff bricks offer a sophisticated alternative to stone bricks, with a muted color palette that suits both modern and medieval builds."
    },
    "minecraft:stone_bricks": {
        id: "minecraft:stone_bricks",
        name: "Stone Bricks",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Stone Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 4 Stone blocks, Strongholds, Pillager Outposts, Dungeons"
        },
        description: "Stone Bricks are versatile decorative building blocks crafted by arranging four stone blocks in a 2x2 crafting grid. They feature a classic masonry pattern that gives structures a polished, professional appearance. Stone bricks generate naturally in strongholds, pillager outposts, and dungeons, making them one of the most common decorative blocks in the Overworld. With excellent durability (hardness 1.5, blast resistance 6.0), they provide both aesthetic appeal and structural integrity. Players can create various variants including mossy stone bricks by combining with moss, cracked stone bricks through smelting, and chiseled stone bricks using stone slabs. These blocks are essential for creating elegant walls, floors, and architectural details that require both strength and sophistication."
    },
    "minecraft:chiseled_tuff_bricks": {
        id: "minecraft:chiseled_tuff_bricks",
        name: "Chiseled Tuff Bricks",
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
        drops: ["Chiseled Tuff Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Chiseled Tuff Bricks are a patterned variant of tuff bricks added in Minecraft 1.21, featuring a large central brick framed by geometric carvings. They generate naturally throughout Trial Chambers and are commonly used to add detail to pillars, trims, and accent walls without changing the overall gray color palette. Players can craft chiseled tuff bricks by stacking two tuff brick slabs vertically in the crafting grid, or make them in a stonecutter from tuff bricks. Like other tuff blocks, they drop themselves when mined with any pickaxe."
    },
    "minecraft:polished_tuff": {
        id: "minecraft:polished_tuff",
        name: "Polished Tuff",
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
        drops: ["Polished Tuff"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Polished Tuff is a smooth, dark gray building block introduced in Minecraft 1.21. Found naturally in Trial Chambers, it is crafted from regular tuff via a stonecutter or by placing four tuff blocks in a 2x2 grid. It features subtle striations and a refined finish, making it excellent for modern architecture. Additionally, it serves as the base ingredient for crafting tuff bricks when arranged in a 2x2 grid. It offers a sophisticated alternative to the raw variant while remaining easy to mass-produce for large-scale construction projects."
    },
    "minecraft:tuff_wall": {
        id: "minecraft:tuff_wall",
        name: "Tuff Wall",
        hardness: 1.5,
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
        drops: ["Tuff Wall"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Tuff Walls are decorative barrier blocks introduced in Minecraft 1.21. Part of the tuff family found in Trial Chambers, they feature a distinct dark gray texture. They are crafted using six tuff blocks in a 2x3 grid or via a stonecutter. Functionally, they connect to adjacent walls and blocks to form continuous railings or perimeters and do not require a solid block beneath for support. These walls generate naturally within Trial Chambers and are ideal for creating rugged defensive structures, garden borders, and architectural accents with a dark, stony aesthetic."
    },
    "minecraft:resin_bricks": {
        id: "minecraft:resin_bricks",
        name: "Resin Bricks",
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
        drops: ["Resin Bricks"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Resin Bricks are a refined decorative building block introduced in Minecraft Bedrock Edition 1.21.50 as part of the Pale Garden/Winter Drop update. Crafted by combining four resin brick items in a 2x2 grid or by processing them in a stonecutter, these bricks offer a vibrant orange aesthetic with a classic brick texture. They are particularly resistant compared to the raw resin blocks, requiring a pickaxe to mine efficiently. Resin bricks provide builders with a unique color palette for creating warm, striking structures and can be further crafted into slabs, stairs, and walls."
    },
    "minecraft:chiseled_resin_bricks": {
        id: "minecraft:chiseled_resin_bricks",
        name: "Chiseled Resin Bricks",
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
        drops: ["Chiseled Resin Bricks"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Chiseled Resin Bricks are decorative blocks added in Minecraft 1.21.50. Featuring an intricate carved pattern, they are ideal for pillars, borders, and accents. They are crafted by vertically stacking two resin brick slabs in a grid or by using a stonecutter on a resin brick block. A pickaxe is required for collection. Their vibrant orange color and warm tones complement pale garden blocks, allowing for complex architectural designs."
    },
    "minecraft:honeycomb_block": {
        id: "minecraft:honeycomb_block",
        name: "Honeycomb Block",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Honeycomb Block"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Honeycomb Block is a decorative building block with a distinctive hexagonal honey-colored pattern. Crafted from four honeycombs arranged in a 2x2 grid, it serves primarily as a decorative element and compact storage for honeycombs. The block features warm golden-orange tones that complement wooden builds and natural designs. Unlike honey blocks, honeycomb blocks do not slow entities and are not sticky. They can be instantly mined with any tool or by hand, making them easy to work with during construction projects."
    },
    "minecraft:diamond_block": {
        id: "minecraft:diamond_block",
        name: "Diamond Block",
        hardness: 5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Diamond Block (with Silk Touch) or Diamonds x9 (without)"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Diamond Block is a premium compact storage block crafted from nine diamonds arranged in a 3x3 grid. It serves as the most prestigious way to store diamonds and is highly sought after by players for its distinctive cyan-blue appearance and high value. Unlike many other storage blocks, diamond blocks do not generate naturally in the world and must be crafted by players. When mined with a pickaxe, diamond blocks drop themselves when enchanted with Silk Touch, or nine diamonds without. Diamond blocks require an iron pickaxe or better to mine efficiently and cannot be broken with any other tool. They are often used in large-scale builds for their striking appearance and as a symbol of wealth and achievement."
    },
    "minecraft:lapis_block": {
        id: "minecraft:lapis_block",
        name: "Lapis Lazuli Block",
        hardness: 3,
        blastResistance: 3,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Lapis Lazuli Block (with Silk Touch) or Lapis Lazuli x9 (without)"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Lapis Lazuli Block is a compact storage block crafted from nine lapis lazuli items arranged in a 3x3 grid. This vibrant blue block provides an efficient way to store large quantities of lapis lazuli, which is primarily used for enchanting items and creating blue dyes. The block has a distinctive deep blue color with golden flecks that sparkle in light, making it popular for decorative builds and blue-themed architecture. When mined with a stone pickaxe or better, it drops itself with Silk Touch or nine lapis lazuli without. Lapis blocks are primarily decorative and functional storage, requiring careful planning due to their utility in enchanting. They are perfect for showcasing large lapis lazuli collections and creating striking blue accents in builds."
    },
    "minecraft:raw_iron_block": {
        id: "minecraft:raw_iron_block",
        name: "Raw Iron Block",
        hardness: 5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Iron Block (with Silk Touch) or Raw Iron x9 (without)"],
        generation: {
            dimension: "Overworld",
            yRange: "Iron ore veins (Y -16 to 80) and Trial Chambers"
        },
        description: "Raw Iron Block is a compact storage block introduced in Minecraft 1.17, crafted from nine raw iron items in a 3x3 grid. It generates naturally within iron ore veins below Y-level 80 and in Trial Chambers. The block requires a stone pickaxe or better to mine efficiently, dropping itself with Silk Touch or nine raw iron without. Raw iron blocks can be smelted in a furnace or blast furnace to produce iron ingots, making them useful for bulk smelting operations. With a hardness of 5 and blast resistance of 6, they are moderately durable building materials with a distinctive rusted iron texture."
    },
    "minecraft:raw_copper_block": {
        id: "minecraft:raw_copper_block",
        name: "Block of Raw Copper",
        hardness: 5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Copper Block (with Silk Touch) or Raw Copper x9 (without)"],
        generation: {
            dimension: "Overworld",
            yRange: "Copper ore veins (Y -16 to 112)"
        },
        description: "A Block of Raw Copper is a compact storage block for raw copper, introduced in Minecraft 1.17. It can be found naturally in large copper ore veins or crafted from nine raw copper items. It can be used for decoration or broken back down into raw copper for smelting into copper ingots. This block features a distinctive packed raw copper texture and requires a stone pickaxe or better to mine efficiently."
    },
    "minecraft:raw_gold_block": {
        id: "minecraft:raw_gold_block",
        name: "Block of Raw Gold",
        hardness: 5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Block of Raw Gold (with Silk Touch) or Raw Gold x9 (without)"],
        generation: {
            dimension: "Overworld",
            yRange: "Gold ore veins (below Y 0)"
        },
        description: "A Block of Raw Gold is a compact storage block for raw gold, introduced in Minecraft 1.17. It generates naturally in large gold ore veins below Y=0 in the Overworld, or it can be crafted from nine raw gold items. It requires an iron pickaxe or better to mine. Like other raw blocks, it can be smelted in bulk or used as a unique decorative element with its rich, golden-brown texture."
    },
    "minecraft:netherite_block": {
        id: "minecraft:netherite_block",
        name: "Block of Netherite",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Block of Netherite"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Block of Netherite is the most durable and expensive storage block in the game, crafted from nine netherite ingots. It shares the extreme blast resistance of obsidian and ancient debris, making it immune to most explosions, including the Wither's attacks. It serves as a compact way to store netherite or as a prestigious decorative block with a dark, metallic texture. To mine it and retrieve the block, a diamond or netherite pickaxe is required; otherwise, it drops nothing. It is also used to power beacons to their highest tier."
    },
    "minecraft:brick_block": {
        id: "minecraft:brick_block",
        name: "Bricks",
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
        drops: ["Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Underwater ruins, Plains village armorer houses, Trail ruins"
        },
        description: "Bricks are a decorative building block. They have the same blast resistance as other stone-based blocks, so they can be used as a durable building block. Bricks naturally generate in underwater ruins, plains village armorer houses, and trail ruins."
    },
    "minecraft:red_nether_brick": {
        id: "minecraft:red_nether_brick",
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
            yRange: "Crafted only (Nether Bricks + Nether Wart)"
        },
        description: "Red Nether Bricks are a decorative variant of Nether Bricks. They are crafted using Nether Bricks and Nether Wart. They have the same blast resistance and hardness as regular Nether Bricks."
    },
    "minecraft:coal_block": {
        id: "minecraft:coal_block",
        name: "Block of Coal",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Block of Coal"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Block of Coal is a mineral storage block crafted from nine pieces of coal. It is a highly efficient fuel source, capable of smelting 80 items in a furnace—more than the sum of its individual coal pieces (which smelt 72 items total). Blocks of coal are flammable and will burn indefinitely if set on fire. They can also be used as a building material with a dark, distinct texture. While they do not generate naturally in the world, they are essential for compact storage of coal and for maximizing fuel efficiency in large-scale smelting operations."
    },
    "minecraft:iron_block": {
        id: "minecraft:iron_block",
        name: "Block of Iron",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Block of Iron"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Block of Iron is a solid mineral block crafted from nine iron ingots. It is primarily used for compact storage of iron and as a base for beacons. Additionally, iron blocks are required to construct Iron Golems; placing a carved pumpkin atop a T-shape of four iron blocks summons the golem. They have a hardness of 5 and blast resistance of 6, making them durable building materials. Iron blocks feature a distinct metallic texture and are often used in industrial or modern builds. They require a stone pickaxe or better to mine."
    },
    "minecraft:gold_block": {
        id: "minecraft:gold_block",
        name: "Block of Gold",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: false
        },
        drops: ["Block of Gold"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments, Bastion Remnants"
        },
        description: "Block of Gold is a precious mineral block crafted from nine gold ingots. It serves as a compact storage method for gold and is a key component in beacon structures, where it can be used as a base. Blocks of gold also generate naturally in Ocean Monuments (encased in dark prismarine) and Bastion Remnants. They are required to activate a Nether Portal in a Ruined Portal structure if missing. Gold blocks have a hardness of 3 and blast resistance of 6, making them softer than iron blocks. They require an iron pickaxe or better to mine."
    },
    "minecraft:emerald_block": {
        id: "minecraft:emerald_block",
        name: "Block of Emerald",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: false
        },
        drops: ["Block of Emerald"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Block of Emerald is a precious mineral block crafted from nine emeralds. It is primarily used for compact storage of emeralds, which are the main currency for trading with villagers. Like other mineral blocks, it can be used as a base for beacons to activate their powers. The block features a distinct bright green texture with a gem-like pattern, making it a popular choice for decorative accents and displays of wealth. It requires an iron pickaxe or better to mine; otherwise, it drops nothing. While emeralds can be found in mountain biomes, the block itself does not generate naturally."
    },
    "minecraft:deepslate_bricks": {
        id: "minecraft:deepslate_bricks",
        name: "Deepslate Bricks",
        hardness: 3.5,
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
        drops: ["Deepslate Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "Deepslate Bricks are decorative blocks crafted from Polished Deepslate. They feature a distinct brick pattern and possess high durability with a hardness of 3.5 and blast resistance of 6.0. These blocks generate naturally in Ancient Cities and are ideal for building sturdy, dark-themed structures. They can be further crafted into stairs, slabs, and walls, or used to create Cracked Deepslate Bricks via smelting."
    },
    "minecraft:deepslate_tiles": {
        id: "minecraft:deepslate_tiles",
        name: "Deepslate Tiles",
        hardness: 3.5,
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
        drops: ["Deepslate Tiles"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "Deepslate Tiles are decorative blocks crafted from Deepslate Bricks. They display a refined, tiled pattern suitable for flooring and detailed walls. Like other deepslate variants, they maintain a hardness of 3.5 and blast resistance of 6.0. Deepslate Tiles generate in Ancient Cities and can be crafted into stairs, slabs, and walls, or used to make Cracked Deepslate Tiles by smelting."
    },
    "minecraft:chiseled_stone_bricks": {
        id: "minecraft:chiseled_stone_bricks",
        name: "Chiseled Stone Bricks",
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
        drops: ["Chiseled Stone Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: null
        },
        description: "Chiseled Stone Bricks are a decorative variant of stone bricks featuring a distinctive square pattern. They are crafted by stacking two stone brick slabs vertically or by using a stonecutter on a stone brick block. These blocks generate naturally in jungle temples, igloo basements, and cold ocean ruins. They are primarily used as accent blocks for columns and corners in stone-based architecture. Chiseled stone bricks can also be used to craft lodestones when combined with an iron ingot, making them valuable for navigation. Their intricate design adds a touch of ancient masonry to any build."
    },
    "minecraft:mossy_stone_bricks": {
        id: "minecraft:mossy_stone_bricks",
        name: "Mossy Stone Bricks",
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
        drops: ["Mossy Stone Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: null
        },
        description: "Mossy Stone Bricks are a variant of stone bricks covered in vines and moss, giving them an overgrown and ancient appearance. They generate naturally in strongholds, ocean ruins, trail ruins, and igloo basements. Players can craft them by combining stone bricks with moss blocks or vines. They are perfect for building hidden ruins, forest dwellings, or adding age to stone structures. Like regular stone bricks, they are durable and require a pickaxe to mine. They can be further crafted into mossy stone brick slabs, stairs, and walls, offering versatility for nature-integrated architectural designs."
    },
    "minecraft:cracked_stone_bricks": {
        id: "minecraft:cracked_stone_bricks",
        name: "Cracked Stone Bricks",
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
        drops: ["Cracked Stone Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: null
        },
        description: "Cracked Stone Bricks are a weathered version of stone bricks that feature visible cracks across their surface. They are created by smelting regular stone bricks in a furnace or found naturally in strongholds, igloo basements, ocean ruins (cold), ruined portals, and trail ruins. These blocks are excellent for depicting ruins, aged dungeons, or structural instability in builds. Despite their damaged look, they maintain a hardness of 1.5 and blast resistance of 6.0, the same as standard stone bricks. Silverfish can also hide inside infested versions of this block, which can be found in strongholds near the end portal."
    },
    "minecraft:cracked_deepslate_bricks": {
        id: "minecraft:cracked_deepslate_bricks",
        name: "Cracked Deepslate Bricks",
        hardness: 3.5,
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
        drops: ["Cracked Deepslate Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "Cracked Deepslate Bricks are a weathered variant of deepslate bricks, featuring visible fractures that suggest age and decay. They generate naturally within the dark, expansive structures of Ancient Cities in the Deep Dark biome. Players can also obtain them by smelting regular deepslate bricks in a furnace. These blocks are ideal for creating ruins, aged dungeons, or adding mechanical detail to dark-themed constructions. Despite their damaged appearance, they retain the high durability and blast resistance characteristic of the deepslate family, requiring a pickaxe to mine."
    },
    "minecraft:cracked_deepslate_tiles": {
        id: "minecraft:cracked_deepslate_tiles",
        name: "Cracked Deepslate Tiles",
        hardness: 3.5,
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
        drops: ["Cracked Deepslate Tiles"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "Cracked Deepslate Tiles are a decorative variant of deepslate tiles with a fractured surface. Found naturally in Ancient Cities, they add a sense of history and weathered texture to flooring and walls. They are produced by smelting standard deepslate tiles in a furnace. Like other deepslate variants, they are significantly harder than stone, requiring more time to mine. Their dark gray, tiled pattern with visible cracks makes them excellent for atmospheric builds, ruined temples, or intricate industrial designs where a worn, heavy aesthetic is desired."
    }
};
