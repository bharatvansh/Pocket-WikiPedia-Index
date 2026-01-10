// Pocket Wikipedia Foundation - Gems Data
// ============================================
// This file contains: Diamond, emerald, amethyst shard, lapis lazuli,
// quartz, prismarine shard, prismarine crystals, echo shard
// ============================================

/**
 * Gem items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const gems = {
    "minecraft:lapis_lazuli": {
        id: "minecraft:lapis_lazuli",
        name: "Lapis Lazuli",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Enchanting items at an Enchanting Table",
            secondaryUse: "Crafting Block of Lapis Lazuli and blue dye"
        },
        crafting: {
            recipeType: "Mining or Uncrafting",
            ingredients: ["Mined from Lapis Lazuli Ore", "Uncrafted from Block of Lapis Lazuli"]
        },
        specialNotes: [
            "Found in Lapis Lazuli Ore at Y levels -64 to 64 in Bedrock",
            "1-3 pieces required for enchanting (slot 1 costs 1, slot 2 costs 2, slot 3 costs 3)",
            "Can craft Block of Lapis Lazuli (9 pieces) or use directly as blue dye",
            "Witches drop 0-2 lapis upon death (increased by Looting)",
            "Apprentice-level cleric villagers sell 1 lapis for 1 emerald",
            "Used in banner patterns for the 'Thing' design in Bedrock Edition"
        ],
        description: "Lapis Lazuli is a blue mineral essential for the enchanting process in Minecraft. When using an Enchanting Table, players must sacrifice 1-3 pieces of lapis to enchant their gear, with higher-tier enchantments requiring more material. Beyond enchanting, lapis serves as a blue dye for coloring items like wool and banners. It can be mined from Lapis Lazuli Ore found throughout underground layers or obtained from witches and cleric villagers. In Bedrock Edition, lapis lazuli can function directly as a substitute for crafted blue dye."
    },
    "minecraft:prismarine_crystals": {
        id: "minecraft:prismarine_crystals",
        name: "Prismarine Crystals",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sea Lanterns",
            secondaryUse: "None"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Guardians and Elder Guardians"]
        },
        specialNotes: [
            "Dropped by Guardians and Elder Guardians upon death (0-1; increased by Looting)",
            "Renewable via Guardian farming in Ocean Monuments",
            "Used with Prismarine Shards to craft Sea Lanterns",
            "Provides high light level when crafted into Sea Lanterns",
            "Unlike shards, crystals have a glowing, multifaceted appearance"
        ],
        description: "Prismarine Crystals are luminous materials obtained by defeating Guardians or Elder Guardians in Ocean Monuments. Unlike prismarine shards, which are more common, crystals are specifically required for crafting Sea Lanterns, one of the most effective and aesthetically pleasing underwater light sources. Their crystalline appearance and association with the deep ocean make them a valuable resource for underwater construction and lighting projects."
    },
    "minecraft:prismarine_shard": {
        id: "minecraft:prismarine_shard",
        name: "Prismarine Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Prismarine blocks, Dark Prismarine, and Sea Lanterns",
            secondaryUse: "Underwater building and decoration projects"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Dropped by Guardians and Elder Guardians", "Used in multiple shaped recipes for prismarine variants and Sea Lanterns"]
        },
        specialNotes: [
            "Dropped by Guardians/Elder Guardians (0-2; increased by Looting)",
            "Crafts Prismarine (4 shards), Dark Prismarine (8 shards + black dye)",
            "Crafts Sea Lanterns (4 shards + 1 Prismarine Crystal)",
            "Renewable via Guardian farming in Ocean Monuments",
            "Essential for underwater-themed building and lighting"
        ],
        description: "Prismarine Shards are teal crystalline fragments dropped by Guardians and Elder Guardians in Ocean Monuments. As a renewable resource, they are primarily used to craft the prismarine family of blocks: four shards create a standard Prismarine block, while eight shards combined with black dye produce Dark Prismarine. They are also used alongside Prismarine Crystals to craft Sea Lanterns. Their unique aesthetic makes them essential for underwater construction and marine-themed decorative projects."
    },
    "minecraft:echo_shard": {
        id: "minecraft:echo_shard",
        name: "Echo Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Recovery Compasses",
            secondaryUse: "Rare loot collection from Ancient Cities"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City loot chests"]
        },
        specialNotes: [
            "Found exclusively in the Deep Dark biome within Ancient Cities",
            "Ancient City chests have a roughly 29.8% chance to contain 1-3 echo shards",
            "Used to craft a Recovery Compass by surrounding a compass with 8 echo shards",
            "Has a dark, pulsating appearance that matches sculk-themed blocks",
            "In Bedrock Edition, they were changed from Common to Uncommon rarity in 1.21.30"
        ],
        description: "Echo Shards are rare items found exclusively in Ancient City loot chests within the Deep Dark. These dark, shimmering shards are the primary component needed to craft a Recovery Compass. By surrounding a standard compass with eight shards, players create a tool that points to the location of their last death, aiding in item retrieval. Because they only spawn in dangerous, Warden-guarded structures, they are considered a valuable late-game resource."
    },
    "minecraft:diamond": {
        id: "minecraft:diamond",
        name: "Diamond",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting high-tier armor, tools, and weapons",
            secondaryUse: "Crafting Enchantment Tables, Jukeboxes, and Blocks of Diamond"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Diamond Ore or Deepslate Diamond Ore", "Fuel"]
        },
        specialNotes: [
            "Found in veins at Y levels 16 to -64; most abundant at Y=-58",
            "Can be mined with an Iron, Diamond, or Netherite pickaxe",
            "Used to upgrade to Netherite gear via Smithing Templates",
            "Villagers (Toolsmith, Weaponsmith, Armorer) buy diamonds for emeralds",
            "Can be found in chests in Fortresses, End Cities, and Bastions"
        ],
        description: "Diamonds are one of the most iconic and valuable materials in Minecraft, serving as a critical milestone in player progression. Primarily obtained by mining Diamond Ore deep underground, they are used to craft durable and efficient tools, weapons, and armor. Beyond equipment, diamonds are essential for creating Enchantment Tables and Jukeboxes. They also act as a prerequisite for reaching the highest tier of gear, as diamond items must be combined with Netherite Ingots to create netherite equipment."
    },
    "minecraft:emerald": {
        id: "minecraft:emerald",
        name: "Emerald",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Trading with villagers and selecting effects in Beacons",
            secondaryUse: "Crafting Emerald Blocks for decoration and storage"
        },
        crafting: {
            recipeType: "Mining ore, uncrafting from Block of Emerald, or Smelting",
            ingredients: ["Mined from Emerald Ore or Deepslate Emerald Ore", "Uncrafted from Block of Emerald (9 = 1 block)", "Smelted from Emerald Ore with fuel"]
        },
        specialNotes: [
            "Found in mountainous biomes (Windswept Hills, Windswept Gravelly Hills, etc.) at Y levels -16 to 320 in Bedrock",
            "Primary currency for villager trading; villagers will trade items for emeralds and vice versa",
            "Can be found in shipwreck chests (but not buried treasure chests in Bedrock Edition)",
            "9 emeralds craft into 1 Block of Emerald for compact storage",
            "Used as payment to select Beacon effects when Beacon is activated with mineral blocks",
            "Obtainable from mining emerald ore, chest loot, or raid rewards",
            "Renewable through raid rewards and villager farming"
        ],
        description: "Emeralds are rare green gemstones that serve as Minecraft's primary currency for villager trading. Found primarily in mountainous biomes at various elevations, they can be mined from emerald ore or obtained from chest loot. Their most valuable function is facilitating the villager trading system, where players can exchange emeralds for valuable goods like enchanted books, diamond gear, and food. Beyond trading, emeralds are used to craft Emerald Blocks for decoration and can be crafted into Emerald Blocks to build the pyramid structure for Beacons."
    },
    "minecraft:quartz": {
        id: "minecraft:quartz",
        name: "Nether Quartz",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting redstone components and quartz blocks",
            secondaryUse: "Trading with villagers and crafting decorative blocks"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Nether Quartz Ore", "Fuel"]
        },
        specialNotes: [
            "Obtained by mining Nether Quartz Ore in the Nether or via Piglin bartering",
            "Yields 1 unit of quartz when mined with any pickaxe (more with Fortune)",
            "Essential for crafting Daylight Detectors and Redstone Comparators",
            "Piglins may barter 5-12 Nether Quartz when given a gold ingot",
            "Used to craft Blocks of Quartz (4 items) and decorative quartz variants",
            "Provides significant experience when mined from ore"
        ],
        description: "Nether Quartz is a white crystalline material found exclusively in the Nether. It is primarily obtained by mining Nether Quartz Ore, which is abundant throughout the dimension, or through bartering with Piglins. Quartz is an essential material for advanced redstone circuitry, being a key ingredient in Daylight Detectors and Redstone Comparators. Additionally, it can be crafted into smooth white building blocks and various decorative variants like pillars and chiseled blocks. Due to the high experience yield from mining its ore, it is also a popular resource for players looking to level up quickly."
    }
};
