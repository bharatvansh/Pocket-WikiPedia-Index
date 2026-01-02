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
    "minecraft:prismarine_crystals": {
        id: "minecraft:prismarine_crystals",
        name: "Prismarine Crystals",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sea Lanterns for underwater lighting",
            secondaryUse: "Ingredient for brewing mundane potions"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Guardians and Elder Guardians"]
        },
        specialNotes: [
            "Guardians drop 0-3 crystals; Elder Guardians drop 0-4 crystals (increased by Looting)",
            "Used to craft Sea Lanterns (4 crystals + 4 Prismarine Shards)",
            "Can be brewed into mundane potions in a brewing stand",
            "Renewable via Guardian farming in Ocean Monuments",
            "Sea Lanterns provide light level 15 underwater"
        ],
        description: "Prismarine Crystals are luminous teal items dropped by Guardians and Elder Guardians in Ocean Monuments. These crystals serve as a critical component for crafting Sea Lanterns, which provide powerful light level 15 illumination for underwater exploration. A single Sea Lantern requires four crystals combined with four Prismarine Shards. While they have minor utility in potion brewing to create mundane potions, their primary value lies in their role as an essential renewable resource for permanent underwater lighting and construction projects."
    }
};
