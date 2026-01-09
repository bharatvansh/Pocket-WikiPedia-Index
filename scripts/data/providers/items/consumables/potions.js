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
        name: "Potion of Healing",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Restores 4 health points (2 hearts)",
            secondaryUse: "Essential for combat and survival situations"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Glistening Melon Slice"]
        },
        specialNotes: [
            "Base healing potion that restores 4 health points",
            "Can be extended to 8 seconds (restoring 8 health) with Redstone",
            "Can be amplified to restore 8 health instantly with Glowstone",
            "Essential for combat, exploration, and emergency healing",
            "Stacks to 1 in inventory"
        ],
        description: "The Potion of Healing is a fundamental brewing creation that restores 4 health points (2 hearts) when consumed. It is crafted by adding a Glistening Melon Slice to an Awkward Potion in a brewing stand. This potion serves as the base for more powerful healing variants: adding Redstone extends the healing effect over time, while Glowstone amplifies it to restore 8 health points instantly. As a non-stackable consumable, it is essential for combat situations, exploration, and emergency healing during dangerous encounters."
    },
    "minecraft:long_potion": {
        id: "minecraft:long_potion",
        name: "Potion of Healing (Long)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Restores 8 health points (4 hearts) over 8 seconds",
            secondaryUse: "Extended healing for prolonged combat"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Healing", "Redstone Dust"]
        },
        specialNotes: [
            "Extends healing effect to 8 seconds, restoring 8 health total",
            "Useful for sustained combat or when facing multiple enemies",
            "Cannot be combined with amplification (Glowstone)",
            "Stacks to 1 in inventory"
        ],
        description: "The extended Potion of Healing provides gradual healing over an 8-second period, restoring a total of 8 health points (4 hearts). Created by adding Redstone Dust to a regular Potion of Healing, this variant is particularly useful in prolonged combat scenarios where immediate healing isn't critical but sustained health recovery is beneficial. The extended duration makes it ideal for facing multiple enemies or navigating dangerous environments where constant health regeneration can be the difference between survival and defeat."
    },
    "minecraft:strong_potion": {
        id: "minecraft:strong_potion",
        name: "Potion of Healing II",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Restores 8 health points (4 hearts) instantly",
            secondaryUse: "Emergency healing in critical situations"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Healing", "Glowstone Dust"]
        },
        specialNotes: [
            "Amplified version that restores 8 health points instantly",
            "Critical for emergency situations and high-damage encounters",
            "Cannot be combined with extension (Redstone)",
            "Stacks to 1 in inventory",
            "Most powerful instant healing potion available"
        ],
        description: "The Potion of Healing II represents the pinnacle of instant healing in Minecraft, restoring a substantial 8 health points (4 hearts) immediately upon consumption. Crafted by adding Glowstone Dust to a standard Potion of Healing, this amplified variant is indispensable for critical combat situations where rapid health recovery can mean the difference between life and death. Its instant healing capability makes it particularly valuable when facing powerful bosses or during intense PvP encounters where every second counts."
    },
    "minecraft:strength_potion": {
        id: "minecraft:strength_potion",
        name: "Potion of Strength",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases melee damage by 3 points (1.5 hearts)",
            secondaryUse: "Enhances combat effectiveness against mobs"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Blaze Powder"]
        },
        specialNotes: [
            "Grants Strength I effect for 3 minutes",
            "Increases melee attack damage by 3 points",
            "Can be extended to 8 minutes with Redstone",
            "Can be amplified to Strength II with Glowstone",
            "Stacks to 1 in inventory",
            "Essential for combat-focused gameplay"
        ],
        description: "The Potion of Strength is a powerful combat-enhancing brew that grants the Strength I effect for 3 minutes, increasing melee attack damage by 3 points (1.5 hearts). Created by brewing Blaze Powder with an Awkward Potion, this potion significantly boosts a player's combat effectiveness against hostile mobs and in PvP scenarios. It can be further modified: Redstone extends the duration to 8 minutes for prolonged engagements, while Glowstone amplifies the effect to Strength II for even greater damage output during critical battles."
    },
    "minecraft:long_strength_potion": {
        id: "minecraft:long_strength_potion",
        name: "Potion of Strength (Long)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases melee damage by 3 points for 8 minutes",
            secondaryUse: "Prolonged combat enhancement"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Strength", "Redstone Dust"]
        },
        specialNotes: [
            "Extends Strength I effect to 8 minutes duration",
            "Ideal for long dungeon explorations or boss fights",
            "Maintains +3 damage bonus throughout duration",
            "Stacks to 1 in inventory",
            "Cannot be combined with amplification"
        ],
        description: "The extended Potion of Strength provides an 8-minute duration of the Strength I effect, offering a sustained +3 damage bonus to melee attacks. This prolonged combat enhancement is particularly valuable for extended dungeon explorations, boss battles, or situations where continuous fighting is expected. By adding Redstone Dust to a standard Potion of Strength, players can maintain their enhanced combat capabilities for significantly longer periods, reducing the need for frequent potion consumption during intense combat scenarios."
    },
    "minecraft:strong_strength_potion": {
        id: "minecraft:strong_strength_potion",
        name: "Potion of Strength II",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases melee damage by 6 points (3 hearts)",
            secondaryUse: "Maximum combat power for critical battles"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Strength", "Glowstone Dust"]
        },
        specialNotes: [
            "Amplified version granting Strength II effect",
            "Increases melee damage by 6 points (3 hearts)",
            "Duration reduced to 1 minute 30 seconds",
            "Most powerful strength potion available",
            "Stacks to 1 in inventory",
            "Cannot be combined with extension"
        ],
        description: "The Potion of Strength II represents the ultimate combat enhancement, providing a massive +6 damage bonus (3 hearts) to melee attacks through the Strength II effect. While the duration is reduced to 1 minute and 30 seconds, the dramatic increase in damage output makes this potion invaluable for critical battles against powerful enemies or bosses. Created by adding Glowstone Dust to a standard Potion of Strength, this amplified variant is the most potent strength-enhancing brew available, capable of turning the tide in even the most challenging combat situations."
    },
    "minecraft:swiftness_potion": {
        id: "minecraft:swiftness_potion",
        name: "Potion of Swiftness",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases movement speed by 20%",
            secondaryUse: "Enhances mobility and exploration"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Awkward Potion", "Sugar"]
        },
        specialNotes: [
            "Grants Speed I effect for 3 minutes",
            "Increases movement speed by 20%",
            "Can be extended to 8 minutes with Redstone",
            "Can be amplified to Speed II with Glowstone",
            "Stacks to 1 in inventory",
            "Useful for exploration, escape, and mobility"
        ],
        description: "The Potion of Swiftness is a mobility-enhancing brew that grants the Speed I effect for 3 minutes, increasing movement speed by 20%. Crafted by adding Sugar to an Awkward Potion, this potion is invaluable for exploration, quick escapes from dangerous situations, and general mobility enhancement. The potion can be modified: Redstone extends the duration to 8 minutes for prolonged speed boosts, while Glowstone amplifies the effect to Speed II for even greater velocity when rapid movement is critical."
    },
    "minecraft:long_swiftness_potion": {
        id: "minecraft:long_swiftness_potion",
        name: "Potion of Swiftness (Long)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases movement speed by 20% for 8 minutes",
            secondaryUse: "Extended mobility enhancement"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Swiftness", "Redstone Dust"]
        },
        specialNotes: [
            "Extends Speed I effect to 8 minutes duration",
            "Ideal for long-distance travel and exploration",
            "Maintains 20% speed boost throughout",
            "Stacks to 1 in inventory",
            "Cannot be combined with amplification"
        ],
        description: "The extended Potion of Swiftness provides an 8-minute duration of the Speed I effect, offering a sustained 20% increase in movement speed. This prolonged mobility enhancement is particularly useful for long-distance travel, extensive exploration, or situations where maintained speed is beneficial. By adding Redstone Dust to a standard Potion of Swiftness, players can enjoy enhanced mobility for significantly longer periods, making it ideal for traversing vast landscapes or navigating complex cave systems."
    },
    "minecraft:strong_swiftness_potion": {
        id: "minecraft:strong_swiftness_potion",
        name: "Potion of Swiftness II",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Increases movement speed by 40%",
            secondaryUse: "Maximum mobility for critical situations"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Potion of Swiftness", "Glowstone Dust"]
        },
        specialNotes: [
            "Amplified version granting Speed II effect",
            "Increases movement speed by 40%",
            "Duration reduced to 1 minute 30 seconds",
            "Most powerful speed potion available",
            "Stacks to 1 in inventory",
            "Cannot be combined with extension",
            "Excellent for quick escapes and rapid positioning"
        ],
        description: "The Potion of Swiftness II represents the ultimate mobility enhancement, providing a substantial 40% increase in movement speed through the Speed II effect. While the duration is reduced to 1 minute and 30 seconds, the dramatic boost in velocity makes this potion invaluable for critical situations requiring rapid movement. Whether escaping from dangerous enemies, quickly traversing hazardous terrain, or positioning for combat, this amplified potion offers unparalleled speed enhancement for short but intense periods."
    }
};
