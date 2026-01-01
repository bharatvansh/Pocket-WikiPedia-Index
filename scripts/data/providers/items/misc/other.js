// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// lead, trial key, ominous trial key, written book, book and quill,
// enchanted book, knowledge book, bundle, goat horn (all variants),
// painting, item frame, glow item frame, armor stand, end crystal,
// experience bottle, firework star, wolf armor
// ============================================

/**
 * Other miscellaneous items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const miscItems = {
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
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Mace weapon when combined with Breeze Rod",
            secondaryUse: "No other uses currently available in Bedrock Edition"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained exclusively from Ominous Vaults in Trial Chambers (rare drop)"]
        },
        specialNotes: [
            "Has a 7.5% chance to be found in Ominous Vaults (same rate as the 'Creator' Music Disc)",
            "Cannot be obtained from standard Vaults - only Ominous Vaults",
            "Required component for crafting the Mace - the Tricky Trials update's signature weapon",
            "When combined with a Breeze Rod in crafting, creates the powerful Mace melee weapon",
            "Appears as a dense, metallic core with an intricate engraved pattern"
        ],
        description: "The Heavy Core is an essential crafting component introduced in the 1.21 Tricky Trials update. This rare item can only be obtained as a loot drop from Ominous Vaults within Trial Chambers, sharing the same 7.5% drop rate as the 'Creator' Music Disc. Its sole purpose is to serve as the foundation for crafting the Mace, the signature weapon of the update. When combined with a Breeze Rod, the Heavy Core transforms into the formidable Mace, a weapon capable of dealing devastating damage through its unique smash attack mechanic. The Heavy Core's rarity and specialized function make it one of the most sought-after items for players seeking to master the combat challenges introduced in Trial Chambers."
    },
    "minecraft:pottery_sherd_angler": {
        id: "minecraft:pottery_sherd_angler",
        name: "Angler Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots with unique fishing patterns",
            secondaryUse: "Archaeological collection and decoration"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Brick x7", "Angler Pottery Sherd x1 (one side only)", "Can use 1-4 different sherds"]
        },
        specialNotes: [
            "Found exclusively through archaeology in desert wells and trail ruins",
            "Can be brushed from suspicious sand/suspicious gravel in Bedrock Edition",
            "Each decorated pot can feature up to 4 different pottery sherds (one per side)",
            "Added in the 1.20 Trails & Tales update and fully available in 1.21+",
            "Features a distinctive fisherman/fishing rod motif when applied to pots",
            "Cannot be crafted or obtained through any other means - archaeology exclusive"
        ],
        description: "Angler Pottery Sherds are archaeological artifacts introduced in the 1.20 Trails & Tales update and fully integrated into Minecraft Bedrock Edition 1.21. These unique items can only be obtained by excavating suspicious sand or suspicious gravel at specific archaeological sites, primarily desert wells and trail ruins. The sherd features a distinctive fishing motif that depicts an angler with a fishing rod, perfect for creating themed decorations. When crafting a decorated pot, players can use up to four different pottery sherds (one for each side) to create unique patterns. The Angler Pottery Sherd represents the archaeological gameplay mechanic that encourages exploration and historical discovery within the Minecraft world."
    }
};
