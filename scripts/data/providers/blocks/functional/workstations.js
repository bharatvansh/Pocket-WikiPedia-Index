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
    }
};
