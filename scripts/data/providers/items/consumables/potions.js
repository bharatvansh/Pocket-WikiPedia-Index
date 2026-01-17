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
    "minecraft:potion_infestation": {
        id: "minecraft:potion_infestation",
        name: "Potion of Infestation",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Drinking to apply the Infested status effect",
            secondaryUse: "Spawning Silverfish when taking damage"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Stone + Awkward Potion"]
        },
        specialNotes: [
            "Grants Infested: 10% chance to spawn 1-2 Silverfish on damage.",
            "Brewed with a Stone block + Awkward Potion.",
            "Duration: 3:00 (Regular) or 8:00 (Extended).",
            "Can be turned into Splash/Lingering variants and Tipped Arrows."
        ],
        description: "The Potion of Infestation is a brewing item added in the 1.21 update. When consumed or applied via splash potion, it grants the Infested status effect. This effect causes entities to have a 10% chance to spawn 1-2 Silverfish when they take damage. It is brewed by adding a Stone block to an Awkward Potion in a brewing stand. This potion is particularly useful in mob farms or combat scenarios where extra mob disruption is desired. In Bedrock Edition, it behaves like other potions, being able to be used in cauldrons to tip arrows."
    },
    "minecraft:potion_oozing": {
        id: "minecraft:potion_oozing",
        name: "Potion of Oozing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Drinking to apply the Oozing status effect",
            secondaryUse: "Spawning Slimes upon the death of an entity"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Slime Block + Awkward Potion"]
        },
        specialNotes: [
            "Grants Oozing: Spawns 2 medium Slimes on death.",
            "Brewed with a Slime Block + Awkward Potion.",
            "Duration: 3:00 (Regular) or 8:00 (Extended).",
            "Effective for Slime farming automation."
        ],
        description: "The Potion of Oozing is an alchemical item introduced in 1.21. It applies the Oozing status effect, which causes an entity to spawn two Slimes upon death. This makes it an invaluable tool for Slime farming or for creating chaotic combat situations. It is brewed by combining a Slime Block with an Awkward Potion. Higher levels of the effect don't increase slime count, but extending the duration is possible with Redstone. Like all potions, it can be splashed or brewed into lingering clouds to affect groups of mobs or players efficiently."
    },
    "minecraft:potion_weaving": {
        id: "minecraft:potion_weaving",
        name: "Potion of Weaving",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Drinking to apply the Weaving status effect",
            secondaryUse: "Spawning Cobwebs upon death and moving faster through them"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Cobweb + Awkward Potion"]
        },
        specialNotes: [
            "Grants Weaving: Spawns 2-3 Cobwebs on death.",
            "Allows entities to move faster through Cobwebs.",
            "Brewed with a Cobweb + Awkward Potion.",
            "Duration: 3:00 (Regular) or 8:00 (Extended)."
        ],
        description: "The Potion of Weaving is a technical potion introduced in the Tricky Trials update. It grants the Weaving effect, which causes entities to spawn 2-3 Cobweb blocks upon death and allows mobs to move through webs at a faster rate. It is brewed using a Cobweb with an Awkward Potion. This potion is a powerful utility in defense scenarios, slowing down attackers after they are defeated. In Bedrock Edition, the weaving effect can be used tacticaly to trap pursuers or create obstacles during large-scale battles."
    },
    "minecraft:potion_wind_charging": {
        id: "minecraft:potion_wind_charging",
        name: "Potion of Wind Charging",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Drinking to apply the Wind Charged status effect",
            secondaryUse: "Releasing a wind burst upon death"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Breeze Rod + Awkward Potion"]
        },
        specialNotes: [
            "Grants Wind Charged: Releases a wind burst on death.",
            "Wind burst knocks back nearby entities.",
            "Brewed with a Breeze Rod + Awkward Potion.",
            "Duration: 3:00 (Regular) or 8:00 (Extended)."
        ],
        description: "The Potion of Wind Charging is a wind-themed alchemical item added in 1.21. It grants the Wind Charged effect, which causes an entity to release a wind burst upon death, similar to the projectile fired by a Breeze. This burst knocks back surrounding entities and can initiate chain reactions in groups of mobs. It is brewed by adding a Breeze Rod or Wind Charge to an Awkward Potion. This effect is highly strategic for keeping distance in group combat or disrupting mob formations."
    }
};
