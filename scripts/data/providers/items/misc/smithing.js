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
    "minecraft:tide_armor_trim_smithing_template": {
        id: "minecraft:tide_armor_trim_smithing_template",
        name: "Tide Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Tide' armor trim at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Prismarine blocks"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Prismarine", "1x Tide Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Dropped by Elder Guardians with a 20% chance upon death.",
            "Found in Ocean Monuments; Elder Guardians do not respawn.",
            "Features a wave-like pattern suitable for aquatic-themed armor.",
            "Can be duplicated using 7 Diamonds and 1 Prismarine block.",
            "Requires a material (e.g., Gold Ingot, Emerald) to determine the trim color."
        ],
        description: "The Tide Armor Trim Smithing Template is a decorative item that allows players to apply a unique aquatic-themed pattern to their armor. Unlike most smithing templates found in chests, the Tide template is a rare drop from Elder Guardians located in Ocean Monuments, with a 20% chance of dropping when the mob is defeated. Since Elder Guardians do not respawn, obtaining the template from its natural source is limited. However, once found, it can be duplicated using seven diamonds and a block of Prismarine, allowing players to apply the 'Tide' pattern to their entire armor set."
    },
    "minecraft:rib_armor_trim_smithing_template": {
        id: "minecraft:rib_armor_trim_smithing_template",
        name: "Rib Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Rib' armor trim at a Smithing Table",
            secondaryUse: "Duplicating the template"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Netherrack", "1x Rib Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found in Nether Fortress chests with a 6.7% chance.",
            "Features a skeletal, rib-like pattern on the armor.",
            "Can be duplicated using 7 Diamonds and 1 Netherrack.",
            "Consumed upon use in a Smithing Table unless duplicated."
        ],
        description: "The Rib Armor Trim Smithing Template is a decorative item found in Nether Fortresses. It allows players to apply a skeletal rib-cage pattern to their armor using various materials. This trim is popular for its dark and intimidating look, fitting for the dangerous dimension where it is found. Like all armor trims, it can be duplicated with diamonds and its base material—netherrack in this case—to allow for multiple uses."
    },
    "minecraft:spire_armor_trim_smithing_template": {
        id: "minecraft:spire_armor_trim_smithing_template",
        name: "Spire Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Spire' armor trim at a Smithing Table",
            secondaryUse: "Duplicating the template"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Purpur Block", "1x Spire Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found in End City chests with a 6.7% chance.",
            "Features a complex, geometric pattern with clean lines and towers.",
            "Can be duplicated using 7 Diamonds and 1 Purpur Block.",
            "Requires an End-tier material to find but can be applied to any armor."
        ],
        description: "The Spire Armor Trim Smithing Template is a rare decorative item obtained from End Cities. It applies the 'Spire' pattern to armor, which is characterized by its intricate geometric shapes and vertical lines that evoke the architecture of the End. As a late-game collectible, it represents a player's journey to the outer islands of the End. It can be duplicated using seven diamonds and a block of purpur, ensuring that players can outfit their entire gear set with this prestigious design."
    },
    "minecraft:vex_armor_trim_smithing_template": {
        id: "minecraft:vex_armor_trim_smithing_template",
        name: "Vex Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Vex' armor trim at a Smithing Table",
            secondaryUse: "Duplicating the template"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Cobblestone", "1x Vex Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found in Woodland Mansion chests with a 6.7% chance.",
            "Features a pattern inspired by the robes of the Vex and Evoker.",
            "Can be duplicated using 7 Diamonds and 1 Cobblestone.",
            "One of the harder trims to find due to the rarity of Woodland Mansions."
        ],
        description: "The Vex Armor Trim Smithing Template is a decorative item found within the chests of Woodland Mansions. This template allows players to apply a pattern to their armor that is reminiscent of the robes worn by Vexes and Evokers. Because Woodland Mansions are among the rarest structures in Minecraft, this trim is a significant trophy for any explorer. It can be duplicated at a crafting table using seven diamonds and cobblestone, making it easier to maintain once the initial template is found."
    },
    "minecraft:wild_armor_trim_smithing_template": {
        id: "minecraft:wild_armor_trim_smithing_template",
        name: "Wild Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Wild' armor trim to any piece of armor at a Smithing Table",
            secondaryUse: "Duplicating the template using Diamonds and Mossy Cobblestone"
        },
        crafting: {
            recipeType: "Shaped (Duplication)",
            ingredients: ["7x Diamond", "1x Mossy Cobblestone", "1x Wild Armor Trim Smithing Template"]
        },
        specialNotes: [
            "Found exclusively in Jungle Pyramid chests (33.3% chance).",
            "Applies a nature-themed, leafy pattern to armor pieces.",
            "Requires a smithing material (like Iron Ingot or Amethyst Shard) to define the trim's color.",
            "Consumed upon use in a Smithing Table unless duplicated beforehand.",
            "Can be duplicated using 7 Diamonds and a block of Mossy Cobblestone."
        ],
        description: "The Wild Armor Trim Smithing Template is a rare decorative item discovered within the hidden chests of Jungle Pyramids. It allows players to customize their armor with the 'Wild' pattern, featuring organic, leafy designs that evoke the lush environment of the jungle. Like other armor trims, it is a late-game cosmetic that represents a player's exploration of rare world structures. To ensure a continuous supply, it can be duplicated with seven diamonds and mossy cobblestone, allowing for a complete set of matching gear."
    }
};
