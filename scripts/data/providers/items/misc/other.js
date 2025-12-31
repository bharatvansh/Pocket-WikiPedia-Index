// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// wolf armor, lead, trial key, ominous trial key, written book,
// book and quill, enchanted book, knowledge book, bundle,
// goat horn (all variants), painting, item frame, glow item frame,
// armor stand, end crystal, experience bottle, firework star
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
        description: "The Shield is a defensive tool that can block incoming melee attacks and projectiles. When raised by crouching or using the secondary action button, it reduces incoming damage to zero. Shields can be customized with banner patterns and enhanced with enchantments for increased durability."
    },
    "minecraft:elytra": {
        id: "minecraft:elytra",
        name: "Elytra",
        maxStack: 1,
        durability: 432,
        enchantable: true,
        usage: {
            primaryUse: "Gliding through the air",
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
        description: "The Trial Key is a reward item tied to the Trial Chambers in Minecraft Bedrock Edition. It is used on a Vault to claim its loot, with the vault tracking which players have already opened it so each player can only unlock it once. Trial Keys are primarily earned from Trial Spawners after completing their combat waves, and can also appear in other Trial Chamber containers."
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
    }
};
