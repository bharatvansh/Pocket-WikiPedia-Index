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
    }
};
