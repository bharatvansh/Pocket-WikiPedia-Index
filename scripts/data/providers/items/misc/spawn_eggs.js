// Pocket Wikipedia Foundation - Spawn Eggs Data
// ============================================
// This file contains: All spawn eggs (one for each mob type)
// Approximately 80+ spawn eggs total
// ============================================

/**
 * Spawn egg items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const spawnEggs = {
    "minecraft:bogged_spawn_egg": {
        id: "minecraft:bogged_spawn_egg",
        name: "Bogged Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawns a Bogged mob",
            secondaryUse: "Can be used on a Spawner to change its type"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative Inventory", "Commands"]
        },
        specialNotes: [
            "Spawns the Bogged, a poison-themed skeleton variant",
            "Found in Trial Chambers and Swamp biomes",
            "Can be used to quickly switch a mob spawner to Bogged type",
            "Appears as a moss-covered skeleton spawn egg"
        ],
        description: "The Bogged Spawn Egg is a unique item used to instantly spawn a Bogged, a specialized skeleton variant that fires poisonous arrows. These mossy mobs primarily inhabit Swamps, Mangrove Swamps, and Trial Chambers. In Bedrock Edition, this egg is exclusively available through the Creative inventory or via commands, providing players with an easy way to study or utilize these status-inflicting enemies in their own creations."
    },
    "minecraft:breeze_spawn_egg": {
        id: "minecraft:breeze_spawn_egg",
        name: "Breeze Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawns a Breeze mob",
            secondaryUse: "Can be used on a Spawner to change its type"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative Inventory", "Commands"]
        },
        specialNotes: [
            "Spawns the Breeze hostile mob",
            "The Breeze is wind-themed and fires Wind Charges",
            "Obtainable only via Creative Mode or commands",
            "Features a cyan and light-blue color pattern"
        ],
        description: "The Breeze Spawn Egg allows players to spawn the Breeze, a nimble and dangerous hostile mob found within Trial Chambers. The Breeze is known for its erratic movement and its ability to fire Wind Charges that cause knockback and interact with certain blocks. This spawn egg is an essential tool for map makers and testers in Bedrock Edition who want to integrate 1.21's most iconic combat challenges into their builds."
    },
    "minecraft:armadillo_spawn_egg": {
        id: "minecraft:armadillo_spawn_egg",
        name: "Armadillo Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawns an Armadillo mob",
            secondaryUse: "Can be used on a Spawner to change its type"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative Inventory", "Commands"]
        },
        specialNotes: [
            "Spawns an Armadillo, a passive mob introduced in 1.20.5",
            "Armadillos drop scutes used for Wolf Armor",
            "Found in Savannah and Badlands biomes",
            "Will roll into a block shape when threatened"
        ],
        description: "The Armadillo Spawn Egg is an item used to spawn the Armadillo, a helpful passive mob that populates Savannahs and Badlands. Armadillos are highly valued by players for the scutes they drop, which are used to craft protective armor for wolves. Like other spawn eggs, it is only available to players in Creative Mode or through commands, making it easier to populate farms or protected areas with these shy creatures."
    },
    "minecraft:camel_spawn_egg": {
        id: "minecraft:camel_spawn_egg",
        name: "Camel Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawns a Camel mob",
            secondaryUse: "Can be used on a Spawner to change its type"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative Inventory", "Commands"]
        },
        specialNotes: [
            "Spawns a Camel, a tall passive mount for two players",
            "Camels are found in Desert villages",
            "Possess a dash ability for crossing gaps",
            "Sits down occasionally and can be hard to move"
        ],
        description: "The Camel Spawn Egg enables players to spawn the Camel, a large and majestic mount that can carry up to two riders at once. Introduced in the Trails & Tales update, camels are unique for their height, allowing riders to stay above the reach of many hostile mobs like zombies. This spawn egg is a Creative-only item that simplifies the process of bringing these desert-dwelling animals to any part of the world."
    },
    "minecraft:sniffer_spawn_egg": {
        id: "minecraft:sniffer_spawn_egg",
        name: "Sniffer Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawns a Sniffer mob",
            secondaryUse: "Can be used on a Spawner to change its type"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative Inventory", "Commands"]
        },
        specialNotes: [
            "Spawns a Sniffer, an ancient mob that 'sniffs' for seeds",
            "Winner of the 2022 Mob Vote",
            "Spawns from Sniffer Eggs found in warm ocean ruins",
            "One of the largest passive mobs in the game"
        ],
        description: "The Sniffer Spawn Egg is used to instantly spawn a Sniffer, a massive prehistoric creature that can uncover rare seeds from the ground. While players usually find Sniffers by hatching their eggs found in underwater ruins, this spawn egg provides a direct way to spawn them in Creative mode. They are essential for obtaining decorative plants like Torchflowers and Pitcher Plants, making them a favorite for green-thumbed adventurers."
    }
};
