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
        drops: ["minecraft:black_terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Black Terracotta is a smooth, durable building block with a matte black finish. It is obtained by dyeing regular terracotta with black dye. In Bedrock Edition, it is a versatile decorative material frequently used in modern and minimalist architecture for its clean, dark aesthetic. It can also be smelted into black glazed terracotta for more intricate, patterned designs."
    },
    "minecraft:magenta_terracotta": {
        id: "minecraft:magenta_terracotta",
        name: "Magenta Terracotta",
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
        drops: ["minecraft:magenta_terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Magenta Terracotta is a smooth, durable building block with a muted purple-pink matte finish. It is obtained by dyeing regular terracotta with magenta dye. It provides a sophisticated and earthy tone for architectural projects, offering higher blast resistance than wool or concrete powder. In Bedrock Edition, a pickaxe is required to harvest it; breaking it by hand will result in no drops. It can also be smelted into magenta glazed terracotta for more intricate designs."
    },
    "minecraft:pink_terracotta": {
        id: "minecraft:pink_terracotta",
        name: "Pink Terracotta",
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
        drops: ["minecraft:pink_terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Pink Terracotta is a smooth, durable building block with a soft pink matte finish. It is obtained by dyeing regular terracotta with pink dye. It provides a sophisticated and earthy tone for architectural projects, offering higher blast resistance than wool or concrete powder. In Bedrock Edition, a pickaxe is required to harvest it; breaking it by hand will result in no drops. It can also be smelted into pink glazed terracotta for more intricate designs, blending well with both natural and modern materials."
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
    "minecraft:yellow_terracotta": {
        id: "minecraft:yellow_terracotta",
        name: "Yellow Terracotta",
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
        drops: ["minecraft:yellow_terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands"
        },
        description: "Yellow Terracotta is a smooth, earthy building block found naturally in the Badlands biome. It is created by smelting clay and applying yellow dye, or found in massive strata in the wild. Its warm, sun-dried appearance and matte finish make it ideal for desert-themed architecture or Mediterranean builds. In Bedrock Edition, it requires a pickaxe for harvesting; breaking it by hand yields nothing. It possesses high blast resistance and can be further smelted into yellow glazed terracotta."
    },
    "minecraft:yellow_glazed_terracotta": {
        id: "minecraft:yellow_glazed_terracotta",
        name: "Yellow Glazed Terracotta",
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
        drops: ["Yellow Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Yellow Terracotta"
        },
        description: "Yellow Glazed Terracotta is a vibrant decorative block in Bedrock Edition featuring an intricate, sun-themed geometric pattern. It is obtained by smelting yellow terracotta in a furnace. Like all glazed terracotta, it is notable for being unmovable by slime blocks or honey blocks, making it a vital component for advanced redstone machines and flying contraptions. Its directional placement allows players to create complex, repeating motifs on floors and walls. The yellow variant adds a bright, cheerful aesthetic to builds and is immune to fire, requiring a pickaxe for harvesting."
    },
    "minecraft:red_terracotta": {
        id: "minecraft:red_terracotta",
        name: "Red Terracotta",
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
        drops: ["minecraft:red_terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands"
        },
        description: "Red Terracotta is a smooth, earthy building block found naturally in the Badlands biome. It is created by smelting clay and applying red dye, or found in massive strata in the wild. Its vibrant yet matte red appearance makes it ideal for southwestern architecture, desert-themed builds, or Mediterranean-style houses. In Bedrock Edition, it requires a pickaxe for harvesting; breaking it by hand yields nothing. It possesses high blast resistance and can be further smelted into red glazed terracotta for intricate decorative patterns."
    },
    "minecraft:gray_terracotta": {
        id: "minecraft:gray_terracotta",
        name: "Gray Terracotta",
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
        drops: ["minecraft:gray_terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands"
        },
        description: "Gray Terracotta is a smooth, durable building block with a muted, dark gray matte finish. It is obtained by smelting clay and applying gray dye, or can be found naturally generating in the Badlands biome. In Bedrock Edition, it requires a pickaxe to harvest correctly; breaking it by hand results in no drops. Its neutral, industrial tone makes it a favorite for modern architectural designs, providing a sleek and sophisticated look that contrasts well with brighter materials like concrete. It can also be smelted into gray glazed terracotta for more intricate patterns."
    },
    "minecraft:gray_glazed_terracotta": {
        id: "minecraft:gray_glazed_terracotta",
        name: "Gray Glazed Terracotta",
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
        drops: ["Gray Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Gray Terracotta"
        },
        description: "Gray Glazed Terracotta is a decorative block featuring an intricate, ornate pattern with dark gray and neutral tones. It is created by smelting gray terracotta in a furnace. In Bedrock Edition, it is notable for being unmovable by slime blocks or honey blocks, a property highly valued by redstone engineers for creating complex machinery and flying contraptions. Its directional placement allows players to create large, repeating geometric patterns on floors and walls, providing a sophisticated and modern look to any architectural project. It requires a pickaxe for harvesting."
    },
    "minecraft:light_gray_terracotta": {
        id: "minecraft:light_gray_terracotta",
        name: "Light Gray Terracotta",
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
        drops: ["minecraft:light_gray_terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Badlands, Savanna Villages"
        },
        description: "Light Gray Terracotta is a smooth, durable building block with a neutral, light gray matte finish. It generates naturally in the Badlands biome and can be found in some Savanna village houses. It is obtained by dyeing regular terracotta with light gray dye. In Bedrock Edition, a pickaxe is required to harvest it correctly; breaking it by hand yields no drops. Its clean, industrial tone makes it ideal for modern architecture and providing subtle contrast in diverse builds. It can also be smelted into light gray glazed terracotta."
    },
    "minecraft:silver_glazed_terracotta": {
        id: "minecraft:silver_glazed_terracotta",
        name: "Light Gray Glazed Terracotta",
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
        drops: ["Light Gray Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Light Gray Terracotta"
        },
        description: "Light Gray Glazed Terracotta (internally silver_glazed_terracotta) is a vibrant decorative block with a unique patterned texture. It is created by smelting Light Gray Terracotta in a furnace. In Bedrock Edition, glazed terracotta is notable for its blast resistance and its immunity to being pulled or pushed by slime blocks when moved by pistons, making it useful in complex redstone machinery. The light gray variant features a sophisticated circular and floral motif that can be combined with other blocks to create intricate, repeating floor or wall patterns."
    },
    "minecraft:orange_glazed_terracotta": {
        id: "minecraft:orange_glazed_terracotta",
        name: "Orange Glazed Terracotta",
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
        drops: ["minecraft:orange_glazed_terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Orange Terracotta"
        },
        description: "Orange Glazed Terracotta is a vibrant decorative block featuring an intricate, ornate geometric pattern with bold orange and cyan tones. It is created by smelting orange terracotta in a furnace. Like all glazed terracotta variants, it is immune to being moved by slime or honey blocks, making it highly useful for advanced redstone machinery. Its unique directional placement allows builders to create complex, repeating designs when four blocks are placed in a circular fashion. In Bedrock Edition, it requires a pickaxe for collection and offers a striking, stylized look."
    },
    "minecraft:purple_terracotta": {
        id: "minecraft:purple_terracotta",
        name: "Purple Terracotta",
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
        drops: ["minecraft:purple_terracotta"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Purple Terracotta is a smooth, durable building block with a muted, deep purple matte finish. It is obtained by dyeing regular terracotta with purple dye. Unlike some other colors, it does not generate naturally in the Badlands biome and must be crafted. Its earthy purple tone provides a sophisticated and modern look for architectural projects, offering higher blast resistance than wool or concrete powder. In Bedrock Edition, a pickaxe is required to harvest it correctly; breaking it by hand results in no drops. It can also be smelted into purple glazed terracotta."
    },
    "minecraft:magenta_glazed_terracotta": {
        id: "minecraft:magenta_glazed_terracotta",
        name: "Magenta Glazed Terracotta",
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
        drops: ["minecraft:magenta_glazed_terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Magenta Terracotta"
        },
        description: "Magenta Glazed Terracotta is a vibrant decorative block featuring an intricate, swirling pattern with magenta and pink tones. It is created by smelting magenta terracotta in a furnace. Like all glazed terracotta variants, it is immune to being moved by slime or honey blocks, making it highly useful for advanced redstone machinery and decorative flooring. Its unique directional placement allows builders to create complex, repeating geometric designs when four blocks are placed in a circular fashion. In Bedrock Edition, it is notably unmovable by pistons, unlike many other decorative blocks."
    },
    "minecraft:purple_glazed_terracotta": {
        id: "minecraft:purple_glazed_terracotta",
        name: "Purple Glazed Terracotta",
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
        drops: ["Purple Glazed Terracotta"],
        generation: {
            dimension: "None",
            yRange: "Smelted from Purple Terracotta"
        },
        description: "Purple Glazed Terracotta is a vibrant decorative block featuring an intricate, ornate pattern with a central floral motif. Created by smelting purple terracotta, it is highly valued for its unique directional placement that allows for complex repeating designs. In Bedrock Edition, it is notably unmovable by pistons, making it a critical component for advanced redstone machinery and flying contraptions where specific block stability is required. It is immune to fire and requires a pickaxe to harvest. Its rich color and durability make it ideal for decorative flooring and walls."
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
        drops: ["minecraft:light_blue_terracotta"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Light Blue Terracotta is a smooth, durable building block with a soft, pale blue matte finish. It is obtained by dyeing regular terracotta with light blue dye. In Bedrock Edition, it does not generate naturally in the Badlands biome and must be crafted by the player. Its calm, earthy blue tone provides a sophisticated and clean look for architectural projects, offering significantly higher blast resistance than wool or concrete powder. It requires a pickaxe for harvesting; breaking it by hand will result in no drops. It can also be smelted into light blue glazed terracotta."
    }
};
