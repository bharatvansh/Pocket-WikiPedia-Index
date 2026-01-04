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
    "minecraft:dropper": {
        id: "minecraft:dropper",
        name: "Dropper",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dropper"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Dropper is a redstone-operated block that ejects items from its inventory. When activated by a redstone signal, it pushes an item into an adjacent container placed in front of its output slot. If no container is present, it drops the item as an entity into the world. Unlike a Dispenser, the Dropper always drops the item itself rather than using it (e.g., dropping a water bucket instead of dispensing water). It is useful for moving items in redstone contraptions and sorting systems."
    },
    "minecraft:dispenser": {
        id: "minecraft:dispenser",
        name: "Dispenser",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dispenser"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle Temples, Trial Chambers"
        },
        description: "A Dispenser is a redstone-activated block that uses items placed inside it. Unlike a Dropper, which simply drops items, a Dispenser attempts to perform an action with the item, such as firing arrows, throwing potions, dispensing water or lava from buckets, or equipping armor onto players and mobs. It is a key component in traps, automated farms, and defense systems. It generates naturally in Jungle Temples and Trial Chambers."
    },
    "minecraft:hopper": {
        id: "minecraft:hopper",
        name: "Hopper",
        hardness: 3.0,
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
        description: "A Hopper is a functional block used to collect item entities and transfer items between containers. It catches items floating directly above it and pulls items from containers placed above. It then pushes these items into a container it is facing. Hoppers are essential for automation, storage systems, and item collection. A redstone signal can 'lock' the hopper, preventing it from pushing or pulling items."
    }
};
