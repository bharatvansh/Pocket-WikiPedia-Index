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
    "minecraft:cobblestone": {
        id: "minecraft:cobblestone",
        name: "Cobblestone",
        hardness: 2.0,
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
            yRange: "Caves, underground (Y -64 to 320), dungeons, abandoned mineshafts"
        },
        description: "Cobblestone is one of the most fundamental building blocks in Minecraft, obtained by mining stone with any pickaxe. It generates abundantly in caves, dungeons, and underground structures throughout the Overworld. With excellent durability (hardness 2.0, blast resistance 6.0), cobblestone is the primary building material for early-game construction, offering superior protection against hostile mobs and explosions. It's essential for crafting stone tools, furnaces, and can be smelted back into stone. The rough, gray appearance makes it perfect for fortress-style builds, walls, and practical structures where aesthetics are secondary to function."
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
            yRange: "Underground in large ore-like blobs (Y 0 to 79), Stony Peaks"
        },
        description: "Andesite is a common igneous rock that generates underground in large ore-like blobs between Y 0 and 79, and in stony peaks biomes. In Bedrock Edition, andesite can replace other stone variants and generates in coral reefs. Requires a wooden pickaxe to mine. Craftable by combining diorite and cobblestone. Can be polished and crafted into slabs, stairs, and walls for versatile building."
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
            yRange: "Underground in large ore-like blobs (Y 0 to 79), Stony Peaks"
        },
        description: "Diorite is a grayish-white igneous rock generating underground in large ore-like blobs between Y 0 and 79, plus stony peaks biomes. In Bedrock Edition, replaces other stone variants and appears in coral reefs. Requires a wooden pickaxe to mine. Crafted from two cobblestone and one nether quartz. Can be polished and made into slabs, stairs, and walls."
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
            yRange: "Underground in large ore-like blobs (Y 0 to 79), Stony Peaks"
        },
        description: "Granite is a pinkish-brown igneous rock generating underground in large ore-like blobs between Y 0 and 79, and in stony peaks biomes. In Bedrock Edition, replaces other stone variants. Requires a wooden pickaxe to mine. Crafted from diorite and nether quartz. Can be polished and crafted into slabs, stairs, and walls. Popular for warm-toned builds."
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
    "minecraft:dripstone_block": {
        id: "minecraft:dripstone_block",
        name: "Dripstone Block",
        hardness: 1.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dripstone Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Dripstone caves (Y -59 to 64) and Trial Chambers"
        },
        description: "The Dripstone Block is a natural stone block found in dripstone caves and Trial Chambers that allows pointed dripstone to grow beneath it. When water is placed above it, stalactites and stalagmites form over time. Dripstone blocks can be mined with any pickaxe tier, dropping themselves when broken. They are primarily used for decoration and creating natural cave aesthetics. When water drips from stalactites, they can fill cauldrons below with water or lava depending on the source block."
    },
    "minecraft:blue_ice": {
        id: "minecraft:blue_ice",
        name: "Blue Ice",
        hardness: 2.8,
        blastResistance: 2.8,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Blue Ice (with Silk Touch) or Nothing (without)"],
        generation: {
            dimension: "Overworld",
            yRange: "Frozen Ocean biomes, Iceberg bottoms, Snowy Tundra village houses (9.9%), Ancient Cities"
        },
        description: "Blue Ice is a rare solid block found in frozen ocean biomes, forming as arching structures on iceberg bottoms. It rarely generates as entire icebergs made of blue ice, and appears in snowy tundra village houses and ancient cities. Blue Ice is the slipperiest ice variant, causing entities to slide at extremely high speeds. Crafted from nine packed ice blocks in a 3x3 grid, making it renewable. Mining requires a Silk Touch tool to obtain the block itself; otherwise it drops nothing. In Bedrock Edition, boats on blue ice travel at maximum speed."
    },
    "minecraft:infested_stone": {
        id: "minecraft:infested_stone",
        name: "Infested Stone",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Stone (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Mountain biomes, Igloos"
        },
        description: "Infested Stone is a deceptive block that looks identical to regular stone but hides a Silverfish inside. When broken in Survival mode, it doesn't drop anything and instead releases a hostile Silverfish that attacks the player. These blocks are commonly found in strongholds, mountain biomes, and underneath igloos. In Bedrock Edition, they can be identified because they break faster than normal stone. Using a tool with Silk Touch allows the player to retrieve a normal stone block without spawning the creature."
    },
    "minecraft:infested_deepslate": {
        id: "minecraft:infested_deepslate",
        name: "Infested Deepslate",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Deepslate (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Deepslate layers (below Y 0), Strongholds"
        },
        description: "Infested Deepslate is a variant of deepslate that houses a Silverfish. Like other infested blocks, it looks identical to its non-infested counterpart but can be distinguished in Bedrock Edition by how quickly it breaks (~0.75 hardness vs 3.0+ for normal deepslate). When broken without Silk Touch, it releases a Silverfish and drops no item. It generates naturally in deepslate layers and within strongholds. It provides a dangerous surprise for miners working in the deep dark layers of the Overworld."
    },
    "minecraft:infested_cobblestone": {
        id: "minecraft:infested_cobblestone",
        name: "Infested Cobblestone",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Cobblestone (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Igloos, Mountain biomes"
        },
        description: "Infested Cobblestone is a block that contains a silverfish and looks exactly like regular cobblestone. In Bedrock Edition, it can be distinguished by the fact that it breaks instantly even by hand, whereas regular cobblestone takes longer. When broken, it releases a silverfish and drops nothing unless a tool with Silk Touch is used, which will drop a regular cobblestone block. It generates naturally in strongholds, under some igloos, and in mountain biomes."
    },
    "minecraft:infested_mossy_stone_bricks": {
        id: "minecraft:infested_mossy_stone_bricks",
        name: "Infested Mossy Stone Bricks",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Mossy Stone Bricks (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds"
        },
        description: "Infested Mossy Stone Bricks are a variation of stone bricks infested with silverfish. They look identical to normal mossy stone bricks but break significantly faster in Bedrock Edition. When broken without Silk Touch, they release a hostile silverfish and drop no item. They are found exclusively in strongholds, serving as a trap for unsuspecting players exploring the ancient structures."
    },
    "minecraft:infested_tuff": {
        id: "minecraft:infested_tuff",
        name: "Infested Tuff",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Tuff (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Trial Chambers"
        },
        description: "Infested Tuff is another infested block variant introduced to house silverfish. It mimics the appearance of regular tuff blocks but is distinguished by its lower durability and the silverfish that emerges when disturbed. In Bedrock Edition, the faster breaking speed is a tell-tale sign of its infestation. It is typically found in structures where silverfish are common, like strongholds."
    },
    "minecraft:polished_deepslate": {
        id: "minecraft:polished_deepslate",
        name: "Polished Deepslate",
        hardness: 3.5,
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
        drops: ["Polished Deepslate"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "Polished Deepslate is a decorative building block crafted from four cobbled deepslate blocks or created via a stonecutter. It has a smooth, dark gray texture that serves as a refined version of deepslate, making it excellent for flooring, walls, and structural accents. It generates naturally in Ancient Cities. Like other deepslate variants, it has a high hardness (3.5) and blast resistance (6.0), providing durability comparable to stone products. It can be further crafted into deepslate bricks, deepslate tiles, or polished deepslate walls, stairs, and slabs."
    },
    "minecraft:smooth_stone": {
        id: "minecraft:smooth_stone",
        name: "Smooth Stone",
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
        drops: ["Smooth Stone"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, some structures"
        },
        description: "Smooth Stone is a variation of stone with a smoother texture. It can be obtained by smelting stone in a furnace. Smooth Stone is often found in villages and is used to craft blast furnaces, armor stands, and smooth stone slabs. It has the same blast resistance as regular stone but a distinct, clean appearance favored for building floors and borders."
    },
    "minecraft:chiseled_deepslate": {
        id: "minecraft:chiseled_deepslate",
        name: "Chiseled Deepslate",
        hardness: 3.5,
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
        drops: ["Chiseled Deepslate"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "Chiseled Deepslate is a decorative variant of deepslate featuring a dark, engraved pattern. It can be crafted from cobbled deepslate slabs or created using a stonecutter. Chiseled Deepslate naturally generates in Ancient Cities. With high hardness and blast resistance, it serves as a durable and stylish building block, often used to add detail to deepslate structures, pillars, and floors."
    },
    "minecraft:polished_granite": {
        id: "minecraft:polished_granite",
        name: "Polished Granite",
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
        drops: ["Polished Granite"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Polished Granite is a decorative mineral block. It is the polished version of Granite. It can be found in Trail Ruins or crafted by arranging 4 Granite in a 2x2 grid. It has the same blast resistance as stone."
    },
    "minecraft:polished_diorite": {
        id: "minecraft:polished_diorite",
        name: "Polished Diorite",
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
        drops: ["Polished Diorite"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Polished Diorite is a decorative mineral block. It is the polished version of Diorite. It can be found in Trail Ruins or crafted by arranging 4 Diorite in a 2x2 grid. It has the same blast resistance as stone."
    },
    "minecraft:polished_andesite": {
        id: "minecraft:polished_andesite",
        name: "Polished Andesite",
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
        drops: ["Polished Andesite"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Polished Andesite is a decorative mineral block. It is the polished version of Andesite. It can be found in Trail Ruins, Ancient Cities, and Woodland Mansions, or crafted by arranging 4 Andesite in a 2x2 grid. It has the same blast resistance as stone."
    },
    "minecraft:cobbled_deepslate": {
        id: "minecraft:cobbled_deepslate",
        name: "Cobbled Deepslate",
        hardness: 3.5,
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
        drops: ["Cobbled Deepslate"],
        generation: {
            dimension: "Overworld",
            yRange: "Deepslate layers (below Y 0)"
        },
        description: "Cobbled Deepslate is a rough stone variant obtained by mining Deepslate with a pickaxe. It shares the dark gray aesthetic of Deepslate but with a fractured texture. With a hardness of 3.5 and blast resistance of 6.0, it is tougher than regular cobblestone. It is used to craft stone tools, furnaces, and brewing stands, and can be smelted back into Deepslate or crafted into Polished Deepslate."
    },
    "minecraft:bedrock": {
        id: "minecraft:bedrock",
        name: "Bedrock",
        hardness: -1.0,
        blastResistance: 3600000.0,
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
            dimension: "Overworld, Nether, End",
            yRange: "-64 to -60 (Overworld), 0-4 & 123-127 (Nether)"
        },
        description: "Bedrock is an indestructible block that forms the boundary of the world. It generates at the very bottom of the Overworld and both the top and bottom of the Nether, preventing players from falling into the void or escaping the dimension's confines. While it can be viewed and used as a foundation in Creative mode, it is impossible to mine or destroy in Survival mode without using glitches. It also serves as the primary component of the End's exit portal and gateway structures, providing a permanent frame for these essential inter-dimensional travel points."
    },
    "minecraft:invisible_bedrock": {
        id: "minecraft:invisible_bedrock",
        name: "Invisible Bedrock",
        hardness: -1.0,
        blastResistance: 3600000.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "None (Technical block)"
        },
        description: "Invisible Bedrock is a technical block in Minecraft Bedrock Edition that serves as an indestructible, transparent barrier. Historically used to define the boundaries of 'Old' world types, it prevents players from venturing beyond the playable area. It is completely invisible to the eye but behaves physically like standard Bedrock, making it impossible to mine or destroy in Survival mode. While mostly legacy, it remains in the game's code and can still be encountered in older world saves or placed via commands."
    },
    "minecraft:infested_stone_bricks": {
        id: "minecraft:infested_stone_bricks",
        name: "Infested Stone Bricks",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Stone Bricks (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Igloos, Mountain biomes"
        },
        description: "Infested Stone Bricks are deceptive blocks that look exactly like regular stone bricks but house a Silverfish. In Bedrock Edition, they can be distinguished by their lower hardness (0.75), causing them to break faster than normal stone bricks. When broken, they drop nothing and release a hostile silverfish that attacks the player. They can be found in strongholds, igloo basements, and mountain biomes. Using a tool with Silk Touch allows the player to retrieve normal stone bricks instead of spawning the creature."
    },
    "minecraft:infested_cracked_stone_bricks": {
        id: "minecraft:infested_cracked_stone_bricks",
        name: "Infested Cracked Stone Bricks",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Cracked Stone Bricks (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Igloos"
        },
        description: "Infested Cracked Stone Bricks are a variant of infested blocks that mimic cracked stone bricks. These blocks are most commonly found in strongholds and igloo basements. They appear identical to their non-infested counterparts but are much easier to break. Upon being mined without Silk Touch, a Silverfish will emerge to defend its territory. This block serves as a dangerous trap for players exploring subterranean structures, requiring caution when mining suspicious-looking bricks in these specific environments."
    },
    "minecraft:infested_chiseled_stone_bricks": {
        id: "minecraft:infested_chiseled_stone_bricks",
        name: "Infested Chiseled Stone Bricks",
        hardness: 0.75,
        blastResistance: 0.75,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["None (spawns Silverfish), Chiseled Stone Bricks (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Igloos"
        },
        description: "Infested Chiseled Stone Bricks contain a hidden Silverfish and perfectly imitate the decorative appearance of chiseled stone bricks. They generate naturally in strongholds and underneath igloos. In Bedrock Edition, their unique property of breaking faster than normal decorative stone is the only way to detect them before they are broken. If a player mines this block without the Silk Touch enchantment, it will vanish and unleash a hostile Silverfish. They are often used in the architecture of ancient structures to deter intruders."
    }
};
