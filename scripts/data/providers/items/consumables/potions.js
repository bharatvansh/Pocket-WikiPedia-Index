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
    "minecraft:potion_of_oozing": {
        id: "minecraft:potion_of_oozing",
        name: "Potion of Oozing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Oozing effect to spawn slimes on death",
            secondaryUse: "Slime farming and combat crowd control"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Slime Block"]
        },
        specialNotes: [
            "Causes entities to spawn 2 medium slimes upon death",
            "Brewed by combining an Awkward Potion with a Slime Block",
            "Added in the 1.21 Tricky Trials update (1.21.0)",
            "Useful for automation and slime farming",
            "Can be found in Trial Chamber Vaults as loot"
        ],
        description: "The Potion of Oozing is a brewing-based consumable introduced in the 1.21 Tricky Trials update. When consumed, it applies the Oozing status effect for 3 minutes, which causes the entity to spawn two medium-sized Slimes upon its death. This makes it an incredibly useful tool for farming slime balls or creating chaos in combat. In Bedrock Edition, it is brewed by combining an Awkward Potion with a Slime Block. It can also be found in Trial Chambers as a reward from Vaults, providing a strategic option for players facing trial challenges."
    },
    "minecraft:potion_of_weaving": {
        id: "minecraft:potion_of_weaving",
        name: "Potion of Weaving",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Weaving effect to spawn cobwebs on death",
            secondaryUse: "Battlefield control and moving faster through cobwebs"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Cobweb"]
        },
        specialNotes: [
            "Spawns 2-3 Cobwebs upon the entity's death",
            "Allows moving through cobwebs at 50% speed (instead of 25%)",
            "Brewed by combining an Awkward Potion with a Cobweb",
            "Introduced in 1.21 Tricky Trials",
            "Found as loot in Trial Chamber Vaults"
        ],
        description: "The Potion of Weaving is a specialized brew from the 1.21 update that grants the Weaving effect. Entities under this influence will spawn two to three Cobwebs upon death, potentially trapping nearby enemies. Uniquely, affected players and mobs can move through cobwebs at 50% of their normal speed instead of being almost completely immobilized. It is brewed by adding a Cobweb to an Awkward Potion. This potion is particularly thematic for Trial Chambers, where it can be used to control the battlefield or harvested from Vault rewards."
    },
    "minecraft:potion_of_infestation": {
        id: "minecraft:potion_of_infestation",
        name: "Potion of Infestation",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Infested effect to spawn silverfish when damaged",
            secondaryUse: "Strategy for overwhelming enemies"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Stone"]
        },
        specialNotes: [
            "10% chance to spawn 1-2 Silverfish when the entity takes damage",
            "Brewed by combining an Awkward Potion with a Stone block",
            "Added in the 1.21 Tricky Trials update",
            "Found as loot in Trial Chamber Vaults",
            "Strategically useful for distracting groups of enemies"
        ],
        description: "The Potion of Infestation is a combat-oriented beverage that grants the Infested status effect. While active, any damage taken by the entity has a 10% chance to spawn 1-2 Silverfish at its location. This creates a swarm of hostile pests around the target, making it ideal for overwhelming enemies or creating distractions. In Bedrock Edition, it is brewed by combining an Awkward Potion with a block of Stone. It is a key reward from Trial Chambers, reflecting the update's focus on dynamic and unpredictable combat encounters."
    },
    "minecraft:potion_of_wind_charging": {
        id: "minecraft:potion_of_wind_charging",
        name: "Potion of Wind Charging",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Wind Charged effect to release wind bursts on death",
            secondaryUse: "Knocking back enemies and interacting with redstone"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Breeze Rod"]
        },
        specialNotes: [
            "Releases a Wind Burst (knockback) upon the entity's death",
            "Brewed by combining an Awkward Potion with a Breeze Rod",
            "Introduced in the 1.21 Tricky Trials update",
            "Interacts with redstone (buttons, levers) upon explosion",
            "Common loot found in Trial Chamber Vaults"
        ],
        description: "The Potion of Wind Charging imbues the consumer with the essence of the Breeze. Upon the entity's death, it releases a powerful Wind Burst, similar to the explosion of a Wind Charge, which knocks back nearby mobs and interacts with redstone components. This effect can be used to set off traps or clear space. It is brewed by adding a Breeze Rod to an Awkward Potion. Like other 1.21 potions, it is frequently obtained from rewards within Trial Chambers, serving as a powerful late-game alchemical tool for tactical combat."
    },
    "minecraft:potion_of_swiftness": {
        id: "minecraft:potion_of_swiftness",
        name: "Potion of Swiftness",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increasing movement speed and field of view",
            secondaryUse: "Transpoting items and exploring biomes"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Sugar"]
        },
        specialNotes: [
            "Increases speed by 20% (Level I) or 40% (Level II)",
            "Also increases the player's field of view (FOV)",
            "Level II is brewed with Glowstone Dust",
            "Duration can be extended with Redstone Dust",
            "Essential for traversing long distances and exploration"
        ],
        description: "The Potion of Swiftness is a core alchemical brew that grants the Speed status effect. When consumed, it significantly increases the player's movement speed and slightly enlarges their field of view. This makes it an essential tool for traversing large distances, outrunning hostile mobs, or gaining a tactical advantage in PvP combat. It is brewed by adding Sugar to an Awkward Potion. Like most potions, its potency can be nearly doubled with glowstone or its duration significantly extended with redstone."
    },
    "minecraft:potion_of_strength": {
        id: "minecraft:potion_of_strength",
        name: "Potion of Strength",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increasing melee damage",
            secondaryUse: "Boss fights and clearing mob swarms"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Blaze Powder"]
        },
        specialNotes: [
            "Increases melee damage by 3 (Level I) or 6 (Level II)",
            "Potency increased by brewing with Glowstone Dust",
            "Duration extended by brewing with Redstone Dust",
            "Does not affect ranged damage (arrows/tridents)",
            "Essential for endgame boss fights like the Wither"
        ],
        description: "The Potion of Strength is a powerful offensive brew that enhances the player's physical prowess. Upon consumption, it grants the Strength status effect, which adds substantial bonus damage to every melee attack. This makes it a staple for high-level combat scenarios, such as raiding ocean monuments or battling the Wither. It is brewed by combining Blaze Powder with an Awkward Potion. While it doesn't affect bow or trident damage, its impact on sword and axe combat is devastating, especially when upgraded to its more potent Level II form."
    },
    "minecraft:potion_of_fire_resistance": {
        id: "minecraft:potion_of_fire_resistance",
        name: "Potion of Fire Resistance",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Immunity to fire and lava damage",
            secondaryUse: "Nether exploration and lava swimming"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Magma Cream"]
        },
        specialNotes: [
            "Grants complete immunity to fire, lava, and blazes",
            "Does not protect against physical attacks from blazes",
            "Allows players to swim and see through lava more clearly",
            "Lasts for 3 minutes (base) or 8 minutes (extended)",
            "Brewed from Magma Cream"
        ],
        description: "The Potion of Fire Resistance is a vital survival tool for any player venturing into the Nether or working near large lava pools. It grants absolute immunity to all forms of heat-based damage, including fire, lava, and the fireball projectiles from Blazes and Ghasts. This effect allows players to safely swim through lava lakes and navigate the hazardous terrain of the Nether with much less risk. It is brewed by adding Magma Cream to an Awkward Potion. Unlike most offensive potions, it doesn't have a Level II variant, but it can be extended to last for 8 minutes using redstone."
    },
    "minecraft:potion_of_decay": {
        id: "minecraft:potion_of_decay",
        name: "Potion of Decay",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Wither effect to damage entities",
            secondaryUse: "High-stakes combat and Bedrock-exclusive item collecting"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Witch Hut cauldrons"]
        },
        specialNotes: [
            "Inflicts the Wither II status effect for 40 seconds",
            "Exclusive to Minecraft Bedrock Edition",
            "Unbrewable in survival mode; found in Witch Hut cauldrons",
            "Causes damage over time that can kill entities",
            "Affects both living and undead mobs (unlike Poison)",
            "Highly rare survival item with significant combat utility"
        ],
        description: "The Potion of Decay is a rare and powerful Bedrock Edition exclusive item that inflicts the Wither II effect for 40 seconds. Unlike most potions, it cannot be brewed at a brewing stand in survival mode. It is primarily found as a rare loot item in Witch Hut cauldrons or obtained through commands. When used, it drains the health of most living entities, turning their health bar black and dealing continuous damage. It is one of the few ways to weaponize the Wither effect in Bedrock, making it highly prized for high-stakes encounters."
    }
};
