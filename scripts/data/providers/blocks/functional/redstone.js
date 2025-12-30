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
    "minecraft:crafter": {
        id: "minecraft:crafter",
        name: "Crafter",
        hardness: 1.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["Crafter"],
        generation: {
            dimension: "Overworld (Trial Chambers / Crafted)",
            yRange: "-40 to 0 (Trial Chambers; crafted anywhere)"
        },
        description: "The crafter is a redstone-powered crafting block that can automatically craft items from its internal 3x3 grid. When it receives a redstone signal, it waits 4 game ticks (0.2 seconds) and then crafts and ejects one output item from its front face, either into the world or into a container it is facing. Individual slots can be enabled or disabled (toggled by clicking an empty slot), which lets you control the recipe shape and prevents items from being inserted into disabled slots. Crafters can be mined with any tool, but a stone pickaxe or better is required to reliably obtain the block itself."
    }
};
