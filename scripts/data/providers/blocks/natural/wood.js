// Pocket Wikipedia Foundation - Wood & Log Blocks Data
// ============================================
// This file contains: All log types (oak, spruce, birch, jungle,
// acacia, dark oak, mangrove, cherry, pale oak, crimson stem,
// warped stem), stripped logs, wood blocks, stripped wood,
// leaves (all types), bamboo block, bamboo mosaic
// ============================================

/**
 * Wood and log blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const woodBlocks = {
    "minecraft:pale_oak_log": {
        id: "minecraft:pale_oak_log",
        name: "Pale Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "63 to 100"
        },
        description: "Pale Oak Log is a wood type unique to the Pale Garden biome, introduced in Minecraft Bedrock Edition 1.21.50. These pale, grayish-brown logs form the trunks of Pale Oak trees, creating an eerie atmosphere with their muted coloration. Like other logs, they can be stripped with an axe and crafted into pale oak planks, stripped pale oak logs, or pale oak wood. The distinctive appearance of pale oak makes it popular for atmospheric builds, especially those seeking a ghostly or mystical aesthetic."
    },
    "minecraft:stripped_pale_oak_log": {
        id: "minecraft:stripped_pale_oak_log",
        name: "Stripped Pale Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Pale Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Axe on Pale Oak Log"
        },
        description: "Stripped Pale Oak Log is a wood variant created by using an axe on a Pale Oak Log, introduced in Minecraft 1.21.50. This process removes the grayish-brown bark, revealing the smooth, nearly white interior wood. It is commonly used as a clean building material for modern or atmospheric designs in the Pale Garden. Like other stripped wood, it can be crafted into pale oak planks, hanging signs, or wood blocks. Its spectral highlight makes it a favorite for builders looking to create high-contrast or eerie structures."
    },
    "minecraft:pale_oak_leaves": {
        id: "minecraft:pale_oak_leaves",
        name: "Pale Oak Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Leaves"],
        generation: {
            dimension: "Overworld",
            yRange: "63 to 100"
        },
        description: "Pale Oak Leaves are the distinctive foliage of Pale Oak trees in the Pale Garden biome, added in Minecraft Bedrock Edition 1.21.50. These pale gray leaves create a ghostly canopy that filters light uniquely compared to other tree types. When broken with shears, they drop the leaf block itself for easy collection. The muted color palette of pale oak leaves makes them ideal for creating ethereal forest landscapes, spectral garden builds, or adding subtle contrast to other biomes."
    },
    "minecraft:cherry_log": {
        id: "minecraft:cherry_log",
        name: "Cherry Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Log"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 192"
        },
        description: "Cherry logs are obtained from cherry trees found in the vibrant cherry grove biome. They feature a unique dark purple bark and a beautiful pinkish interior, making them highly desirable for decorative building. Like other logs, they can be crafted into cherry planks, stripped to create stripped cherry logs, or used as fuel in a furnace."
    },
    "minecraft:mangrove_log": {
        id: "minecraft:mangrove_log",
        name: "Mangrove Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Log"],
        generation: {
            dimension: "Overworld",
            yRange: "63 to 70"
        },
        description: "Mangrove Logs are obtained from Mangrove trees found in Mangrove Swamps. They have a dark brown bark and a deep red interior. Like other logs, they can be crafted into planks or stripped with an axe. Their unique color makes them excellent for building."
    },
    "minecraft:bamboo_block": {
        id: "minecraft:bamboo_block",
        name: "Block of Bamboo",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Block of Bamboo"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "A block of bamboo is a wood-like block crafted from nine bamboo items. It functions similarly to other logs, meaning it can be stripped with an axe to create stripped bamboo blocks or crafted into bamboo planks. It features a unique segmented appearance."
    },
    "minecraft:cherry_leaves": {
        id: "minecraft:cherry_leaves",
        name: "Cherry Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Cherry Sapling", "Stick", "Cherry Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 192"
        },
        description: "Cherry Leaves are the beautiful pink foliage of cherry trees found in the cherry grove biome. They drop pink petals that create a unique atmosphere around the tree. These leaves have a low hardness and blast resistance, and they are highly flammable. When broken without shears or silk touch, they have a small chance of dropping cherry saplings and sticks. In Bedrock Edition, they were added as part of the 1.20 Trails & Tales update, bringing a vibrant and aesthetic touch to any landscape or garden build."
    },
    "minecraft:stripped_bamboo": {
        id: "minecraft:stripped_bamboo",
        name: "Block of Stripped Bamboo",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Block of Stripped Bamboo"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "The Block of Stripped Bamboo is created by using an axe on a regular Block of Bamboo. It features the same segmented texture but without the bark, revealing a smoother interior. Introduced in 1.19, it can be crafted into bamboo planks or used decoratively. Like all bamboo blocks, it is highly flammable with hardness and blast resistance of 2.0. Its unique linear pattern distinguishes it from traditional log-based blocks, making it ideal for exotic Asian-inspired architectural designs."
    },
    "minecraft:warped_stem": {
        id: "minecraft:warped_stem",
        name: "Warped Stem",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Stem"],
        generation: {
            dimension: "Nether",
            yRange: "Warped Forest"
        },
        description: "Warped Stem is a turquoise-colored, log-like block found in the Warped Forest biome of the Nether. Unlike Overworld logs, warped stems are fire-resistant and do not burn. They serve as the 'wood' of the huge fungi in the biome. They can be stripped using an axe to create Stripped Warped Stem, or crafted into Warped Planks. The animated texture of the stem pulses slightly, adding a unique alien feel to builds."
    },
    "minecraft:warped_hyphae": {
        id: "minecraft:warped_hyphae",
        name: "Warped Hyphae",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Warped Hyphae"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted from Warped Stems"
        },
        description: "Warped Hyphae is a wood-like block that has the warped stem's bark texture on all six sides. It is fire-resistant and pulses with a dark aqua color. Unlike many other nether blocks, it can be crafted into warped planks or used as a decorative building block. It is essentially the 'wood' version of the warped stem, allowing for consistent bark textures on all sides of a pillar or structure."
    },
    "minecraft:stripped_warped_hyphae": {
        id: "minecraft:stripped_warped_hyphae",
        name: "Stripped Warped Hyphae",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Warped Hyphae"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Stripped Warped Hyphae is a teal-colored, fire-resistant block that displays the smooth, stripped texture of warped stem on all six faces. It can be obtained by crafting four stripped warped stems in a 2x2 grid or by stripping regular warped hyphae with an axe. Its uniform, vibrant teal surface makes it a favorite for builders creating large, seamless structures or alien-themed architecture. Since it is native to the Nether's Warped Forest, it does not burn, making it a safe and stylish choice for constructions near lava."
    },
    "minecraft:pale_oak_wood": {
        id: "minecraft:pale_oak_wood",
        name: "Pale Oak Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Pale Oak Wood is a block with the bark texture of Pale Oak logs on all six sides, introduced in Minecraft 1.21.50. It is crafted by arranging four Pale Oak Logs in a 2x2 grid. Unlike logs, which have a top and bottom 'rings' texture, wood blocks appear as bark on every face, making them ideal for creating seamless organic structures like custom trees or roots. Like other wood blocks, it can be stripped using an axe to create Stripped Pale Oak Wood."
    },
    "minecraft:crimson_stem": {
        id: "minecraft:crimson_stem",
        name: "Crimson Stem",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Stem"],
        generation: {
            dimension: "Nether",
            yRange: "Crimson Forest"
        },
        description: "Crimson Stem is a log-like block found in the Crimson Forest biome of the Nether. It serves as the trunk of huge crimson fungi. Unlike Overworld logs, crimson stems are fire-resistant and do not burn. They can be stripped using an axe to create Stripped Crimson Stem, or crafted into Crimson Planks. The stem has a pulsating animation similar to Warped Stem."
    },
    "minecraft:crimson_hyphae": {
        id: "minecraft:crimson_hyphae",
        name: "Crimson Hyphae",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Hyphae"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Crimson Hyphae is a block with the bark texture of Crimson Stem on all six sides. It can be crafted by arranging four Crimson Stems in a 2x2 grid. It is often used in building for creating custom trees or organic structures where the log rings are not desired. Like the stem, it is fire-resistant and can be stripped to create Stripped Crimson Hyphae."
    },
    "minecraft:stripped_crimson_hyphae": {
        id: "minecraft:stripped_crimson_hyphae",
        name: "Stripped Crimson Hyphae",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Crimson Hyphae"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Stripped Crimson Hyphae is a decorative, fire-resistant block that features the smooth, vibrant purple-red texture of stripped crimson stem on all six sides. It is crafted by arranging four stripped crimson stems in a 2x2 grid, or by using an axe on regular crimson hyphae. This block is ideal for creating seamless organic structures, such as thick branches or custom pillars, in the Nether or fire-prone builds. Like other nether stems, it is completely immune to fire and lava, providing both a striking aesthetic and structural safety."
    },
    "minecraft:oak_log": {
        id: "minecraft:oak_log",
        name: "Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Surface (Found in various biomes)"
        },
        description: "Oak logs are one of the most common wood types in Minecraft, harvested from oak trees. They feature a grayish-brown bark and a light tan interior. Oak wood is highly versatile, serving as a primary crafting ingredient for planks, sticks, and various tools. They are found across numerous biomes, including forests, plains, and riverbanks, making them an essential resource for players starting their survival journey."
    },
    "minecraft:stripped_oak_log": {
        id: "minecraft:stripped_oak_log",
        name: "Stripped Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Axe on Oak Log"
        },
        description: "Stripped Oak Log is a wood variant obtained by using an axe on a regular oak log. This removes the bark, revealing the smooth, tan interior wood. It is commonly used as a clean building material for modern or rustic designs. Like other stripped wood, it can be crafted into oak planks, hanging signs, or wood blocks. Its uniform texture makes it a favorite for builders looking to create polished wooden structures."
    },
    "minecraft:spruce_log": {
        id: "minecraft:spruce_log",
        name: "Spruce Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Surface (Taiga and Snowy biomes)"
        },
        description: "Spruce logs are harvested from spruce trees, primarily found in colder biomes like the taiga and snowy tundra. They have a dark brown bark and a slightly lighter brown interior. Spruce wood is favored by many builders for its cozy, rustic aesthetic, often used in medieval or winter-themed constructions. These logs can be crafted into spruce planks or used in their raw form for structural support, blending seamlessly into snowy landscapes."
    },
    "minecraft:stripped_spruce_log": {
        id: "minecraft:stripped_spruce_log",
        name: "Stripped Spruce Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:stripped_spruce_log"],
        generation: {
            dimension: "Overworld",
            yRange: "Axe on Spruce Log"
        },
        description: "Stripped Spruce Log is a wood variant obtained by using an axe on a regular spruce log. This process removes the dark, rustic bark, revealing the smooth, brown interior wood. It is widely used by builders in Bedrock Edition as a warm and clean building material for rustic cabins, medieval structures, and detailed flooring. Like other stripped logs, it can be crafted into spruce planks, hanging signs, or wood blocks. Its uniform texture and rich color make it excellent for creating polished wooden structures and decorative pillars."
    },
    "minecraft:birch_log": {
        id: "minecraft:birch_log",
        name: "Birch Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Surface (Birch Forest and others)"
        },
        description: "Birch logs are easily identifiable by their unique white bark with black horizontal streaks. They are harvested from birch trees, which typically grow in birch forest biomes. The interior of the log reveals a very light tan wood. Because of their bright and clean appearance, birch logs and their planks are popular for modern-style builds and contrast well with darker materials like stone or dark oak, offering a clean, airy feel to any structure."
    },
    "minecraft:jungle_log": {
        id: "minecraft:jungle_log",
        name: "Jungle Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Surface (Jungle biomes)"
        },
        description: "Jungle logs are obtained from the massive trees found in jungle biomes. They feature a greenish-gray bark with horizontal striations and a pinkish-brown interior. Jungle logs are unique because they can support the growth of cocoa beans on their sides. These logs are essential for crafting jungle-themed furniture and tropical-themed structures, reflecting the vibrant and dense life of the biomes where they naturally generate."
    },
    "minecraft:acacia_log": {
        id: "minecraft:acacia_log",
        name: "Acacia Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Surface (Savanna biomes)"
        },
        description: "Acacia logs come from the uniquely shaped, umbrella-like acacia trees found in the savanna biome. They feature a dark gray bark and a distinctive vibrant orange interior wood. This striking color contrast makes acacia logs a popular choice for unique architectural designs and decorative accents. They can be crafted into acacia planks, which retain the warm orange hue, making them ideal for adding a splash of color to desert or savanna-dwelling structures."
    },
    "minecraft:stripped_acacia_log": {
        id: "minecraft:stripped_acacia_log",
        name: "Stripped Acacia Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Acacia Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Axe on Acacia Log"
        },
        description: "Stripped Acacia Log is a wood variant obtained by using an axe on a regular acacia log. This process removes the dark gray bark, revealing the vibrant, smooth orange interior wood. It is widely used by builders in Bedrock Edition for its warm and energetic color, making it excellent for modern architecture, desert-themed designs, and detailed furniture. Like other stripped logs, it can be crafted into acacia planks, hanging signs, or wood blocks. Its uniform texture and bold orange hue provide a striking aesthetic for both interior and exterior builds."
    },
    "minecraft:mangrove_leaves": {
        id: "minecraft:mangrove_leaves",
        name: "Mangrove Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Mangrove Propagule", "Mangrove Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "63 to 100 (Mangrove Swamps)"
        },
        description: "Mangrove Leaves are the dense, vibrant foliage found on Mangrove trees in Mangrove Swamp biomes. They are unique among leaves because they support the growth of Mangrove Propagules, which hang from the underside of the leaf blocks. These leaves can be harvested using shears or a tool with Silk Touch. Like other leaf variants, they can be used for decoration or composting. They provide a lush, dark green canopy that is characteristic of the swampy environments they inhabit."
    },
    "minecraft:dark_oak_log": {
        id: "minecraft:dark_oak_log",
        name: "Dark Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "60–128 (Surface)"
        },
        description: "Dark Oak Logs are harvested from the thick, sprawling dark oak trees found in the dense Dark Forest biome. They feature a very dark brown, almost black bark and a slightly lighter brown interior wood. Dark oak trees are unique because they require four saplings planted in a 2x2 grid to grow, resulting in massive trunks. These logs are a favorite among builders for their rich, deep color, which provides excellent contrast against lighter materials. They can be crafted into dark oak planks, stripped with an axe, or used as a strong structural element in medieval and gothic-style builds."
    },
    "minecraft:oak_wood": {
        id: "minecraft:oak_wood",
        name: "Oak Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oak Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Oak Wood is a block that features the bark texture of an oak log on all six sides. It is crafted by placing four oak logs in a 2x2 grid, yielding three blocks of wood. Unlike logs, which show rings on two ends, wood blocks provide a seamless bark appearance, making them ideal for building custom tree trunks, large branches, or decorative pillars. In Bedrock Edition, they share the same physical properties as oak logs, including flammability and hardness. They can also be stripped with an axe to create stripped oak wood."
    },
    "minecraft:stripped_oak_wood": {
        id: "minecraft:stripped_oak_wood",
        name: "Stripped Oak Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Oak Wood"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Stripped Oak Wood is a versatile building block that features the smooth, tan interior of an oak log on all six sides. It is obtained by using an axe on oak wood or by crafting four stripped oak logs in a 2x2 grid. Unlike logs, which show rings on two ends, this block provides a continuous, bark-free surface that is ideal for creating polished columns, large-scale structures, and detailed organic builds. It shares the same properties as other oak wood variants, including being highly flammable. Its warm color palette makes it a staple for many architectural styles."
    },
    "minecraft:spruce_wood": {
        id: "minecraft:spruce_wood",
        name: "Spruce Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Spruce Wood is a decorative block with the dark, textured bark of spruce logs on all six faces. It is obtained through crafting with four spruce logs or via stonecutting in some versions. Builders favor spruce wood for its rustic, cabin-like aesthetic, using it to create organic-looking structures where the cross-section rings of a log would be undesirable. Like other wood variants, it is flammable and most efficiently harvested with an axe. It can be further processed into stripped spruce wood, maintaining its versatile structural role in northern-themed builds."
    },
    "minecraft:stripped_spruce_wood": {
        id: "minecraft:stripped_spruce_wood",
        name: "Stripped Spruce Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:stripped_spruce_wood"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Stripped Spruce Logs"
        },
        description: "Stripped Spruce Wood is a decorative block with a uniform, bark-free texture on all six sides. It is crafted by placing four Stripped Spruce Logs in a 2x2 grid. It shares the same dark brown, rustic tone as other spruce variants but lacks the rough outer bark, offering a smoother and more refined look for pillars, walls, and flooring. Like other wood blocks, it is flammable and can be used as fuel in furnaces. It is particularly favored by Bedrock Edition builders for creating realistic timber frames and detailed interior accents in cabin-style structures."
    },
    "minecraft:birch_wood": {
        id: "minecraft:birch_wood",
        name: "Birch Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Birch Wood is a wood-type block that displays the iconic white-and-black bark of birch trees on all sides. Crafted from four birch logs, it allows for the creation of seamless white pillars and custom organic shapes. Its high-contrast, bright appearance makes it a staple for modern architecture and decorative accents. It follows the same mechanical rules as other Overworld wood blocks, being susceptible to fire and requiring an axe for quick mining. It can be stripped to reveal the light-colored interior wood while keeping the six-sided bark-like format."
    },
    "minecraft:acacia_wood": {
        id: "minecraft:acacia_wood",
        name: "Acacia Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Acacia Wood is a block that features the dark gray bark of an acacia log on all six sides. It is obtained by crafting four acacia logs together in a 2x2 grid, which yields three wood blocks. Unlike logs, wood blocks provide a seamless bark appearance, making them ideal for building custom trees, organic structures, or decorative pillars where the inner rings are not desired. In Bedrock Edition, it possesses the same physical properties as acacia logs, being highly flammable and best harvested with an axe. It can also be stripped to create stripped acacia wood."
    },
    "minecraft:jungle_wood": {
        id: "minecraft:jungle_wood",
        name: "Jungle Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Jungle Wood is a decorative block displaying the greenish-gray bark of jungle logs on all six faces. By crafting four jungle logs in a 2x2 grid, players can create three of these blocks to achieve a uniform bark texture without the exposed rings seen on standard logs. This makes jungle wood particularly useful for building realistic massive trees or thick vines in tropical-themed environments. It shares the same properties as other Overworld wood types, meaning it is flammable and efficiently broken with an axe. It can also be further processed into its stripped variant."
    },
    "minecraft:dark_oak_wood": {
        id: "minecraft:dark_oak_wood",
        name: "Dark Oak Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Wood"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "Dark Oak Wood is a block that showcases the rich, dark brown bark of dark oak logs on all six of its sides. It is produced by crafting four dark oak logs in a 2x2 arrangement, yielding three blocks of wood. This block is highly valued by builders for creating seamless, dark-colored organic structures or structural beams where the log's end-grain rings would be out of place. Native to the dense Dark Forest biome, it inherits the properties of its source logs, including flammability and a hardness of 2.0. Like other wood blocks in Bedrock Edition, it can be stripped using an axe."
    },
    "minecraft:mangrove_wood": {
        id: "minecraft:mangrove_wood",
        name: "Mangrove Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Wood"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Mangrove Wood is a block with the bark texture of Mangrove logs on all six sides. It is crafted with four Mangrove logs. It is perfect for creating seamless trunks and organic structures where the log rings are not desired. It retains the dark brown bark and deep red color of the Mangrove set. Like other wood variants, it is flammable and most efficiently harvested with an axe. It can be further processed into stripped mangrove wood, maintaining its versatile structural role in building designs."
    },
    "minecraft:stripped_mangrove_log": {
        id: "minecraft:stripped_mangrove_log",
        name: "Stripped Mangrove Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Mangrove Log"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Stripped Mangrove Log is a variant of the Mangrove log created by using an axe on it. Stripping the bark reveals the beautiful, smooth deep red interior of the wood. This version is often preferred by builders for its clean and uniform appearance, making it excellent for modern and detailed constructions. Introduced in the 1.19 Wild Update, it can be crafted into mangrove planks or used decoratively. Like all mangrove wood blocks, it is flammable with a hardness of 2.0 and blast resistance of 2.0."
    },
    "minecraft:stripped_mangrove_wood": {
        id: "minecraft:stripped_mangrove_wood",
        name: "Stripped Mangrove Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Mangrove Wood"],
        generation: {
            dimension: "None",
            yRange: "N/A"
        },
        description: "Stripped Mangrove Wood is a decorative block with the stripped texture of Mangrove logs on all six faces. It provides a seamless, smooth deep red surface, ideal for large wooden structures and artistic builds. It is crafted from stripped mangrove logs or by stripping regular mangrove wood with an axe. This block shares the fire-susceptible nature of overworld wood and is most effectively broken with an axe. Its uniform deep red color provides a consistent aesthetic for large surfaces where bark or wood rings would be distracting."
    },
    "minecraft:oak_leaves": {
        id: "minecraft:oak_leaves",
        name: "Oak Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Oak Sapling (5%)", "Apple (0.5%)", "Stick (2%)", "Oak Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 320"
        },
        description: "Oak Leaves are the most common foliage in Minecraft, found on oak and dark oak trees across many biomes. They are notable for their ability to drop apples, providing a basic food source early in the game. When broken naturally, they have a chance to drop oak saplings and sticks. In Bedrock Edition, these leaves change color depending on the biome they are placed in, ranging from vibrant green in jungles to a more muted tone in deserts."
    },
    "minecraft:spruce_leaves": {
        id: "minecraft:spruce_leaves",
        name: "Spruce Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Spruce Sapling (5%)", "Stick (2%)", "Spruce Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 320"
        },
        description: "Spruce Leaves are found on spruce trees, primarily in taiga and snowy biomes. They have a denser, more needle-like appearance and a darker green color compared to oak leaves. They drop spruce saplings when decayed or broken, which can be grown into large 2x2 spruce trees. Like other leaves, they are highly flammable and can be quickly cleared away using shears or fire. They are often used in builds to create a colder or more forest-like atmosphere."
    },
    "minecraft:birch_leaves": {
        id: "minecraft:birch_leaves",
        name: "Birch Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Birch Sapling (5%)", "Stick (2%)", "Birch Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 320"
        },
        description: "Birch Leaves are the foliage of birch trees, known for their light, bright green color. They provide a cheerful aesthetic to birch forest biomes. While they do not drop apples, they have a reliable 5% chance to drop birch saplings. They are effectively harvested using shears to maintain their block form for decorative purposes. Birch leaves are often paired with their distinctive white bark logs to create high-contrast builds or modern garden designs."
    },
    "minecraft:jungle_leaves": {
        id: "minecraft:jungle_leaves",
        name: "Jungle Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Jungle Sapling (2.5%)", "Stick (2%)", "Jungle Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 320"
        },
        description: "Jungle Leaves form the thick, towering canopies of jungle biomes. They are unique in having a lower sapling drop rate than most other tree types, making jungle saplings slightly more difficult to accumulate. These leaves create a very dense shadow on the jungle floor, allowing for unique mob spawning conditions. They are often found draped in vines and are some of the most lush-looking foliage in the game, perfect for creating overgrown or tropical-themed environments."
    },
    "minecraft:acacia_leaves": {
        id: "minecraft:acacia_leaves",
        name: "Acacia Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Acacia Sapling (5%)", "Stick (2%)", "Acacia Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 320"
        },
        description: "Acacia Leaves are found on the uniquely shaped, diagonal-growing acacia trees in savanna biomes. They have a distinct green color that complements the reddish-orange hue of acacia wood. Like other leaves, they are best harvested with shears or a silk touch tool. They contribute to the iconic silhouette of the savanna landscape. In Bedrock Edition, they serve as a versatile decoration block for players looking to recreate African-inspired landscapes or desert oases."
    },
    "minecraft:cherry_wood": {
        id: "minecraft:cherry_wood",
        name: "Cherry Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Wood"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Cherry Logs"
        },
        description: "Cherry Wood is a block that has the bark texture of a cherry tree on all six sides. It is crafted by placing four cherry logs in a 2x2 grid. Unlike logs, which show rings on two ends, wood blocks provide a seamless bark appearance, making them ideal for building custom tree trunks, large branches, or decorative pillars. It features the signature dark purple bark of the cherry set and can be stripped with an axe to create stripped cherry wood."
    },
    "minecraft:stripped_cherry_log": {
        id: "minecraft:stripped_cherry_log",
        name: "Stripped Cherry Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Cherry Log"],
        generation: {
            dimension: "None",
            yRange: "Axe on Cherry Log"
        },
        description: "Stripped Cherry Log is a variant of the cherry log created by using an axe on it. Stripping the bark reveals the beautiful, smooth pinkish interior of the wood. This version is often preferred by builders for its clean and uniform appearance, making it excellent for modern and detailed constructions. Introduced in the 1.20 Trails & Tales update, it can be crafted into cherry planks or used decoratively. Like all cherry wood blocks, it is flammable with a hardness and blast resistance of 2.0."
    },
    "minecraft:stripped_cherry_wood": {
        id: "minecraft:stripped_cherry_wood",
        name: "Stripped Cherry Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Cherry Wood"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Stripped Cherry Logs"
        },
        description: "Stripped Cherry Wood is a decorative block with the stripped texture of cherry logs on all six faces. It provides a seamless, smooth pink surface, ideal for large wooden structures and artistic builds. It is crafted from stripped cherry logs or by stripping regular cherry wood with an axe. This block shares the fire-susceptible nature of overworld wood and is most effectively broken with an axe. Its uniform pink color provides a consistent aesthetic for large surfaces where bark would be distracting."
    },
    "minecraft:stripped_crimson_stem": {
        id: "minecraft:stripped_crimson_stem",
        name: "Stripped Crimson Stem",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Crimson Stem"],
        generation: {
            dimension: "Nether",
            yRange: "Obtained by using an axe on Crimson Stem"
        },
        description: "Stripped Crimson Stem is a fire-resistant, wood-like block obtained by using an axe on a Crimson Stem. This process removes the outer pulsating layer, revealing a smooth, vibrant purple-red interior. Like regular crimson stems, they do not burn and can be used to craft crimson planks or hyphae. They are highly valued by builders for their consistent and striking color palette, which remains unique to the Nether's fungal 'forests'. They provide a polished look for nether-themed constructions and decorative accents."
    },
    "minecraft:stripped_warped_stem": {
        id: "minecraft:stripped_warped_stem",
        name: "Stripped Warped Stem",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Warped Stem"],
        generation: {
            dimension: "Nether",
            yRange: "Obtained by using an axe on Warped Stem"
        },
        description: "Stripped Warped Stem is a fire-resistant block created by stripping the 'bark' from a Warped Stem using an axe. It features a beautiful, smooth teal or cyan-green surface that is both alien and aesthetically pleasing. Found naturally in the huge fungi of the Warped Forest, these blocks are immune to fire and lava, making them excellent for construction in dangerous environments. They can be crafted into warped planks or used as structural pillars. Their bright, non-burning nature distinguishes them from all Overworld wood types, offering a unique utility and style."
    },
    "minecraft:dark_oak_leaves": {
        id: "minecraft:dark_oak_leaves",
        name: "Dark Oak Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Dark Oak Sapling (5%)", "Apple (0.5%)", "Stick (2%)", "Dark Oak Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "64 to 320 (Dark Forest)"
        },
        description: "Dark Oak Leaves are the dense, dark green foliage of Dark Oak trees, primarily found in the Roofed Forest biome. They are unique for forming thick, opaque canopies that can block out enough light to allow hostile mobs to spawn during the day. Like other leaves, they have a small chance to drop apples and dark oak saplings when they decay or are broken. They are highly flammable and best harvested using shears or silk touch tools for decorative landscaping. In Bedrock Edition, they provide a lush, dark green canopy that is essential for the atmospheric look of dark forest biomes."
    },
    "minecraft:stripped_birch_log": {
        id: "minecraft:stripped_birch_log",
        name: "Stripped Birch Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:stripped_birch_log"],
        generation: {
            dimension: "Overworld",
            yRange: "Axe on Birch Log"
        },
        description: "Stripped Birch Log is a wood variant obtained by using an axe on a regular birch log. This process removes the iconic white-and-black bark, revealing the smooth, light tan interior wood. It is widely used by builders in Bedrock Edition as a clean, bright building material for modern or Scandinavian-style designs. Like other stripped logs, it can be crafted into birch planks, hanging signs, or wood blocks. Its uniform, pale texture makes it excellent for creating polished wooden structures, decorative pillars, and providing a bright contrast to darker materials."
    },
    "minecraft:stripped_dark_oak_log": {
        id: "minecraft:stripped_dark_oak_log",
        name: "Stripped Dark Oak Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Dark Oak Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Shipwrecks / Stripping Dark Oak Logs"
        },
        description: "Stripped Dark Oak Log is a decorative wood block obtained by using an axe on a Dark Oak Log or wood. This process removes the thick, dark bark to reveal the smooth, deep brown wood beneath. Like other logs, it can be placed in various orientations and is a popular choice for rustic pillars, beam-work, and sophisticated furniture designs. It remains flammable and is most efficiently harvested with an axe. In Bedrock Edition, it can be found naturally generating in the hulls of shipwrecks, reflecting a dark and refined architectural style."
    },
    "minecraft:stripped_dark_oak_wood": {
        id: "minecraft:stripped_dark_oak_wood",
        name: "Stripped Dark Oak Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Dark Oak Wood"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Stripped Dark Oak Wood is a versatile building block featuring the smooth, deep brown interior of a dark oak log on all six sides. It is obtained by using an axe on dark oak wood or by crafting four stripped dark oak logs together. Unlike logs, this block provides a continuous, bark-free surface ideal for creating polished columns, large-scale structures, and sophisticated organic builds. It shares the same properties as other dark oak variants, including being highly flammable. Its rich, dark color is perfect for refined architectural designs."
    },
    "minecraft:stripped_jungle_log": {
        id: "minecraft:stripped_jungle_log",
        name: "Stripped Jungle Log",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Jungle Log"],
        generation: {
            dimension: "Overworld",
            yRange: "Shipwrecks / Axe on Jungle Log"
        },
        description: "Stripped Jungle Log is a wood variant obtained by using an axe on a regular jungle log. This process removes the bark, revealing the smooth, pinkish-tan interior wood. In Minecraft Bedrock Edition, it is commonly used as a clean building material for tropical or modern designs and can be found naturally in the hulls of shipwrecks. Like other stripped logs, it can be crafted into jungle planks, hanging signs, or wood blocks. Its uniform texture and warm, golden-brown color make it a favorite for builders looking to create polished wooden structures."
    },
    "minecraft:stripped_birch_wood": {
        id: "minecraft:stripped_birch_wood",
        name: "Stripped Birch Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Birch Wood"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Stripped Birch Logs"
        },
        description: "Stripped Birch Wood is a decorative block that features the smooth, light tan interior of birch logs on all six sides. It is crafted by placing four stripped birch logs in a 2x2 grid or by using an axe on birch wood. Unlike logs, which show rings on two ends, wood blocks provide a seamless, bark-free surface, making them ideal for creating polished columns, large-scale structures, and bright architectural designs. It shares the same properties as other birch wood variants, including being highly flammable. Its pale coloration offers a clean, airy aesthetic for builds."
    },
    "minecraft:stripped_acacia_wood": {
        id: "minecraft:stripped_acacia_wood",
        name: "Stripped Acacia Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Acacia Wood"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Stripped Acacia Logs"
        },
        description: "Stripped Acacia Wood is a vibrant building block that showcases the smooth, orange interior of acacia logs on all six faces. It is obtained by crafting four stripped acacia logs in a 2x2 arrangement or by using an axe on acacia wood. This block provides a continuous, bark-free surface with a bold orange hue, making it a favorite for builders seeking to add warmth and energy to their constructions. Like other wood variants in Bedrock Edition, it is flammable and most efficiently harvested with an axe. It is excellent for creating colorful pillars and unique structural accents."
    },
    "minecraft:stripped_jungle_wood": {
        id: "minecraft:stripped_jungle_wood",
        name: "Stripped Jungle Wood",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Stripped Jungle Wood"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Stripped Jungle Logs"
        },
        description: "Stripped Jungle Wood is a decorative block featuring the smooth, pinkish-tan interior of jungle logs on all six sides. By crafting four stripped jungle logs in a 2x2 grid or using an axe on jungle wood, players can create a block that offers a seamless, uniform texture without the bark or exposed rings of standard logs. This makes it particularly useful for tropical-themed builds, large wooden structures, and sophisticated interior designs. It shares the same mechanical properties as other Overworld wood types, being flammable and best harvested with an axe."
    }
};
