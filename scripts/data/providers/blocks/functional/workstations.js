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
    }
};
