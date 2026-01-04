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
    "minecraft:snowball": {
        id: "minecraft:snowball",
        name: "Snowball",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Throwing as a projectile to knock back entities",
            secondaryUse: "Crafting Snow Blocks or damaging Blazes"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by digging Snow or Snow Layers with a shovel", "Breaking Snow Blocks without Silk Touch yields 4 Snowballs"]
        },
        specialNotes: [
            "Deals no damage to most players and mobs, only knockback",
            "Deals 3 damage (1.5 hearts) to Blazes",
            "Destroys End Crystals upon impact",
            "Can be fired from Dispensers",
            "Four Snowballs can be crafted back into a Snow Block",
            "Extinguishes fires when thrown (Bedrock Edition)"
        ],
        description: "A Snowball is a throwable projectile obtained by digging snow with a shovel. While it deals no damage to most entities, it inflicts significant knockback, making it a useful tool for pushing mobs off ledges or disrupting players. It is particularly effective against Blazes, dealing 3 points of damage per hit. In Minecraft Bedrock Edition, snowballs also have the utility of extinguishing fires upon impact. They can be fired from dispensers and are easily mass-produced by farming snow golems or shoveling snowy biomes."
    },
    "minecraft:arrow": {
        id: "minecraft:arrow",
        name: "Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ammunition for Bows, Crossbows, and Dispensers",
            secondaryUse: "Triggering redstone mechanisms like wooden buttons or target blocks"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Flint", "Stick", "Feather"]
        },
        specialNotes: [
            "Damage depends on the weapon's charge and enchantments (Power)",
            "Can be retrieved if they hit a block (unless shot by Infinity bow/mobs)",
            "Activates Target Blocks based on accuracy",
            "Can trigger wooden buttons, wooden pressure plates, and tripwires",
            "Obtained from crafting, skeleton drops, bartering, or fletcher villagers"
        ],
        description: "The Arrow is the standard ammunition used for Bows, Crossbows, and Dispensers. It is a fundamental combat item crafted from flint, sticks, and feathers, though it is also commonly obtained as loot from Skeletons. When fired, the arrow's trajectory and damage depend on the weapon used and how long it was charged. Arrows that miss their target and stick into blocks can be retrieved by the player. Beyond combat, arrows serve a functional role in redstone circuitry, capable of activating Target Blocks, wooden buttons, and tripwires from a distance."
    }
};
