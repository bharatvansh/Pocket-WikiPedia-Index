// Pocket Wikipedia Foundation - Block Content Provider
// Provides detailed block information on demand

/**
 * @typedef {Object} BlockDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} blastResistance - Blast resistance value
 * @property {number} hardness - Hardness value
 * @property {boolean} flammability - Whether the block is flammable
 * @property {string} description - Detailed description
 */

/**
 * Get detailed information for a specific block
 * @param {string} blockId
 * @returns {Promise<BlockDetails>}
 */
export async function getBlockDetails(blockId) {
    // In a real implementation, this could fetch from a larger database
    // For now, we return predefined data for our sample entries
    
    const blockData = {
        "minecraft:dirt": {
            id: "minecraft:dirt",
            name: "Dirt",
            blastResistance: 2.5,
            hardness: 0.5,
            flammability: false,
            description: "Dirt is one of the most common blocks in Minecraft. It can be easily dug up with a shovel and is often found in large quantities near the surface. Dirt can be converted to farmland or used as a building material."
        },
        "minecraft:stone": {
            id: "minecraft:stone",
            name: "Stone",
            blastResistance: 30,
            hardness: 1.5,
            flammability: false,
            description: "Stone is a durable building material that requires a pickaxe to mine. It's commonly found underground and can be smelted from cobblestone. Stone is resistant to explosions and is often used for construction."
        }
    };
    
    if (blockData[blockId]) {
        return blockData[blockId];
    }
    
    throw new Error(`Block details not found for: ${blockId}`);
}