// Pocket Wikipedia Foundation - Workstation Blocks Data
// ============================================
// This file contains: Crafting table, furnace, blast furnace,
// smoker, anvil (all damage states), enchanting table, brewing stand,
// cauldron, grindstone, stonecutter, smithing table, cartography table,
// fletching table, loom, lectern, respawn anchor, lodestone, beacon,
// conduit, end portal frame
// ============================================

/**
 * Workstation blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const workstationBlocks = {
    "minecraft:smoker": {
        id: "minecraft:smoker",
        name: "Smoker",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 13,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Smoker"],
        generation: {
            dimension: "Overworld",
            yRange: "Village butcher houses"
        },
        description: "A Smoker is a specialized furnace that smelts food items twice as fast as a regular furnace, making it highly efficient for cooking meat, fish, potatoes, kelp, and other food items. However, it cannot smelt ores or other non-food materials. When active, the smoker emits smoke particles and provides a light level of 13, creating an atmospheric effect. Crafted from four logs and one furnace, the smoker serves as the job site block for Butcher villagers and spawns naturally in their houses in villages."
    },
    "minecraft:obsidian": {
        id: "minecraft:obsidian",
        name: "Obsidian",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Obsidian"],
        generation: {
            dimension: "Overworld, Nether, The End",
            yRange: "Any (forms when water meets lava source)"
        },
        description: "Obsidian is an extremely hard and blast-resistant block formed when flowing water touches a lava source block. It has the second-highest blast resistance in the game after bedrock, making it immune to normal explosions. Obsidian can only be mined with a diamond or netherite pickaxe. It is used to craft enchanting tables, beacons, ender chests, and to build Nether portal frames."
    },
    "minecraft:crafter": {
        id: "minecraft:crafter",
        name: "Crafter",
        hardness: 1.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crafter"],
        description: "The Crafter is a functional block introduced in Minecraft 1.21 that automates item crafting through redstone signals. When powered by a redstone pulse, it takes items from its input slots and ejects the crafted result. The back face displays redstone crystals that light up when powered, while the crafting grid glows red upon successful crafting. Crafted from iron ingots, redstone dust, a crafting table, and a dropper, this block revolutionizes automation by enabling complex redstone circuits to handle repetitive crafting tasks without manual intervention."
    },
    "minecraft:lectern": {
        id: "minecraft:lectern",
        name: "Lectern",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Lectern", "Book (if holding one)"],
        generation: {
            dimension: "Overworld",
            yRange: "Village libraries"
        },
        description: "A Lectern is a functional block that holds written books and books & quills, allowing multiple players to read from the same book simultaneously. When a page is turned, it emits a redstone signal with strength proportional to the current page number, making it useful in redstone circuits. Lecterns serve as job site blocks for Librarian villagers and can be crafted using four wooden slabs and one bookshelf. Breaking a lectern returns both the block and any book placed on it."
    },
    "minecraft:respawn_anchor": {
        id: "minecraft:respawn_anchor",
        name: "Respawn Anchor",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 15,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Respawn Anchor"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted only"
        },
        description: "The Respawn Anchor allows players to set their spawn point in the Nether dimension. Charged with glowstone blocks (up to 4 charges), each respawn consumes one charge. The block emits light based on its charge level, from 0 to 15. Crafted from six crying obsidian and three glowstone blocks, it requires a diamond or netherite pickaxe to mine. If a player attempts to use a respawn anchor in the Overworld or End dimensions, it explodes with a blast power stronger than TNT, making it exclusively functional in the Nether."
    },
    "minecraft:beacon": {
        id: "minecraft:beacon",
        name: "Beacon",
        hardness: 3,
        blastResistance: 3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Beacon"],
        generation: {
            dimension: "Any",
            yRange: "Crafted only"
        },
        description: "A Beacon is a highly valuable functional block that projects a vertical light beam into the sky and provides beneficial status effects to nearby players. It must be placed atop a pyramid structure built from iron, gold, diamond, emerald, or netherite blocks, with pyramid sizes ranging from 1 to 4 levels determining the range and available effects. Crafted from five glass blocks, three obsidian, and one nether star obtained by defeating the Wither, beacons emit maximum light and can provide effects such as Speed, Haste, Resistance, Jump Boost, Strength, and Regeneration within their radius."
    },
    "minecraft:grindstone": {
        id: "minecraft:grindstone",
        name: "Grindstone",
        hardness: 2.0,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Grindstone"],
        generation: {
            dimension: "Overworld",
            yRange: "Village weaponsmith houses"
        },
        description: "A Grindstone is a specialized workstation block introduced in Minecraft 1.14 that serves multiple purposes. It repairs damaged items by combining two similar items to create one with combined durability plus a 5% bonus. It also removes enchantments from weapons, tools, or armor, returning some experience to the player. When used or powered by redstone, it emits sparks and produces a distinctive grinding sound. The grindstone is crafted from two wooden planks, two sticks, and a stone slab. It serves as the job site block for Weaponsmith villagers and generates naturally in their houses in villages, making it both a practical utility and an important villager profession block."
    },
    "minecraft:loom": {
        id: "minecraft:loom",
        name: "Loom",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Loom"],
        generation: {
            dimension: "Overworld",
            yRange: "Village shepherd houses"
        },
        description: "A Loom is a crafting workstation used to apply patterns to banners more efficiently than using a crafting table. It features a unique interface with slots for the banner, dye, and optional banner pattern items. The loom displays a preview of the resulting banner design, making it easier to visualize complex patterns. It is crafted from two wooden planks and two strings in a 2x2 grid. The loom serves as the job site block for Shepherd villagers and generates naturally in their houses. Unlike the crafting table method, the loom never consumes the banner pattern items (like flowers, vines, or creeper heads), making it more resource-efficient for mass banner production."
    },
    "minecraft:smithing_table": {
        id: "minecraft:smithing_table",
        name: "Smithing Table",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Smithing Table"],
        generation: {
            dimension: "Overworld",
            yRange: "Village toolsmith houses"
        },
        description: "A Smithing Table is an advanced workstation that enables gear upgrading and customization. Its primary function is upgrading diamond equipment to netherite tier using netherite ingots, the highest tier of gear in the game. Starting with Minecraft 1.20, it also allows applying and customizing armor trims using smithing templates and materials like copper, gold, iron, emerald, diamond, lapis lazuli, nether quartz, or netherite. The smithing table is crafted from four wooden planks and two iron ingots. It serves as the job site block for Toolsmith villagers and generates naturally in their houses, playing a crucial role in both progression and cosmetic customization."
    },
    "minecraft:cartography_table": {
        id: "minecraft:cartography_table",
        name: "Cartography Table",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cartography Table"],
        generation: {
            dimension: "Overworld",
            yRange: "Village cartographer houses"
        },
        description: "A Cartography Table is a specialized workstation for manipulating explorer maps and empty maps. It offers four functions: cloning maps to create copies, expanding the zoom level of existing maps up to four times, locking maps to prevent further modifications, and creating locator maps that track player position. The cartography table is crafted from two sheets of paper and four wooden planks. It serves as the job site block for Cartographer villagers and generates naturally in their houses. This block revolutionizes map management by providing intuitive controls for map duplication and customization, essential for large-scale exploration projects and base mapping.",
    },
    "minecraft:blast_furnace": {
        id: "minecraft:blast_furnace",
        name: "Blast Furnace",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 13,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false,
        },
        drops: ["Blast Furnace"],
        generation: {
            dimension: "Overworld",
            yRange: "Village armorer houses",
        },
        description: "A Blast Furnace is a specialized workstation block used for smelting ores, raw metals, and iron or gold chainmail and tools twice as fast as a regular furnace. While it operates with double the speed, it also consumes fuel at double the rate. It cannot be used to cook food, which requires a Smoker or regular furnace instead. Crafted from five iron ingots, one furnace, and three smooth stones, it also serves as the job site block for Armorer villagers in villages.",
    },
    "minecraft:composter": {
        id: "minecraft:composter",
        name: "Composter",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false,
        },
        drops: ["Composter"],
        generation: {
            dimension: "Overworld",
            yRange: "Village farms",
        },
        description: "A Composter is a functional block that converts various plant materials and food items into bone meal. When a player uses organic items on the composter, there is a chance it will fill up by one level; once it reaches level seven, the next use produces bone meal. It is crafted from seven wooden slabs and generates naturally in villages as the job site block for Farmers. Composters can also be interacted with by hoppers, allowing for automated bone meal production systems.",
    },
    "minecraft:fletching_table": {
        id: "minecraft:fletching_table",
        name: "Fletching Table",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Fletching Table"],
        generation: {
            dimension: "Overworld",
            yRange: "Village fletcher houses"
        },
        description: "The Fletching Table is a workstation block that serves as the job site for Fletcher villagers. While it currently lacks a functional UI for player use, it is an essential part of a village's economy, allowing unemployed villagers to become Fletchers who trade arrows, bows, and flint. It is crafted using two pieces of flint and four wooden planks. In Bedrock Edition, like other workstation blocks, it can be used for decorative purposes due to its unique wood-and-tool texture. It is highly resistant to fire despite being made of wood."
    },
    "minecraft:brewing_stand": {
        id: "minecraft:brewing_stand",
        name: "Brewing Stand",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Brewing Stand"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Igloos, End Ships"
        },
        description: "A Brewing Stand is a vital workstation used for potion-making in Minecraft. It requires Blaze Powder as fuel to transform water bottles into various beneficial or harmful potions using ingredients like Nether Wart, Ghast Tears, and Magmatic Cream. Naturally spawning in village churches, igloo basements, and end ships, it also serves as the job site block for Cleric villagers. In Bedrock Edition, it emits a light level of 1 and can brew up to three potions simultaneously, making it an essential tool for late-game survival and combat preparation."
    },
    "minecraft:enchanting_table": {
        id: "minecraft:enchanting_table",
        name: "Enchanting Table",
        hardness: 5,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 7,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Enchanting Table"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Enchanting Table is a powerful block used to bestow magical properties upon tools, armor, and weapons. By consuming experience levels and Lapis Lazuli, players can access enchantments that improve efficiency, durability, and combat prowess. Its effectiveness is boosted by placing up to 15 bookshelves nearby, unlocking higher-level enchantments up to level 30. The table features a mystical floating book that opens and turns its pages toward nearby players, and it notably emits a light level of 7 in Bedrock Edition while remaining highly resistant to explosions."
    },
    "minecraft:anvil": {
        id: "minecraft:anvil",
        name: "Anvil",
        hardness: 5,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: true,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Anvil"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "An Anvil is a versatile workstation used for repairing items, renaming gear, and combining enchantments from enchanted books. Unlike most blocks, Anvils are affected by gravity and will fall if unsupported, dealing significant damage to any entity they land on. Each use has a 12% chance to degrade the anvil through three stages: undamaged, chipped, and damaged, eventually resulting in its destruction. In Bedrock Edition, they are essential for maintaining high-tier equipment and can be used to apply powerful enchantment combinations that exceed standard table limits."
    },
    "minecraft:crafting_table": {
        id: "minecraft:crafting_table",
        name: "Crafting Table",
        hardness: 2.5,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crafting Table"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A crafting table is a utility block that provides access to all crafting recipes in Minecraft, including many not available from the inventory's 2x2 crafting grid. It features a 3x3 crafting grid, allowing players to create more complex recipes and automate more efficient resource processing. Crafted from four wooden planks in any arrangement, the crafting table is essential for progressing beyond basic tools and equipment. It serves as a fundamental building block for Minecraft's entire crafting system and is required for creating redstone circuits, potions, and advanced machinery."
    },
    "minecraft:furnace": {
        id: "minecraft:furnace",
        name: "Furnace",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 13,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Furnace"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, mineshafts, igloos, woodland mansions"
        },
        description: "A furnace is a fundamental utility block used for smelting ores, cooking food, and processing materials. It accepts various fuels including coal, wood, and lava buckets, and can smelt items at a rate of one item every 10 seconds. When active, furnaces emit light level 13 and show animated flame particles. In Bedrock Edition, furnaces drop themselves when mined by hand or any tool, unlike Java Edition. They generate naturally in villages, mineshafts, igloos, and woodland mansons, making them valuable early-game resources for smelting iron ore, gold ore, and cooking food."
    },
    "minecraft:cauldron": {
        id: "minecraft:cauldron",
        name: "Cauldron",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cauldron"],
        generation: {
            dimension: "Overworld",
            yRange: "Village tannery houses, witch huts, igloos"
        },
        description: "A cauldron is a utility block that can store water, lava, or powder snow in up to three levels. In Bedrock Edition, cauldrons can also hold potions, dyed water, and colored substances. They serve as the job site block for leatherworker villagers and have multiple brewing applications. Cauldrons can fill themselves in certain biomes and can be used to store water for dyeing leather armor, filling glass bottles for brewing, creating tipped arrows, and removing dyes from colored items. They generate naturally in village tannery houses, witch huts, and some igloos, with witch cauldrons sometimes containing potions."
    },
    "minecraft:stonecutter": {
        id: "minecraft:stonecutter",
        name: "Stonecutter",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stonecutter"],
        generation: {
            dimension: "Overworld",
            yRange: "Village mason houses"
        },
        description: "A Stonecutter is a functional block used to craft stone-related blocks into their various slab, stair, and brick variants. It serves as a more efficient alternative to the crafting table for stone recipes, allowing for a 1:1 conversion ratio and skipping intermediate steps (like crafting a block before a stair). It also functions as the job site block for Mason villagers. Crafted from one iron ingot and three stone blocks, it features an animated saw blade on top. While the blade appears dangerous, it does not damage players or mobs in Bedrock Edition."
    }
};
