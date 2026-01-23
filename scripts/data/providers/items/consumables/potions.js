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
            primaryUse: "Instant health restoration",
            secondaryUse: "Damaging undead mobs"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Glistering Melon Slice"]
        },
        specialNotes: [
            "Healing I restores 4 health points (2 hearts) instantly",
            "Healing II restores 8 health points (4 hearts) instantly",
            "Deals damage to undead mobs like Zombies and Skeletons",
            "Can be enhanced with Glowstone Dust for Healing II",
            "Can be turned into Splash Potion with Gunpowder",
            "Invaluable during boss fights and emergency situations"
        ],
        description: "The Potion of Healing, also known as Instant Health, is an alchemical brew that provides immediate health restoration to the consumer. Unlike other food items or the Regeneration effect, it grants its full benefit the moment it is consumed. In Bedrock Edition, it is crafted by brewing a Glistering Melon Slice into an Awkward Potion. It serves a secondary offensive purpose by dealing damage to undead enemies. Its instant-use nature makes it a critical survival tool for players exploring dangerous end-game structures or engaging in intense combat."
    },
    "minecraft:potion_of_regeneration": {
        id: "minecraft:potion_of_regeneration",
        name: "Potion of Regeneration",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Slowly restoring health over time",
            secondaryUse: "Increasing survivability in prolonged combat"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Ghast Tear"]
        },
        specialNotes: [
            "Regeneration I restores 0.5 hearts every 2.5 seconds (Bedrock)",
            "Regeneration II restores 0.5 hearts every 1.25 seconds",
            "Total health restored over full duration can be substantial",
            "Brewed using a Ghast Tear and an Awkward Potion",
            "Essential for recovery during the Wither boss fight",
            "Can be extended with Redstone or enhanced with Glowstone"
        ],
        description: "The Potion of Regeneration is a vital defensive brew that causes the consumer's health to recover steadily over time. Crafting it requires a Ghast Tear, making it a more difficult potion to mass-produce compared to standard healing. In Bedrock Edition, Regeneration I provides health every 2.5 seconds, while the enhanced Level II version doubles this speed. It is particularly effective for enduring status effects like Poison or Wither, and it is a mainstay for players attempting difficult raids or the Ender Dragon fight. Its long-term value often exceeds instant healing in sustained encounters."
    },
    "minecraft:potion_of_strength": {
        id: "minecraft:potion_of_strength",
        name: "Potion of Strength",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increasing melee attack damage",
            secondaryUse: "Clearing waves of mobs more efficiently"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Blaze Powder"]
        },
        specialNotes: [
            "Strength I increases melee damage by 130% in Bedrock",
            "Strength II increases melee damage by 260% in Bedrock",
            "Does not affect ranged weapons like bows or crossbows",
            "Brewed using Blaze Powder and an Awkward Potion",
            "Significantly reduces hits needed to kill standard mobs",
            "A core component for speedrunning and boss battles"
        ],
        description: "The Potion of Strength is an offensive powerhouse that significantly boosts the consumer's melee combat effectiveness. By increasing physical power, it allows players to deal vastly more damage with swords and axes. In Bedrock Edition, the effect is percentage-based, with Level I providing a 130% boost. While it has no impact on ranged combat, its effectiveness in close-quarters skirmishes and raids is unparalleled. It is brewed using Blaze Powder, requiring players to venture into the Nether before they can access this potent combat modifier."
    }
};
