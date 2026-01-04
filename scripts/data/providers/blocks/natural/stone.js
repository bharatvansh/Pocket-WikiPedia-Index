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
    "minecraft:tuff": {
        id: "minecraft:tuff",
        name: "Tuff",
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
        drops: ["Tuff"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 0"
        },
        description: "Tuff is an ornamental stone that generates in the Overworld as large underground ore-blob deposits and as part of iron ore veins below Y=0. It drops itself when mined with any pickaxe, but drops nothing if broken without one. Tuff is also used as a base material for multiple building variants, and can be stonecut into polished, brick, chiseled, slab, stair, and wall forms."
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
    "minecraft:calcite": {
        id: "minecraft:calcite",
        name: "Calcite",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Calcite"],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes (Y -58 to 30) and Stony Peaks"
        },
        description: "Calcite is a decorative carbonate mineral block that generates naturally as part of amethyst geodes, appearing between the smooth basalt outer layer and the amethyst cluster inner layer. It also forms in strips within stony peaks biomes. With a hardness of 0.75 and blast resistance of 0.75, calcite is relatively soft and requires only a wooden pickaxe or better to mine. The block has a distinctive white, marble-like appearance that makes it popular for building clean, modern structures and decorative accents. Calcite can be used in note blocks to produce a unique \"base drum\" sound when placed beneath them."
    },
    "minecraft:mossy_cobblestone": {
        id: "minecraft:mossy_cobblestone",
        name: "Mossy Cobblestone",
        hardness: 2.0,
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
        drops: ["Mossy Cobblestone"],
        generation: {
            dimension: "Overworld",
            yRange: "Monster Rooms, Jungle Pyramids, Pillager Outposts, Ocean Ruins, Villages, Old Growth Taiga, Trial Chambers"
        },
        description: "Mossy Cobblestone is a decorative variant of cobblestone with green moss patches on its surface, giving it an aged and weathered appearance. It occurs naturally in monster rooms, jungle pyramids, pillager outposts, cold ocean ruins, plains and taiga villages, old growth pine and spruce taiga biomes as forest rocks, and around trial spawners in trial chambers. Players can also craft it by combining one cobblestone block with one moss block, or by combining vine with cobblestone in Bedrock Edition. With a hardness of 2.0 and blast resistance of 6.0, it provides the same durability as regular cobblestone while offering a more natural, rustic aesthetic perfect for medieval builds, ancient ruins, and garden structures."
    },
    "minecraft:pointed_dripstone": {
        id: "minecraft:pointed_dripstone",
        name: "Pointed Dripstone",
        hardness: 1.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pointed Dripstone"],
        generation: {
            dimension: "Overworld",
            yRange: "Dripstone caves (Y -59 to 64) and Trial Chambers"
        },
        description: "Pointed Dripstone forms stalactites pointing downward from dripstone blocks and stalagmites pointing upward from surfaces. It generates naturally in dripstone caves and Trial Chambers, and can be purchased from wandering traders. Stalactites fall as damaging projectiles when broken, while stalagmites deal extra damage to entities landing on them. When water is above a stalactite, it drips water or lava particles into cauldrons below. Pointed dripstone grows slowly from stalagmites toward stalactites when water is above dripstone block. This decorative block creates cave-like atmospheres."
    },
    "minecraft:bedrock": {
        id: "minecraft:bedrock",
        name: "Bedrock",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld, The Nether, The End",
            yRange: "Various",
            naturalGeneration: "Overworld: Y=-64; The Nether: Y=0-4, 123-127; The End: Portals, Gateways, and Pillars"
        },
        description: "Bedrock is an indestructible block that forms the boundary of the world in all three dimensions. In the Overworld, it generates as a single flat layer at Y=-64 since the 1.18 update. In the Nether, it forms both the floor (Y=0-4) and ceiling (Y=123-127), while in the End, it generates naturally as part of exit portals, end gateways, and obsidian pillars. It is immune to all survival-mode mining and explosions, ensuring players stay within the intended play area unless using creative mode."
    }
};
