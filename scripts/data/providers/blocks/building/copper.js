// Pocket Wikipedia Foundation - Copper Blocks Data
// ============================================
// This file contains: Block of copper (all oxidation states),
// cut copper (all oxidation states), cut copper stairs/slabs,
// waxed variants of all copper blocks, copper grate,
// exposed copper grate, weathered copper grate, oxidized copper grate,
// copper bulb, exposed copper bulb, weathered copper bulb, oxidized copper bulb,
// copper door, exposed copper door, weathered copper door, oxidized copper door,
// copper trapdoor, exposed copper trapdoor, weathered copper trapdoor, oxidized copper trapdoor,
// chiseled copper
// ============================================

/**
 * Copper blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const copperBlocks = {
    "minecraft:copper_block": {
        id: "minecraft:copper_block",
        name: "Block of Copper",
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
        drops: ["Block of Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 9 Copper Ingots"
        },
        description: "The Block of Copper is a solid metal block crafted from nine copper ingots. It oxidizes over time through four stages: Normal, Exposed, Weathered, and Oxidized. Players can wax the block with honeycomb to prevent oxidation or scrape it with an axe to revert it to a previous stage. In Bedrock Edition, it requires a stone pickaxe or better to mine; otherwise, it drops nothing. It serves as a compact storage for copper ingots and a versatile decorative block with a dynamic aging mechanic."
    },
    "minecraft:exposed_copper": {
        id: "minecraft:exposed_copper",
        name: "Exposed Copper",
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
        drops: ["Exposed Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally or generated in structures"
        },
        description: "Exposed Copper is the first oxidation stage of the Block of Copper, exhibiting a slightly tarnished, brownish appearance with spots of green. It forms when a regular copper block is exposed to air for some time. Like other copper variants, it can be waxed with honeycomb to freeze its state or scraped with an axe to return to the pristine copper look. It retains the same durability (hardness 3.0, blast resistance 6.0) as the original block and requires a stone pickaxe or higher to harvest."
    },
    "minecraft:weathered_copper": {
        id: "minecraft:weathered_copper",
        name: "Weathered Copper",
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
        drops: ["Weathered Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally"
        },
        description: "Weathered Copper represents the second stage of copper oxidation, characterized by a distinct greenish-blue hue covering most of the block's surface. It naturally evolves from Exposed Copper over time but can be preserved by applying honeycomb. Using an axe on the block scrapes off the oxidation layer, reverting it to the Exposed stage. Mining requires a stone tier pickaxe or better. Its unique color makes it a popular choice for building roofs and statues that require an aged, historical aesthetic."
    },
    "minecraft:oxidized_copper": {
        id: "minecraft:oxidized_copper",
        name: "Oxidized Copper",
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
        drops: ["Oxidized Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally (Final stage)"
        },
        description: "Oxidized Copper is the final stage of copper oxidation, featuring a beautiful teal-green patina that covers the entire block. It naturally forms from weathered copper when exposed to the elements for a long period. This block can be waxed with honeycomb to lock in its aged look or scraped with an axe to revert it to a previous oxidation stage. It is a favorite among builders for creating aged roofs, verdigris statues, and grand industrial structures."
    },
    "minecraft:cut_copper": {
        id: "minecraft:cut_copper",
        name: "Cut Copper",
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
        drops: ["Cut Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Copper Blocks"
        },
        description: "Cut Copper is a decorative building block crafted by stonecutting or crafting from four blocks of copper. It features a unique tiled texture that makes it ideal for industrial flooring, modern roofs, and accent walls. Like regular copper blocks, cut copper undergoes four stages of oxidation, changing from orange to teal over time. It can be waxed to preserve a specific color or scraped to reverse the aging process."
    },
    "minecraft:oxidized_cut_copper": {
        id: "minecraft:oxidized_cut_copper",
        name: "Oxidized Cut Copper",
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
        drops: ["Oxidized Cut Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Weathered naturally (Final stage)"
        },
        description: "Oxidized Cut Copper is the final, fully aged form of cut copper blocks. It boasts a distinctive teal-green color while retaining its sharp, tiled texture. This block is perfect for adding a sense of history and permanence to a build, often used for turquoise-colored roofs or weathered pathways. It can be waxed to maintain its current state or scraped with an axe to reveal the layers of color beneath, providing builders with excellent gradient control."
    },
    "minecraft:copper_bulb": {
        id: "minecraft:copper_bulb",
        name: "Copper Bulb",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Copper Bulb"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Copper Bulb is a light source from Minecraft 1.21 that toggles with redstone pulses. Its light level decreases as it oxidizes: 15 (fresh), 12 (exposed), 8 (weathered), and 4 (oxidized). Found in Trial Chambers, they can also be crafted using three copper blocks, a blaze rod, and redstone dust. Players can wax bulbs with honeycomb to freeze their oxidation level. Unlike standard redstone lamps, they stay on or off after a single pulse. They drop when mined with a stone pickaxe or higher. Its unique behavior is ideal for compact redstone circuits and atmospheric builds."
    },
    "minecraft:copper_door": {
        id: "minecraft:copper_door",
        name: "Copper Door",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Copper Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Copper Door (1.21+) combines the manual utility of wooden doors with the redstone compatibility of iron. It oxidizes over time through four stages, but can be scraped with an axe to reverse aging or waxed with honeycomb to freeze it. Mining requires a stone pickaxe or better (Bedrock). They generate naturally in Trial Chambers and can be toggled by the wind burst of a Wind Charge. In Bedrock Edition, they are waterloggable, making them ideal for underwater builds."
    },
    "minecraft:copper_trapdoor": {
        id: "minecraft:copper_trapdoor",
        name: "Copper Trapdoor",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Copper Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Copper Trapdoor is a copper variant of the trapdoor introduced in Minecraft 1.21. It can be opened and closed by players or with redstone power, and a thrown Wind Charge can also toggle it. Copper trapdoors oxidize over time and can be waxed with honeycomb to preserve a chosen color, while an axe can scrape them back to an earlier oxidation stage. Unlike most trapdoors, copper trapdoors must be mined with a stone-tier pickaxe or better to drop; breaking them without a valid pickaxe destroys the block without an item drop."
    },
    "minecraft:copper_grate": {
        id: "minecraft:copper_grate",
        name: "Copper Grate",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Copper Grate"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Copper Grate is a decorative, transparent copper block added in Minecraft 1.21 that is commonly used as railings, vents, and walkways. It oxidizes over time like other copper blocks (and can be waxed with honeycomb), allowing builders to create detailed gradients and patterns. Copper grates generate in Trial Chambers corridors in various oxidation stages and can be crafted or stonecut from blocks of copper. To obtain a copper grate reliably, mine it with a stone-tier pickaxe or better; breaking it without a pickaxe yields no drops."
    },
    "minecraft:chiseled_copper": {
        id: "minecraft:chiseled_copper",
        name: "Chiseled Copper",
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
        drops: ["Chiseled Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Chiseled Copper (1.21) is a decorative block with a unique geometric pattern. It is crafted by placing two cut copper slabs vertically or by using a stonecutter on cut copper. Like other copper blocks, it oxidizes over time through four distinct stages (unexposed to fully oxidized) unless waxed with a honeycomb. It generates naturally within Trial Chambers in various oxidation states. Builders use it for intricate architectural details, pillars, and accent walls due to its sophisticated carved appearance."
    },
    "minecraft:exposed_chiseled_copper": {
        id: "minecraft:exposed_chiseled_copper",
        name: "Exposed Chiseled Copper",
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
        drops: ["Exposed Chiseled Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Exposed Chiseled Copper is the first oxidation stage of the chiseled copper block, featuring a tarnished brownish-orange color. It retains the unique carved geometric pattern but shows signs of early weathering. Like all copper blocks, it can be waxed with honeycomb to lock this specific look or scraped with an axe to revert it to the fresh copper stage. It naturally forms in Trial Chambers or through the gradual oxidation of a pristine chiseled copper block when exposed to air."
    },
    "minecraft:weathered_chiseled_copper": {
        id: "minecraft:weathered_chiseled_copper",
        name: "Weathered Chiseled Copper",
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
        drops: ["Weathered Chiseled Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Weathered Chiseled Copper is the second stage of oxidation for the chiseled copper block, characterized by a prominent blue-green patina mixed with remaining orange tones. The intricate carved design is still visible through the oxidation. Builders use this block to achieve a classic aged copper look in their structures. It can be waxed with honeycomb to preserve its current state or scraped with an axe to reveal the previous oxidation layers. It generates naturally within Trial Chambers as part of the decorative architectural elements."
    },
    "minecraft:oxidized_chiseled_copper": {
        id: "minecraft:oxidized_chiseled_copper",
        name: "Oxidized Chiseled Copper",
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
        drops: ["Oxidized Chiseled Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Oxidized Chiseled Copper is the final oxidation stage of the chiseled copper block, featuring a rich, uniform teal-green patina. In this stage, the block has completely weathered, providing a beautiful aged aesthetic for ancient ruins or grand industrial builds. Despite its heavy oxidation, it remains as durable as the original block. It can be waxed to maintain its teal color or scraped with an axe to revert it to the weathered stage. This block is a key decorative component of the Trial Chambers' unique visual style."
    },
    "minecraft:exposed_copper_grate": {
        id: "minecraft:exposed_copper_grate",
        name: "Exposed Copper Grate",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Exposed Copper Grate"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Exposed Copper Grate is the first oxidation stage of the copper grate, introduced in Minecraft 1.21. It features a tarnished brownish color with orange spots, representing early weathering. These blocks are transparent, making them ideal for decorative vents, railings, and walkways. Found in Trial Chambers or crafted, they can be waxed with honeycomb to lock their current appearance or scraped with an axe to revert them to the unoxidized state. Without maintenance, they will continue to oxidize through further stages over time."
    },
    "minecraft:weathered_copper_grate": {
        id: "minecraft:weathered_copper_grate",
        name: "Weathered Copper Grate",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Weathered Copper Grate"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Weathered Copper Grate is the second oxidation stage of copper grates, featuring a distinct blue-green hue. Introduced in 1.21, these transparent blocks are ideal for decorative vents, railings, or industrial builds requiring an aged look. They occur naturally in Trial Chambers or through the gradual oxidation of exposed copper. Players can use honeycomb to wax and preserve the color or an axe to scrape it back to previous oxidation states. Like other grates, they allow light to pass through while providing a solid walking surface."
    },
    "minecraft:oxidized_copper_grate": {
        id: "minecraft:oxidized_copper_grate",
        name: "Oxidized Copper Grate",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Oxidized Copper Grate"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Oxidized Copper Grate is the final oxidation stage of copper grates, featuring a rich teal-green patina. Found naturally in Trial Chambers, these transparent blocks are ideal for ancient or industrial builds. Like other copper variants, they can be waxed with honeycomb to lock their appearance or scraped with an axe to revert them to the weathered state. This allows builders to precisely control the aging of their structures while maintaining the unique lattice-like visibility of the grate block."
    },
    "minecraft:oxidized_copper_bulb": {
        id: "minecraft:oxidized_copper_bulb",
        name: "Oxidized Copper Bulb",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 4,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Oxidized Copper Bulb"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Oxidized Copper Bulb is the final oxidation stage of copper bulbs introduced in 1.21. Featuring a distinct teal-green patina, it emits the lowest light level of the family at level 4, perfect for dim atmospheric lighting. Like other variants, it toggles between on and off states via redstone pulses. Found in Trial Chambers, it can be waxed with honeycomb to preserve its appearance. It drops itself when mined with a stone pickaxe or higher. This block is highly valued by builders for its authentic aged aesthetic and unique redstone interaction."
    },
    "minecraft:exposed_copper_door": {
        id: "minecraft:exposed_copper_door",
        name: "Exposed Copper Door",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Exposed Copper Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Exposed Copper Door is the first oxidation stage of the copper door family, featuring a tarnished brownish-copper look. It functions like standard doors, supporting manual interaction, redstone signals, and waterlogging. Players can apply honeycomb to wax the door, freezing its current state, or use an axe to scrape it back to a fresh appearance. These doors generate naturally within Trial Chambers. They offer a weathered aesthetic suitable for industrial or rustic builds while maintaining full redstone compatibility and durability."
    },
    "minecraft:weathered_copper_door": {
        id: "minecraft:weathered_copper_door",
        name: "Weathered Copper Door",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Weathered Copper Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Weathered Copper Door is the second oxidation stage of copper doors, featuring a distinct blue-green patina. Found in Trial Chambers or created through natural oxidation, it functions like other doors, responding to player interaction and redstone signals. It is waterloggable and can be waxed with honeycomb to prevent further aging into the fully oxidized state. It drops itself when mined with a stone pickaxe or better. Its unique appearance makes it ideal for representing time-worn industrial sites or ancient ruins."
    },
    "minecraft:oxidized_copper_door": {
        id: "minecraft:oxidized_copper_door",
        name: "Oxidized Copper Door",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oxidized Copper Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Oxidized Copper Door is the final oxidation stage of the copper door, showing a teal patina. In Bedrock Edition it can be opened by hand or with redstone and is waterloggable, and a thrown Wind Charge can also toggle it. Waxing it with honeycomb prevents further oxidation, while an axe can scrape it back to earlier stages, letting builders lock in an aged look for industrial or Trial Chamber themed builds."
    },
    "minecraft:exposed_copper_bulb": {
        id: "minecraft:exposed_copper_bulb",
        name: "Exposed Copper Bulb",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 12,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Exposed Copper Bulb"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Exposed Copper Bulb is the first oxidation stage of the copper bulb, emitting a light level of 12. It toggles between on and off states via redstone pulses. Found in Trial Chambers or crafted using three exposed copper blocks, a blaze rod, and redstone dust, it features a tarnished brownish-copper look. Players can wax it with honeycomb to freeze its oxidation level or scrape it with an axe to revert it to a fresh state. It offers a unique atmospheric lighting option for weathered builds and specialized redstone contraptions."
    },
    "minecraft:weathered_copper_bulb": {
        id: "minecraft:weathered_copper_bulb",
        name: "Weathered Copper Bulb",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 8,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Weathered Copper Bulb"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Weathered Copper Bulb is the second oxidation stage of the copper bulb, featuring a blue-green patina and emitting a light level of 8. It toggles its state when receiving a redstone pulse, making it a compact T-flip-flop for circuits. Found in Trial Chambers, it can also be crafted or formed via natural oxidation. Use honeycomb to wax the bulb, locking in its appearance and light output. It drops as an item when mined with a stone pickaxe or better. Its moderate glow is ideal for atmospheric builds and redstone-controlled lighting systems."
    },
    "minecraft:exposed_copper_trapdoor": {
        id: "minecraft:exposed_copper_trapdoor",
        name: "Exposed Copper Trapdoor",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Exposed Copper Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Exposed Copper Trapdoor is the first oxidation stage of the copper trapdoor family introduced in Minecraft 1.21. It features a tarnished brownish-copper appearance. Like standard trapdoors, it can be opened manually, with redstone, or via Wind Charges. Players can use honeycomb to wax it, preserving its look, or an axe to scrape it back to its fresh state. Exposed variants generate naturally in Trial Chambers. This block provides a weathered aesthetic for rustic or industrial builds while maintaining the durability and functionality of copper trapdoors."
    },
    "minecraft:weathered_copper_trapdoor": {
        id: "minecraft:weathered_copper_trapdoor",
        name: "Weathered Copper Trapdoor",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Weathered Copper Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Weathered Copper Trapdoor is the second oxidation stage of copper trapdoors, featuring a distinct blue-green patina. It functions like standard trapdoors, responding to player interaction, redstone signals, and Wind Charges. Found naturally in Trial Chambers, these blocks can be crafted from weathered copper or formed through natural oxidation. Players can use honeycomb to wax them, locking in their current appearance. To collect the block, use a stone-tier pickaxe or better. Its aged aesthetic is ideal for adding character to industrial or ancient-themed builds."
    },
    "minecraft:oxidized_copper_trapdoor": {
        id: "minecraft:oxidized_copper_trapdoor",
        name: "Oxidized Copper Trapdoor",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Oxidized Copper Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Oxidized Copper Trapdoor is the final oxidation stage of copper, featuring a distinct teal-green patina. Found naturally in Trial Chambers, it serves as a weathered decorative and functional block. Players can wax it with honeycomb to lock its appearance or scrape it with an axe to revert it to a weathered state. It must be mined with a stone pickaxe or better to drop as an item. Unlike iron trapdoors, copper trapdoors can be toggled by hand or redstone, providing versatility for aged industrial or ancient-themed builds."
    },
    "minecraft:waxed_copper": {
        id: "minecraft:waxed_copper",
        name: "Waxed Block of Copper",
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
        drops: ["Waxed Block of Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 9 Copper Ingots or applied Honeycomb"
        },
        description: "A Block of Copper that has been treated with honeycomb to lock in its current oxidation state. This waxed variant will not change color over time, regardless of exposure to the elements. Players can use an axe on the block to scrape off the wax layer, allowing it to resume natural oxidation. It can also be crafted back into nine copper ingots, making it a viable storage option. Its reflective orange surface is highly valued for building statues, roofs, and accents that require a clean, permanent metallic look."
    },
    "minecraft:waxed_cut_copper": {
        id: "minecraft:waxed_cut_copper",
        name: "Waxed Cut Copper",
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
        drops: ["Waxed Cut Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cut Copper or applied Honeycomb"
        },
        description: "A decorative variant of cut copper that has been waxed with honeycomb to prevent further oxidation. It features the same tiled, industrial texture as standard cut copper but is permanently frozen in its pristine orange state. Waxed cut copper is ideal for builders who want a consistent, non-aging tiled look for modern flooring or industrial roofing. Like other waxed blocks, the wax can be scraped off with an axe to allow the block to begin weathering naturally into its' subsequent developmental stages."
    },
    "minecraft:waxed_chiseled_copper": {
        id: "minecraft:waxed_chiseled_copper",
        name: "Waxed Chiseled Copper",
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
        drops: ["Waxed Chiseled Copper"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Chiseled Copper or applied Honeycomb"
        },
        description: "Waxed Chiseled Copper is a decorative block with a unique carved geometric pattern that has been treated with honeycomb to prevent oxidation. This treatment ensures the block maintains its' original orange-copper color indefinitely. It provides a sophisticated look for pillars, borders, and accent walls in architectural designs. If a player decides they want a more weathered look, they can scrape the wax off with any axe, allowing the block to eventually turn green through natural exposure to air."
    },
    "minecraft:waxed_copper_grate": {
        id: "minecraft:waxed_copper_grate",
        name: "Waxed Copper Grate",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Waxed Copper Grate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Copper Grates or applied Honeycomb"
        },
        description: "A transparent lattice-style block crafted from copper that has been waxed to lock in its' fresh appearance. It allows light to pass through and can be walked upon, making it perfect for industrial walkways, vents, or decorative railings. Because it is waxed, it won't weather into the green patina common to older copper structures. Players can remove the wax coating using an axe, which then allows the block to oxidize through its' usual stages. In Bedrock Edition, it behaves as a transparent block that requires a pickaxe for harvesting."
    },
    "minecraft:waxed_copper_bulb": {
        id: "minecraft:waxed_copper_bulb",
        name: "Waxed Copper Bulb",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Waxed Copper Bulb"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers (Crafted/Waxed)"
        },
        description: "The Waxed Copper Bulb is a decorative variant of the copper bulb light source introduced in Minecraft 1.21. It has been treated with honeycomb to permanently lock its oxidation state and maintain its' maximum light level of 15. Like standard copper bulbs, it can be toggled on and off by a redstone pulse, functioning as a compact T-flip-flop. Its' vibrant orange appearance and high light output make it an ideal choice for modern and industrial lighting designs. To obtain it, players can either craft it or use honeycomb on a fresh copper bulb. It requires a stone pickaxe or better to harvest."
    }
};
