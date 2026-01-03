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
    "minecraft:netherite_upgrade_smithing_template": {
        id: "minecraft:netherite_upgrade_smithing_template",
        name: "Netherite Upgrade Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Upgrading Diamond gear to Netherite gear at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Netherrack"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Netherrack", "1x Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Required to upgrade Diamond tools and armor to Netherite.",
            "Found in Bastion Remnant chests (guaranteed in Treasure Room chests).",
            "Consumed upon use in a Smithing Table.",
            "Can be duplicated using 7 Diamonds and 1 Netherrack.",
            "Makes Netherite gear harder to obtain than in versions prior to 1.20."
        ],
        description: "The Netherite Upgrade Smithing Template is an essential item for players looking to obtain the strongest gear in the game. It is required to upgrade Diamond armor, weapons, and tools into their Netherite counterparts at a Smithing Table. These templates are found exclusively in Bastion Remnants in the Nether, with a guaranteed spawn in Treasure Room chests. Because the template is consumed upon use, players are encouraged to duplicate it using seven diamonds and a block of Netherrack before using it, ensuring they always have a supply for future upgrades."
    },
    "minecraft:silence_armor_trim_smithing_template": {
        id: "minecraft:silence_armor_trim_smithing_template",
        name: "Silence Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Silence' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Cobbled Deepslate"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Cobbled Deepslate", "1x Silence Armor Trim Smithing Template"]
        },
        specialNotes: [
            "The rarest armor trim in the game (1.2% chance in Ancient City chests).",
            "Found exclusively in Ancient City chests.",
            "Features a detailed, covering pattern that silences the armor's base texture.",
            "Can be duplicated using 7 Diamonds and 1 Cobbled Deepslate.",
            "Highly sought after for its unique and extensive visual alteration."
        ],
        description: "The Silence Armor Trim Smithing Template is the rarest and most detailed armor trim available in Minecraft. Found exclusively in Ancient City chests with a very low drop rate of 1.2%, it allows players to apply the 'Silence' pattern to their armor. This trim covers more of the armor piece than any other, creating a dramatic and prestigious look. Due to its extreme rarity, it is highly recommended to duplicate the template using seven diamonds and a block of Cobbled Deepslate before using it. It serves as a major status symbol for explorers who have braved the Deep Dark."
    },
    "minecraft:ward_armor_trim_smithing_template": {
        id: "minecraft:ward_armor_trim_smithing_template",
        name: "Ward Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Ward' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Cobbled Deepslate"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Cobbled Deepslate", "1x Ward Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found exclusively in Ancient City chests (approx. 5% chance).",
            "Features a pattern resembling the Warden's chest/soul design.",
            "Can be duplicated using 7 Diamonds and 1 Cobbled Deepslate.",
            "Consumed upon use in a Smithing Table."
        ],
        description: "The Ward Armor Trim Smithing Template is a decorative item found in Ancient Cities within the Deep Dark biome. It allows players to customize their armor with the 'Ward' pattern, which mimics the aesthetic of the Warden, specifically its chest and soul-like features. While not as rare as the Silence trim, it is still a significant find. Players can duplicate this template using seven diamonds and a block of Cobbled Deepslate, allowing them to apply the design to multiple armor sets without needing to find more templates."
    },
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
            "Exclusive to Trial Chambers; 22.5% drop from Ominous Vaults using Ominous Trial Key",
            "Duplicated using 7 Diamonds + 1 Breeze Rod + Template",
            "Cannot be found in standard Vaults",
            "Applying it requires a smithing material (e.g. minerals, crystals)",
            "Features a wind-themed swirling pattern matching the Breeze"
        ],
        description: "The Flow Armor Trim is a rare decorative item found in Ominous Vaults within Trial Chambers (1.21). It features wind-inspired swirling patterns reminiscent of the Breeze mob. Unlike most trims, it is duplicated using a Breeze Rod and seven Diamonds. Players can obtain it with a 22.5% drop rate from Ominous Vaults, which require the Trial Omen effect to unlock. This template adds a unique, airy aesthetic to armor and serves as a prestigious reward for players who complete the chambers' most difficult combat challenges."
    },
    "minecraft:vex_armor_trim_smithing_template": {
        id: "minecraft:vex_armor_trim_smithing_template",
        name: "Vex Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Vex' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Cobblestone"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Cobblestone", "1x Vex Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found in Woodland Mansion chests (50% chance in Bedrock Edition)",
            "Features a pattern resembling an Evoker's robe and Vex wings",
            "Added in the Trails & Tales update (1.20) behind experimental data",
            "Changed from Common to Rare rarity in 1.21.2",
            "Duplicated using 7 Diamonds and 1 Cobblestone",
            "Consumed upon use in a Smithing Table"
        ],
        description: "The Vex Armor Trim Smithing Template allows players to apply the distinctive 'Vex' pattern to their armor, creating a design reminiscent of an Evoker's mystical robe and the ethereal wings of Vexes. Found exclusively in Woodland Mansions with a generous 50% drop rate in chests, this template is one of the more accessible trims. Its visual design evokes the threatening magic of illagers, making it a popular choice for players who want their armor to reflect their prowess in combating woodland threats. The template can be duplicated using seven diamonds and a cobblestone block."
    },
    "minecraft:wayfinder_armor_trim_smithing_template": {
        id: "minecraft:wayfinder_armor_trim_smithing_template",
        name: "Wayfinder Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Wayfinder' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Raw Clay"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Raw Clay", "1x Wayfinder Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found exclusively in Trial Chambers inside standard Vaults",
            "Has an 8.5% chance to drop when opening a Vault with a Trial Key in Bedrock Edition",
            "Features an adventurous compass-like design symbolizing exploration",
            "Duplicated using 7 Diamonds and 1 Raw Clay",
            "Consumed upon use in a Smithing Table",
            "One of the trims required for the 'Smithing with Style' advancement"
        ],
        description: "The Wayfinder Armor Trim Smithing Template introduces an adventurous, compass-inspired aesthetic to armor, perfectly suited for players who love exploration and Trials. Found within the Vaults of Trial Chambers, this template drops with an 8.5% chance when players use a Trial Key. The Wayfinder trim symbolizes navigation and adventure, featuring a design that resembles a compass rose or an explorer's badge. It is duplicated using seven diamonds and a raw clay block, allowing players to apply this prestigious design to their entire armor set after obtaining the initial template."
    },
    "minecraft:spire_armor_trim_smithing_template": {
        id: "minecraft:spire_armor_trim_smithing_template",
        name: "Spire Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Spire' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Cobbled Deepslate"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Cobbled Deepslate", "1x Spire Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found exclusively in End City chests (6.7% chance in Bedrock Edition)",
            "Features a tall, jagged spire pattern echoing the End's obsidian pillars",
            "Added in the Trails & Tales update (1.20) behind experimental data",
            "Changed from Common to Rare rarity in 1.21.2",
            "Duplicated using 7 Diamonds and 1 Cobbled Deepslate",
            "Consumed upon use in a Smithing Table"
        ],
        description: "The Spire Armor Trim Smithing Template adds a dramatic, jagged spire pattern to armor, echoing the towering obsidian pillars of the End dimension. This exclusive trim is found in End City chests with a 6.7% drop rate. The Spire design creates a striking, crystalline appearance conveying the mysterious nature of the End. Like all templates, it can be duplicated using seven diamonds and a cobbled deepslate block, allowing players to trim multiple armor pieces."
    }
};
