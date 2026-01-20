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
    },
    "minecraft:potion_of_healing": {
        id: "minecraft:potion_of_healing",
        name: "Potion of Healing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly restores health to the player or living mobs",
            secondaryUse: "Deals damage to undead mobs like Zombies and Skeletons"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Glistering Melon Slice"]
        },
        specialNotes: [
            "Restores 4 health (2 hearts) at Level I and 8 health (4 hearts) at Level II",
            "Can be enhanced with Glowstone Dust to create Potion of Healing II",
            "Deals instant damage to undead mobs instead of healing them",
            "Commonly used in combat to quickly recover health during a fight"
        ],
        description: "The Potion of Healing is a vital alchemical item that provides an immediate restoration of health. Unlike many other potions that apply a status effect over time, this potion works instantly upon consumption. It is brewed by adding a Glistering Melon Slice to an Awkward Potion. In addition to its beneficial effects on the player and passive animals, it serves as a powerful weapon against undead creatures, dealing instant damage to them. It is indispensable for survival during boss fights or in high-risk areas like the Nether."
    },
    "minecraft:potion_of_fire_resistance": {
        id: "minecraft:potion_of_fire_resistance",
        name: "Potion of Fire Resistance",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Provides immunity to fire, lava, and other heat-based damage",
            secondaryUse: "Safe navigation through the Nether and lava lakes"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Magma Cream"]
        },
        specialNotes: [
            "Grants complete immunity to damage from fire, lava, and magma blocks",
            "Also prevents damage from Blaze fireballs and the Burning effect",
            "Available in 3:00 and 8:00 (Extended) durations",
            "Crucial for exploring the Nether and mining near lava"
        ],
        description: "The Potion of Fire Resistance is an essential tool for any player venturing into the Nether or exploring deep caves. When consumed, it grants the player complete immunity to all forms of heat-based damage, including direct contact with fire, swimming in lava, and stepping on magma blocks. It is brewed by combining a Magma Cream with an Awkward Potion. This effect is powerful enough to allow players to swim through lava lakes comfortably, making it invaluable for recovering lost items or mining ancient debris."
    },
    "minecraft:potion_of_night_vision": {
        id: "minecraft:potion_of_night_vision",
        name: "Potion of Night Vision",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases brightness of the world for the player",
            secondaryUse: "Significantly improves visibility underwater"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Golden Carrot"]
        },
        specialNotes: [
            "Raises the light level seen by the player to 15 (maximum brightness)",
            "Makes everything clearly visible even in total darkness",
            "Greatly enhances visibility and clarity when swimming underwater",
            "Available in 3:00 and 8:00 (Extended) durations"
        ],
        description: "The Potion of Night Vision is a powerful brew that enhances the player's sight, making even the darkest environments appear fully lit. It is created by brewing a Golden Carrot into an Awkward Potion. While active, the player will perceive all areas as having the maximum light level, which is perfect for cave exploration, night-time travel, or spotting mobs from a distance. Furthermore, it clears up the murky vision typical of being underwater, allowing for easier navigation of shipwrecks and ocean monuments."
    }
};
