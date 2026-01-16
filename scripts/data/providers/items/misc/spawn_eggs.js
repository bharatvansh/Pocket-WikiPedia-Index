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
            "Normally only available in Creative Mode or via commands.",
            "Allays spawned from eggs never hold items by default.",
            "Changes a Spawner's type to Allay when used on it."
        ],
        description: "The Allay Spawn Egg summons an Allay instantly at the targeted location, making it easy to place helpful flying companions in Creative builds. This item is primarily available through Creative Mode or commands. Like other spawn eggs, it can be used on a Monster Spawner to change the mob it produces. Allays spawned from this egg do not start with items in hand."
    },
    "minecraft:axolotl_spawn_egg": {
        id: "minecraft:axolotl_spawn_egg",
        name: "Axolotl Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Axolotl mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Axolotl colors are randomized when spawned.",
            "Can spawn a baby axolotl on occasion."
        ],
        description: "The Axolotl Spawn Egg allows players to place an axolotl instantly, ideal for testing aquatic habitats and adventure scenarios. Axolotl variants are randomized when spawned, and the egg can sometimes create a baby. It is Creative/Commands-only and can also be used on a Monster Spawner to convert it into an axolotl spawner."
    },
    "minecraft:camel_spawn_egg": {
        id: "minecraft:camel_spawn_egg",
        name: "Camel Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Camel mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Camels spawn unsaddled when created by the egg.",
            "Can spawn a baby camel on occasion."
        ],
        description: "The Camel Spawn Egg creates a camel at the targeted location, which is useful for populating deserts or testing mounts in Creative Mode. Camels spawned this way are unsaddled and can occasionally be babies. Like other spawn eggs, it is obtained through Creative/Commands and can change a Monster Spawner to produce camels."
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
            "Normally only available in Creative Mode or via commands.",
            "Sniffers can spawn as snifflets on occasion.",
            "Changes a Spawner's type to Sniffer when used on it."
        ],
        description: "The Sniffer Spawn Egg summons a sniffer instantly, making it easy to place this ancient mob for map making or testing. Sniffers spawned this way can occasionally be snifflets. This egg is Creative/Commands-only and can also be applied to a Monster Spawner to set it to produce sniffers."
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
            "Normally only available in Creative Mode or via commands.",
            "Spawns a Warden immediately at the target location.",
            "Changes a Spawner's type to Warden when used on it."
        ],
        description: "The Warden Spawn Egg creates a Warden instantly for testing encounters or building Deep Dark scenarios in Creative Mode. It is available through Creative or commands and places the Warden exactly where the egg is used. As with other spawn eggs, applying it to a Monster Spawner will convert that spawner to generate Wardens."
    }
};
