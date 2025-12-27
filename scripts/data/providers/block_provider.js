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
        },
        "minecraft:deepslate": {
            id: "minecraft:deepslate",
            name: "Deepslate",
            hardness: 3.0,
            blastResistance: 6.0,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "Wood",
                silkTouch: true
            },
            drops: ["Cobbled Deepslate"],
            generation: {
                dimension: "Overworld",
                yRange: "-64 to 8"
            },
            description: "Deepslate is a harder variant of stone found in the deepest layers of the Overworld. It generates below Y-level 0 and becomes more common below Y-level -8. Deepslate takes twice as long to mine as stone and has a distinctive dark gray appearance with subtle cracks."
        },
        "minecraft:copper_ore": {
            id: "minecraft:copper_ore",
            name: "Copper Ore",
            hardness: 3.0,
            blastResistance: 3.0,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "Stone",
                silkTouch: true
            },
            drops: ["Raw Copper (2-3)"],
            generation: {
                dimension: "Overworld",
                yRange: "-16 to 112"
            },
            description: "Copper Ore is a common ore found in the Overworld that drops raw copper when mined. It can be smelted into copper ingots, which are used to craft various copper blocks, lightning rods, and spyglasses. Copper blocks naturally oxidize over time, changing from orange to green."
        },
        "minecraft:amethyst_block": {
            id: "minecraft:amethyst_block",
            name: "Amethyst Block",
            hardness: 1.5,
            blastResistance: 1.5,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "Wood",
                silkTouch: false
            },
            drops: ["Amethyst Block"],
            generation: {
                dimension: "Overworld",
                yRange: "0-64"
            },
            description: "Amethyst Block is a decorative purple block found in amethyst geodes. It can be crafted from four amethyst shards and has a distinctive crystalline appearance. Amethyst blocks are purely decorative and make a unique musical sound when walked on or broken."
        },
        "minecraft:glowstone": {
            id: "minecraft:glowstone",
            name: "Glowstone",
            hardness: 0.3,
            blastResistance: 0.3,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 15,
            mining: {
                tool: "None",
                minTier: "None",
                silkTouch: true
            },
            drops: ["Glowstone Dust (2-4)"],
            generation: {
                dimension: "The Nether",
                yRange: "Any"
            },
            description: "Glowstone is a luminous block that emits the maximum light level of 15, making it an excellent light source. It generates naturally in the Nether on the underside of terrain and in bastion remnants. When broken without Silk Touch, it drops 2-4 glowstone dust, which can be crafted back into glowstone blocks."
        },
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
        },
        "minecraft:prismarine": {
            id: "minecraft:prismarine",
            name: "Prismarine",
            hardness: 1.5,
            blastResistance: 6,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "None",
                silkTouch: false
            },
            drops: ["Prismarine"],
            generation: {
                dimension: "Overworld (Ocean Monuments)",
                yRange: "Any"
            },
            description: "Prismarine is a decorative block found exclusively in ocean monuments and underwater ruins. It comes in three variants: prismarine, prismarine bricks, and dark prismarine. Prismarine is obtained by mining it with any pickaxe, and can be crafted from prismarine shards obtained from sea lanterns. Its distinctive teal color makes it popular for underwater builds."
        },
        "minecraft:concrete": {
            id: "minecraft:concrete",
            name: "Concrete",
            hardness: 1.8,
            blastResistance: 1.8,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "None",
                silkTouch: false
            },
            drops: ["Concrete"],
            generation: {
                dimension: "N/A",
                yRange: "Created when Concrete Powder touches water"
            },
            description: "Concrete is a colorful building block created when concrete powder comes into contact with water. It comes in 16 vibrant colors and is highly resistant to explosions, making it popular for outdoor builds and decorative structures. Unlike wool, concrete does not conduct redstone signals and is not flammable."
        },
        "minecraft:tuff": {
            id: "minecraft:tuff",
            name: "Tuff",
            hardness: 1.5,
            blastResistance: 6,
            flammability: false,
            gravityAffected: false,
            transparent: false,
            luminance: 0,
            mining: {
                tool: "Pickaxe",
                minTier: "None",
                silkTouch: false
            },
            drops: ["Tuff"],
            generation: {
                dimension: "Overworld",
                yRange: "Below Y=16"
            },
            description: "Tuff is a decorative rocky block that generates underground in ore-like blobs below Y-level 16. It is commonly found near diamond deposits and ancient debris in the deeper parts of the world. Tuff can be crafted into various building blocks including polished tuff, tuff bricks, and tuff slabs. When mined without a pickaxe, it drops nothing."
        }
    };

    if (blockData[blockId]) {
        return blockData[blockId];
    }

    throw new Error(`Block details not found for: ${blockId}`);
}
