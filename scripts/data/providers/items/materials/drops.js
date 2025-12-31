// Pocket Wikipedia Foundation - Mob Drops Data
// ============================================
// This file contains: String, leather, feather, bone, gunpowder,
// slime ball, ender pearl, blaze rod, ghast tear, magma cream,
// nether star, shulker shell, phantom membrane, rabbit hide,
// rabbit foot, ink sac, glow ink sac, spider eye, rotten flesh,
// breeze rod, armadillo scute, turtle scute, nautilus shell,
// heart of the sea, dragon breath, totem of undying, heavy core
// ============================================

/**
 * Mob drop items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const mobDrops = {
    "minecraft:breeze_rod": {
        id: "minecraft:breeze_rod",
        name: "Breeze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wind Charges and the Mace",
            secondaryUse: "Repairing Maces at an Anvil and duplicating Flow Armor Trim templates"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Breezes upon death", "Can also be found in Vaults and Ominous Vaults"]
        },
        specialNotes: [
            "Breezes drop 1-2 Breeze Rods (up to 8 with Looting III in Bedrock)",
            "Has an 11.5% chance to drop from standard Vaults",
            "Has a 5.5% chance to drop from Ominous Vaults",
            "One Breeze Rod can be crafted into four Wind Charges",
            "Required to craft the Mace when combined with a Heavy Core"
        ],
        description: "The Breeze Rod is a unique item dropped exclusively by Breezes in Trial Chambers. Similar to Blaze Rods, they serve as a fundamental crafting component for specialized items introduced in the 1.21 Tricky Trials update. A single Breeze Rod can be broken down into four Wind Charges or combined with a Heavy Core to create the powerful Mace weapon. Beyond crafting, Breeze Rods are essential for maintaining a Mace's durability at an anvil and can be used to duplicate the rare Flow Armor Trim smithing template."
    },
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Mace weapon",
            secondaryUse: "Used with Note Blocks to produce snare drum sounds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained exclusively from Ominous Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Epic rarity item - very rare drop from Ominous Vaults",
            "Can be pushed by pistons unlike some similar items",
            "A note block placed above a Heavy Core plays the snare drum sound instead of the default harp sound",
            "Changed from Common to Epic rarity in Bedrock Edition 1.21.20",
            "Required to craft the Mace when combined with a Breeze Rod",
            "Texture was updated in Bedrock Edition 1.21.50",
            "Centered properly in item frames as of Bedrock Edition 1.21.20"
        ],
        description: "The Heavy Core is an extremely rare crafting material introduced in the 1.21 Tricky Trials update. This dense metallic block is found exclusively in Ominous Vaults within Trial Chambers, making it one of the most challenging items to obtain. The Heavy Core's primary purpose is serving as the central component for crafting the powerful Mace weapon when combined with a Breeze Rod. Beyond its crafting utility, the Heavy Core has unique redstone applications: placing a note block directly above it causes the note block to play a snare drum sound rather than the standard harp sound. In Bedrock Edition 1.21.20, the Heavy Core's rarity was upgraded from Common to Epic, reflecting its true scarcity. Its texture was further refined in version 1.21.50 to improve visual clarity, and it was also updated to render correctly when displayed in item frames."
    }
};
