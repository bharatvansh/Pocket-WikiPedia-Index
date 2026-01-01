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
        description: "Echo Shards are rare, mysterious items found exclusively within the loot chests of Ancient Cities in the Deep Dark biome. These shards possess a dark, shimmering quality that seems to resonate with the sculk found throughout the underground structures. Their primary and most valuable use is as the central component for crafting a Recovery Compass; by surrounding a standard compass with eight echo shards, players can create a specialized tool that points to the location of their last death. This makes echo shards a highly sought-after resource for players who frequently explore dangerous areas, providing a way to easily retrieve lost items after an unfortunate demise. Due to their limited availability and the extreme danger of the Ancient Cities, guarded by the Warden, obtaining echo shards is considered a significant late-game achievement."
    }
};
