// Pocket Wikipedia Foundation - Block Content Provider
// Provides detailed block information on demand

/**
 * @typedef {Object} BlockDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} hardness - Hardness value
 * @property {number} blastResistance - Blast resistance value
 * @property {boolean} flammability - Whether the block is flammable
 * @property {boolean} [gravityAffected] - Whether affected by gravity
 * @property {boolean} [transparent] - Whether the block is transparent
 * @property {number} [luminance] - Light level emitted (0-15)
 * @property {Object} [mining] - Mining information
 * @property {string} [mining.tool] - Required tool type
 * @property {string} [mining.minTier] - Minimum tool tier
 * @property {boolean} [mining.silkTouch] - Silk touch compatible
 * @property {string[]} [drops] - Items dropped when broken
 * @property {Object} [generation] - World generation info
 * @property {string} [generation.dimension] - Dimension where found
 * @property {string} [generation.yRange] - Y-level range
 * @property {string} description - Detailed description
 */

/**
 * Get detailed information for a specific block
 * @param {string} blockId
 * @returns {Promise<BlockDetails>}
 */
export async function getBlockDetails(blockId) {
    const blockData = {
        "minecraft:dirt": {
            id: "minecraft:dirt",
            name: "Dirt",
            hardness: 0.5,
            blastResistance: 2.5,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Shovel",
                minTier: "None",
                silkTouch: false
            },
            drops: ["Dirt"],
            generation: {
                dimension: "Overworld",
                yRange: "0-256"
            },
            description: "Dirt is one of the most common blocks in Minecraft. It can be easily dug up with a shovel and is often found in large quantities near the surface. Dirt can be converted to farmland or used as a building material."
        },
        "minecraft:stone": {
            id: "minecraft:stone",
            name: "Stone",
            hardness: 1.5,
            blastResistance: 30,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "Wood",
                silkTouch: true
            },
            drops: ["Cobblestone"],
            generation: {
                dimension: "Overworld",
                yRange: "-64 to 320"
            },
            description: "Stone is a durable building material that requires a pickaxe to mine. It's commonly found underground and can be smelted from cobblestone. Stone is resistant to explosions and is often used for construction."
        }
    };

    if (blockData[blockId]) {
        return blockData[blockId];
    }

    throw new Error(`Block details not found for: ${blockId}`);
}
