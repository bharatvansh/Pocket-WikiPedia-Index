// Pocket Wikipedia Foundation - Swords Data
// ============================================
// This file contains: Wooden sword, stone sword, iron sword,
// golden sword, diamond sword, netherite sword, mace
// ============================================

/**
 * Sword items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const swords = {
    "minecraft:iron_sword": {
        id: "minecraft:iron_sword",
        name: "Iron Sword",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat",
            secondaryUse: "Breaking cobwebs quickly"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x2", "Stick"]
        },
        specialNotes: [
            "Can be repaired with Iron Ingots",
            "Can receive Sharpness, Smite, or Bane of Arthropods"
        ],
        description: "The Iron Sword is a versatile weapon that deals moderate damage. It's more durable than wooden or stone swords but less powerful than diamond or netherite swords. Iron swords can be enchanted with various combat-related enchantments."
    },
    "minecraft:diamond_sword": {
        id: "minecraft:diamond_sword",
        name: "Diamond Sword",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "High-damage melee combat",
            secondaryUse: "Quickly breaking cobwebs and bamboo"
        },
        combat: {
            attackDamage: 8,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x2", "Stick"]
        },
        specialNotes: [
            "Deals 8 points of damage (4 hearts) per hit",
            "Can be upgraded to a Netherite Sword using a Smithing Template",
            "Durability of 1562 allows for extensive use before needing repair",
            "Can be repaired with Diamonds or in an anvil"
        ],
        description: "The Diamond Sword is a high-tier melee weapon that provides significant damage and durability. It was the strongest sword available before the introduction of netherite. To craft one, a player needs two diamonds and a stick. It can be further enhanced with various combat enchantments like Sharpness, Fire Aspect, and Knockback, making it a formidable weapon for any encounter."
    },
    "minecraft:mace": {
        id: "minecraft:mace",
        name: "Mace",
        maxStack: 1,
        durability: 501,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat with powerful smash attacks",
            secondaryUse: "Dealing massive damage while falling from heights"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Heavy Core", "Breeze Rod"]
        },
        specialNotes: [
            "Smash attack triggers when falling >1.5 blocks; negates fall damage",
            "Damage scales infinitely with fall distance (Density enchant boosts this)",
            "Base damage: 6 (same as Iron Sword)",
            "Exclusive Enchants: Density (damage), Breach (armor pierce), Wind Burst (launch)",
            "Crafted with Heavy Core + Breeze Rod; no attack cooldown in Bedrock"
        ],
        description: "The Mace is a powerful melee weapon added in 1.21. Crafted from a Heavy Core and a Breeze Rod, it features a unique smash attack mechanic: falling 1.5+ blocks before hitting an enemy deals massive damage scaling with fall distance while negating the user's fall damage. In Bedrock Edition, it deals 6 base damage. It supports exclusive enchantments: Density for extra fall damage, Breach to bypass armor, and Wind Burst to launch the player upward on impact. This makes the Mace a devastating tool for aerial strikes and tactical combat."
    },
    "minecraft:netherite_sword": {
        id: "minecraft:netherite_sword",
        name: "Netherite Sword",
        maxStack: 1,
        durability: 2031,
        enchantable: true,
        usage: {
            primaryUse: "Elite melee combat weapon",
            secondaryUse: "Breaking cobwebs and bamboo efficiently"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Sword", "Netherite Ingot"]
        },
        specialNotes: [
            "Highest base damage for a sword in Bedrock (9 points/4.5 hearts)",
            "Has 2031 durability points; significantly higher than diamond",
            "Immune to fire and lava; floats on lava pools if dropped",
            "Upgraded from Diamond Sword at a Smithing Table",
            "High enchantability allows for powerful combat modifiers"
        ],
        description: "The Netherite Sword is the most powerful melee weapon in Minecraft Bedrock Edition. With a base damage of 9 points, it surpasses the diamond sword in raw power and offers significantly more durability with 2031 points. It is fire-resistant, meaning it will float in lava instead of burning. To obtain this elite weapon, a player must upgrade a Diamond Sword using a Netherite Ingot and a Netherite Upgrade Smithing Template at a Smithing Table. Its superior stats make it the ultimate choice for high-tier combat."
    }
};
