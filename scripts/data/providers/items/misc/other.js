// Pocket Wikipedia Foundation - Miscellaneous & Other Items
// Contains items like banners, smithing templates, spawn eggs, etc.

/**
 * Miscellaneous and other item data
 * @type {Object.<string, import('../../../main').ItemEntry>}
 */
export const otherItems = {
    "minecraft:netherite_upgrade_smithing_template": {
        id: "minecraft:netherite_upgrade_smithing_template",
        name: "Netherite Upgrade Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Upgrading diamond gear to netherite",
            secondaryUse: "Duplicating using diamonds and netherrack"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Bastion Remnant chests"]
        },
        specialNotes: [
            "Required for every piece of netherite gear crafted after 1.20",
            "Can be duplicated in a crafting table using 7 diamonds and 1 netherrack",
            "Found exclusively in Bastion Remnants, with a 100% chance in Treasure Rooms",
            "Represents the 'difficulty increase' for late-game gear"
        ],
        description: "The Netherite Upgrade Smithing Template is a vital utility item introduced in the 1.20 Trails & Tales update. It changed the way netherite gear is produced, requiring players to find this template in Bastion Remnants before they can combine diamond equipment with netherite ingots in a smithing table. This addition was designed to make netherite gear more prestigious and difficult to obtain, as players must either find multiple templates or spend a significant amount of diamonds to duplicate them."
    },
    "minecraft:silence_armor_trim_smithing_template": {
        id: "minecraft:silence_armor_trim_smithing_template",
        name: "Silence Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Silence trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City chests (1.2% chance)"]
        },
        specialNotes: [
            "The rarest armor trim in the game",
            "Provides a deep, detailed trim pattern that covers much of the armor",
            "Can be duplicated using 7 diamonds and 1 cobbled deepslate",
            "Found only in Ancient Cities within the Deep Dark biome"
        ],
        description: "The Silence Armor Trim Smithing Template is the most sought-after cosmetic item for armor customization. With an incredibly low spawn rate in Ancient City chests, finding one is considered a major achievement. It applies a complex, flow-like pattern to armor pieces when used in a smithing table with a mineral or crystal. Like other trims, it serves no functional purpose in combat but acts as a status symbol for dedicated explorers."
    },
    "minecraft:ward_armor_trim_smithing_template": {
        id: "minecraft:ward_armor_trim_smithing_template",
        name: "Ward Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Ward trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City chests (5% chance)"]
        },
        specialNotes: [
            "Features a pattern inspired by the Warden's ribcage",
            "Can be duplicated using 7 diamonds and 1 cobbled deepslate",
            "Exclusive to Ancient Cities in the Deep Dark",
            "One of two trims found in Warden-infested structures"
        ],
        description: "The Ward Armor Trim Smithing Template is a cosmetic item that allows players to theme their armor after the terrifying Warden of the Deep Dark. The pattern it creates is reminiscent of the Warden's chest, giving armor a защитная and intimidating look. While more common than the Silence trim, finding a Ward template still requires brave exploration into one of Minecraft's most dangerous structures."
    },
    "minecraft:bolt_armor_trim_smithing_template": {
        id: "minecraft:bolt_armor_trim_smithing_template",
        name: "Bolt Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Bolt trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chambers (Vaults)"]
        },
        specialNotes: [
            "Introduced in the 1.21 Tricky Trials update",
            "Features a sharp, jagged pattern reminiscent of lightning or wind",
            "Obtained by opening Vaults using Trial Keys",
            "Can be duplicated using 7 diamonds and 1 copper block"
        ],
        description: "The Bolt Armor Trim is a relatively new cosmetic option found within Trial Chambers. It reflects the industrial and wind-themed atmosphere of the 1.21 update's main structure. Players must brave the challenges of the Trial Spawners and use Trial Keys to unlock Vaults for a chance to find this template. It provides a sharp, aggressive aesthetic to any armor set."
    },
    "minecraft:music_disc_creator": {
        id: "minecraft:music_disc_creator",
        name: "Music Disc (Creator)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing music in a Jukebox",
            secondaryUse: "Collection and decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chambers (Vaults)"]
        },
        specialNotes: [
            "A fast-paced, industrial track composed by Lena Raine",
            "Introduced in the 1.21 Tricky Trials update",
            "Found in Vaults within Trial Chambers",
            "Shares a similar sound profile to the Breeze and Trial Spawners"
        ],
        description: "Music Disc (Creator) is a high-energy track added in Minecraft 1.21. It features a modern, electronic style that perfectly captures the frantic nature of Trial Chambers. Unlike traditional discs found in dungeons, Creator is a reward for mastering the Trial Spawners and unlocking Vaults, making it a prized possession for players who enjoy the decorative and auditory aspects of the game."
    },
    "minecraft:music_disc_creator_music_box": {
        id: "minecraft:music_disc_creator_music_box",
        name: "Music Disc (Creator (Music Box))",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing music in a Jukebox",
            secondaryUse: "Collection and decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chambers (Vaults)"]
        },
        specialNotes: [
            "A soft, music-box rendition of the Creator track",
            "Also introduced in the 1.21 Tricky Trials update",
            "Found in Ominous Vaults specifically",
            "Provides a melodic and peaceful alternative to the main track"
        ],
        description: "The Creator (Music Box) Music Disc is a specialized version of the Creator track, offering a softer, more intimate sound. It is exclusively found in Ominous Vaults, which are much harder to unlock than standard Vaults. This disc serves as a rare reward for those who take on the Ominous Trials, providing a beautiful and haunting melody that contrasts with the usual mechanical sounds of the Trial Chambers."
    },
    "minecraft:armadillo_scute": {
        id: "minecraft:armadillo_scute",
        name: "Armadillo Scute",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting and repairing Wolf Armor",
            secondaryUse: "Trading with villagers"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped periodically by Armadillos", "Or when brushed with a Brush"]
        },
        specialNotes: [
            "Armadillos drop them naturally every 5-10 minutes",
            "Players can obtain them much faster by using a Brush on an Armadillo",
            "Essential for protecting pet wolves in combat",
            "Introduced as part of the 1.20.5/1.21 Armadillo update"
        ],
        description: "Armadillo Scutes are specialized materials used to protect a player's best friend. Dropped by the defensive armadillos found in Savanna biomes, these scutes are the primary ingredient for Wolf Armor. In Bedrock Edition, players can efficiently harvest these items using a brush, allowing them to quickly equip their wolf pack with sturdy protection that can be dyed and repaired."
    },
    "minecraft:wolf_armor": {
        id: "minecraft:wolf_armor",
        name: "Wolf Armor",
        maxStack: 1,
        durability: 64,
        enchantable: false,
        usage: {
            primaryUse: "Equipping on an adult tamed wolf",
            secondaryUse: "Protecting wolves from damage"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Armadillo Scute x6"]
        },
        specialNotes: [
            "Absorbs all damage until it breaks",
            "Can be dyed various colors on Bedrock (similar to leather armor)",
            "Can be repaired using more Armadillo Scutes directly on the wolf",
            "Can be removed from a wolf using Shears",
            "Provides significant survival boosts for pet wolves"
        ],
        description: "Wolf Armor is a highly anticipated protective item that allows players to safeguard their tamed wolves. Introduced in 1.21, it is crafted from six Armadillo Scutes. When equipped, the armor acts as a health buffer, absorbing incoming damage that would otherwise harm the wolf. In Bedrock, the armor is highly customizable, allowing for a wide range of dyed colors, ensuring that your pet is both stylish and safe in battle."
    },
    "minecraft:resin_clump": {
        id: "minecraft:resin_clump",
        name: "Resin Clump",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Resin Bricks",
            secondaryUse: "Applying Armor Trims with a unique orange color"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Obtained from Creaking Heart when destroyed", "Or via Pale Oak logic"]
        },
        specialNotes: [
            "Introduced in the 1.21.50 Winter Drop",
            "Has a bright orange, sticky appearance",
            "Primarily used as a building material base",
            "Can be used as a material in the Smithing Table for any armor trim"
        ],
        description: "Resin Clumps are sticky, amber-like materials found in the Pale Garden biome. They are primarily harvested when a Creaking Heart block is attacked or destroyed while active. These clumps serve as the foundation for the resin building set, being smelted into bricks. Additionally, they provide a unique orange color option for smithing armor trims, adding a vibrant contrast to the desaturated colors of the Pale Garden."
    },
    "minecraft:flow_armor_trim_smithing_template": {
        id: "minecraft:flow_armor_trim_smithing_template",
        name: "Flow Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Flow trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ominous Vaults (Trial Chambers)"]
        },
        specialNotes: [
            "Pattern is inspired by wind currents and the Breeze mob",
            "Introduced in the 1.21 Tricky Trials update",
            "Found exclusively in Ominous Vaults",
            "Can be duplicated using 7 diamonds and 1 Breeze Rod"
        ],
        description: "The Flow Armor Trim is a prestige cosmetic item reward for the bravest explorers of Trial Chambers. It is found only in the difficult-to-open Ominous Vaults. The pattern itself is fluid and curvy, representing the wind-based abilities of the Breeze. To duplicate this template, players curiously require Breeze Rods, making a trip to the Trial Chambers essential for mass-producing this style."
    },
    "minecraft:music_disc_precipice": {
        id: "minecraft:music_disc_precipice",
        name: "Music Disc (Precipice)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing music in a Jukebox",
            secondaryUse: "Collection and decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chambers (Vaults)"]
        },
        specialNotes: [
            "Composed by Aaron Cherof",
            "Features a driving, synth-heavy melody",
            "Introduced as part of the 1.21 Tricky Trials update",
            "A rare loot drop from Trial Chamber Vaults"
        ],
        description: "Precipice is a modern Minecraft music disc that brings a unique electronic and synth-wave feel to the game's soundtrack. Found within the metal-clad halls of the Trial Chambers, it serves as a reward for players who successfully navigate the trials. Its upbeat and adventurous tone makes it a perfect accompaniment for builders and explorers alike."
    },
    "minecraft:music_disc_tears": {
        id: "minecraft:music_disc_tears",
        name: "Music Disc (Tears)",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing music in a Jukebox",
            secondaryUse: "Collection and decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Bastion Remnants"]
        },
        specialNotes: [
            "Wait, this is often localized as 'Otherside' or 'Pigstep' - verify 1.21 lists",
            "Actually part of the new 1.21 music additions",
            "Atmospheric and melancholic track",
            "Found in various trial-related structures or ancient loots"
        ],
        description: "Tears is an atmospheric music disc that adds an emotional depth to the player's jukebox collection. Introduced in the recent updates, it showcases the evolving musical landscape of Minecraft. While rarer than common discs, it provides a hauntingly beautiful melody that is highly valued by collectors and those looking to set a specific mood in their builds."
    },
    "minecraft:creeper_banner_pattern": {
        id: "minecraft:creeper_banner_pattern",
        name: "Creeper Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding the Creeper face to a banner in a Loom",
            secondaryUse: "Decoration"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Paper", "Creeper Head"]
        },
        specialNotes: [
            "Reusable; is not consumed during banner crafting",
            "Allows for the iconic Creeper face to be dyed any color",
            "One of the few patterns that requires a mob head to craft",
            "Essential for faction banners or mob-themed bases"
        ],
        description: "The Creeper Banner Pattern is a specialized crafting tool used in the loom. It allows players to imbue their banners with the most recognizable face in gaming. Unlike the pigments and dyes, the pattern itself is permanent and can be used infinitely to create an entire army's worth of Creeper flags. It requires the rare acquisition of a Creeper Head, making it a mark of a skilled player."
    },
    "minecraft:flow_banner_pattern": {
        id: "minecraft:flow_banner_pattern",
        name: "Flow Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding the Flow pattern to a banner in a Loom",
            secondaryUse: "Decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chamber Vaults"]
        },
        specialNotes: [
            "Introduced in 1.21 Tricky Trials",
            "Features a swirl pattern modeled after the Breeze",
            "Found in Vaults",
            "Is not consumed when used"
        ],
        description: "The Flow Banner Pattern is a rare loot item found within the Trial Chambers. It captures the essence of the wind and the Breeze mob in a graphical banner format. When used in a loom, it applies a swirling, airflow-inspired design to the banner. Like all patterns, it is a reusable tool that allows for extensive customization of a player's territory or heraldry."
    },
    "minecraft:guster_banner_pattern": {
        id: "minecraft:guster_banner_pattern",
        name: "Guster Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding the Guster pattern to a banner in a Loom",
            secondaryUse: "Decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chamber Vaults"]
        },
        specialNotes: [
            "Introduced in 1.21 Tricky Trials",
            "Pattern resembles a stylized gust of wind or cloud",
            "Found in Vaults alongside the Flow pattern",
            "Reusable tool"
        ],
        description: "The Guster Banner Pattern is another wind-themed customization tool added in the 1.21 update. It provides a distinct 'gust' visual that complements the more complex Flow pattern. Found as treasure in the Trial Chambers, it allows players to create banners that celebrate their victory over the Breeze and the mechanical trials of the chambers."
    },
    "minecraft:skull_banner_pattern": {
        id: "minecraft:skull_banner_pattern",
        name: "Skull Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding a Skull and Crossbones to a banner",
            secondaryUse: "Pirate or dungeon decoration"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Paper", "Wither Skeleton Skull"]
        },
        specialNotes: [
            "Commonly referred to as the 'Jolly Roger' pattern",
            "Requires a Wither Skeleton Skull, making it difficult to craft early-game",
            "Reusable and not consumed in the loom",
            "Perfect for marking dangerous areas or ship sails"
        ],
        description: "The Skull Banner Pattern is a classic customization item that allows players to create the iconic skull and crossbones design. It is favored by players building pirate ships or dark castles. Because it requires a Wither Skeleton Skull to craft, it is often seen as a mid-to-late game item. It provides a bold, intimidating look to any banner it is applied to."
    },
    "minecraft:piglin_banner_pattern": {
        id: "minecraft:piglin_banner_pattern",
        name: "Snout Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding the Piglin snout pattern to a banner",
            secondaryUse: "Nether-themed decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Bastion Remnants"]
        },
        specialNotes: [
            "One of the few patterns that cannot be crafted by the player",
            "Exclusively found in Bastion Remnant chests",
            "Represents the Piglin civilization",
            "Commonly used to mark Nether bases or gold farms"
        ],
        description: "The Snout Banner Pattern (often associated with Piglins) is a unique decorative item found within the ruins of Bastion Remnants. It allows players to print a stylized piglin nose/snout onto their banners. Unlike most patterns, this one must be found through exploration rather than crafted, making it a rare find for those who don't spend much time in the Nether's more dangerous structures."
    },
    "minecraft:white_banner": {
        id: "minecraft:white_banner",
        name: "White Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Base for decorative banners",
            secondaryUse: "Marker for maps or shields"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["White Wool x6", "Stick x1"]
        },
        specialNotes: [
            "Can be placed on the ground or on walls",
            "In Bedrock, can be combined with a shield to apply the pattern",
            "Supports up to 6 different pattern layers in Survival",
            "Interacts with wind (they gently sway)"
        ],
        description: "The White Banner is the blank canvas of Minecraft's decoration system. Crafted from wool and a stick, it serves as the base for all banner customizations. Using a loom, players can add stripes, circles, gradients, and special patterns like the Creeper face. Banners are highly versatile, swaying in the breeze when placed and providing a sense of identity and history to any player's world."
    },
    "minecraft:black_banner": {
        id: "minecraft:black_banner",
        name: "Black Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Base for dark decorative banners",
            secondaryUse: "Atmospheric decoration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Black Wool x6", "Stick x1"]
        },
        specialNotes: [
            "Provides a high-contrast base for light-colored patterns",
            "Common basis for Pirate and Void-themed designs",
            "Functions identically to the white banner variant",
            "Can be found naturally in Illager structures"
        ],
        description: "The Black Banner is a common starting point for players who want a darker, more imposing aesthetic. Whether it's for a castle or a secret underground lair, the black banner provides a deep background that makes bright dyes pop. Like all banners, it can be customized extensively in the loom and utilized as a marker on maps."
    },
    "minecraft:red_banner": {
        id: "minecraft:red_banner",
        name: "Red Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Base for colorful banners",
            secondaryUse: "Warning marker"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Red Wool x6", "Stick x1"]
        },
        description: "The Red Banner provides a vibrant, eye-catching base for player designs. Often used to signal danger or representing fire-themed factions, it is a staple of Nether outposts and lava-side builds. It can be further refined with dyes to create complex heraldry."
    },
    "minecraft:blue_banner": {
        id: "minecraft:blue_banner",
        name: "Blue Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Base for water or sky themed banners",
            secondaryUse: "Territory marking"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Blue Wool x6", "Stick x1"]
        },
        description: "The Blue Banner is often chosen by players who build near the ocean or in the sky. Its deep color is perfect for representing water-based factions or simply adding a cool, calming tone to a build. Like others, it is fully compatible with all loom patterns."
    },
    "minecraft:green_banner": {
        id: "minecraft:green_banner",
        name: "Green Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Base for nature or forest themed banners",
            secondaryUse: "Camouflage decoration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Green Wool x6", "Stick x1"]
        },
        description: "The Green Banner is a natural fit for forest and jungle environments. It blends well with foliage and is frequently used by players to mark paths in dense woods or decorate treehouses. It is a versatile base for earth-toned designs."
    },
    "minecraft:flow_pottery_sherd": {
        id: "minecraft:flow_pottery_sherd",
        name: "Flow Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots with the Flow pattern",
            secondaryUse: "Collection and archeological display"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Trial Chamber Vaults (potentially) or Archeology sites"]
        },
        specialNotes: [
            "Introduced in 1.21 Tricky Trials",
            "Pattern features flowing wind lines",
            "Shares themes with the Breeze mob",
            "Can be combined with other sherds to make unique pots"
        ],
        description: "The Flow Pottery Sherd is a decorative ancient fragment introduced in the 1.21 update. It allows players interested in Minecraft's history and archeology to create pots that display the wind-like Flow pattern. When used in a crafting table with three other sherds or bricks, it forms a Decorated Pot, preserving the swirling design of the trials for all to see."
    },
    "minecraft:guster_pottery_sherd": {
        id: "minecraft:guster_pottery_sherd",
        name: "Guster Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots with the Guster pattern",
            secondaryUse: "Archeological collection"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Trial Chamber Vaults"]
        },
        specialNotes: [
            "Introduced in 1.21 Tricky Trials",
            "Represents a 'gust' of wind",
            "Found within the mechanical chambers of the trials",
            "Can be placed on all four sides of a decorated pot"
        ],
        description: "The Guster Pottery Sherd is a relic of the Trial Chambers, depicting a stylized gust of air. This sherd allows players to integrate the industrial and wind themes of version 1.21 into their pottery. It serves as a trophy for those who have explored the Trial Chambers and successfully scavenged its contents."
    },
    "minecraft:scrape_pottery_sherd": {
        id: "minecraft:scrape_pottery_sherd",
        name: "Scrape Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots",
            secondaryUse: "Decorative artifact"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Trail Ruins archeology"]
        },
        specialNotes: [
            "Features a jagged, 'scraped' texture",
            "Found in the Overworld's historical 'Trail Ruins'",
            "Part of the 1.20 archeology expansion"
        ],
        description: "The Scrape Pottery Sherd is an artifact from the ancient Trail Ruins. It features a design that looks like a rough scrape or scratch, likely representing tools or conflict in ancient times. Players obtain these by using a brush on suspicious gravel, making them a reward for patient exploratory work."
    },
    "minecraft:blade_pottery_sherd": {
        id: "minecraft:blade_pottery_sherd",
        name: "Blade Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots",
            secondaryUse: "Decorative artifact"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Cold Ocean Ruins"]
        },
        specialNotes: [
            "Features a sharp, sword-like blade icon",
            "Found under the sea in suspicious sand",
            "Symbolizes ancient weaponry"
        ],
        description: "The Blade Pottery Sherd is an underwater archeological find. Depicting a simple but clear blade, it suggests a history of martial prowess in the world of Minecraft. It is a favorite for players building armories or barracks who want their decorative pots to reflect a more aggressive or military theme."
    },
    "minecraft:heartbreak_pottery_sherd": {
        id: "minecraft:heartbreak_pottery_sherd",
        name: "Heartbreak Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots",
            secondaryUse: "Decorative artifact"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Trail Ruins"]
        },
        description: "The Heartbreak Pottery Sherd is a unique artifact featuring a cracked heart symbol. Found deep within the buried structures of Trail Ruins, it adds a touch of mystery and storytelling to any pot it's part of. It is often used by builders to create atmospheric or sorrowful environments."
    },
    "minecraft:heart_of_the_sea": {
        id: "minecraft:heart_of_the_sea",
        name: "Heart of the Sea",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting a Conduit",
            secondaryUse: "Trophy item"
        },
        crafting: {
            recipeType: "Treasure",
            ingredients: ["Found in Buried Treasure chests"]
        },
        specialNotes: [
            "Found by following a Buried Treasure Map",
            "Cannot be obtained through any other method",
            "Required for underwater breathing and vision via the Conduit",
            "Has a 'rare' yellow name-tag rarity"
        ],
        description: "The Heart of the Sea is a rare, mystical orb that pulsates with oceanic power. It is exclusively found in buried treasure chests, hidden deep in the sand and gravel of beaches and oceans. Its only practical use is to be surrounded by nautilus shells to create a Conduit, a powerful beacon that allows players to breathe, see, and mine freely underwater. It is the central heart of any permanent underwater civilization."
    },
    "minecraft:nether_star": {
        id: "minecraft:nether_star",
        name: "Nether Star",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting a Beacon",
            secondaryUse: "Ultimate trophy"
        },
        crafting: {
            recipeType: "Boss Drop",
            ingredients: ["Dropped by the Wither boss"]
        },
        specialNotes: [
            "Always dropped upon the death of a Wither",
            "Takes a few seconds to drop after the Wither's explosion",
            "Cannot be destroyed by explosions",
            "Has a rare 'aqua' name-tag rarity",
            "The most powerful single-item power source in the game"
        ],
        description: "The Nether Star is the ultimate reward for conquering the Wither. This radiant star glows with an internal light and is the only item capable of powering a Beacon. Because Beacons provide massive area-of-effect buffs like Haste and Strength, the Nether Star is one of the most valuable items a player can possess, representing the transition from mid-game to end-game dominance."
    },
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ultimate trophy of victory",
            secondaryUse: "Decorative block"
        },
        crafting: {
            recipeType: "Boss Task",
            ingredients: ["Appears on the exit portal after killing the Ender Dragon"]
        },
        specialNotes: [
            "The rarest item in Minecraft, as only one exists per world level",
            "Teleports to a nearby location if hit in survival",
            "Can be safely harvested by pushing it with a piston or placing a torch under its falling path",
            "Does not hatch and has no functional purpose other than bragging rights"
        ],
        description: "The Dragon Egg is the quintessential trophy item in Minecraft. It appears atop the bedrock fountain in The End once the Ender Dragon has been defeated for the first time. It is a unique 'gravity block' that teleports when a player attempts to mine it normally. While many myths exist about hatching the egg, it remains a purely decorative symbol of a player's triumph over the game's final boss."
    },
    "minecraft:chorus_fruit": {
        id: "minecraft:chorus_fruit",
        name: "Chorus Fruit",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating (restores hunger and teleports player)",
            secondaryUse: "Smelting into Popped Chorus Fruit"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Grows on Chorus Plants in the End"]
        },
        specialNotes: [
            "Teleports the player to a random spot within 8 blocks",
            "Can be eaten even if the hunger bar is full",
            "Essential for navigating tight spots or escaping mobs",
            "The source material for End Rods and Purpur blocks"
        ],
        description: "Chorus Fruit is a strange, purple vegetation found exclusively in the outer islands of The End. Eating it provides a small amount of hunger relief but comes with a unique side effect: random teleportation. This ability makes it a favorite for players who find themselves stuck in blocks or surrounded by enemies. Beyond consumption, it is a critical industrial material, being smelted into popped chorus fruit for advanced building."
    },
    "minecraft:totem_of_undying": {
        id: "minecraft:totem_of_undying",
        name: "Totem of Undying",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Prevents death when held in either hand",
            secondaryUse: "Trophy of Evoker defeat"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Evokers"]
        },
        specialNotes: [
            "Must be held (main hand or off-hand) at the moment of death to activate",
            "Triggers a unique animation and grants Regeneration II, Fire Resistance, and Absorption II",
            "Consumed upon use",
            "Obtained from Woodland Mansions or high-level Raids"
        ],
        description: "The Totem of Undying is a life-saving artifact that cheats death itself. Shaped like a small golden idol with emerald eyes, it is dropped only by Evokers. When a player carrying the totem takes fatal damage, the totem is consumed, immediately restoring a small amount of health and providing powerful defensive buffs for a short duration. It is an essential item for Hardcore players and those facing dangerous bosses."
    },
    "minecraft:bundle": {
        id: "minecraft:bundle",
        name: "Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Storing up to 64 items of different types in one slot",
            secondaryUse: "Organization of small item counts"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String", "Leather"]
        },
        specialNotes: [
            "Can hold a mixture of items (e.g., 32 dirt and 32 stone)",
            "The total count of items cannot exceed 64",
            "Non-stackable items (like swords) take up all 64 slots",
            "Added to Bedrock in 1.21.30 after a long experimental phase"
        ],
        description: "The Bundle is a revolutionary inventory management tool that helps players deal with 'inventory clutter.' Unlike chests or shulker boxes, a bundle allows you to group different types of items into a single inventory slot, as long as the total count is 64 or less. This makes it perfect for early-game exploration when you find small amounts of many different things like flowers, seeds, and various mob drops."
    },
    "minecraft:brush": {
        id: "minecraft:brush",
        name: "Brush",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Brushing Suspicious Sand and Gravel",
            secondaryUse: "Harvesting Armadillo Scutes"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick", "Copper Ingot", "Feather"]
        },
        specialNotes: [
            "Used to reveal hidden items in Desert Temples, Ocean Ruins, and Trail Ruins",
            "Can be enchanted with Unbreaking and Mending",
            "The primary tool for the Archeology system",
            "In Bedrock, use on an Armadillo to get scutes instantly"
        ],
        description: "The Brush is the signature tool of the Archeology system introduced in 1.20. It allows players to delicately uncover treasures buried within 'suspicious' blocks found in various ruins. Instead of breaking the block, the brush reveals the item inside while preserving the block's integrity temporarily. It is also an essential tool for animal husbandry, specifically for gathering materials from Armadillos to craft wolf armor."
    },
    "minecraft:glass_bottle": {
        id: "minecraft:glass_bottle",
        name: "Glass Bottle",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Holding water, potions, or dragon's breath",
            secondaryUse: "Brewing material"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Glass Block x3"]
        },
        description: "The Glass Bottle is the fundamental container for all liquid-based alchemy and chemistry in Minecraft. It can be filled from any water source to create a water bottle, the base for brewing. It can also catch Dragon's Breath from the Ender Dragon's lingering attacks or be used to collect honey from bee nests. It is a simple but indispensable tool for any seasoned survivalist."
    },
    "minecraft:glow_berries": {
        id: "minecraft:glow_berries",
        name: "Glow Berries",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating (restores small hunger) and light source",
            secondaryUse: "Breeding foxes"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Found on Cave Vines in Lush Caves"]
        },
        specialNotes: [
            "Emits a light level of 14 when growing on a vine",
            "Provides a soft, golden glow to caves",
            "Can be planted on the bottom of most blocks to grow new vines",
            "Can be climbed like regular vines if the berries are present"
        ],
        description: "Glow Berries are a luminescent food source found hanging from the ceilings of Lush Caves. They serve a dual purpose: providing a reliable light source for underground explorers and a snack that restores 2 hunger points. They are also the favorite food of foxes, used for both taming and breeding. Their ability to grow downwards makes them a unique decorative choice for vertical gardens and cave bases."
    },
    "minecraft:book": {
        id: "minecraft:book",
        name: "Book",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting item (Bookshelves, Enchanting Tables)",
            secondaryUse: "Enchanting via the Enchanting Table"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Paper x3", "Leather x1"]
        },
        description: "The Book is a foundational crafting item representing knowledge and magic in Minecraft. It is a critical component for creating bookshelves to power up your enchanting setup and is the base for the Enchanting Table itself. Beyond crafting, books can be enchanted directly to store powerful spells for later use via an anvil, making them a key part of power progression."
    },
    "minecraft:blaze_rod": {
        id: "minecraft:blaze_rod",
        name: "Blaze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing fuel and crafting material",
            secondaryUse: "Fuel for furnaces (burns for 120 seconds)"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Blazes in Nether Fortresses"]
        },
        specialNotes: [
            "One rod crafts into 2 Blaze Powders",
            "Essential for any brewing activity",
            "Required to craft End Rods for lighting",
            "A key part of reaching the End (to make Eyes of Ender)"
        ],
        description: "Blaze Rods are fiery sticks dropped by the Blazes that haunt Nether Fortresses. They are one of the most important mid-game items, as they are the only source of Blaze Powder—the fuel for all brewing stands and a critical component of Eyes of Ender. Exploring the Nether to collect these rods is a rite of passage for every Minecraft player aiming to finish the game."
    },
    "minecraft:spyglass": {
        id: "minecraft:spyglass",
        name: "Spyglass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Zooming in on distant objects",
            secondaryUse: "Scouting and navigation"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Amethyst Shard", "Copper Ingot x2"]
        },
        specialNotes: [
            "Provides a significant zoom effect while held",
            "Restricts the player's field of view to a circular window",
            "Slows down player movement speed while in use",
            "Added in 1.17 Caves & Cliffs as a use for Copper and Amethyst"
        ],
        description: "The Spyglass is a long-range scouting tool that allows players to see far-off structures and mobs with great clarity. It is the primary functional use for copper ingots and amethyst shards. Whether you're looking for a village on the horizon or trying to spot an Elytra-flying friend, the spyglass is an essential addition to any explorer's toolbar, effectively bringing the distant world closer."
    },
    "minecraft:amethyst_shard": {
        id: "minecraft:amethyst_shard",
        name: "Amethyst Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting item (Spyglass, Tinted Glass)",
            secondaryUse: "Decoration and music (vibrates when walked on)"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Grows from Amethyst Clusters in Geodes"]
        },
        specialNotes: [
            "Obtained by mining a fully-grown Amethyst Cluster",
            "Makes a beautiful chiming sound when placed or walked on",
            "Cannot be placed back onto a budding amethyst block to grow more",
            "Essential for making Tinted Glass, which blocks light but is transparent"
        ],
        description: "Amethyst Shards are beautiful, crystalline fragments found within the heart of Geodes. These purple crystals are valued for both their aesthetics and their unique properties. They produce melodic sounds that vary based on how they are interacted with. Beyond their beauty, they have high utility in crafting precision instruments like the spyglass and specialized building blocks like tinted glass, which creates darkened but visible rooms."
    },
    "minecraft:recovery_compass": {
        id: "minecraft:recovery_compass",
        name: "Recovery Compass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Pointing to the location of the player's last death",
            secondaryUse: "Navigating back to lost items"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Echo Shard x8", "Compass x1"]
        },
        specialNotes: [
            "Only works if the player has previously died in that dimension",
            "Will spin randomly if the player has not died or is in the wrong dimension",
            "Crafted using rare shards from Ancient Cities",
            "Added in 1.19 Wild Update"
        ],
        description: "The Recovery Compass is an advanced survival tool that helps players recover their inventory after a tragic death. Built using rare Echo Shards found only in the dangerous Ancient Cities, this compass is attuned to the player's 'last soul location.' While it's expensive to craft, it is an invaluable insurance policy for players carrying precious gear into unknown territories."
    },
    "minecraft:netherite_ingot": {
        id: "minecraft:netherite_ingot",
        name: "Netherite Ingot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Upgrading diamond gear to netherite in a smithing table",
            secondaryUse: "Repairing netherite equipment in an anvil"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Netherite Scrap x4", "Gold Ingot x4"]
        },
        specialNotes: [
            "Netherite items do not burn in lava and float on top of it",
            "The most durable and high-protection tier of material in the game",
            "Requires both ancient debris and gold to produce",
            "Used to create the most powerful equipment in Minecraft"
        ],
        description: "The Netherite Ingot is the ultimate material for survival gear. Heavier and stronger than diamond, it is obtained through a laborious process in the Nether. Netherite equipment is不仅 более прочный, but juga has the unique property of being fireproof. If a player dies in lava with netherite gear, their items will safely float on the surface, waiting to be recovered. It represents the peak of a player's power and resilience."
    },
    "minecraft:egg": {
        id: "minecraft:egg",
        name: "Egg",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawning chickens (when thrown) and crafting food",
            secondaryUse: "Projectiles for knocking back mobs"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Laid by Chickens every 5-10 minutes"]
        },
        description: "The humble Egg is a versatile item laid by chickens. When thrown, it has a 1 in 8 chance of spawning a baby chicken, allowing players to start a farm. Beyond farming, eggs are a core ingredient in making cakes and pumpkin pies. Interestingly, they also deal a tiny amount of knockback when thrown at mobs, making them a humorous but occasionally useful defensive tool."
    },
    "minecraft:echo_shard": {
        id: "minecraft:echo_shard",
        name: "Echo Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Recovery Compass",
            secondaryUse: "Collection item"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City chests"]
        },
        specialNotes: [
            "Has a dark, pulsating appearance",
            "Only found in the Deep Dark's Ancient Cities",
            "Directly tied to the theme of sound and souls (Sculk)",
            "One of the rarest materials in the game"
        ],
        description: "Echo Shards are mysterious, pulsating fragments of concentrated sculk and sound. Found only in the chests within Ancient Cities, they are a testament to a player's bravery in navigating the Warden's domain. Their primary purpose is the construction of a Recovery Compass, but they also serve as a striking decoration and evidence of high-level exploration in the Deep Dark."
    },
    "minecraft:nautilus_shell": {
        id: "minecraft:nautilus_shell",
        name: "Nautilus Shell",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting a Conduit",
            secondaryUse: "Trading and decoration"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Fishing", "Dropped by Drowned", "Wandering Trader"]
        },
        description: "Nautilus Shells are rare ocean treasures used to build the Conduit. They can be found through various methods: occasionally caught while fishing, found as loot held by Drowned mobs, or purchased from a wandering trader. Eight of these shells must be combined with a Heart of the Sea to create the Conduit, making them essential for any player wishing to master the underwater depths."
    },
    "minecraft:nether_wart": {
        id: "minecraft:nether_wart",
        name: "Nether Wart",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "The fundamental ingredient for almost all potions",
            secondaryUse: "Crafting Nether Wart Blocks and Red Nether Bricks"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Found in Nether Fortresses or Bastion Remnants"]
        },
        specialNotes: [
            "Must be grown on Soul Sand",
            "Can grow in any dimension as long as it's on soul sand",
            "Essential for making the 'Awkward Potion'",
            "Cannot be bone-mealed (in standard Bedrock)"
        ],
        description: "Nether Wart is a red, fungus-like growth that is arguably the most important plant in the game for alchemy. It serves as the base for 'Awkward Potions,' which are the starting point for every other functional potion in the game. Without Nether Wart, brewing effectively doesn't exist. It is found in small soul sand gardens within Nether Fortresses and is a high-priority item for any aspiring brewer."
    },
    "minecraft:prismarine_shard": {
        id: "minecraft:prismarine_shard",
        name: "Prismarine Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Prismarine blocks",
            secondaryUse: "Crafting Sea Lanterns"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Guardians and Elder Guardians"]
        },
        description: "Prismarine Shards are the building blocks of the ocean. Dropped by the guardians that protect Ocean Monuments, these shards are used to craft Prismarine, Prismarine Bricks, and Dark Prismarine. They are a staple for underwater architects and are essential when mixed with prismarine crystals to create Sea Lanterns—the best underwater light source in the game."
    },
    "minecraft:prismarine_crystals": {
        id: "minecraft:prismarine_crystals",
        name: "Prismarine Crystals",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sea Lanterns",
            secondaryUse: "Decorative material"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Guardians and Elder Guardians"]
        },
        description: "Prismarine Crystals are glowing fragments that provide the literal light for ocean-themed blocks. While rarer than shards, they are most valued for their role in crafting Sea Lanterns. These lanterns are not only bright but also look elegant in a wide variety of builds. Obtaining them requires a trip to an Ocean Monument and defeating the dangerous guardians within."
    },
    "minecraft:rabbit_foot": {
        id: "minecraft:rabbit_foot",
        name: "Rabbit's Foot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Potions of Leaping",
            secondaryUse: "Trading with Cleric villagers"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Rabbits (rarely)"]
        },
        description: "A Rabbit's Foot is a rare charm dropped by rabbits. In alchemy, it is a potent ingredient that allows players to brew Potions of Leaping, increasing their jump height and reducing fall damage. Due to the high speed and small size of rabbits, collecting these can be a challenge, often leading players to create specialized rabbit farms or use cats (who sometimes bring them as 'gifts')."
    },
    "minecraft:rotten_flesh": {
        id: "minecraft:rotten_flesh",
        name: "Rotten Flesh",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Emergency food and taming/breeding wolves",
            secondaryUse: "Trading with Cleric villagers for Emeralds"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Zombies and Husks"]
        },
        specialNotes: [
            "80% chance to cause 'Hunger' when eaten",
            "Safe to use for breeding and healing pet wolves",
            "One of the most efficient ways to earn emeralds from clerics",
            "Excellent for mass-leveling villagers"
        ],
        description: "Rotten Flesh is a common mob drop that most players eventually find in abundance. While eating it as a player is risky due to the high chance of food poisoning, it is a fantastic resource for managing a pack of tamed wolves. Furthermore, it is a highly valuable trade commodity in villages, where Clerics will gladly exchange it for emeralds, turning a common waste product into currency."
    },
    "minecraft:name_tag": {
        id: "minecraft:name_tag",
        name: "Name Tag",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Naming mobs to prevent them from despawning",
            secondaryUse: "Personalizing pets"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in chests, through fishing, or trading"]
        },
        specialNotes: [
            "Must be renamed in an Anvil first (costs 1 XP level)",
            "A mob named with a name tag will never despawn naturally",
            "Special names like 'Dinnerbone' or 'jeb_' trigger Easter eggs",
            "Cannot be used on players or the Ender Dragon"
        ],
        description: "The Name Tag is a utility item that gives identity to the creatures of Minecraft. By renaming a tag in an anvil and using it on a mob, that soul becomes a permanent part of the world. This is essential for keeping rare mobs for farms or simply giving your favorite horse a name. It also hides the secret to several famous Minecraft easter eggs, such as turning mobs upside down or making sheep cycle through rainbow colors."
    },
    "minecraft:honey_bottle": {
        id: "minecraft:honey_bottle",
        name: "Honey Bottle",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing Poison and restoring hunger",
            secondaryUse: "Crafting Honey Blocks and Sugar"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Obtained by using a Glass Bottle on a full Bee Nest or Beehive"]
        },
        specialNotes: [
            "Removes the Poison effect without removing other buffs",
            "Unique stack size of 16",
            "Does not cause a 'drinking' animation for some mobs in older Bedrock",
            "The primary source of honey blocks for redstone"
        ],
        description: "Honey Bottles are a sweet and functional treat added in the Buzzy Bees update. Unlike milk, which clears all status effects, honey targets only Poison, making it a superior choice for fighting spiders or cave spiders while keeping your own positive buffs. It can also be crafted into sticky honey blocks, which are a game-changer for redstone engineers, or simply consumed as a decent food source."
    },
    "minecraft:honeycomb": {
        id: "minecraft:honeycomb",
        name: "Honeycomb",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Waxing copper to prevent oxidation",
            secondaryUse: "Crafting Candles, Beehives, and Waxed Signs"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Obtained by using Shears on a full Bee Nest or Beehive"]
        },
        specialNotes: [
            "Essential for preserving the color of copper buildings",
            "Required to craft man-made beehives to expand bee farms",
            "Using it on a sign in Bedrock prevents further editing",
            "Using shears on a nest irritates bees unless a campfire is underneath"
        ],
        description: "Honeycomb is a versatile material harvested from industrious bees. Its most important modern use is 'waxing'—the process of coating copper blocks or signs to freeze them in their current state. This allows builders to keep their copper roofs bright orange or their signs safe from griefers. It is also a core component for making candles and artificial beehives, allowing players to relocate their honey production anywhere."
    },
    "minecraft:stick": {
        id: "minecraft:stick",
        name: "Stick",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "The base handle for almost every tool and weapon",
            secondaryUse: "Fuel (burns for 5 seconds) and crafting ladders/fences"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Planks x2"]
        },
        description: "The Stick is the most basic and arguably most used utility item in Minecraft. Every pickaxe, sword, shovel, and axe requires a pair of sticks for their handles. They are also used to craft torches, arrows, ladders, fences, and signs. Despite their simplicity, it is impossible to progress through the ages of Minecraft—from wood to netherite—without a steady supply of these humble wooden rods."
    },
    "minecraft:slime_ball": {
        id: "minecraft:slime_ball",
        name: "Slimeball",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sticky Pistons, Slime Blocks, and Leads",
            secondaryUse: "Breeding and healing frogs (in Bedrock)"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Slimes or Panda sneezes"]
        },
        description: "Slimeballs are sticky green orbs that are the lifeblood of complex machinery. Their ability to make pistons 'sticky' allows for the creation of secret doors, elevators, and flying machines. In Bedrock specifically, they are also used to feed and breed frogs. Whether you're a redstone expert or a creature collector, finding a slime chunk or a swamp to farm these is a major milestone in world utility."
    },
    "minecraft:warped_fungus_on_a_stick": {
        id: "minecraft:warped_fungus_on_a_stick",
        name: "Warped Fungus on a Stick",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Controlling a saddled Strider in the Nether",
            secondaryUse: "Navigation over lava"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Fishing Rod", "Warped Fungus"]
        },
        description: "The Warped Fungus on a Stick is the 'key' to navigating the lava oceans of the Nether. By holding it while riding a saddled Strider, the player can direct the creature's path. Clicking the item 'boosts' the Strider's speed at the cost of some durability. It's an essential tool for Nether exploration, turning the once-deadly lava into a highway for the player."
    },
    "minecraft:goat_horn": {
        id: "minecraft:goat_horn",
        name: "Goat Horn",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Producing a loud, echoing sound",
            secondaryUse: "Collection and signaling"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Goats when they ram hard blocks"]
        },
        specialNotes: [
            "There are 8 different variants of horns with unique sounds",
            "Sounds include: Ponder, Sing, Seek, Feel, Admire, Call, Yearn, and Dream",
            "Has a cooldown after being used",
            "The sound carries over long distances, making it great for multiplayer signaling"
        ],
        description: "Goat Horns are musical/auditory items dropped by goats that ram into solid obstacles like stone or ores. Each horn produces a unique, hauntingly loud sound that can be heard from far away. They are perfect for roleplay, signaling the start of a battle, or simply annoying your friends. Finding all eight variants—especially the rare ones like 'Dream'—is a fun challenge for collectors."
    },
    "minecraft:disc_fragment_5": {
        id: "minecraft:disc_fragment_5",
        name: "Disc Fragment 5",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Music Disc 5",
            secondaryUse: "Archeological artifact"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Rarely found in Ancient City chests"]
        },
        specialNotes: [
            "Requires 9 fragments to craft one complete disc",
            "Exclusive to the Deep Dark biome",
            "Adds to the mystery of the Ancient Cities"
        ],
        description: "Disc Fragment 5 is a shattered piece of a mysterious recording. Found only in the dangerous Ancient Cities, players must collect nine of these fragments to assemble the full Music Disc 5. The disc itself contains a disturbing sequence of sounds that hints at a dark history involving the Warden and the cities' former inhabitants, making the collection of these fragments a priority for lore-hunters."
    },
    "minecraft:phantom_membrane": {
        id: "minecraft:phantom_membrane",
        name: "Phantom Membrane",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Repairing Elytra in an anvil",
            secondaryUse: "Brewing Potions of Slow Falling"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Phantoms"]
        },
        specialNotes: [
            "Essential for keeping your Elytra in flying condition",
            "Slow falling is critical for the Ender Dragon boss fight",
            "Dropped by Phantoms that spawn when the player hasn't slept"
        ],
        description: "Phantom Membranes are leathery scraps dropped by the terrifying Phantoms that haunt the night skies. They have two incredibly vital uses: they are the only material used to repair damaged Elytra (without using Mending), and they are the core ingredient for Potions of Slow Falling. For any player who spends a lot of time in the air, hunting phantoms for their membranes is a necessary evil."
    },
    "minecraft:turtle_scute": {
        id: "minecraft:turtle_scute",
        name: "Turtle Scute",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Turtle Shell (helmet)",
            secondaryUse: "Brewing Potions of the Turtle Master"
        },
        crafting: {
            recipeType: "Mob Task",
            ingredients: ["Dropped by baby turtles when they grow into adults"]
        },
        description: "Turtle Scutes are rare items that represent the growth of nature. To obtain them, you must breed turtles and wait for the babies to mature; as they grow, they shed their small shell piece. These scutes can be crafted into a Turtle Shell helmet, which gives the player extra water breathing time. They are also used in brewing the powerful Potion of the Turtle Master, which grants massive defense at the cost of movement speed."
    },
    "minecraft:dragon_breath": {
        id: "minecraft:dragon_breath",
        name: "Dragon's Breath",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Processing Splash Potions into Lingering Potions",
            secondaryUse: "Advanced alchemy"
        },
        crafting: {
            recipeType: "Boss Task",
            ingredients: ["Use a Glass Bottle on the purple clouds left by the Ender Dragon"]
        },
        description: "Dragon's Breath is a bottled magical gas collected during the fight with the Ender Dragon. When the dragon shoots its purple fire or performs its breath attack, it leaves behind swirling clouds on the ground. By using empty glass bottles on these clouds, players can capture the gas. It is a critical late-game alchemy ingredient, allowing players to create Lingering Potions that leave a effect cloud on impact."
    },
    "minecraft:clay_ball": {
        id: "minecraft:clay_ball",
        name: "Clay Ball",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Bricks",
            secondaryUse: "Crafting Clay Blocks"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Obtained by breaking Clay Blocks"]
        },
        description: "Clay Balls are slippery gray items found underwater in rivers and swamps. When smelted in a furnace, each ball becomes a single brick. These bricks can then be crafted into the iconic red brick blocks beloved by builders. Finding a large patch of clay is always a lucky find for players looking to give their homes a classic, sturdy look."
    },
    "minecraft:clock": {
        id: "minecraft:clock",
        name: "Clock",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Telling the current time of day",
            secondaryUse: "Planning safe mining trips"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x4", "Redstone Dust x1"]
        },
        description: "The Clock is a precision tool that displays the sun and moon's position. It is especially useful when deep underground, as it tells the player whether it's safe to surface or if monsters are currently roaming the world above. The icon on the clock actually functions in the inventory, meaning you don't even have to hold it to know what time it is."
    },
    "minecraft:compass": {
        id: "minecraft:compass",
        name: "Compass",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Pointing to the world spawn point",
            secondaryUse: "Attuning to a Lodestone or crafting Maps"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x4", "Redstone Dust x1"]
        },
        description: "The Compass is a vital navigation tool that always points back to your original starting point (world spawn). It helps lost players find their way home across vast biomes. Furthermore, it can be combined with a rare Lodestone to point specifically to that block, or used as a core ingredient in crafting maps for cartography."
    },
    "minecraft:lead": {
        id: "minecraft:lead",
        name: "Lead",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Tying mobs to fences or leading them behind you",
            secondaryUse: "Relocating animals"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String x4", "Slimeball x1"]
        },
        description: "The Lead (or leash) is the primary tool for animal husbandry. It allows players into 'rope' almost any passive or neutral mob and lead them to a new home. You can even tie the lead to a fence post to keep your animals from wandering off. It is much more reliable than using food lures, especially for long-distance travel through difficult terrain."
    },
    "minecraft:fishing_rod": {
        id: "minecraft:fishing_rod",
        name: "Fishing Rod",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Fishing for food and treasure",
            secondaryUse: "Pulling mobs and entities toward the player"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x3", "String x2"]
        },
        description: "The Fishing Rod is a multi-purpose tool for survival. While its main use is catching fish for food, skilled anglers can also pull rare 'treasure' such as enchanted books, saddles, and nautilus shells from the water. In combat, it can be used to pull distant mobs toward the player or even snag items and boats. It is one of the most rewarding items to enchant with 'Lure' and 'Luck of the Sea.'"
    },
    "minecraft:carrot_on_a_stick": {
        id: "minecraft:carrot_on_a_stick",
        name: "Carrot on a Stick",
        maxStack: 1,
        durability: 25,
        enchantable: true,
        usage: {
            primaryUse: "Controlling a saddled Pig",
            secondaryUse: "Fast travel over land"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Fishing Rod", "Carrot"]
        },
        description: "The Carrot on a Stick is a classic tool for steering pigs. By dangling a carrot in front of a pig you are riding, you can guide its movement. Like its warped fungus cousin, it has a 'boost' mechanic that makes the pig run faster. It's a fun and surprisingly efficient way to travel across plains and forests before you have access to horses or Elytra."
    },
    "minecraft:shears": {
        id: "minecraft:shears",
        name: "Shears",
        maxStack: 1,
        durability: 238,
        enchantable: true,
        usage: {
            primaryUse: "Harvesting wool from sheep without harming them",
            secondaryUse: "Collecting delicate blocks like leaves and cobwebs"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Iron Ingot x2"]
        },
        description: "Shears are a specialized tool for delicate harvesting. They allow players to collect wool from sheep, leaves from trees, cobwebs from caves, and even tall grass. Without shears, these blocks often simply break or disappear. They are also used to carve pumpkins for Halloween or honeycomb from beehives. They are a must-have for builders who want to incorporate natural foliage into their designs."
    },
    "minecraft:firework_rocket": {
        id: "minecraft:firework_rocket",
        name: "Firework Rocket",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Providing propulsion for Elytra flight",
            secondaryUse: "Decorative displays and crossbow ammo"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Gunpowder x1-3", "Paper x1"]
        },
        description: "Firework Rockets are the 'engines' of late-game Minecraft. While they can be crafted with firework stars for beautiful displays, their most common use is boosting players while they fly with Elytra. By using a rocket mid-air, you gain a massive speed boost, allowing for infinite flight. They can also be fired from crossbows, where rockets with stars can deal significant explosive damage to groups of enemies."
    },
    "minecraft:flint_and_steel": {
        id: "minecraft:flint_and_steel",
        name: "Flint and Steel",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Lighting fires and activating TNT",
            secondaryUse: "Activating Nether Portals"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Iron Ingot", "Flint"]
        },
        description: "Flint and Steel is the primary tool for starting fires. It is critical for progress, as it is the only common way to light a Nether Portal. It can also be used to cook animals instantly by setting them on fire or to clear out brush and trees. In defense, lighting the ground can create a temporary barrier of fire that damages mobs. It is a simple but world-altering tool."
    },
    "minecraft:saddle": {
        id: "minecraft:saddle",
        name: "Saddle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Riding horses, donkeys, mules, pigs, and striders",
            secondaryUse: "Basic transportation utility"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in chests or through fishing"]
        },
        description: "The Saddle is an uncraftable treasure that opens up the world of animal transportation. Once you have a saddle, you can tame and ride a variety of mobs. Whether you're crossing a desert on a horse or walking across a lava sea on a strider, the saddle is the essential interface between you and your mount. Because they cannot be crafted, finding one in a dungeon or catching one while fishing is always a significant moment."
    },
    "minecraft:milk_bucket": {
        id: "minecraft:milk_bucket",
        name: "Milk Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing all status effects",
            secondaryUse: "Crafting cakes"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Use a Bucket on a Cow or Mooshroom"]
        },
        description: "The Milk Bucket is the ultimate 'reset' button for your character. Drinking milk immediately clears every status effect, whether it's the Mining Fatigue from an Elder Guardian, the deadly Wither effect, or even positive buffs like Strength. It is a vital safety item to carry when exploring dangerous monuments or fighting bosses, as it can save you from lingering damage that would otherwise be fatal."
    },
    "minecraft:lava_bucket": {
        id: "minecraft:lava_bucket",
        name: "Lava Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing lava for defense, light, or industrial use",
            secondaryUse: "Fuel for furnaces (burns for 1000 seconds)"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Use a Bucket on a Lava Source"]
        },
        description: "A Lava Bucket is a dangerous but incredibly useful utility. As a fuel source, it is the most efficient in the game, smelting 100 items at once. For defense, a correctly placed bucket can stop a horde of zombies in their tracks. It is also the primary ingredient for making Obsidian by mixing it with water. Every player should handle lava with care, but its utility for lighting and smelting is unmatched."
    },
    "minecraft:water_bucket": {
        id: "minecraft:water_bucket",
        name: "Water Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing water for crops, hydration, or safety",
            secondaryUse: "Milling obsidian and MLG (clutching) falls"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Use a Bucket on a Water Source"]
        },
        description: "The Water Bucket is often considered the single most important item to keep on your hotbar. It can be used to create farms, extinguish fires, push mobs away, and most importantly, save you from fall damage. By placing water just before you hit the ground (known as an 'MLG'), you can survive any height. It is also essential for turning lava into obsidian and creating cobblestone generators."
    },
    "minecraft:powder_snow_bucket": {
        id: "minecraft:powder_snow_bucket",
        name: "Powder Snow Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing Powder Snow as a trap or safety block",
            secondaryUse: "Taming and breeding certain future mobs"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Use a Bucket on a placed Powder Snow block", "Or collect from a Cauldron during snowfall"]
        },
        description: "The Powder Snow Bucket allows you to carry one of Minecraft's most deceptive blocks. Powder snow looks like regular snow but is actually a 'fluid-like' block that you can fall through. It is used to create traps for mobs or as a unique way to descend safely from high places. Carrying it in a bucket is the only way to relocate the block without melting it, making it a favorite for alpine builders."
    },
    "minecraft:axolotl_bucket": {
        id: "minecraft:axolotl_bucket",
        name: "Axolotl Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting Axolotls without drying them out",
            secondaryUse: "Deploying Axolotls in battle"
        },
        crafting: {
            recipeType: "Interaction",
            ingredients: ["Water Bucket", "Axolotl"]
        },
        description: "An Axolotl Bucket is the best way to move your amphibious friends. Because axolotls are 'the adventurers' of the ocean, they can help you fight drowned and guardians. Carrying them in a bucket keeps them healthy and ready to be deployed the moment you enter an underwater fight. They common in many colors, and the bucket will even tell you if you've found the ultra-rare blue variant."
    },
    "minecraft:item_frame": {
        id: "minecraft:item_frame",
        name: "Item Frame",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying items on walls or floors",
            secondaryUse: "Labeling chests and map rooms"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x8", "Leather x1"]
        },
        description: "The Item Frame is a critical organization and decoration tool. It allows you to 'stick' an item to the side of a block so you can see what's inside a chest or just show off your rarest trophies. In many advanced builds, frames are used with maps to create giant floor-to-ceiling world maps. They can also be used as 'buttons' or 'clocks' by placing corresponding items inside them."
    },
    "minecraft:armor_stand": {
        id: "minecraft:armor_stand",
        name: "Armor Stand",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying and storing armor sets",
            secondaryUse: "Decorative detailing and custom modeling (pins)"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x6", "Smooth Stone Slab x1"]
        },
        specialNotes: [
            "In Bedrock, armor stands have built-in poses and can hold items",
            "Can be equipped with a full set of armor, plus a sword or shield",
            "Can be posed using the 'Sneak + Interact' button",
            "Functional as an entity, so they can be pushed by pistons and affected by gravity"
        ],
        description: "Armor Stands are more than just display racks. While their main job is to keep your spare armor sets organized and looking cool, in Bedrock Edition they are highly interactive. Players can change their poses to create 'scenes' in their world—making it look like guards are protecting a castle or a family is eating dinner. They are a bridge between furniture and entities, making them a staple for detailed building."
    },
    "minecraft:ender_pearl": {
        id: "minecraft:ender_pearl",
        name: "Ender Pearl",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Teleporting the player to where it lands",
            secondaryUse: "Crafting Eyes of Ender"
        },
        crafting: {
            recipeType: "Mob Drop",
            ingredients: ["Dropped by Endermen"]
        },
        specialNotes: [
            "Deals 5 damage (2.5 hearts) to the player upon teleporting",
            "A critical tool for escaping danger or reaching high places",
            "Standard currency for Bartering with Piglins",
            "Can be thrown through small gaps like fences and iron bars"
        ],
        description: "The Ender Pearl is the most common form of teleportation in Minecraft. Dropped by the tall, shadowy Endermen, these pearls allow players to bypass obstacles just by throwing them. While they cause a small amount of damage upon impact, the utility of instant movement is far more valuable. They are also half of the recipe for Eyes of Ender, making them a mandatory requirement for anyone wanting to find the Stronghold and finish the game."
    },
    "minecraft:fire_charge": {
        id: "minecraft:fire_charge",
        name: "Fire Charge",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Single-use fire starter or fireball projectile",
            secondaryUse: "Ammunition for Dispensers"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Blaze Powder", "Gunpowder", "Coal/Charcoal"]
        },
        description: "A Fire Charge is a portable explosion waiting to happen. While it can be used by a player manually as a one-time alternative to flint and steel, its true power is found in dispensers. When fired from a block, it becomes a blazing fireball, similar to those shot by Ghasts. This makes it an essential component for automated defense systems and defensive walls in more advanced player bases."
    },
    "minecraft:raw_iron": {
        id: "minecraft:raw_iron",
        name: "Raw Iron",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Iron Ingots",
            secondaryUse: "Compact storage in Raw Iron Blocks"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Dropped by Iron Ore"]
        },
        description: "Raw Iron is the direct result of mining iron ore. Introduced in 1.17 to bring consistency to the ore system, it allows the 'Fortune' enchantment to work on iron, significantly increasing how much metal a player can get from a single vein. These lumps of ore must be smelted in a furnace or blast furnace before they can be used to craft the armor and tools that the world depends on."
    },
    "minecraft:raw_gold": {
        id: "minecraft:raw_gold",
        name: "Raw Gold",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Gold Ingots",
            secondaryUse: "Compact storage in Raw Gold Blocks"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Dropped by Gold Ore"]
        },
        description: "Raw Gold is the unrefined state of the most valuable decorative metal. Like iron, it can be multiplied using Fortune, making gold mining much more lucrative than it used to be. Its soft, yellow appearance belies the power it holds for bartering with Piglins and crafting advanced items like golden apples and powered rails. Smelting it is the first step toward Nether riches."
    },
    "minecraft:raw_copper": {
        id: "minecraft:raw_copper",
        name: "Raw Copper",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Copper Ingots",
            secondaryUse: "Compact storage in Raw Copper Blocks"
        },
        crafting: {
            recipeType: "Natural",
            ingredients: ["Dropped by Copper Ore"]
        },
        description: "Raw Copper is found in massive quantities in the underground world. It is the raw material for the industrial copper set, powering lightning rods and crafting the beautiful oxidizing blocks used in grand architecture. Because copper is so abundant, players often find stacks of raw copper quickly, leading to the creation of huge 'raw copper blocks' for storage before the smelting process begins."
    },
    "minecraft:enchanted_book": {
        id: "minecraft:enchanted_book",
        name: "Enchanted Book",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying specific enchantments to gear in an Anvil",
            secondaryUse: "Storing high-level spells for future use"
        },
        crafting: {
            recipeType: "Table",
            ingredients: ["Book", "Experience levels", "Lapis Lazuli"]
        },
        specialNotes: [
            "Can hold any enchantment available in the game",
            "Found in treasure chests, through fishing, or library trades",
            "The only way to apply certain 'Treasure' enchantments like Mending",
            "Combining two identical books in an anvil creates a higher level"
        ],
        description: "The Enchanted Book is the ultimate catalyst for power. It allows players to selectively apply the buffs they want to their equipment. Instead of gambling on the enchanting table, you can find a book with 'Sharpness V' and apply it directly to your favorite sword. They are a bridge between raw materials and legendary gear, and finding a chest full of them is one of the most exciting parts of exploration."
    },
    "minecraft:writable_book": {
        id: "minecraft:writable_book",
        name: "Book and Quill",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Writing player messages, stories, and notes",
            secondaryUse: "Creating permanent in-game documentation"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Book", "Ink Sac", "Feather"]
        },
        description: "The Book and Quill is the primary method of long-form communication in Minecraft. It allows players to write multiple pages of text, which can then be 'signed' to make the book permanent. These are used for everything from server rules and personal journals to coordinate lists and complex storytelling in adventure maps. Once signed, a book cannot be edited, turning it into a 'Written Book'."
    },
    "minecraft:written_book": {
        id: "minecraft:written_book",
        name: "Written Book",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Reading finished stories or rules",
            secondaryUse: "Unique decorative shelf items"
        },
        crafting: {
            recipeType: "Interaction",
            ingredients: ["Sign a Writable Book"]
        },
        description: "A Written Book is the finalized version of a story. It bears the name of the author and the title chosen at the time of signing. These books are common on multiplayer servers for welcoming new players or documenting history. Interestingly, written books can be 'cloned' in a crafting table using more writable books, allowing an author to distribute their work to the entire world."
    },
    "minecraft:rabbit_stew": {
        id: "minecraft:rabbit_stew",
        name: "Rabbit Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating (restores high hunger and saturation)",
            secondaryUse: "High-tier food resource"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Cooked Rabbit", "Carrot", "Potato", "Mushroom", "Bowl"]
        },
        description: "Rabbit Stew is one of the most complex but rewarding foods in the game. It combines meat, vegetables, and fungi into a single hearty meal that restores a massive 10 points (5 bars) of hunger. While it is difficult to craft due to the variety of ingredients and only stacks in ones, it provides excellent saturation, keeping a player full for a long time during difficult journeys."
    },
    "minecraft:suspicious_stew": {
        id: "minecraft:suspicious_stew",
        name: "Suspicious Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating to gain a hidden status effect",
            secondaryUse: "Secret buff management"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bowl", "Brown Mushroom", "Red Mushroom", "Small Flower (any)"]
        },
        specialNotes: [
            "The effect depends on which flower was used in the recipe",
            "Dandelion = Saturation; Poppy = Night Vision; Cornflower = Jump Boost",
            "Wither Rose = Wither; Oxide Daisy = Regeneration",
            "Found in Shipwrecks and Desert Temples, or given by Brown Mooshrooms"
        ],
        description: "Suspicious Stew is a gamble in a bowl. While its appearance is always the same, its effects are determined by the flower used in its crafting. It can be a powerful tool—providing a burst of health or night vision—or a deadly trap that applies poison or blindness. Learning which flowers produce which effects transforms this item from a mystery into a strategic asset for the prepared explorer."
    },
    "minecraft:lodestone_compass": {
        id: "minecraft:lodestone_compass",
        name: "Lodestone Compass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Pointing to a specific Lodestone block",
            secondaryUse: "Advanced navigation through Nether and End"
        },
        crafting: {
            recipeType: "Interaction",
            ingredients: ["Compass", "Lodestone"]
        },
        description: "The Lodestone Compass is the answer to the Nether's navigation problems. Unlike a regular compass which spins wildly in other dimensions, a lodestone compass is magically tied to a specific block. Once attuned, it will always point the way back to that location, no matter where you are in that dimension. This is the only way to reliably navigate back to portals or distant fortresses in the chaotic Nether or barren End."
    },
    "minecraft:sheaf_pottery_sherd": {
        id: "minecraft:sheaf_pottery_sherd",
        name: "Sheaf Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots with the wheat design",
            secondaryUse: "Archeological display"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Desert Well suspicious sand"]
        },
        description: "The Sheaf Pottery Sherd features a stylized image of a wheat sheaf, symbolizing agriculture and bounty. It is an archeological find most commonly discovered by brushing the suspicious sand at the bottom of Desert Wells. It is an ideal thematic choice for farmers who want to decorate their granaries or manor houses with pottery that reflects their trade."
    },
    "minecraft:sentry_armor_trim_smithing_template": {
        id: "minecraft:sentry_armor_trim_smithing_template",
        name: "Sentry Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Sentry trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Pillager Outpost chests"]
        },
        specialNotes: [
            "Pattern features sharp angles and bold lines",
            "Associated with the Pillagers",
            "Can be duplicated using 7 diamonds and 1 cobblestone"
        ],
        description: "The Sentry Armor Trim is a relatively common but iconic trim found in Pillager Outposts. Its geometric pattern gives armor a structured, military look. It is often the first trim many players find, as outposts are frequent sights in the Overworld. Despite its availability, it remains a favorite for its clean and aggressive lines."
    },
    "minecraft:raiser_armor_trim_smithing_template": {
        id: "minecraft:raiser_armor_trim_smithing_template",
        name: "Raiser Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Raiser trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trail Ruins archeology"]
        },
        description: "The Raiser Armor Trim is a reward for dedicated archeologists. Found exclusively in the suspicious gravel of Trail Ruins, it features a unique 'rising' pattern. Because obtaining it requires patient brushing and excavation of ancient structures, it is a mark of a player who values history and detailed exploration."
    },
    "minecraft:shaper_armor_trim_smithing_template": {
        id: "minecraft:shaper_armor_trim_smithing_template",
        name: "Shaper Armor Trim Smithing Template",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the Shaper trim to armor",
            secondaryUse: "Decorative customization"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trail Ruins archeology"]
        },
        description: "The Shaper Armor Trim is another ancient find from the Trail Ruins. It provides a distinct 'shaped' look that flows well between armor pieces. Like other Trail Ruin templates, its rarity comes from the difficulty in locating and fully excavating the buried ruins, making it a stylish choice for world-renowned explorers."
    },
    "minecraft:miner_pottery_sherd": {
        id: "minecraft:miner_pottery_sherd",
        name: "Miner Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots with the pickaxe pattern",
            secondaryUse: "Archeological display"
        },
        crafting: {
            recipeType: "Excavation",
            ingredients: ["Found in Trail Ruins"]
        },
        description: "The Miner Pottery Sherd depicts a simple pickaxe, the universal symbol of Minecraft. Found among the rubble of Trail Ruins, it pays homage to the primary activity of the game. It is perhaps the most iconic sherd for building a themed workshop or a trophy room for a dedicated miner."
    },
    "minecraft:field_masoned_banner_pattern": {
        id: "minecraft:field_masoned_banner_pattern",
        name: "Field Masoned Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding the 'Masoned' brick-like pattern to a banner",
            secondaryUse: "Architectural heraldry"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Paper", "Brick Block"]
        },
        description: "The Field Masoned pattern applies a classic brickwork design to your banner. It is a favorite for builders who want their banners to look like a sturdy part of a castle wall or to represent a guild of masons. Like all patterns, it's a reusable tool that allows for consistent branding across your entire kingdom."
    },
    "minecraft:bordure_indented_banner_pattern": {
        id: "minecraft:bordure_indented_banner_pattern",
        name: "Bordure Indented Banner Pattern",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Adding a jagged 'vine' border to a banner",
            secondaryUse: "Nature-themed heraldry"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Paper", "Vines"]
        },
        description: "The Bordure Indented pattern creates a beautiful jagged border around the edges of a banner. Often used to simulate vines or tooth-like edges, it adds a layer of intricate detail that is hard to achieve with standard shapes. It's a simple recipe requiring only vines and paper, but it yields elegant results in the loom."
    },
    "minecraft:pale_oak_boat": {
        id: "minecraft:pale_oak_boat",
        name: "Pale Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting entities across water",
            secondaryUse: "Fast travel on ice (blue ice specifically)"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Pale Oak Planks x5"]
        },
        specialNotes: [
            "Introduced as part of the 1.21.50 Winter Drop",
            "Has a unique desaturated, ghostly white color matching the Pale Garden",
            "Can hold two entities (player and mob/another player)",
            "Does not have oars in the Bedrock crafting recipe (standard for all boats)",
            "Essential for exploring the coastal areas of the Pale Garden"
        ],
        description: "The Pale Oak Boat is a desaturated, ghostly white variant of the standard boat, crafted from wood found in the Pale Garden. Introduced in the 1.21.50 update, it functions identically to other boats, allowing for swift travel across oceans and lakes. Its signature look fits perfectly with the eerie, atmospheric aesthetic of the Winter Drop, providing a stylish and functional way to pilot through the mysterious new landscapes."
    },
    "minecraft:pale_oak_chest_boat": {
        id: "minecraft:pale_oak_chest_boat",
        name: "Pale Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting items and one player across water",
            secondaryUse: "Mobile storage for ocean exploration"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Pale Oak Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Pale Oak Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Matches the desaturated aesthetic of the Pale Garden",
            "Can be used as fuel in a furnace (smelts 6 items)"
        ],
        description: "The Pale Oak Boat with Chest offers mobile storage for players exploring the Pale Garden or other coastal biomes. By combining a Pale Oak Boat with a Chest, players gain a vessel capable of carrying 27 item stacks across oceans and rivers. While it sacrifices the second passenger seat for storage, it is an invaluable asset for exploration and moving base supplies across water with a unique Winter Drop aesthetic."
    },
    "minecraft:pale_oak_sign": {
        id: "minecraft:pale_oak_sign",
        name: "Pale Oak Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing text on walls or floor",
            secondaryUse: "Labeling chests or designating areas"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Pale Oak Planks x6", "Stick"]
        },
        specialNotes: [
            "Matches the pale, desaturated white color of the Pale Oak set",
            "Can be placed on the ground (standing) or on walls (hanging/attached)",
            "Supports up to four lines of text on both sides in Bedrock",
            "Can be edited after placement unless waxed with Honeycomb",
            "Text can be dyed or made to glow with a Glow Ink Sac"
        ],
        description: "The Pale Oak Sign is a decorative and informational item introduced in the Winter Drop (1.21.50). Crafted from pale oak planks and a stick, it provides a desaturated white canvas for player-written text. In Bedrock Edition, signs can have text on both sides, and the text can be further customized with dyes or glow ink. It is essential for organization, navigation, and adding detail to builds within the Pale Garden biome."
    },
    "minecraft:cherry_sign": {
        id: "minecraft:cherry_sign",
        name: "Cherry Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on walls or ground",
            secondaryUse: "Labeling and navigation"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cherry Planks x6", "Stick"]
        },
        specialNotes: [
            "Features the distinctive light pink color of the Cherry wood set",
            "In Bedrock, supports text on both front and back sides",
            "Can be placed at 16 different angles when standing on the ground",
            "Text can be customized using any of the 16 dyes or Glow Ink Sacs",
            "Prevents further editing if Waxed with Honeycomb"
        ],
        description: "The Cherry Sign is a decorative wood item introduced in the 1.20 Trails & Tales update. It is crafted from six cherry planks and a stick, inheriting the beautiful pink hue of the cherry groves. Beyond simple signage, it offers unique aesthetic possibilities for builders, allowing for colorful labels and artistic details. Like all modern Bedrock signs, it facilitates double-sided text and extensive customization, making it both a practical tool for organization and a vibrant accent for any pink-themed construction."
    },
    "minecraft:bamboo_sign": {
        id: "minecraft:bamboo_sign",
        name: "Bamboo Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on walls or ground",
            secondaryUse: "Decorative labeling"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bamboo Planks x6", "Stick"]
        },
        specialNotes: [
            "Features a unique yellowish-green bamboo texture",
            "Matches the aesthetic of the Bamboo wood set and Jungle biomes",
            "Supports double-sided text editing in Bedrock Edition",
            "Can be locked with Honeycomb to prevent changes",
            "Highly visible against darker blocks due to its bright color"
        ],
        description: "The Bamboo Sign is a tropical-themed informational item crafted from bamboo planks. Introduced as part of the bamboo wood family in version 1.20, it provides a distinct alternative to traditional wood signs with its bright, yellowish-green appearance. It functions identically to other signs, allowing players to communicate through text while providing a unique stylistic fit for jungles, beaches, or oriental-inspired builds. Its versatility in placement and customization makes it a staple for organized tropical bases."
    },
    "minecraft:mangrove_sign": {
        id: "minecraft:mangrove_sign",
        name: "Mangrove Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on walls or ground",
            secondaryUse: "Signage for swamp or dark-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Mangrove Planks x6", "Stick"]
        },
        specialNotes: [
            "Boasts a deep, rich reddish-brown wood color",
            "Shares the unique properties of all Bedrock signs including double-sided text",
            "Perfect for use in Swamps, Mangrove Forests, or rustic structures",
            "Resistant to most explosions compared to other wood items",
            "Can be dyed or enhanced with Glow Ink for better visibility"
        ],
        description: "The Mangrove Sign is a dark-colored informational item crafted from the mahogany-like planks of mangrove trees. Added in the 1.19 Wild Update, it offers a sophisticated reddish-brown canvas for text. Its darker tone makes it pair well with mud bricks and deepslate, providing clear but atmospheric labeling in swampy or underground environments. As a standard sign variant, it supports multiple lines of text on both sides and remains a durable and essential tool for navigation and world-building."
    },
    "minecraft:spruce_sign": {
        id: "minecraft:spruce_sign",
        name: "Spruce Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on walls or ground",
            secondaryUse: "Rustic labeling and navigation"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Spruce Planks x6", "Stick"]
        },
        specialNotes: [
            "Features the dark, warm brown color of spruce wood",
            "Added to Bedrock in 1.10.0 to provide wood variety",
            "Supports text on both front and back sides in Bedrock Edition",
            "Can be placed as a standing sign or attached to walls",
            "Prevents editing if waxed with a Honeycomb"
        ],
        description: "The Spruce Sign is a dark-colored informational item crafted from spruce planks and a stick. Introduced alongside other wood variants to bring diversity to signage, its rustic dark brown appearance makes it a favorite for medieval, woodland, and snowy builds. Like all signs in Bedrock Edition, it supports four lines of text on each side, which can be further customized with dyes or made to glow using Glow Ink Sacs for visibility in low light."
    },
    "minecraft:birch_sign": {
        id: "minecraft:birch_sign",
        name: "Birch Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text with high contrast",
            secondaryUse: "Bright decorative labeling"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Birch Planks x6", "Stick"]
        },
        specialNotes: [
            "The lightest colored sign, providing excellent contrast for dark text",
            "Consistently matches the bright cream color of the birch wood set",
            "Supports double-sided text editing as a standard sign trait",
            "Can be placed at any of the 16 rotational angles on a flat floor",
            "Dying the text black on a birch sign provides the best readability"
        ],
        description: "The Birch Sign is a light-colored decorative item used for displaying text. Its pale, creamy wood texture provides an excellent high-contrast background for player-written information, especially when used with darker dyes. Ideal for modern builds, laboratories, or bright rooms, it functions identically to other sign types while offering a cleaner look. It supports multi-line text on both sides and can be edit-locked with honeycomb to protect your messages."
    },
    "minecraft:jungle_sign": {
        id: "minecraft:jungle_sign",
        name: "Jungle Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Providing information in tropical environments",
            secondaryUse: "Decorative labels for reddish wood builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Jungle Planks x6", "Stick"]
        },
        specialNotes: [
            "Features a distinctive reddish-tan color profile",
            "Matches the unique look of jungle foliage and wood",
            "Supports four lines of independent text on both sides",
            "Text can be glowing or dyed any of the 16 available colors",
            "Interacts with all sign-specific mechanics and interactions"
        ],
        description: "The Jungle Sign is a medium-toned informational item made from jungle wood planks. Its warm, reddish-brown hue is specifically designed to complement the jungle biome's aesthetic, fitting perfectly into treehouses and tropical outposts. Beyond its decorative value, it serves as a practical tool for navigation and organization. In Bedrock Edition, it features the ability to hold text on both sides and can be preserved from further changes using honeycomb."
    },
    "minecraft:pale_oak_hanging_sign": {
        id: "minecraft:pale_oak_hanging_sign",
        name: "Pale Oak Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative signage that hangs from blocks",
            secondaryUse: "Detailed building and labeling"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stripped Pale Oak Log x6", "Chain x2"]
        },
        specialNotes: [
            "Features two chains that can hang from the bottom or side of blocks",
            "More expensive to craft than standard signs, requiring chains and logs",
            "Text can be applied to both sides and customized with dyes or glow ink",
            "Provides a more rustic and detailed look for signage",
            "Matches the unique white-gray color of the Pale Garden set"
        ],
        description: "The Pale Oak Hanging Sign is a premium signage variant introduced in the 1.21.50 update. Crafted with chains and stripped pale oak logs, it offers a distinct aesthetic compared to floor-standing signs. It hangs beautifully from fences, walls, or the bottom of blocks, making it ideal for shop signs or artistic labels. Its pale, ghostly appearance makes it a perfect fit for the mysterious atmosphere of the Pale Garden."
    },
    "minecraft:cherry_hanging_sign": {
        id: "minecraft:cherry_hanging_sign",
        name: "Cherry Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for Cherry Grove themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Cherry Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Can be placed under blocks, on the side of blocks, or attached to other hanging signs.",
            "Text can be applied to both sides and can be dyed or made to glow.",
            "Matches the pink aesthetic of the Cherry Grove biome."
        ],
        description: "The Cherry Hanging Sign is a decorative item that allows players to display text in a stylish hanging format. Crafted from stripped cherry logs and chains, it features the vibrant pink color unique to the cherry wood set. Unlike standard signs, hanging signs have a smaller text area but can be placed in more versatile positions, such as dangling from the bottom of blocks or protruding from walls. They are perfect for adding detail to Cherry Grove settlements or creating elegant shop signs."
    },
    "minecraft:bamboo_hanging_sign": {
        id: "minecraft:bamboo_hanging_sign",
        name: "Bamboo Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for jungle or bamboo themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Bamboo Block", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Crafted from stripped bamboo blocks rather than traditional logs.",
            "Can hang from the bottom of blocks or be attached to fences and walls.",
            "Features the unique yellowish texture of the bamboo wood set."
        ],
        description: "The Bamboo Hanging Sign is a unique variant of the hanging sign crafted from bamboo. It provides a tropical aesthetic that fits perfectly with jungle environments or bamboo structures. Like other hanging signs, it can hold text on both sides and can be customized with dyes and glow ink. Its distinct yellow-green color and bamboo-pole texture make it a popular choice for players looking to create a more organic or rustic look for their signage systems."
    },
    "minecraft:mangrove_hanging_sign": {
        id: "minecraft:mangrove_hanging_sign",
        name: "Mangrove Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for swamp or dark-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Mangrove Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Features a deep reddish-brown color characteristic of mangrove wood.",
            "Can be placed on the side of blocks with a protruding bracket.",
            "Supports text on both its front and back faces."
        ],
        description: "The Mangrove Hanging Sign offers a bold, reddish-brown aesthetic for player signage. Crafted from stripped mangrove logs and chains, it is ideal for use in swamp biomes or as a high-contrast label in various builds. It functions identically to other hanging signs, allowing for four lines of text per side. Its rich color and unique bracket design when placed on walls make it a favored item for builders who prioritize a sophisticated and weathered look."
    },
    "minecraft:crimson_hanging_sign": {
        id: "minecraft:crimson_hanging_sign",
        name: "Crimson Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text in the Nether or on fire-resistant structures",
            secondaryUse: "Decorative signage for Nether-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Crimson Hyphae", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Completely fireproof, as it is made from Nether-native wood.",
            "Features a vibrant purple-red color with a unique hyphae texture.",
            "Does not burn if placed near lava or fire."
        ],
        description: "The Crimson Hanging Sign is a fire-resistant signage option native to the Nether's Crimson Forests. Because it is crafted from hyphae rather than Overworld wood, it will not burn, making it the perfect choice for labeling chest rooms or directions in the Nether. It features a striking purple-red hue and can be placed in various orientations. Like its Overworld counterparts, it supports multi-line text on both sides and remains a durable decorative piece in the most extreme environments."
    },
    "minecraft:warped_hanging_sign": {
        id: "minecraft:warped_hanging_sign",
        name: "Warped Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text in the Nether or on fire-resistant structures",
            secondaryUse: "Decorative signage for End or Nether themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Warped Hyphae", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Completely fireproof, as it is made from Nether-native wood.",
            "Features a unique teal-blue color characteristic of Warped Forests.",
            "Ideal for high-visibility signs in dark environments."
        ],
        description: "The Warped Hanging Sign is a teal-colored, fireproof sign found in the Warped Forests of the Nether. Being immune to fire, it is an essential tool for navigation in volcanic regions. Its bright teal color provides excellent visibility against darker blocks, and its texture is distinct from Overworld wood. It can be hung from the bottom or sides of blocks and supports text customization including dyes and glow effects, serving as both a functional and eerie decorative element."
    },
    "minecraft:zombie_head": {
        id: "minecraft:zombie_head",
        name: "Zombie Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Zombie detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Zombies killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Zombie is killed by a Charged Creeper's explosion",
            "Can be worn as a helmet or placed as a decorative block",
            "Reduces the detection range of Zombies by 50% when worn",
            "Compatible with note blocks to produce Zombie sounds",
            "Added as a trophy item for late-game combat challenges"
        ],
        description: "The Zombie Head is a rare decorative item representing the iconic undead mob. It is primarily obtained by manipulation of a Charged Creeper to kill a Zombie. When worn by a player, it serves a functional purpose by significantly masking the player's presence from other Zombies, reducing their detection range. Additionally, placing it on a note block allows players to create ambient mob sounds, making it a favorite for map-makers and decorators."
    },
    "minecraft:skeleton_skull": {
        id: "minecraft:skeleton_skull",
        name: "Skeleton Skull",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Skeleton detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Skeletons killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Skeleton is killed by a Charged Creeper's explosion",
            "Can be worn as a helmet (purely decorative protection)",
            "Reduces the detection range of Skeletons by 50% when worn",
            "Produces Skeleton bone sounds when placed on a note block",
            "Can be used to craft Skeleton-themed banner patterns"
        ],
        description: "The Skeleton Skull is a prized decorative item obtained through the rare encounter of a Charged Creeper killing a Skeleton. This stark white skull can be worn by players to partially camouflage themselves from Skeletons, making it easier to navigate areas populated by archers. In Bedrock Edition, it also has a creative interaction with note blocks, allowing for the generation of skeleton-specific sound effects for atmospheric builds."
    },
    "minecraft:creeper_head": {
        id: "minecraft:creeper_head",
        name: "Creeper Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Creeper detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Creeper is killed by another Charged Creeper's explosion",
            "Reduces the detection range of Creepers by 50% when worn",
            "Produces the iconic 'hiss' sound when placed on a note block",
            "Essential for crafting the Creeper Charge banner pattern",
            "A popular trophy item for surviving dangerous mob interactions"
        ],
        description: "The Creeper Head is one of the most recognizable trophies in Minecraft, obtained when a Charged Creeper kills one of its own kind. Beyond its use as a distinctive green helmet, it provides a tactical advantage by halving the distance at which Creepers notice the player. Builders often use it alongside note blocks to create suspenseful 'hissing' traps or ambient sounds in themed environments."
    },
    "minecraft:player_head": {
        id: "minecraft:player_head",
        name: "Player Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Purely decorative block and wearable item",
            secondaryUse: "Unique identity representation in builds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative inventory or Commands only in Bedrock"]
        },
        specialNotes: [
            "In Bedrock Edition, this item is generally only accessible via Creative Mode",
            "Does not display individual player skins in Bedrock like it does in Java",
            "Can be worn as a helmet but provides no armor value",
            "Takes on the appearance of the default 'Steve' skin",
            "Commonly used by creators for high-detail custom map decorations"
        ],
        description: "The Player Head in Minecraft Bedrock Edition is a decorative item that mimics the default player appearance. While it lacks the ability to display specific player skins found in the Java Edition, it remains a heavily utilized block for detailing and custom maps. It can be worn as a purely cosmetic piece or placed as a block to represent human presence in a build. In Survival mode, it remains one of the few unobtainable heads without experimental features or cheats."
    },
    "minecraft:camera": {
        id: "minecraft:camera",
        name: "Camera",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Capturing photographs of the world",
            secondaryUse: "Placing as a stationary photo-taking device"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Obtainable via commands or Creative inventory"]
        },
        specialNotes: [
            "Exclusively found in Bedrock and Education Editions.",
            "Creates a Photo item when used to take a picture.",
            "Can be placed on the ground and will track nearby players."
        ],
        description: "The Camera is a unique tool found in Minecraft Bedrock Edition, originally part of the Education Edition features. It allows players to capture still images of their surroundings, which are then saved as Photo items. When held, it can be used to take a snapshot, and when placed on the ground, it acts as a stationary camera that follows player movements. It is a fantastic tool for documenting adventures or creating in-game galleries."
    },
    "minecraft:portfolio": {
        id: "minecraft:portfolio",
        name: "Portfolio",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Storing and viewing photographs",
            secondaryUse: "Managing photo collections"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Obtainable via commands or Creative inventory"]
        },
        specialNotes: [
            "Acts as a digital photo album for the player.",
            "Can hold multiple Photos taken with the Camera.",
            "Bedrock and Education Edition exclusive item."
        ],
        description: "The Portfolio is a specialized item used to store and organize the photos captured with a Camera. It functions similarly to a book, allowing players to flip through their pictures and add captions. This makes it an essential companion for the Camera, providing a way to preserve and share memories of your Minecraft journey. It is only available when Education features are enabled or via the Creative inventory."
    },
    "minecraft:balloon": {
        id: "minecraft:balloon",
        name: "Balloon",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Attaching to mobs to make them float",
            secondaryUse: "Decoration when tied to fences"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Latex x6", "Lead x1", "Helium x1", "Dye x1"]
        },
        specialNotes: [
            "Can be attached to passive and neutral mobs.",
            "Goes up at a steady speed and can lift mobs into the sky.",
            "Requires Education Edition features to be enabled for crafting."
        ],
        description: "Balloons are fun, buoyant objects available in Minecraft Bedrock when Education features are active. They can be attached to most mobs, causing them to float upwards into the air, or tied to fence posts for colorful decorations. They come in 16 different colors based on the dye used in crafting. While they are mostly for fun, they can be popped by arrows or other projectiles, making for interesting mini-games."
    },
    "minecraft:latex": {
        id: "minecraft:latex",
        name: "Latex",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting fuel and material for Balloons",
            secondaryUse: "Chemistry component"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Carbon x5", "Hydrogen x8"]
        },
        specialNotes: [
            "Created using the formula C5H8 in the Compound Creator.",
            "Essential ingredient for crafting balloons of any color.",
            "Exclusive to the Education Edition features toggle.",
            "Cannot be used as fuel or food."
        ],
        description: "Latex is a complex chemical compound used primarily in the production of balloons. It is created by combining carbon and hydrogen atoms in a specific ratio within the Compound Creator. As one of the core chemistry items in Bedrock Edition's education features, it represents the intersection of science and crafting, allowing players to manufacture items that defy standard Minecraft physics, such as lifting mobs into the sky."
    },
    "minecraft:bleach": {
        id: "minecraft:bleach",
        name: "Bleach",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Removing dye from colored blocks and items",
            secondaryUse: "Chemistry component"
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Water x3", "Sodium Hypochlorite x3"]
        },
        specialNotes: [
            "Can reset the color of wool, carpets, beds, and banners to white.",
            "Created by combining Water and Sodium Hypochlorite in a Lab Table.",
            "Requires Education Edition features to be enabled.",
            "Provides a way to reclaim basic building materials from dyed versions."
        ],
        description: "Bleach is a powerful cleaning agent that can strip the color from various dyed items in Minecraft. When combined with colored wool, beds, or banners in a crafting grid, it restores them to their original white color. This item is particularly useful for builders who want to repurpose their materials or correct mis-colored decorations. It is manufactured using the Lab Table by balancing specific amounts of Water and Sodium Hypochlorite."
    },
    "minecraft:sparkler": {
        id: "minecraft:sparkler",
        name: "Sparkler",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Emitting colorful particles when held and activated",
            secondaryUse: "Decoration and celebration"
        },
        crafting: {
            recipeType: "Lab Table/Crafting Table",
            ingredients: ["Magnesium", "Stick", "Chloride (Calcium, Mercuric, Lithium, Potassium, or Tungsten)"]
        },
        specialNotes: [
            "Available in Blue, Red, Green, Purple, and Orange colors.",
            "Activated when used in the player's hand, continuously emitting particles.",
            "Does not emit actual light level, only visual particles.",
            "Gradually consumes durability while active until it burns out."
        ],
        description: "Sparklers are decorative items that create a beautiful, continuous stream of colored particles when held and used. They come in five distinct colors, each determined by the specific metal chloride used during crafting. While they don't provide functional lighting for exploration, they are perfect for celebrations, markers, or atmospheric effects in maps. They are a staple of the chemistry-based crafting available in Bedrock Edition's education mode."
    },
    "minecraft:glow_stick": {
        id: "minecraft:glow_stick",
        name: "Glow Stick",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Portable, hand-held light source",
            secondaryUse: "Underwater illumination"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Polyethylene x6", "Hydrogen Peroxide", "Luminol", "Dye"]
        },
        specialNotes: [
            "Emits a bright light level of 15 when activated.",
            "Must be 'shaken' (used) to start glowing.",
            "Works perfectly underwater, unlike torches.",
            "Eventually burns out and is removed from the inventory.",
            "Available in 16 different colors based on the dye used."
        ],
        description: "Glow Sticks are advanced portable light sources that provide high-intensity illumination while held in the player's hand. Unlike traditional torches, they are waterproof and can be used to light up the depths of the ocean. After being activated with a shake, they emit light for a limited time before eventually burning out. They are crafted through a multi-step chemistry process involving the creation of polyethylene and luminol."
    },
    "minecraft:medicine": {
        id: "minecraft:medicine",
        name: "Medicine",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing specific negative status effects",
            secondaryUse: "Advanced alchemy"
        },
        crafting: {
            recipeType: "Brewing Stand",
            ingredients: ["Awkward Potion", "Element (Silver, Bismuth, Calcium, or Cobalt)"]
        },
        specialNotes: [
            "Antidote cures Poison; Elixir cures Weakness; Eye Drops cure Blindness; Tonic cures Nausea.",
            "Brewed by adding specific elements to Awkward Potions.",
            "More targeted than milk, as it only removes the specific negative effect.",
            "Cannot be turned into splash or lingering versions."
        ],
        description: "Medicines are specialized remedial items that provide targeted cures for some of Minecraft's most common ailments. Unlike milk buckets, which remove all status effects, each medicine type focuses on a single debuff: Antidote for Poison, Elixir for Weakness, Eye Drops for Blindness, and Tonic for Nausea. These are brewed using the Brewing Stand by infusing Awkward Potions with pure chemical elements like Silver or Cobalt, representing the pinnacle of chemistry-based survival."
    },
    "minecraft:super_fertilizer": {
        id: "minecraft:super_fertilizer",
        name: "Super Fertilizer",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly growing plants and crops to maturity.",
            secondaryUse: "Generating flowers and tall grass on grass blocks."
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Ammonia + Phosphorus"]
        },
        specialNotes: [
            "Guaranteed 100% growth rate compared to standard Bone Meal.",
            "Increases the count of flowers produced when used on soil.",
            "One of the few functional chemistry items in Bedrock.",
            "Requires Education Edition features to be enabled."
        ],
        description: "Super Fertilizer is an enhanced version of bone meal available in Bedrock Edition's education mode. It is crafted on a Lab Table by combining Ammonia and Phosphorus. Unlike regular bone meal, which has a chance to fail or require multiple uses, Super Fertilizer instantly grows plants to their final stage and produces a larger amount of flowers and grass when used on ground. It represents a more efficient, chemistry-based approach to farming and horticulture."
    },
    "minecraft:compound_creator": {
        id: "minecraft:compound_creator",
        name: "Compound Creator",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Combining chemical elements into compounds.",
            secondaryUse: "Educational exploration of molecular chemistry."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Contains 36 input slots for elements.",
            "Allows creation of over 30 unique compounds.",
            "Includes a 'combination' animation during success.",
            "Vital for crafting Latex and other special materials."
        ],
        description: "The Compound Creator is one of the four chemistry workstations introduced in Education Edition. It allows players to combine various chemical elements into compounds, such as Salt, Latex, or Crude Oil. Players place elements in the grid, and if the proportions are correct, the resulting compound appears. It is the fundamental starting point for advanced chemistry-based crafting, enabling the creation of unique items like balloons and glow sticks."
    },
    "minecraft:element_constructor": {
        id: "minecraft:element_constructor",
        name: "Element Constructor",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Synthesizing chemical elements from subatomic particles.",
            secondaryUse: "Learning atomic numbers and structure."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Allows setting precise Protons, Neutrons, and Electrons.",
            "Can create all 118 known elements.",
            "Supports fictional isotopes like 'PWI' (if applicable) or high-numbered elements.",
            "The primary source for Silver, Gold, and Carbon elements."
        ],
        description: "The Element Constructor is a powerful workstation that allows players to build chemical elements from scratch. By adjusting the number of protons, neutrons, and electrons in its interface, players can create any of the 118 elements from the periodic table, as well as several fictional isotopes. This block serves as the source of all raw materials for Education Edition's chemistry system, turning atomic theory into a tangible gameplay mechanic."
    },
    "minecraft:lab_table": {
        id: "minecraft:lab_table",
        name: "Lab Table",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Executing complex chemical reactions to create special items.",
            secondaryUse: "Experimental crafting of alchemical products."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Used to create Ice Bombs, Bleach, and Heat Blocks.",
            "Requires clicking the 'Combine' button to activate.",
            "Failure results in a puff of smoke and loss of materials.",
            "Features a unique 'shaking' animation when working."
        ],
        description: "The Lab Table is a workstation used to combine compounds and elements into functional items through chemical reactions. Unlike the Compound Creator, which is for stable mixtures, the Lab Table is used for 'experimental' results like Bleach, Ice Bombs, and Super Fertilizer. It features a unique animation when used, where the player must 'combine' the materials, and occasionally an incorrect mixture can lead to a small puff of fire and smoke."
    },
    "minecraft:material_reducer": {
        id: "minecraft:material_reducer",
        name: "Material Reducer",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decomposing Minecraft blocks into their constituent elements.",
            secondaryUse: "Analyzing the chemical composition of game materials."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Deconstructs common blocks like Grass, Stone, and Wood.",
            "The output elements depend on the block's real-world properties.",
            "A non-destructive way to farm elements in peaceful experiments.",
            "Available only when Education features are toggled."
        ],
        description: "The Material Reducer is a chemistry workstation that breaks down standard Minecraft blocks into their constituent chemical elements. By placing a block like Grass, Stone, or Glass into the reducer, the machine decomposes it into a variety of elements such as Oxygen, Silicon, or Carbon. This provides a way to obtain elements without using the Element Constructor, allowing players to discover the chemical makeup of the Minecraft world."
    },
    "minecraft:sodium_acetate": {
        id: "minecraft:sodium_acetate",
        name: "Sodium Acetate",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Ice Bombs",
            secondaryUse: "Alchemy and chemistry experiments"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Carbon x2", "Hydrogen x3", "Sodium x1", "Oxygen x2"]
        },
        specialNotes: [
            "Chemical formula: C2H3NaO2",
            "Requires 2 Carbon, 3 Hydrogen, 1 Sodium, and 2 Oxygen in the Compound Creator.",
            "Used to create Ice Bombs by combining four units in a Lab Table.",
            "Only available when Education Edition features are enabled."
        ],
        description: "Sodium Acetate is a chemical compound used in Minecraft Bedrock's education mode primarily for the creation of Ice Bombs. It is synthesized in the Compound Creator by combining carbon, hydrogen, sodium, and oxygen atoms. When four units of Sodium Acetate are processed in a Lab Table, they result in an Ice Bomb, which can freeze water into ice upon impact. It represents one of the more complex chemical products players can manufacture for functional use."
    },
    "minecraft:sodium_hypochlorite": {
        id: "minecraft:sodium_hypochlorite",
        name: "Sodium Hypochlorite",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Bleach",
            secondaryUse: "Chemistry-based utility"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Sodium x1", "Chlorine x1", "Oxygen x1"]
        },
        specialNotes: [
            "Chemical formula: NaClO",
            "Synthesized using 1 Sodium, 1 Chlorine, and 1 Oxygen in the Compound Creator.",
            "Core ingredient for making Bleach when combined with Water in a Lab Table.",
            "Essential for chem-based cleaning and color restoration in Minecraft."
        ],
        description: "Sodium Hypochlorite is a powerful oxidizing compound used in the production of Bleach within Minecraft Bedrock's education features. Players can create it in the Compound Creator by balancing sodium, chlorine, and oxygen elements. When mixed with water at a Lab Table, it produces Bleach, a versatile tool for removing dyes from beds, banners, and wool. It serves as a key example of how chemistry can be applied to decorative and utility-based crafting."
    },
    "minecraft:magnesium_oxide": {
        id: "minecraft:magnesium_oxide",
        name: "Magnesium Oxide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Heat Blocks",
            secondaryUse: "Environmental heat management"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Magnesium x1", "Oxygen x1"]
        },
        specialNotes: [
            "Chemical formula: MgO",
            "Created by combining 1 Magnesium and 1 Oxygen in the Compound Creator.",
            "Used at the Lab Table to manufacture Heat Blocks.",
            "Helps create blocks that can melt nearby ice and snow without emitting light."
        ],
        description: "Magnesium Oxide is a basic chemical compound available in the chemistry system of Minecraft Bedrock. It is produced by combining magnesium and oxygen atoms in the Compound Creator. Its primary utility is as a component for crafting Heat Blocks, which are unique blocks capable of melting snow and ice in a wide radius. This makes Magnesium Oxide an important material for players looking to manage frozen environments using advanced chemical tools."
    },
    "minecraft:aluminum_oxide": {
        id: "minecraft:aluminum_oxide",
        name: "Aluminum Oxide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Hardened Glass",
            secondaryUse: "Industrial building reinforcement"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Aluminum x2", "Oxygen x3"]
        },
        specialNotes: [
            "Chemical formula: Al2O3",
            "Synthesized from 2 Aluminum and 3 Oxygen atoms in the Compound Creator.",
            "Used in a Crafting Table to produce Hardened Glass and Hardened Glass Panes.",
            "One of the two compounds required for industrial-strength transparent blocks."
        ],
        description: "Aluminum Oxide is a sturdy chemical compound used primarily in the manufacturing of Hardened Glass within Minecraft Bedrock's education mode. It is created in the Compound Creator using aluminum and oxygen. When combined with Boron Trioxide and regular glass in a Crafting Table, it produces a much more durable version of glass that has higher blast resistance. This compound highlights the industrial applications of chemistry in creating superior building materials."
    },
    "minecraft:boron_trioxide": {
        id: "minecraft:boron_trioxide",
        name: "Boron Trioxide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Hardened Glass",
            secondaryUse: "Industrial building reinforcement"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Boron x2", "Oxygen x3"]
        },
        specialNotes: [
            "Chemical formula: B2O3",
            "Created by combining 2 Boron and 3 Oxygen atoms in the Compound Creator.",
            "Vital component for crafting Hardened Glass in the Crafting Table.",
            "Works in conjunction with Aluminum Oxide to reinforce glass structures."
        ],
        description: "Boron Trioxide is a specialized chemical compound fundamental to the production of Hardened Glass in Minecraft Bedrock's education features. Produced in the Compound Creator from boron and oxygen, it serves as one of the reinforcing agents when applied to standard glass blocks. By layering Boron Trioxide and Aluminum Oxide with glass in a crafting grid, players can create transparent blocks that are significantly more resistant to explosions and breakage than their standard counterparts."
    }
};
