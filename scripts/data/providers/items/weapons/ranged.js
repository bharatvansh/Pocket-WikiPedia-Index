// Pocket Wikipedia Foundation - Ranged Weapons Data
// ============================================
// This file contains: Bow, crossbow, trident
// ============================================

/**
 * Ranged weapon items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const rangedWeapons = {
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
    "minecraft:crossbow": {
        id: "minecraft:crossbow",
        name: "Crossbow",
        maxStack: 1,
        durability: 465,
        enchantable: true,
        usage: {
            primaryUse: "Long-range combat with arrows or firework rockets",
            secondaryUse: "Sniper duels and crowd control with Multishot"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 1.0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x3", "String x2", "Iron Ingot x1", "Tripwire Hook x1"]
        },
        specialNotes: [
            "Base damage 9; loads slower (1.25s) but holds charge in inventory",
            "Shoots Arrows or Firework Rockets (explosive if crafted with Star)",
            "Exclusive Enchants: Multishot (3 shots), Piercing (penetrates mobs), Quick Charge",
            "Cannot combine Multishot and Piercing",
            "Dropped by Pillagers and Piglins; has 465 durability"
        ],
        description: "The Crossbow is a powerful ranged weapon that offers distinct advantages over the traditional bow. It takes longer to load but can hold a charged shot even when placed in the inventory, allowing for instant firing when drawn. Crossbows have unique enchantments like Multishot for crowd control and Piercing for hitting multiple enemies in a line. They can also fire firework rockets for explosive area damage. While they lack the raw damage potential of a Power V bow, their utility and special enchantments make them a versatile choice for combat."
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
