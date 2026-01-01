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
    "minecraft:calibrated_sculk_sensor": {
        id: "minecraft:calibrated_sculk_sensor",
        name: "Calibrated Sculk Sensor",
        hardness: 1.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Calibrated Sculk Sensor"],
        generation: {
            dimension: "Overworld",
            yRange: "Deep Dark"
        },
        description: "The Calibrated Sculk Sensor is an advanced redstone component introduced in Minecraft 1.21 that detects specific vibrations and sounds with much greater precision than the regular Sculk Sensor. Unlike the regular sensor that responds to a wide range of vibrations, the calibrated variant can be programmed to detect only particular types of events, making it essential for sophisticated redstone contraptions and automated systems. It can detect vibrations from player footsteps, item drops, block placements, and other activities within a 9-block radius, with the specific detection range configurable through redstone signals. When activated, it emits a redstone signal and creates sculk shriek particles and sounds. The calibrated sculk sensor can be crafted using 1 regular Sculk Sensor, 1 Copper Ingot, and 2 Amethyst Shards arranged in a specific pattern on a crafting table. This block is particularly valuable in compact redstone builds, security systems, and automated farms where precise trigger conditions are required."
    }
};
