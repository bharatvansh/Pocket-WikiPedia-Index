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
    "minecraft:lever": {
        id: "minecraft:lever",
        name: "Lever",
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
        drops: ["Lever"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted; Jungle Temples, Woodland Mansions, Ancient Cities"
        },
        description: "A Lever is a simple redstone switch that toggles between on and off, providing a constant signal for circuits, doors, and machines. It can be attached to floors, walls, ceilings, and some upside-down slabs or stairs, making it easy to integrate into builds. In Bedrock Edition, levers are waterloggable, break quickly, and can generate in jungle temples, woodland mansions, and ancient cities."
    },
    "minecraft:observer": {
        id: "minecraft:observer",
        name: "Observer",
        hardness: 3,
        blastResistance: 3,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Observer"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Observer is a redstone block that emits a short redstone pulse when it detects a state change in the block directly in front of its sensor face. It features two distinct sides: a square sensor face that monitors adjacent blocks and a redstone output on the opposite side. Observers can detect a wide variety of changes, including block placement, breaking, growth stages of crops, and even the opening of chests. They are fundamental in creating advanced redstone automation and compact logic circuits, especially in Bedrock Edition where they have unique interaction behaviors."
    },
    "minecraft:note_block": {
        id: "minecraft:note_block",
        name: "Note Block",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Note Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "A Note Block is a musical redstone component that produces notes when activated by redstone or right-clicked. The instrument sound depends on the block beneath it, with 16 instruments available including harp, bass, snare, clicks, guitar, flute, bell, chime, xylophone, iron xylophone, cow bell, didgeridoo, bit, banjo, and pling. Each note block can be tuned through 25 pitches by right-clicking. Placing a mob head on top changes the sound to a unique bass tone, making note blocks essential for creating music and sound effects in Bedrock Edition."
    },
    "minecraft:redstone_lamp": {
        id: "minecraft:redstone_lamp",
        name: "Redstone Lamp",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Redstone Lamp"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "A Redstone Lamp is a block that produces light when activated by a redstone signal. When powered, it emits a light level of 15, matching Glowstone, but turns off instantly when the signal is removed. It is crafted using Glowstone and Redstone Dust and is commonly used in lighting systems, displays, and decorative builds where controllable lighting is desired. While it appears transparent to light when unlit, it is a solid block that can transmit redstone power."
    },
    "minecraft:daylight_detector": {
        id: "minecraft:daylight_detector",
        name: "Daylight Detector",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Daylight Detector"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Daylight Detector is a redstone component that outputs a signal strength corresponding to the time of day and weather conditions. It can be inverted into a Night Vision Sensor by interacting with it, causing it to emit a signal during the night or in darkness. This block allows for the creation of automated streetlights, time-based mechanisms, and solar-powered contraptions. In Bedrock Edition, it has a blast resistance of 0.2 and cannot be moved by pistons."
    },
    "minecraft:hopper": {
        id: "minecraft:hopper",
        name: "Hopper",
        hardness: 3,
        blastResistance: 4.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Hopper"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Hopper is a functional block used to catch item entities and transfer items between containers. It has a storage capacity of 5 slots and moves items at a rate of 2.5 items per second (one item every 8 game ticks). Hoppers can collect items thrown on top of them and pull from containers above or push into containers they are facing. They can be locked by a redstone signal to stop item transfer and are essential for automatic sorting systems and farms."
    }
};
