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
    "minecraft:blaze_spawn_egg": {
        id: "minecraft:blaze_spawn_egg",
        name: "Blaze Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Blaze mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Blazes spawned from eggs immediately begin floating and prepared for combat.",
            "Changes a Spawner's type to Blaze when used on it."
        ],
        description: "The Blaze Spawn Egg is a Creative Mode item that allows players to instantly summon a Blaze. Blazes are fiery, flying hostile mobs found primarily in Nether Fortresses. Using this egg on a block will place a Blaze, while using it on a Monster Spawner will convert that spawner into a Blaze spawner. This is particularly useful for building manual Blaze rod farms or creating perilous Nether-themed challenges in custom maps."
    },
    "minecraft:ghast_spawn_egg": {
        id: "minecraft:ghast_spawn_egg",
        name: "Ghast Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Ghast mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a full-sized flying Ghast at the target location.",
            "Requires significant space to spawn successfully due to its 4x4 size.",
            "Can be used to create Ghast spawners for tear and gunpowder farms."
        ],
        description: "The Ghast Spawn Egg is a specialized item for summoning Ghasts, the large flying jellyfish-like mobs of the Nether. Due to the Ghast's massive size, it requires a large open area to be spawned successfully. When used on a surface, a Ghast appears and will immediately begin floating and firing explosive fireballs at nearby players. In Creative Mode, it can also be used to transform a Monster Spawner into a Ghast spawner, though Ghasts from spawners have unique placement requirements."
    },
    "minecraft:ghastling_spawn_egg": {
        id: "minecraft:ghastling_spawn_egg",
        name: "Ghastling Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Ghastling",
            secondaryUse: "Changing a Monster Spawner to spawn Ghastlings"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Introduced as part of the 'The Garden Awakens' (1.21.50) update",
            "Spawns a Ghastling, which is a smaller, cuter version of the Ghast",
            "Ghastlings are passive or neutral depending on player proximity",
            "Can be found as a rare item in specific structure chests in the Nether",
            "Added in Bedrock Edition 1.21.50.20 preview"
        ],
        description: "The Ghastling Spawn Egg is used to summon a Ghastling, a smaller and more friendly relative of the Ghast added in the 1.21 'The Garden Awakens' update. Unlike their larger counterparts, Ghastlings are generally docile and drift through the Nether with large, expressive eyes. While they are primarily decorative, their addition adds more life to the Nether environment. In survival mode, they are typically non-renewable and must be found in rare loot locations or spawned in Creative mode."
    },
    "minecraft:magma_cube_spawn_egg": {
        id: "minecraft:magma_cube_spawn_egg",
        name: "Magma Cube Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Magma Cube mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a randomized size (Small, Medium, or Large) Magma Cube.",
            "Magma Cubes jump and split similar to Slimes.",
            "Used on a Spawner to create a Magma Cube spawner for magma cream farms."
        ],
        description: "The Magma Cube Spawn Egg summons a Magma Cube, the fire-resistant Nether equivalent of the Slime. Each use spawns a Magma Cube of a random size, which split into smaller versions when defeated. These hopping mobs are the primary source of Magma Cream. Like other spawn eggs, this item is mostly for Creative Mode use, allowing for the placement of mobs or the conversion of Monster Spawners into efficient Magma Cube spawners for resource gathering."
    },
    "minecraft:phantom_spawn_egg": {
        id: "minecraft:phantom_spawn_egg",
        name: "Phantom Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Phantom mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a flying Phantom regardless of the player's sleep status.",
            "Phantoms burn in sunlight unless wearing a helmet (rare) or spawned under shade.",
            "Allows for the creation of Phantom spawners in custom maps."
        ],
        description: "The Phantom Spawn Egg is used to summon Phantoms, the swooping undead mobs that typically appear when a player hasn't slept for several days. This item allows for Phantoms to be placed manually in any conditions, making it useful for testing defense mechanics or building horror-themed maps in Creative Mode. When used on a Monster Spawner, it creates a Phantom-producing spawner, which can provide a reliable source of Phantom Membranes."
    },
    "minecraft:witch_spawn_egg": {
        id: "minecraft:witch_spawn_egg",
        name: "Witch Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Witch mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Witch that uses various splash and drinkable potions in combat.",
            "Does not spawn cats with the Witch; those spawn naturally in huts.",
            "Changes a Spawner's type to Witch for potion ingredient farms."
        ],
        description: "The Witch Spawn Egg allows for the immediate summoning of a Witch, a hostile mob that uses alchemy to attack and defend. Witches are known for throwing splash potions of poison, weakness, and slowness while healing themselves with health and fire resistance. This spawn egg is primarily a Creative tool for placing these magic-users or for transforming Monster Spawners into Witch spawners, which are highly efficient for farming various brewing ingredients."
    },
    "minecraft:drowned_spawn_egg": {
        id: "minecraft:drowned_spawn_egg",
        name: "Drowned Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Drowned mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Drowned instantly at the target location.",
            "Drowned are aquatic zombie variants that can spawn with tridents.",
            "Changes a Spawner's type to Drowned when used on it."
        ],
        description: "The Drowned Spawn Egg allows players to instantly summon a Drowned, the aquatic variant of the zombie. Predominantly used in Creative Mode, it is useful for testing underwater combat or populating aquatic builds. This item is essential for map makers who need to place Drowned without relying on zombies drowning in water. Like other spawn eggs, using it on a Monster Spawner will convert that spawner into a Drowned spawner, making it useful for trident and nautilus shell farms."
    },
    "minecraft:husk_spawn_egg": {
        id: "minecraft:husk_spawn_egg",
        name: "Husk Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Husk mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Husk instantly at the target location.",
            "Husks are desert-dwelling zombie variants that do not burn in sunlight.",
            "Apply to a Spawner to convert it to a Husk spawner."
        ],
        description: "The Husk Spawn Egg summons a Husk, a zombie variant found in desert biomes. Unlike regular zombies, Husks do not burn in sunlight and apply the Hunger effect when they hit a player. This egg is a valuable Creative Mode tool for placing desert-themed threats or for transforming Monster Spawners into Husk spawners. Using this item ensures that the summoned mob is specifically a Husk, providing consistency for map designers and technical testers."
    },
    "minecraft:stray_spawn_egg": {
        id: "minecraft:stray_spawn_egg",
        name: "Stray Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Stray mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Stray instantly at the target location.",
            "Strays are cold-dwelling skeleton variants that fire tipped arrows of slowness.",
            "Use on a Spawner to create a Stray spawner."
        ],
        description: "The Stray Spawn Egg is used to summon a Stray, the icy variant of the skeleton found in frozen biomes. Strays are known for their ability to fire arrows that inflict the Slowness effect. This egg is highly useful in Creative Mode for setting up snowy-themed encounters or for modifying Monster Spawners to produce Strays. Stray spawners are particularly valuable for farming arrows of slowness, making this egg a key tool for creating specialized resource farms in custom environments."
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
            "Spawns a Pillager instantly at the target location.",
            "Pillagers are illager variants that use crossbows for ranged attacks.",
            "Use on a Spawner to create a Pillager spawner."
        ],
        description: "The Pillager Spawn Egg allows for the immediate summoning of a Pillager, the most common type of illager. These hostile mobs are typically found at Pillager Outposts or as part of raid parties and patrols. This egg is used in Creative Mode to test raid defense mechanics or to populate custom structures with ranged attackers. When applied to a Monster Spawner, it converts the spawner into a Pillager spawner, which can be useful for creating manual crossbow or emerald farms."
    },
    "minecraft:ravager_spawn_egg": {
        id: "minecraft:ravager_spawn_egg",
        name: "Ravager Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Ravager mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a full-sized Ravager beast at the target location.",
            "Ravagers have high health and can smash certain blocks like crops.",
            "Can be used on a Spawner to create a Ravager spawner."
        ],
        description: "The Ravager Spawn Egg summons a Ravager, a massive, powerful illager beast. Ravagers are formidable opponents with high health and a devastating charge attack. This egg is essential for Creative Mode players who need to test base defenses against heavy attackers or create complex combat scenarios in adventure maps. Like other spawn eggs, it can be used to transform a Monster Spawner into a Ravager spawner, though Ravagers' large size requires ample space for the spawner to function correctly."
    },
    "minecraft:cow_spawn_egg": {
        id: "minecraft:cow_spawn_egg",
        name: "Cow Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Cow mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Instantly summons an adult Cow in any biome.",
            "Can be used to establish a renewable source of leather, beef, and milk.",
            "Using it on an adult Cow will spawn a baby calf.",
            "Equally effective for converting Monster Spawners into Cow spawners."
        ],
        description: "The Cow Spawn Egg is a utility item for Creative Mode players that allows the immediate placement of a cow. Cows are vital passive mobs that provide leather for armor and books, beef for food, and milk for clearing status effects. This spawn egg is perfect for quickly populating ranches or testing farm designs. When applied to a Monster Spawner, it overrides its current setting to produce cows indefinitely, offering a method for creating high-output leather and food farms in custom maps."
    },
    "minecraft:pig_spawn_egg": {
        id: "minecraft:pig_spawn_egg",
        name: "Pig Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Pig mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Immediately summons a Pig at the target location.",
            "Pigs are a primary source of raw porkchops and can be ridden with a saddle.",
            "Using the egg on an adult Pig will summon a piglet.",
            "Converts existing Monster Spawners into Pig spawners."
        ],
        description: "The Pig Spawn Egg provides an effortless way to summon a pig in Minecraft Bedrock Edition. Predominantly accessible in Creative Mode, it enables builders to seed their worlds with these iconic pink animals without waiting for natural spawns. Pigs are valuable for their porkchop drops and their ability to be ridden when equipped with a saddle and steered with a carrot on a stick. Like other spawn eggs, using it on a Monster Spawner transforms it into a Pig spawner, which is useful for specialized food production farms."
    },
    "minecraft:sheep_spawn_egg": {
        id: "minecraft:sheep_spawn_egg",
        name: "Sheep Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Sheep mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons a Sheep with a randomized wool color (weighted toward white).",
            "Sheep provide wool for crafting beds and decorations, and mutton for food.",
            "Using the egg on an adult Sheep will spawn a lamb.",
            "Sets Monster Spawners to produce Sheep upon contact."
        ],
        description: "The Sheep Spawn Egg is a Creative Mode item used to instantly place a sheep. The color of the spawned sheep is randomized based on natural weightings, though white is the most common. Sheep are essential for survival progression as they provide the wool necessary for crafting beds to set spawn points. They also drop mutton when harvested. This spawn egg is an excellent tool for populating pastures or for technical players who wish to convert spawner blocks into high-efficiency wool or food generators."
    },
    "minecraft:chicken_spawn_egg": {
        id: "minecraft:chicken_spawn_egg",
        name: "Chicken Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Chicken mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Immediately summons a Chicken which can lay eggs over time.",
            "Chickens provide feathers for arrows and raw chicken for food.",
            "Using the egg on an adult Chicken will spawn a baby chick.",
            "Can be used to modify Monster Spawners into Chicken spawners."
        ],
        description: "The Chicken Spawn Egg allows for the immediate summoning of a chicken, the primary source of feathers and poultry in the game. In Creative Mode, this is the most direct way to populate areas with poultry or to test egg-collection systems. Chickens are unique among farm animals as they also periodically lay eggs while alive. Using this egg on a Monster Spawner will convert it into a chicken spawner, which can be used to create massive quantities of feathers for projectiles and meat for sustenance or trading."
    },
    "minecraft:rabbit_spawn_egg": {
        id: "minecraft:rabbit_spawn_egg",
        name: "Rabbit Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Rabbit mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons a Rabbit with a biome-appropriate fur variant.",
            "Rabbits drop rabbit hide, raw rabbit, and rare rabbit's feet.",
            "Using the egg on an adult Rabbit will spawn a baby bunny.",
            "Transforms Monster Spawners into specialized Rabbit spawners."
        ],
        description: "The Rabbit Spawn Egg is a specialized item that summons a rabbit instantly. The variant of rabbit spawned often depends on the surrounding biome, adding realistic variety to custom environments. Rabbits are small, fast mobs that provide unique drops like rabbit's feet for brewing and hides for leather crafting. In addition to basic placement, the egg can be used on a Monster Spawner to create a rabbit-producing spawner. This is a valuable technique for players needing a renewable source of potion ingredients or specialized food materials."
    },
    "minecraft:wolf_spawn_egg": {
        id: "minecraft:wolf_spawn_egg",
        name: "Wolf Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Wolf mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a wild wolf that can be tamed with bones.",
            "Changes a Spawner's type to Wolf when used on it.",
            "Natural wolf variants (e.g., Pale, Ashen) depend on the biome."
        ],
        description: "The Wolf Spawn Egg allows for the immediate summoning of a wolf at any targeted location. Primarily used in Creative Mode, it enables players to quickly add canine companions to their worlds without hunting for them in forests or taigas. Wild wolves spawned this way can be tamed by using bones on them. Like all spawn eggs, it can override a Monster Spawner's data to produce wolves indefinitely, which is useful for creating specialized taming areas or defending custom-built bases."
    },
    "minecraft:mooshroom_spawn_egg": {
        id: "minecraft:mooshroom_spawn_egg",
        name: "Mooshroom Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Mooshroom mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Red Mooshroom by default in most cases.",
            "Can be milked with a bowl for Mushroom Stew or a bucket for Milk.",
            "Transformations into Brown Mooshrooms require a lightning strike."
        ],
        description: "The Mooshroom Spawn Egg summons a red mooshroom, the fungal bovine native to Mushroom Fields. This rare variant of the cow is highly valued for its ability to provide Mushroom Stew when milked with a bowl. In Creative Mode, this egg is the easiest way to place these unique animals outside of their rare natural habitat. When applied to a Monster Spawner, it creates a mooshroom spawner, ensuring a constant supply of stew and leather. Note that brown mooshrooms are typically obtained only if a red one is struck by lightning."
    },
    "minecraft:squid_spawn_egg": {
        id: "minecraft:squid_spawn_egg",
        name: "Squid Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Squid mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a squid, which must be placed in water to avoid suffocating.",
            "Squids are the primary source of black ink sacs in the game.",
            "Changes a Spawner's type to Squid when applied."
        ],
        description: "The Squid Spawn Egg is used to summon a squid instantly. As aquatic mobs, squids must be spawned in water or they will eventually suffocate. They are the primary source of ink sacs used for black dye and coloring various items. This egg is essential for Creative builders designing underwater features or automated ink-farming systems. By using the egg on a Monster Spawner, players can create a dedicated squid spawner, which is often easier than building complex natural-spawn farms for ink production."
    },
    "minecraft:glow_squid_spawn_egg": {
        id: "minecraft:glow_squid_spawn_egg",
        name: "Glow Squid Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Glow Squid mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a glow squid, which produces a bioluminescent effect.",
            "Glow squids drop glow ink sacs, used for glowing signs and frames.",
            "Must be spawned in water to prevent suffocation."
        ],
        description: "The Glow Squid Spawn Egg instantly summoned a glow squid, a bioluminescent aquatic mob. These creatures emit a gentle glowing aura and drop glow ink sacs when defeated, which are essential for making glowing signs and item frames. Like standard squids, glow squids require water to survive. In Creative Mode, this egg allows for the placement of these atmospheric mobs in caves or deep oceans. When used on a Monster Spawner, it creates a glow squid spawner, providing a reliable source of glow ink for lighting and decoration projects."
    },
    "minecraft:fox_spawn_egg": {
        id: "minecraft:fox_spawn_egg",
        name: "Fox Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Fox mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Red Fox or Snowy Fox depending on the biome.",
            "Foxes are nocturnal and can carry items in their mouths.",
            "Changes a Spawner's type to Fox when used on it."
        ],
        description: "The Fox Spawn Egg summons a fox at the targeted location. The fur color of the spawned fox (Red or Snowy) is determined by the biome in which the egg is used. Foxes are curious, nocturnal creatures that sleep during the day and can hold various items in their mouths. This egg is primarily used in Creative Mode for populating taiga builds or testing item-retrieval mechanics. When applied to a Monster Spawner, it creates a fox spawner, allowing for the generation of these agile mobs for custom maps or specialized berry-farming systems."
    },
    "minecraft:elder_guardian_spawn_egg": {
        id: "minecraft:elder_guardian_spawn_egg",
        name: "Elder Guardian Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Elder Guardian mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns the largest Guardian variant, which inflicts Mining Fatigue.",
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Elder Guardian when used on it."
        ],
        description: "The Elder Guardian Spawn Egg is a Creative Mode item used to summon an Elder Guardian instantly. These massive, pale-grey versions of the Guardian are typically found in Ocean Monuments and are known for their ability to inflict the Mining Fatigue status effect on players. This egg is essential for map designers who need to place these miniboss-level threats in custom aquatic structures or to convert Monster Spawners into Elder Guardian spawners."
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
            "Evokers summon Vexes and Evocation Fangs in battle.",
            "Drops a Totem of Undying upon death.",
            "Useful for testing player defenses against Vex summons."
        ],
        description: "The Evoker Spawn Egg allows for the immediate summoning of an Evoker, the most dangerous of the illager variants. Evokers are unique in their ability to cast spells, summons winged Vexes, and create jaws from the ground to damage players. In Creative Mode, this egg is invaluable for testing base defenses or populating custom mansions and raid scenarios. Using it on a Monster Spawner will create an Evoker spawner, which can provide a reliable source of Totems of Undying."
    },
    "minecraft:vindicator_spawn_egg": {
        id: "minecraft:vindicator_spawn_egg",
        name: "Vindicator Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Vindicator mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Vindicators are extremely fast and wield iron axes.",
            "They belong to the illager family and participate in raids.",
            "Commonly found in Woodland Mansions."
        ],
        description: "The Vindicator Spawn Egg is used to summon a Vindicator instantly. These hostile illagers are known for their speed and for charging at players with their axes raised. This egg is a key tool for Creative Mode players building challenging raid encounters or populating woodland mansion-style structures. Like other spawn eggs, applying it to a Monster Spawner will convert that spawner into a Vindicator spawner, which is useful for emerald and axe farming."
    },
    "minecraft:piglin_brute_spawn_egg": {
        id: "minecraft:piglin_brute_spawn_egg",
        name: "Piglin Brute Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Piglin Brute mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Piglin Brutes have much higher health than regular Piglins.",
            "They will never retreat and cannot be distracted by gold.",
            "Wield golden axes and do not wear armor."
        ],
        description: "The Piglin Brute Spawn Egg summons a Piglin Brute, the elite guardian of Bastion Remnants. Unlike standard Piglins, Brutes are always hostile, have massive health pools, and cannot be bartered with or distracted by gold. This item is essential for map creators who need to place formidable guards in custom Nether bastions. Its ability to convert a Monster Spawner allows for the creation of high-difficulty combat arenas in Creative Mode."
    },
    "minecraft:wandering_trader_spawn_egg": {
        id: "minecraft:wandering_trader_spawn_egg",
        name: "Wandering Trader Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Wandering Trader mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Wandering Trader with randomized trades.",
            "Does not spawn with Llama unless part of natural spawning logic.",
            "Despawns after a set period of time."
        ],
        description: "The Wandering Trader Spawn Egg allows players to instantly place a Wandering Trader. These passive mobs roam the world with their llamas and offer a variety of rare and exotic trade items in exchange for emeralds. In Creative Mode, this egg is useful for testing trade pools or populating market spaces in custom villages. Using it on a Monster Spawner creates a Wandering Trader spawner, though their despawn rates still apply to those spawned from blocks."
    },
    "minecraft:dolphin_spawn_egg": {
        id: "minecraft:dolphin_spawn_egg",
        name: "Dolphin Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Dolphin",
            secondaryUse: "Used on a Spawner to change its type to Dolphin"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Specifically summons a Dolphin mob.",
            "Allows customization of Monster Spawners to produce Dolphins.",
            "Can be used underwater to populate aquatic builds."
        ],
        description: "The Dolphin Spawn Egg is an item used to instantly summon a Dolphin. Typically restricted to Creative Mode or accessible via commands, it provides a direct way to spawn these playful aquatic mobs. When used on a block, a Dolphin appears; if used on an existing Monster Spawner, it converts that spawner to a Dolphin spawner. This is particularly useful for creating themed aquariums or specific aquatic environments in custom maps."
    },
    "minecraft:llama_spawn_egg": {
        id: "minecraft:llama_spawn_egg",
        name: "Llama Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Llama",
            secondaryUse: "Used on a Spawner to change its type to Llama"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons a Llama with a random appearance (color/markings).",
            "Changes a Monster Spawner to produce Llamas.",
            "Crucial for populating mountain or savanna biomes in Creative."
        ],
        description: "The Llama Spawn Egg allows players in Creative Mode to instantly summon a Llama. Upon use, a Llama with a randomized coat color will appear at the targeted location. Like other spawn eggs, it can be applied to a Monster Spawner to set its mob type to Llama. Since Llamas are useful for transporting items in caravans, this spawn egg is a quick way for map creators to provide players with pack animals or to populate mountain scenery."
    },
    "minecraft:panda_spawn_egg": {
        id: "minecraft:panda_spawn_egg",
        name: "Panda Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Panda",
            secondaryUse: "Used on a Spawner to change its type to Panda"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons a Panda with a random personality or the rare brown variant.",
            "Changes a Monster Spawner to a Panda spawner.",
            "Ideal for populating bamboo jungle builds."
        ],
        description: "The Panda Spawn Egg is a Creative Mode item that summons a Panda mob. When used, it spawns a Panda which may have any of the seven possible personalities: normal, lazy, worried, playful, aggressive, weak, or the very rare brown variant. It functions like all spawn eggs in that it can also modify the behavior of a Monster Spawner. This item is the fastest way to add these rare and charismatic mobs to a bamboo forest or zoo-themed environment."
    },
    "minecraft:parrot_spawn_egg": {
        id: "minecraft:parrot_spawn_egg",
        name: "Parrot Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Parrot",
            secondaryUse: "Used on a Spawner to change its type to Parrot"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons a Parrot in one of five vibrant colors.",
            "Enables Monster Spawners to produce Parrots.",
            "Great for adding life and sound to jungle-themed maps."
        ],
        description: "The Parrot Spawn Egg is an item used to effortlessly summon Parrots in Minecraft. Available primarily in Creative Mode, it spawns a Parrot in one of its five possible colors: red, blue, green, cyan, or gray. It can also be used on a Monster Spawner to convert it into a Parrot-summoning block. This item is a favorite for designers looking to add colorful, sound-mimicking birds to tropical or jungle-themed builds without waiting for natural spawns."
    },
    "minecraft:polar_bear_spawn_egg": {
        id: "minecraft:polar_bear_spawn_egg",
        name: "Polar Bear Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Polar Bear",
            secondaryUse: "Used on a Spawner to change its type to Polar Bear"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Summons an adult Polar Bear or a cub at the clicked location.",
            "Modifies Monster Spawners to generate Polar Bears.",
            "Perfect for populating frozen biomes and snowy structures."
        ],
        description: "The Polar Bear Spawn Egg provides a quick way to summon Polar Bears in Minecraft's Creative Mode. When used on a surface, it will spawn either an adult Polar Bear or, less frequently, a cub. It can also be applied to a Monster Spawner to change its mob type. This spawn egg is essential for creating cold-themed survival maps, ice fortresses, or realistic arctic tundras where these powerful and protective animals naturally belong."
    },
    "minecraft:slime_spawn_egg": {
        id: "minecraft:slime_spawn_egg",
        name: "Slime Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Slime mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Slime when used on it.",
            "Spawns a random size (Small, Medium, or Large) Slime."
        ],
        description: "The Slime Spawn Egg is a Creative Mode item used to instantly summon a Slime. Slimes are bouncy, green, cube-shaped mobs that divide into smaller versions when killed. This egg is essential for testing gravity-based farms, parkour mechanics, or populating swamp biomes. When applied to a Monster Spawner, it creates a Slime spawner, providing a renewable source of slimeballs in custom map environments."
    },
    "minecraft:silverfish_spawn_egg": {
        id: "minecraft:silverfish_spawn_egg",
        name: "Silverfish Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Silverfish mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Silverfish when used on it.",
            "Small hostile mobs that can hide inside Infested Blocks."
        ],
        description: "The Silverfish Spawn Egg allows for the immediate summoning of a Silverfish, a small hostile mob typically found in Strongholds or Infested Blocks. When attacked, Silverfish can summon other nearby Silverfish to swarm the player. This egg is useful for testing mob-calling mechanics or building trap-heavy environments. Applied to a Monster Spawner, it creates a persistent threat of silverfish swarms in targeted areas."
    },
    "minecraft:cave_spider_spawn_egg": {
        id: "minecraft:cave_spider_spawn_egg",
        name: "Cave Spider Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Cave Spider mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Cave Spider when used on it.",
            "Small spiders that inflict Poison to players on impact."
        ],
        description: "The Cave Spider Spawn Egg summons a Cave Spider, the smaller and more dangerous relative of the common spider. Found in abandoned mineshafts, these hostile mobs inflict poison attacks that can bypass armor. This spawn egg is particularly useful for map designers creating challenging dungeon encounters. Using it on a Monster Spawner converts it into a Cave Spider spawner, useful for farming string, spider eyes, and experience."
    },
    "minecraft:bat_spawn_egg": {
        id: "minecraft:bat_spawn_egg",
        name: "Bat Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Bat mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Bat when used on it.",
            "Ambient mob that adds atmosphere to dark caves and structures."
        ],
        description: "The Bat Spawn Egg is used to instantly summon a Bat, the only ambient flying mob found in caves. Bats have no significant drops and are primarily used for atmosphere. This spawn egg is essential for map makers who want to add life to underground environments or dark structures without adding hostile threats. Like other spawn eggs, it can be used on a Monster Spawner to create a dedicated bat-summoning block."
    },
    "minecraft:cat_spawn_egg": {
        id: "minecraft:cat_spawn_egg",
        name: "Cat Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Cat mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Changes a Spawner's type to Cat when used on it.",
            "Spawns one of 11 different cat variants randomly."
        ],
        description: "The Cat Spawn Egg summons a domestic cat, a versatile passive mob that repels creepers and phantoms. Cat Spawn Eggs spawn random variants (specific breeds require /summon commands); stray cats also repel phantoms. This egg is invaluable for builders wanting to add pets to their homes or for testing anti-mob defenses. Using it on a Monster Spawner converts it into a Cat spawner, providing constant protection against certain hostile threats."
    },
    "minecraft:bee_spawn_egg": {
        id: "minecraft:bee_spawn_egg",
        name: "Bee Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Bee mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Bees are neutral mobs that produce honey and can pollinate crops.",
            "Clicking an adult Bee with the egg will spawn a baby Bee."
        ],
        description: "The Bee Spawn Egg allows players to instantly summon a Bee. Bees are unique neutral mobs that are essential for honey production and crop growth. This item is primarily used in Creative Mode for testing farm designs or map making. When used on a Monster Spawner, it transforms it into a Bee spawner, though Bees typically require nests or hives to function effectively. In Survival, this item can only be obtained through commands or cheats."
    },
    "minecraft:piglin_spawn_egg": {
        id: "minecraft:piglin_spawn_egg",
        name: "Piglin Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Piglin mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Piglins are neutral mobs that can be bartered with using gold ingots.",
            "Will zombify if brought to the Overworld or the End."
        ],
        description: "The Piglin Spawn Egg summons a Piglin at the targeted location. Piglins are iconic inhabitants of the Nether, known for their love of gold and unique bartering mechanic. This egg is mostly used in Creative Mode to set up trading halls or testing Nether-themed structures. Like other spawn eggs, it can be applied to a Monster Spawner to create a Piglin spawner. Care should be taken when spawning them outside the Nether, as they will soon transform into Zombified Piglins."
    },
    "minecraft:hoglin_spawn_egg": {
        id: "minecraft:hoglin_spawn_egg",
        name: "Hoglin Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Hoglin mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Hoglins are aggressive beasts that drop porkchops and leather.",
            "Will transform into a Zoglin if brought to the Overworld or the End."
        ],
        description: "The Hoglin Spawn Egg is a Creative Mode item used to instantly summon a Hoglin. Hoglins are large, aggressive beasts found in Crimson Forests, providing a rare survival source of food and leather in the Nether. This egg is useful for testing combat scenarios or populating Nether-themed builds. Like all spawn eggs, it can override a Monster Spawner's data to generate Hoglins. They are sensitive to non-Nether dimensions and will zombify into Zoglins if moved there."
    },
    "minecraft:strider_spawn_egg": {
        id: "minecraft:strider_spawn_egg",
        name: "Strider Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Strider mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Striders are passive mobs that can walk on lava.",
            "Can be ridden by players using a saddle and a warped fungus on a stick."
        ],
        description: "The Strider Spawn Egg allows for the immediate summoning of a Strider. Striders are unique, passive mobs from the Nether that provide a means of lava transportation. This item is primarily a Creative tool for placing these creatures in lava lakes or testing mount mechanics. When used on a Monster Spawner, it creates a Strider spawner. Striders spawned outside of lava will shiver and take on a purple tint, moving significantly slower."
    },
    "minecraft:zombified_piglin_spawn_egg": {
        id: "minecraft:zombified_piglin_spawn_egg",
        name: "Zombified Piglin Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Zombified Piglin mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Normally only available in Creative Mode or via commands.",
            "Zombified Piglins are neutral undead that wield golden swords.",
            "Will swarm the player if one is attacked."
        ],
        description: "The Zombified Piglin Spawn Egg summons a Zombified Piglin, a common and neutral undead mob of the Nether. They are immune to fire and lava and are famous for their collective aggression when provoked. This spawn egg is highly useful in Creative Mode for designing gold farms or Nether-themed maps. By applying it to a Monster Spawner, players can create a dedicated gold and rotten flesh farm, bypassing the need for complex natural-spawn mechanics."
    },
    "minecraft:ocelot_spawn_egg": {
        id: "minecraft:ocelot_spawn_egg",
        name: "Ocelot Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Ocelot mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Found naturally in Jungle biomes",
            "Feed raw fish to gain trust (but not tame)",
            "Will flee from players who move too quickly",
            "Creepers stay away from Ocelots",
            "Can be used on a spawner to create an Ocelot spawner"
        ],
        description: "The Ocelot Spawn Egg allows players to instantly summon an Ocelot, a shy feline found in jungle biomes. While they cannot be tamed into cats, feeding them raw fish earns their trust, preventing them from fleeing. They are known for scaring away Creepers and Phantoms, making them useful for base protection. Like all spawn eggs, this can be used on a spawner to create a dedicated Ocelot habitat, ideal for players wanting to add life to their jungle builds or protect livestock from explosive threats."
    },
    "minecraft:donkey_spawn_egg": {
        id: "minecraft:donkey_spawn_egg",
        name: "Donkey Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Donkey mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Found in Plains and Savanna biomes",
            "Tamed by repeatedly mounting",
            "Equip with a chest for 15 slots of storage",
            "Breeding a donkey with a horse creates a mule",
            "Cannot be equipped with horse armor"
        ],
        description: "The Donkey Spawn Egg summons a Donkey, a versatile variant of the horse found in plains and savannas. Donkeys are valued for their utility; while they cannot wear horse armor, they can be equipped with chests to provide 15 slots of portable storage. They move slower than horses but are easier to breed and manage for long-distance transport. Using this on a spawner creates a donkey spawner, allowing for the rapid generation of these helpful pack animals for survival exploration and resource gathering."
    },
    "minecraft:mule_spawn_egg": {
        id: "minecraft:mule_spawn_egg",
        name: "Mule Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Mule mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Result of breeding a horse and a donkey",
            "Cannot spawn naturally in the world",
            "Can be equipped with chests (15 slots)",
            "Tamed by repeatedly mounting",
            "Sterile; cannot be bred to create offspring"
        ],
        description: "The Mule Spawn Egg summons a Mule, a sterile crossbreed that combines horse speed with donkey utility. Mules are unique because they do not spawn naturally and must be bred from a horse and a donkey. They can be equipped with chests for 15 slots of extra inventory, making them superior long-distance travel companions. This spawn egg is particularly useful for map creators who want to provide players with advanced mounts without requiring the multi-step breeding process needed in standard survival."
    },
    "minecraft:skeleton_horse_spawn_egg": {
        id: "minecraft:skeleton_horse_spawn_egg",
        name: "Skeleton Horse Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Skeleton Horse mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawn from 'skeleton traps' during thunderstorms",
            "Do not require taming to ride",
            "Can be ridden underwater (unlike normal horses)",
            "Does not need a saddle to control in Bedrock Edition",
            "Healed using Instant Harming potions (undead)"
        ],
        description: "The Skeleton Horse Spawn Egg summons an undead mount that possesses unique abilities. Unlike standard horses, they can be ridden underwater and do not require taming or a saddle to control in Bedrock Edition. They are immune to drowning and provide a fast, spooky way to navigate both land and sea. In survival, they only appear during rare skeleton traps in thunderstorms. This egg allows Creative players to bypass weather dependency and immediately utilize one of the game's most interesting mounts."
    },
    "minecraft:zombie_horse_spawn_egg": {
        id: "minecraft:zombie_horse_spawn_egg",
        name: "Zombie Horse Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Zombie Horse mob",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Do not spawn naturally in survival mode",
            "Green-skinned undead variant of the horse",
            "Has 15 hearts (30 health), more than most horses",
            "Healed using Instant Harming potions (undead)",
            "Can be tamed and ridden in creative/commands"
        ],
        description: "The Zombie Horse Spawn Egg summons a green-skinned undead horse variant that is significantly more durable than typical horses. Boasting 15 hearts of health, they are among the toughest passive mobs. Although they do not spawn naturally in survival, this egg makes them accessible for Creative projects and commands. These horses are undead, meaning they are healed by harming effects rather than healing. They serve as excellent, high-health aesthetic mounts for builders and adventure map designers."
    },
    "minecraft:horse_spawn_egg": {
        id: "minecraft:horse_spawn_egg",
        name: "Horse Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Horse",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns a Horse with random color and markings.",
            "Can spawn a baby Horse if used on an adult Horse.",
            "Can be used to change a Monster Spawner's type to Horse."
        ],
        description: "The Horse Spawn Egg is a creative-only item used to summon horses instantly. Each egg spawns a horse with a randomized combination of one of seven base colors and one of five marking patterns, resulting in 35 unique visual variants. When used on an existing adult horse, it will spawn a foal (baby horse) of the same species. It is widely used by map creators to populate stables or for testing breeding mechanics quickly without searching for wild herds."
    },
    "minecraft:vex_spawn_egg": {
        id: "minecraft:vex_spawn_egg",
        name: "Vex Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Vex",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Vexes spawned from eggs do not have a lifespan (unlike those summoned by Evokers).",
            "Can fly through solid blocks and entities.",
            "Always spawns with an Iron Sword in its hand."
        ],
        description: "The Vex Spawn Egg is used to summon a Vex, a small, flying hostile mob typically found during village raids. Unlike Vexes summoned by an Evoker, those spawned from an egg do not gradually take damage over time and will persist indefinitely until killed. They retain their unique ability to phase through walls and blocks, making them highly dangerous in enclosed spaces. In Creative Mode, they are often used to test base defenses or to create challenging obstacle courses for players."
    },
    "minecraft:endermite_spawn_egg": {
        id: "minecraft:endermite_spawn_egg",
        name: "Endermite Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning an Endermite",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Smallest hostile mob in Minecraft.",
            "Endermen will immediately attack any nearby Endermite.",
            "Useful for creating Enderman farms by using them as bait."
        ],
        description: "The Endermite Spawn Egg allows for the immediate summoning of an Endermite, the smallest hostile mob in the game. While they are usually rare, spawning only 5% of the time an Ender Pearl is thrown, this egg provides a reliable way to obtain them. Their most significant utility is their relationship with Endermen, who are naturally hostile toward them. This behavior is frequently exploited in the creation of efficient Enderman farms in the End dimension, where an Endermite is used as bait to lure Endermen into drop traps."
    },
    "minecraft:tadpole_spawn_egg": {
        id: "minecraft:tadpole_spawn_egg",
        name: "Tadpole Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Tadpole",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Tadpoles spawn only in water and will flop on land.",
            "They will grow into a specific Frog variant depending on the biome temperature.",
            "Can be picked up using a Water Bucket to create a Bucket of Tadpole."
        ],
        description: "The Tadpole Spawn Egg is a Creative Mode item that spawns a Tadpole, the larval stage of frogs. Since Tadpoles are aquatic, they must be spawned in water; otherwise, they will struggle on land and eventually die. The type of frog a Tadpole grows into is determined by the climate (cold, temperate, or warm) of the biome where it grows up. This makes the spawn egg useful for quickly obtaining specific frog types (Cold/Green, Temperate/Orange, or Warm/White) for building Froglight farms without manual breeding."
    },
    "minecraft:trader_llama_spawn_egg": {
        id: "minecraft:trader_llama_spawn_egg",
        name: "Trader Llama Spawn Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly spawning a Trader Llama",
            secondaryUse: "Used on a Spawner to change its mob type"
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Spawns with a unique, pre-applied decorative carpet.",
            "Naturally hostile towards Illagers and Zombies.",
            "Will spit at any mob or player that attacks its owner or itself."
        ],
        description: "The Trader Llama Spawn Egg summons the unique variant of llama that accompanies Wandering Traders. These llamas differ from standard ones by spawning with ornate, colorful carpets and displaying protective behaviors. They are naturally defensive of their owner, spitting at hostiles like Pillagers or Zombies. When spawned via an egg in Creative, they retain these distinctive traits and textures, making them excellent for adding detail to marketplaces or caravan-themed builds where a regular llama's appearance might be too plain."
    }
};
