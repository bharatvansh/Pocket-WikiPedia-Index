// Pocket Wikipedia Foundation - Natural Ice Blocks Data
// ============================================
// This file contains: Ice, Packed Ice
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
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false // Cannot be obtained even with Silk Touch
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Water surface with Frost Walker"
        },
        description: "Frosted Ice is a temporary ice block that forms when a player walks on water with Frost Walker boots. It has a similar appearance to regular ice but features a slight cracking pattern that evolves as it melts. Unlike standard ice, Frosted Ice cannot be obtained as an item, even with Silk Touch; it simply breaks. It gradually melts back into water over time or if the light level is high enough, and it requires the source blocks to be water to generate."
    },
    "minecraft:powder_snow": {
        id: "minecraft:powder_snow",
        name: "Powder Snow",
        hardness: 0.25,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Bucket",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Snowy Slopes, Grove"
        },
        description: "Powder Snow is a trap block found in snowy mountains. Unlike other solid blocks, entities sink into it, movement is slowed, and fall damage is negated. While inside, players experience a freezing effect that deals damage over time, indicated by a frost overlay. Wearing leather armor prevents sinking and freezing. Powder Snow can be collected with a Bucket, but breaking it with a shovel or hand destroys it. It also generates in cauldrons exposed to snowfall."
    }
};
