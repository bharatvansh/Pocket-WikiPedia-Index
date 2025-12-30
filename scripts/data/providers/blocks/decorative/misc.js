// Pocket Wikipedia Foundation - Miscellaneous Decorative Blocks Data
// ============================================
// This file contains: Amethyst block, budding amethyst, amethyst clusters,
// carpets (all 16 colors), wool (all 16 colors), mob heads (all types),
// dragon egg, sponge, wet sponge, hay bale, target, honey block,
// slime block, dried kelp block, bone block, prismarine variants,
// purpur block, purpur pillar, crying obsidian, reinforced deepslate,
// fences (all types), iron bars, chain
// ============================================

/**
 * Miscellaneous decorative blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const miscDecorativeBlocks = {
    "minecraft:amethyst_block": {
        id: "minecraft:amethyst_block",
        name: "Amethyst Block",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Amethyst Block"],
        generation: {
            dimension: "Overworld",
            yRange: "0-64"
        },
        description: "Amethyst Block is a decorative purple block found in amethyst geodes. It can be crafted from four amethyst shards and has a distinctive crystalline appearance. Amethyst blocks are purely decorative and make a unique musical sound when walked on or broken."
    },
    "minecraft:prismarine": {
        id: "minecraft:prismarine",
        name: "Prismarine",
        hardness: 1.5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Prismarine"],
        generation: {
            dimension: "Overworld (Ocean Monuments)",
            yRange: "Any"
        },
        description: "Prismarine is a decorative block found exclusively in ocean monuments and underwater ruins. It comes in three variants: prismarine, prismarine bricks, and dark prismarine. Prismarine is obtained by mining it with any pickaxe, and can be crafted from prismarine shards obtained from sea lanterns. Its distinctive teal color makes it popular for underwater builds."
    },
    "minecraft:obsidian": {
        id: "minecraft:obsidian",
        name: "Obsidian",
        hardness: 50.0,
        blastResistance: 1200.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Obsidian"],
        generation: {
            dimension: "Overworld",
            yRange: "Any"
        },
        description: "Obsidian is one of the hardest blocks in Minecraft, formed when water flows over a lava source block. It requires a diamond or netherite pickaxe to mine, taking about 9.4 seconds with a diamond pickaxe. Obsidian is essential for building Nether portals and is practically immune to explosions, making it ideal for blast-resistant structures."
    }
};
