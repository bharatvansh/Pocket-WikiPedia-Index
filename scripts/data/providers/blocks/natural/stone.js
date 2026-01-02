// Pocket Wikipedia Foundation - Stone Blocks Data
// ============================================
// This file contains: Stone variants, deepslate variants, cobblestone,
// smooth stone, stone bricks, mossy variants, cracked variants,
// andesite, diorite, granite (and polished versions), tuff, calcite,
// dripstone, basalt, blackstone variants
// ============================================

/**
 * Stone-type blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const stoneBlocks = {
    "minecraft:stone": {
        id: "minecraft:stone",
        name: "Stone",
        hardness: 1.5,
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
    "minecraft:chiseled_tuff": {
        id: "minecraft:chiseled_tuff",
        name: "Chiseled Tuff",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Chiseled Tuff"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Chiseled Tuff is a decorative stone introduced in Minecraft 1.21, carved with patterns resembling trial chamber motifs. It can be crafted from two tuff slabs placed vertically or created in a stonecutter from a single tuff block. Chiseled Tuff shares the same hardness and blast resistance as regular tuff. It generates naturally within Trial Chamber structures and is part of the expanded tuff family, which includes stairs, slabs, walls, and bricks. This block provides builders with a unique pattern for detailed architectural work."
    },
    "minecraft:andesite": {
        id: "minecraft:andesite",
        name: "Andesite",
        hardness: 1.5,
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
        drops: ["Andesite"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 320"
        },
        description: "Andesite is a type of igneous rock that generates naturally in the Overworld in caves, mountains, and as part of mineral veins. It has a gray-speckled appearance with subtle tonal variations that make it excellent for adding texture to builds. Andesite can be polished using a stonecutter to create polished andesite, which is a popular building block for modern architectural styles. Like stone, it requires a pickaxe to be mined efficiently and drops itself when broken without Silk Touch."
    },
    "minecraft:diorite": {
        id: "minecraft:diorite",
        name: "Diorite",
        hardness: 1.5,
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
        drops: ["Diorite"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 320"
        },
        description: "Diorite is an igneous rock block that generates in the Overworld similar to andesite and granite. It has a distinctive speckled white and gray appearance that works well for accent walls, detailed builds, and modern architectural designs. When polished in a stonecutter, diorite becomes polished diorite, which is highly valued by builders for creating clean, crisp surfaces with high contrast. It can be found in caves, mountain biomes, and as part of mineral veins throughout the Overworld."
    },
    "minecraft:granite": {
        id: "minecraft:granite",
        name: "Granite",
        hardness: 1.5,
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
        drops: ["Granite"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 320"
        },
        description: "Granite is a naturally occurring igneous rock block with a distinctive pink, speckled appearance that adds warmth and character to builds. It generates in caves, mountains, and as part of mineral veins in the Overworld. Players can craft polished granite using a stonecutter for more refined building projects that require a sophisticated, polished aesthetic. Granite provides excellent visual contrast against darker blocks like obsidian, blackstone, or deepslate, making it a favorite for detailed architectural work and accent pieces."
    }
};
