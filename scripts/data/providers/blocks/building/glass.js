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
    },
    "minecraft:glass": {
        id: "minecraft:glass",
        name: "Glass",
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
        drops: ["Glass"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Sand x4 in Furnace, Ocean Monuments (glass panes)"
        },
        description: "Glass is a fundamental transparent building block crafted by smelting sand in a furnace. It serves as a versatile construction material that allows light to pass through while providing weather protection. Glass is essential for building greenhouses, windows, modern architecture, and underwater structures. While fragile with low hardness and blast resistance (0.3 each), glass can be crafted into glass panes for more efficient space usage and lighter visual weight. Glass blocks are non-flammable and provide complete visibility from both sides. They're perfect for creating bright, airy interiors and are especially valuable for farming setups, aquariums, and decorative lighting effects. In Bedrock Edition, glass drops itself when broken, making collection straightforward without the need for Silk Touch enchantment."
    },
    "minecraft:white_stained_glass": {
        id: "minecraft:white_stained_glass",
        name: "White Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["White Stained Glass (with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Glass x8 and White Dye"
        },
        description: "White Stained Glass is a transparent block created by surrounding a piece of White Dye with eight glass blocks. It retains the transparency of regular glass while adding a soft white tint, perfect for modern windows or decorative light filters. Like regular glass, it is fragile and requires a Silk Touch tool to be harvested; otherwise, it shatters when broken."
    },
    "minecraft:blue_stained_glass": {
        id: "minecraft:blue_stained_glass",
        name: "Blue Stained Glass",
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
        drops: ["Blue Stained Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Blue Stained Glass is a transparent decorative block created by surrounding blue dye with eight glass blocks. It retains the transparency of regular glass while adding a rich blue tint. Notably in Bedrock Edition, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons in various architectural designs."
    },
    "minecraft:glass_pane": {
        id: "minecraft:glass_pane",
        name: "Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Glass Pane (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Glass x6, also found in Villages and Structures"
        },
        description: "Glass Panes are thin, transparent blocks that offer a more delicate alternative to full glass blocks. They are highly resource-efficient, as six glass blocks can be crafted into sixteen panes. Unlike full blocks, they connect to adjacent blocks and other panes, creating a thin, seamless glass wall. While they provide excellent visibility and light, they are fragile and require Silk Touch for retrieval, otherwise they will drop nothing when broken."
    }
};
