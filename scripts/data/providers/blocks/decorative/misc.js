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
    "minecraft:pink_petals": {
        id: "minecraft:pink_petals",
        name: "Pink Petals",
        hardness: 0,
        blastResistance: 0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pink Petals"],
        generation: {
            dimension: "Overworld",
            yRange: "Cherry Grove biome"
        },
        description: "Pink Petals are decorative blocks found in Cherry Grove biomes. Introduced in version 1.20, they grow in clusters of up to four on a single block, creating a layered floral carpet. They can be placed on dirt, grass, moss, and mud. These petals are renewable; using bone meal increases their density or spreads them to nearby grass. They attract and pollinate bees and can be crafted directly into Pink Dye. Their unique stacking ability and soft aesthetic make them ideal for detailed landscaping, garden paths, and adding floral accents to builds."
    },
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
    "minecraft:budding_amethyst": {
        id: "minecraft:budding_amethyst",
        name: "Budding Amethyst",
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
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes (Y -58 to 30)"
        },
        description: "Budding Amethyst is a rare block found in amethyst geodes that periodically grows amethyst buds and clusters on its sides. It is unobtainable in Survival mode, dropping nothing even if broken with Silk Touch. This ensures geodes remain valuable, permanent sites for farming amethyst shards. In Bedrock Edition, buds can grow into flowing water. Since it is the only block capable of producing amethyst clusters, players generally build dedicated farms around these blocks rather than attempting to relocate or use them for building."
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
    "minecraft:reinforced_deepslate": {
        id: "minecraft:reinforced_deepslate",
        name: "Reinforced Deepslate",
        hardness: 55,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities (Deep Dark)"
        },
        description: "Reinforced Deepslate is an extremely durable, blast-resistant block that generates as a frame-like structure in the center of each ancient city. It has a hardness of 55 and a blast resistance of 1200, and it drops nothing when broken, making it unobtainable in Survival mode even with Silk Touch. In Bedrock Edition, reinforced deepslate has no tool associated with it, so it breaks at the same speed regardless of what you use, and it cannot be moved by pistons. Builders mainly use it in Creative for its dark, industrial look and for recreating ancient city or portal-frame themed builds."
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
        description: "The Creaking Heart is a block found in Pale Garden biomes that spawns the Creaking, a hostile entity that only moves when not being watched. For the heart to activate, it must be placed between two vertically aligned Pale Oak Logs. During the night or in low-light, it pulses orange and summons Creakings to defend its location. Crucially, the Creaking cannot be damaged directly; players must locate and destroy the pulsing Heart to defeat it. This adds a strategic, sight-based challenge to exploring the Pale Garden."
    },
    "minecraft:resin_block": {
        id: "minecraft:resin_block",
        name: "Block of Resin",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Block of Resin"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Block of Resin is a vibrant orange block crafted from nine resin clumps. Clumps are dropped by a Creaking Heart when it or its linked Creaking mob is attacked. Beyond decoration, the block can be refined into resin bricks or used as a key ingredient in crafting a Creaking Heart (combined with two Pale Oak Logs). This allows players to manually spawn and control the mysterious Creaking mob. Introduced in Minecraft 1.21.50, it is a central resource for players exploring the Pale Garden's unique mechanics."
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
        description: "Copper bars are decorative fencing blocks with a hardness of 5.0 and blast resistance of 6.0, harvested with a wooden pickaxe. Like iron bars, they connect to adjacent blocks to form barriers. They feature four stages of oxidation (unoxidized, exposed, weathered, and oxidized), shifting from orange to teal. Players can use honeycomb to wax bars and lock their appearance or use axes and lightning to scrape away oxidation layers. They connect to solid blocks and other bars, providing a dynamic, aging aesthetic for windows, cages, and intricate structural designs."
    }
};
