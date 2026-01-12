// Pocket Wikipedia Foundation - Coral Blocks Data
// ============================================
// This file contains: Coral blocks (all 5 colors), dead coral blocks,
// coral (all 5 types), dead coral, coral fans (all 5 types),
// dead coral fans
// ============================================

/**
 * Coral blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const coralBlocks = {
    "minecraft:tube_coral_block": {
        id: "minecraft:tube_coral_block",
        name: "Tube Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Dead Tube Coral Block (without Silk Touch)", "Tube Coral Block (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes"
        },
        description: "Tube Coral Block is a solid block variant of tube coral found in coral reefs within warm ocean biomes. It has a blue, tubular texture. Like other coral blocks, it must remain in contact with water to stay alive; otherwise, it transforms into a dead coral block. It requires a tool with Silk Touch to be harvested as a living block."
    }
};
