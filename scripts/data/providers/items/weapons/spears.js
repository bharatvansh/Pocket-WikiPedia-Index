// Pocket Wikipedia Foundation - Spears Data
// ============================================
// This file contains: Wooden Spear, Stone Spear, Copper Spear,
// Iron Spear, Golden Spear, Diamond Spear, Netherite Spear
// ============================================

/**
 * Spears data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const spears = {
    "minecraft:iron_spear": {
        id: "minecraft:iron_spear",
        name: "Iron Spear",
        maxStack: 1,
        durability: 250,
        enchantable: true,
        usage: {
            primaryUse: "Stabbing and charging at enemies",
            secondaryUse: "Melee combat with extended reach"
        },
        combat: {
            attackDamage: 8,
            attackSpeed: 1.2
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot", "Stick x2"]
        },
        specialNotes: [
            "Provides increased reach compared to standard swords",
            "Can be used for both quick jabs and high-damage charge attacks",
            "Deals 8 attack damage in Bedrock Edition",
            "Repairable using Iron Ingots in an anvil",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Iron Spear is a versatile mid-tier polearm introduced in the Mounts of Mayhem update. It provides players with extended reach, making it easier to keep distance from hostile mobs while dealing significant damage. Crafted from a single iron ingot and two sticks, it is a reliable choice for survivors who need more tactical range in combat than a standard sword can offer. Its weighted tip allows for powerful thrusts that can catch enemies off-guard from a safe distance."
    }
};
