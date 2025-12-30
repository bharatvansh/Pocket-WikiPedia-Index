// Pocket Wikipedia Foundation - Interactive Blocks Data
// ============================================
// This file contains: Doors (all types), trapdoors (all types),
// fence gates (all types), beds (all 16 colors), signs (all types),
// hanging signs (all types), banners (all 16 colors), bells,
// campfire, soul campfire, lantern, soul lantern, torch, soul torch,
// candles (all 17 colors including undyed), cake, flower pot
// ============================================

/**
 * Interactive blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const interactiveBlocks = {
    "minecraft:trial_spawner": {
        id: "minecraft:trial_spawner",
        name: "Trial Spawner",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "-40 to -20"
        },
        description: "A trial spawner is a special spawner block found exclusively within Trial Chambers in Minecraft 1.21+. Unlike regular monster spawners, trial spawners activate when a player enters a 14-block radius and spawn mobs based on the number of nearby players. All spawned mobs must be defeated before the trial spawner ejects loot and a trial key. Ominous variants appear during ominous events and spawn stronger, armored mobs. As a permanent structure block, it cannot be obtained by players."
    },
    "minecraft:vault": {
        id: "minecraft:vault",
        name: "Vault",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 6,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "-40 to -20"
        },
        description: "A vault is a unique reward container block introduced in Minecraft 1.21, found within Trial Chambers. When unlocked using a trial key obtained from defeating all mobs spawned by a nearby trial spawner, the vault ejects 3-6 items including valuable loot like armor trims, banner patterns, enchanted books, and the heavy core. Vaults emit light when active or ejecting items, and cannot be accelerated by any tool. As a permanent structure block, it cannot be obtained by players."
    },
    "minecraft:crafter": {
        id: "minecraft:crafter",
        name: "Crafter",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Crafter"],
        generation: null,
        description: "The crafter is a revolutionary redstone block introduced in Minecraft 1.21 that enables automatic crafting in vanilla Minecraft for the first time. It features a 3x3 crafting grid that can be filled using hoppers or other droppers. When powered by a redstone signal, the crafter attempts to craft the recipe based on the ingredients in its grid and outputs the result. Comparators can detect when crafting is complete. This block is essential for automated farms, iron golem farms, and any redstone build requiring self-sustaining crafting operations."
    },
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        hardness: 10,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Heavy Core"],
        generation: null,
        description: "The heavy core is a rare decorative and crafting block introduced in Minecraft 1.21, obtainable exclusively from ominous vaults within Trial Chambers. It has an approximately 7.5% chance to drop from ominous vaults when opened with an ominous trial key. The heavy core's primary use is crafting the mace, a powerful new weapon created by combining it with a breeze rod. The block is waterloggable and transparent, making it suitable for unique decorative builds. In Bedrock Edition, the heavy core strictly requires a pickaxe to drop as an item and cannot be obtained by hand. As a rare reward block, it serves as a prestigious milestone for players exploring the dangerous depths of Trial Chambers."
    }
};
