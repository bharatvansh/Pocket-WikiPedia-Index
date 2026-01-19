// Pocket Wikipedia Foundation - Plank Blocks Data
// ============================================
// This file contains: All wood plank types (oak, spruce, birch,
// jungle, acacia, dark oak, mangrove, cherry, pale oak, bamboo,
// crimson, warped)
// ============================================

/**
 * Plank blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const plankBlocks = {
    "minecraft:cherry_planks": {
        id: "minecraft:cherry_planks",
        name: "Cherry Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Logs"
        },
        description: "Cherry Planks are a pink-toned building material introduced in the 1.20 update. Crafted from cherry logs found in cherry grove biomes, they offer a warm pink palette ideal for vibrant or sakura-themed builds. Like other wood types, they can be crafted into stairs, slabs, doors, fences, boats, and signs. Despite their delicate appearance, they share the same hardness and blast resistance as other wood planks, making them both decorative and functional. These planks are perfect for adding a natural splash of color to any construction project."
    },
    "minecraft:pale_oak_planks": {
        id: "minecraft:pale_oak_planks",
        name: "Pale Oak Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Logs"
        },
        description: "Pale Oak Planks are crafted from Pale Oak Logs found in the eerie Pale Garden biome. Featuring a muted, desaturated palette of pale cream to light gray, they stand out from warmer wood types. Introduced in update 1.21.50, these planks are essential for crafting pale oak stairs, slabs, doors, and fences. Their ghostly aesthetic is perfect for atmospheric builds, spectral mansions, or any project needing a somber, weathered wood look."
    },
    "minecraft:bamboo_mosaic": {
        id: "minecraft:bamboo_mosaic",
        name: "Bamboo Mosaic",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Mosaic"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Slabs"
        },
        description: "Bamboo Mosaic is a unique decorative variant of the bamboo wood set, featuring a distinct checkered pattern. Introduced in Minecraft 1.20, it provides a specialized aesthetic that differs from regular bamboo planks. It is crafted by arranging two bamboo slabs in a vertical line. This block can be further crafted into bamboo mosaic stairs and slabs, allowing for intricate and stylized architectural designs. While it shares the same physical properties as other planks, its unique texture makes it ideal for modern or Eastern-inspired builds."
    },
    "minecraft:bamboo_planks": {
        id: "minecraft:bamboo_planks",
        name: "Bamboo Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Block of Bamboo"
        },
        description: "Bamboo Planks are a wood-like building material introduced in the 1.20 update. Crafted from blocks of bamboo, these planks have a unique light yellow color and linear texture. They can be used to craft bamboo-themed items like stairs, slabs, doors, fences, and the bamboo raft. While they function like other wood in terms of durability, their exotic appearance makes them ideal for tropical or modern designs. They provide a versatile alternative for builders seeking a fresh aesthetic, and their inclusion adds more variety to the game's wood-based construction options."
    },
    "minecraft:pale_oak_bricks": {
        id: "minecraft:pale_oak_bricks",
        name: "Pale Oak Bricks",
        hardness: 2.0,
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
        drops: ["Pale Oak Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "Pale Oak Bricks are refined building materials from Minecraft Bedrock 1.21.50's Pale Garden update. Crafted from four pale oak planks in a 2x2 grid, they feature the signature muted, ghostly gray-brown color with a classic brick pattern. Unlike standard wood, they are not flammable, making them valuable for fire-resistant construction in the eerie Pale Garden biome. They can be further crafted into stairs, slabs, and walls, perfect for atmospheric builds."
    },
    "minecraft:pale_oak_stairs": {
        id: "minecraft:pale_oak_stairs",
        name: "Pale Oak Stairs",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Stairs"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "Pale Oak Stairs are versatile building components from Minecraft Bedrock 1.21.50. Crafted from six pale oak planks, they create elegant transitions in builds. The muted, desaturated color palette creates an ethereal, ghostly atmosphere perfect for spectral mansions or atmospheric structures. Like all wooden stairs, they work with slabs for trapdoors and pair with other pale oak pieces. Their standard wood hardness and blast resistance make them practical for general construction."
    },
    "minecraft:warped_planks": {
        id: "minecraft:warped_planks",
        name: "Warped Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Planks"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Stem"
        },
        description: "Warped Planks are a wood-type building block native to the Nether's Warped Forest. They are crafted from warped stems or hyphae. One of their most significant properties is being completely fire-resistant, making them an excellent choice for construction in the Nether or near lava. They feature a unique turquoise-teal color that doesn't exist in Overworld wood sets. Like other planks, they can be crafted into various subsets like stairs, slabs, fences, and doors. Despite being 'wood', they do not burn and cannot be used as fuel in a furnace."
    },
    "minecraft:crimson_planks": {
        id: "minecraft:crimson_planks",
        name: "Crimson Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Planks"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Crimson Stem"
        },
        description: "Crimson Planks are the fire-resistant counterpart to Warped Planks, found in the Nether's Crimson Forest. They are crafted from crimson stems or hyphae and possess a deep burgundy-red color. Like their warped cousins, crimson planks are impervious to fire and lava, making them ideal for hazardous environments. They provide a unique gothic aesthetic to builds and can be used to craft a full set of crimson-colored wooden items. They are a vital resource for players establishing permanent bases in the Nether who want to avoid the risks of traditional wood."
    },
    "minecraft:mangrove_planks": {
        id: "minecraft:mangrove_planks",
        name: "Mangrove Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A"
        },
        description: "Mangrove Planks are a deep red building material harvested from Mangrove trees in the Mangrove Swamp biome. They were introduced in the 1.19 Wild Update. Like other wood types, they are versatile and can be crafted into stairs, slabs, doors, and fences. Their rich coloration makes them a favorite for adding bold accents to builds, especially in tropical or nautical themes. They share the same physical properties as other wood planks, offering both durability and aesthetic appeal for a wide range of construction projects."
    },
    "minecraft:oak_planks": {
        id: "minecraft:oak_planks",
        name: "Oak Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oak Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Oak Logs"
        },
        description: "Oak Planks are a staple building block in Minecraft, crafted from Oak Logs found in forests. Featuring a classic light brown hue, they are the most common wood variety and serve as the foundation for countless builds. These versatile planks can be used to craft basic essentials like crafting tables, chests, boats, and tools. They are flammable and easily broken with an axe, but provide a sturdy and aesthetically pleasing material for homes and structures. Whether you are a beginner or a veteran builder, Oak Planks remain an essential part of any survival journey."
    },
    "minecraft:spruce_planks": {
        id: "minecraft:spruce_planks",
        name: "Spruce Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Spruce Logs"
        },
        description: "Spruce Planks are a dark, rich brown building material crafted from Spruce Logs, primarily found in Taiga and Snowy biomes. Their deep coloration often makes them a favorite for rustic, medieval, or mountain-themed architecture. Like all wooden planks, they are versatile enough to be crafted into stairs, slabs, doors, and fences, maintaining a cohesive dark aesthetic across all wooden components. Spruce trees are known for their height and density, providing an abundant source of this wood. These planks are flammable but offer reliable durability for any construction."
    },
    "minecraft:birch_planks": {
        id: "minecraft:birch_planks",
        name: "Birch Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Logs"
        },
        description: "Birch Planks are a light, cream-colored building block crafted from Birch Logs, commonly found in Birch Forests. Their pale, almost white appearance provides a bright and clean look, making them ideal for modern interior designs or as a high-contrast accent against darker materials. Birch wood is widely utilized for its pleasant aesthetic and is fully compatible with all wood-based crafting recipes, including sticks and tools. While they share the same flammability and hardness as other planks, their distinctive brightness sets them apart in the game's diverse wood palette."
    },
    "minecraft:jungle_planks": {
        id: "minecraft:jungle_planks",
        name: "Jungle Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Logs"
        },
        description: "Jungle Planks are derived from the massive Jungle trees found in tropical biomes. They feature a unique pinkish-orange tint that distinguishes them from more traditional wood types like Oak or Spruce. Harvested in lush, vine-covered environments, these planks are perfect for tropical-themed builds, treehouses, or adding a warmer tone to a structure. They function identically to other planks in terms of crafting versatility and durability, allowing for the creation of unique stairs and boats. Their vibrant color captures the essence of the dense jungles they originate from."
    },
    "minecraft:acacia_planks": {
        id: "minecraft:acacia_planks",
        name: "Acacia Planks",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Planks"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Logs"
        },
        description: "Acacia Planks are recognized for their bold, vibrant orange color, crafted from Acacia Logs found in the Savanna biome. Their striking appearance makes them a popular choice for unique architectural designs or as a contrasting floor material. Acacia trees grow in distinct, umbrella-like shapes, reflecting the harsh but beautiful environment of the savanna. These planks provide all the standard utility of wood, including fire susceptibility and ease of mining with an axe. Their intense hue adds a touch of the exotic to any landscape, providing a warm and inviting feel to builds."
    }
};
