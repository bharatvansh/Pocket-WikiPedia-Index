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
    }
};
