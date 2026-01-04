// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// lead, trial key, ominous trial key, written book, book and quill,
// enchanted book, knowledge book, bundle, goat horn (all variants),
// painting, item frame, glow item frame, armor stand, end crystal,
// experience bottle, firework star, wolf armor, totem of undying,
// bucket, dragon egg
// ============================================

/**
 * Other miscellaneous items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const miscItems = {
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Trophy item",
            secondaryUse: "Decorative and status symbol"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by defeating the Ender Dragon"]
        },
        specialNotes: [
            "Only one Dragon Egg naturally generates per world",
            "Teleports when hit or interacted with in Survival mode",
            "Falls like sand or gravel if no block is beneath it",
            "Can be collected using a piston or by placing a torch beneath it",
            "Widely considered the rarest item in Minecraft"
        ],
        description: "The Dragon Egg is a unique trophy item that appears at the top of the exit portal after defeating the Ender Dragon for the first time. It is widely considered the rarest item in the game since only one naturally generates per world. While it has no functional crafting use, it serves as a prestigious decorative piece. In survival mode, attempting to mine it normally will cause it to teleport to a nearby location; players must use clever methods like pistons or placing a torch under the block it falls on to successfully collect it."
    },
    "minecraft:name_tag": {
        id: "minecraft:name_tag",
        name: "Name Tag",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Naming mobs to prevent them from despawning",
            secondaryUse: "Customizing mobs and adding personal touches to tamed pets"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in dungeon chests, mineshaft chests, woodland mansion chests, ancient city chests", "Obtained from fishing (0.8% chance)", "Purchased from Librarian villagers (20 emeralds at Master level)"]
        },
        specialNotes: [
            "Prevents mob despawning; requires renaming at an anvil (1 XP)",
            "Found in Dungeon, Mineshaft, Mansion, and Ancient City chests",
            "Fishing treasure drop (0.8%); sold by Master Librarians (20 emeralds)",
            "Naming hostile mobs prevents despawning (except in Peaceful)",
            "Custom names appear in death messages if the mob kills a player"
        ],
        description: "A Name Tag is a utility item used to name mobs and prevent them from despawning. To use one, rename it at an anvil for one experience level, then apply it to a mob. This consumes the tag. Named mobs persist in the world and display their name above their head; their name also appears in death messages if they kill a player. Players can find Name Tags in loot chests (dungeons, mineshafts, ancient cities), catch them through fishing (0.8% chance), or buy them from Master-level Librarian villagers for 20 emeralds."
    },
    "minecraft:shield": {
        id: "minecraft:shield",
        name: "Shield",
        maxStack: 1,
        durability: 336,
        enchantable: true,
        usage: {
            primaryUse: "Blocking attacks",
            secondaryUse: "Deflecting projectiles"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wood Planks x6", "Iron Ingot"]
        },
        specialNotes: [
            "Blocks 100% of attack damage when raised",
            "Can block arrows, tridents, and other projectiles",
            "Creeper explosions and axes can disable shields temporarily",
            "Can be decorated with banner patterns",
            "Enchantable with Unbreaking and Mending"
        ],
        description: "The Shield is a defensive tool that can block incoming melee attacks and projectiles. When raised by crouching or using secondary action button, it reduces incoming damage to zero. Shields can be customized with banner patterns and enhanced with enchantments for increased durability."
    },
    "minecraft:elytra": {
        id: "minecraft:elytra",
        name: "Elytra",
        maxStack: 1,
        durability: 432,
        enchantable: true,
        usage: {
            primaryUse: "Gliding through air",
            secondaryUse: "Fast travel with fireworks"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in End Ships"]
        },
        specialNotes: [
            "Equipped in the chestplate slot",
            "Allows gliding when jumping from heights",
            "Firework rockets can boost speed while gliding",
            "Loses durability over time while gliding (1 per second)",
            "Can only be found in End Ship item frames",
            "Repairable with Phantom Membranes or Mending enchantment"
        ],
        description: "Elytra are rare wings found exclusively in End Ships within End Cities. They allow the player to glide through the air and, when combined with firework rockets, enable powerful flight capabilities. Elytra are one of the most sought-after items in the game, providing unparalleled mobility for exploration and travel."
    },
    "minecraft:trial_key": {
        id: "minecraft:trial_key",
        name: "Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking a Vault in a Trial Chamber",
            secondaryUse: "Claiming loot rewards from Trial Chamber challenges"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Trial Spawners and some other containers in Trial Chambers"]
        },
        specialNotes: [
            "Consumed when used to unlock a Vault",
            "Each Vault can be unlocked only once per player",
            "Used exclusively in Trial Chambers (Tricky Trials / 1.21+)"
        ],
        description: "The Trial Key is a reward item tied to Trial Chambers in Minecraft Bedrock Edition. It is used on a Vault to claim its loot, with the vault tracking which players have already opened it so each player can only unlock it once. Trial Keys are primarily earned from Trial Spawners after completing their combat waves, and can also appear in other Trial Chamber containers."
    },
    "minecraft:ominous_trial_key": {
        id: "minecraft:ominous_trial_key",
        name: "Ominous Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking an Ominous Vault in a Trial Chamber",
            secondaryUse: "Accessing higher-tier Trial Chamber loot during ominous trials"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained only from Ominous Trial Spawners"]
        },
        specialNotes: [
            "Consumed when used to unlock an Ominous Vault",
            "Ominous Trial Spawners are created when a player carrying the Trial Omen effect activates a Trial Spawner",
            "Used exclusively in Trial Chambers (Tricky Trials / 1.21+)"
        ],
        description: "The Ominous Trial Key is an upgraded form of the Trial Key used to open Ominous Vaults in Trial Chambers. These vaults provide significantly better loot, but the key is only obtainable from Ominous Trial Spawners during an ominous trial. Like normal vaults, an Ominous Vault can only be unlocked once per player, and the key is consumed on use."
    },
    "minecraft:wolf_armor": {
        id: "minecraft:wolf_armor",
        name: "Wolf Armor",
        maxStack: 1,
        durability: 64,
        enchantable: false,
        usage: {
            primaryUse: "Equipping on tamed wolves to provide damage protection",
            secondaryUse: "Can be repaired with additional armadillo scutes"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Armadillo Scute x6"]
        },
        specialNotes: [
            "Provides 11 armor points when equipped (equivalent to a full set of gold armor)",
            "Can only be equipped on tamed wolves",
            "Reduces damage taken by wolves significantly",
            "Has 64 durability and breaks when depleted",
            "Can be repaired using armadillo scutes in crafting grid or by using directly on wolf (restores 8 durability)",
            "Two damaged wolf armors can be combined in crafting grid to repair"
        ],
        description: "Wolf armor is protective gear for tamed wolves, crafted from armadillo scutes. Introduced in 1.21, it provides protection equivalent to gold armor, absorbing incoming damage until its 64 durability points are depleted. Owners can repair damaged armor using armadillo scutes or by combining two worn pieces. This equipment significantly boosts a wolf's survivability against hostile mobs and environmental hazards, making them more resilient companions for combat and exploration."
    },
    "minecraft:totem_of_undying": {
        id: "minecraft:totem_of_undying",
        name: "Totem of Undying",
        maxStack: 1,
        durability: 1,
        enchantable: false,
        usage: {
            primaryUse: "Prevents death when held in off-hand or main hand",
            secondaryUse: "Survival in dangerous combat situations and boss fights"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Evokers in Woodland Mansions and Raids"]
        },
        specialNotes: [
            "Prevents death when held (hand/off-hand); consumed on use",
            "Grants Absorption II (5s), Regeneration II (45s), Fire Resistance I (40s)",
            "Dropped by Evokers in Mansions and Raids (100% chance)",
            "Does not protect against void damage or /kill",
            "Essential specialized loot for hardcore survival"
        ],
        description: "The Totem of Undying prevents death if held in either hand when taking lethal damage. Upon use, the item is consumed and grants the player Absorption II, Regeneration II, and Fire Resistance I. Totems are exclusively dropped by Evokers in Woodland Mansions and Raids. Note that it does not protect against void damage or the /kill command. This legendary survival tool provides a crucial second chance, making it one of the most sought-after items for high-stakes combat and exploration."
    },
    "minecraft:bundle": {
        id: "minecraft:bundle",
        name: "Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Staging and organizing multiple items within a single inventory slot.",
            secondaryUse: "Items can be added or removed from the bundle while it is held in the inventory."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather", "String"]
        },
        specialNotes: [
            "Can hold up to 64 items of varying types.",
            "The capacity depends on the stack size of the items placed inside.",
            "Can be dyed in 16 different colors using dyes in a crafting grid.",
            "Fully released in Bedrock Edition 1.21.40 as part of the 'Bundles of Bravery' drop."
        ],
        description: "A bundle is a storage item that can be used to manage multiple items within a single inventory slot. It is particularly useful for gathering small amounts of different items that would otherwise clutter the inventory. After being an experimental feature for several years, bundles were officially released for Bedrock Edition in version 1.21.40. They provide a unique way to handle inventory management, especially for players who collect many different types of blocks and items during exploration."
    },
    "minecraft:spyglass": {
        id: "minecraft:spyglass",
        name: "Spyglass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Zooming in to view distant objects and terrain",
            secondaryUse: "Exploration and scouting from elevated positions"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Amethyst Shard x1", "Copper Ingot x2"]
        },
        specialNotes: [
            "Zooms FOV to 1/8x; restricts movement to sneak speed",
            "Crafted with 1 Amethyst Shard + 2 Copper Ingots",
            "Usable in boats/minecarts but not while swimming/flying",
            "Features circular vignette and smooth zoom transitions",
            "Useful for scouting distant structures and terrain"
        ],
        description: "Introduced in 1.17, the Spyglass allows players to zoom in on distant objects by narrowing their FOV to one-eighth of normal. It is crafted using one Amethyst Shard and two Copper Ingots. While in use, movement is restricted to sneaking speed, making it ideal for scouting biomes, structures, or threats from elevated positions. The tool features a unique circular vignette and smooth telescoping animations. Whether you are navigating the landscape or planning a large-scale build, the Spyglass is an essential reconnaissance tool for any explorer."
    },
    "minecraft:recovery_compass": {
        id: "minecraft:recovery_compass",
        name: "Recovery Compass",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Finding the location of the player's last death",
            secondaryUse: "Retrieving items and experience lost on death"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Echo Shard x8", "Compass x1"]
        },
        specialNotes: [
            "Points to last death location in the current dimension; spins if alive/different dim",
            "Crafted with Compass + 8 Echo Shards (from Ancient Cities)",
            "Does not track dropped items, only death coords",
            "Ineffective in the End dimension in Bedrock Edition",
            "Crucial for retrieving gear before despawn timer expires"
        ],
        description: "The Recovery Compass points to a player's most recent death location. It only functions within the same dimension where the death occurred; otherwise, it spins randomly. It is crafted using eight Echo Shards (rare loot found in Ancient City chests) and a regular compass. This tool is vital for retrieving dropped items and experience before the five-minute despawn timer. In Bedrock Edition, the compass does not function in the End. Its unique tracking ability makes it a crucial item for high-risk exploration where losing valuable gear is a constant threat."
    },
    "minecraft:goat_horn": {
        id: "minecraft:goat_horn",
        name: "Goat Horn",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing a loud horn sound",
            secondaryUse: "Signaling other players over long distances"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Goats when they ram into solid blocks"]
        },
        specialNotes: [
            "Dropped when a Goat rams into Coal Ore, Copper Ore, Emerald Ore, Iron Ore, Log, Packed Ice, or Stone",
            "Has 8 sound variants: Ponder, Sing, Seek, Feel (Regular); Admire, Call, Yearn, Dream (Screaming)",
            "Has a cooldown of 7 seconds between uses",
            "Sound can be heard up to 256 blocks away",
            "Not stackable",
            "Can be used by Pillagers in Raids (specifically the 'Seek' horn sound)",
            "Does not have durability"
        ],
        description: "The Goat Horn is an instrument item dropped by Goats when they ram into specific hard blocks like logs, stone, packed ice, or ores. There are eight different variants of the horn, each producing a unique sound when used. Four variants (Ponder, Sing, Seek, Feel) are dropped by regular goats, while the other four (Admire, Call, Yearn, Dream) are obtained exclusively from Screaming Goats. When played, the horn emits a loud sound audible up to 256 blocks away, followed by a 7-second cooldown. This makes it an excellent tool for long-distance signaling in multiplayer."
    },
    "minecraft:firework_rocket": {
        id: "minecraft:firework_rocket",
        name: "Firework Rocket",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Propelling the player while gliding with Elytra",
            secondaryUse: "Creating decorative explosions in the sky"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Paper", "Gunpowder (1-3)", "Firework Star (optional)"]
        },
        specialNotes: [
            "Flight duration (1-3) depends on the amount of Gunpowder used.",
            "If crafted with a Firework Star, it explodes with color and shape effects.",
            "Rockets used for Elytra boosting should not have explosion effects to avoid damaging the player.",
            "Can be launched from a dispenser or crossbow.",
            "Explosion effects include: Small Ball, Large Ball, Star-shaped, Creeper-shaped, and Burst."
        ],
        description: "The Firework Rocket is a versatile item used for both decorative displays and functional transport. When crafted with Gunpowder and Paper, it creates a simple rocket; adding Firework Stars imparts colorful explosion effects. Its most critical use in survival is powering Elytra flight, providing a speed boost that enables long-distance travel. The duration of the rocket's flight (tier 1-3) is determined by the amount of gunpowder used in crafting."
    },
    "minecraft:firework_star": {
        id: "minecraft:firework_star",
        name: "Firework Star",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Determines the color, effect, and shape of Firework Rockets",
            secondaryUse: "Crafting item for decorative pyrotechnics"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Gunpowder", "Any Dye", "Special Ingredient (Optional)"]
        },
        specialNotes: [
            "Crafted with 1 Gunpowder, at least 1 Dye, and optional effect modifiers",
            "Modifiers: Diamond (Trail), Glowstone Dust (Twinkle), Fire Charge (Large Ball)",
            "More modifiers: Gold Nugget (Star-shaped), Feather (Burst), Mob Head (Creeper-shaped)",
            "Multiple dyes can be used to create multi-colored explosions",
            "Essential component for crafting meaningful Firework Rockets",
            "The star itself cannot be launched; it must be combined with Paper and Gunpowder"
        ],
        description: "The Firework Star is a crucial component used to customize the explosion of Firework Rockets. By combining gunpowder with various dyes and optional ingredients in a crafting grid, players can create stars that determine the color, shape, and additional effects of the resulting firework. Adding a Diamond creates a trail, while Glowstone Dust adds a twinkle effect. Different items like gold nuggets or mob heads can change the explosion's shape. Once crafted, the star is combined with paper and more gunpowder to create a rocket that will display the chosen effects when launched."
    },
    "minecraft:saddle": {
        id: "minecraft:saddle",
        name: "Saddle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Riding horses, donkeys, mules, and camels",
            secondaryUse: "Riding pigs and striders (requires steering item)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in chests (Dungeons, Nether Fortresses, etc.)", "Fishing treasure", "Trading with Leatherworker villagers", "Mob drop (Ravager, Strider with Zombified Piglin)"]
        },
        specialNotes: [
            "Required to control Horses, Donkeys, Mules, and Camels.",
            "Required to ride Pigs (needs Carrot on a Stick to steer).",
            "Required to ride Striders (needs Warped Fungus on a Stick to steer).",
            "Cannot be crafted in standard survival (uncraftable).",
            "Ravagers always drop a saddle on death."
        ],
        description: "A Saddle is an item that allows players to ride and control various mobs. It is essential for transportation using horses, donkeys, mules, and camels. It is also used to ride pigs and striders, though these require a Carrot on a Stick or Warped Fungus on a Stick respectively to steer. Saddles cannot be crafted and must be found in loot chests, fished up as treasure, traded from Master-level Leatherworker villagers, or obtained by killing a Ravager."
    },
    "minecraft:diamond_horse_armor": {
        id: "minecraft:diamond_horse_armor",
        name: "Diamond Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Equipping on a tamed horse to provide high-level protection",
            secondaryUse: "Decorative armor for horses"
        },
        specialNotes: [
            "Provides 11 armor points (5.5 chestplates) to horses.",
            "Can only be found in structure chests; cannot be crafted.",
            "Cannot be enchanted or repaired.",
            "Found in Dungeons, Desert Temples, End Cities, and more.",
            "Equipped by opening the horse's inventory while riding or nearby."
        ],
        description: "Diamond Horse Armor is the highest tier of protection available for horses in Minecraft Bedrock Edition. Unlike player armor, it cannot be crafted and must be discovered within chests in various structures throughout the world, such as Nether Fortresses, End Cities, and Bastion Remnants. When equipped on a tamed horse, it provides a significant boost to its survivability, granting 11 armor points to reduce incoming damage. This makes it an essential item for players who rely on horses for long-distance travel and combat."
    },
    "minecraft:item_frame": {
        id: "minecraft:item_frame",
        name: "Item Frame",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying and protecting items",
            secondaryUse: "Creating galleries and showcases"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x8", "Leather x1"]
        },
        specialNotes: [
            "Displays one item/block; right-click rotates (8 positions)",
            "Placed on any solid surface; protects contents from environments",
            "Glowing variant (Glow Ink Sac) emits light level 7",
            "Customizable with banners for background patterns",
            "Items retrieved by breaking the frame"
        ],
        description: "The Item Frame is a decorative entity used to display items and blocks on any solid surface. Right-clicking a placed frame with an item inserts it, while additional clicks rotate the displayed item through 8 positions. It protects contents from environmental damage and accidental usage. A Glowing Item Frame variant, crafted with Glow Ink Sacs or traded from Fletchers, illuminates the item and provides a light level of 7. Useful for maps, storage organization, and building detail, Item Frames can be placed on walls, ceilings, and floors."
    },
    "minecraft:armor_stand": {
        id: "minecraft:armor_stand",
        name: "Armor Stand",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying armor and equipment",
            secondaryUse: "Creating mannequins and decorations"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x6", "Stone Slab x1"]
        },
        specialNotes: [
            "Displays armor and hand-held items; immune to gravity",
            "Customizable poses via commands or redstone signals",
            "Placed on any surface; resists water flow",
            "Takes damage from explosions/wither but regenerates if not destroyed",
            "Crafted with 6 Sticks + 1 Stone Slab"
        ],
        description: "The Armor Stand is a decorative entity used to display armor, weapons, and tools. Crafted with sticks and a stone slab, it holds full armor sets and items in either hand. Perfect for organizing gear or creating museum displays, these entities are a staple for builders. Though they typically remain where placed, commands can be used to customize their pose, size, and appearance. Whether used for practical equipment storage or as a creative tool for detailed builds, the armor stand's versatile nature makes it an essential addition to any base."
    },
    "minecraft:ender_pearl": {
        id: "minecraft:ender_pearl",
        name: "Ender Pearl",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Teleportation by throwing the pearl",
            secondaryUse: "Crafting Eyes of Ender and traveling long distances"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Endermen", "Obtained through bartering with Piglins (4.73% chance)"]
        },
        specialNotes: [
            "Deals 5 damage (2.5 hearts) upon teleportation",
            "Has a 1-second cooldown between uses",
            "Used to craft Eyes of Ender (with Blaze Powder)",
            "Endermen drop 0-1 Ender Pearls; increased by Looting",
            "In Bedrock, throwing pearl into a portal might teleport you to world spawn"
        ],
        description: "An Ender Pearl is a versatile utility item primarily dropped by Endermen or obtained through Piglin bartering. When thrown, it teleports the player to where it lands, though this process deals a small amount of damage. Beyond mobility, Ender Pearls are critical for late-game progression, as they are a necessary ingredient for crafting Eyes of Ender to locate and activate End Portals. They can also be used in stasis chambers to allow for instant travel back to a base."
    },
    "minecraft:fire_charge": {
        id: "minecraft:fire_charge",
        name: "Fire Charge",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Lighting fires and activating TNT",
            secondaryUse: "Serving as a projectile for dispensers"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Blaze Powder", "Gunpowder", "Coal or Charcoal"]
        },
        specialNotes: [
            "Functions as a single-use alternative to flint and steel",
            "When used from a dispenser, it fires a straight-moving fireball",
            "Fired charges set entities and blocks on fire upon impact",
            "Can be used to light obsidian portals and campfires",
            "Does not create an explosion unless hitting TNT"
        ],
        description: "A Fire Charge is a consumable item used to ignite fires or act as a projectile. When used by a player, it immediately starts a fire on a block, similar to flint and steel but with only one use per item. When placed in a dispenser, it is fired as a small fireball that travels in a straight line, setting fire to anything it hits. It is often used in traps, automated defense systems, or as an alternative ignition source when flint is unavailable."
    },
    "minecraft:experience_bottle": {
        id: "minecraft:experience_bottle",
        name: "Bottle o' Enchanting",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Throwing to release experience orbs",
            secondaryUse: "Quickly gaining XP for enchanting and anvil use"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Traded by Cleric villagers", "Found as generated loot in some structures"]
        },
        specialNotes: [
            "Shatters on impact and releases experience orbs",
            "Grants 3-11 XP (average 7) per bottle",
            "Stackable up to 64, unlike most bowl or bottle consumables",
            "Renewable through trading with Cleric villagers",
            "Useful for topping up levels at an enchanting table or anvil"
        ],
        description: "Bottle o' Enchanting is a throwable item that breaks on impact and releases experience orbs worth 3-11 XP (7 on average). It is commonly used to quickly gain levels for enchanting or to supply experience for anvil repairs when you are just short on XP. In Bedrock Edition it is renewable through Cleric villager trades, and it can also appear as generated loot in some structure chests."
    },
    "minecraft:end_crystal": {
        id: "minecraft:end_crystal",
        name: "End Crystal",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Respawning the Ender Dragon",
            secondaryUse: "Decorative or as an explosive trap"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Glass x7", "Eye of Ender x1", "Ghast Tear x1"]
        },
        specialNotes: [
            "Can only be placed on obsidian or bedrock blocks",
            "Heals the Ender Dragon if it is within range",
            "Explodes violently when attacked, even with a single punch",
            "Four crystals are required to respawn the Ender Dragon at the exit portal",
            "Highly dangerous due to large explosion radius and damage"
        ],
        description: "An End Crystal is a powerful and volatile item primarily used to respawn the Ender Dragon. To initiate the respawn process, four crystals must be placed on the edges of the exit portal in the End. In addition to their intended purpose, they are often used by players as high-damage explosive traps because they detonate instantly when hit. They can only be placed on obsidian or bedrock blocks. When active in the End, they project a healing beam toward the dragon, making their destruction a priority during the boss fight."
    },
    "minecraft:enchanted_book": {
        id: "minecraft:enchanted_book",
        name: "Enchanted Book",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying enchantments to items via an Anvil",
            secondaryUse: "Combining with other enchanted books to upgrade enchantment levels"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Enchanting Table, Fishing, Loot Chests, or Librarian Villagers"]
        },
        specialNotes: [
            "Allows applying specific enchantments to gear that may not be available via Enchanting Table",
            "Can be combined in an anvil to create higher-level enchantments (e.g., Sharpness IV + IV = V)",
            "Librarian villagers sell specific enchanted books for emeralds and a regular book",
            "Found as treasure while fishing (0.8% chance in Bedrock)",
            "Required to apply certain 'Treasure' enchantments like Mending or Frost Walker"
        ],
        description: "Enchanted Books are specialized items that store magical enchantments for later use. They are the primary way to apply specific buffs, such as Mending or Silk Touch, to tools, weapons, and armor using an Anvil. Players can obtain these books through various methods, including using an Enchanting Table on regular books, fishing, or trading with Librarian villagers. Because they allow for precise control over equipment upgrades and are necessary for applying powerful treasure enchantments, they are an essential resource for late-game gear optimization."
    },
    "minecraft:bucket": {
        id: "minecraft:bucket",
        name: "Bucket",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Carrying and placing liquids (water, lava, milk, powder snow)",
            secondaryUse: "Catching fish and axolotls"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["3x Iron Ingot"]
        },
        specialNotes: [
            "Can hold water, lava, milk, powder snow, or live fish/axolotls",
            "Empty buckets stack up to 16, but filled buckets only stack to 1",
            "Used to milk cows, mooshrooms, and goats",
            "Lava buckets can be used as fuel in furnaces (smelts 100 items)",
            "Water buckets can save players from fall damage or create infinite water sources",
            "Crafted with 3 iron ingots in a V-shape in the crafting grid"
        ],
        description: "The Bucket is a versatile utility item crafted from three iron ingots. It serves multiple essential functions including transporting liquids like water and lava, milking cows and goats, collecting powder snow, and capturing aquatic mobs such as fish and axolotls. Empty buckets stack up to 16, but once filled, they can only stack individually. Buckets are fundamental for farming, building, redstone contraptions, and survival tactics such as water elevators or using water to prevent fall damage. Lava-filled buckets serve as efficient fuel, smelting 100 items per bucket."
        },
        "minecraft:tripwire_hook": {
        id: "minecraft:tripwire_hook",
        name: "Tripwire Hook",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
        primaryUse: "Crafting Tripwires and Trapped Chests",
        secondaryUse: "Redstone detection and automation systems"
        },
        crafting: {
        recipeType: "Shaped",
        ingredients: ["Iron Ingot", "Stick", "Wood Plank"]
        },
        specialNotes: [
        "Used to craft Tripwire Hook (placed 4 in a line) connected with String",
        "Creates an invisible tripwire that triggers redstone when crossed by entities",
        "Shears can break tripwire without triggering it",
        "Used in crafting Trapped Chests (shapeless recipe with Chest and Tripwire Hook)",
        "Dropped by breaking Tripwire Hooks in Jungle Temples",
        "Essential for traps, mob detection, and automated redstone circuits"
        ],
        description: "The Tripwire Hook is a redstone component used to create detection systems and traps. When placed in a line of up to 40 blocks and connected with string, it creates a tripwire that activates a redstone signal when any entity passes through it. This mechanism is invaluable for creating automatic doors, mob spawners, trap defenses, and hidden alarm systems. Tripwire Hooks are also a key ingredient in crafting Trapped Chests, which appear identical to regular chests but emit a redstone signal when opened. While commonly found in Jungle Temple loot chests, they are easily crafted for early-game redstone automation."
        },
        "minecraft:writable_book": {
        id: "minecraft:writable_book",
        name: "Book and Quill",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Writing and storing custom text",
            secondaryUse: "Creating in-game guides, stories, or signs"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Book", "Ink Sac", "Feather"]
        },
        specialNotes: [
            "Can contain up to 100 pages of text (256 characters per page in Bedrock)",
            "Once signed, becomes a 'Written Book' with author and title",
            "Written Books can be copied by crafting with a Book and Quill",
            "Cannot be edited after signing; the original can make up to 8 copies",
            "Useful for leaving messages, creating maps, or building adventure maps",
            "Signed books show author name and generation (Original, Copy of Original, Copy of Copy)"
        ],
        description: "The Book and Quill is a unique item that allows players to write and store custom text within the game. Crafted using a book, ink sac, and feather, it provides up to 100 pages with 256 characters per page in Bedrock Edition. Players can use it to document adventures, create in-game guides, leave messages, or design narrative elements for adventure maps. Once complete, the book can be signed to create a Written Book, permanently recording the author's name and title. Signed books can be duplicated up to 8 times, making them valuable for sharing information across multiplayer worlds."
    },
    "minecraft:trial_key": {
        id: "minecraft:trial_key",
        name: "Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking Vaults in Trial Chambers",
            secondaryUse: "Can be converted into an Ominous Trial Key (via Ominous Bottle event)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Trial Spawners (50% chance)"]
        },
        specialNotes: [
            "Obtained by defeating all waves of a Trial Spawner (50% drop chance)",
            "Used to unlock standard Vaults for loot rewards",
            "Consumed upon use",
            "Cannot unlock Ominous Vaults",
            "Added in the Tricky Trials update (1.21)"
        ],
        description: "The Trial Key is a special item introduced in the 1.21 Tricky Trials update, found exclusively within Trial Chambers. It is obtained as a reward for defeating all waves of enemies from a Trial Spawner, with a 50% drop chance. Its primary purpose is to unlock Vaults found throughout the structure, which dispense valuable loot such as enchanted books, diamonds, and pottery sherds. Once used on a Vault, the key is consumed, and the Vault opens to provide rewards to the player."
    },
    "minecraft:wither_skeleton_skull": {
        id: "minecraft:wither_skeleton_skull",
        name: "Wither Skeleton Skull",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Summoning the Wither boss",
            secondaryUse: "Decorative block and wearable head armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Wither Skeletons in Nether Fortresses"]
        },
        specialNotes: [
            "Rare drop from Wither Skeletons (2.5% chance; increased by Looting)",
            "Three skulls are required to summon the Wither boss",
            "Can be worn as a helmet (purely decorative)",
            "Reduces the detection range of Wither Skeletons by 50% when worn"
        ],
        description: "The Wither Skeleton Skull is a rare and essential item for late-game progression, primarily used to summon the Wither boss. It is obtained as a rare drop from Wither Skeletons found within Nether Fortresses. Beyond its use in summoning, it can be placed as a decorative block or worn by the player as a helmet, which has the functional benefit of reducing the detection range of other Wither Skeletons. Its dark, skeletal appearance makes it a popular trophy for seasoned adventurers."
    },
    "minecraft:dragon_head": {
        id: "minecraft:dragon_head",
        name: "Dragon Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Redstone-interactive decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found on the front of End Ships in End Cities"]
        },
        specialNotes: [
            "Found exclusively on the prow of End Ships",
            "Mouth opens and closes repeatedly when the player wearing it moves",
            "When placed as a block, the mouth moves if powered by a redstone signal",
            "The largest of all mob head items in the game"
        ],
        description: "The Dragon Head is a unique decorative item found exclusively on End Ships within the End Cities. This large, detailed head can be worn as a helmet or placed as a block. One of its most distinctive features is its animated mouth; when worn by a moving player or powered by a redstone signal as a block, the mouth will continuously open and close. It serves as a major trophy of exploration and a status symbol for players who have conquered the End's most distant structures."
    },
    "minecraft:piglin_head": {
        id: "minecraft:piglin_head",
        name: "Piglin Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Piglin detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Piglins killed by a Charged Creeper"]
        },
        specialNotes: [
            "Added in the 1.20 Trails & Tales update",
            "Dropped when a Piglin or Piglin Brute is killed by a Charged Creeper explosion",
            "Ear flutters when the player wearing it moves or when powered by redstone",
            "Reduces the detection range of Piglins by 50% when worn"
        ],
        description: "The Piglin Head is a decorative mob head introduced in the 1.20 update. Like other mob heads, it is obtained through the rare event of a Charged Creeper killing a Piglin. When worn, the head's ears will flap as the player moves, a feature that can also be triggered by redstone when the head is placed as a block. Functionally, wearing the head reduces the detection range of Piglins, making it useful for navigating the Nether safely. It provides a unique aesthetic that captures the iconic look of the Piglin mobs."
    }
};
