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
    "minecraft:potion_of_healing": {
        id: "minecraft:potion_of_healing",
        name: "Potion of Healing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Restoring health instantly",
            secondaryUse: "Damaging undead mobs"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Glistering Melon Slice"]
        },
        specialNotes: [
            "Restores 2 hearts (Level I) or 4 hearts (Level II) instantly",
            "Level II is brewed by adding Glowstone Dust",
            "Has the opposite effect on undead mobs like Zombies and Skeletons",
            "Cannot be extended with Redstone Dust",
            "Essential for emergency recovery during combat"
        ],
        description: "The Potion of Healing is a vital consumable that provides instantaneous health restoration. Unlike the Potion of Regeneration which heals over time, this brew restores a set amount of health the moment it is consumed. In Bedrock Edition, it is created by brewing a Glistering Melon Slice into an Awkward Potion. For greater potency, players can add Glowstone Dust to create a Potion of Healing II. Interestingly, this potion acts as a weapon against undead creatures, dealing instant damage to them instead of healing."
    },
    "minecraft:potion_of_night_vision": {
        id: "minecraft:potion_of_night_vision",
        name: "Potion of Night Vision",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Seeing clearly in darkness and underwater",
            secondaryUse: "Brewing ingredient for Potions of Invisibility"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Golden Carrot"]
        },
        specialNotes: [
            "Provides full brightness even in light level 0",
            "Improves visibility through water and lava",
            "Duration can be extended from 3 to 8 minutes using Redstone Dust",
            "Required base for brewing Potions of Invisibility",
            "Extremely useful for cave exploration and ocean monument raids"
        ],
        description: "The Potion of Night Vision grants the user the ability to see perfectly in the dark. While active, every block is rendered at maximum light level, making it appear as if it were broad daylight. This effect also significantly improves vision underwater, allowing players to see distant structures and mobs more clearly. It is brewed by adding a Golden Carrot to an Awkward Potion. For longer-lasting effects, Redstone Dust can be added to extend its duration to 8 minutes, making it a favorite for miners and underwater explorers."
    },
    "minecraft:potion_of_invisibility": {
        id: "minecraft:potion_of_invisibility",
        name: "Potion of Invisibility",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Making the player character model invisible",
            secondaryUse: "Sneaking past hostile mobs"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Night Vision", "Fermented Spider Eye"]
        },
        specialNotes: [
            "Armor, items in hand, and arrows stuck in body remain visible",
            "Mobs have a significantly reduced detection range (17% of normal)",
            "Duration can be extended to 8 minutes with Redstone Dust",
            "Brewed by corrupting a Potion of Night Vision with a Fermented Spider Eye",
            "Invisibility is broken if the player attacks or wears too much armor"
        ],
        description: "The Potion of Invisibility is a powerful tool for stealth and evasion. When consumed, it makes the player character model completely invisible to others and mobs. However, armor, held items, and particle effects remain visible, which can give away a player's position. Mobs also have a much harder time detecting an invisible player, though wearing armor increases their detection range. It is brewed by adding a Fermented Spider Eye to a Potion of Night Vision. It is ideal for sneaking through dangerous areas or avoiding unwanted combat."
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
    "minecraft:potion_of_water_breathing": {
        id: "minecraft:potion_of_water_breathing",
        name: "Potion of Water Breathing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Allows breathing underwater without using the oxygen bar",
            secondaryUse: "Required for deep-sea exploration and mining"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Pufferfish"]
        },
        specialNotes: [
            "Grants the Water Breathing status effect",
            "Prevents drowning damage while submerged",
            "Duration can be extended to 8 minutes using Redstone Dust",
            "Indispensable for Ocean Monument and Shipwreck exploration",
            "Does not improve visibility; pair with Night Vision for best results"
        ],
        description: "The Potion of Water Breathing is an essential tool for any explorer wishing to conquer the oceans of Minecraft. By granting the Water Breathing status effect, it allows players to stay submerged indefinitely without consuming their oxygen bar. This makes it perfect for raiding ocean monuments, searching shipwrecks, or collecting resources like prismarine and scute. It is brewed by adding a Pufferfish to an Awkwaard Potion."
    },
    "minecraft:potion_of_slow_falling": {
        id: "minecraft:potion_of_slow_falling",
        name: "Potion of Slow Falling",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Slows falling speed and negates fall damage",
            secondaryUse: "Safely navigating the End or high-altitude structures"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Phantom Membrane"]
        },
        specialNotes: [
            "Completely negates any fall damage upon landing",
            "Slows the rate of descent, allowing for limited gliding",
            "Prevents the player from trampling crops while active",
            "Brewed using Phantom Membranes dropped by Phantoms",
            "Extremely useful for fighting the Ender Dragon to avoid death from being launched"
        ],
        description: "The Potion of Slow Falling is a tactical brew that allows players to descend gracefully from any height. While under its effect, fall speed is significantly reduced, and all fall damage is completely negated, making it a lifesaver in high-stakes environments like the End. It also has a minor benefit of allowing players to walk over crops without destroying them. This potion is brewed by combining a Phantom Membrane with an Awkward Potion."
    },
    "minecraft:potion_of_turtle_master": {
        id: "minecraft:potion_of_turtle_master",
        name: "Potion of the Turtle Master",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Granting extreme damage resistance at the cost of movement speed",
            secondaryUse: "Tanking heavy hits from bosses or many enemies"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Turtle Shell"]
        },
        specialNotes: [
            "Applies Slowness IV and Resistance III (Level I) or Slowness VI and Resistance IV (Level II)",
            "Resistance IV provides a massive 80% damage reduction from most sources",
            "Brewed by using a Turtle Shell (Helmet) as the brewing ingredient",
            "Duration is short (20s base), but can be extended with Redstone Dust",
            "Ideal for surviving high-damage bursts when mobility isn't required"
        ],
        description: "The Potion of the Turtle Master is a unique brew that offers a powerful trade-off: incredible defensive prowess in exchange for sluggish movement. When drunk, it grants Resistance III (or IV for Level II) and Slowness IV, reflecting the attributes of a turtle. This makes the player an immovable tank, capable of surviving even the deadliest attacks with ease. It is brewed by adding a Turtle Shell helmet to an Awkward Potion."
    },
    "minecraft:potion_of_regeneration": {
        id: "minecraft:potion_of_regeneration",
        name: "Potion of Regeneration",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Restoring health over time",
            secondaryUse: "Brewing extended or more potent versions"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Ghast Tear"]
        },
        specialNotes: [
            "Restores health even when the hunger bar is low",
            "Does not restore health to undead mobs (Zombies, Skeletons)",
            "Base duration is 45 seconds in Bedrock Edition",
            "Extended version lasts 2 minutes with Redstone Dust",
            "Level II version restores health faster but lasts only 22 seconds"
        ],
        description: "The Potion of Regeneration is a vital defensive brew that restores the player's health over time. Unlike the Potion of Healing, which provides an instant burst of health, Regeneration provides a steady recovery, making it ideal for drawn-out battles or surviving environmental hazards. It is brewed by adding a Ghast Tear to an Awkward Potion. In Bedrock Edition, the effect is potent enough to sustain a player through significant damage, provided they can avoid being overwhelmed quickly."
    },
    "minecraft:potion_of_poison": {
        id: "minecraft:potion_of_poison",
        name: "Potion of Poison",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying damage over time to enemies",
            secondaryUse: "Brewing into Splash or Lingering potions for combat"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Spider Eye"]
        },
        specialNotes: [
            "Reduces health to a minimum of half a heart; cannot kill directly",
            "Undead mobs are immune to poison effects",
            "Spider eyes used for brewing can be obtained from Spiders and Cave Spiders",
            "Most effective when used as a Splash Potion against multiple targets",
            "Duration can be extended or potency increased with Redstone or Glowstone"
        ],
        description: "The Potion of Poison is a classic offensive alchemical tool that inflicts damage over time. When consumed or thrown, it slowly drains the target's health bar. Crucially, poison alone cannot kill a mob or player; it will stop dealing damage once the target is reduced to half a heart (one hit point). This makes it a perfect 'softening' tool before a final blow. It is brewed by adding a Spider Eye to an Awkward Potion. In Bedrock Edition, it is often used in Splash form to weaken groups of raiders or players in PvP."
    },
    "minecraft:potion_of_leaping": {
        id: "minecraft:potion_of_leaping",
        name: "Potion of Leaping",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increasing jump height and distance",
            secondaryUse: "Reducing fall damage and navigating vertical terrain"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Rabbit's Foot"]
        },
        specialNotes: [
            "Level I allows jumping over 1.25 blocks; Level II allows jumping over 2.5 blocks",
            "Slightly reduces fall damage by accounting for the increased jump peak",
            "Brewed using a Rabbit's Foot, a rare drop from Rabbits",
            "Highly useful for traversing mountainous biomes like Jagged Peaks",
            "Can be extended to 8 minutes with Redstone Dust"
        ],
        description: "The Potion of Leaping grants the Jump Boost status effect, significantly enhancing the player's athletic capabilities. While active, the player can clear higher obstacles and jump across wider gaps that would normally be impassable. This makes it an excellent choice for exploration in rugged terrain or for gaining the high ground during combat. It is brewed by adding a Rabbit's Foot to an Awkward Potion. In Bedrock Edition, the increased mobility is particularly useful for building, cave exploration, and safely descending steep cliffs."
    }
};
