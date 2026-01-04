// Pocket Wikipedia Foundation - Glass Blocks Data
// ============================================
// This file contains: Glass, stained glass (all 16 colors),
// tinted glass, glass panes, stained glass panes (all 16 colors)
// ============================================

/**
 * Glass blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const glassBlocks = {
    "minecraft:tinted_glass": {
        id: "minecraft:tinted_glass",
        name: "Tinted Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Tinted Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted from 1 glass and 4 amethyst shards"
        },
        description: "Tinted Glass is a unique decorative block that allows players to see through it while completely blocking light from passing through. Unlike regular or stained glass, tinted glass drops itself as an item when broken without needing the Silk Touch enchantment. This makes it highly versatile for builds requiring specific lighting conditions, such as mob farms, where players want to observe mobs without letting light inside. It is crafted by surrounding a single glass block with four amethyst shards. It cannot be crafted into glass panes."
    }
};
