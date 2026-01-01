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
            "Found exclusively in Trial Chambers inside Vaults",
            "Has a 5.4% chance to drop when opening a Vault with a Trial Key in Bedrock Edition",
            "Features a wind-themed swirling pattern reminiscent of Breeze attacks",
            "Unique among armor trims for using Breeze Rods instead of blocks for duplication",
            "Can be applied to any armor piece including netherite",
            "Requires a trim material (e.g., Copper Ingot, Iron Ingot, Quartz) to apply the color",
            "The Breeze Rod duplication method ties directly to Trial Chambers gameplay"
        ],
        description: "The Flow Armor Trim Smithing Template is a distinctive decorative pattern introduced in Minecraft 1.21 as part of the Tricky Trials update, obtainable from the Vaults within Trial Chambers. This template features an elegant, wind-inspired design characterized by graceful curves and swirling patterns that evoke the airy movements of Breezes and the explosive bursts of Wind Charges. What makes the Flow Trim particularly unique is its duplication recipe - unlike most other armor trims that require specific blocks, the Flow Trim is duplicated using Breeze Rods instead. This creates a thematic connection between the trim and the Trial Chambers' hostile mobs, encouraging players to engage with the chamber's combat mechanics. When applied to armor with a suitable trim material, the Flow Trim adds an eye-catching aesthetic element that stands apart from the geometric Bolt trim, offering players more creative options for customizing their equipment appearance."
    }
};
