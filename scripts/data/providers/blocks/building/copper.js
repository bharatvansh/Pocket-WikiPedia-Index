// Pocket Wikipedia Foundation - Copper Blocks Data
// ============================================
// This file contains: Block of copper (all oxidation states),
// cut copper (all oxidation states), cut copper stairs/slabs,
// waxed variants of all copper blocks, copper grate,
// exposed copper grate, weathered copper grate, oxidized copper grate,
// copper bulb, copper door, copper trapdoor, chiseled copper
// ============================================

/**
 * Copper blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const copperBlocks = {
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
            silkTouch: true
        },
        drops: ["Copper Bulb"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "The Copper Bulb is a unique lighting block introduced in Minecraft 1.21 that dynamically adjusts its light output based on its oxidation state. A fresh copper bulb emits light level 15, decreasing to 12 for exposed, 8 for weathered, and 4 for oxidized variants. The bulb toggles between on and off states when it receives a redstone pulse. Copper bulbs can be crafted from three copper blocks of matching oxidation level, a blaze rod, and redstone dust, yielding four bulbs. They generate naturally within Trial Chambers and can be waxed with honeycomb to prevent further oxidation. The distinctive toggling behavior makes them ideal for redstone contraptions and decorative lighting systems."
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
        description: "The Copper Door is a 1.21+ copper-made door that can be opened and closed by players like a wooden door, while still supporting redstone control for automation. In Bedrock Edition, it should be mined with a stone-tier pickaxe or better to reliably obtain the door as an item, and using a pickaxe also breaks it faster. Like other copper blocks, it oxidizes through exposed, weathered, and oxidized stages over time; an axe can scrape oxidation away, and honeycomb waxes it to prevent further aging. Copper doors generate naturally in Trial Chambers, are affected by the wind burst from a thrown Wind Charge (toggling their state), and are waterloggable in Bedrock Edition for clean underwater entrances."
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
        description: "Chiseled Copper is a decorative copper block introduced in Minecraft 1.21 featuring an intricate patterned texture created through a unique crafting process. Crafted by placing two cut copper slabs vertically in a 1x2 arrangement on a crafting grid, or by using a stonecutter on cut copper, chiseled copper produces a sophisticated geometric pattern that stands out among other copper variants. Like all copper blocks, it oxidizes through exposed, weathered, and oxidized stages over time, and can be waxed with honeycomb to preserve its current state. Chiseled copper generates naturally in Trial Chambers, where it appears in various oxidation states. This block is particularly valued by builders for its unique aesthetic that combines the warmth of copper with the elegance of carved stone, making it ideal for accent walls, decorative pillars, and detailed architectural features."
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
        description: "The Exposed Copper Grate is the first oxidation stage of the copper grate block introduced in Minecraft 1.21. As copper naturally oxidizes over time, it transitions from its original orange-copper color to a distinctive teal hue, making exposed copper grates ideal for builders seeking weathered aesthetics. Like all copper blocks, exposed copper grates can be obtained directly through crafting or found naturally in Trial Chambers in various oxidation stages. They maintain the same transparency and functionality as the base copper grate, allowing them to serve as decorative railings, vents, and walkways while providing a naturally aged appearance. Players can wax exposed copper grates with honeycomb to preserve their current teal color indefinitely, preventing further oxidation. The block can also be scraped with an axe to revert it to the unoxidized copper grate state, offering builders creative control over the oxidation timeline for their builds."
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
        description: "The Weathered Copper Grate represents the second oxidation stage of the copper grate family introduced in Minecraft 1.21, featuring a rich blue-green color that indicates advanced oxidation. This intermediate stage between exposed and fully oxidized copper provides builders with a sophisticated aesthetic choice for aged structures, ancient ruins, or weathered industrial designs. Weathered copper grates share the same transparent properties and decorative functionality as their less-oxidized counterparts, making them perfect for railings, ventilation systems, and architectural details in builds requiring a time-worn appearance. These blocks can be found naturally in Trial Chambers corridors, crafted through the copper oxidation process, or created by allowing exposed copper grates to continue oxidizing. Like other copper blocks, weathered copper grates can be waxed with honeycomb to permanently preserve their current blue-green color, or scraped back to exposed or unoxidized states using an axe. This flexibility allows builders to create oxidation gradients and achieve precise aging effects in their constructions."
    }
};
