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
    "minecraft:sniffer_spawn_egg": {
        id: "minecraft:sniffer_spawn_egg",
        name: "Sniffer Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawning Sniffer mobs in the world",
            secondaryUse: "Breeding Sniffers to create more sniffers"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Creative Mode or Trading with Wandering Traders"]
        },
        specialNotes: [
            "Spawns a Sniffer (7 hearts, passive mob)",
            "Sniffers are ancient mobs that dig up torchflower and pitcher plant seeds",
            "Only spawn egg for the Sniffer - they don't spawn naturally",
            "Breeding two sniffers creates a Sniffer Egg that hatches into a baby sniffer",
            "Sniffers cannot be moved with leads"
        ],
        description: "The Sniffer Spawn Egg is used to spawn Sniffers, ancient passive mobs that were reintroduced in the Wild Update. Sniffers wander around sniffing the ground and occasionally dig to uncover torchflower seeds and pitcher plant seeds, which can be planted to grow these ancient plants. They are the only source of these rare seeds in survival mode. Sniffers have 14 HP (7 hearts) and move slowly. Two adult sniffers can be bred to create a Sniffer Egg that hatches into a baby sniffer after some time."
    },
    "minecraft:armadillo_spawn_egg": {
        id: "minecraft:armadillo_spawn_egg",
        name: "Armadillo Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawning Armadillo mobs in the world",
            secondaryUse: "Breeding Armadillos to obtain more armadillo scutes"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Creative Mode or Trading with Wandering Traders"]
        },
        specialNotes: [
            "Spawns an Armadillo (6 hearts, passive mob)",
            "Found in badlands and savanna biomes",
            "Rolls into a ball when hurt, near undead mobs, or when players sprint nearby",
            "While rolled up, takes 20% damage from most sources",
            "Repels spiders and cave spiders when nearby",
            "Used to brush armadillos to obtain armadillo scutes",
            "Armadillo scutes are used to craft Wolf Armor"
        ],
        description: "The Armadillo Spawn Egg spawns Armadillos, passive mobs found in badlands and savanna biomes. When threatened, armadillos curl into a defensive ball, reducing damage taken by 80%. They also curl up when undead mobs or sprinting players are nearby, providing protection while naturally repelling spiders. Armadillos are the only source of armadillo scutes, which are essential for crafting Wolf Armor. Players can brush a rolled-up armadillo with a Brush to obtain scutes. They have 12 HP (6 hearts) and can be bred using spider eyes."
    },
    "minecraft:bogged_spawn_egg": {
        id: "minecraft:bogged_spawn_egg",
        name: "Bogged Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawning Bogged mobs in the world",
            secondaryUse: "Creating poison arrow traps and combat encounters"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Creative Mode or Trading with Wandering Traders"]
        },
        specialNotes: [
            "Spawns a Bogged (8 hearts, hostile mob)",
            "Found in swamps and mangrove swamps",
            "Mushroom-covered skeleton variant that shoots Arrows of Poison (8s duration)",
            "Slower bow attack speed than regular skeletons (1.5s vs 1.0s)",
            "Has less health than regular skeletons (16 HP vs 20 HP)",
            "Takes damage from powder snow and cannot convert to strays",
            "Drops bones, arrows, and rare poisoned arrows when killed"
        ],
        description: "The Bogged Spawn Egg spawns Bogged, hostile skeleton variants found in swamps and mangrove swamps. Covered in red and brown mushrooms, they resemble regular skeletons but have distinct behaviors. They attack with Arrows of Poison, inflicting the Poison status effect for 8 seconds. Bogged have 16 HP (8 hearts), slightly less than regular skeletons, and attack more slowly with their bows. Unlike skeletons, they cannot convert to strays when exposed to powder snow. They drop standard skeleton loot including bones and arrows, with a chance to drop the distinctive poisoned arrows they fire."
    }
};
