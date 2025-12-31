// Pocket Wikipedia Foundation - Special Food Data
// ============================================
// This file contains: Golden apple, enchanted golden apple,
// golden carrot, honey bottle, rotten flesh, spider eye,
// poisonous potato, ominous bottle
// ============================================

/**
 * Special food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const specialFood = {
    "minecraft:enchanted_golden_apple": {
        id: "minecraft:enchanted_golden_apple",
        name: "Enchanted Golden Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Powerful food with status effects",
            secondaryUse: "PvP and boss fights"
        },
        food: {
            hunger: 4,
            saturation: 9.6
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in dungeon, mineshaft, desert temple, and ancient city chests"]
        },
        specialNotes: [
            "Grants Absorption IV for 2 minutes (8 extra hearts)",
            "Grants Regeneration II for 20 seconds in Java, 30 seconds in Bedrock",
            "Grants Fire Resistance I for 5 minutes",
            "Grants Resistance I for 5 minutes",
            "Cannot be crafted - must be found in loot chests",
            "Extremely rare drop from structure exploration"
        ],
        description: "The Enchanted Golden Apple, also known as the 'Notch Apple' or 'God Apple', is the most powerful food item in Minecraft. It provides multiple powerful status effects including Absorption, Regeneration, Fire Resistance, and Resistance, making it invaluable for difficult combat situations. Unlike regular golden apples, it cannot be crafted and must be found in dungeon chests."
    },
    "minecraft:ominous_bottle": {
        id: "minecraft:ominous_bottle",
        name: "Ominous Bottle",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Gaining Bad Omen effect for raids and trials",
            secondaryUse: "Triggering ominous events in villages and trial chambers"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Raid Captains and found in Vault chests"]
        },
        specialNotes: [
            "Available in 5 levels (I to V)",
            "Bedrock Edition duration: Fixed at 1 hour 40 minutes (100 minutes) regardless of level",
            "Consuming the bottle destroys it (no empty glass bottle remains)",
            "Location determines event type, not bottle level",
            "When used in a village: Triggers Raid Omen (initiates raid)",
            "When used near Trial Chambers: Triggers Trial Omen (activates ominous trial)",
            "Raid Omen starts a 30-second countdown before initiating a raid",
            "Trial Omen immediately activates ominous trial spawners",
            "Higher levels provide more challenging events with better rewards",
            "Drop chance: 18.6% from Standard Vaults, 13.4% from Ominous Vaults"
        ],
        description: "The Ominous Bottle is a consumable item introduced in Minecraft 1.21 that grants the Bad Omen effect when consumed. This item replaced the previous banner-based Bad Omen mechanic, offering more control over the omen system. Ominous Bottles come in five levels (I-V), with the level determining the difficulty of the triggered event rather than the event type. The event type is determined by location: villages trigger Raid Omen for village raids, while Trial Chambers trigger Trial Omen for enhanced trials. In Bedrock Edition, the effect lasts a fixed duration of 1 hour 40 minutes regardless of level. Raid Captains drop these bottles upon defeat, and they can also be found in vault chests with an 18.6% chance from Standard Vaults and 13.4% from Ominous Vaults. The bottle shatters upon consumption, providing no empty glass bottle. This item is essential for players seeking to trigger raids and ominous trials intentionally."
    }
};
