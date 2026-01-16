// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// lead, trial key, ominous trial key, written book, book and quill,
// enchanted book, knowledge book, bundle, goat horn (all variants),
// painting, item frame, glow item frame, armor stand, end crystal,
// experience bottle, firework star, wolf armor, totem of undying,
// bucket, dragon egg, oak boat, oak boat with chest
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
    "minecraft:iron_horse_armor": {
        id: "minecraft:iron_horse_armor",
        name: "Iron Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Protecting a tamed horse",
            secondaryUse: "Increasing a horse's armor rating by 5 points"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests"]
        },
        specialNotes: [
            "Found in Dungeons, Strongholds, Villages, Nether Fortresses, and Jungle Temples",
            "Can be equipped on tamed horses only",
            "Does not have durability and never breaks"
        ],
        description: "Iron Horse Armor is a specialized piece of equipment designed to protect tamed horses from damage. Unlike player armor, it cannot be crafted and must be discovered within loot chests in various world structures. When equipped, it provides 5 points of armor to the horse, significantly increasing its survival chances against mobs and other hazards. It is a durable item that does not wear out over time, making it a permanent upgrade for a player's mount."
    },
    "minecraft:golden_horse_armor": {
        id: "minecraft:golden_horse_armor",
        name: "Golden Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Protecting a tamed horse",
            secondaryUse: "Increasing a horse's armor rating by 7 points"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests"]
        },
        specialNotes: [
            "Found in Dungeons, Villages (Weaponsmith chests), Nether Fortresses, Bastion Remnants, Ruined Portals, Desert Pyramids, Jungle Temples, Strongholds (Altar chests), and End Cities",
            "Provides more protection than iron horse armor but less than diamond",
            "Can be equipped on tamed horses only"
        ],
        description: "Golden Horse Armor offers a mid-to-high tier of protection for tamed horses, granting them 7 armor points. Found in various loot chests across the Overworld, the Nether, and The End, it is particularly common in Bastion Remnants and Ruined Portals. While gold tools and player armor are known for low durability, Golden Horse Armor is indestructible, providing a consistent defensive boost without the need for repair or replacement."
    },
    "minecraft:leather_horse_armor": {
        id: "minecraft:leather_horse_armor",
        name: "Leather Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Protecting and decorating a tamed horse",
            secondaryUse: "Can be dyed in a cauldron to change its color"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["7x Leather"]
        },
        specialNotes: [
            "The only type of horse armor that can be crafted in Bedrock Edition",
            "Can be dyed into 12,326,391 different colors using cauldrons",
            "Provides 3 armor points to the horse"
        ],
        description: "Leather Horse Armor is the entry-level protection for horses and is unique as the only craftable horse armor in Minecraft Bedrock Edition. It is made from seven pieces of leather and provides a modest 3 armor points. Its most notable feature is its customization; players can use dyed water in a cauldron to color the armor, allowing for millions of possible color combinations to personalize their steeds."
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
    "minecraft:written_book": {
        id: "minecraft:written_book",
        name: "Written Book",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Reading and sharing signed text",
            secondaryUse: "Displaying books on lecterns and storing them in chiseled bookshelves"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Sign a Book and Quill"]
        },
        specialNotes: [
            "Created by signing a Book and Quill; the text cannot be edited afterward",
            "Stacks to 16, but only identical books (including generation) stack together",
            "Generations: Original, Copy of Original, Copy of Copy, Tattered",
            "Only Originals and Copies of Original can be duplicated in a crafting table",
            "Can be placed on a Lectern; the displayed page outputs a redstone signal",
            "Can be stored in a Chiseled Bookshelf by using it while holding the book"
        ],
        description: "A Written Book is a signed Book and Quill that locks its text and records a title and author on the cover. In Bedrock Edition, signed books can be displayed on a lectern for reading and redstone output based on the current page. Originals (and Copies of Original) can be duplicated in a crafting table to share guides, rules, or stories with other players."
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
    },
    "minecraft:minecart": {
        id: "minecraft:minecart",
        name: "Minecart",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting players and mobs on rails",
            secondaryUse: "Base for crafting specialized minecarts (Chest, Hopper, TNT)"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["5x Iron Ingot"]
        },
        specialNotes: [
            "Placed on rails by using it on them; broken by attacking it",
            "Can carry players and most mobs (including hostile ones)",
            "Speeds depend on the type of rail used (Powered vs Normal)",
            "Can be combined with Chests, Hoppers, or TNT in a crafting grid",
            "In Bedrock Edition, minecarts can be placed on a rail by a dispenser",
            "Minecarts can pick up mobs that walk into them while on a rail"
        ],
        description: "A Minecart is a fundamental vehicle used for transportation on rail systems. Crafted from five iron ingots, it can carry players, mobs, and items across large distances efficiently. Minecarts are placed on rails and can be propelled by Powered Rails or gravity. They serve as the base for several functional variants, including Minecarts with Chests, Hoppers, and TNT, which are essential for automation and complex rail networks. In Bedrock Edition, they are frequently used in both survival transport and intricate redstone machinery."
    },
    "minecraft:chest_minecart": {
        id: "minecraft:chest_minecart",
        name: "Minecart with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting items on rails",
            secondaryUse: "Mobile storage in minecart systems"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Chest", "Minecart"]
        },
        specialNotes: [
            "Combines a Minecart and a Chest for item transport",
            "Has 27 slots of inventory space, same as a single chest",
            "Drops itself and its contents when broken",
            "Can be accessed by opening the GUI or using Hoppers",
            "Cannot carry players or mobs"
        ],
        description: "A Minecart with Chest is a utility vehicle that combines the mobility of a minecart with the storage capacity of a single chest. It allows players to transport large quantities of items across rail systems, making it essential for automated storage and delivery networks. In Bedrock Edition, it is crafted by combining a minecart and a chest in a crafting grid. When broken, it drops as a single item, spilling its inventory onto the ground. It can interact with hoppers placed under the track to load or unload items automatically."
    },
    "minecraft:hopper_minecart": {
        id: "minecraft:hopper_minecart",
        name: "Minecart with Hopper",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Collecting items from above rails",
            secondaryUse: "Transferring items between containers rapidly"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Hopper", "Minecart"]
        },
        specialNotes: [
            "Pulls items from the world and containers above it",
            "Sucks up items much faster than a regular hopper",
            "Can pick up items through full blocks directly above the rail",
            "Can be disabled by a powered Activator Rail",
            "Has 5 slots of inventory space"
        ],
        description: "A Minecart with Hopper is a specialized vehicle designed for item collection and transport. It possesses a powerful suction ability that allows it to pull loose items from the world or extract items from containers located directly above the track. Unlike stationary hoppers, it can collect items through full blocks, making it highly effective for farm collection systems where the collection mechanism needs to be hidden. Its collection function can be toggled using Activator Rails, allowing for precise control in automated sorting systems."
    },
    "minecraft:tnt_minecart": {
        id: "minecraft:tnt_minecart",
        name: "Minecart with TNT",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Creating mobile explosions",
            secondaryUse: "Clearing areas or breaching walls remotely"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["TNT", "Minecart"]
        },
        specialNotes: [
            "Explodes when passing over a powered Activator Rail",
            "Explosion power depends on the minecart's speed",
            "Detonates instantly upon high-speed collision",
            "Does not destroy rails or blocks under the track when on rails",
            "Can be dispensed onto rails"
        ],
        description: "A Minecart with TNT is a volatile vehicle used for controlled demolitions and traps. It detonates after a short delay when passing over a powered Activator Rail, or instantly if it crashes into a block or entity at high speed. The explosion's radius and damage are directly proportional to the cart's velocity at the moment of impact. Uniquely, when detonated while on a rail, it is designed not to destroy the track or the blocks immediately beneath it, allowing for reusable blasting lines in mining or terraforming operations."
    },
    "minecraft:oak_boat": {
        id: "minecraft:oak_boat",
        name: "Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities",
            secondaryUse: "Transporting mobs across land and water"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Oak Planks x5"]
        },
        specialNotes: [
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Since 1.20.10, no longer requires a wooden shovel to craft in Bedrock",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Oak Boat is a primary water transportation vessel in Minecraft Bedrock Edition. It can accommodate up to two passengers, making it ideal for moving players, pets, or even hostile mobs across large bodies of water. Since the 1.20.10 update, it is crafted using five oak planks, matching the Java Edition recipe. Boats are also famous for their extreme speed on ice and their ability to negate fall damage, though steering on land is considerably slower. In Bedrock, a unique feature allows boats to pick up mobs even while a player is currently occupying a seat."
    },
    "minecraft:spruce_boat": {
        id: "minecraft:spruce_boat",
        name: "Spruce Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with spruce wood appearance",
            secondaryUse: "Matching spruce wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Spruce Planks x5"]
        },
        specialNotes: [
            "Identical functionality to oak boat but with spruce wood texture",
            "Can carry two passengers, including mobs and players",
            "Useful for matching spruce wood builds and forest-themed bases",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Spruce Boat is a variant of the standard boat crafted from spruce planks, offering the same functionality as the oak boat but with a darker, more rustic appearance. It provides the same two-passenger capacity and water transportation capabilities while maintaining aesthetic consistency with spruce wood builds and forest-themed structures. This boat is particularly popular among players building in colder, forest biomes or those who prefer the darker aesthetic of spruce wood. All the benefits of standard boats apply, including enhanced speed on ice and fall damage protection."
    },
    "minecraft:raft": {
        id: "minecraft:raft",
        name: "Raft",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Alternative water transportation using boat oars for manual propulsion",
            secondaryUse: "Building floating structures and mobile bases"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Logs x6", "Sticks x2"]
        },
        specialNotes: [
            "Requires boat oar for manual rowing and propulsion",
            "Can be used to carry players and mobs across water",
            "Crafted from logs rather than planks, creating a more rustic appearance",
            "Can be used as a base for building floating structures",
            "Boat oar must be crafted separately and used to control movement",
            "Larger footprint than standard boats, offering more building potential",
            "In Bedrock, can pick up mobs when used as a water vehicle"
        ],
        description: "The Raft is a unique water transportation item offering a primitive and customizable approach to water travel. Unlike traditional boats, rafts require a separate boat oar for propulsion, giving players precise control over their watercraft. Rafts are crafted from logs and sticks, creating a larger, more rustic appearance ideal for building floating structures and mobile bases. The larger footprint provides creative building opportunities while maintaining full functionality for transporting players and mobs across water."
    },
    "minecraft:boat_oar": {
        id: "minecraft:boat_oar",
        name: "Boat Oar",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Propelling rafts across water surfaces",
            secondaryUse: "Crafting material for raft construction and modifications"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick", "Wood Slab"]
        },
        specialNotes: [
            "Essential tool for operating rafts - rafts cannot move without an oar",
            "Can be used on rafts to propel them forward through water",
            "Right-click while holding oar on raft to move in the direction you're facing",
            "Essential for raft-based exploration and transportation",
            "Can be combined with other items in crafting recipes",
            "Each oar can be used indefinitely without durability loss",
            "Required component for the raft crafting recipe in some versions"
        ],
        description: "The Boat Oar is a specialized tool item used exclusively for propelling rafts across water. Unlike boats that move automatically, rafts require manual propulsion using a boat oar, giving players precise control over their watercraft. The oar is crafted from a stick and wood slab, and when used on a raft, allows for directional movement across water surfaces. This manual control system makes rafts useful for precise navigation in tight spaces or for hands-on water transportation."
    },
    "minecraft:mangrove_boat": {
        id: "minecraft:mangrove_boat",
        name: "Mangrove Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with mangrove wood appearance",
            secondaryUse: "Matching mangrove wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Mangrove Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with red mangrove wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Mangrove Planks (no shovel required in 1.20+)",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Mangrove Boat is a variant of the standard boat crafted from mangrove planks, introduced in the 1.19 Wild Update. It features the distinctive reddish hue of mangrove wood, making it an excellent choice for navigating swamps or matching red-wood themed builds. Like other boats in Bedrock Edition, it accommodates two passengers and offers fall damage protection. It can be crafted using five mangrove planks, providing a stylish way to traverse water bodies."
    },
    "minecraft:cherry_boat": {
        id: "minecraft:cherry_boat",
        name: "Cherry Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with cherry wood appearance",
            secondaryUse: "Matching cherry wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cherry Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with pink cherry wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Cherry Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Cherry Boat is a vibrant pink boat variant crafted from cherry planks, introduced in the 1.20 Trails & Tales update. It functions identically to other wooden boats, capable of carrying two passengers and moving swiftly across water or ice. Its unique pink color makes it a favorite for decorative purposes and for players who enjoy the aesthetic of the cherry grove biome. It requires five cherry planks to craft and offers the same fall damage negation as other boats."
    },
    "minecraft:bamboo_raft": {
        id: "minecraft:bamboo_raft",
        name: "Bamboo Raft",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with a raft design",
            secondaryUse: "Aesthetic alternative to traditional boats"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bamboo Planks x5"]
        },
        specialNotes: [
            "Functionally identical to boats but with a flat raft model",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Bamboo Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Bamboo Raft is a distinct vehicle introduced in the 1.20 Trails & Tales update, offering a flat, open design compared to traditional walled boats. Despite its different appearance, it functions identically to standard boats, allowing for two passengers and high-speed travel on ice. Crafted from five bamboo planks, the raft provides a unique aesthetic that fits well with jungle or tropical themed builds. It also shares the ability to negate fall damage and transport mobs across water."
    },
    "minecraft:birch_boat": {
        id: "minecraft:birch_boat",
        name: "Birch Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with birch wood appearance",
            secondaryUse: "Matching birch wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Birch Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with pale birch wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Birch Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Birch Boat is a variant of the standard boat crafted from birch planks. It shares all the functional characteristics of other wooden boats, including the ability to carry two passengers and high speed on ice. Its distinguishing feature is its pale wood texture, matching the aesthetic of birch forests. Like all boats in Bedrock Edition, it is crafted from five planks and requires no shovel. It serves as a reliable vehicle for water travel and transporting mobs."
    },
    "minecraft:painting": {
        id: "minecraft:painting",
        name: "Painting",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing decorative art on walls",
            secondaryUse: "Creating secret doors and hidden passages"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x8", "Wool (any color) x1"]
        },
        specialNotes: [
            "Can be placed in different sizes (1x1 to 4x4) depending on available space",
            "There are 30 different paintings available in Bedrock Edition",
            "Can be placed over doors or openings to create hidden passages",
            "Breaking a painting drops the item for relocation"
        ],
        description: "Paintings are decorative entities that can be placed on vertical surfaces. They come in various sizes, from small 1x1 canvases to large 4x4 masterpieces, randomly chosen based on the space available when placed. In Bedrock Edition, there are 30 unique painting designs. Beyond decoration, paintings are commonly used to create secret doors, as players and mobs can walk through them if there is an opening behind the canvas."
    },
    "minecraft:glow_item_frame": {
        id: "minecraft:glow_item_frame",
        name: "Glow Item Frame",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying items with a glowing background",
            secondaryUse: "Lighting up displayed items in the dark"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Item Frame", "Glow Ink Sac"]
        },
        specialNotes: [
            "Makes the displayed item clearly visible even in total darkness",
            "Does not increase the light level of the surrounding area (decorative only)",
            "Obtained by combining a regular item frame with a glow ink sac from a glow squid",
            "Can be placed on any side of most blocks, including top and bottom"
        ],
        description: "The Glow Item Frame is a specialized version of the standard item frame that allows displayed items to remain fully visible in the dark. It is crafted by combining a regular item frame with a glow ink sac. While it makes the item glow with a bright background, it does not actually emit light into the environment. This makes it perfect for maps, signage, or trophy rooms where visibility is needed regardless of lighting conditions."
    },
    "minecraft:oak_chest_boat": {
        id: "minecraft:oak_chest_boat",
        name: "Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation with mobile storage",
            secondaryUse: "Transporting a single player or mob plus items"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Oak Boat", "Chest"]
        },
        specialNotes: [
            "Provides 27 slots of storage, equivalent to a single chest",
            "Can only hold one passenger (player or mob) instead of the two allowed in standard boats",
            "When broken, it drops both the boat with chest item and the contents of the chest",
            "Useful for long-distance ocean exploration or moving base materials across water"
        ],
        description: "The Oak Boat with Chest is a mobile storage vehicle that combines the utility of a boat with the capacity of a chest. It allows players to transport up to 27 slots of items across water bodies while still being able to pilot the vessel. Due to the space taken up by the chest, it can only carry a single passenger. This boat is an essential tool for explorers and players moving large quantities of resources between coastal bases."
    },
    "minecraft:command_block_minecart": {
        id: "minecraft:command_block_minecart",
        name: "Minecart with Command Block",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Executing commands on rails",
            secondaryUse: "Creating mobile command systems"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained via commands or Creative inventory"]
        },
        specialNotes: [
            "Cannot be crafted; must be obtained using /give or Pick Block in Creative",
            "Executes its command when passing over a powered Activator Rail",
            "Checks the command once every game tick if on an always-active circuit, but on rails it depends on activation",
            "Useful for adventure maps and automated systems",
            "Drops as an item when broken in Creative mode (contents saved if Ctrl+Pick Block used)"
        ],
        description: "The Minecart with Command Block is a utility vehicle that combines a minecart with an Impulse Command Block. It allows for the execution of commands as the cart travels along a rail system. The command stored within is triggered when the minecart passes over a powered Activator Rail. This item is not available in the Survival inventory and cannot be crafted; it must be obtained via commands or the Creative inventory. It is a powerful tool for map makers and technical players creating complex, mobile automation systems."
    },
    "minecraft:jungle_boat": {
        id: "minecraft:jungle_boat",
        name: "Jungle Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with jungle wood appearance",
            secondaryUse: "Matching jungle wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Jungle Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with reddish-brown jungle wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Jungle Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Jungle Boat is a variant of the standard boat crafted from jungle planks. It offers the same reliable water transportation for two passengers as other wooden boats but features the distinct reddish-brown hue of jungle wood. This makes it an ideal choice for players navigating jungle rivers or seeking to match the aesthetic of jungle treehouses and builds. Like all boats in Bedrock Edition, it is crafted from five planks without a shovel and provides immunity to fall damage when occupied."
    },
    "minecraft:acacia_boat": {
        id: "minecraft:acacia_boat",
        name: "Acacia Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two passengers",
            secondaryUse: "Fast travel on ice"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Acacia Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with orange acacia wood texture",
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Nullifies fall damage for all passengers when falling"
        ],
        description: "The Acacia Boat is a variant of the standard boat crafted from acacia planks. It features the distinctive orange color of acacia wood, making it a popular choice for players in savanna biomes. Like all boats in Minecraft Bedrock Edition, it can carry up to two passengers and is famous for its high speed when placed on ice. It is crafted from five acacia planks in a 'U' shape and provides a reliable way to traverse oceans and rivers."
    },
    "minecraft:dark_oak_boat": {
        id: "minecraft:dark_oak_boat",
        name: "Dark Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two passengers",
            secondaryUse: "Fast travel on ice"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Dark Oak Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with dark oak wood texture",
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Nullifies fall damage for all passengers when falling"
        ],
        description: "The Dark Oak Boat is a variant of the standard boat crafted from dark oak planks. It features the characteristic dark brown color of dark oak, providing a solid and rustic aesthetic. Functionally identical to other boats, it can carry two passengers and travels extremely fast on ice surfaces. It is a reliable tool for exploration and mob transport, especially for players who prefer the darker wood tones in their equipment."
    },
    "minecraft:spruce_chest_boat": {
        id: "minecraft:spruce_chest_boat",
        name: "Spruce Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Spruce Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Spruce Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Ideal for long-distance transport of resources across oceans"
        ],
        description: "The Spruce Boat with Chest is a utility vehicle that provides 27 slots of storage while maintaining water mobility. Crafted by combining a Spruce Boat with a Chest, it allows players to move large quantities of items across water. Because the chest ocupaies the second seat, it can only carry one passenger. This makes it a vital tool for resource gathering trips and moving between coastal bases."
    },
    "minecraft:birch_chest_boat": {
        id: "minecraft:birch_chest_boat",
        name: "Birch Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Birch Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Birch Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Matches the pale aesthetic of birch wood"
        ],
        description: "The Birch Boat with Chest offers mobile storage for players who prefer the light-colored birch aesthetic. By combining a Birch Boat with a Chest, players gain a vessel capable of carrying 27 item stacks across oceans and rivers. While it sacrifices the second passenger seat for storage, it is an invaluable asset for exploration and moving base supplies across water."
    },
    "minecraft:jungle_chest_boat": {
        id: "minecraft:jungle_chest_boat",
        name: "Jungle Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Jungle Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Jungle Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the reddish-brown jungle wood texture"
        ],
        description: "The Jungle Boat with Chest is a mobile inventory solution crafted from a Jungle Boat and a Chest. It provides 27 slots of storage for aquatic journeys, perfect for transporting loot from tropical explorations. As with all chest boats, it accommodates only one passenger. It remains a reliable and stylish way to move large amounts of cargo across jungle rivers and open seas."
    },
    "minecraft:acacia_chest_boat": {
        id: "minecraft:acacia_chest_boat",
        name: "Acacia Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Acacia Boat", "Chest"]
        },
        specialNotes: [
            "Combines an Acacia Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the bright orange acacia wood texture"
        ],
        description: "The Acacia Boat with Chest is a mobile inventory solution crafted from an Acacia Boat and a Chest. It provides 27 slots of storage for aquatic journeys, perfect for transporting loot across savanna coastal regions. As with all chest boats, it accommodates only one passenger. It remains a reliable and stylish way to move large amounts of cargo across rivers and open seas."
    },
    "minecraft:dark_oak_chest_boat": {
        id: "minecraft:dark_oak_chest_boat",
        name: "Dark Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Dark Oak Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Dark Oak Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the dark brown dark oak wood texture"
        ],
        description: "The Dark Oak Boat with Chest is a sturdy mobile storage vessel crafted by combining a Dark Oak Boat with a Chest. It provides 27 slots of storage, making it ideal for hauling heavy loads across deep oceans and rivers. While it only accommodates a single passenger, its large storage capacity makes it indispensable for moving resources to new base locations."
    },
    "minecraft:mangrove_chest_boat": {
        id: "minecraft:mangrove_chest_boat",
        name: "Mangrove Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Mangrove Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Mangrove Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the deep red mangrove wood texture"
        ],
        description: "The Mangrove Boat with Chest is a specialized vessel introduced for swamp and mangrove exploration. By combining a Mangrove Boat with a Chest, players gain 27 slots of mobile storage. It's perfect for gathering mangrove wood and other swamp resources. Like other chest boats, it carries one passenger and provides a reliable way to move goods through narrow waterways."
    },
    "minecraft:cherry_chest_boat": {
        id: "minecraft:cherry_chest_boat",
        name: "Cherry Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Cherry Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Cherry Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the pink cherry wood texture"
        ],
        description: "The Cherry Boat with Chest is a vibrant pink mobile storage unit introduced in the Trails & Tales update. Crafted from a Cherry Boat and a Chest, it offers 27 slots of inventory space for sea-bound adventures. It provides a unique aesthetic for transport and is as functional as it is colorful, allowing players to move their valuables across water with ease."
    },
    "minecraft:bamboo_chest_raft": {
        id: "minecraft:bamboo_chest_raft",
        name: "Bamboo Raft with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bamboo Raft", "Chest"]
        },
        specialNotes: [
            "Combines a Bamboo Raft with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the raft and the chest contents when broken",
            "Features the unique flat bamboo raft design"
        ],
        description: "The Bamboo Raft with Chest provides a flat, open platform for water travel with the added benefit of 27 storage slots. Crafted using a Bamboo Raft and a Chest, it is perfect for tropical-themed transport and exploration. While it only supports one passenger, its distinctive Look and large capacity make it a favorite for players navigating jungle biomes and island archipelagos."
    },
    "minecraft:zombie_head": {
        id: "minecraft:zombie_head",
        name: "Zombie Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable accessory",
            secondaryUse: "Used on Note Blocks to play zombie sounds"
        },
        crafting: {
            recipeType: "Special Drop",
            ingredients: ["Dropped by Zombie killed by a Charged Creeper"]
        },
        specialNotes: [
            "Reduces detection range of zombies by 50% when worn.",
            "Can be placed on blocks in 16 different rotations.",
            "Plays zombie ambient sounds when placed on a Note Block.",
            "Found occasionally in structure chests like Ancient Cities."
        ],
        description: "The Zombie Head is a rare decorative item representing the head of a zombie. It can be worn as a helmet, which provides a stealth advantage by cutting the detection range of other zombies in half. Builders often use it for macabre decorations or spooky detail. A unique feature in Bedrock Edition allows it to be placed on a Note Block to emit realistic zombie groans, making it a valuable tool for atmospheric sound design in adventure maps."
    },
    "minecraft:skeleton_skull": {
        id: "minecraft:skeleton_skull",
        name: "Skeleton Skull",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable accessory",
            secondaryUse: "Used on Note Blocks to play skeleton sounds"
        },
        crafting: {
            recipeType: "Special Drop",
            ingredients: ["Dropped by Skeleton killed by a Charged Creeper"]
        },
        specialNotes: [
            "Reduces detection range of skeletons by 50% when worn.",
            "Displays bone-rattling sound effects when placed on a Note Block.",
            "Generates naturally as placed blocks within Ancient City structures (specifically within the barracks and ruins sub-structures).",
            "Can be worn by mobs capable of wearing armor."
        ],
        description: "The Skeleton Skull is a decorative block that looks like the head of a skeleton. Obtaining one typically requires a charged creeper to kill a skeleton, or finding one in an Ancient City, making it a trophy item for many players. When worn, it helps the player blend in, reducing the distance at which skeletons will spot them. In Bedrock Edition, it can also be used as a sound-effect component for Note Blocks, producing the iconic bone-rattling noise of a skeleton when activated."
    },
    "minecraft:creeper_head": {
        id: "minecraft:creeper_head",
        name: "Creeper Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable accessory",
            secondaryUse: "Used on Note Blocks to play creeper sounds"
        },
        crafting: {
            recipeType: "Special Drop",
            ingredients: ["Dropped by Creeper killed by another Charged Creeper"]
        },
        specialNotes: [
            "Reduces detection range of creepers by 50% when worn.",
            "Plays the terrifying 'Sss' fuse sound when placed on a Note Block.",
            "Can be used in a crafting table to make a Creeper Charge pattern.",
            "Highly valued as a rare trophy from charged creeper explosions."
        ],
        description: "The Creeper Head is one of the most recognizable heads in Minecraft. It is a rare drop achieved only when a charged creeper kills another creeper. Wearing it makes the player less noticeable to creepers, providing a small but vital safety buffer. In Bedrock Edition, its interaction with Note Blocks is particularly famous, as it plays the characteristic fuse-hissing sound, often used by players to create pranks or high-tension environmental effects in their builds."
    },
    "minecraft:pale_oak_boat": {
        id: "minecraft:pale_oak_boat",
        name: "Pale Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities",
            secondaryUse: "Fast travel on ice and packed ice"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Pale Oak Planks x5"]
        },
        specialNotes: [
            "Features the distinct pale, ghostly white texture of Pale Oak wood.",
            "Accommodates up to two passengers, including mobs and players.",
            "Nullifies fall damage for all occupants when falling from any height.",
            "Moves significantly faster on ice and packed ice surfaces."
        ],
        description: "The Pale Oak Boat is a watercraft variant made from Pale Oak planks, introduced in the 1.21 'Winter Drop'. It features a unique, desaturated white appearance that matches the aesthetic of the Pale Garden biome. Functionally, it works like all other boats, allowing for efficient travel across water and extreme speeds on ice. It can carry two passengers and is a vital tool for transporting mobs safely over water or through the desaturated landscapes of the Pale Garden."
    },
    "minecraft:pale_oak_chest_boat": {
        id: "minecraft:pale_oak_chest_boat",
        name: "Pale Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting a single player and up to 27 stacks of items"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Pale Oak Boat", "Chest"]
        },
        specialNotes: [
            "Provides 27 slots of inventory storage for ocean-bound travel.",
            "Reduces passenger capacity to one due to the chest occupying the second seat.",
            "Drops both the boat and the chest's contents when broken.",
            "Matches the pale, ghostly aesthetic of the Pale Oak wood set."
        ],
        description: "The Pale Oak Boat with Chest combines the unique aesthetic of Pale Oak with the practical storage of a single chest. It offers 27 slots of inventory space, making it perfect for long-distance resource gathering in the Pale Garden or across the oceans. Because the chest takes up the rear seat, only one passenger can ride at a time. This vessel is an essential companion for explorers who need to haul large quantities of desaturated wood or moss back to their main base."
    }
};
