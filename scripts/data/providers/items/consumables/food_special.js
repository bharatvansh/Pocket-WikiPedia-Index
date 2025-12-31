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
            "Available in 5 levels (I to V) with varying durations",
            "Bedrock Edition duration: 1 hour per level",
            "Consuming the bottle destroys it (no empty glass bottle remains)",
            "Level I-III triggers Raid Omen when used in a village",
            "Level IV-V triggers Trial Omen when used near Trial Chambers",
            "Raid Omen starts a 30-second countdown before initiating a raid",
            "Trial Omen immediately activates ominous trial spawners",
            "Higher levels provide more challenging events with better rewards",
            "Can be found in Ominous Vaults with 7.5% chance"
        ],
        description: "The Ominous Bottle is a consumable item introduced in Minecraft 1.21 that grants the Bad Omen effect when consumed. This item replaced the previous banner-based Bad Omen mechanic, offering more control over the omen system. Ominous Bottles come in five levels (I-V), with lower levels (I-III) triggering Raid Omen for village raids and higher levels (IV-V) triggering Trial Omen for enhanced trial chambers. In Bedrock Edition, the effect lasts 1 hour per level. Raid Captains drop these bottles upon defeat, and they can also be found in vault chests. The bottle shatters upon consumption, providing no empty glass bottle. This item is essential for players seeking to trigger raids and ominous trials intentionally."
    }
};
