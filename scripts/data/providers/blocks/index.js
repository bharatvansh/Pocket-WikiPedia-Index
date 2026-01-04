// Pocket Wikipedia Foundation - Block Content Provider
// Aggregates all block data from modular subcategory folders

import { naturalBlocks } from './natural/index.js';
import { buildingBlocks } from './building/index.js';
import { functionalBlocks } from './functional/index.js';
import { decorativeBlocks } from './decorative/index.js';
import { dimensionBlocks } from './dimension/index.js';

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
 * @property {string} [generation.structures] - Structures where the block generates
 * @property {string} [generation.naturalGeneration] - Description of natural generation
 * @property {string} description - Detailed description
 */

// Combine all block data into a single registry
const blockData = {
    ...naturalBlocks,
    ...buildingBlocks,
    ...functionalBlocks,
    ...decorativeBlocks,
    ...dimensionBlocks
};

/**
 * Get detailed information for a specific block
 * @param {string} blockId
 * @returns {Promise<BlockDetails>}
 */
export async function getBlockDetails(blockId) {
    if (blockData[blockId]) {
        return blockData[blockId];
    }

    throw new Error(`Block details not found for: ${blockId}`);
}
