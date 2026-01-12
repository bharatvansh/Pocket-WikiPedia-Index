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
    "minecraft:stick": {
        id: "minecraft:stick",
        name: "Stick",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting tools, weapons, and various items",
            secondaryUse: "Fuel source for furnaces (burns for 5 seconds)"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["2x Planks (any wood type)"]
        },
        specialNotes: [
            "Crafted from 2 wooden planks in a vertical arrangement",
            "Essential component for crafting tools, weapons, torches, and many other items",
            "Can be used as fuel in furnaces, smelting 0.5 items per stick",
            "Drops from dead bushes, leaves (decaying or broken without shears), can be crafted from bamboo, or obtained from fishing",
            "Villagers may trade sticks for emeralds",
            "Used in crafting fences, signs, ladders, and many other utility items"
        ],
        description: "Sticks are fundamental crafting components in Minecraft, created by placing two wooden planks vertically in a crafting grid. They serve as the basic building block for tools, weapons, and numerous utility items. Sticks are used in crafting everything from wooden pickaxes and swords to torches, ladders, fences, and signs. Beyond crafting, sticks can also function as a fuel source in furnaces, though their short burn time makes them less efficient than other fuels. Their versatility and importance in early-game progression make sticks one of the most commonly used items in the game."
    },
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
    "minecraft:nether_wart": {
        id: "minecraft:nether_wart",
        name: "Nether Wart",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Awkward Potions (base for all potions)",
            secondaryUse: "Decorative farming in Nether Fortresses"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Harvested from Nether Wart in Soul Sand farms"]
        },
        specialNotes: [
            "Primary brewing ingredient for Awkward Potions",
            "Found in Nether Fortress staircases growing on Soul Sand",
            "Must be planted on Soul Sand to grow through 3 stages",
            "Broken at any growth stage, but fully matured yields 2-4 warts",
            "Can be crafted into Red Nether Brick blocks",
            "Essential for potion brewing (except Weakness)",
            "Renewable through Nether Fortress farming"
        ],
        description: "Nether Wart is a fundamental brewing material found exclusively in Nether Fortresses, growing on patches of Soul Sand. It is the primary ingredient for brewing Awkward Potions, which serve as the base for nearly all other potions. Players must travel to a Nether Fortress to find the wart, harvest it, and plant their own farm in the Nether. The wart grows through three stages over roughly 34 minutes, yielding 2-4 pieces when fully matured. Beyond brewing, Nether Wart can be crafted into Red Nether Brick blocks for decorative building, making it a valuable resource for both alchemists and builders exploring the Nether."
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
    "minecraft:snort_pottery_sherd": {
        id: "minecraft:snort_pottery_sherd",
        name: "Snort Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots",
            secondaryUse: "Decorative item found via archaeology"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Brushing Suspicious Sand in Warm Ocean Ruins"]
        },
        specialNotes: [
            "Obtained by using a brush on Suspicious Sand in Warm Ocean Ruins",
            "Features a pattern resembling a Sniffer's snout",
            "Four sherds (or bricks) can be combined to craft a Decorated Pot"
        ],
        description: "The Snort Pottery Sherd is a decorative item introduced in the Trails & Tales update, primarily obtained through the archaeology system. Players must locate and brush Suspicious Sand within Warm Ocean Ruins to find it. The sherd features a stylized image of a snout, representing the Sniffer mob. When used to craft a Decorated Pot, this pattern will appear on the side of the pot, allowing players to create unique, story-telling decorations for their builds."
    },
    "minecraft:sheaf_pottery_sherd": {
        id: "minecraft:sheaf_pottery_sherd",
        name: "Sheaf Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots",
            secondaryUse: "Decorative item found via archaeology"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Brushing Suspicious Sand in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Sand in Trail Ruins",
            "Features a pattern of a sheaf of wheat",
            "Can be combined with other sherds to create custom pot patterns"
        ],
        description: "The Sheaf Pottery Sherd is one of several pottery fragments found via archaeology in Trail Ruins. It is uncovered by carefully brushing Suspicious Sand blocks. The fragment depicts a sheaf of wheat, symbolizing agriculture and harvest. By combining it with three other sherds or bricks in a crafting table, players can create a Decorated Pot that showcases this agricultural motif on one or more of its sides, perfect for decorating farms or granaries."
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
    "minecraft:glass_bottle": {
        id: "minecraft:glass_bottle",
        name: "Glass Bottle",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing potions and storing liquids",
            secondaryUse: "Collecting honey from beehives"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["3x Glass"]
        },
        specialNotes: [
            "Crafted from 3 glass blocks arranged in a V shape",
            "Used to collect water for brewing potions",
            "Can be filled with honey from beehives by using the bottle on the hive",
            "Essential for creating all types of potions in brewing stands",
            "Empty bottles can be obtained from fishing and villager trading",
            "Used to collect Dragon's Breath"
        ],
        description: "Glass Bottles are essential containers used primarily for brewing potions in Minecraft. Crafted from three glass blocks arranged in a V shape, these bottles can be filled with water to create water bottles, which serve as the base for all potion recipes. They are also used to collect honey from beehives when used with shears. Glass bottles play a crucial role in alchemy, enabling players to create healing potions, strength potions, and various other magical concoctions that provide temporary buffs and effects for exploration and combat."
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
        description: "Lapis Lazuli is a deep blue mineral primarily used to power the enchanting system. Unlike other materials, lapis is consumed each time a player uses an Enchantment Table, with costs scaling based on enchantment level. Mined from lapis ore found at various depths underground, it serves as both a placeable wire for transmitting power and a crafting ingredient for numerous redstone components. When placed on blocks, it forms circuits that can transmit signals up to 15 blocks, powering mechanisms like pistons, doors, and dispensers. Redstone is also essential for crafting clocks, compasses, and advanced redstone devices, making it crucial for automation and complex builds."
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
    "minecraft:nether_brick": {
        id: "minecraft:nether_brick",
        name: "Nether Brick",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Nether Brick blocks and fences",
            secondaryUse: "Creating decorative Nether-themed architecture"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Netherrack", "Fuel"]
        },
        specialNotes: [
            "Obtained by smelting Netherrack in a furnace",
            "Used to craft Nether Brick blocks in a 2x2 grid",
            "Combined with Nether Bricks to craft Nether Brick Fences",
            "Essential for replicating the architecture of Nether Fortresses",
            "Renewable via infinite Netherrack in the Nether dimension",
            "Different from the Nether Brick block; this is the individual brick item"
        ],
        description: "Nether Brick is a crafting material produced by smelting Netherrack in a furnace. It serves as the fundamental building block for all Nether-themed brick structures, allowing players to craft Nether Brick blocks, fences, stairs, and slabs. These bricks are essential for constructing blast-resistant structures or recreating the dark, imposing aesthetic of Nether Fortresses. Because Netherrack is incredibly abundant in the Nether, Nether Bricks are a highly accessible and renewable building resource for ambitious architects."
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
    "minecraft:book": {
        id: "minecraft:book",
        name: "Book",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting bookshelves and enchanted books",
            secondaryUse: "Crafting Book and Quills"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["3x Paper", "1x Leather"]
        },
        specialNotes: [
            "Crafted from 3 paper and 1 leather in a crafting grid",
            "Used to create bookshelves which are essential for enchanting tables",
            "Can be enchanted using an Enchanting Table to create Enchanted Books",
            "Used in crafting lecterns for displaying books in villages",
            "Librarian villagers trade books for emeralds",
            "Must be crafted into a Book and Quill to be written in or signed"
        ],
        description: "Books are essential items in Minecraft used primarily for crafting bookshelves and enchanted books. Created by combining three paper with one leather, books enable players to maximize their enchanting table's potential by surrounding it with bookshelves. They also serve as the base ingredient for creating enchanted books through Enchanting Tables, allowing for targeted enchantment application. Beyond their magical uses, books must be crafted into a Book and Quill to be written in and signed, making them useful for storytelling, documentation, and creating lecterns for village decoration."
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
            "Mason villagers sell 16 bricks for 1 emerald"
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
    },
    "minecraft:flint": {
        id: "minecraft:flint",
        name: "Flint",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Flint and Steel for fire-making",
            secondaryUse: "Crafting arrows and fletching tables"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped from gravel blocks when mined"]
        },
        specialNotes: [
            "10% chance to drop when breaking gravel without Fortune enchantment",
            "100% drop rate with Fortune III enchantment on tools",
            "Used to craft Flint and Steel (flint + iron ingot)",
            "Essential ingredient for arrows (flint + stick + feather)",
            "Used to craft Fletching Tables (flint x2 + planks x4)",
            "Renewable resource via gravel farming or piglin bartering",
            "Commonly found in village fletcher chests and ruined portals"
        ],
        description: "Flint is a mineral resource obtained by mining gravel blocks with a 10% drop chance, increased to 100% with Fortune III. It is essential for creating Flint and Steel, the primary tool for igniting fires and activating Nether portals. Flint is also a critical component in crafting arrows, making it indispensable for ranged combat. Additionally, it is used to craft Fletching Tables. Players can farm flint reliably by mining gravel or through piglin bartering, ensuring a renewable supply for survival needs."
    },
    "minecraft:redstone": {
        id: "minecraft:redstone",
        name: "Redstone Dust",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Creating redstone circuits and mechanisms",
            secondaryUse: "Crafting redstone components, clocks, and compasses"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Mined from redstone ore", "Witch drops", "Trading"]
        },
        specialNotes: [
            "Obtained by mining redstone ore (drops 4-5 dust, up to 8 with Fortune III)",
            "Found at Y-levels -64 to 15, most abundant below Y=0",
            "Used to create redstone circuits by placing on blocks",
            "Crafts clocks, compasses, redstone torches, repeaters, and comparators",
            "Witches drop 0-2 redstone dust when killed",
            "Renewable via witch farming and trading with villagers",
            "Essential for all redstone contraptions and automation systems"
        ],
        description: "Redstone Dust is the fundamental material for all redstone contraptions and electrical systems in Minecraft. Mined from redstone ore found deep underground, it serves as both a placeable wire for transmitting power and a crafting ingredient for numerous redstone components. When placed on blocks, it forms circuits that can transmit signals up to 15 blocks, powering mechanisms like pistons, doors, and dispensers. Redstone is also essential for crafting clocks, compasses, and advanced redstone devices, making it crucial for automation and complex builds."
    },
    "minecraft:bone_meal": {
        id: "minecraft:bone_meal",
        name: "Bone Meal",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Fertilizing crops and accelerating plant growth",
            secondaryUse: "Dyeing items white and crafting recipes"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Bone = 3 Bone Meal", "1 Bone Block = 9 Bone Meal"]
        },
        specialNotes: [
            "Crafted from bones or bone blocks in any crafting grid",
            "Fertilizes most crops, saplings, and flowers instantly",
            "Creates tall grass, flowers, and sea grass on appropriate blocks",
            "Dyes wool, terracotta, and other items white",
            "Required for crafting white concrete powder",
            "Used in banner patterns and firework star recipes",
            "Compostable with 100% success rate in composter blocks"
        ],
        description: "Bone Meal is a versatile fertilizer and dye crafted from bones or bone blocks in Minecraft Bedrock Edition. As a fertilizer, it instantly grows most crops, accelerates sapling growth to trees, and generates flowers and tall grass on dirt and grass blocks. In underwater environments, it can create sea grass and coral when applied to appropriate blocks. Beyond agriculture, bone meal serves as the primary white dye, allowing players to color wool, terracotta, glass, and armor trims. It is also essential in numerous crafting recipes including white concrete powder, banner patterns, and firework stars. Bone meal provides 100% composting success, making it valuable for reducing waste and generating more bone meal."
    },
    "minecraft:torchflower_seeds": {
        id: "minecraft:torchflower_seeds",
        name: "Torchflower Seeds",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Planting to grow Torchflowers",
            secondaryUse: "Breeding Sniffers and chickens, and taming parrots"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Sniffers after they finish digging"]
        },
        specialNotes: [
            "Has a 50% chance to drop as 1 item when a Sniffer finishes digging",
            "Planted on farmland to create a torchflower crop that grows into a Torchflower",
            "Used to breed Sniffers and chickens",
            "Reduces remaining growth time of snifflets and chicks by 10% when fed",
            "In Bedrock Edition, feeding a Sniffer heals it by 2 health points",
            "Can be used to tame parrots",
            "Composting in a composter has a 30% chance to raise the level by 1"
        ],
        description: "Torchflower Seeds are ancient seeds that Sniffers can dig up, allowing players to grow Torchflowers in survival. Plant them on farmland to start a torchflower crop, or feed them to Sniffers and chickens to breed them; in Bedrock Edition they can also tame parrots. Each seed has a 30% composting chance and feeding them reduces the remaining growth time of snifflets and chicks by 10%."
    },
    "minecraft:pitcher_pod": {
        id: "minecraft:pitcher_pod",
        name: "Pitcher Pod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Planting to grow Pitcher Plants",
            secondaryUse: "Breeding chickens and taming parrots"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Sniffers after they finish digging"]
        },
        specialNotes: [
            "Has a chance to drop as 1 item when a Sniffer finishes digging",
            "Planted on farmland to grow into a two-block-tall Pitcher Plant",
            "Pitcher Plants can be crafted into cyan dye",
            "Used to breed chickens and reduce remaining chick growth time by 10%",
            "Can be used to tame parrots",
            "Composting in a composter has a 30% chance to raise the level by 1",
            "Introduced in the 1.20 Trails & Tales update"
        ],
        description: "A Pitcher Pod is an ancient plant item that Sniffers can dig up and drop, letting players grow Pitcher Plants. Plant it on farmland to produce a tall Pitcher Plant, which can be turned into cyan dye for building palettes and decoration. In Bedrock Edition, pitcher pods can also be fed to chickens to breed them and can tame parrots, making them both decorative and practical."
    },
    "minecraft:sugar_cane": {
        id: "minecraft:sugar_cane",
        name: "Sugar Cane",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Paper and Sugar",
            secondaryUse: "Planting on blocks adjacent to water to grow more sugar cane"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found naturally near water in most Overworld biomes"]
        },
        specialNotes: [
            "In Minecraft Bedrock Edition, sugar cane can be grown using Bone Meal",
            "Must be planted on a block adjacent to a water source or waterlogged block",
            "Can be planted on sand, dirt, grass, podzol, moss, and mud variants",
            "Naturally grows up to 3 blocks high over time",
            "Essential for producing Paper, which is used for Maps and Books",
            "Used to craft Sugar for food and brewing recipes"
        ],
        description: "Sugar cane is a vital plant and crafting material found naturally along the banks of water in the Overworld. In Minecraft Bedrock Edition, it is unique in that it can be instantly grown to its maximum height of three blocks using bone meal, provided it is planted adjacent to water on blocks like sand, dirt, or moss. It is primarily harvested to craft paper and sugar, both of which are essential for progressing through the game's alchemical and enchanting systems."
    },
    "minecraft:bamboo": {
        id: "minecraft:bamboo",
        name: "Bamboo",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sticks, Scaffolding, and Bamboo wood variants",
            secondaryUse: "Breeding Pandas and using as fuel in furnaces"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found naturally in Jungle biomes", "Obtained from fishing in Jungles"]
        },
        specialNotes: [
            "In Bedrock Edition, bamboo can be instantly grown with Bone Meal",
            "Fastest growing plant in Minecraft; can reach up to 12-16 blocks",
            "Smelts 0.25 items per bamboo piece when used as fuel",
            "Required to breed Pandas and can be used to speed up baby Panda growth",
            "Key component for crafting Scaffolding and Bamboo Planks (1.20+)",
            "Can be placed in Flower Pots for decoration"
        ],
        description: "Bamboo is a versatile and fast-growing plant primarily found in jungle biomes and their variants. In Bedrock Edition, it can be grown quickly with bone meal and harvested for a variety of uses, including crafting sticks, scaffolding, and even decorative bamboo-based wood blocks introduced in the Trails & Tales update. It also serves a biological purpose as the preferred food for pandas, which can be bred using bamboo, and can be used as a low-efficiency fuel source in furnaces."
    },
    "minecraft:angler_pottery_sherd": {
        id: "minecraft:angler_pottery_sherd",
        name: "Angler Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with an Angler motif",
            secondaryUse: "Decorative archaeological item"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Sand in Warm Ocean Ruins"]
        },
        specialNotes: [
            "One of 20 unique pottery sherds available in Minecraft",
            "Found exclusively by using a Brush on Suspicious Sand in Warm Ocean Ruins",
            "Used to craft a Decorated Pot with a fishing hook design on the side",
            "Breaking a Decorated Pot without Silk Touch returns the sherds used",
            "Adds a historical and decorative touch to player builds",
            "Introduced as part of the Archaeology system in 1.20"
        ],
        description: "The Angler Pottery Sherd is a specialized crafting item obtained through the archaeology system. In Bedrock Edition, it is found by carefully using a brush on suspicious sand blocks located within warm ocean ruins. When used in a 2x2 crafting recipe for a Decorated Pot, it applies a unique illustration of a fishing hook to one of the pot's sides. This allows players to create personalized decorative vessels that reflect their adventures and maritime explorations."
    },
    "minecraft:resin_brick": {
        id: "minecraft:resin_brick",
        name: "Resin Brick",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Resin Bricks blocks and Resin Walls",
            secondaryUse: "Decorative crafting component"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Resin Clump", "Any fuel"]
        },
        specialNotes: [
            "Obtained by smelting a Resin Clump in a furnace or blast furnace.",
            "Used to craft Resin Bricks (block) in a 2x2 crafting pattern.",
            "Can be combined with other materials to create various Resin-based decorative blocks.",
            "Introduced as part of the Pale Garden update (1.21.40 Bedrock)."
        ],
        description: "Resin Bricks are durable crafting materials obtained by hardening Resin Clumps through the smelting process. Found in the eerie Pale Garden biome, these bricks serve as the primary component for constructing Resin Bricks blocks and Resin Walls. Their distinctive orange-brown hue makes them an excellent choice for players looking to add unique color and texture to their builds. As a part of the Pale Garden's ecosystem, Resin Bricks represent the transformation of organic resin into a solid, reliable building material."
    },
    "minecraft:glowstone_dust": {
        id: "minecraft:glowstone_dust",
        name: "Glowstone Dust",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing ingredient to increase potion potency",
            secondaryUse: "Crafting Glowstone blocks and Firework Stars"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by mining Glowstone blocks", "Dropped by Witches", "Piglin Bartering"]
        },
        specialNotes: [
            "Mining Glowstone yields 2-4 dust (up to 4 with Fortune)",
            "Increases potion level (e.g., Strength I to Strength II)",
            "Essential for crafting Glowstone blocks (4x Glowstone Dust)",
            "Used to craft Firework Stars with various colors",
            "Can be obtained from Cleric villagers in exchange for emeralds"
        ],
        description: "Glowstone Dust is a luminous material primarily obtained by mining Glowstone blocks in the Nether. It is a cornerstone of advanced brewing, used to increase the potency of potions at the cost of reduced duration. Beyond alchemy, it can be recombined into Glowstone blocks for permanent lighting or used to craft Firework Stars for colorful displays. Its availability in the Nether makes it a vital resource for players looking to enhance their combat effectiveness or decorate their builds with bright, magical light."
    },
    "minecraft:bowl": {
        id: "minecraft:bowl",
        name: "Bowl",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Container for stews and soups",
            secondaryUse: "Obtaining suspicious stew from Brown Mooshrooms"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["3x Planks (any wood type)"]
        },
        specialNotes: [
            "Crafted from three planks in a V-shape (yields 4 bowls)",
            "Used to craft Mushroom Stew, Rabbit Stew, and Beetroot Soup",
            "Left behind in the inventory after consuming any stew or soup",
            "Can be used on a Brown Mooshroom (after feeding it a flower) to get Suspicious Stew",
            "Occasionally obtained through fishing as junk",
            "Can be used as fuel in a furnace (smelts 0.5 items)"
        ],
        description: "A Bowl is a simple yet essential container used primarily for holding various stews and soups in Minecraft. Crafted from three wooden planks, it serves as the vessel for Mushroom Stew, Rabbit Stew, and Beetroot Soup. Unlike many other food items, stews leave the empty bowl behind after consumption, allowing it to be reused indefinitely. Bowls also play a unique role in agriculture, as they can be used to milk Mooshrooms for stew or to collect Suspicious Stew from Brown Mooshrooms after feeding them specific flowers."
    },
    "minecraft:archer_pottery_sherd": {
        id: "minecraft:archer_pottery_sherd",
        name: "Archer Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with an Archer motif",
            secondaryUse: "Decorative archaeological item for displays"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Sand"]
        },
        specialNotes: [
            "Found by using a Brush on Suspicious Sand in Desert Temples and Desert Wells.",
            "Features a stylized image of an archer holding a bow.",
            "Used as a component in crafting Decorated Pots (requires four sherds/bricks).",
            "Stacks up to 64 in Bedrock Edition.",
            "Part of the archaeology system introduced in the Trails & Tales update."
        ],
        description: "The Archer Pottery Sherd is an archaeological item used in the creation of Decorated Pots. It features a stylized image of a figure with a bow and arrow, evoking themes of combat and hunting from Minecraft's ancient past. Players can discover this sherd by using a Brush on Suspicious Sand found within Desert Temples and Desert Wells. When four sherds (or a combination of sherds and bricks) are arranged in a square on a crafting table, they form a Decorated Pot that displays the archer motif on the corresponding side."
    },
    "minecraft:scrape_pottery_sherd": {
        id: "minecraft:scrape_pottery_sherd",
        name: "Scrape Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Scrape motif",
            secondaryUse: "Trial Chamber collectible depicting an axe pattern"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots in Trial Chambers"]
        },
        specialNotes: [
            "Exclusively found in Trial Chambers by breaking naturally generated Decorated Pots",
            "Features a stylized axe design on the sherd",
            "Used in crafting Decorated Pots to display the pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 Tricky Trials update",
            "Non-renewable resource tied to Trial Chamber generation"
        ],
        description: "The Scrape Pottery Sherd is an archaeology-themed item introduced in the Tricky Trials update. It depicts a stylized axe and can only be obtained in Bedrock Edition by breaking naturally generated Decorated Pots found within Trial Chambers. When used in the Decorated Pot crafting recipe with three other sherds or bricks, it applies the scrape design to one side of the pot. This makes it a prized collectible for builders creating Trial Chamber-themed builds or comprehensive pottery collections."
    },
    "minecraft:blade_pottery_sherd": {
        id: "minecraft:blade_pottery_sherd",
        name: "Blade Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Blade motif",
            secondaryUse: "Decorative archaeological item representing ancient weaponry"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Cold Ocean Ruins"]
        },
        specialNotes: [
            "Found exclusively by brushing Suspicious Gravel in Cold Ocean Ruins",
            "Features a stylized sword blade design",
            "Used to craft Decorated Pots with the blade pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system from the Trails & Tales update",
            "Can be combined with other sherds to create unique pottery designs"
        ],
        description: "The Blade Pottery Sherd is a decorative item obtained through underwater archaeology in Cold Ocean Ruins. Players must carefully brush Suspicious Gravel blocks to uncover this sherd, which displays a stylized sword blade pattern. In Bedrock Edition, it serves as a crafting component for Decorated Pots, allowing builders to create custom pottery with a warrior or combat theme. When four sherds or bricks are combined in a crafting recipe, the blade design appears on the corresponding side of the finished pot."
    },
    "minecraft:heartbreak_pottery_sherd": {
        id: "minecraft:heartbreak_pottery_sherd",
        name: "Heartbreak Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Heartbreak motif",
            secondaryUse: "Collecting rare archaeological artifacts from Trail Ruins"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Gravel in Trail Ruins structures",
            "Features a broken heart design symbolizing loss or sorrow",
            "Rare suspicious gravel drop with 8.3% generation chance",
            "Used in crafting Decorated Pots to display the pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Heartbreak Pottery Sherd is a rare archaeological discovery found in Trail Ruins by brushing Suspicious Gravel. It depicts a broken heart, evoking themes of ancient stories and loss. In Bedrock Edition, this sherd is particularly sought-after due to its lower generation rate compared to common pottery sherds. When crafted into a Decorated Pot, it displays the heartbreak motif on one side, making it perfect for storytelling builds or emotional themed decorations."
    },
    "minecraft:burn_pottery_sherd": {
        id: "minecraft:burn_pottery_sherd",
        name: "Burn Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a flame design",
            secondaryUse: "Creating fire-themed archaeological decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Gravel in Trail Ruins structures",
            "Features a stylized flame design representing fire or danger",
            "Rare suspicious gravel drop with 8.3% generation chance",
            "Used in crafting Decorated Pots to display the flame pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Burn Pottery Sherd is a distinctive archaeological artifact found in Trail Ruins by carefully brushing Suspicious Gravel. This pottery fragment displays a stylized flame design that likely represents fire, danger, or purification in ancient civilizations. Players value this sherd for its unique aesthetic and thematic significance. When used to craft a Decorated Pot, the Burn pattern appears on one side, making it ideal for fire-themed builds, medieval kitchens, or alchemical laboratories."
    },
    "minecraft:danger_pottery_sherd": {
        id: "minecraft:danger_pottery_sherd",
        name: "Danger Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a warning symbol",
            secondaryUse: "Creating cautionary-themed archaeological displays"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Gravel in Trail Ruins structures",
            "Features a warning symbol or hazard design for ancient alerts",
            "Rare suspicious gravel drop with 8.3% generation chance",
            "Used in crafting Decorated Pots to display the danger pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Danger Pottery Sherd is an intriguing archaeological piece discovered in Trail Ruins through careful excavation of Suspicious Gravel. This pottery fragment bears a distinctive warning symbol that ancient civilizations likely used to denote danger, traps, or hazardous areas. The sherd's design serves as both a practical warning and artistic expression. When incorporated into a Decorated Pot, it creates a unique piece perfect for dungeon-themed builds, warning signs, or historical archaeological displays."
    },
    "minecraft:friend_pottery_sherd": {
        id: "minecraft:friend_pottery_sherd",
        name: "Friend Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a friendly motif",
            secondaryUse: "Creating community or friendship-themed decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Gravel in Trail Ruins structures",
            "Features the unibrow and nose design resembling a villager or iron golem",
            "Rare suspicious gravel drop with 8.3% generation chance",
            "Used in crafting Decorated Pots to display the friend pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Friend Pottery Sherd is a heartwarming archaeological find from Trail Ruins, depicting the distinctive unibrow and nose features of villagers or iron golems. This pottery fragment represents friendship, community, and the bonds between different beings in Minecraft's world. The sherd's design evokes warmth and companionship, making it particularly popular for village-themed builds, community centers, or friendship memorials. When crafted into a Decorated Pot, it serves as a symbol of unity and good relations."
    },
    "minecraft:arms_up_pottery_sherd": {
        id: "minecraft:arms_up_pottery_sherd",
        name: "Arms Up Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with an Arms Up motif",
            secondaryUse: "Creating celebratory or victorious-themed decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Sand in Desert Wells"]
        },
        specialNotes: [
            "Found exclusively by brushing Suspicious Sand in Desert Wells",
            "Features a distinctive design showing arms raised in celebration or surrender",
            "Has a 25% chance to appear when brushing suspicious sand in desert wells",
            "Used in crafting Decorated Pots to display the arms up pattern on one side",
            "Breaking a Decorated Pot without Silk Touch returns the sherds used in crafting",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Arms Up Pottery Sherd is a distinctive archaeological artifact found by carefully brushing Suspicious Sand in Desert Wells. This pottery fragment depicts arms raised upward, a universal gesture that could represent celebration, victory, surrender, or worship in ancient desert civilizations. Players value this sherd for its expressive and dramatic design. When incorporated into a Decorated Pot, the Arms Up pattern appears on one side, making it perfect for trophy rooms, victory monuments, or builds celebrating achievements and triumphs."
    },
    "minecraft:brewer_pottery_sherd": {
        id: "minecraft:brewer_pottery_sherd",
        name: "Brewer Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Brewer motif",
            secondaryUse: "Creating alchemy or potion-themed decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Sand in Desert Wells"]
        },
        specialNotes: [
            "Found exclusively by brushing Suspicious Sand in Desert Wells",
            "Features a design depicting a brewing stand or potion-related imagery",
            "Has a 25% chance to appear when brushing suspicious sand in desert wells",
            "Used in crafting Decorated Pots to display the brewer pattern on one side",
            "Breaking a Decorated Pot without Silk Touch returns the sherds used in crafting",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Brewer Pottery Sherd is a fascinating archaeological discovery obtained by brushing Suspicious Sand in Desert Wells. This pottery fragment showcases ancient brewing or alchemy symbolism, reflecting the importance of potion-making and liquid storage in desert settlements. The design likely represents brewing stands or vessels used for creating potions and elixirs. When used to craft a Decorated Pot, the Brewer pattern makes it an ideal decoration for alchemy rooms, potion brewing areas, laboratories, or any build focused on magical or medicinal themes."
    },
    "minecraft:explorer_pottery_sherd": {
        id: "minecraft:explorer_pottery_sherd",
        name: "Explorer Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with an Explorer motif depicting a map",
            secondaryUse: "Creating adventure or cartography-themed decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Cold Ocean Ruins"]
        },
        specialNotes: [
            "Found exclusively by brushing Suspicious Gravel in Cold Ocean Ruins",
            "Features a map design symbolizing exploration and navigation",
            "Has a 6.7% chance to appear when brushing suspicious gravel in cold ocean ruins",
            "Used in crafting Decorated Pots to display the explorer pattern on one side",
            "Breaking a Decorated Pot without Silk Touch returns the sherds used in crafting",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Explorer Pottery Sherd is a maritime archaeological treasure found by brushing Suspicious Gravel in Cold Ocean Ruins. This pottery fragment depicts a stylized map, representing the spirit of exploration, navigation, and discovery that ancient oceanic civilizations valued. The cartographic design makes it particularly meaningful for adventurers and builders. When incorporated into a Decorated Pot, the Explorer pattern creates a perfect decoration for map rooms, navigation towers, adventure halls, or any build celebrating the journey of discovery across Minecraft's vast worlds."
    },
    "minecraft:miner_pottery_sherd": {
        id: "minecraft:miner_pottery_sherd",
        name: "Miner Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Miner motif",
            secondaryUse: "Creating excavation or mining-themed decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found exclusively by brushing Suspicious Gravel in Trail Ruins",
            "Features a design depicting a pickaxe, symbolizing mining",
            "Has an 8.3% chance to appear when brushing suspicious gravel in trail ruins",
            "Used in crafting Decorated Pots to display the miner pattern on one side",
            "Breaking a Decorated Pot without Silk Touch returns the sherds used in crafting",
            "Stacks up to 64 in Bedrock Edition"
        ],
        description: "The Miner Pottery Sherd is an archaeological artifact found in Trail Ruins by brushing Suspicious Gravel. This pottery fragment features a clear pickaxe design, representing the mining activities that have defined Minecraft's gameplay and lore. It is a tribute to the miners of the past. When used to craft a Decorated Pot, the Miner pattern creates a thematic decoration perfect for mine entrances, smithies, treasure rooms, or any build that celebrates the art of excavation."
    },
    "minecraft:cocoa_beans": {
        id: "minecraft:cocoa_beans",
        name: "Cocoa Beans",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Brown Dye and Cookies",
            secondaryUse: "Composting"
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Cocoa Pods on Jungle Logs"]
        },
        specialNotes: [
            "Found growing on jungle trees in Jungle biomes",
            "Can be farmed by planting on Jungle Logs",
            "Used to craft Brown Dye (1:1 ratio) and Cookies",
            "Compostable with a 65% chance to raise the compost level",
            "Harvested when orange-brown for maximum yield (3 beans)"
        ],
        description: "Cocoa Beans are a farming resource found naturally growing on the trunks of jungle trees. They are harvested from cocoa pods, which go through three growth stages. When fully grown (orange-brown), breaking a pod yields 3 beans, allowing for easy multiplication. Their primary use is crafting Brown Dye and Cookies. They are essential for mass-producing brown building materials like wool, terracotta, and concrete, as well as providing a sweet treat when combined with wheat."
    },
    "minecraft:charcoal": {
        id: "minecraft:charcoal",
        name: "Charcoal",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Fuel for smelting in furnaces and campfires",
            secondaryUse: "Crafting torches, campfires, and fire charges"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Log or Wood (any type)"]
        },
        specialNotes: [
            "Obtained by smelting logs or wood in a furnace",
            "Burns for 80 seconds, smelting up to 8 items (same as coal)",
            "Essential for crafting Torches (1 Charcoal + 1 Stick = 4 Torches)",
            "Used to craft Campfires, Soul Torches, and Fire Charges",
            "Cannot be crafted into a Coal Block",
            "Renewable fuel source derived from trees"
        ],
        description: "Charcoal is a renewable fuel source created by smelting logs or wood in a furnace. It shares the same fuel efficiency as coal, burning for 80 seconds and smelting up to 8 items per piece. Charcoal is an essential alternative to coal, especially for players who have not yet found coal ore or who have a surplus of wood. It can be used to craft torches, campfires, and fire charges, but unlike coal, it cannot be compacted into blocks or traded with villagers in the same way."
    },
    "minecraft:wheat_seeds": {
        id: "minecraft:wheat_seeds",
        name: "Wheat Seeds",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Planting to grow Wheat",
            secondaryUse: "Breeding chickens and taming parrots"
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Breaking grass or tall grass", "Harvesting Wheat"]
        },
        specialNotes: [
            "Obtained by breaking grass, tall grass, or ferns",
            "Planted on farmland to grow Wheat crops",
            "Used to breed chickens and reduce growth time of baby chickens",
            "Used to tame parrots in Bedrock Edition",
            "Compostable with a 30% chance to raise the compost level",
            "Dropped by wheat crops when harvested"
        ],
        description: "Wheat Seeds are the starting point for one of the most fundamental crops in Minecraft. They are easily obtained by breaking grass or harvesting mature wheat. When planted on tilled farmland, they grow into wheat, which is essential for food and animal breeding. Beyond farming, wheat seeds serve as the primary food for chickens, allowing players to breed them, and are used to tame parrots. Their abundance makes them a reliable resource for starting a farm and establishing a food supply early in the game."
    },
    "minecraft:beetroot_seeds": {
        id: "minecraft:beetroot_seeds",
        name: "Beetroot Seeds",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Planting to grow Beetroots",
            secondaryUse: "Breeding chickens and taming parrots"
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvesting Beetroot", "Found in Village chests"]
        },
        specialNotes: [
            "Obtained by harvesting mature Beetroot crops (2-5 seeds per crop)",
            "Found in chests within Snowy and Plains villages",
            "Planted on farmland to grow Beetroot",
            "Used to breed chickens and accelerate the growth of baby chickens",
            "Can be used to tame parrots in Bedrock Edition",
            "Compostable with a 30% chance to raise the compost level"
        ],
        description: "Beetroot Seeds are agricultural items used to grow beetroot crops. They are primarily obtained by harvesting fully grown beetroots or can be found in village chests. When planted on tilled farmland, they grow into harvestable beetroots. Like other seeds, they play a key role in animal husbandry, serving as food to breed chickens and reduce the growth time of chicks. In Bedrock Edition, they can also be used to tame parrots. They are a renewable resource essential for maintaining a steady supply of beetroot soup and red dye."
    },
    "minecraft:pumpkin_seeds": {
        id: "minecraft:pumpkin_seeds",
        name: "Pumpkin Seeds",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Planting to grow Pumpkins",
            secondaryUse: "Breeding chickens and taming parrots"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Pumpkin"]
        },
        specialNotes: [
            "Crafted by placing a Pumpkin in a crafting grid (yields 4 seeds)",
            "Can be found in chests within Dungeons, Mineshafts, and Woodland Mansions",
            "Planted on farmland to grow a Pumpkin Stem",
            "Pumpkin Stems produce Pumpkins on adjacent dirt, grass, or farmland blocks",
            "Used to breed chickens and tame parrots",
            "Compostable with a 30% chance to raise the compost level"
        ],
        description: "Pumpkin Seeds are essential for farming pumpkins, which are valuable for food, golems, and trading. They can be crafted from pumpkins or found in loot chests within dungeons and mineshafts. When planted on farmland, a seed grows into a stem that eventually produces a pumpkin on an adjacent block. This stem can continue to produce pumpkins indefinitely if the fruit is harvested without breaking the stem. Like other seeds, pumpkin seeds can be used to breed chickens, tame parrots, and compost organic waste."
    },
    "minecraft:melon_seeds": {
        id: "minecraft:melon_seeds",
        name: "Melon Seeds",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Planting to grow Melons",
            secondaryUse: "Breeding chickens and taming parrots"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Melon Slice"]
        },
        specialNotes: [
            "Crafted by placing a Melon Slice in a crafting grid (yields 1 seed)",
            "Found in chests within Dungeons, Mineshafts, and Woodland Mansions",
            "Planted on farmland to grow a Melon Stem",
            "Melon Stems produce Melon blocks on adjacent dirt, grass, or farmland blocks",
            "Used to breed chickens and tame parrots",
            "Compostable with a 30% chance to raise the compost level"
        ],
        description: "Melon Seeds are the starting point for growing melons, a source of food and potion ingredients. They are obtained by crafting melon slices or finding them in rare loot chests. Once planted on farmland, the seed grows into a stem that generates melon blocks on adjacent spaces. This process allows for infinite melon production from a single stem. Beyond farming, melon seeds serve as feed for chickens and can be used to tame parrots, making them a versatile item for survival players."
    },
    "minecraft:heart_pottery_sherd": {
        id: "minecraft:heart_pottery_sherd",
        name: "Heart Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Heart motif",
            secondaryUse: "Decorative archaeological item symbolizing love or health"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Sand in Cold Ocean Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Sand in Cold Ocean Ruins",
            "Features a simple heart design",
            "Used to craft Decorated Pots to display the heart pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Heart Pottery Sherd is a charming archaeological find from Cold Ocean Ruins, discovered by brushing Suspicious Sand. It features a simple heart symbol, representing love or health. When used in crafting a Decorated Pot, it imprints this heart design onto the pot's side. This makes it a favorite for players looking to add a touch of warmth and affection to their builds, or to create health-themed decorations in adventure maps."
    },
    "minecraft:howl_pottery_sherd": {
        id: "minecraft:howl_pottery_sherd",
        name: "Howl Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Howl motif",
            secondaryUse: "Decorative archaeological item depicting a wolf"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Gravel in Trail Ruins",
            "Features a stylized wolf design",
            "Used to craft Decorated Pots to display the wolf pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Howl Pottery Sherd is an archaeological item found in Trail Ruins by brushing Suspicious Gravel. It depicts a stylized wolf, likely referencing the loyal companion mob in Minecraft. This sherd is perfect for players who want to honor their tamed wolves or create nature-themed builds. When combined with other sherds or bricks in a crafting table, the Howl pattern appears on one face of the resulting Decorated Pot."
    },
    "minecraft:mourner_pottery_sherd": {
        id: "minecraft:mourner_pottery_sherd",
        name: "Mourner Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Mourner motif",
            secondaryUse: "Decorative archaeological item depicting a Warden"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Gravel in Trail Ruins"]
        },
        specialNotes: [
            "Found by brushing Suspicious Gravel in Trail Ruins",
            "Features a design resembling the Warden",
            "Used to craft Decorated Pots to display the Warden pattern on one side",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Mourner Pottery Sherd is a unique archaeological discovery from Trail Ruins, obtained by brushing Suspicious Gravel. It features a design that resembles the terrifying Warden found in the Deep Dark, suggesting an ancient connection or warning. This sherd allows players to add a spooky or mysterious element to their pottery collections. When used to craft a Decorated Pot, the Mourner pattern is displayed on one side, making it ideal for Deep Dark-themed builds or museums."
    }
};
