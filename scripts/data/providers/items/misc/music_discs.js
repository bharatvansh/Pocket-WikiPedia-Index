// Pocket Wikipedia Foundation - Music Discs Data
// ============================================
// This file contains: All music discs (13, cat, blocks, chirp,
// far, mall, mellohi, stal, strad, ward, 11, wait, otherside,
// 5, pigstep, relic, creator, creator_music_box, precipice)
// ============================================

/**
 * Music disc items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const musicDiscs = {
    "minecraft:music_disc_creator": {
        id: "minecraft:music_disc_creator",
        name: "Music Disc (Creator)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Creator' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 12 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as a rare drop from Ominous Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Composed by Lena Raine",
            "Has a 7.5% chance to be found in Ominous Vaults",
            "Added in the 1.21 Tricky Trials update",
            "The physical disc has a teal/oxidized copper color scheme",
            "In Bedrock Edition, its rarity is officially classified as 'Rare'"
        ],
        description: "'Creator' is a music disc composed by Lena Raine, specifically created for the 1.21 Tricky Trials update. This track features an upbeat, melodic, and somewhat industrial sound that perfectly complements the copper-rich architecture of the Trial Chambers where it is discovered. Unlike many other music discs that can be obtained from Creepers killed by Skeletons, 'Creator' is exclusively available as a high-tier reward from Ominous Vaults. When played in a Jukebox, it provides a redstone output of 12 to any adjacent Comparators."
    }
};
