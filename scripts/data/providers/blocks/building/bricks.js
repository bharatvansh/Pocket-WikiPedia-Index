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
        transparent: false,
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
    }
};
