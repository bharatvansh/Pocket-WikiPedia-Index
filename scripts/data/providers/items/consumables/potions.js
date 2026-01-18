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
    "minecraft:antidote": {
        id: "minecraft:medicine",
        name: "Antidote",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing the Poison status effect",
            secondaryUse: "Counteracting negative effects from poisonous mobs or items"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Silver (Element)"]
        },
        specialNotes: [
            "Exclusively available in Bedrock and Education Editions.",
            "Can only be consumed when the player is suffering from Poison.",
            "Instantly removes all levels of the Poison effect upon consumption.",
            "Returns an empty glass bottle to the player's inventory after use.",
            "Cannot be turned into splash or lingering variants."
        ],
        description: "The Antidote is a specialized medicinal item in Minecraft Bedrock Edition, accessible when Education features are toggled on. It is brewed by combining an Awkward Potion with the element Silver in a Brewing Stand. Its primary function is to immediately cure the player of any Poison effect, making it highly effective against Cave Spiders, Pufferfish, or Witches. Unlike standard potions, it can only be drunk when the specified debuff is active, and it does not have splash or lingering versions."
    },
    "minecraft:elixir": {
        id: "minecraft:medicine",
        name: "Elixir",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing the Weakness status effect",
            secondaryUse: "Restoring full physical damage capabilities"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Cobalt (Element)"]
        },
        specialNotes: [
            "Exclusively available in Bedrock and Education Editions.",
            "Can only be consumed when the player is suffering from Weakness.",
            "Instantly removes the Weakness effect, restoring normal attack damage.",
            "Returns an empty glass bottle after use.",
            "Useful in combat against mobs that apply weakness."
        ],
        description: "The Elixir is a chemistry-based medicine used to counteract the Weakness status effect. Available only in Bedrock and Education Editions with chemistry features enabled, it is created by brewing Cobalt into an Awkward Potion. When consumed, it immediately restores the player's ability to deal full melee damage. This makes it a strategic item to carry when facing Witches or other sources of spiritual or physical fatigue, though it requires the player to be affected by Weakness before it can be drunk."
    },
    "minecraft:eye_drops": {
        id: "minecraft:medicine",
        name: "Eye Drops",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing the Blindness status effect",
            secondaryUse: "Restoring full visibility in dark or obscured environments"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Calcium (Element)"]
        },
        specialNotes: [
            "Exclusively available in Bedrock and Education Editions.",
            "Can only be consumed when the player is blinded.",
            "Instantly clears vision by removing the Blindness effect.",
            "Returns an empty glass bottle after use.",
            "Crucial for countering the Warden's darkness or other blinding hazards."
        ],
        description: "Eye Drops are a medicinal item designed to cure Blindness, found in the chemistry features of Bedrock and Education Editions. They are brewed using Calcium and an Awkward Potion. Upon consumption, the player's vision is instantly restored, removing the thick fog and limited sight range caused by Blindness. This utility is particularly valuable in environments where visibility is compromised by mob effects or specific traps, allowing for a swift recovery of situational awareness."
    },
    "minecraft:tonic": {
        id: "minecraft:medicine",
        name: "Tonic",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing the Nausea status effect",
            secondaryUse: "Stabilizing vision and movement"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Bismuth (Element)"]
        },
        specialNotes: [
            "Exclusively available in Bedrock and Education Editions.",
            "Can only be consumed when the player is experiencing Nausea.",
            "Instantly stops the screen-warping effect of Nausea.",
            "Returns an empty glass bottle after use.",
            "Helpful for players sensitive to the Nausea visual effect."
        ],
        description: "The Tonic is a chemistry-brewed medicine used to treat Nausea in Minecraft Bedrock and Education Editions. It is produced by brewing Bismuth into an Awkward Potion in a standard Brewing Stand. Consumption of the Tonic immediately ceases the disorienting screen-warping visual effect associated with Nausea, providing immediate clarity and stability for the player. Like other medicines, it is a single-use item that leaves behind a glass bottle and can only be used when the symptom is present."
    }
};
