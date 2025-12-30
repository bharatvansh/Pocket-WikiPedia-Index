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
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Copper Bulb"],
        generation: null,
        description: "The copper bulb is a decorative and functional block introduced in Minecraft 1.21 that serves as a redstone light source with unique properties. Unlike redstone lamps that require constant power, the copper bulb only needs a single redstone signal to activate permanently. It emits light at various levels (4, 8, 12, or 15) depending on its oxidation state, with less oxidized variants producing higher light levels. The block can be waxed to prevent oxidation and preserve light output indefinitely. Copper bulbs are invaluable for redstone builds requiring latches, t-flip flops, or toggle circuits, and they add an attractive copper aesthetic to builds that oxidizes beautifully over time."
    }
};
