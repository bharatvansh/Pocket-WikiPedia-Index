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
    },
    "minecraft:copper_lantern": {
        id: "minecraft:copper_lantern",
        name: "Copper Lantern",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Copper Lantern"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Copper Lantern emits a level 15 green-tinted light. Crafted from copper nuggets and a copper torch, it shares the 3.5 hardness and blast resistance of standard lanterns. It features four oxidation stages: unoxidized, exposed, weathered, and oxidized, changing its color from orange to teal-green over time without affecting its luminance. Players can apply honeycomb to wax the lantern, preserving its current stage. Introduced in the Copper Age update, its unique atmospheric glow and aging mechanic make it a versatile choice for decorative and functional lighting."
    },
    "minecraft:verdant_froglight": {
        id: "minecraft:verdant_froglight",
        name: "Verdant Froglight",
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
        drops: ["Verdant Froglight"],
        generation: {
            dimension: "Nether",
            yRange: "Frog interaction (magma cube consumption)"
        },
        description: "Verdant Froglight is a vibrant green light-emitting block that provides the maximum light level of 15, making it an excellent light source for builds. It is obtained when a temperate (green) frog eats a tiny magma cube in the Nether. The block is exceptionally fragile with only 0.3 hardness and blast resistance, breaking instantly with any tool or by hand. Froglights come in three variants depending on the frog type: pearlescent (cold frog), ochre (warm frog), and verdant (temperate frog). Unlike many light sources, froglights are renewable through frog farming and magma cube spawning."
    },
    "minecraft:ochre_froglight": {
        id: "minecraft:ochre_froglight",
        name: "Ochre Froglight",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 15,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Ochre Froglight"],
        generation: {
            dimension: "Nether",
            yRange: "Frog interaction (magma cube consumption)"
        },
        description: "Ochre Froglight is a vibrant yellow-orange light-emitting block that provides the maximum light level of 15. It is obtained when a temperate (orange) frog eats a tiny magma cube in the Nether. Like other froglights, it is fragile with 0.3 hardness and blast resistance, breaking instantly with any tool or by hand. It drops itself without Silk Touch."
    }
};
