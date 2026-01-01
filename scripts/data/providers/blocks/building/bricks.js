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
        description: "Mud Bricks are a decorative building block introduced in Minecraft 1.19 Wild Update, offering builders an earthy, brown alternative to traditional brick materials. Crafted by arranging four packed mud blocks in a 2x2 square, mud bricks feature a warm, reddish-brown color with a distinctive brick texture pattern that complements desert and village-style builds. Unlike other building blocks, mud bricks require a pickaxe to be mined efficiently and do not burn, making them suitable for fire-resistant structures. The packed mud required for crafting mud bricks is itself created by combining mud blocks and wheat, representing a unique crafting recipe that utilizes agricultural resources. Mud bricks can be further processed into slabs, stairs, and walls through crafting, providing builders with versatile options for creating rustic, warm-toned architectural designs."
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
        description: "Tuff Bricks are a decorative building block introduced in Minecraft 1.21, expanding the tuff block family alongside polished tuff and chiseled tuff variants. Crafted by arranging four polished tuff blocks in a 2x2 crafting grid, tuff bricks feature a dark gray, stone-like appearance with a distinctive brick texture pattern. These bricks can be further crafted into slabs, stairs, walls, and chiseled tuff bricks for additional building versatility. Found naturally within Trial Chambers, tuff bricks offer builders a sophisticated alternative to traditional stone bricks with their muted color palette that complements modern and medieval architectural styles alike."
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
        description: "Polished Tuff is a smooth, refined building block introduced in Minecraft 1.21 as part of the expanded tuff block family found in Trial Chambers. Crafted by arranging four tuff blocks in a 2x2 square on a crafting grid, or by using a stonecutter on tuff blocks, polished tuff features a sleek, dark gray surface with subtle striations that catch light beautifully. This block serves as both a building material and a crafting ingredient for tuff bricks when arranged in a 2x2 grid. Its sophisticated appearance makes it ideal for modern architectural designs, while its natural generation in Trial Chambers provides players with a readily available source for large-scale construction projects."
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
        description: "Tuff Wall is a decorative wall block introduced in Minecraft 1.21, part of the comprehensive tuff block family added with the Trial Chambers update. Crafted from six tuff blocks arranged in a 2x3 horizontal grid, or created in a stonecutter from tuff blocks, tuff walls serve as both functional barriers and aesthetic architectural elements. Like all tuff variants, tuff walls feature the characteristic dark gray coloration with subtle textural variations. They connect seamlessly with other walls and can be placed without requiring a solid block beneath, making them perfect for creating railings, garden borders, and defensive perimeter structures. Tuff walls generate naturally within Trial Chambers corridors and chambers."
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
        description: "Chiseled Resin Bricks are a decorative variant of resin bricks added in Minecraft Bedrock Edition 1.21.50. These blocks feature a unique, intricate pattern carved into the vibrant orange resin material, making them ideal for adding detail to pillars, borders, and accent walls. They can be crafted by placing two resin brick slabs vertically in a crafting grid or by using a stonecutter on a resin brick block. Like other resin brick variants, they require a pickaxe to be collected. Chiseled resin bricks complement the pale garden blocks perfectly, allowing for complex architectural designs that highlight the rich, warm tones of the resin material."
    }
};
