// Pocket Wikipedia Foundation - Miscellaneous Building Blocks Data
// ============================================
// This file contains: Bookshelf and other miscellaneous building blocks
// ============================================

/**
 * Miscellaneous building blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const miscBuildingBlocks = {
    "minecraft:bookshelf": {
        id: "minecraft:bookshelf",
        name: "Bookshelf",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["3 Books (or itself with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Strongholds, Woodland Mansions"
        },
        description: "A Bookshelf is a decorative and functional block crafted from six wooden planks and three books. When placed near an Enchanting Table, bookshelves increase the maximum enchantment level available, requiring exactly 15 bookshelves arranged within two blocks to reach level 30 enchantments. Without Silk Touch, breaking a bookshelf drops three books rather than the block itself, making it a storage option for books. Bookshelves are flammable and naturally generate in villages, stronghold libraries, and woodland mansions, serving both aesthetic and practical purposes in builds."
    },
    "minecraft:dried_kelp_block": {
        id: "minecraft:dried_kelp_block",
        name: "Dried Kelp Block",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dried Kelp Block"],
        generation: {
            dimension: "None",
            yRange: "None"
        },
        description: "A Dried Kelp Block is a decorative and functional block crafted from nine pieces of dried kelp. It serves as an incredibly efficient fuel source in furnaces, smelting up to 20 items per block—which is 2.5 times more than coal. Beyond its use as fuel, it can be used as a building material with a unique dark green, wrapped texture. It can also be placed in a composter, with a 50% chance to increase the compost level. Unlike some other bundled blocks, dried kelp blocks do not have a specific orientation when placed and appear identical from all sides."
    },
    "minecraft:hay_block": {
        id: "minecraft:hay_block",
        name: "Hay Bale",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Hay Bale"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Pillager Outposts"
        },
        description: "A Hay Bale is a decorative and functional block crafted from nine wheat or found naturally in villages and pillager outposts. It is unique for its ability to reduce fall damage by 80% when landed on, making it a lifesaver in parkour or high-altitude builds. Hay bales can be used to feed horses, llamas, and donkeys to heal them or speed up the growth of foals, and are required to breed llamas. When placed under a campfire, they increase the smoke height significantly, which is useful for signaling. They are flammable and orientable like logs."
    },
    "minecraft:white_terracotta": {
        id: "minecraft:white_terracotta",
        name: "White Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["White Terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands, Plains Villages"
        },
        description: "White Terracotta is a smooth, dyed clay block with a subtle off-white or creamy tint. It is primarily found in the Badlands biome or as a building material in plains villages. Crafted by smelting clay blocks into terracotta and then dyeing them with white dye, it provides a clean, matte finish that is highly valued for modern and minimalist builds. In Bedrock Edition, it requires a pickaxe to harvest; breaking it by hand yields no drops. Its high blast resistance compared to other decorative blocks like wool makes it a durable choice for colorful constructions."
    },
    "minecraft:orange_terracotta": {
        id: "minecraft:orange_terracotta",
        name: "Orange Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Orange Terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands, Savanna Villages"
        },
        description: "Orange Terracotta is a vibrant, earth-toned block found abundantly in the Badlands biome and occasionally in savanna village houses. It is created by smelting clay and applying orange dye, or found naturally in massive strata. It features a warm, orange-brown hue that fits perfectly with desert or Mediterranean-style architecture. Like all terracotta variants, it has a hardness of 1.25 and requires a pickaxe for collection. Its matte texture is distinct from the glossy look of concrete, providing a more natural feel to builds. It can also be further smelted into orange glazed terracotta."
    },
    "minecraft:white_glazed_terracotta": {
        id: "minecraft:white_glazed_terracotta",
        name: "White Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["White Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from White Terracotta"
        },
        description: "White Glazed Terracotta is a vibrant decorative block with a unique, ornate pattern. It is created by smelting white terracotta in a furnace. Like other glazed terracotta, it is immune to being moved by slime blocks or honey blocks, making it valuable for complex redstone machinery. Its directional placement allows players to create large, recurring patterns across floors and walls."
    },
    "minecraft:smooth_quartz": {
        id: "minecraft:smooth_quartz",
        name: "Smooth Quartz Block",
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
        drops: ["Smooth Quartz Block"],
        generation: {
            dimension: "The Nether",
            yRange: "Bridge Bastion Remnants"
        },
        description: "Smooth Quartz Block is a refined version of the Block of Quartz, obtained by smelting a Block of Quartz in a furnace. It features a smoother, cleaner texture without the visible borders found on regular quartz blocks, making it highly desirable for modern architectural designs. While visually similar, it remains a distinct block. It naturally generates in some Bastion Remnant structures in the Nether. It has the same hardness and blast resistance as regular stone."
    },
    "minecraft:blue_terracotta": {
        id: "minecraft:blue_terracotta",
        name: "Blue Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Blue Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Blue Terracotta is a smooth, durable building block with a deep blue matte finish. It is obtained by dyeing terracotta with blue dye. Unlike many other terracotta colors, it does not generate naturally in the Badlands biome, making it primarily a crafted decorative material. Its earthy blue tone and matte texture provide a sophisticated look for architectural projects, and its high blast resistance makes it more durable than wool. It can also be smelted into blue glazed terracotta for more intricate designs."
    },
    "minecraft:cyan_terracotta": {
        id: "minecraft:cyan_terracotta",
        name: "Cyan Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Cyan Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Cyan Terracotta is a smooth, durable building block with a distinct teal-gray matte finish. It is obtained by dyeing regular terracotta with cyan dye. Like several other colors, it does not generate naturally in the Badlands biome and must be crafted. Its muted, earthy cyan tone provides a sophisticated and modern look for architectural projects, blending well with both natural and industrial materials. It possesses higher blast resistance than wool or concrete powder and can be smelted into cyan glazed terracotta for decorative patterns."
    },
    "minecraft:black_terracotta": {
        id: "minecraft:black_terracotta",
        name: "Black Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Black Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Black Terracotta is a smooth, durable building block with a matte black finish. It is obtained by dyeing regular terracotta with black dye. In Bedrock Edition, it is a versatile decorative material frequently used in modern and minimalist architecture for its clean, dark aesthetic. It can also be smelted into black glazed terracotta for more intricate, patterned designs."
    },
    "minecraft:black_glazed_terracotta": {
        id: "minecraft:black_glazed_terracotta",
        name: "Black Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Black Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Black Terracotta"
        },
        description: "Black Glazed Terracotta is a vibrant decorative block featuring an intricate, swirling pattern with dark gray and black tones. It is created by smelting black terracotta in a furnace. Like all glazed terracotta, it is immune to being moved by slime or honey blocks, making it highly useful for advanced redstone machinery and decorative flooring. Its unique directional placement allows builders to create complex, repeating geometric designs when four blocks are placed in a circular fashion, offering a sleek and modern look to any structure."
    },
    "minecraft:red_glazed_terracotta": {
        id: "minecraft:red_glazed_terracotta",
        name: "Red Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Red Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Red Terracotta"
        },
        description: "Red Glazed Terracotta is a vibrant decorative block featuring an intricate, swirling pattern with bold red and orange tones. It is created by smelting red terracotta in a furnace. Like all glazed terracotta variants, it is immune to being moved by slime or honey blocks, making it highly useful for advanced redstone machinery and decorative flooring. Its unique directional placement allows builders to create complex, repeating geometric designs when four blocks are placed in a circular fashion, offering a striking and ornate look to any structure."
    },
    "minecraft:blue_glazed_terracotta": {
        id: "minecraft:blue_glazed_terracotta",
        name: "Blue Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Blue Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Blue Terracotta"
        },
        description: "Blue Glazed Terracotta is a vibrant decorative block featuring an intricate, swirling pattern with deep blue and light blue tones. It is created by smelting blue terracotta in a furnace. Like all glazed terracotta, it is immune to being moved by slime blocks or honey blocks, making it highly useful for advanced redstone machinery. Its unique directional placement allows builders to create large, recurring geometric designs when multiple blocks are placed in a circular fashion, offering a sophisticated and ornate look to floors and walls in any architectural project."
    },
    "minecraft:green_terracotta": {
        id: "minecraft:green_terracotta",
        name: "Green Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Green Terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands"
        },
        description: "Green Terracotta is a smooth, durable building block with a dark green matte finish. It is obtained by dyeing regular terracotta with green dye or can be found naturally in the Badlands biome. In Bedrock Edition, it requires a pickaxe to be harvested; breaking it by hand yields no drops. Its muted, earthy green tone and matte texture make it ideal for architectural projects that require a natural yet refined look. It can also be smelted into green glazed terracotta, which features an intricate pattern for more decorative designs."
    },
    "minecraft:cyan_glazed_terracotta": {
        id: "minecraft:cyan_glazed_terracotta",
        name: "Cyan Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Cyan Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Cyan Terracotta"
        },
        description: "Cyan Glazed Terracotta is a vibrant decorative block featuring an intricate, ornate pattern with a Creeper face design. It is created by smelting cyan terracotta in a furnace. Like all glazed terracotta, it is immune to being moved by slime or honey blocks, making it highly useful for advanced redstone machinery. Its unique directional placement allows builders to create complex, repeating geometric designs, offering a distinct and stylized look to any construction in Bedrock Edition. It requires a pickaxe for collection."
    },
    "minecraft:brown_glazed_terracotta": {
        id: "minecraft:brown_glazed_terracotta",
        name: "Brown Glazed Terracotta",
        hardness: 1.4,
        blastResistance: 1.4,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Brown Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Brown Terracotta"
        },
        description: "Brown Glazed Terracotta is a decorative block featuring an intricate, ornate pattern with earthy brown and tan tones. It is created by smelting brown terracotta in a furnace. Like all glazed terracotta, it is immune to being moved by slime or honey blocks, making it highly useful for advanced redstone machinery. Its unique directional placement allows builders to create complex, repeating geometric designs, offering a distinct and stylized look to any construction."
    },
    "minecraft:lime_terracotta": {
        id: "minecraft:lime_terracotta",
        name: "Lime Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Lime Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Lime Terracotta is a smooth, durable building block with a bright lime green matte finish. It is obtained by dyeing regular terracotta with lime dye. Like several other colors, it does not generate naturally in the Badlands biome and must be crafted. Its vibrant, earthy lime tone provides a fresh and modern look for architectural projects, blending well with both natural and industrial materials. It possesses higher blast resistance than wool or concrete powder."
    },
    "minecraft:light_blue_terracotta": {
        id: "minecraft:light_blue_terracotta",
        name: "Light Blue Terracotta",
        hardness: 1.25,
        blastResistance: 4.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Light Blue Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Light Blue Terracotta is a smooth, durable building block with a pale blue matte finish. It is obtained by dyeing regular terracotta with light blue dye. In Bedrock Edition, it requires a pickaxe for collection; breaking it by hand yields no drops. Its soft, earthy blue tone and matte texture make it a popular choice for architectural projects, and its high blast resistance compared to decorative blocks like wool makes it a durable material for colorful constructions."
    }
};
