// ============================================
// This file contains: Snow (layer) and snow block
// ============================================

/**
 * Snow-related blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const snowBlocks = {
    "minecraft:snow_layer": {
        id: "minecraft:snow_layer",
        name: "Snow",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: true
        },
        drops: [
            "Snowball (varies by layers; shovel required)",
            "Snow (Silk Touch; drops one per layer, 8 layers drop a Snow Block)"
        ],
        generation: {
            dimension: "Overworld",
            yRange: "Cold biomes; forms during snowfall"
        },
        description: "Snow is a thin, stackable layer that naturally forms on top of blocks in cold biomes and during snowfall. Multiple layers can occupy the same block space, increasing height up to 8 layers (a full block). In Bedrock Edition, breaking it with a shovel drops snowballs based on layer count, while Silk Touch returns the snow layers (and 8 layers drop a snow block)."
    },
    "minecraft:snow": {
        id: "minecraft:snow",
        name: "Snow Block",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: true
        },
        drops: [
            "Snowball x4 (Shovel)",
            "Snow Block (Silk Touch)"
        ],
        generation: {
            dimension: "Overworld",
            yRange: "Snowy biomes; crafted from snowballs"
        },
        description: "Snow Block is a full-sized block made of compacted snow, commonly found in snowy biomes and craftable from four snowballs. In Bedrock Edition, it must be broken with a shovel to drop items: without Silk Touch it yields four snowballs, and with Silk Touch it drops the block itself. Unlike snow layers, snow blocks do not melt from nearby light sources or heat blocks."
    }
};
