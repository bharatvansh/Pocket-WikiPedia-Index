// Pocket Wikipedia Foundation - Weapons Data
// Contains data for weapon items

/**
 * Weapons data registry
 * @type {Object.<string, import('../item_types').ItemDetails>}
 */
export const weapons = {
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
    "minecraft:bow": {
        id: "minecraft:bow",
        name: "Bow",
        maxStack: 1,
        durability: 384,
        enchantable: true,
        usage: {
            primaryUse: "Ranged combat with arrows",
            secondaryUse: "Activating targets and buttons from distance"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 1.0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x3", "String x3"]
        },
        specialNotes: [
            "Damage ranges from 1 to 9 depending on charge time",
            "Can be enchanted with Power, Punch, Flame, Infinity, Unbreaking, and Mending",
            "Requires arrows to shoot (unless enchanted with Infinity)",
            "Fully charged arrows have maximum range of 120 blocks",
            "Can be repaired with another bow or string"
        ],
        description: "The Bow is a ranged weapon that shoots arrows at enemies from a distance. It must be charged before firing, with longer charge times resulting in more damage and longer range. Bows are essential for fighting enemies from safety and can be enhanced with various enchantments."
    },
    "minecraft:trident": {
        id: "minecraft:trident",
        name: "Trident",
        maxStack: 1,
        durability: 250,
        enchantable: true,
        usage: {
            primaryUse: "Melee and ranged combat weapon",
            secondaryUse: "Can be thrown and retrieved"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 1.1
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Drowned"]
        },
        specialNotes: [
            "Can be thrown as a ranged weapon dealing 8 damage",
            "Enchantable with Loyalty, Riptide, Channeling, Impaling, Unbreaking, and Mending",
            "Loyalty enchantment makes it return after throwing",
            "Riptide allows propelling yourself when thrown in water or rain",
            "Channeling summons lightning during thunderstorms",
            "Impaling increases damage against aquatic mobs",
            "Only obtainable from drowned mobs with a 6.25% drop chance"
        ],
        description: "The Trident is a unique weapon that can be used for both melee and ranged combat. It can be thrown like a spear and retrieved with the Loyalty enchantment. Tridents are obtained exclusively from drowned mobs and can be enhanced with special water-themed enchantments. When enchanted with Channeling, it can summon lightning strikes during thunderstorms."
    }
};
