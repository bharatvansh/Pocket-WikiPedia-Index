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
        description: "Copper Lantern is a light-emitting block introduced in Minecraft Bedrock Edition 1.21.111 as part of The Copper Age update. This distinctive lantern emits a warm green light with a luminance of 15, making it both functional and decorative. Crafted from copper nuggets and a copper torch, copper lanterns share the same physical properties as regular lanterns with a hardness of 3.5 and blast resistance of 3.5. Like other copper blocks, copper lanterns undergo oxidation over time, progressing through four stages: unoxidized, exposed, weathered, and oxidized. Each oxidation stage changes the lantern's appearance from bright orange-copper to teal-green, while maintaining its light output. Players can wax copper lanterns with honeycomb to preserve their current oxidation state. The unique green-tinted lighting makes copper lanterns ideal for themed builds, atmospheric decorations, or adding variety to lighting schemes."
    }
};
