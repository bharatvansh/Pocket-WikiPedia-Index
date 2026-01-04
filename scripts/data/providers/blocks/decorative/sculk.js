// Pocket Wikipedia Foundation - Sculk Blocks Data
// ============================================
// This file contains: Sculk, sculk vein, sculk catalyst,
// sculk shrieker, sculk sensor, calibrated sculk sensor
// ============================================

/**
 * Sculk blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const sculkBlocks = {
    "minecraft:sculk": {
        id: "minecraft:sculk",
        name: "Sculk",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Sculk"],
        generation: {
            dimension: "Overworld",
            yRange: "Deep Dark Biome"
        },
        description: "Sculk is a decorative block found in the Deep Dark biome. It has an animated texture with glowing spots, though it does not emit light. Sculk spreads when a nearby Sculk Catalyst is activated by a mob death. It drops experience when mined without Silk Touch, making it a good source of XP."
    },
    "minecraft:sculk_vein": {
        id: "minecraft:sculk_vein",
        name: "Sculk Vein",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Sculk Vein (requires Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Deep Dark biome"
        },
        description: "Sculk Vein is a thin, multiface sculk growth that can spread across any side of a block, similar to glow lichen. It generates naturally in the Deep Dark and can also appear when a nearby Sculk Catalyst converts mob deaths. It is waterloggable, resists being washed away by fluids, and only drops itself with Silk Touch."
    },
    "minecraft:sculk_sensor": {
        id: "minecraft:sculk_sensor",
        name: "Sculk Sensor",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Sculk Sensor (requires Silk Touch)", "5 XP (without Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Deep Dark biome and Ancient Cities"
        },
        description: "The Sculk Sensor detects vibrations in an 8-block radius and emits a redstone signal whose strength depends on the distance to the event. Player-made vibrations can also trigger nearby Sculk Shriekers, and wool blocks can block the signal path for stealth. It is mined fastest with a hoe and only drops itself with Silk Touch."
    },
    "minecraft:calibrated_sculk_sensor": {
        id: "minecraft:calibrated_sculk_sensor",
        name: "Calibrated Sculk Sensor",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Calibrated Sculk Sensor"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "The Calibrated Sculk Sensor is an advanced redstone component introduced in version 1.20. Unlike the standard sensor, it can be programmed to detect specific vibration frequencies based on the strength of an incoming redstone signal. It has a detection range of 16 blocks and emits a light level of 1 when active. Crafted using one Sculk Sensor and three Amethyst Shards, it is essential for sophisticated automation, security systems, and compact redstone builds that require precise trigger conditions without interference from surrounding sounds."
    },
    "minecraft:sculk_catalyst": {
        id: "minecraft:sculk_catalyst",
        name: "Sculk Catalyst",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 6,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Sculk Catalyst"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities (Deep Dark)"
        },
        description: "The Sculk Catalyst is a block found in the Deep Dark that converts nearby mob deaths into sculk growth, spreading sculk blocks, sensors, or shriekers. It emits light level 6 and is mined fastest with a hoe. Silk Touch is required to obtain the block; otherwise, it drops experience. Catalysts are dropped by Wardens, making them renewable. They are essential for experience harvesting setups, automatic sculk farming, and building with the distinctive teal-and-black Deep Dark aesthetic."
    },
    "minecraft:sculk_shrieker": {
        id: "minecraft:sculk_shrieker",
        name: "Sculk Shrieker",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Sculk Shrieker"],
        generation: {
            dimension: "Overworld",
            yRange: "Deep Dark Biome"
        },
        description: "Found in the Deep Dark, the Sculk Shrieker is a block that summons the Warden when activated multiple times. It responds to vibrations from nearby Sculk Sensors or redstone (Bedrock Edition), emitting a loud sound and applying the Darkness effect to players. While obtainable with Silk Touch, player-placed shriekers are inert and cannot summon the Warden. As a primary alarm system in Ancient Cities, they make stealth and wool essential for survival."
    }
};
