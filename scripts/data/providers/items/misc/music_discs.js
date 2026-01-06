// Pocket Wikipedia Foundation - Music Discs Data
// ============================================
// This file contains: Music Disc (Cat), Music Disc (13),
// Music Disc (Wait), Music Disc (Otherside), Music Disc (5),
// Music Disc (Pigstep), Music Disc (Relic), Music Disc (Creator),
// Music Disc (Creator (Music Box)), Music Disc (Precipice)
// ============================================

/**
 * Music Disc items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const musicDiscItems = {
    "minecraft:music_disc_cat": {
        id: "minecraft:music_disc_cat",
        name: "Music Disc (Cat)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track 'cat' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Dungeon, Ancient City, and Woodland Mansion chests", "Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Plays the track 'cat' by C418",
            "A calm, cheerful, and playful melody",
            "Found in Dungeons, Ancient Cities, and Woodland Mansions",
            "Dropped by a Creeper if killed by a Skeleton, Stray, or Bogged",
            "Redstone comparators output a signal strength of 1 when this disc is in a Jukebox"
        ],
        description: "Music Disc (Cat) is a rare item that plays the track 'cat' by C418 when placed in a Jukebox. The melody is lighthearted and whimsical, offering a stark contrast to the often dangerous environments where the disc is found. Players can obtain it from chests in Dungeons, Ancient Cities, and Woodland Mansions, or by tricking a Skeleton into killing a Creeper. Like other music discs, it can be used to make parrots dance and emits a specific redstone signal strength when played."
    },
    "minecraft:music_disc_13": {
        id: "minecraft:music_disc_13",
        name: "Music Disc (13)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track '13' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Dungeon, Ancient City, and Woodland Mansion chests", "Dropped by Creepers killed by Skeletons"]
        },
        specialNotes: [
            "Plays the track '13' by C418",
            "An unsettling, ambient track featuring cave sounds and metallic clangs",
            "Found in Dungeons, Ancient Cities, and Woodland Mansions",
            "Dropped by a Creeper if killed by a Skeleton or Stray",
            "Redstone comparators output a signal strength of 1 when this disc is in a Jukebox"
        ],
        description: "Music Disc (13) is an eerie, ambient record that plays the track '13' by C418. Unlike most other discs which feature melodic tunes, '13' consists of unsettling cave noises, metallic clangs, and wind sounds, creating a tense atmosphere. It can be found in the chests of Dungeons, Ancient Cities, and Woodland Mansions, or obtained as a drop when a Skeleton kills a Creeper. When placed in a Jukebox, it provides a unique, if haunting, auditory experience."
    },
    "minecraft:music_disc_otherside": {
        id: "minecraft:music_disc_otherside",
        name: "Music Disc (Otherside)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track 'otherside' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City and Stronghold chests"]
        },
        specialNotes: [
            "Plays the track 'otherside' by Lena Raine",
            "An upbeat, retro-style track with a hopeful melody",
            "Found in Ancient City chests and Stronghold altar chests",
            "Redstone comparators output a signal strength of 14 when this disc is in a Jukebox"
        ],
        description: "Music Disc (Otherside) features a vibrant and uplifting track composed by Lena Raine. Added in the Caves & Cliffs update, it stands out with its retro-inspired sound and energetic tempo. This rare disc can be discovered in the chests of Ancient Cities and Strongholds. When played in a Jukebox, it fills the area with its distinct melody and outputs a strong redstone signal of 14, making it valuable for both entertainment and technical builds."
    },
    "minecraft:music_disc_5": {
        id: "minecraft:music_disc_5",
        name: "Music Disc (5)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track '5' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["9x Disc Fragment 5"]
        },
        specialNotes: [
            "The only craftable music disc in the game",
            "Plays the track '5' by Samuel Åberg",
            "A mysterious track featuring sounds of the Deep Dark and a Warden",
            "Crafted from 9 Disc Fragment 5 items found in Ancient Cities",
            "Redstone comparators output a signal strength of 15 when this disc is in a Jukebox"
        ],
        description: "Music Disc (5) is a unique record that must be assembled by the player rather than found whole. Crafted from nine Disc Fragment 5 pieces discovered in Ancient Cities, it plays a haunting composition by Samuel Åberg. The track is a soundscape of the Deep Dark, featuring footsteps, Warden roars, and other mysterious noises that tell a fragmented story. It is the only music disc with a crafting recipe and outputs the maximum signal strength of 15 in a comparator."
    },
    "minecraft:music_disc_pigstep": {
        id: "minecraft:music_disc_pigstep",
        name: "Music Disc (Pigstep)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track 'Pigstep' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Bastion Remnant chests"]
        },
        specialNotes: [
            "Plays the track 'Pigstep' by Lena Raine",
            "A funky, intense track with a distinct Nether theme",
            "Found exclusively in Bastion Remnant chests in the Nether",
            "Redstone comparators output a signal strength of 13 when this disc is in a Jukebox"
        ],
        description: "Music Disc (Pigstep) is a highly sought-after record found only in the dangerous Bastion Remnants of the Nether. Composed by Lena Raine, it features a funky, high-energy beat that captures the chaotic spirit of the piglins. Because of its rarity and catchy tune, it is a prized possession for many players. When placed in a Jukebox, it plays its distinctive track and outputs a redstone signal strength of 13."
    },
    "minecraft:music_disc_relic": {
        id: "minecraft:music_disc_relic",
        name: "Music Disc (Relic)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track 'Relic' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Plays the track 'Relic' by Aaron Cherof",
            "An 8-bit style chiptune track",
            "Found by brushing Suspicious Gravel in Trail Ruins",
            "Redstone comparators output a signal strength of 14 when this disc is in a Jukebox"
        ],
        description: "Music Disc (Relic) is an archaeological treasure introduced in the Trails & Tales update. Players can uncover this disc by carefully brushing Suspicious Gravel blocks found within Trail Ruins. Composed by Aaron Cherof, the track 'Relic' features a nostalgic, 8-bit chiptune style that evokes the feeling of uncovering ancient history. It serves as a reward for patient archaeologists and adds a retro flair to any Minecraft jukebox collection."
    },
    "minecraft:music_disc_creator": {
        id: "minecraft:music_disc_creator",
        name: "Music Disc (Creator)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track 'Creator' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ominous Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Plays the track 'Creator' by Lena Raine",
            "Obtained from Ominous Vaults using an Ominous Trial Key",
            "Redstone comparators output a signal strength of 12 when this disc is in a Jukebox",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "Music Disc (Creator) is a special reward for players who conquer the challenges of the Ominous Trials. Found within Ominous Vaults in Trial Chambers, this disc plays a track by Lena Raine that features a whimsical, music-box-like melody. It serves as a testament to the player's skill in navigating the dangerous combat trials and successfully unlocking the vault's treasures."
    },
    "minecraft:music_disc_creator_music_box": {
        id: "minecraft:music_disc_creator_music_box",
        name: "Music Disc (Creator (Music Box))",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the music box version of 'Creator' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Decorated Pots in Trial Chambers"]
        },
        specialNotes: [
            "Plays a music box arrangement of 'Creator' by Lena Raine",
            "Found by breaking Decorated Pots in Trial Chambers",
            "Redstone comparators output a signal strength of 11 when this disc is in a Jukebox",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "Music Disc (Creator (Music Box)) offers a unique variation of the 'Creator' track, arranged specifically to sound like a mechanical music box. This rare disc can be discovered by breaking Decorated Pots found throughout Trial Chambers. Its delicate, tinkling melody provides a soothing contrast to the intense combat of the trials, making it a charming addition to any player's music collection."
    },
    "minecraft:music_disc_precipice": {
        id: "minecraft:music_disc_precipice",
        name: "Music Disc (Precipice)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the track 'Precipice' in a Jukebox",
            secondaryUse: "Feeding to Parrots to make them dance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Standard Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Plays the track 'Precipice' by Aaron Cherof",
            "Found in Standard Vaults using a Trial Key",
            "Redstone comparators output a signal strength of 13 when this disc is in a Jukebox",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "Music Disc (Precipice) is a reward found within the Standard Vaults of Trial Chambers. Composed by Aaron Cherof, the track 'Precipice' builds tension with its driving rhythm and mysterious undertones, fitting the adventurous atmosphere of the trials. Players can obtain this disc by using a Trial Key to unlock vaults, adding a musical trophy to their achievements in the subterranean chambers."
    }
};
