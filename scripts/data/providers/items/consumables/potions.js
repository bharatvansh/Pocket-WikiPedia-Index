// Pocket Wikipedia Foundation - Potions Data
// ============================================
// This file contains: All potion types (regular, splash, lingering),
// water bottle, awkward potion, mundane potion, thick potion,
// potion of healing, regeneration, strength, swiftness, fire resistance,
// night vision, invisibility, water breathing, leaping, slow falling,
// poison, weakness, harming, slowness, turtle master, luck
// ============================================

/**
 * Potion items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const potions = {
    "minecraft:potion": {
        id: "minecraft:potion",
        name: "Potion",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Drinking to apply status effects",
            secondaryUse: "Brewing ingredient"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Water Bottle + Nether Wart (Awkward Potion)", "Awkward Potion + Ingredient"]
        },
        specialNotes: [
            "Drinkable item that applies specific status effects",
            "Base potion (Water Bottle) has no effect",
            "Awkward Potion is the base for almost all other potions",
            "Effects include Healing, Strength, Swiftness, Fire Resistance, etc.",
            "Can be turned into Splash Potions using Gunpowder"
        ],
        description: "Potions are consumable items that grant various status effects when drunk. They are created in a Brewing Stand by adding ingredients to water bottles or existing potions. The base for most potions is the Awkward Potion, brewed from Nether Wart. Potions can provide buffs like Regeneration and Night Vision, or debuffs like Poison and Weakness. Consuming a potion leaves behind an empty glass bottle."
    },
    "minecraft:splash_potion": {
        id: "minecraft:splash_potion",
        name: "Splash Potion",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Throwing to apply effects to entities in an area",
            secondaryUse: "Debuffing enemies or healing multiple allies"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion + Gunpowder"]
        },
        specialNotes: [
            "Thrown potion that shatters on impact",
            "Applies effects to all entities within range (radius ~4 blocks)",
            "Duration of effect depends on distance from impact center",
            "Essential for using negative effects on enemies",
            "Can be turned into Lingering Potions using Dragon's Breath"
        ],
        description: "Splash Potions are throwable variants of regular potions, allowing players to apply effects to other entities or groups. They are created by brewing Gunpowder into any drinkable potion. Upon impact, the bottle shatters and affects nearby mobs and players; the closer they are to the impact, the longer the effect lasts. This makes them ideal for offensive use (poisoning enemies) or support (healing teammates/pets)."
    },
    "minecraft:lingering_potion": {
        id: "minecraft:lingering_potion",
        name: "Lingering Potion",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Creating a cloud of status effect",
            secondaryUse: "Crafting Tipped Arrows"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Splash Potion + Dragon's Breath"]
        },
        specialNotes: [
            "Thrown potion that creates a lingering cloud on impact",
            "Cloud lasts for 30 seconds and shrinks over time",
            "Applies effects repeatedly to entities inside the cloud",
            "Required to craft Tipped Arrows (8 Arrows + 1 Lingering Potion)",
            "Brewed using Dragon's Breath collected from the Ender Dragon"
        ],
        description: "Lingering Potions are advanced potion variants that create a cloud of status effect upon impact. They are brewed by combining a Splash Potion with Dragon's Breath. The resulting cloud persists for 30 seconds, applying the effect to any entity that passes through it. This area-of-effect mechanic makes them useful for zoning or sustaining buffs/debuffs. Additionally, Lingering Potions are the only way to craft Tipped Arrows, which imbue arrows with potion effects."
    }
};
