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
    "minecraft:sea_lantern": {
        id: "minecraft:sea_lantern",
        name: "Sea Lantern",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Prismarine Crystals (2-3)"],
        generation: {
            dimension: "Overworld (Ocean Monuments)",
            yRange: "Any"
        },
        description: "A sea lantern is a fragile light source block that emits light level 15 and can be placed underwater, making it ideal for ocean builds. It generates primarily in ocean monuments and can also appear in some underwater ruins, and it can be crafted from prismarine shards and prismarine crystals. When broken without Silk Touch it drops 2-3 prismarine crystals, and in Bedrock Edition Fortune does not increase this drop."
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
            silkTouch: true
        },
        drops: ["Ochre Froglight"],
        generation: {
            dimension: "Nether",
            yRange: "Frog interaction (warm frog eating magma cube)"
        },
        description: "Ochre Froglight is a warm-toned, amber-orange light-emitting block that produces light level 15, ideal for creating cozy golden glow in builds. This variant is obtained when a warm (orange) frog consumes a tiny magma cube in the Nether. With only 0.3 hardness, it breaks instantly with any tool. The ochre froglight complements verdant and pearlescent variants for varied lighting effects. Like all froglights, it is renewable through breeding frogs and spawning magma cubes."
    },
    "minecraft:pearlescent_froglight": {
        id: "minecraft:pearlescent_froglight",
        name: "Pearlescent Froglight",
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
        drops: ["Pearlescent Froglight"],
        generation: {
            dimension: "Nether",
            yRange: "Frog interaction (cold frog eating magma cube)"
        },
        description: "Pearlescent Froglight is an elegant, soft white and pale purple light-emitting block that emits light level 15, providing cool-toned illumination for serene atmospheres. This rare variant is obtained when a cold (white/tan) frog consumes a tiny magma cube in the Nether. With only 0.3 hardness, it requires careful placement. Pearlescent froglight joins verdant and ochre variants to complete the froglight family."
    },
    "minecraft:lantern": {
        id: "minecraft:lantern",
        name: "Lantern",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Lantern"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages and Bastion Remnants"
        },
        description: "Lanterns are versatile light source blocks that provide a high light level of 15. They can be placed on top of most solid blocks or hung from the bottom of blocks and chains. Crafted from eight iron nuggets and one torch, they are more durable and atmospheric than torches. Lanterns generate naturally in snowy tundra villages and bastions. They are unaffected by water or lava, making them ideal for underwater or high-risk lighting. Their compact and detailed design makes them a favorite for both interior and exterior decoration."
    }
};
