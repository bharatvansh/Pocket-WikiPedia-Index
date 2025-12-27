// Pocket Wikipedia Foundation - Natural Blocks Data
// Contains data for natural/terrain blocks

/**
 * Natural blocks data registry
 * @type {Object.<string, import('../block_types').BlockDetails>}
 */
export const naturalBlocks = {
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
    }
};
