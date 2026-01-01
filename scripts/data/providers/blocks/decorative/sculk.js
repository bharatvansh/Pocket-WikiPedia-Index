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
        description: "The Calibrated Sculk Sensor is an advanced redstone component introduced in Minecraft 1.20 that detects specific vibrations and sounds with much greater precision than the regular Sculk Sensor, while also emitting a subtle light level of 1. Unlike the regular sensor that responds to a wide range of vibrations, the calibrated variant can be programmed to detect only particular types of events, making it essential for sophisticated redstone contraptions and automated systems. It can detect vibrations from player footsteps, item drops, block placements, and other activities within a 16-block radius, with the specific detection range configurable through redstone signals. When activated, it emits a redstone signal and creates sculk shriek particles and sounds, along with providing minimal ambient lighting for dark builds. The calibrated sculk sensor can be crafted using 1 regular Sculk Sensor and 3 Amethyst Shards arranged in a specific pattern on a crafting table. This block is particularly valuable in compact redstone builds, security systems, and automated farms where precise trigger conditions are required."
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
        description: "The Sculk Catalyst is a Deep Dark block most commonly found in ancient cities that converts nearby mob deaths into a sculk bloom, spreading sculk blocks and occasionally creating sculk sensors or sculk shriekers. It emits light level 6 and can be broken with any tool, but a hoe is the fastest; it only drops itself when mined with Silk Touch, otherwise it drops 5 experience. In Bedrock Edition, sculk catalysts are also renewable because a warden always drops one when it dies, enabling late-game sculk farming and controlled sculk spreading projects. Players use catalysts for automatic sculk growth, experience harvesting setups, and for building in the distinctive teal-and-black Deep Dark palette."
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
        description: "The Sculk Shrieker is a unique block found in the Deep Dark biome that can summon the Warden when activated multiple times. It responds to vibrations detected by nearby Sculk Sensors, emitting a soul-chilling sound and applying the Darkness effect to players within its range. In Bedrock Edition, Sculk Shriekers can also be activated by a redstone signal, allowing for creative use in player-made traps or alarm systems. While players can obtain and place Sculk Shriekers using Silk Touch, these player-placed versions are 'inert' and cannot summon the Warden, though they still emit sounds and vibrations when triggered. This block serves as a primary alarm system within Ancient Cities, making stealth and the use of wool essential for survival in these areas."
    }
};
