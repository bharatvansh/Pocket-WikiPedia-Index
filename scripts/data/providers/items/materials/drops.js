// Pocket Wikipedia Foundation - Mob Drops Data
// ============================================
// This file contains: String, leather, feather, bone, gunpowder,
// slime ball, ender pearl, blaze rod, ghast tear, magma cream,
// nether star, shulker shell, phantom membrane, rabbit hide,
// rabbit foot, ink sac, glow ink sac, spider eye, rotten flesh,
// breeze rod, armadillo scute, turtle scute, nautilus shell,
// heart of the sea, dragon breath, totem of undying
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
    "minecraft:armadillo_scute": {
        id: "minecraft:armadillo_scute",
        name: "Armadillo Scute",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wolf Armor to protect tamed wolves",
            secondaryUse: "Repairing damaged Wolf Armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by armadillos every 5-10 minutes", "Can also be obtained by brushing armadillos with a Brush"]
        },
        specialNotes: [
            "Dropped by armadillos every 5-10 minutes naturally",
            "Can also be obtained by brushing armadillos with a Brush",
            "Armadillos can be brushed while rolled up to obtain scutes",
            "Required to craft Wolf Armor, which provides wolves with 11 armor points",
            "Using an armadillo scute on a wolf wearing damaged armor repairs 8 durability points"
        ],
        description: "Armadillo Scutes are protective plating materials introduced in Minecraft 1.21, dropped periodically by armadillos or obtained by brushing them. These scutes are exclusively used to craft Wolf Armor, a new defensive equipment that can be equipped on tamed wolves to significantly increase their survivability. When wolves wear Wolf Armor, they gain substantial protection from damage, and the armor can be repaired by using additional armadillo scutes directly on the armored wolf. The armadillo's unique behavior of curling into a ball when threatened adds an engaging mechanic to obtaining these valuable scutes."
    },
    "minecraft:resin_clump": {
        id: "minecraft:resin_clump",
        name: "Resin Clump",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Block of Resin (9 clumps = 1 block)",
            secondaryUse: "Crafting Resin Bricks (4 blocks = 4 bricks) and Resin Clusters"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by attacking a Creaking Heart or hitting a Creaking mob linked to its heart", "Drops 1-3 Resin Clumps per hit"]
        },
        specialNotes: [
            "Creaking Hearts drop 1-3 Resin Clumps when attacked in Bedrock Edition",
            "Hitting a Creaking mob while it's linked to its heart also yields Resin Clumps",
            "Nine Resin Clumps can be crafted into one Block of Resin",
            "Block of Resin can be used to craft Resin Bricks and a Creaking Heart",
            "Added in Minecraft Bedrock Edition 1.21.50 as part of the Pale Garden biome content",
            "The Resin Clump has a vibrant orange color matching the Creaking aesthetic"
        ],
        description: "Resin Clumps are a unique resource material introduced in Minecraft Bedrock Edition 1.21.50, obtained exclusively from the Creaking Heart and Creaking mobs found in Pale Garden biomes. When a player attacks a Creaking Heart or strikes a Creaking mob while it remains linked to its heart, 1-3 Resin Clumps are dropped as a reward. These orange, resinous clumps serve as the primary crafting material for creating Blocks of Resin, which can be crafted into decorative Resin Bricks or used to construct a Creaking Heart for custom builds. The process of obtaining Resin Clumps requires players to engage with the unique mechanics of the Creaking mob, creating an interactive harvesting experience tied to the atmospheric horror elements of the Pale Garden. This resource enables players to incorporate the distinctive orange resin aesthetic into their constructions while reproducing one of the 1.21 update's most memorable new features."
    }
};
