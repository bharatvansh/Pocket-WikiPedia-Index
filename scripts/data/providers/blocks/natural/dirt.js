// Pocket Wikipedia Foundation - Dirt & Soil Blocks Data
// ============================================
// This file contains: Dirt, coarse dirt, rooted dirt, grass block,
// podzol, mycelium, mud, packed mud, muddy mangrove roots,
// clay, gravel, sand, red sand, soul sand, soul soil,
// farmland, dirt path
// ============================================

/**
 * Dirt and soil blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const dirtBlocks = {
    "minecraft:dirt": {
        id: "minecraft:dirt",
        name: "Dirt",
        hardness: 0.5,
        blastResistance: 0.5,
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
    "minecraft:mud": {
        id: "minecraft:mud",
        name: "Mud",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mud"],
        generation: {
            dimension: "Overworld",
            yRange: "Mangrove Swamp Biome"
        },
        description: "Mud is a decorative block found naturally in mangrove swamps. It can also be created by using a water bottle on a dirt block. When placed on top of a block with pointed dripstone underneath, it eventually dries out and converts into clay. It slightly sinks entities that walk on it, similar to soul sand but without the slowing effect."
    },
    "minecraft:packed_mud": {
        id: "minecraft:packed_mud",
        name: "Packed Mud",
        hardness: 1.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Packed Mud"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Packed Mud is a building block crafted from mud and wheat. It is used as a decorative block or as an ingredient to craft mud bricks. Unlike regular mud, entities do not sink into packed mud, and it is mined faster with a pickaxe rather than a shovel."
    },
    "minecraft:clay_block": {
        id: "minecraft:clay_block",
        name: "Clay Block",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Clay"],
        generation: {
            dimension: "Overworld",
            yRange: "Bodies of water, beaches, and clay deposits"
        },
        description: "Clay Block is a natural building material found abundantly underwater in rivers, lakes, and beaches. It drops clay balls when mined, which can be smelted into bricks or used to craft flower pots. Clay blocks can be found near water sources and generate in clusters up to 8 blocks. Each clay block yields 4 clay balls when broken. Clay blocks are essential for creating terracotta and various decorative building materials, making them valuable for construction projects that require warm, earthy tones."
    },
    "minecraft:suspicious_sand": {
        id: "minecraft:suspicious_sand",
        name: "Suspicious Sand",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: true,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Desert Pyramids, Desert Wells, and Warm Ocean Ruins"
        },
        description: "Suspicious sand is a fragile, gravity-affected block found in various structures like desert pyramids and warm ocean ruins. Using a brush on naturally generated suspicious sand reveals hidden items, such as pottery sherds, emeralds, or sniffer eggs. Once the brushing process is complete, the block turns into regular sand, and if broken or moved by a piston, it drops nothing."
    },
    "minecraft:suspicious_gravel": {
        id: "minecraft:suspicious_gravel",
        name: "Suspicious Gravel",
        hardness: 0.25,
        blastResistance: 0.25,
        flammability: false,
        gravityAffected: true,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Trail Ruins and Cold Ocean Ruins"
        },
        description: "Suspicious gravel is a fragile, gravity-affected block found in Trail Ruins and Cold Ocean Ruins. Using a brush on naturally generated suspicious gravel reveals hidden items, including pottery sherds, emeralds, wheat, and various tools. The brushing process takes 4.8 seconds, after which the block converts to regular gravel. Suspicious gravel drops nothing if broken or moved, and naturally generated blocks must be brushed to obtain loot."
    },
    "minecraft:muddy_mangrove_roots": {
        id: "minecraft:muddy_mangrove_roots",
        name: "Muddy Mangrove Roots",
        hardness: 0.7,
        blastResistance: 0.7,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Muddy Mangrove Roots"],
        generation: {
            dimension: "Overworld",
            yRange: "Mangrove Swamp biome"
        },
        description: "Muddy Mangrove Roots are a natural block found in Mangrove Swamp biomes, formed when mangrove roots grow into mud blocks. They can also be crafted by combining a mud block with mangrove roots. Unlike regular mangrove roots, this variant is not flammable and is most efficiently mined using a shovel rather than an axe. It serves as a decorative block that blends the earthy texture of mud with the fibrous look of wood, making it ideal for terraforming and building in swampy environments. It is a full solid block and can be used to support other structures."
    },
    "minecraft:rooted_dirt": {
        id: "minecraft:rooted_dirt",
        name: "Rooted Dirt",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Rooted Dirt"],
        generation: {
            dimension: "Overworld",
            yRange: "Below Azalea trees"
        },
        description: "Rooted Dirt is a decorative block that generates naturally under azalea trees, indicating the presence of a lush cave below. Unlike regular dirt, grass cannot grow on it. Using a hoe on rooted dirt will turn it into regular dirt and drop a hanging roots item. Using bone meal on rooted dirt causes hanging roots to grow beneath it if there is air below."
    },
    "minecraft:sand": {
        id: "minecraft:sand",
        name: "Sand",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: true,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Sand"],
        generation: {
            dimension: "Overworld",
            yRange: "Surface (Beaches, Deserts, Riverbeds)"
        },
        description: "Sand is a gravity-affected block found naturally in deserts, beaches, and riverbeds. It is essential for crafting glass, sandstone, and concrete powder. When unsupported, sand falls until it hits a solid block or entity."
    },
    "minecraft:gravel": {
        id: "minecraft:gravel",
        name: "Gravel",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: true,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Gravel", "Flint"],
        generation: {
            dimension: "Overworld",
            yRange: "Any (Surface, Underground, Nether)"
        },
        description: "Gravel is a gravity-affected block found in the Overworld and the Nether. When mined, it has a 10% chance to drop Flint instead of itself, which is used to craft arrows and flint and steel. Gravel is also used to craft coarse dirt and concrete powder."
    },
    "minecraft:mycelium": {
        id: "minecraft:mycelium",
        name: "Mycelium",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shovel",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Dirt"],
        generation: {
            dimension: "Overworld",
            yRange: "Mushroom Fields Biome"
        },
        description: "Mycelium is a variant of the grass block found exclusively in Mushroom Fields biomes. It spreads to adjacent dirt blocks and allows mushrooms to grow in any light level. It emits tiny spores as particles. Mining it without Silk Touch yields Dirt."
    }
};
