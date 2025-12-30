// Pocket Wikipedia Foundation - Copper Blocks Data
// ============================================
// This file contains: Block of copper (all oxidation states),
// cut copper (all oxidation states), cut copper stairs/slabs,
// waxed variants of all copper blocks, copper grate,
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
        description: "Chiseled Copper is a decorative copper block introduced in Minecraft 1.21 featuring an intricate patterned texture created through a unique crafting process. Crafted by placing two cut copper slabs vertically in a 1x2 arrangement on a crafting grid, or by using a stonecutter on cut copper stairs, chiseled copper produces a sophisticated geometric pattern that stands out among other copper variants. Like all copper blocks, it oxidizes through exposed, weathered, and oxidized stages over time, and can be waxed with honeycomb to preserve its current state. Chiseled copper generates naturally in Trial Chambers, where it appears in various oxidation states. This block is particularly valued by builders for its unique aesthetic that combines the warmth of copper with the elegance of carved stone, making it ideal for accent walls, decorative pillars, and detailed architectural features."
    }
};
