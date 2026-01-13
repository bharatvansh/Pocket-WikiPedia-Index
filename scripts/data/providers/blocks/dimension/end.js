// Pocket Wikipedia Foundation - End Blocks Data
// ============================================
// This file contains: End stone, end stone bricks, purpur block,
// purpur pillar, purpur stairs, purpur slab, end rod, chorus plant,
// chorus flower, dragon egg, end portal frame, end gateway
// ============================================

/**
 * End dimension blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const endBlocks = {
    "minecraft:end_stone": {
        id: "minecraft:end_stone",
        name: "End Stone",
        hardness: 3.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["End Stone"],
        generation: {
            dimension: "The End",
            yRange: "Main island surface"
        },
        description: "End Stone is the primary building block that makes up the surface of the End dimension's main island. It has a distinctive tan-yellow color with small embedded particles that resemble stars or eyes. With a hardness of 3.0 and blast resistance of 9.0, it is significantly more durable than stone and can be mined with any pickaxe, though it takes longer without a proper tool. End Stone is used to craft end stone bricks and can be crafted into crafting tables, furnaces, and other utility blocks in the End. It's an essential material for building in the End dimension and provides excellent protection against the Ender Dragon's attacks due to its higher blast resistance compared to most Overworld blocks."
    },
    "minecraft:end_rod": {
        id: "minecraft:end_rod",
        name: "End Rod",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 14,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["End Rod"],
        generation: {
            dimension: "The End",
            yRange: "End Cities"
        },
        description: "End Rods are decorative light-emitting blocks that generate naturally in End Cities. They emit a light level of 14 and can be placed in any orientation, making them versatile for directional lighting designs. Crafted from one Blaze Rod and one Popped Chorus Fruit, they can be instantly mined with any tool or by hand. End Rods are particularly useful for modern builds and serve as a stylish alternative to torches, with their distinctive white glow and sleek rod design that fits well in futuristic or End-themed construction projects."
    },
    "minecraft:end_stone_bricks": {
        id: "minecraft:end_stone_bricks",
        name: "End Stone Bricks",
        hardness: 3.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["End Stone Bricks"],
        generation: {
            dimension: "The End",
            yRange: "End Cities"
        },
        description: "End Stone Bricks are crafted variants of end stone, created by placing four end stone blocks in a 2x2 crafting grid. They generate naturally in End Cities and serve as a durable building material with the same hardness (3.0) and blast resistance (9.0) as regular end stone. The distinctive tan color and brick texture provide excellent aesthetic variety for End-themed builds. Like other brick blocks, end stone bricks can be crafted into stairs, slabs, and walls using a stonecutter or crafting table, offering versatility for detailed architectural work in the End dimension."
    },
    "minecraft:purpur_block": {
        id: "minecraft:purpur_block",
        name: "Purpur Block",
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
        drops: ["Purpur Block"],
        generation: {
            dimension: "The End",
            yRange: null
        },
        description: "Purpur Block is a decorative purple stone-like block found exclusively in End Cities and End Ships. It can be crafted by placing four popped chorus fruit in a 2x2 grid, making it renewable. Purpur blocks come in several variants including stairs, slabs, and pillars. With a hardness of 1.5 and blast resistance of 6.0, purpur blocks provide moderate durability while offering a unique purple aesthetic that fits the End dimension's color palette. They are essential building materials for players exploring the End and are commonly used in End-themed architecture."
    },
    "minecraft:purpur_pillar": {
        id: "minecraft:purpur_pillar",
        name: "Purpur Pillar",
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
        drops: ["Purpur Pillar"],
        generation: {
            dimension: "The End",
            yRange: "End Cities and End Ships"
        },
        description: "Purpur Pillar is a decorative End-themed block generating in End Cities and End Ships. It features a vertical pillar texture reminiscent of logs or quartz pillars and can be placed sideways in all orientations, providing versatility for architectural designs. Crafted by placing two purpur slabs vertically, or obtained via stone cutting from a purpur block. As a renewable material derived from popped chorus fruit, purpur pillars are sustainable. They have identical hardness and blast resistance to regular purpur blocks. In Bedrock Edition, purpur pillars duplicate spire armor trim templates."
    },
    "minecraft:chorus_flower": {
        id: "minecraft:chorus_flower",
        name: "Chorus Flower",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Chorus Flower (ages 0-4) or Chorus Fruit (age 5)"],
        generation: {
            dimension: "The End",
            yRange: "Chorus plants (End islands)"
        },
        description: "Chorus Flower is a unique purple plant block growing on chorus plants in the End dimension, appearing as flowered tips of chorus trees. Plantable on end stone in any dimension regardless of light level. Chorus flowers progress through ages 0-5, becoming fully purple at age 5. At age 5, the flower stops growing and drops one chorus fruit when harvested, resetting the cycle when replanted. Flowers at ages 0-4 drop themselves when broken. A chorus flower grows upward until age 5 or encountering air, then may branch sideways."
    },
    "minecraft:end_portal_frame": {
        id: "minecraft:end_portal_frame",
        name: "End Portal Frame",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds (End Portal room)"
        },
        description: "An End Portal Frame is a block found in Strongholds that forms the End Portal. It is indestructible in survival mode. Players must place Eyes of Ender into the frames to activate the portal to the End. When 12 frames are placed in a 5x5 ring (corners omitted) and filled with eyes, the portal activates."
    },
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        hardness: 3.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: true,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dragon Egg"],
        generation: {
            dimension: "The End",
            yRange: "Top of exit portal"
        },
        description: "§5The Dragon Egg is a rare trophy block and the rarest item in Minecraft, generating only once atop the exit portal after defeating the Ender Dragon. When interacted with in Survival, it teleports to a nearby location. To collect it, players must make it fall as an entity onto a non-solid block like a torch. It emits a faint light level of 1 and is affected by gravity."
    },
    "minecraft:chorus_plant": {
        id: "minecraft:chorus_plant",
        name: "Chorus Plant",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Chorus Fruit (0-1)"],
        generation: {
            dimension: "The End",
            yRange: "Outer End islands"
        },
        description: "§dChorus Plants are tree-like structures found throughout the outer islands of the End. They grow from Chorus Flowers and can reach great heights, branching out in various directions. Breaking a base block causes the entire structure above it to collapse. They primarily drop Chorus Fruit, which can be eaten to teleport or popped in a furnace for crafting End Rods and Purpur Blocks."
    }
};
