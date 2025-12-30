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
            silkTouch: false
        },
        drops: ["Copper Bulb"],
        generation: {
            dimension: "Overworld (Trial Chambers / Crafted)",
            yRange: "-40 to 0 (Trial Chambers; crafted anywhere)"
        },
        description: "The copper bulb is a redstone-controlled light block that toggles between lit and unlit whenever it receives a redstone pulse, and it does not need continuous power to stay on. Its brightness depends on oxidation: an unoxidized copper bulb emits light level 15 when lit, then drops to 12 (exposed), 8 (weathered), and 4 (oxidized). A comparator can read the bulb’s state, outputting signal strength 15 while it is lit and 0 while it is unlit (regardless of oxidation), which makes it useful for compact memory circuits such as T flip-flops. Like other copper blocks, it can be waxed with honeycomb to stop oxidation and scraped with an axe to remove oxidation."
    }
};
