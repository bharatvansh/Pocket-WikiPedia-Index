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
    },
    "minecraft:music_disc_creator_music_box": {
        id: "minecraft:music_disc_creator_music_box",
        name: "Music Disc (Creator (Music Box))",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Creator (Music Box)' track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 11 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as a rare drop from decorated pots in Trial Chambers"]
        },
        specialNotes: [
            "Composed by Lena Raine",
            "A shorter music-box rendition of the 'Creator' track",
            "Has a 0.8% chance to be found in Trial Chamber corridor pots in Bedrock Edition",
            "Added in the 1.21 Tricky Trials update",
            "In Bedrock Edition, its rarity is officially classified as 'Uncommon'"
        ],
        description: "'Creator (Music Box)' is a variant music disc composed by Lena Raine that plays a short, delicate music-box version of the main 'Creator' track. In Bedrock Edition, it is obtained as a rare reward from decorated pots generated in Trial Chambers, making it distinct from vault-exclusive discs. When played in a Jukebox, it outputs a Comparator signal strength of 11, which can be used to differentiate it from other discs in redstone builds. For collectors, it offers a unique way to bring the Trial Chambers soundtrack into a base without relying on Vault loot."
    },
    "minecraft:music_disc_precipice": {
        id: "minecraft:music_disc_precipice",
        name: "Music Disc (Precipice)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Precipice' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 13 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as a rare drop from Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Composed by Aaron Cherof",
            "Has a 3.6% chance to be found in standard Vaults in Bedrock Edition",
            "Added in the 1.21 Tricky Trials update",
            "The physical disc has a dark gray and cyan color scheme",
            "Provides a redstone signal strength of 13, the second highest among music discs"
        ],
        description: "'Precipice' is an atmospheric and mysterious music disc composed by Aaron Cherof for the 1.21 Tricky Trials update. It can be discovered by players exploring Trial Chambers, where it serves as a rare reward from standard Vaults. The track's moody and evocative soundscape reflects the adventurous and sometimes dangerous nature of the chambers. In terms of game mechanics, it is notable for providing a strong redstone signal of 13 when played in a Jukebox, making it useful for complex redstone contraptions that rely on disc-based signal differentiation."
    },
    "minecraft:music_disc_5": {
        id: "minecraft:music_disc_5",
        name: "Music Disc (5)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing a mysterious sound recording in a Jukebox",
            secondaryUse: "Decorative item for collectors"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Disc Fragment 5 x9"]
        },
        specialNotes: [
            "Only music disc that must be crafted from fragments",
            "Contains a compilation of ambient sounds and mysterious recordings",
            "Fragments are found exclusively in Ancient City loot chests",
            "Unlike other discs, it cannot be obtained from Creeper drops"
        ],
        description: "Music Disc 5 is a unique music item added in the Wild Update. Unlike other music discs that are typically found in chests or dropped by creepers, this disc must be crafted by combining nine Disc Fragments in a crafting table. The fragments themselves are rare loot found only in Ancient Cities. When played, it emits a chilling and mysterious sequence of sounds, including footsteps, breathing, and the distinct sound of a Warden, adding to the lore of the Deep Dark."
    },
    "minecraft:music_disc_pigstep": {
        id: "minecraft:music_disc_pigstep",
        name: "Music Disc (Pigstep)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Pigstep' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 13 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as a rare drop from Bastion Remnant chests"]
        },
        specialNotes: [
            "Composed by Lena Raine",
            "Exclusively found in Bastion Remnant chests (approx. 5.7% chance)",
            "Has a redstone signal strength of 13 when played in a Jukebox",
            "Features a unique hip-hop inspired track unlike traditional discs",
            "Cannot be obtained from Creepers killed by Skeletons",
            "Rarity is classified as 'Epic' in Bedrock Edition",
            "Duration is 2 minutes and 28 seconds"
        ],
        description: "'Pigstep' is a fan-favorite music disc composed by Lena Raine, added during the Nether Update. Unlike most other music discs, it cannot be obtained via Creeper drops and must be found within the dangerous halls of Bastion Remnants. The track stands out for its modern, rhythmic hip-hop style, which contrasts with the more ambient or classical tones of earlier discs. It provides a strong redstone signal of 13 when placed in a Jukebox, making it both a collector's prize and a useful tool for complex redstone machines."
    },
    "minecraft:music_disc_otherside": {
        id: "minecraft:music_disc_otherside",
        name: "Music Disc (Otherside)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing music in a Jukebox",
            secondaryUse: "Decorative item for item frames"
        },
        specialNotes: [
            "Composed by Lena Raine.",
            "Found in Strongholds (2.4%), Ancient Cities (8.4%), and Dungeons (2.8%).",
            "The track has an upbeat, cheerful melody that evolves into a nostalgic tune.",
            "Emits a redstone signal of 14 when played in a Jukebox."
        ],
        description: "Music Disc 'Otherside' is a rare track composed by Lena Raine, introduced in the 1.18 Caves & Cliffs Part II update. It features an uplifting and catchy melody that transitions through various musical styles. Unlike most music discs which are dropped by creepers killed by skeletons, 'Otherside' is found exclusively in chests within Strongholds, Ancient Cities, and Dungeons. When played in a Jukebox, it provides both entertainment and a strong redstone signal of 14, making it useful for certain redstone contraptions."
    },
    "minecraft:music_disc_relic": {
        id: "minecraft:music_disc_relic",
        name: "Music Disc (Relic)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Relic' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 14 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing suspicious gravel in Trail Ruins"]
        },
        specialNotes: [
            "Composed by Aaron Cherof",
            "Found as archaeology loot by brushing suspicious gravel in Trail Ruins",
            "Non-renewable in survival",
            "Emits a comparator signal strength of 14 when played in a Jukebox",
            "Rarity is classified as 'Uncommon' in Bedrock Edition",
            "Track length is 3 minutes and 38 seconds",
            "Cannot be obtained from Creepers killed by Skeletons"
        ],
        description: "Music Disc 'Relic' is a disc that plays Aaron Cherof's track of the same name when inserted into a Jukebox. In Minecraft Bedrock Edition it is found through archaeology, obtained by brushing suspicious gravel in Trail Ruins rather than from mob drops. When played, it outputs a comparator signal strength of 14, making it useful for redstone builds that sort or detect specific discs."
    },
    "minecraft:music_disc_13": {
        id: "minecraft:music_disc_13",
        name: "Music Disc (13)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Played in a Jukebox",
            secondaryUse: "Emits a redstone signal via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "One of the original music discs in Minecraft",
            "Features ambient, eerie sounds including cave noises and metallic clangs",
            "Also found in Dungeon and Woodland Mansion chests"
        ],
        description: "Music Disc 13 is one of the oldest and most mysterious music discs in Minecraft. Unlike the more melodic tracks, '13' consists of eerie ambient sounds, including echoing cave noises, splashing water, and muffled metallic sounds. It is primarily obtained when a Skeleton or Stray kills a Creeper, though it can also be found in certain loot chests. When played in a Jukebox, it creates a tense atmosphere, making it a favorite for haunted houses or atmospheric builds."
    },
    "minecraft:music_disc_wait": {
        id: "minecraft:music_disc_wait",
        name: "Music Disc (Wait)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Wait' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 12 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: [
                "Found in Buried Treasure chests",
                "Dropped by Creepers killed by Skeletons or Strays"
            ]
        },
        specialNotes: [
            "Composed by C418",
            "Originally named 'where are we now' in the game files",
            "Has an 18.9% chance to be found in Buried Treasure chests in Bedrock Edition",
            "Outputs a redstone signal strength of 12 in a Jukebox"
        ],
        description: "Music Disc 'Wait' is a track composed by C418 featuring an upbeat and cheerful remix of the main Minecraft theme. In Bedrock Edition, it is unique as it can be found in Buried Treasure chests as well as being obtained from Creepers killed by Skeletons. When placed in a Jukebox, it outputs a signal strength of 12 to a Comparator."
    },
    "minecraft:music_disc_strad": {
        id: "minecraft:music_disc_strad",
        name: "Music Disc (Strad)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Strad' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 9 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features a tropical, steel drum melody",
            "Outputs a redstone signal strength of 9 in a Jukebox",
            "One of the 12 original music discs"
        ],
        description: "Music Disc 'Strad' is a tropical-themed track composed by C418, characterized by its distinct steel drum melody and relaxed vibe. Like most other music discs, it is obtained when a Creeper is killed by a Skeleton's arrow. It outputs a redstone signal strength of 9 when played in a Jukebox, fitting for its sunny disposition."
    },
    "minecraft:music_disc_mall": {
        id: "minecraft:music_disc_mall",
        name: "Music Disc (Mall)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Mall' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 6 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features a calm, slow-building melody",
            "Outputs a redstone signal strength of 6 in a Jukebox"
        ],
        description: "Music Disc 'Mall' is a serene track composed by C418 that begins slowly and gradually picks up tempo. It serves as a calming background piece for any base. This disc is obtainable by having a Skeleton defeat a Creeper. In redstone mechanisms, it provides a signal strength of 6 when used with a Jukebox and Comparator."
    },
    "minecraft:music_disc_cat": {
        id: "minecraft:music_disc_cat",
        name: "Music Disc (Cat)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Cat' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 2 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features a light, looping melody",
            "Outputs a redstone signal strength of 2 in a Jukebox",
            "One of the first two music discs added to Minecraft"
        ],
        description: "Music Disc 'Cat' is a whimsical, looping track composed by C418. Along with '13', it was one of the first music discs introduced to the game. It is obtained when a Skeleton or Stray kills a Creeper, or found in Dungeon and Woodland Mansion chests. When played in a Jukebox, it outputs a Comparator signal strength of 2."
    },
    "minecraft:music_disc_blocks": {
        id: "minecraft:music_disc_blocks",
        name: "Music Disc (Blocks)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Blocks' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 3 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features an upbeat, rhythmic tune",
            "Outputs a redstone signal strength of 3 in a Jukebox"
        ],
        description: "Music Disc 'Blocks' is an upbeat track composed by C418. It features a catchy, rhythmic melody that is distinct from the more ambient tracks. Like most discs, it is obtained as a drop from a Creeper killed by a Skeleton. In redstone contraptions, it provides a signal strength of 3 when played in a Jukebox."
    },
    "minecraft:music_disc_chirp": {
        id: "minecraft:music_disc_chirp",
        name: "Music Disc (Chirp)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Chirp' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 4 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features a retro, bossa nova style tune",
            "Outputs a redstone signal strength of 4 in a Jukebox"
        ],
        description: "Music Disc 'Chirp' is a retro-styled track composed by C418, often described as having a bossa nova feel. It is one of the collectible music discs obtainable from Creeper drops caused by Skeletons. When used in a Jukebox with a Comparator, it outputs a signal strength of 4."
    },
    "minecraft:music_disc_11": {
        id: "minecraft:music_disc_11",
        name: "Music Disc (11)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the '11' recording in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 11 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "The only music disc that appears physically broken",
            "Features a disturbing recording of running, coughing, and static",
            "Outputs a redstone signal strength of 11 in a Jukebox"
        ],
        description: "Music Disc 11 is a unique and mysterious record, easily identifiable by its broken, fragmented appearance. Unlike other discs that play music, this disc plays a disturbing audio recording of a person running across different blocks, struggling, and coughing, accompanied by static and eerie noises. It ends abruptly with a sharp cut. In Bedrock Edition, it can be obtained when a Creeper is killed by a Skeleton. When placed in a Jukebox, it outputs a signal strength of 11 to a Comparator."
    },
    "minecraft:music_disc_mellohi": {
        id: "minecraft:music_disc_mellohi",
        name: "Music Disc (Mellohi)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Mellohi' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 7 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: [
                "Found in Buried Treasure chests",
                "Dropped by Creepers killed by Skeletons or Strays"
            ]
        },
        specialNotes: [
            "Composed by C418",
            "Features a slow, melancholic waltz melody",
            "Has an 18.9% chance to be found in Buried Treasure chests in Bedrock Edition",
            "Outputs a redstone signal strength of 7 in a Jukebox"
        ],
        description: "Music Disc 'Mellohi' is a track composed by C418, featuring a slow, somber waltz that conveys a mood of melancholy and introspection. In Bedrock Edition, this disc can be discovered in Buried Treasure chests buried under beaches, in addition to being a drop from Creepers killed by Skeletons. Its distinct purple and white label matches its eerie yet beautiful tone. When played in a Jukebox, it emits a comparator signal strength of 7."
    },
    "minecraft:music_disc_stal": {
        id: "minecraft:music_disc_stal",
        name: "Music Disc (Stal)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Stal' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 8 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features a smooth jazz melody with recorder and saxophone",
            "Outputs a redstone signal strength of 8 in a Jukebox",
            "The name 'Stal' translates to 'steel' in Polish"
        ],
        description: "Music Disc 'Stal' is a jazz-inspired track composed by C418. It is characterized by a relaxed tempo, featuring a prominent recorder melody accompanied by piano, saxophone, and bass. This disc is a classic collectible obtained from Creepers killed by Skeletons. Its soothing, somewhat humorous jazz style makes it a favorite for many players. In redstone mechanisms, it provides a signal strength of 8 when detected by a Comparator attached to a Jukebox."
    },
    "minecraft:music_disc_ward": {
        id: "minecraft:music_disc_ward",
        name: "Music Disc (Ward)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing the 'Ward' music track in a Jukebox",
            secondaryUse: "Providing a redstone signal strength of 10 via a Comparator"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by Skeletons or Strays"]
        },
        specialNotes: [
            "Composed by C418",
            "Features a dark, synth-heavy intro followed by a lighter melody",
            "Outputs a redstone signal strength of 10 in a Jukebox",
            "Dropped by Creepers when killed by a Skeleton's arrow",
            "Cannot be found in loot chests in Bedrock Edition"
        ],
        description: "Music Disc 'Ward' is a track composed by C418, known for its dark, synthesized opening that transitions into a more melodic, adventurous tune. It is one of the classic music discs in Minecraft. Like many others, it is obtained when a Skeleton or Stray kills a Creeper. When played in a Jukebox, it provides a unique atmospheric experience and outputs a redstone signal strength of 10 to a Comparator, distinguishing it from other discs in technical builds."
    }
};
