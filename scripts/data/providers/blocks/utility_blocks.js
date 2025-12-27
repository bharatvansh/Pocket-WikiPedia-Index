// Pocket Wikipedia Foundation - Utility Blocks Data
// Contains data for functional/utility block types

/**
 * Utility blocks data registry
 * @type {Object.<string, import('../block_types').BlockDetails>}
 */
export const utilityBlocks = {
    "minecraft:obsidian": {
        id: "minecraft:obsidian",
        name: "Obsidian",
        hardness: 50,
        blastResistance: 6000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: true
        },
        drops: ["Obsidian"],
        generation: {
            dimension: "Overworld, Nether, The End",
            yRange: "Any (forms when water meets lava source)"
        },
        description: "Obsidian is an extremely hard and blast-resistant block formed when flowing water touches a lava source block. It has the second-highest blast resistance in the game after bedrock, making it immune to normal explosions. Obsidian can only be mined with a diamond or netherite pickaxe. It is used to craft enchanting tables, beacons, ender chests, and to build Nether portal frames."
    }
};
