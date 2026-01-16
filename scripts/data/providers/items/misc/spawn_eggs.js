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
    "minecraft:creeper_spawn_egg": {
        id: "minecraft:creeper_spawn_egg",
        name: "Creeper Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Creeper mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Creeper when used on it.",
            "Spawns the mob at the exact location clicked."
        ],
        description: "The Creeper Spawn Egg is a specialized item available primarily in Creative Mode. When used on a block, it immediately summons a Creeper at that location. This item is essential for map makers and players in Creative who need to populate areas with specific mobs without relying on natural spawning. In Survival, it can only be obtained through cheats or Commands. If used on a pre-existing Monster Spawner, it will permanently change that spawner to produce Creepers, providing a way to customize mob farms."
    },
    "minecraft:zombie_spawn_egg": {
        id: "minecraft:zombie_spawn_egg",
        name: "Zombie Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Zombie mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Available to players in Creative Mode.",
            "Can transform a Spawner into a Zombie spawner.",
            "Reliably spawns a standard Zombie at the target point."
        ],
        description: "The Zombie Spawn Egg allows for the instantaneous summoning of a Zombie at any targeted location. Predominantly used in Creative Mode, this item is a staple for testing mechanics or building adventure maps. One of its most strategic uses is applying it to a Monster Spawner, which converts the spawner to produce Zombies indefinitely. Beyond basic summoning, it ensures a consistent way to place undead mobs without waiting for darkness or specific spawn conditions."
    },
    "minecraft:skeleton_spawn_egg": {
        id: "minecraft:skeleton_spawn_egg",
        name: "Skeleton Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Skeleton mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Found in the Creative Mode inventory.",
            "Useful for creating custom Skeleton farms with Spawners.",
            "Can spawn Skeletons in any light level when manually used."
        ],
        description: "The Skeleton Spawn Egg is used to summon a Skeleton instantly. It is especially useful for players in Creative Mode who wish to test combat scenarios or map designers creating themed encounters. By clicking on a block or a Spawner, the player can place a Skeleton exactly where needed. When used on a Monster Spawner, it overrides the spawner's original data, making it a Skeleton spawner. This is a common method for creating high-efficiency bone and arrow farms in custom environments."
    },
    "minecraft:spider_spawn_egg": {
        id: "minecraft:spider_spawn_egg",
        name: "Spider Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Spider mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative-only item for manual mob placement.",
            "Sets Spawners to produce Spiders upon contact.",
            "Does not spawn Cave Spiders (use separate egg)."
        ],
        description: "The Spider Spawn Egg is an item that provides an immediate way to spawn Spiders. It is highly valued in Creative Mode for its ability to quickly populate caves or structures with multi-legged threats. Like all spawn eggs, its secondary function allows it to modify Monster Spawners. When used on a spawner, it ensures that only Spiders will emerge from it. This tool is indispensable for technical players and builders who need to control environmental hazards or mob availability precisely."
    },
    "minecraft:villager_spawn_egg": {
        id: "minecraft:villager_spawn_egg",
        name: "Villager Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Villager mob",
            secondaryUse: "Can be used to spawn baby villagers by clicking an adult"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns villagers with random professions or as nitwits.",
            "Clicking an adult villager with the egg breeds a baby.",
            "Crucial for establishing villager populations in Creative."
        ],
        description: "The Villager Spawn Egg is a unique tool forsummoning Villagers without reproductive mechanics. When used on a surface, it creates a new Villager with a randomized biome outfit and profession (if nearby workstations allow). A unique feature of this egg is that using it on an existing adult Villager will instantly spawn a baby Villager of the same biome type. This allows for rapid population of custom-built villages in Creative Mode. It can also be used on Spawners, though Villager spawners are rarely used in standard play."
    },
    "minecraft:allay_spawn_egg": {
        id: "minecraft:allay_spawn_egg",
        name: "Allay Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Allay mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Manual summoning tool for the helpful blue Allay.",
            "Changes a Spawner's type to Allay when applied.",
            "Can be used to quickly populate areas with item-collecting mobs."
        ],
        description: "The Allay Spawn Egg is a creative-only item that allows for the instantaneous summoning of an Allay. Allays are friendly, flying creatures that search for and collect items that match what they are currently holding. This spawn egg is invaluable for map makers who want to provide players with helpful companions or to test item-gathering systems. Like other spawn eggs, using it on a Monster Spawner will convert that spawner into an Allay spawner, enabling a continuous supply of these blue, fairy-like mobs."
    },
    "minecraft:sniffer_spawn_egg": {
        id: "minecraft:sniffer_spawn_egg",
        name: "Sniffer Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Sniffer mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons the ancient Sniffer mob instantly.",
            "Converts existing Spawners into Sniffer producers.",
            "Useful for setting up ancient seed gathering areas."
        ],
        description: "The Sniffer Spawn Egg is an item used to summon the Sniffer, an ancient mob that was the winner of the 2022 Mob Vote. In Creative Mode, this item provides the only way to manually place Sniffers without waiting for Sniffer Eggs to hatch. Once spawned, these large creatures will begin sniffing the ground to find ancient seeds. Applying this egg to a Monster Spawner will transform it into a Sniffer spawner, allowing for the creation of ancient gardens or technical testing of the Sniffer's digging mechanics."
    },
    "minecraft:breeze_spawn_egg": {
        id: "minecraft:breeze_spawn_egg",
        name: "Breeze Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Breeze mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creates a hostile Breeze mob at the target location.",
            "Changes Spawner data to produce Breeze mobs.",
            "Essential for creating custom Trial Chamber challenges."
        ],
        description: "The Breeze Spawn Egg allows players in Creative Mode to summon the Breeze, a volatile, wind-based hostile mob. The Breeze is known for its erratic movement and wind charge attacks, which can activate mechanisms and knock back players. This item is particularly useful for designers building custom trial chambers or adventure maps featuring wind-themed challenges. By using the egg on a Monster Spawner, players can ensure a steady stream of Breeze mobs, making it easy to test combat scenarios and defensive builds."
    },
    "minecraft:bogged_spawn_egg": {
        id: "minecraft:bogged_spawn_egg",
        name: "Bogged Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Bogged mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons a Bogged skeleton that shoots poison arrows.",
            "Transforms Monster Spawners into Bogged spawners.",
            "Perfect for swamp-themed maps or poison-based mob farms."
        ],
        description: "The Bogged Spawn Egg is used to instantly summon a Bogged, a swamp-themed variant of the Skeleton. Bogged mobs are dangerous due to their use of poison-tipped arrows, making them a significant threat in survival scenarios. This spawn egg is a staple for Creative Mode users who need to populate swampy regions or trial chambers. When used on a Monster Spawner, it overrides the previous mob type, allowing for the creation of specialized poison-arrow farms or custom dungeon encounters where poison is a primary hazard."
    },
    "minecraft:camel_spawn_egg": {
        id: "minecraft:camel_spawn_egg",
        name: "Camel Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Camel mob",
            secondaryUse: "Can be used on an adult camel to spawn a baby"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Manually summons a ridable Camel at the targeted spot.",
            "Clicking an adult camel with the egg produces a baby.",
            "Sets Spawners to generate Camels indefinitely."
        ],
        description: "The Camel Spawn Egg provides an immediate way to summon Camels, the tall desert-dwelling mounts. Known for their ability to carry two players and dash across gaps, Camels are excellent for traversal. Using this egg on a surface summons an adult Camel, while using it on another Camel will spawn a baby version. It can also be applied to a Monster Spawner to create a Camel-generating block. This item is essential for Creative builders looking to populate desert villages or map makers setting up long-distance travel systems."
    },
    "minecraft:warden_spawn_egg": {
        id: "minecraft:warden_spawn_egg",
        name: "Warden Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Warden mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons the powerful, vibration-sensitive Warden mob.",
            "Available only in the Creative Mode inventory or via /give command.",
            "Changes a Monster Spawner to produce Wardens when applied.",
            "Spawns the Warden in any environment, not just Ancient Cities."
        ],
        description: "The Warden Spawn Egg allows for the immediate summoning of the Warden, the formidable guardian of the Deep Dark. As a blind mob that relies on sound and vibration, the Warden is one of the most dangerous entities in the game. This egg is a tool for Creative Mode players and map makers to test their skills or create custom encounters. Like other spawn eggs, it can be used to modify spawners, providing a way to generate Wardens outside of their natural habitat for research or challenge maps."
    }
};
