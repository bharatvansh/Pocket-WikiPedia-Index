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
    "minecraft:comparator": {
        id: "minecraft:comparator",
        name: "Redstone Comparator",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Redstone Comparator"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "A Redstone Comparator is a redstone component with two modes: compare and subtract. In compare mode, it outputs a signal equal to the stronger of its two inputs. In subtract mode, it subtracts the back signal from the side signal. It can also measure container fullness, calculate item quantity in items like shulkers, and detect block states behind it. Comparators are essential for creating complex redstone circuits, automated storage systems, and item sorting mechanisms in Bedrock Edition."
    },
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
    "minecraft:piston": {
        id: "minecraft:piston",
        name: "Piston",
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
        drops: ["Piston"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle Temples, Ancient Cities"
        },
        description: "A Piston is a redstone-activated block capable of pushing most other blocks, players, and mobs. When powered, the piston head extends, moving a line of up to 12 blocks in the direction it faces. When unpowered, the head retracts. Pistons are crucial for creating secret doors, automated farms, and complex machines. In Bedrock Edition, pistons can push certain blocks that Java pistons cannot, such as chests and hoppers. They generate naturally in jungle temples and ancient cities, providing a source for early-game redstone components."
    },
    "minecraft:sticky_piston": {
        id: "minecraft:sticky_piston",
        name: "Sticky Piston",
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
        drops: ["Sticky Piston"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "A Sticky Piston is a variation of the standard piston that can both push and pull blocks. When unpowered, it retracts and pulls the block directly in front of its face along with it. This unique property makes it indispensable for creating flush secret doors and reversible mechanisms. Crafted by combining a piston with a slime ball, it is a key component in advanced redstone circuitry. In Bedrock Edition, sticky pistons behave consistently with regular pistons regarding the types of blocks they can move, including containers like chests and barrels."
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
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dispenser"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle Temples"
        },
        description: "The Dispenser is a redstone-activated block that can automatically dispense or use items stored in its inventory when powered. It shoots projectiles like arrows, throws splash potions, places armor on nearby players, activates TNT, and dispenses various other items in the direction it faces. Unlike droppers, dispensers actively use items rather than simply dropping them. Crafted from seven cobblestone, one bow, and one redstone dust, it has nine inventory slots. In Bedrock Edition, dispensers can be used for mob farms, automatic defense systems, and various automation projects."
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
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dropper"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Dropper is a redstone component that drops items from its nine-slot inventory when activated. Unlike dispensers, droppers simply eject items as entities rather than using them, making them ideal for item transportation systems. When facing another container, droppers transfer items directly into it, enabling efficient item sorting and storage. Crafted from seven cobblestone and one redstone dust, droppers are essential for creating hopper chains, randomizers, and automated storage systems in Bedrock Edition. They activate once per redstone pulse."
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
        description: "The Daylight Detector is a redstone component that generates a signal based on the intensity of sunlight. Its signal strength varies from 0 to 15 depending on the time of day and weather. Players can interact with it to toggle it into an Inverted Daylight Detector, which emits a signal based on moonlight or the absence of sunlight. Crafted from glass, nether quartz, and wooden slabs, it is essential for automating lighting systems or time-based mechanisms. In Bedrock Edition, it provides a compact way to detect the day-night cycle for various automated contraptions."
    },
    "minecraft:redstone_wire": {
        id: "minecraft:redstone_wire",
        name: "Redstone Dust",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Redstone Dust"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Redstone Dust is the fundamental component of redstone circuits, serving as both a power source and signal wire. When placed, it can transmit redstone signals up to 15 blocks in any direction, with signal strength decreasing by 1 for each block of distance. Dust can be placed on top of most solid blocks and creates connections to adjacent redstone components. In Bedrock Edition, redstone dust can also be placed on glass, glowstone, and sea lanterns, making it versatile for complex circuit designs. It forms the backbone of almost all redstone contraptions and automation systems."
    },
    "minecraft:redstone_torch": {
        id: "minecraft:redstone_torch",
        name: "Redstone Torch",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 7,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Redstone Torch"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Redstone Torch is a constant power source that emits a redstone signal of strength 15 without requiring external power. It can be placed on blocks or attached to walls, making it versatile for circuit design. Unlike redstone dust, torches provide consistent power regardless of distance and can be inverted by powering the block they're attached to. When the supporting block receives power, the torch turns off, creating a simple NOT gate. In Bedrock Edition, redstone torches are crucial for building logic gates, memory circuits, and as reliable power sources for complex redstone machinery."
    },
    "minecraft:redstone_lamp": {
        id: "minecraft:redstone_lamp",
        name: "Redstone Lamp",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 15,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Redstone Lamp"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Redstone Lamp is a light-emitting block that activates when it receives a redstone signal. When powered, it produces a bright light level of 15, illuminating its surroundings effectively. Crafted from glowstone and redstone dust, the lamp provides an energy-efficient alternative to torches and can be controlled automatically through redstone circuits. In Bedrock Edition, redstone lamps are perfect for creating dynamic lighting systems, automatic street lights, and decorative lighting effects."
    }
};
