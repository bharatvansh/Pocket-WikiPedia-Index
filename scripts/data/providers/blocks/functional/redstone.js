// Pocket Wikipedia Foundation - Redstone Blocks Data
// ============================================
// This file contains: Redstone dust, redstone torch, redstone block,
// redstone lamp, repeater, comparator, piston, sticky piston,
// observer, dropper, dispenser, hopper, target, lever, buttons
// (all types), pressure plates (all types), tripwire hook,
// trapped chest, daylight detector, note block, sculk sensor,
// calibrated sculk sensor, lightning rod
// ============================================

/**
 * Redstone mechanism blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const redstoneBlocks = {
    "minecraft:lightning_rod": {
        id: "minecraft:lightning_rod",
        name: "Lightning Rod",
        hardness: 3,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Lightning Rod"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Lightning Rod is a functional block that attracts lightning strikes within a 128-block radius, protecting flammable structures from fire damage. When struck by lightning, it emits a redstone signal for 8 game ticks and creates a particle effect visible to all players. Crafted from three copper ingots, the lightning rod oxidizes over time but can be waxed with honeycomb to preserve its appearance. It provides excellent protection for wooden builds and can be used to harness lightning for redstone contraptions."
    },
    "minecraft:target": {
        id: "minecraft:target",
        name: "Target",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Target"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "A target is a block that produces a temporary redstone signal when hit by a projectile. The strength of the signal depends on how close the projectile is to the center of the block."
    },
    "minecraft:tnt": {
        id: "minecraft:tnt",
        name: "TNT",
        hardness: 0,
        blastResistance: 0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["TNT"],
        generation: {
            dimension: "Overworld",
            yRange: "Desert Temples, Woodland Mansions, Shipwrecks"
        },
        description: "TNT is an explosive block that can be primed by redstone, fire, or explosions. Once ignited, it becomes a falling entity that explodes after 4 seconds (80 ticks), dealing significant damage to nearby blocks and entities. It is commonly used for mining, clearing large areas, or as a weapon in traps. TNT can be crafted using sand and gunpowder, and it is also found naturally in several structures. In Bedrock Edition, TNT has a 100% drop rate for blocks destroyed by its explosion, making it efficient for large-scale excavation."
    }
};
