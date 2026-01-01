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
            "Introduced to Bedrock Edition in 1.21.30."
        ],
        description: "A bundle is a storage item that can be used to manage multiple items within a single inventory slot. It is particularly useful for gathering small amounts of different items that would otherwise clutter the inventory. Bundles were added to Bedrock Edition in version 1.21.30 after being an experimental feature for several years. They provide a unique way to handle inventory management, especially for players who collect many different types of blocks and items during exploration."
    }
};
