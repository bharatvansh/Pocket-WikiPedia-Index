// Pocket Wikipedia Foundation - Crafting Materials Data
// ============================================
// This file contains: Stick, bowl, paper, book, glass bottle,
// brick, nether brick, clay ball, honeycomb, wheat, sugar,
// cocoa beans, charcoal, coal, flint, glowstone dust, redstone dust,
// blaze powder, nether wart, fermented spider eye, glistering melon slice,
// eye of ender, golden carrot (crafting), rabbit foot, dragon breath,
// flow pottery sherd, guster pottery sherd, heart_of_the_sea, nether_star,
// amethyst shard, gunpowder, popped chorus fruit
// ============================================

/**
 * Crafting material items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const craftingMaterials = {
    "minecraft:popped_chorus_fruit": {
        id: "minecraft:popped_chorus_fruit",
        name: "Popped Chorus Fruit",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Purpur Blocks",
            secondaryUse: "Crafting End Rods"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Chorus Fruit", "Fuel"]
        },
        specialNotes: [
            "Obtained by smelting Chorus Fruit in a furnace or smoker",
            "Cannot be eaten, unlike raw Chorus Fruit",
            "Used to craft Purpur blocks in a 2x2 grid",
            "Combined with a Blaze Rod to create End Rods",
            "Essential for creating End-themed architecture"
        ],
        description: "Popped Chorus Fruit is a crafting material produced by smelting Chorus Fruit in a furnace, smoker, or campfire. While the popping process removes its edible properties and teleportation abilities, it transforms the fruit into a hard, durable material essential for creating End-themed architecture. Four pieces of popped chorus fruit can be crafted into Purpur Blocks, and it is also a key component in manufacturing End Rods. This makes it a vital resource for players looking to incorporate the sleek, purple aesthetic of End Cities into their own builds."
    },
    "minecraft:rabbit_foot": {
        id: "minecraft:rabbit_foot",
        name: "Rabbit's Foot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Potion of Leaping (Jump Boost)",
            secondaryUse: "Trading with Cleric villagers and crafting ingredient"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Dropped by rabbits", "Brewed in a brewing stand with Awkward Potion"]
        },
        specialNotes: [
            "10.5% drop chance from rabbits (boosted by Looting); also cat gifts",
            "Brewing: Awkward Potion + Rabbit's Foot = Potion of Leaping (Jump Boost)",
            "Jump Boost increases jump height and reduces fall damage",
            "Sold to Cleric villagers for emeralds (4 per emerald in Bedrock)",
            "Renewable via rabbit farming and cat gifts"
        ],
        description: "A Rabbit's Foot is a brewing ingredient dropped by rabbits (10.5% chance, increased by Looting) or gifted by tamed cats. Its primary use is in a brewing stand with an Awkward Potion to create a Potion of Leaping, which grants the Jump Boost effect, increasing jump height and reducing fall damage. Additionally, Cleric villagers buy Rabbit's Feet in exchange for emeralds. This item is essential for players seeking enhanced mobility or those looking to trade surplus mob drops for currency."
    },
    "minecraft:fermented_spider_eye": {
        id: "minecraft:fermented_spider_eye",
        name: "Fermented Spider Eye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Corrupting potions and brewing Potion of Weakness",
            secondaryUse: "Creating negative effect potions for combat and PvP"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Spider Eye", "Brown Mushroom", "Sugar"]
        },
        specialNotes: [
            "Crafted shapelessly with 1 Spider Eye, 1 Brown Mushroom, and 1 Sugar",
            "Corrupts positive potions: Speed → Slowness, Night Vision → Invisibility, Healing → Harming",
            "Corrupts negative potions: Poison → Harming",
            "Can be added directly to a Water Bottle to brew Potion of Weakness",
            "Potion of Weakness is required to cure Zombie Villagers with a Golden Apple",
            "Essential for both negative combat potions and villager curing mechanics"
        ],
        description: "A Fermented Spider Eye is a versatile brewing ingredient used to corrupt existing potions into their negative counterparts and brew the essential Potion of Weakness. It is crafted shapelessly by combining a spider eye, brown mushroom, and sugar. When added to potions, it reverses their effects: Speed becomes Slowness, Night Vision becomes Invisibility, Healing becomes Harming, and Poison becomes Harming. The Potion of Weakness it creates is vital for curing Zombie Villagers back into normal villagers using a Golden Apple, making it indispensable for village restoration and villager trading."
    },
    "minecraft:flow_pottery_sherd": {
        id: "minecraft:flow_pottery_sherd",
        name: "Flow Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Flow motif",
            secondaryUse: "Collecting and mixing pottery designs for custom archaeological-style builds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots that generate in Trial Chambers"]
        },
        specialNotes: [
            "Breaking a Decorated Pot drops the exact bricks and pottery sherds used to craft it",
            "Used as one of the four side ingredients when crafting a Decorated Pot; the chosen sherd determines the pattern on that side",
            "Decorated Pots featuring the Flow design naturally generate in Trial Chambers",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "The Flow Pottery Sherd is an archaeology-themed crafting item that can be used to decorate a Decorated Pot with a swirling loop design reminiscent of a wind charge. In Minecraft Bedrock Edition, it is found in Trial Chambers by breaking naturally generated Decorated Pots that use the Flow sherd in their recipe. When placed into the Decorated Pot crafting recipe, it determines the pattern displayed on one side of the finished pot, letting builders create customized pottery by mixing different sherd designs."
    },
    "minecraft:guster_pottery_sherd": {
        id: "minecraft:guster_pottery_sherd",
        name: "Guster Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Guster motif",
            secondaryUse: "Collecting Trial Chamber-themed pottery designs featuring the Breeze"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots that generate in Trial Chambers"]
        },
        specialNotes: [
            "Breaking a Decorated Pot drops the exact bricks and pottery sherds used to craft it",
            "Used as one of the four side ingredients when crafting a Decorated Pot; the chosen sherd determines the pattern on that side",
            "Decorated Pots featuring the Guster design naturally generate in Trial Chambers",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "The Guster Pottery Sherd is a pottery decoration ingredient that depicts a Breeze and can be incorporated into a Decorated Pot to apply its pattern to one side. In Minecraft Bedrock Edition, players can obtain it in Trial Chambers by breaking naturally generated Decorated Pots that were crafted with the Guster sherd. By combining it with bricks or other pottery sherds in the Decorated Pot recipe, builders can create unique, story-like pottery designs that match the wind-themed Trial Chamber aesthetic."
    },
    "minecraft:heart_of_the_sea": {
        id: "minecraft:heart_of_the_sea",
        name: "Heart of the Sea",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Conduits for underwater exploration",
            secondaryUse: "Essential component for underwater base projects"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in buried treasure chests"]
        },
        specialNotes: [
            "Found exclusively in buried treasure chests (via maps)",
            "Crafts Conduits: 8 Nautilus Shells + 1 Heart of the Sea",
            "Conduits grant Water Breathing, Night Vision, and Haste underwater",
            "Rare, uncraftable item essential for underwater bases",
            "Standard item behavior (no glint or particles)"
        ],
        description: "The Heart of the Sea is a rare item found exclusively in buried treasure chests, located using maps from shipwrecks or ocean ruins. Its primary use is crafting a Conduit when combined with eight Nautilus Shells. When placed within a prismarine structure, the resulting Conduit provides the Conduit Power effect, granting players water breathing, night vision, and increased mining speed in a surrounding radius. This item is essential for large-scale underwater exploration and construction, allowing players to work deep beneath the waves without needing to surface for air.",
        rarityColor: "§e"
    },
    "minecraft:nether_star": {
        id: "minecraft:nether_star",
        name: "Nether Star",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Beacons",
            secondaryUse: "Trophy item for defeating the Wither"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by the Wither boss"]
        },
        specialNotes: [
            "Guaranteed drop from the Wither boss; uncraftable otherwise",
            "Exclusively used to craft Beacons for area-wide buffs",
            "Features enchantment glint but no particles",
            "Immune to explosion damage",
            "Represents a major endgame milestone",
            "Can be displayed in item frames as a trophy"
        ],
        description: "The Nether Star is a rare item dropped exclusively by the Wither upon its defeat. It is the primary component used to craft Beacons, which grant powerful status effects like Haste, Speed, and Strength to nearby players when activated on a mineral pyramid. To obtain a star, players must summon the Wither using four soul sand or soul soil blocks and three wither skeleton skulls. The star features a unique purple glow and, notably, cannot be destroyed by explosions. It serves as a major endgame milestone, providing permanent area-of-effect buffs essential for large-scale projects.",
        themeColor: "§b (Aqua/Rare)"
    },
    "minecraft:amethyst_shard": {
        id: "minecraft:amethyst_shard",
        name: "Amethyst Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Spyglass, Tinted Glass, and Calibrated Sculk Sensor",
            secondaryUse: "Creating Block of Amethyst and crafting decorative amethyst blocks"
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Budding Amethyst in Amethyst Geodes", "Found in Ancient City and Trial Chamber chests"]
        },
        specialNotes: [
            "Mined from Amethyst Clusters on Budding Amethyst (4 shards; up to 16 with Fortune)",
            "Found in Ancient City (1-15) and Trial Chamber (8-20) chests",
            "Crafts Block of Amethyst (9 shards), Spyglass, Tinted Glass, Calibrated Sculk Sensor",
            "Budding Amethyst is immovable and the only natural source",
            "Renewable but slow-growing resource"
        ],
        description: "Amethyst Shards are crystalline materials harvested from Amethyst Clusters found in underground Geodes. When mined with a pickaxe, a cluster drops 4 shards, increasing up to 16 with Fortune. They are renewable, as clusters regrow on immovable Budding Amethyst blocks. Shards can also be found in loot chests within Ancient Cities and Trial Chambers. Essential for crafting, they are used to create Spyglasses, Tinted Glass, Calibrated Sculk Sensors, and decorative Amethyst Blocks. Their vibrant purple color offers both functional utility and aesthetic appeal."
    },
    "minecraft:disc_fragment_5": {
        id: "minecraft:disc_fragment_5",
        name: "Disc Fragment 5",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Music Disc 5",
            secondaryUse: "None"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City chests"]
        },
        specialNotes: [
            "Found exclusively in Ancient City chests (29.8% chance)",
            "Combine 9 fragments in a crafting table to create Music Disc 5",
            "The only way to obtain Music Disc 5 in survival mode",
            "Added in the Wild Update (1.19)"
        ],
        description: "Disc Fragment 5 is a rare crafting material found exclusively in the chests of Ancient Cities within the Deep Dark biome. It appears as a shard of a broken record. Its sole purpose is to be crafted into Music Disc 5. To do this, a player must collect nine fragments and arrange them in a 3x3 grid in a crafting table. This makes Music Disc 5 the only music disc in the game that must be crafted rather than found whole or obtained as a mob drop."
    },
    "minecraft:glistering_melon_slice": {
        id: "minecraft:glistering_melon_slice",
        name: "Glistering Melon Slice",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Potion of Healing",
            secondaryUse: "Trading with Master-level Cleric villagers"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["8x Gold Nugget", "Melon Slice"]
        },
        specialNotes: [
            "Crafted by surrounding a melon slice with 8 gold nuggets",
            "Inedible, unlike regular melon slices",
            "Key ingredient for Potions of Healing (Awkward Potion + Glistering Melon Slice)",
            "Master-level Cleric villagers in Bedrock have a chance to buy 3 for an emerald",
            "Cannot be found naturally in loot chests; must be crafted or traded"
        ],
        description: "A Glistering Melon Slice is an essential brewing ingredient used to create Potions of Healing. Despite being made from a melon slice, it is completely inedible and serves only for alchemy and trading. It is crafted by combining a single melon slice with eight gold nuggets. When brewed with an Awkward Potion, it creates a Potion of Healing, which instantly restores health. This makes glistering melons a vital resource for players preparing for difficult battles or exploring dangerous environments."
    },
    "minecraft:gunpowder": {
        id: "minecraft:gunpowder",
        name: "Gunpowder",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting TNT and Firework Rockets",
            secondaryUse: "Creating Splash Potions"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers, Ghasts, and Witches", "Can also be obtained from chests in various structures"]
        },
        specialNotes: [
            "Creepers drop 0-2 gunpowder (increased by Looting)",
            "Ghasts drop 0-2 gunpowder upon death",
            "Witches drop 0-6 items including gunpowder (increased by Looting)",
            "Crafts TNT (4x Sand/Red Sand + 5x Gunpowder) and Firework Rockets (Paper + 1-3 Gunpowder)",
            "Required for Splash Potions (Gunpowder + regular potion)",
            "Found in Dungeon, Desert Temple, Shipwreck, and Woodland Mansion chests",
            "Essential for explosive mining, combat, and aerial travel"
        ],
        description: "Gunpowder is a versatile explosive material dropped by Creepers, Ghasts, and Witches. It's used to craft TNT for demolition, Firework Rockets for Elytra flight or celebrations, and Splash Potions for ranged effects. TNT needs five gunpowder and four sand, while Firework Rockets require paper and one to three gunpowder. Essential for mining, combat, and aerial travel, gunpowder is indispensable in survival."
    },
    "minecraft:honeycomb": {
        id: "minecraft:honeycomb",
        name: "Honeycomb",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Beehives, Candles, and Waxed Copper",
            secondaryUse: "Waxing Copper blocks and Signs to prevent oxidation/editing"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Harvested from Bee Nests or Beehives using Shears"]
        },
        specialNotes: [
            "Obtained by using Shears on a Bee Nest or Beehive with honey level 5.",
            "Used to craft Beehives (3 Honeycombs + 6 Planks).",
            "Used to craft Candles (Honeycomb + String).",
            "Used to wax Copper blocks to stop them from oxidizing.",
            "Used to wax Signs to prevent text editing."
        ],
        description: "Honeycomb is a crafting material obtained by shearing a bee nest or beehive that is dripping with honey (level 5). It is used for several crafting recipes, including artificial Beehives and Candles. Additionally, honeycomb serves a unique preservation purpose: it can be used on copper blocks to wax them, freezing their oxidation state, or on signs to wax them, preventing any further text editing. It is a renewable resource as long as bees continue to pollinate."
    },
    "minecraft:ender_eye": {
        id: "minecraft:ender_eye",
        name: "Eye of Ender",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Locating Strongholds and activating End Portals",
            secondaryUse: "Crafting Ender Chests and End Crystals"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Ender Pearl", "Blaze Powder"]
        },
        specialNotes: [
            "Used to find Strongholds by throwing them; they float towards the nearest portal",
            "Has a 20% chance to shatter after being thrown",
            "12 eyes are required to activate a complete End Portal frame",
            "Essential for crafting Ender Chests (8 Obsidian + 1 Eye of Ender)",
            "Required for crafting End Crystals (7 Glass + 1 Ghast Tear + 1 Eye of Ender)"
        ],
        description: "The Eye of Ender is a vital item for progression, serving as the key to reaching the End dimension. It is crafted by combining an Ender Pearl with Blaze Powder. When used, it flies into the air towards the nearest Stronghold, helping players locate the elusive structure. Once inside, players must place these eyes into the End Portal frames to activate the gateway to the Ender Dragon. Beyond navigation, it is a critical component for late-game storage in the form of Ender Chests."
    },
    "minecraft:blaze_powder": {
        id: "minecraft:blaze_powder",
        name: "Blaze Powder",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Fuel for Brewing Stands",
            secondaryUse: "Crafting Eye of Ender, Magma Cream, and Fire Charges"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Blaze Rod"]
        },
        specialNotes: [
            "Obtained by crafting a Blaze Rod, which yields 2 Blaze Powder",
            "Mandatory fuel for Brewing Stands; one powder provides 20 units of fuel",
            "Combined with a Slimeball to create Magma Cream",
            "Used with Ender Pearls to create Eyes of Ender",
            "Component in crafting Fire Charges (Blaze Powder + Gunpowder + Coal/Charcoal)"
        ],
        description: "Blaze Powder is a versatile material derived from Blaze Rods, serving as the fundamental energy source for all alchemical processes. It is required as fuel for Brewing Stands, without which no potions can be brewed. Additionally, it is a key ingredient in crafting several important items, most notably the Eye of Ender. Its role in both alchemy and world progression makes it one of the most important resources obtained from the Nether."
    },
    "minecraft:lapis_lazuli": {
        id: "minecraft:lapis_lazuli",
        name: "Lapis Lazuli",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Powering Enchantment Tables and applying enchantments",
            secondaryUse: "Crafting blue dye and decorative blocks"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Lapis Lazuli Ore or Deepslate Lapis Lazuli Ore", "Fuel"]
        },
        specialNotes: [
            "Mined from Lapis Lazuli Ore at Y levels 64 to -64; most common at Y=0",
            "Required as payment for every enchantment at the Enchantment Table (1-3 lapis per level)",
            "Used as blue dye in crafting and decorating",
            "9 lapis can be crafted into 1 Block of Lapis Lazuli",
            "Found in mineshaft, village, and shipwreck chests",
            "Used to craft cyan dye when combined with green dye",
            "Can be obtained from suspicious gravel and suspicious sand in trail ruins"
        ],
        description: "Lapis Lazuli is a deep blue mineral primarily used to power the enchanting system. Unlike other materials, lapis is consumed each time a player uses an Enchantment Table, with costs scaling based on enchantment level. Mined from lapis ore found at various depths underground, it serves a dual purpose as blue dye for coloring wool, banners, and concrete. Beyond its essential role in magical enhancement, lapis can be crafted into blocks for storage and decoration, making it both a functional and aesthetic resource."
    },
    "minecraft:paper": {
        id: "minecraft:paper",
        name: "Paper",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting books and maps",
            secondaryUse: "Crafting firework rockets and banner patterns"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Sugar Cane x3"]
        },
        specialNotes: [
            "Crafted by placing three sugar canes in a horizontal row",
            "Used with leather to craft books for enchanting and librarians",
            "Combined with a compass to create empty maps or used in cartography tables",
            "Essential for creating firework rockets for Elytra flight or celebrations",
            "Used to craft various banner patterns for decoration",
            "Novice-level Librarian villagers buy 24 paper for one emerald in Bedrock"
        ],
        description: "Paper is a fundamental crafting ingredient made from sugar cane. Its most important application is the creation of books, which are vital for enchanting and storage. It is also the primary component for maps, allowing players to document and navigate their worlds. Advanced uses include crafting firework rockets for celebrations or Elytra flight, and creating intricate banner patterns. Because it is a key trade item for Librarian villagers, paper is often farmed at scale using large sugar cane plantations."
    },
    "minecraft:wheat": {
        id: "minecraft:wheat",
        name: "Wheat",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting food like bread and cake",
            secondaryUse: "Breeding cows, sheep, and mooshrooms"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Harvested from fully grown wheat crops"]
        },
        specialNotes: [
            "Grown from wheat seeds on hydrated farmland blocks",
            "Used to craft bread (3x wheat), cookies, and cake in a crafting table",
            "Essential for breeding and leading cows, sheep, mooshrooms, and goats",
            "Can be crafted into Hay Bales for compact storage or as horse food",
            "Used to heal, breed, and accelerate the growth of llamas",
            "Novice-level Farmer villagers buy 20 wheat for an emerald in Bedrock"
        ],
        description: "Wheat is a staple agricultural crop in Minecraft, grown from seeds on tilled farmland. Once fully matured, it can be harvested to yield both wheat and more seeds. Its primary use is in the production of food; three pieces of wheat craft a loaf of bread, and it is a key ingredient for cakes and cookies. Beyond nutrition, wheat is the essential tool for animal husbandry, used to lead, breed, and accelerate the growth of cows, sheep, and goats. It can also be compacted into hay bales for compact storage or as a decorative and functional block."
    },
    "minecraft:sugar": {
        id: "minecraft:sugar",
        name: "Sugar",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting food and brewing potions",
            secondaryUse: "Feeding horses and donkeys"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Sugar Cane", "Honey Bottle"]
        },
        specialNotes: [
            "Crafted from one sugar cane (yields 1) or one honey bottle (yields 3)",
            "Key ingredient for Cake, Pumpkin Pie, and Cookies",
            "Primary ingredient for brewing Potions of Swiftness (Speed)",
            "Essential for crafting Fermented Spider Eyes for negative potion effects",
            "Can be fed to horses or donkeys to speed up growth and increase taming chance",
            "Heals horses by 1 heart and increases their temperament by 3%"
        ],
        description: "Sugar is a versatile food and brewing ingredient derived from sugar cane or honey bottles. While not edible on its own, it is a critical component in several high-value food recipes, including cakes, pumpkin pies, and cookies. In alchemy, sugar is the base ingredient for Potions of Swiftness, which grant players increased movement speed. It is also required to craft Fermented Spider Eyes, which are used to create negative potion effects. Additionally, sugar can be fed to horses to slightly heal them and improve their temperament during taming."
    },
    "minecraft:coal": {
        id: "minecraft:coal",
        name: "Coal",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Fuel for smelting in furnaces and campfires",
            secondaryUse: "Crafting torches, coal blocks, and fire-related items"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Coal Ore", "Deepslate Coal Ore", "Coal Block (yields 9)"]
        },
        specialNotes: [
            "Burns for 80 seconds in a furnace, smelting up to 8 items per piece",
            "Can be crafted into a Coal Block (9 coal) for efficient storage and longer burn time",
            "Essential for crafting torches (1 coal + 1 stick = 4 torches)",
            "Used to craft campfires, soul torches, and Fire Charges",
            "Dropped by Wither Skeletons in the Nether (rare drop)",
            "Found in various loot chests throughout the world",
            "Renewable through villager trading and Wither Skeleton farming"
        ],
        description: "Coal is one of the most fundamental fuel sources in Minecraft, obtained by mining coal ore with any pickaxe or from Wither Skeleton drops. Each piece burns for 80 seconds in a furnace, smelting up to 8 items, making it an efficient early-game fuel. Beyond smelting, coal is essential for crafting torches, which provide light and prevent hostile mob spawning. It can be compacted into coal blocks for more efficient storage and extended burn times. Coal is also used in crafting campfires for cooking and ambiance, as well as fire charges for remote ignition."
    },
    "minecraft:brick": {
        id: "minecraft:brick",
        name: "Brick",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting brick blocks for building",
            secondaryUse: "Crafting flower pots and decorated pots"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Clay Ball", "Fuel"]
        },
        specialNotes: [
            "Obtained by smelting clay balls in a furnace",
            "Four bricks craft into one brick block for building",
            "Used to craft flower pots (3 bricks in a V-shape)",
            "Essential component for decorated pots in archaeology-themed builds",
            "Renewable resource through villager trading with Mason villagers",
            "Mason villagers sell 10 bricks for 1 emerald"
        ],
        description: "Bricks are building materials created by smelting clay balls in a furnace. Once fired, four bricks can be combined to form a brick block, which is prized for its warm, rustic appearance in construction projects. Beyond building, bricks are used to craft flower pots, allowing players to display plants indoors or in gardens. They are also a key ingredient in creating decorated pots, which add archaeological and artistic flair to builds. Bricks became a renewable resource after version 1.14, as mason villagers now trade them for emeralds."
    },
    "minecraft:clay_ball": {
        id: "minecraft:clay_ball",
        name: "Clay Ball",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into bricks for construction",
            secondaryUse: "Crafting clay blocks and trading with villagers"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Clay Block (yields 4 clay balls)"]
        },
        specialNotes: [
            "Obtained by breaking clay blocks found underwater in rivers, swamps, and lush caves",
            "Each clay block drops 4 clay balls when broken",
            "Smelts into a brick, which is used for building and decorative purposes",
            "Four clay balls can be crafted back into a clay block",
            "Renewable through mud and dripstone mechanics: mud above pointed dripstone converts to clay",
            "Mason villagers buy 10 clay balls for 1 emerald",
            "Gifted by villagers to players with the Hero of the Village effect"
        ],
        description: "Clay Balls are raw ceramic materials harvested from clay blocks found in rivers, swamps, and lush caves. Each clay block yields four clay balls when mined. Their primary use is being smelted into bricks, which are then crafted into decorative brick blocks for construction. Clay balls can also be recombined into clay blocks for storage or building. Since version 1.19, they became fully renewable through the mud and pointed dripstone mechanic, where mud placed above dripstone slowly converts into clay, providing an infinite source for builders and craftsmen."
    }
};
