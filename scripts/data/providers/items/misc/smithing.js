// Pocket Wikipedia Foundation - Smithing Templates Data
// ============================================
// This file contains: Netherite upgrade smithing template,
// all armor trim smithing templates (coast, dune, eye, host,
// raiser, rib, sentry, shaper, silence, snout, spire, tide,
// vex, ward, wayfinder, wild, bolt, flow)
// ============================================

/**
 * Smithing template items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const smithingTemplates = {
    "minecraft:bolt_armor_trim_smithing_template": {
        id: "minecraft:bolt_armor_trim_smithing_template",
        name: "Bolt Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Bolt' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and a Block of Copper"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Block of Copper", "1x Bolt Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found exclusively in Trial Chambers inside Vaults",
            "Has a 5.4% chance to drop when opening a Vault with a Trial Key in Bedrock Edition",
            "Consists of a copper-themed pattern that adds bolts to armor pieces",
            "Requires a trim material (e.g., Copper Ingot, Iron Ingot, Quartz) to apply the color"
        ],
        description: "The Bolt Armor Trim Smithing Template is a unique decorative item introduced in the 1.21 Tricky Trials update. Found within the Vaults of Trial Chambers, it allows players to customize their armor with a distinctive 'Bolt' pattern. To use it, players must combine the template with a piece of armor and a trim material at a Smithing Table. While the template is consumed upon use, it can be duplicated by crafting it with seven diamonds and a Block of Copper, ensuring players can complete their full armor sets."
    },
    "minecraft:flow_armor_trim_smithing_template": {
        id: "minecraft:flow_armor_trim_smithing_template",
        name: "Flow Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Flow' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Breeze Rods"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Breeze Rod", "1x Flow Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found exclusively in Ominous Vaults within Trial Chambers",
            "Uncommon rarity item - available only from ominous trial rewards",
            "Features a wind and air-inspired flowing pattern",
            "Duplication requires Breeze Rods, making it more expensive to duplicate than some other templates",
            "Added in the 1.21 Tricky Trials update",
            "The flow pattern creates dynamic, wave-like designs on armor",
            "Rarity changed from Common to Uncommon in Bedrock Edition 1.21.30"
        ],
        description: "The Flow Armor Trim Smithing Template is a distinctive decorative item introduced in the 1.21 Tricky Trials update, exclusively obtainable from Ominous Vaults in Trial Chambers. This template features a flowing, wind-inspired design that creates dynamic patterns on armor, reflecting the airy and breezy aesthetic of the Trial Chambers' inhabitants. When applied to armor at a Smithing Table with a compatible trim material such as Copper Ingots or Iron Ingots, the Flow trim adds an elegant, motion-oriented appearance to the piece. Unlike standard Vaults that contain the Bolt trim, only the challenging Ominous Vaults offer the Flow Armor Trim template. Players can duplicate the template for a complete armor set using seven diamonds and a Breeze Rod, though this duplication cost is notably higher than some other trims due to the Breeze Rod requirement. In Bedrock Edition 1.21.30, the Flow Armor Trim's rarity was corrected from Common to Uncommon, better reflecting its actual availability."
    }
};
