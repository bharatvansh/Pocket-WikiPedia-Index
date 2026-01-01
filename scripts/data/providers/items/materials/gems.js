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
            "Guardians always drop 0-2 Prismarine Shards on death (more with Looting in Bedrock)",
            "Elder Guardians also drop 0-2 shards on death",
            "Crafting Prismarine: 4 shards in a 2x2 square",
            "Crafting Dark Prismarine: 8 shards in a 3x3 with center black dye",
            "Crafting Sea Lanterns: 4 shards surrounding 1 Prismarine Crystal",
            "Renewable resource since Guardians spawn infinitely in Ocean Monuments",
            "Has a teal/cyan color matching the underwater aesthetic",
            "Essential for underwater building projects and monument decoration"
        ],
        description: "Prismarine Shards are teal crystalline fragments dropped by Guardians and Elder Guardians that spawn in Ocean Monuments. These shards serve as a fundamental building material for the prismarine family of blocks, which are prized for their distinctive underwater aesthetic and structural properties. Players can craft standard Prismarine blocks by arranging four shards in a 2x2 pattern, create Dark Prismarine by combining eight shards with a black dye, or produce the illuminating Sea Lantern by surrounding a Prismarine Crystal with four shards. Since Guardians and Elder Guardians spawn continuously within Ocean Monuments, Prismarine Shards are a renewable resource, allowing players to gather them in large quantities for extensive underwater construction projects. The shards' natural teal coloration makes them particularly valuable for building ocean-themed structures, underwater bases, and decorative features that complement the marine environment. Obtaining these shards requires confronting the dangerous Guardian mobs, adding an element of challenge to acquiring this versatile building material."
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
        description: "Echo Shards are rare, mysterious items found exclusively within the loot chests of Ancient Cities in the Deep Dark biome. These shards possess a dark, shimmering quality that seems to resonate with the sculk found throughout the underground structures. Their primary and most valuable use is as the central component for crafting a Recovery Compass; by surrounding a standard compass with eight echo shards, players can create a specialized tool that points to the location of their last death. This makes echo shards a highly sought-after resource for players who frequently explore dangerous areas, providing a way to easily retrieve lost items after an unfortunate demise. Due to their limited availability and the extreme danger of the Ancient Cities, guarded by the Warden, obtaining echo shards is considered a significant late-game achievement."
    }
};
