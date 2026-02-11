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
            silkTouch: false
        },
        drops: ["Lightning Rod"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Lightning Rod is a functional block that attracts lightning strikes within a 64-block radius in Bedrock Edition, protecting flammable structures from fire damage. When struck by lightning, it emits a redstone signal for 8 game ticks and creates a particle effect visible to all players. Crafted from three copper ingots, the lightning rod oxidizes over time but can be waxed with honeycomb to preserve its appearance. It provides excellent protection for wooden builds and can be used to harness lightning for redstone contraptions."
    },
    "minecraft:exposed_lightning_rod": {
        id: "minecraft:exposed_lightning_rod",
        name: "Exposed Lightning Rod",
        hardness: 3,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Exposed Lightning Rod"],
        generation: {
            dimension: "None",
            yRange: "Weathered naturally"
        },
        description: "The Exposed Lightning Rod is a functional block representing the second stage of copper oxidation. Like the base lightning rod, it attracts strikes within a 64-block radius in Bedrock Edition and emits a redstone signal when hit. Over time, it will continue to weather into a weathered lightning rod unless waxed with honeycomb. It features a slightly tarnished brownish-orange appearance. Players can use an axe to scrape off the oxidation or apply wax to preserve this specific stage. It remains a vital tool for protecting flammable structures from lightning-induced fires."
    },
    "minecraft:weathered_lightning_rod": {
        id: "minecraft:weathered_lightning_rod",
        name: "Weathered Lightning Rod",
        hardness: 3,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Weathered Lightning Rod"],
        generation: {
            dimension: "None",
            yRange: "Weathered naturally"
        },
        description: "The Weathered Lightning Rod represents the third stage of copper oxidation, featuring a significant greenish-teal patina while still retaining hints of its original bronze color. It attracts lightning strikes within a 64-block radius in Bedrock Edition, protecting nearby flammable structures by redirecting bolts to itself. When struck, it emits a redstone signal that can power adjacent components. Players can use an axe to scrape off the oxidation and return it to an earlier stage, or apply honeycomb to wax it."
    },
    "minecraft:oxidized_lightning_rod": {
        id: "minecraft:oxidized_lightning_rod",
        name: "Oxidized Lightning Rod",
        hardness: 3,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Oxidized Lightning Rod"],
        generation: {
            dimension: "None",
            yRange: "Weathered naturally"
        },
        description: "The Oxidized Lightning Rod is the final weathering stage of the copper lightning rod in Bedrock Edition. It features a distinct greenish-blue patina. Despite its appearance, it remains fully functional, attracting lightning strikes within a 64-block radius to protect nearby flammable structures. When struck, it emits a redstone signal. It can be obtained by leaving a lightning rod exposed to the elements for several in-game days. Players can use an axe to scrape off the oxidation or apply honeycomb to wax it, preserving this vibrant aged look for decorative purposes."
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
    "minecraft:tripwire_hook": {
        id: "minecraft:tripwire_hook",
        name: "Tripwire Hook",
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
        drops: ["Tripwire Hook"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle Temples, Pillager Outposts"
        },
        description: "A Tripwire Hook is a redstone component used to detect entities when connected by string. When two hooks are placed facing each other and connected with string, they form a tripwire that emits a redstone signal when a player, mob, or item passes through it. In Bedrock Edition, tripwire hooks are essential for creating traps in Jungle Temples and can be obtained as junk from fishing or found in Pillager Outpost chests. They can also be used to craft Trapped Chests and Crossbows, making them both a functional sensor and a useful crafting material."
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
            yRange: "Desert Pyramids, Woodland Mansions"
        },
        description: "TNT is an explosive block that can be primed using flint and steel, fire charges, or a redstone signal. Once primed, it becomes an entity and explodes after a 4-second delay, damaging nearby blocks and entities. In Bedrock Edition, it can also be ignited by projectiles enchanted with Flame or by hitting it if 'TNT Explodes' game rule is on. It generates naturally in desert pyramids and woodland mansions. When broken without igniting, it drops itself."
    },
    "minecraft:underwater_tnt": {
        id: "minecraft:underwater_tnt",
        name: "Underwater TNT",
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
        drops: ["Underwater TNT"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Underwater TNT is a specialized explosive block exclusive to Minecraft Bedrock and Education Editions. Unlike regular TNT, which only damages entities when detonated underwater, Underwater TNT is capable of destroying blocks submerged in water. It is crafted by combining a block of TNT with Sodium. It can be primed using redstone power, flint and steel, or fire charges, and has the same fuse time as standard TNT. This block is indispensable for underwater excavation and clearing submerged structures where conventional explosives would be ineffective."
    },
    "minecraft:redstone_block": {
        id: "minecraft:redstone_block",
        name: "Block of Redstone",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Block of Redstone"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Block of Redstone is a solid block that functions as a permanent power source for redstone mechanisms. It emits a redstone signal strength of 15 to all adjacent blocks, making it useful for compact circuit designs and powering components like pistons or redstone lamps without the need for torches or levers. It can also be pushed by pistons, allowing for movable power sources in complex machines. Crafted from nine redstone dust, it also serves as a compact storage method for redstone."
    },
    "minecraft:repeater": {
        id: "minecraft:repeater",
        name: "Redstone Repeater",
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
        drops: ["Redstone Repeater"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Redstone Repeater is a crucial redstone component that serves three primary functions: it extends redstone signals up to full strength (15 blocks), introduces adjustable delays from 1 to 4 ticks, and acts as a one-way valve preventing signals from passing backwards. Crafted from three stone, two redstone torches, and one redstone dust, repeaters are essential for building complex circuits, timing mechanisms, and long-distance signal transmission. In Bedrock Edition, the repeater's delay can be adjusted by right-clicking, with visual indicators showing the current delay setting."
    },
    "minecraft:stone_pressure_plate": {
        id: "minecraft:stone_pressure_plate",
        name: "Stone Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stone Pressure Plate"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Stone Pressure Plate is a redstone-activated switch that detects when players, mobs, or items land on it, emitting a redstone signal strength of 15. Unlike wooden pressure plates, stone variants only activate for players and mobs, not items, making them ideal for security systems and mob detection traps. Crafted from two stone blocks, they provide a clean, discreet activation method for hidden doors, automatic lighting systems, and defensive mechanisms in Bedrock Edition builds."
    },
    "minecraft:wooden_button": {
        id: "minecraft:wooden_button",
        name: "Wooden Button",
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
        drops: ["Wooden Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted; Desert Pyramids, Jungle Temples"
        },
        description: "The Wooden Button is a redstone switch that provides a 15 redstone tick pulse when pressed, slightly longer than the stone button's 10 ticks. Activated by hand or projectile, it serves as a temporary power source for doors, trapdoors, and other redstone mechanisms. In Bedrock Edition, wooden buttons can be crafted from any wood type and occasionally generate naturally in desert pyramids and jungle temples. Their extended pulse duration makes them particularly useful for timing-sensitive circuits and contraptions."
    },
    "minecraft:stone_button": {
        id: "minecraft:stone_button",
        name: "Stone Button",
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
        drops: ["Stone Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Stone"
        },
        description: "The Stone Button is a compact redstone component that provides a momentary 1-second (10 redstone ticks) pulse when pressed. Unlike wooden variants, stone buttons cannot be activated by arrows or projectiles, making them ideal for secure inputs. They can be placed on the side, top, or bottom of any solid block to activate nearby mechanisms. In Bedrock Edition, they are frequently used for precise timing in redstone circuits and can be found naturally in various structures like Jungle Temples where they serve as triggers for traps."
    },
    "minecraft:pale_oak_button": {
        id: "minecraft:pale_oak_button",
        name: "Pale Oak Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "The Pale Oak Button is a compact redstone power source crafted from a single pale oak plank. It provides a momentary redstone pulse when pressed, lasting for 15 ticks (1.5 seconds) in Bedrock Edition. Its muted, cream-gray color allows it to blend subtly with other pale oak blocks or stand out against darker materials. It can be placed on any side of a solid block, making it a versatile tool for activating doors, machines, or hidden mechanisms."
    },
    "minecraft:pale_oak_pressure_plate": {
        id: "minecraft:pale_oak_pressure_plate",
        name: "Pale Oak Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:pale_oak_pressure_plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "The Pale Oak Pressure Plate is a wooden redstone component crafted from two pale oak planks, introduced in Minecraft Bedrock Edition 1.21.50. It features a muted cream-gray color that matches the eerie aesthetic of the Pale Garden biome. Like other wooden pressure plates, it detects players, mobs, and items, emitting a redstone signal of strength 15 when activated. It remains active as long as an entity stands on it and for a short time after they leave. Being a wood product, it is flammable and most efficiently harvested using an axe."
    },
    "minecraft:light_weighted_pressure_plate": {
        id: "minecraft:light_weighted_pressure_plate",
        name: "Light Weighted Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Light Weighted Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Gold Ingots"
        },
        description: "A Light Weighted Pressure Plate (Gold) is a specialized redstone component that outputs a signal strength based on the number of entities standing on it. In Bedrock Edition, it emits a signal strength equal to the number of entities, up to a maximum of 15. This allows for precise entity counting in automated systems. It can detect all entities, including players, mobs, and dropped items, making it essential for complex mob farms and item sorters that require specific quantity detection."
    },
    "minecraft:heavy_weighted_pressure_plate": {
        id: "minecraft:heavy_weighted_pressure_plate",
        name: "Heavy Weighted Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Heavy Weighted Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Iron Ingots"
        },
        description: "The Heavy Weighted Pressure Plate (Iron) is a redstone component designed to detect large groups of entities. Its signal strength increases by 1 for every 10 entities present (rounded up), requiring 141 or more entities to reach the maximum signal strength of 15. In Bedrock Edition, it is commonly used in high-capacity mob farms or security systems where a signal is only desired when many entities are present. Like other weighted plates, it can be activated by any entity type, including dropped items."
    },
    "minecraft:polished_blackstone_button": {
        id: "minecraft:polished_blackstone_button",
        name: "Polished Blackstone Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Blackstone Button"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants; Crafted from Polished Blackstone"
        },
        description: "The Polished Blackstone Button is a stone-type button introduced as part of the Nether Update. Like the standard stone button, it provides a redstone pulse lasting 10 ticks (1 second) when pressed. It can be activated by players and mobs but not by projectiles like arrows. Its dark, sleek appearance allows it to blend perfectly into blackstone structures or provide a high-contrast accent to lighter blocks. It is functionally identical to the stone button but offers a distinct aesthetic for Nether-themed builds."
    },
    "minecraft:rail": {
        id: "minecraft:rail",
        name: "Rail",
        hardness: 0.7,
        blastResistance: 0.7,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Rail"],
        generation: {
            dimension: "Overworld",
            yRange: "Y: -64 to 320 (Mineshafts)"
        },
        description: "A Rail is a non-solid block that provides a path for minecarts to travel. Found naturally in abandoned mineshafts or crafted from iron ingots and sticks, rails are fundamental for creating transportation networks. They can be placed on flat surfaces or slopes and automatically connect to adjacent rails, forming curves and vertical inclines. In Bedrock Edition, rails are essential for efficient long-distance travel and automated resource movement between distant biomes or points of interest."
    },
    "minecraft:golden_rail": {
        id: "minecraft:golden_rail",
        name: "Powered Rail",
        hardness: 0.7,
        blastResistance: 0.7,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Powered Rail"],
        generation: {
            dimension: "Overworld",
            yRange: "Y: -64 to 320 (Mineshafts)"
        },
        description: "A Powered Rail is a specialized track used to control the speed of minecarts. When activated by a redstone signal, it provides a significant speed boost to passing carts, allowing them to travel uphill or maintain momentum over long distances. If unpowered, the rail acts as a brake, quickly bringing any moving minecart to a complete stop. This dual functionality is vital for building complex transportation systems, roller coasters, and automated farm collection paths in Bedrock Edition."
    },
    "minecraft:detector_rail": {
        id: "minecraft:detector_rail",
        name: "Detector Rail",
        hardness: 0.7,
        blastResistance: 0.7,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Detector Rail"],
        generation: {
            dimension: "Overworld",
            yRange: "Y: -64 to 320 (Mineshafts)"
        },
        description: "A Detector Rail is a redstone-active block that functions like a pressure plate for minecarts. It emits a redstone signal whenever a minecart is positioned on it, making it essential for automating rail junctions and monitoring cart traffic. It can be used to trigger gates, activate powered rails, or signal the arrival of an item collection cart at a storage system. In Bedrock Edition, it provides a reliable way to integrate minecart systems with other redstone machinery and automation."
    },
    "minecraft:activator_rail": {
        id: "minecraft:activator_rail",
        name: "Activator Rail",
        hardness: 0.7,
        blastResistance: 0.7,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Activator Rail"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted (6 Iron Ingots, 2 Sticks, 1 Redstone Torch = 16 rails)"
        },
        description: "An Activator Rail is a specialized rail block that ejects entities from minecarts when powered by redstone. It can also activate TNT minecarts, lock/unlock hopper minecarts, and trigger various minecart behaviors. Crafted from iron ingots, sticks, and a redstone torch, activator rails are essential for mob transport systems, automated TNT miners, and selective item collection. In Bedrock Edition, activation occurs on C-ticks and adjacent rails propagate signals up to 8 blocks away."
    },

    "minecraft:waxed_copper_bulb": {
        id: "minecraft:waxed_copper_bulb",
        name: "Waxed Copper Bulb",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Waxed Copper Bulb"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Copper Blocks"
        },
        description: "A Waxed Copper Bulb is a light-emitting block that toggles its state when powered by redstone. Unlike a redstone lamp, it acts as a T-Flip-Flop, maintaining its ON or OFF state even after the redstone signal is removed. Being waxed, it will not oxidize further. It emits a light level of 15 when active. The texture changes slightly to indicate its powered state. It is crafted from copper blocks, blaze rods, and redstone dust."
    },
    "minecraft:jungle_button": {
        id: "minecraft:jungle_button",
        name: "Jungle Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Planks"
        },
        description: "The Jungle Button is a compact redstone power source crafted from a single jungle plank. It provides a momentary redstone pulse when pressed, lasting for 15 ticks (1.5 seconds) in Bedrock Edition. Its warm pinkish-tan hue allows it to blend perfectly with other jungle wood blocks, making it an excellent choice for hidden inputs or tropical-themed mechanisms. It can be attached to any side of a solid block. Like other wooden buttons, it can be activated by players, mobs, and projectiles like arrows."
    },
    "minecraft:mangrove_button": {
        id: "minecraft:mangrove_button",
        name: "Mangrove Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Mangrove Planks"
        },
        description: "The Mangrove Button is a compact redstone power source crafted from a single mangrove plank. It provides a temporary redstone pulse of 15 ticks (1.5 seconds) when activated by hand or by projectiles like arrows. Its deep red-brown color allows it to blend seamlessly with mangrove-themed structures or provide a warm accent to other materials. It can be placed on any side of a solid block, making it ideal for compact circuits, hidden entrances, and tropical-themed mechanisms. Being a wood product, it is flammable and is most efficiently harvested using an axe."
    },
    "minecraft:bamboo_button": {
        id: "minecraft:bamboo_button",
        name: "Bamboo Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Planks"
        },
        description: "The Bamboo Button is a compact redstone component introduced in the 1.20 Trails & Tales update, crafted from a single bamboo plank. When pressed, it provides a temporary redstone pulse lasting 15 ticks (1.5 seconds) in Bedrock Edition. Its bright yellow, textured appearance allows it to blend perfectly with other bamboo-based building blocks, making it ideal for secret inputs in tropical or Asian-inspired builds. Like other wooden buttons, it can be activated by players, mobs, and projectiles such as arrows or tridents."
    },
    "minecraft:acacia_button": {
        id: "minecraft:acacia_button",
        name: "Acacia Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Planks"
        },
        description: "The Acacia Button is a compact redstone power source crafted from a single acacia plank. It provides a momentary redstone pulse of 15 ticks (1.5 seconds) in Bedrock Edition when activated by hand or by projectiles like arrows. Its vibrant orange color allows it to blend seamlessly with acacia-based structures or provide a bright accent to other materials. It can be placed on any side of a solid block and is most efficiently harvested using an axe."
    },
    "minecraft:birch_button": {
        id: "minecraft:birch_button",
        name: "Birch Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Planks"
        },
        description: "The Birch Button is a compact redstone component crafted from a single birch plank. When pressed, it provides a temporary redstone pulse lasting 15 redstone ticks (1.5 seconds) in Bedrock Edition. Its bright, pale color matches the birch wood set, making it ideal for discreet inputs in light-colored builds or as a subtle accent. Like other wooden buttons, it can be activated by players, mobs, and projectiles like arrows. It can be placed on any face of a solid block."
    },
    "minecraft:birch_pressure_plate": {
        id: "minecraft:birch_pressure_plate",
        name: "Birch Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Planks"
        },
        description: "The Birch Pressure Plate is a redstone-activated switch crafted from two birch planks. It detects when any player, mob, or dropped item lands on it, emitting a redstone signal of strength 15. Its light, pale color matches the birch wood set, providing a clean and modern aesthetic for automatic doors and hidden mechanisms in light-colored builds. Like other wooden pressure plates, it remains active as long as an entity is on top of it and for a short time after they leave. It is flammable and can be easily harvested using an axe or by hand."
    },
    "minecraft:bamboo_pressure_plate": {
        id: "minecraft:bamboo_pressure_plate",
        name: "Bamboo Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Planks"
        },
        description: "The Bamboo Pressure Plate is a redstone-activated switch crafted from two bamboo planks. Introduced in the 1.20 Trails & Tales update, it features a unique yellowish woven texture that matches the rest of the bamboo wood set. It detects when any player, mob, or dropped item lands on it, emitting a redstone signal of strength 15. This makes it ideal for automatic doors and hidden mechanisms in tropical or Asian-inspired builds. Like other wooden pressure plates, it remains active as long as an entity is on top of it. It is flammable and easily harvested using an axe."
    },
    "minecraft:cherry_pressure_plate": {
        id: "minecraft:cherry_pressure_plate",
        name: "Cherry Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks"
        },
        description: "The Cherry Pressure Plate is a wooden redstone component that emits a signal when stepped on by players, mobs, or items. Crafted from two cherry planks, it features the distinctive pink hue of cherry wood, making it a decorative yet functional addition to any base. It provides a standard redstone pulse of strength 15 while an entity is on top of it. Like other wooden pressure plates, it is flammable and can be easily broken and collected by hand or more quickly with an axe."
    },
    "minecraft:cherry_button": {
        id: "minecraft:cherry_button",
        name: "Cherry Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks"
        },
        description: "The Cherry Button is a compact redstone component crafted from a single cherry plank. Introduced in update 1.20, it provides a temporary 1-second (10 redstone ticks) pulse when activated by hand or by projectiles like arrows in Bedrock Edition. Its beautiful pale pink color matches the cherry wood set, making it perfect for discreet or aesthetic inputs in floral and colorful builds. It can be placed on any side of a solid block and is most efficiently harvested with an axe. Like other wooden buttons, it is flammable and offers a unique aesthetic touch to functional redstone contraptions."
    },
    "minecraft:spruce_button": {
        id: "minecraft:spruce_button",
        name: "Spruce Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Spruce Planks"
        },
        description: "The Spruce Button is a compact redstone power source crafted from a single spruce plank. It provides a momentary redstone pulse when pressed, lasting for 15 ticks (1.5 seconds) in Bedrock Edition. Its deep, rustic brown color allows it to blend seamlessly with spruce-themed structures or provide a dark, earthy accent to other materials. It can be placed on any face of a solid block. Like other wooden buttons, it can be activated by players, mobs, and projectiles such as arrows or tridents."
    },
    "minecraft:dark_oak_button": {
        id: "minecraft:dark_oak_button",
        name: "Dark Oak Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Button"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Dark Oak Planks"
        },
        description: "The Dark Oak Button is a compact redstone power source crafted from a single dark oak plank. It provides a momentary redstone pulse when pressed, lasting for 15 ticks (1.5 seconds) in Bedrock Edition. Its rich, chocolate-brown color allows it to blend subtly with other dark oak blocks or provide a dark accent to lighter materials. It can be placed on any side of a solid block. Like other wooden buttons, it can be activated by players, mobs, and projectiles like arrows."
    },
    "minecraft:jungle_pressure_plate": {
        id: "minecraft:jungle_pressure_plate",
        name: "Jungle Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Planks"
        },
        description: "The Jungle Pressure Plate is a redstone-activated switch crafted from two jungle planks. It detects when any player, mob, or dropped item lands on it, emitting a redstone signal of strength 15. Its warm, pinkish-tan hue matches the jungle wood set, making it ideal for automatic doors and hidden mechanisms in tropical-themed builds. Like other wooden pressure plates in Bedrock Edition, it remains active as long as an entity is on top of it and for a short time after they leave. It is flammable and best harvested using an axe."
    },
    "minecraft:acacia_pressure_plate": {
        id: "minecraft:acacia_pressure_plate",
        name: "Acacia Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Planks"
        },
        description: "The Acacia Pressure Plate is a redstone-activated switch crafted from two acacia planks. It detects when any player, mob, or dropped item lands on it, emitting a redstone signal of strength 15. Its vibrant orange color matches the acacia wood set, making it ideal for automatic doors and hidden mechanisms in savanna-themed builds. Like other wooden pressure plates in Bedrock Edition, it remains active as long as an entity is on top of it and for a short duration after they leave. It is flammable and best harvested using an axe."
    },
    "minecraft:spruce_pressure_plate": {
        id: "minecraft:spruce_pressure_plate",
        name: "Spruce Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Spruce Planks"
        },
        description: "The Spruce Pressure Plate is a redstone-activated switch crafted from two spruce planks. It detects when a player, mob, or item lands on it, emitting a signal of strength 15. Its dark brown texture matches the spruce wood set, making it perfect for rustic or woodland-themed builds. Like other wooden pressure plates in Bedrock Edition, it remains active as long as an entity is on top. It is flammable and best harvested with an axe."
    },
    "minecraft:dark_oak_pressure_plate": {
        id: "minecraft:dark_oak_pressure_plate",
        name: "Dark Oak Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Dark Oak Planks"
        },
        description: "The Dark Oak Pressure Plate is a redstone component crafted from two dark oak planks. It emits a redstone signal of strength 15 when activated by players, mobs, or dropped items. Its deep, dark brown color blends seamlessly with dark oak structures, providing a discreet way to trigger doors or mechanisms. It functions similarly to other wooden pressure plates, maintaining its signal while an entity is present. It is flammable and most efficiently collected using an axe."
    },
    "minecraft:mangrove_pressure_plate": {
        id: "minecraft:mangrove_pressure_plate",
        name: "Mangrove Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Pressure Plate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Mangrove Planks"
        },
        description: "The Mangrove Pressure Plate is a redstone switch crafted from two mangrove planks. It features a rich, deep red color unique to the mangrove wood set, ideal for tropical or swamp-themed contraptions. It detects players, mobs, and items, outputting a signal of strength 15. This plate is a decorative yet functional addition to any Bedrock Edition world. Like all wooden pressure plates, it is flammable and should be harvested with an axe for maximum efficiency."
    },
    "minecraft:warped_pressure_plate": {
        id: "minecraft:warped_pressure_plate",
        name: "Warped Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Pressure Plate"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Planks"
        },
        description: "The Warped Pressure Plate is a fire-resistant redstone component crafted from two warped planks. Native to the Nether's Warped Forest, it possesses a unique teal color and is completely immune to fire and lava. It detects when any entity, including players, mobs, and items, lands on its surface, emitting a redstone signal of strength 15. This makes it ideal for automatic doors and mechanisms in hazardous environments where traditional wooden plates would burn. It remains active as long as an entity is on top and for a short duration after they leave."
    },
    "minecraft:crimson_pressure_plate": {
        id: "minecraft:crimson_pressure_plate",
        name: "Crimson Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Pressure Plate"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks"
        },
        description: "The Crimson Pressure Plate is a durable, fire-resistant redstone switch crafted from two crimson planks. Found naturally in the Nether's Crimson Forest, its deep burgundy hue provides a dark, rustic aesthetic for Nether-based constructions. It detects when any entity, such as a player, mob, or dropped item, stands on it, outputting a redstone signal of strength 15. Being immune to fire and lava, it is a superior choice for automated systems near lava lakes or in the Nether. It functions identically to Overworld wooden pressure plates but with significantly higher heat resistance."
    },
    "minecraft:crimson_button": {
        id: "minecraft:crimson_button",
        name: "Crimson Button",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Button"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Planks"
        },
        description: "The Crimson Button is a fire-resistant redstone component crafted from crimson planks. It provides a momentary redstone pulse of 15 ticks (1.5 seconds) in Bedrock Edition when activated. Its deep red, fungal texture allows it to blend perfectly with other crimson wood blocks, making it ideal for hidden inputs in Nether-themed builds. Unlike Overworld wooden buttons, it is completely immune to fire and lava. It can be placed on any side of a solid block."
    },
    "minecraft:polished_blackstone_pressure_plate": {
        id: "minecraft:polished_blackstone_pressure_plate",
        name: "Polished Blackstone Pressure Plate",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Polished Blackstone Pressure Plate"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Polished Blackstone"
        },
        description: "The Polished Blackstone Pressure Plate is a stone-type redstone switch crafted from two polished blackstone blocks. Unlike wooden variants, it only detects players and mobs, ignoring dropped items, which makes it perfect for secure inputs and mob-specific traps. Its dark, sleek appearance allows it to blend seamlessly into blackstone-themed structures or provide a high-contrast accent to lighter blocks. It is fire-resistant and provides a signal strength of 15 when activated. It combines the functionality of a stone pressure plate with the unique aesthetic of the Nether."
    }
};
