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
    }
};
