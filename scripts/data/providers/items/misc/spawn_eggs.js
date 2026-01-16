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
    "minecraft:armadillo_spawn_egg": {
        id: "minecraft:armadillo_spawn_egg",
        name: "Armadillo Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Armadillo mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item; not obtainable in Survival.",
            "Using on a Spawner converts it to an Armadillo spawner.",
            "Armadillos curl into a ball when threatened and can be brushed for scutes."
        ],
        description: "The Armadillo Spawn Egg is a Creative/Commands-only item that spawns an armadillo at the clicked location. Armadillos curl up when startled and can be brushed to obtain scutes used for wolf armor, making this egg useful for testing behavior and farms in builds. Like other spawn eggs, it can change a Monster Spawner to produce armadillos."
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
            "Creative/Commands-only item; not obtainable in Survival.",
            "Bogged are swamp-dwelling skeleton variants.",
            "Using on a Spawner converts it to a Bogged spawner."
        ],
        description: "The Bogged Spawn Egg spawns a bogged at the target location, letting creators place this swamp-dwelling skeleton variant on demand. It is primarily a Creative/Commands-only item for testing and map design. Using it on a Monster Spawner converts the spawner to produce bogged mobs."
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
            "Creative/Commands-only item; not obtainable in Survival.",
            "Breezes are hostile mobs from trial chamber spawners.",
            "Using on a Spawner converts it to a Breeze spawner."
        ],
        description: "The Breeze Spawn Egg instantly summons a breeze, the wind-based hostile mob found in trial chambers. It is handy for testing wind charge combat or trial chamber encounters in Creative mode. It can also be used on a Monster Spawner to set it to spawn breezes."
    },
    "minecraft:frog_spawn_egg": {
        id: "minecraft:frog_spawn_egg",
        name: "Frog Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Frog mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item; not obtainable in Survival.",
            "Frog variants depend on the biome where they spawn.",
            "Using on a Spawner converts it to a Frog spawner."
        ],
        description: "The Frog Spawn Egg instantly spawns a frog, making it easy to seed swamps or test frog behaviors. Frog variants depend on the biome where they spawn, and frogs can eat small slimes and magma cubes. The egg can also change a Monster Spawner to produce frogs."
    },
    "minecraft:goat_spawn_egg": {
        id: "minecraft:goat_spawn_egg",
        name: "Goat Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Goat mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item; not obtainable in Survival.",
            "Goats can ram entities and be milked with a bucket.",
            "Using on a Spawner converts it to a Goat spawner."
        ],
        description: "The Goat Spawn Egg spawns a goat instantly, useful for populating mountain builds or testing goat behavior. Goats can ram entities and be milked, and some spawn as babies or as rare screaming goats. Like other spawn eggs, it can convert a Monster Spawner to goats."
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
    },
    "minecraft:enderman_spawn_egg": {
        id: "minecraft:enderman_spawn_egg",
        name: "Enderman Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Enderman mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item.",
            "Spawns a neutral Enderman that teleports when wet or looked at.",
            "Can be used on a Spawner to create an Enderman spawner."
        ],
        description: "The Enderman Spawn Egg is a Creative Mode item used to summon an Enderman. Endermen are neutral mobs that can teleport and pick up certain blocks. This egg is useful for testing teleportation mechanics or building custom End-themed encounters. Like other spawn eggs, it can also be used to modify the mob type of a Monster Spawner."
    },
    "minecraft:wither_skeleton_spawn_egg": {
        id: "minecraft:wither_skeleton_spawn_egg",
        name: "Wither Skeleton Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Wither Skeleton mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item.",
            "Wither Skeletons inflict the Wither effect on hit.",
            "Essential for creating manual Wither Skeleton farms using spawners."
        ],
        description: "The Wither Skeleton Spawn Egg allows for the immediate summoning of a Wither Skeleton. These hostile mobs are typically found in Nether Fortresses and are known for their ability to inflict the Wither effect. This egg is primarily used in Creative Mode for map design or mob farm testing. Using it on a Monster Spawner will convert it into a Wither Skeleton spawner."
    },
    "minecraft:guardian_spawn_egg": {
        id: "minecraft:guardian_spawn_egg",
        name: "Guardian Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Guardian mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item.",
            "Spawns a Guardian, an aquatic hostile mob with a laser attack.",
            "Does not spawn Elder Guardians (use separate egg)."
        ],
        description: "The Guardian Spawn Egg is used to summon a Guardian, an aquatic hostile mob found around Ocean Monuments. Guardians attack with a long-range laser and have thorns-like spikes when attacking. This egg is useful for creating underwater hazards in custom maps. It can also be used on a Monster Spawner to change its mob type to Guardian."
    },
    "minecraft:shulker_spawn_egg": {
        id: "minecraft:shulker_spawn_egg",
        name: "Shulker Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Shulker mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Creative/Commands-only item.",
            "Shulkers fire levitation-inducing projectiles.",
            "Can be used on a Spawner to create a Shulker spawner."
        ],
        description: "The Shulker Spawn Egg allows for the instantaneous placement of a Shulker. These mobs are found in End cities and are known for their shell-like appearance and projectiles that cause players to levitate. This egg is a valuable tool for Creative mode builders creating obstacle courses or protecting structures. Like all spawn eggs, it can be applied to a Monster Spawner."
    },
    "minecraft:creaking_spawn_egg": {
        id: "minecraft:creaking_spawn_egg",
        name: "Creaking Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Creaking mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Added in the 1.21.50 'The Garden Awakens' update.",
            "Used to instantly spawn a Creaking mob.",
            "Can change a Spawner's type to Creaking when applied.",
            "Normally only available in Creative Mode or via commands.",
            "Creakings spawned this way are independent of any Creaking Heart."
        ],
        description: "The Creaking Spawn Egg is a specialized item available primarily in Creative Mode. When used on a block, it immediately summons a Creaking at that location. This item is essential for map makers who need to populate the Pale Garden or custom builds with Creakings without relying on Creaking Hearts. The Creaking is a unique mob that only moves when not being looked at by the player. In Survival, this item can only be obtained through commands."
    },
    "minecraft:pillager_spawn_egg": {
        id: "minecraft:pillager_spawn_egg",
        name: "Pillager Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Pillager mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Pillager armed with a crossbow.",
            "Used on a Spawner to create a Pillager spawner.",
            "Primarily available in Creative Mode or via commands."
        ],
        description: "The Pillager Spawn Egg is an item that allows for the instantaneous summoning of a Pillager. Primarily used in Creative Mode, it is a staple for testing raid mechanics or building adventure maps. Pillagers are hostile illagers armed with crossbows that often lead patrols or defend outposts. By clicking on a block or a Monster Spawner, the player can place a Pillager exactly where needed."
    },
    "minecraft:evoker_spawn_egg": {
        id: "minecraft:evoker_spawn_egg",
        name: "Evoker Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Evoker mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns an Evoker, the most powerful illager variant.",
            "Evokers can summon Vexes and use fang attacks.",
            "Can change a Spawner's type to Evoker."
        ],
        description: "The Evoker Spawn Egg is a powerful Creative Mode tool that summons an Evoker instantly. Evokers are the most dangerous type of illager, capable of summoning Vexes and casting fangs from the ground. This item is invaluable for map makers creating boss encounters or testing high-stakes survival scenarios. Like all spawn eggs, it can be used on a surface or a Monster Spawner."
    }
};
