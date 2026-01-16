// Pocket Wikipedia Foundation - Projectiles Data
// ============================================
// This file contains: Arrow, spectral arrow, tipped arrow,
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
            primaryUse: "Highlighting targets with a glowing effect when hit",
            secondaryUse: "Long-distance combat and target tracking through obstacles"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Arrow", "Glowstone Dust (4 per 2 arrows)"]
        },
        specialNotes: [
            "Crafted by surrounding arrows with glowstone dust (4 glowstone + 4 arrows = 8 spectral arrows)",
            "Applies a glowing outline effect to hit entities for 10 seconds",
            "Glowing entities remain visible even behind walls and obstacles",
            "Can be obtained from Piglins via bartering or found in Bastions",
            "Does not apply potion effects like tipped arrows",
            "The glowing effect allows tracking of mobs regardless of light level or obstruction",
            "Cannot stack with other spectral arrows in the same slot if partially used"
        ],
        description: "The Spectral Arrow is a specialized projectile crafted from regular arrows and glowstone dust. When it hits a target, it applies a glowing effect that outlines the entity in a bright color, making it clearly visible even behind walls and in darkness for 10 seconds. This makes spectral arrows invaluable for tracking elusive mobs during combat or for PvP scenarios. Players can also obtain them through bartering with Piglins in the Nether or loot them from Bastion Remnants. Unlike tipped arrows, spectral arrows do not inflict potion effects but instead provide superior target visibility."
    },
    "minecraft:tipped_arrow": {
        id: "minecraft:tipped_arrow",
        name: "Tipped Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying potion effects through ranged attacks",
            secondaryUse: "Setting traps and crowd control in PvP combat"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Arrow (8)", "Lingering Potion (any type)"]
        },
        specialNotes: [
            "Created in a crafting grid by combining 8 arrows with a lingering potion",
            "In Bedrock Edition, arrows can be dipped in cauldrons containing potions instead",
            "The type of potion determines which effect the arrow inflicts upon impact",
            "Applies full potion effect duration (30-3600 seconds depending on the potion type)",
            "Can apply any potion effect including Poison, Weakness, Slowness, Harming, and more",
            "More efficient than crafting lingering potions individually",
            "Pairs well with crossbows or enchanted bows for rapid-fire effects"
        ],
        description: "Tipped Arrows are specialized projectiles infused with potion effects, created by combining regular arrows with lingering potions. In Bedrock Edition, a more efficient alternative is available: arrows can be directly dipped into cauldrons containing any type of potion. When fired, these arrows apply their associated potion effect upon impact. This enables creative combat tactics such as applying Poison to weaken enemies, Slowness to control movement, or Weakness to reduce enemy damage output. Tipped arrows are essential for advanced players who want to combine ranged combat with the versatility of potions."
    }
};
