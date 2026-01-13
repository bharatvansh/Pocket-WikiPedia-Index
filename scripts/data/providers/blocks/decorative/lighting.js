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
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Lantern"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Bastion Remnants"
        },
        description: "A Lantern is a metallic light source that emits a bright light level of 15, exceeding that of torches. It can be placed on top of blocks or hung from the underside of solid blocks. Lanterns generate naturally in snowy tundra villages and bastion remnants. Crafted from eight iron nuggets surrounding a torch, they are more durable than torches and possess a valid collision box. They are widely used in builds for their aesthetic appeal and ability to hang from ceilings or chains."
    },
    "minecraft:soul_lantern": {
        id: "minecraft:soul_lantern",
        name: "Soul Lantern",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 10,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Soul Lantern"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "The Soul Lantern is a variant of the regular lantern that emits a dim, turquoise light with a luminance level of 10. Crafted using a soul torch and eight iron nuggets, it possesses a distinct blue flame characteristic of soul fire. Unlike regular lanterns (level 15), soul lanterns do not melt ice or snow. They repel piglins, making them functional for safe travel in the Nether. Soul lanterns can be placed on blocks or hung from ceilings and chains, adding a spooky or mystical aesthetic to builds."
    },
    "minecraft:soul_torch": {
        id: "minecraft:soul_torch",
        name: "Soul Torch",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 10,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Soul Torch"],
        generation: {
            dimension: "Nether, Overworld",
            yRange: "Crafted only, Ancient Cities (Bedrock)"
        },
        description: "The Soul Torch is a variant of the standard torch that emits a calming blue light with a luminance level of 10. Crafted using soul soil or soul sand and a coal or charcoal, it produces the distinctive blue flames associated with soul fire. Soul torches burn longer than regular torches and do not melt ice or snow, making them practical for cold biomes. They repel piglins in the Nether and can be placed on walls or the ground. In Bedrock Edition, soul torches generate naturally in ancient cities, providing ambient blue lighting throughout the Deep Dark."
    },
    "minecraft:torch": {
        id: "minecraft:torch",
        name: "Torch",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 14,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Torch"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Villages, Mineshafts, Ancient Cities"
        },
        description: "A Torch is a non-solid block that emits a light level of 14. It is one of the most common light sources in the game, essential for preventing hostile mob spawning and illuminating caves and structures. Crafted from a stick and coal or charcoal, torches can be placed on the top or sides of most solid blocks. They break if the block they are attached to is removed or if water flows into them. Torches are also used in crafting lanterns and jack o'lanterns."
    }
};
