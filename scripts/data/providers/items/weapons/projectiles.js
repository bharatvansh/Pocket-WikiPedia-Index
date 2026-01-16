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
            primaryUse: "Ammunition that causes targets to glow",
            secondaryUse: "Revealing hidden enemies through walls"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Glowstone Dust x4", "Arrow x1 (yields 2)"]
        },
        specialNotes: [
            "Applies the Glowing effect to hit targets for 10 seconds",
            "The glow effect makes targets visible through walls and blocks",
            "Crafted by surrounding an arrow with 4 glowstone dust, yielding 2 spectral arrows",
            "Can be found in Bastion Remnant chests",
            "Works with both bows and crossbows",
            "The glow outline is visible to all players, not just the shooter"
        ],
        description: "Spectral Arrows are specialized ammunition that applies the Glowing status effect to any mob or player they hit, causing them to be outlined and visible through walls for 10 seconds. This makes them extremely valuable for PvP combat and tracking mobs in dark areas. Crafted by surrounding a single arrow with four glowstone dust, the recipe yields two spectral arrows. They can also be found as loot in Bastion Remnants. The glowing effect works regardless of the target's invisibility, making spectral arrows a counter to invisibility potions."
    },
    "minecraft:tipped_arrow": {
        id: "minecraft:tipped_arrow",
        name: "Tipped Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ammunition that applies potion effects to targets",
            secondaryUse: "Delivering status effects at range"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Lingering Potion x1", "Arrow x8 (yields 8)"]
        },
        specialNotes: [
            "Java Edition: Crafted with 1 lingering potion + 8 arrows, yields 8 tipped arrows",
            "Bedrock Edition: Can also be made by dipping arrows in a potion-filled cauldron",
            "A full cauldron in Bedrock can tip up to 48 arrows (16 per 1/3 level)",
            "Applies the potion effect to targets for a reduced duration",
            "Arrow of Decay (Wither effect) is exclusive to Bedrock Edition",
            "Works with bows, crossbows, and dispensers"
        ],
        description: "Tipped Arrows are versatile ammunition items that deliver potion effects upon impact. In Java Edition, they are crafted by combining eight arrows with a lingering potion, yielding eight tipped arrows of that effect. Bedrock Edition offers an additional method: dipping arrows into a cauldron filled with potion, where a full cauldron can tip up to 48 arrows. The duration of the applied effect is typically 1/8 of the original potion's duration. Bedrock Edition also features the unique Arrow of Decay, which applies the Wither effect. Tipped arrows are essential for ranged combat strategies, allowing players to poison, slow, or weaken enemies from a distance."
    }
};
