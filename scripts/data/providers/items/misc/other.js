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
    "minecraft:totem_of_undying": {
        id: "minecraft:totem_of_undying",
        name: "Totem of Undying",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Preventing death by restoring health and granting status effects",
            secondaryUse: "Must be held in main hand or off-hand to activate upon taking fatal damage"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Evokers in Woodland Mansions and Raids"]
        },
        specialNotes: [
            "Evokers always drop exactly one Totem of Undying upon death (100% drop rate)",
            "Upon activation, restores the player to 1 heart (2 health points)",
            "Grants Regeneration II for 45 seconds (40 seconds in Java Edition)",
            "Grants Absorption II for 5 seconds, providing 4 extra hearts of temporary health",
            "Grants Fire Resistance I for 40 seconds",
            "Removes all active negative status effects when activated",
            "Consumed immediately upon use and disappears from inventory",
            "Only works when held in either the main hand or off-hand slot",
            "Does not protect against the Void or the /kill command"
        ],
        description: "The Totem of Undying is a rare life-saving item that prevents death when held in the player's hand or off-hand slot. Dropped exclusively by Evokers found in Woodland Mansions and during Raids, this golden idol activates automatically when the player receives fatal damage. Upon activation, it consumes itself while restoring the player to 1 heart and providing powerful regeneration, absorption, and fire resistance effects, along with clearing all negative status effects. The dramatic golden particle effect and distinctive sound announce the totem's activation, giving players a crucial second chance in dangerous situations. While incredibly valuable for hardcore gameplay and challenging encounters, the totem's single-use nature and limited availability make it a precious resource that players often save for the most perilous adventures."
    }
};
