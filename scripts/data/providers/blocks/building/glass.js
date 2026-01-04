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
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Glass (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Smelted from sand; also generates in woodland mansions and ancient cities"
        },
        description: "Glass is a transparent building block made by smelting sand or red sand in a furnace. It is commonly used for windows and skylights, but it drops nothing when broken unless mined with Silk Touch. Glass can also generate in structures such as woodland mansions and ancient cities, and it is used to craft glass panes and stained glass."
    },
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
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Tinted Glass (with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Tinted Glass is a see-through block crafted from four glass blocks surrounding an amethyst shard. Unlike normal glass, it blocks all light while still allowing visibility, making it useful for mob farms, secret rooms, and controlling skylight. It drops only when mined with Silk Touch; otherwise it shatters without dropping an item."
    }
};
