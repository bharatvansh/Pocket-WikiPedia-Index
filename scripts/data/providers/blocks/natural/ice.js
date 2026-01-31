// Pocket Wikipedia Foundation - Natural Ice Blocks Data
// ============================================
// This file contains: Ice, Packed Ice, Frosted Ice, Powder Snow
// ============================================

/**
 * Natural ice blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const iceBlocks = {
    "minecraft:ice": {
        id: "minecraft:ice",
        name: "Ice",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: true
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Sea level in cold biomes"
        },
        description: "Ice is a translucent block found in frozen biomes, such as frozen oceans, rivers, and snowy peaks. It has a slippery surface that increases the movement speed of entities. In Bedrock Edition, ice melts into water if the light level from a light source (not sunlight) immediately next to it is 12 or higher. To obtain the ice block itself, it must be mined with a tool enchanted with Silk Touch; otherwise, it simply breaks (or turns into water if there is a block below it). Ice is also used in the construction of ice paths for rapid transport with boats."
    },
    "minecraft:packed_ice": {
        id: "minecraft:packed_ice",
        name: "Packed Ice",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Packed Ice"],
        generation: {
            dimension: "Overworld",
            yRange: "Ice Spikes biome"
        },
        description: "Packed Ice is an opaque, solid variant of ice that does not melt near light sources. It is naturally found in Ice Spikes biomes and frozen oceans. Unlike regular ice, packed ice can be harvested with any pickaxe without needing Silk Touch. It retains the slippery property of regular ice, making it excellent for high-speed boat transportation systems, especially in the Nether where regular ice would melt. Packed Ice can also be crafted from nine blocks of regular ice."
    },
    "minecraft:snow_layer": {
        id: "minecraft:snow_layer",
        name: "Top Snow",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: true,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Snowball"],
        generation: {
            dimension: "Overworld",
            yRange: "Various heights in snowy biomes"
        },
        description: "Top Snow (also known as a Snow Layer) is a block that covers the ground in snowy biomes. In Bedrock Edition, snow layers are affected by gravity and will fall if the block beneath them is removed. A single layer of snow drops snowballs when mined with a shovel, unless Silk Touch is used. Multiple layers can be stacked to create a full snow block height. Snow layers will melt if the light level from a heat source (like torches or lava) is too high."
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
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["4x Snowball"],
        generation: {
            dimension: "Overworld",
            yRange: "Snowy Biomes, Igloos"
        },
        description: "A Snow Block is a full-sized block crafted from four snowballs. It is primarily used for building and creating snow golems. Unlike snow layers, snow blocks are not affected by gravity and do not melt near light sources. They are easily broken with a shovel and are a common building material in cold biomes for creating igloos and snowy structures."
    },
    "minecraft:frosted_ice": {
        id: "minecraft:frosted_ice",
        name: "Frosted Ice",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Water surface"
        },
        description: "Frosted Ice is a temporary block created by the Frost Walker enchantment on boots. When a player walks over water, it freezes into this fragile ice variant. It naturally decays through four stages before melting back into water. This block cannot be obtained as an item, even with Silk Touch, and it melts rapidly if not in a cold environment or if the light level is too high. It provides a temporary bridge for exploration without permanently altering the landscape."
    },
    "minecraft:powder_snow": {
        id: "minecraft:powder_snow",
        name: "Powder Snow",
        hardness: 0.25,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Snowy Slopes and Groves"
        },
        description: "Powder Snow is a trap-like block that entities can sink into. It generates naturally in high-altitude snowy biomes. Entities submerged in powder snow for too long will begin to freeze, taking periodic damage. Wearing leather boots allows players to walk on top of the snow without sinking. It can be collected and placed using a bucket, providing a Powder Snow Bucket. This block is unique as it lacks a traditional tool for harvesting and cannot be moved by pistons."
    }
};
