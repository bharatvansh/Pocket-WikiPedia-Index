// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// lead, trial key, ominous trial key, written book, book and quill,
// enchanted book, knowledge book, bundle, goat horn (all variants),
// painting, item frame, glow item frame, armor stand, end crystal,
// experience bottle, firework star, wolf armor, totem of undying
// ============================================

/**
 * Other miscellaneous items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const miscItems = {
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
            "Must be renamed using an anvil before use (costs 1 experience level)",
            "Up to 64 name tags can be renamed at once for a single experience level",
            "Using a renamed name tag on a mob gives it that name permanently",
            "Named mobs never despawn naturally, similar to tamed animals",
            "Name tags with the same name are stackable after renaming",
            "Wandering traders and hostile mobs will despawn in Peaceful difficulty even when named",
            "If a named mob kills a player, the death message shows the custom name",
            "Cannot be used to name the Ender Dragon or other boss mobs without commands",
            "Fishing treasure: 0.8% chance to catch as junk/treasure",
            "Chest locations: Dungeon chests (25.3%), Mineshaft chests (42.3%), Woodland Mansion (27.9%), Ancient City (16.1%)"
        ],
        description: "The Name Tag is a specialized utility item that allows players to permanently name mobs in Minecraft, preventing them from despawning and adding a personal touch to pets and farm animals. Before a Name Tag can be used, it must first be renamed at an anvil, which costs one experience level regardless of whether the player renames a single tag or an entire stack of 64 at once. Once renamed, the Name Tag can be used on any mob to permanently assign it that name, with the tag being consumed in the process. Named mobs become persistent in the world and will not despawn like normal mobs, making Name Tags invaluable for keeping valuable tamed animals, farm livestock, or even rare hostile spawns. The unique name also appears in death messages if that mob kills a player, adding personality to combat encounters. Players can acquire Name Tags through several methods: they have a small 0.8% chance to be caught while fishing, can be found in various loot chests including dungeons (25.3%), mineshafts (42.3%), woodland mansions (27.9%), and ancient cities (16.1%), or purchased from Librarian villagers at the Master level for 20 emeralds. This variety of acquisition methods makes Name Tags accessible to players at different stages of progression, from early-game fishing to late-game trading and exploration."
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
        description: "Wolf Armor is a protective equipment item introduced in Minecraft 1.21 that can be exclusively equipped on tamed wolves. Crafted from armadillo scutes, this armor provides wolves with substantial protection equivalent to wearing gold armor, dramatically increasing their survivability in combat. The armor has 64 durability points and will break when depleted, but can be repaired using additional armadillo scutes or by combining two damaged pieces. Wolf Armor makes tamed wolves much more effective companions for exploration and combat, protecting loyal pets from hostile mobs and environmental damage."
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
            "Must be held in either the main hand or off-hand to activate",
            "Automatically activates when receiving fatal damage, preventing death",
            "Grants Absorption II for 5 seconds (4 extra hearts)",
            "Grants Regeneration II for 45 seconds in Bedrock Edition",
            "Grants Fire Resistance I for 40 seconds",
            "The totem is consumed upon activation (single use)",
            "100% drop chance on all difficulties",
            "Evokers spawn in Woodland Mansions and during Raids",
            "Cannot repair or reuse a consumed totem",
            "Visual effect shows a golden aura when activated",
            "Does not prevent death from void damage or /kill command",
            "One of the most valuable items for survival progression"
        ],
        description: "The Totem of Undying is a legendary life-saving item that prevents a player's death when they would otherwise receive fatal damage. This powerful item must be held in either the main hand or off-hand to automatically activate upon receiving lethal damage, consuming itself in the process. When triggered, the Totem of Undying provides multiple protective effects including Absorption II for 5 seconds (adding 4 extra hearts of health), Regeneration II for 45 seconds in Bedrock Edition, and Fire Resistance I for 40 seconds, giving players a crucial second chance in combat. Totems are exclusively dropped by Evokers, which appear in Woodland Mansions and Raids, with a 100% drop chance on all difficulties. The totem cannot prevent death from void damage or the /kill command, making it essential for ground-based combat scenarios. As one of Minecraft's most coveted items, the Totem of Undying serves as both a practical survival tool and a trophy representing mastery over the game's most dangerous structures and enemies."
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
            "Reduces the player's field of view (FOV) to 1/8 of normal when looking through it",
            "Cannot be moved or sprinted while using the spyglass",
            "Slowly fades in when activated and fades out when deactivated for smooth transitions",
            "The player's movement speed is reduced to sneaking speed while in use",
            "Requires Amethyst Shards, making it only obtainable after finding an amethyst geode",
            "Useful for spotting distant structures, biomes, and resource locations",
            "The overlay effect resembles looking through a telescope lens",
            "Can be used while in boats and minecarts, but not while swimming or flying with elytra"
        ],
        description: "The Spyglass is an exploration tool introduced in the Caves & Cliffs update (1.17) that allows players to zoom in on distant objects and terrain. When used, the spyglass dramatically narrows the player's field of view to one-eighth of normal, effectively acting as a magnifying glass for Minecraft's world. This zoom capability makes the spyglass invaluable for scouting distant structures, locating biomes, finding villages, and identifying potential exploration targets from elevated positions. Players cannot move normally or sprint while looking through the spyglass, maintaining sneaking speed instead, which encourages careful observation and planning. The spyglass features smooth fade-in and fade-out animations when activated and deactivated, creating an immersive telescoping experience. Crafting a spyglass requires one Amethyst Shard and two Copper Ingots, making it a mid-game item that becomes available after players have explored enough to find an Amethyst Geode. The tool's practical applications range from simple navigation aid to strategic reconnaissance, making it a must-have item for explorers and builders who need to survey large areas or plan construction projects from a distance."
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
            "Points to the location where the player last died",
            "Only works in the same dimension where the death occurred",
            "Spins randomly if the player has not died yet in that dimension",
            "Does not work in the End dimension at all in Bedrock Edition",
            "Echo Shards are found exclusively in Ancient Cities, making recovery compasses rare",
            "Cannot receive enchantments like other compasses",
            "Points to the death location, not the dropped items (items may have despawned)",
            "Items despawn after 5 minutes by default, so quick recovery is essential",
            "Useful for recovering valuable gear lost in caves, the Nether, or other dangerous locations",
            "The needle has a different appearance compared to regular compasses"
        ],
        description: "The Recovery Compass is a specialized navigation item introduced in the Wild Update (1.19) that helps players locate where they last died. Unlike a regular compass which points to world spawn, the Recovery Compass points to the precise coordinates of the player's most recent death within the current dimension. This makes it an invaluable tool for recovering valuable items, equipment, and experience that were dropped upon dying. The compass is crafted with eight Echo Shards surrounding a standard compass in a crafting grid, making it a rare and valuable item since Echo Shards are only found in Ancient Cities deep within the Deep Dark biome. In Bedrock Edition, the Recovery Compass has a significant limitation: it does not function in the End dimension at all, spinning randomly regardless of death location. The compass only operates within the same dimension where the death occurred, meaning players must return to the Nether, caves, or other dimension where they died to track their belongings. Since items naturally despawn after five minutes in Minecraft, the Recovery Compass is most effective when used quickly after death, though it can still help players revisit memorable death locations even if items have despawned. The distinctive needle design sets it apart from regular compasses, and its specialized function makes it a crucial item for high-risk exploration where losing valuable gear would be devastating."
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
            "Has 8 variants, each playing a different sound: Ponder, Sing, Seek, Feel (Regular Goats); Admire, Call, Yearn, Dream (Screaming Goats)",
            "Has a cooldown of 7 seconds between uses",
            "Sound can be heard up to 256 blocks away",
            "Not stackable",
            "Can be used by Pillagers in Raids (specifically the 'Seek' horn sound)",
            "Does not have durability"
        ],
        description: "The Goat Horn is an instrument item dropped by Goats when they ram into specific hard blocks like logs, stone, packed ice, or ores. There are eight different variants of the horn, each producing a unique sound when used. Four variants (Ponder, Sing, Seek, Feel) are dropped by regular goats, while the other four (Admire, Call, Yearn, Dream) are obtained exclusively from Screaming Goats. When played, the horn emits a loud sound audible up to 256 blocks away, followed by a 7-second cooldown. This makes it an excellent tool for long-distance signaling in multiplayer."
    }
};
