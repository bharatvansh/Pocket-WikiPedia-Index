// Pocket Wikipedia Foundation - Natural Ice Blocks Data
// ============================================
// This file contains: Ice, Packed Ice, Powder Snow
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
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Mountain Groves and Snowy Slopes"
        },
        description: "Powder Snow is a trap block found in snowy slopes and groves. Entities walking on it will sink through it, moving slowly and taking freezing damage over time. Leather boots prevent players from sinking and allow climbing up powder snow by jumping. It can be collected by using a Bucket on the block, yielding a Bucket of Powder Snow; breaking it with a shovel destroys it without dropping anything. Skeletons who stay in powder snow too long transform into Strays. It also extinguishes entities on fire and melts in the Nether."
    }
};
