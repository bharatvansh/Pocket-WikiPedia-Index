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
    },
    "minecraft:oozing_potion": {
        id: "minecraft:oozing_potion",
        name: "Potion of Oozing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Causes affected entities to spawn 2 Slimes upon death",
            secondaryUse: "Used to create Oozing Splash and Lingering potions"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Slime Block"]
        },
        specialNotes: [
            "Effect duration is 3 minutes in Bedrock Edition",
            "Affected entities spawn 2 medium slimes when they die",
            "Brewed using a Slime Block and an Awkward Potion",
            "Useful for automating slimeball farms or tactical combat"
        ],
        description: "The Potion of Oozing is a specialized utility potion introduced in 1.21. When applied to an entity, it grants the Oozing effect, ensuring that two medium slimes spawn when the entity perishes. This effect is independent of how the entity dies, making it highly valuable for slime farming. It is brewed by combining an Awkward Potion with a Slime Block, representing a unique use for the compacted slime material."
    },
    "minecraft:weaving_potion": {
        id: "minecraft:weaving_potion",
        name: "Potion of Weaving",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Causes affected entities to spawn Cobwebs upon death",
            secondaryUse: "Allows entities to move through Cobwebs faster"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Cobweb"]
        },
        specialNotes: [
            "Effect duration is 3 minutes in Bedrock Edition",
            "Affected entities spawn 2-3 Cobwebs when they die",
            "Non-player entities can move through Cobwebs at 50% speed instead of 25%",
            "Brewed using a Cobweb and an Awkward Potion",
            "Introduced as part of the Tricky Trials update (1.21)"
        ],
        description: "The Potion of Weaving is a tactical potion that interacts with Cobweb mechanics. Entities under this effect will spawn multiple Cobweb blocks upon death, potentially trapping nearby enemies. Additionally, it grants the ability to traverse Cobwebs with significantly less speed reduction. Brewed from a Cobweb and an Awkward Potion, it offers unique battlefield control options, especially in tight spaces like Trial Chambers."
    },
    "minecraft:wind_charged_potion": {
        id: "minecraft:wind_charged_potion",
        name: "Potion of Wind Charging",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Causes affected entities to emit a wind burst upon death",
            secondaryUse: "Synergizes with Wind Charge and Mace combat"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Breeze Rod"]
        },
        specialNotes: [
            "Effect duration is 3 minutes in Bedrock Edition",
            "Affected entities release a wind burst (similar to a Wind Charge) when they die",
            "Brewed using a Breeze Rod and an Awkward Potion",
            "Can launch nearby entities into the air upon the target's death"
        ],
        description: "The Potion of Wind Charging imbues entities with the volatile energy of the Breeze. Upon the death of an affected entity, a powerful wind burst is released, knocking back any nearby creatures. This effect mimics the impact of a Wind Charge projectile. It is brewed by adding a Breeze Rod to an Awkward Potion, making it a high-tier potion derived from Trial Chamber rewards. It is particularly effective for crowd control in dense mob encounters."
    },
    "minecraft:infested_potion": {
        id: "minecraft:infested_potion",
        name: "Potion of Infestation",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Gives entities a 10% chance to spawn 1-2 Silverfish when hurt",
            secondaryUse: "Creating chaotic combat situations"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Stone Block"]
        },
        specialNotes: [
            "Effect duration is 3 minutes in Bedrock Edition",
            "Each time an entity takes damage, there is a 10% chance to spawn 1-2 Silverfish",
            "Brewed using a Stone block and an Awkward Potion",
            "Ideal for distracting enemies or creating unexpected hazards"
        ],
        description: "The Potion of Infestation makes combat unpredictable by granting entities a chance to spawn Silverfish whenever they take damage. This effect can quickly fill a battlefield with the small, aggressive pests, creating a distraction for both the attacker and the defender. Brewed simply from a Stone block and an Awkward Potion, it is one of the more accessible 1.21 potions but requires careful use to avoid being overwhelmed by your own infestation."
    }
};
