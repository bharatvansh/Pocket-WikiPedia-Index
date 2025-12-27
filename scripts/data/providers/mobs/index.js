// Pocket Wikipedia Foundation - Mob Content Provider
// Aggregates all mob data from modular files

import { hostileMobs } from './hostile_mobs.js';
import { passiveMobs } from './passive_mobs.js';
import { neutralMobs } from './neutral_mobs.js';

/**
 * @typedef {Object} MobDrop
 * @property {string} item - Item name
 * @property {string} [chance] - Drop chance
 */

/**
 * @typedef {Object} MobDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} health - Health points
 * @property {Object} [stats] - Combat stats
 * @property {number} [stats.attackDamage] - Attack damage
 * @property {number} [stats.movementSpeed] - Movement speed
 * @property {Object} [classification] - Mob classification
 * @property {string} [classification.type] - Hostile/Passive/Neutral
 * @property {boolean} [classification.undead] - Whether undead
 * @property {Object} [spawning] - Spawning conditions
 * @property {string[]} [spawning.biomes] - Spawn biomes
 * @property {string} [spawning.lightLevel] - Required light level
 * @property {string} [spawning.groupSize] - Group spawn size
 * @property {string[]} [behaviorTraits] - Behavior traits
 * @property {MobDrop[]} [drops] - Items dropped on death
 * @property {string} description - Detailed description
 */

// Combine all mob data into a single registry
const mobData = {
    ...hostileMobs,
    ...passiveMobs,
    ...neutralMobs
};

/**
 * Get detailed information for a specific mob
 * @param {string} mobId
 * @returns {Promise<MobDetails>}
 */
export async function getMobDetails(mobId) {
    if (mobData[mobId]) {
        return mobData[mobId];
    }

    throw new Error(`Mob details not found for: ${mobId}`);
}
