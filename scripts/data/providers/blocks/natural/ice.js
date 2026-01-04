// Pocket Wikipedia Foundation - Ice Blocks Data
// ============================================
// This file contains: Ice, Packed Ice, Blue Ice, Frosted Ice
// ============================================

/**
 * Ice blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const iceBlocks = {
    "minecraft:ice": {
        id: "minecraft:ice",
        name: "Ice",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Ice"],
        generation: {
            dimension: "Overworld",
            yRange: "Sea level in frozen biomes"
        },
        description: "Ice is a translucent solid block found in frozen biomes like frozen oceans and snowy slopes. It melts into water if placed near bright light sources (light level > 11), except sunlight. Ice is slippery, causing entities to slide, which increases movement speed. To obtain the block itself, it must be mined with a tool enchanted with Silk Touch; otherwise, it turns into water (if supported by a block below) or drops nothing."
    }
};
