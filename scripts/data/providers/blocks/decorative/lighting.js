// Pocket Wikipedia Foundation - Lighting Blocks Data
// ============================================
// This file contains: Glowstone, sea lantern, shroomlight,
// froglight (all 3 colors), end rod, amethyst cluster,
// glow lichen, redstone lamp (when lit), jack o'lantern
// ============================================

/**
 * Lighting blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const lightingBlocks = {
    "minecraft:glowstone": {
        id: "minecraft:glowstone",
        name: "Glowstone",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 15,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Glowstone Dust (2-4)"],
        generation: {
            dimension: "The Nether",
            yRange: "Any"
        },
        description: "Glowstone is a luminous block that emits the maximum light level of 15, making it an excellent light source. It generates naturally in the Nether on the underside of terrain and in bastion remnants. When broken without Silk Touch, it drops 2-4 glowstone dust, which can be crafted back into glowstone blocks."
    }
};
