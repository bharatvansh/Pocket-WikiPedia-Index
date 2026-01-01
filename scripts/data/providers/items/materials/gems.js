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
            primaryUse: "Crafting Recovery Compasses to find death locations",
            secondaryUse: "Rare material exclusive to Deep Dark exploration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found exclusively in Ancient City chests"]
        },
        specialNotes: [
            "Found only in chests within Ancient Cities in the Deep Dark biome",
            "Each chest has a 29.8% chance to contain 1-3 Echo Shards",
            "Required to craft a Recovery Compass (1 Echo Shard + 8 Compasses)",
            "The Recovery Compass points to the player's last death location",
            "Ancient Cities are the only source of Echo Shells",
            "One of the rarest materials in the game due to limited spawn locations",
            "Echo Shards have a distinctive dark blue crystalline appearance",
            "Recovery Compasses are invaluable for retrieving items after death",
            "The Deep Dark biome is challenging to navigate due to Sculk Sensors and Wardens"
        ],
        description: "The Echo Shard is a rare and valuable gem material introduced in Minecraft 1.19 (The Wild Update), found exclusively in Ancient Cities within the dangerous Deep Dark biome. These dark blue crystalline shards are essential for crafting Recovery Compasses, special navigation tools that point toward the player's last death location, making them invaluable for retrieving items lost during fatal accidents. Echo Shards have a 29.8% chance to appear in chests throughout Ancient Cities, typically dropping in quantities of 1-3 shards per chest. The extreme rarity and dangerous location of Echo Shards, combined with the formidable Warden guardian that patrols Ancient Cities, make them one of the most challenging materials to acquire. Once obtained, eight Compasses combined with a single Echo Shard create a Recovery Compass, providing players with peace of mind during dangerous exploration by ensuring they can locate their death point even in deep caves, ocean monuments, or the Nether and End dimensions."
    }
};
