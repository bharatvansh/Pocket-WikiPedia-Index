// Pocket Wikipedia Foundation - Mob Content Provider
// Provides detailed mob information on demand

/**
 * @typedef {Object} MobDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} health - Health points
 * @property {string} behavior - General behavior description
 * @property {string[]} drops - Common drops
 * @property {string} description - Detailed description
 */

/**
 * Get detailed information for a specific mob
 * @param {string} mobId
 * @returns {Promise<MobDetails>}
 */
export async function getMobDetails(mobId) {
    // In a real implementation, this could fetch from a larger database
    // For now, we return predefined data for our sample entries
    
    const mobData = {
        "minecraft:creeper": {
            id: "minecraft:creeper",
            name: "Creeper",
            health: 20,
            behavior: "Hostile, explodes when near players",
            drops: ["gunpowder"],
            description: "Creepers are iconic hostile mobs that silently approach players and explode. They are known for their distinctive hissing sound before detonation. Creepers drop gunpowder when killed, which is essential for crafting TNT and fireworks."
        },
        "minecraft:pig": {
            id: "minecraft:pig",
            name: "Pig",
            health: 10,
            behavior: "Passive, can be ridden with saddle",
            drops: ["porkchop", "leather"],
            description: "Pigs are common passive mobs found in most biomes. They can be ridden when equipped with a saddle and controlled with a carrot on a stick. Pigs drop porkchops when killed, which can be cooked into food."
        }
    };
    
    if (mobData[mobId]) {
        return mobData[mobId];
    }
    
    throw new Error(`Mob details not found for: ${mobId}`);
}