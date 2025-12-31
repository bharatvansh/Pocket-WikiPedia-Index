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
        durability: 250,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat",
            secondaryUse: "Breaking cobwebs quickly"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 1.6
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
            "Smash attack triggers when falling more than 1.5 blocks before hitting",
            "Smash attack damage increases indefinitely with fall distance, scaling without limit",
            "Smash attack negates all fall damage for the attacker",
            "Base attack damage equivalent to Iron Sword (6 damage/3 hearts)",
            "No attack cooldown (standard Bedrock Edition mechanics)",
            "Can be enchanted with Density, Breach, and Wind Burst",
            "Density increases damage based on blocks fallen before attack",
            "Breach bypasses some of target's armor",
            "Wind Burst launches the attacker into the air on hit"
        ],
        description: "The Mace is a powerful melee weapon introduced in Minecraft 1.21 as part of the Tricky Trials update. Crafted from a Heavy Core (obtained from Ominous Vaults) and a Breeze Rod (dropped by Breezes), this weapon features a unique smash attack mechanic. When a player falls more than 1.5 blocks and hits an enemy with the Mace, the smash attack triggers, dealing damage that scales indefinitely with fall distance while completely negating fall damage. In Bedrock Edition, the Mace deals 6 base attack damage, equivalent to an Iron Sword, and follows standard Bedrock combat mechanics without attack cooldowns. This makes the Mace exceptionally deadly for aerial combat and strategic positioning, especially when combined with its specialized enchantments like Density, Breach, and Wind Burst."
    }
};
