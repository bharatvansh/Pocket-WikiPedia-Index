// Pocket Wikipedia Foundation - Projectiles Data
// ============================================
// This file contains: Arrow, spectral arrow, tipped arrows (all types),
// firework rocket, snowball, egg, ender pearl, eye of ender,
// fire charge, wind charge
// ============================================

/**
 * Projectile items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const projectiles = {
    "minecraft:wind_charge": {
        id: "minecraft:wind_charge",
        name: "Wind Charge",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Firing a projectile that creates a wind burst upon impact",
            secondaryUse: "Launching entities, activating redstone, and propelling players upward"
        },
        combat: {
            attackDamage: 0, // Deals knockback and small damage on direct hit, but doesn't have a fixed melee damage
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Breeze Rod (1 yields 4 Wind Charges)"]
        },
        specialNotes: [
            "Deals a small amount of damage on a direct hit",
            "Creates a 'Wind Burst' effect that knocks back nearby entities",
            "If used by a player to jump, it negates fall damage from the resulting leap",
            "Has a 0.5-second cooldown in Bedrock Edition",
            "Can be fired from Dispensers",
            "Interacts with certain blocks like trapdoors, buttons, and levers"
        ],
        description: "The Wind Charge is a versatile projectile item dropped by Breezes in Trial Chambers or crafted from Breeze Rods. When thrown, it travels in a straight line and explodes upon impact, creating a wind burst that knocks back entities and can interact with redstone components. Players often use Wind Charges for 'wind jumping,' allowing them to reach high places while safely negating any fall damage from the boost. In Bedrock Edition, the Wind Charge has a short half-second cooldown, making it a dynamic tool for both combat and traversal."
    },
    "minecraft:arrow": {
        id: "minecraft:arrow",
        name: "Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ammunition for Bows, Crossbows, and Dispensers",
            secondaryUse: "Can be modified into Tipped Arrows"
        },
        combat: {
            attackDamage: 2, // Base damage, varies by bow charge
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Flint", "Stick", "Feather"]
        },
        specialNotes: [
            "Crafted using Flint, Stick, and Feather (yields 4)",
            "Dropped by Skeletons, Strays, and Pillagers",
            "Damage depends on the speed/charge of the bow",
            "Can be tipped with potions for status effects",
            "Used by Dispensers to fire projectiles",
            "Can be retrieved if it hits a block (unless from Infinity bow)"
        ],
        description: "The Arrow is the fundamental ammunition for ranged combat in Minecraft, used with Bows, Crossbows, and Dispensers. It is crafted from flint, a stick, and a feather, producing four arrows per batch. In Bedrock Edition, arrows deal damage proportional to their velocity, and they can be tipped with potions to inflict status effects. Skeletons and Pillagers frequently drop them, making them a renewable resource even without crafting."
    },
    "minecraft:snowball": {
        id: "minecraft:snowball",
        name: "Snowball",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Thrown as a projectile to knock back mobs",
            secondaryUse: "Crafting snow blocks and damaging blazes"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Shoveling snow blocks or layers", "Dropped by Snow Golems"]
        },
        specialNotes: [
            "Deals no damage to most mobs but provides knockback",
            "Deals 3 damage (1.5 hearts) to Blazes in Bedrock Edition",
            "Can be crafted into snow blocks using 4 snowballs",
            "Obtained by using a shovel on snow or from snow golems",
            "Max stack size is 16 instead of the usual 64",
            "Can be fired from dispensers to defend areas"
        ],
        description: "Snowballs are projectile items obtained by shoveling snow or from snow golems. While they deal no damage to most mobs, they provide knockback and are particularly effective against Blazes, dealing 3 points of damage per hit in Bedrock Edition. They can also be crafted into full snow blocks for building. Their low stack size of 16 makes them unique among projectiles, and they are frequently used for both lighthearted snowball fights and serious blaze management in the Nether."
    },
    "minecraft:spectral_arrow": {
        id: "minecraft:spectral_arrow",
        name: "Spectral Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ammunition that applies the Glowing effect to targets",
            secondaryUse: "Revealing hidden mobs and players through walls"
        },
        combat: {
            attackDamage: 2, // Base damage like regular arrows
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["4x Glowstone Dust", "1x Arrow"]
        },
        specialNotes: [
            "Crafting yields 2 spectral arrows per recipe (Java Edition only)",
            "Currently NOT available in Bedrock Edition through normal gameplay",
            "Applies Glowing effect for 10 seconds on hit",
            "Glowing outline is visible through blocks and walls",
            "Outline color matches team color (white by default)",
            "NOT affected by Infinity enchantment (always consumed)",
            "Can be obtained via bartering with Piglins (Java Edition)",
            "Useful for tracking mobs in caves and PvP combat"
        ],
        description: "Spectral Arrows are special ammunition exclusive to Java Edition that apply the Glowing status effect to any entity they hit, making the target visible through walls with a bright outline for 10 seconds. Crafted by surrounding an arrow with four glowstone dust (yielding 2 arrows), they are particularly useful for tracking elusive mobs, finding hidden players in PvP, or marking targets in dark caves. The glowing effect shows the target's team color if applicable, otherwise appearing as white. Unlike regular arrows, spectral arrows are always consumed when fired, even from Infinity-enchanted bows, balancing their powerful tracking capability. Note that these arrows are not available in Bedrock Edition through standard gameplay."
    },
    "minecraft:tipped_arrow": {
        id: "minecraft:tipped_arrow",
        name: "Tipped Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ammunition that applies potion effects to targets",
            secondaryUse: "Ranged application of status effects in combat"
        },
        combat: {
            attackDamage: 2, // Base arrow damage plus potion effect
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["8x Arrow", "1x Lingering Potion (any effect)"]
        },
        specialNotes: [
            "Crafting yields 8 tipped arrows per lingering potion (Java Edition)",
            "In Bedrock Edition: Use arrows on cauldrons filled with potions (more efficient - up to 64 arrows per cauldron)",
            "Potion effect lasts 1/8th the duration of the original potion",
            "Available effects: Poison, Weakness, Slowness, Harming, Healing, and many more",
            "Arrow of Decay (Wither effect) is exclusive to Bedrock Edition",
            "NOT affected by Infinity enchantment (always consumed)",
            "Can be obtained by trading with Fletcher villagers at Master level",
            "Effects cannot be combined on a single arrow"
        ],
        description: "Tipped Arrows are ammunition items that apply potion effects to targets upon hit, combining arrow damage with status effects. In Java Edition, they are crafted by surrounding a lingering potion with 8 arrows, while Bedrock Edition offers a more efficient method using cauldrons filled with potions (allowing up to 64 arrows to be tipped per full cauldron). The applied effect lasts for 1/8th the duration of the original potion, making them strategic tools for combat. Various effects are available including damage, healing, poison, weakness, and more. The exclusive Arrow of Decay in Bedrock Edition applies the Wither effect. Like spectral arrows, tipped arrows are always consumed regardless of Infinity enchantment. Master-level Fletcher villagers also sell random tipped arrows, providing an alternative acquisition method."
    }
};
