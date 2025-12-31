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
    },
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        hardness: 10.0,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Heavy Core"],
        generation: {
            dimension: "Overworld",
            yRange: "Ominous Vaults in Trial Chambers"
        },
        description: "The Heavy Core is a unique crafting component introduced in Minecraft 1.21 that can only be obtained by unlocking Ominous Vaults with Ominous Trial Keys in Trial Chambers. This mysterious, dense block serves as a key ingredient for crafting the Mace when combined with a Breeze Rod. The Heavy Core represents one of the most challenging rewards to obtain in the game, requiring players to defeat enhanced mobs spawned during ominous events. Its distinctive appearance and limited availability make it a prized possession for players seeking to craft the powerful Mace weapon."
    },
    "minecraft:creaking_heart": {
        id: "minecraft:creaking_heart",
        name: "Creaking Heart",
        hardness: 10,
        blastResistance: 10,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 7,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Resin Clump (1-3)"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "The Creaking Heart is a unique passive mob spawner introduced in Minecraft Bedrock Edition 1.21.50, found exclusively in Pale Garden biomes. This ethereal, pulsing block is the source of the Creaking mob, a hostile block-like creature that activates when it detects a player within its line of sight. The Creaking Heart must be placed between two vertically aligned Pale Oak Logs to function properly and spawn Creakings. When in low-light conditions, the heart pulses with a glowing orange color and summons Creakings to defend its position. This block adds a new layer of atmospheric horror to Minecraft, encouraging players to approach Pale Garden structures with caution and awareness of sightlines."
    },
    "minecraft:resin_block": {
        id: "minecraft:resin_block",
        name: "Block of Resin",
        hardness: 2.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Block of Resin"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Block of Resin is a vibrant, solid orange block introduced in Minecraft Bedrock Edition 1.21.50, crafted by combining nine resin clumps in a 3x3 grid. Resin clumps are a unique resource obtained from the Creaking Heart when it is attacked or when a Creaking mob is struck while linked to its heart. This block can be used for decoration or further crafted into resin bricks for a more refined architectural look. Significantly, the Block of Resin is a critical component in the creation of a Creaking Heart, which is crafted using two resin blocks and two Pale Oak Logs, allowing players to spawn and control the mysterious Creaking mob in their own builds."
    },
    "minecraft:copper_bars": {
        id: "minecraft:copper_bars",
        name: "Copper Bars",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Copper Bars"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Copper Bars are a decorative fencing block introduced in Minecraft Bedrock Edition 1.21.110 as part of The Copper Age update. Functionally identical to iron bars, copper bars form transparent barriers that players and mobs can pass through, making them ideal for windows, cages, and architectural details. Copper bars possess a hardness of 5.0 and blast resistance of 6.0, requiring at least a wooden pickaxe to mine efficiently. Like other copper blocks, copper bars undergo oxidation over time, progressing through four distinct stages: unoxidized, exposed, weathered, and oxidized. The oxidation process gradually transforms the bars from bright orange-copper to teal-green, allowing for creative aging effects in builds. Players can wax copper bars with honeycomb to preserve their current oxidation state indefinitely. Lightning strikes and axes can scrape away oxidation, allowing players to revert bars to earlier stages. Copper bars can connect to solid blocks and other bars, creating complex window patterns, jail cell designs, or decorative screens while providing the aesthetic appeal of copper's natural aging process."
    }
};
