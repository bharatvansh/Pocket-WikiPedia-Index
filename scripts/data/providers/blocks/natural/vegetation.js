// Pocket Wikipedia Foundation - Vegetation Blocks Data
// ============================================
// This file contains: Flowers (all types), tall flowers, grass,
// tall grass, ferns, large ferns, dead bush, saplings (all types),
// mushrooms, mushroom blocks, azalea, flowering azalea,
// moss block, moss carpet, hanging roots, spore blossom,
// glow lichen, vines, cave vines, weeping vines, twisting vines,
// lily pad, dripleaf (small and big), sugar cane, bamboo,
// cactus, kelp, seagrass, sea pickle, crops (wheat, carrots,
// potatoes, beetroot, melon, pumpkin, cocoa, sweet berries,
// glow berries, torchflower, pitcher plant)
// ============================================

/**
 * Vegetation blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const vegetationBlocks = {
    "minecraft:moss_block": {
        id: "minecraft:moss_block",
        name: "Moss Block",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Moss Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves, Mangrove Swamps, crafted from moss carpet"
        },
        description: "Moss Block is a natural organic block that generates abundantly in Lush Caves and Mangrove Swamps, introduced in Minecraft 1.17. This vibrant green block serves as both a decorative and functional building material. When bone meal is applied to moss blocks, grass blocks, or dirt, they can spread moss to adjacent blocks. Moss blocks can be crafted into moss carpet using three moss blocks arranged horizontally, or harvested with shears to create moss carpets. They have very low hardness and blast resistance, making them easy to break by hand or with any tool. Moss blocks are essential for creating natural, forest-like environments and can support the growth of moss carpets and other moss variants."
    },
    "minecraft:pale_hanging_moss": {
        id: "minecraft:pale_hanging_moss",
        name: "Pale Hanging Moss",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Hanging Moss"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "Pale Hanging Moss is a gray vegetation block that grows beneath Pale Oak Leaves in the Pale Garden biome, introduced in Minecraft 1.21.50. It forms eerie, hanging tendrils that contribute to the biome's haunting atmosphere and emit unique ambient sounds. Players can collect it using shears, but it cannot be crafted. This moss is a signature feature of the Pale Garden, the home of the Creaking mob, and provides a distinct visual style compared to other moss types. It must be obtained directly from its natural habitat."
    },
    "minecraft:pale_moss_block": {
        id: "minecraft:pale_moss_block",
        name: "Pale Moss Block",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Moss Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "The Pale Moss Block is a grayish moss variant native to the Pale Garden biome. It spreads onto stone and deepslate when fertilized with bone meal, converting surfaces into pale moss. While breakable by hand, hoes are the most efficient tools for mining. This block facilitates the natural generation of Pale Hanging Moss and Eyeblossoms, making it vital for biome-specific flora. With its desaturated tone, it is a popular decorative choice for creating eerie, muted, or aged landscapes in Minecraft."
    },
    "minecraft:pale_moss_carpet": {
        id: "minecraft:pale_moss_carpet",
        name: "Pale Moss Carpet",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Moss Carpet"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "Pale Moss Carpet is a decorative vegetation block that naturally covers the ground in the Pale Garden biome, introduced in version 1.21.50. Similar to green moss carpet, it provides a thin, textured layer for floors and landscapes without filling a full block. It can be crafted from Pale Moss Blocks or generated by using bone meal on a Pale Moss Block. Its distinct pale gray color contributes to the ghostly, desaturated atmosphere of its native environment, making it an excellent choice for builders creating eerie, monochromatic, or foggy landscapes."
    },
    "minecraft:sea_pickle": {
        id: "minecraft:sea_pickle",
        name: "Sea Pickle",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 6,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Sea Pickle"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Oceans"
        },
        description: "Sea Pickles are small, stationary colonies of aquatic animals that emit light when submerged in water. Found naturally on coral blocks in warm oceans, they can be placed in clusters of up to four on a single block, with each additional pickle increasing the light level (6, 9, 12, 15). They only produce light when underwater; on land, they remain dim. Players can grow more sea pickles by using bone meal on one that is placed on a coral block underwater. They can also be smelted into lime dye."
    },
    "minecraft:glow_lichen": {
        id: "minecraft:glow_lichen",
        name: "Glow Lichen",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 7,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Glow Lichen"],
        generation: {
            dimension: "Overworld",
            yRange: "Caves (on stone-type blocks)"
        },
        description: "Glow Lichen is a dim, bioluminescent block found naturally in caves, clinging to stone-type blocks. It emits a soft light level of 7 and can be harvested using shears, making it a subtle light source for builds. In addition to cave walls, it can be grown on most solid blocks using bone meal to spread it. Its unique non-solid nature allows it to be waterlogged and placed on any side of a block."
    },
    "minecraft:mushroom_stem": {
        id: "minecraft:mushroom_stem",
        name: "Mushroom Stem",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Mushroom Stem"],
        generation: {
            dimension: "Overworld",
            yRange: "Dark Forest, Mushroom Fields"
        },
        description: "Mushroom Stems are thick, fibrous blocks that form the stalk of huge mushrooms found in Dark Forest and Mushroom Fields biomes. They can be harvested with Silk Touch to keep their unique texture on all sides, or broken without it to potentially drop smaller mushrooms. These blocks are most efficiently broken with an axe and provide a bass sound when placed under a note block. They are a versatile building material for organic and rustic structures."
    },
    "minecraft:mangrove_propagule": {
        id: "minecraft:mangrove_propagule",
        name: "Mangrove Propagule",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Propagule"],
        generation: {
            dimension: "Overworld",
            yRange: "Mangrove Swamps (hanging from leaves)"
        },
        description: "Mangrove Propagules are the unique saplings of Mangrove trees, capable of growing both on land and underwater. They generate naturally hanging from Mangrove Leaves and can be harvested when they reach their final growth stage. Unlike other saplings, they have a distinct long shape and can be planted in mud, clay, and moss blocks. They are essential for cultivating Mangrove Swamps and obtaining mangrove wood in survival mode."
    },
    "minecraft:azalea": {
        id: "minecraft:azalea",
        name: "Azalea",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Azalea"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves (on ceiling), Azalea biomes"
        },
        description: "Azalea is a flowering plant that grows in the Lush Caves biome, clinging to cave ceilings and forming part of the unique underground ecosystem. When placed in the Overworld, it can grow into Flowering Azalea Leaves when bone meal is applied. This small, delicate plant has vibrant green leaves and produces beautiful pink or purple flowers when matured. Azalea plants can be harvested using shears to preserve their structure, or broken by hand. They serve as an important component of cave decoration and can be used to create beautiful botanical displays in underground gardens."
    },
    "minecraft:flowering_azalea_leaves": {
        id: "minecraft:flowering_azalea_leaves",
        name: "Flowering Azalea Leaves",
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
        drops: ["Flowering Azalea Leaves"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves biome"
        },
        description: "Flowering Azalea Leaves are the mature form of Azalea plants, found naturally in the Lush Caves biome where they form thick, vibrant foliage with beautiful pink or purple flowers. These leaves can be harvested with shears using Silk Touch to preserve their decorative appearance. When bone meal is applied to regular Azalea plants, they can grow into this flowering variant. Flowering Azalea Leaves have a unique appearance combining the lush green leaves of traditional foliage with the decorative blossoms of azalea flowers. They are perfect for creating botanical gardens, floral displays, or adding vibrant color to underground constructions."
    },
    "minecraft:mangrove_roots": {
        id: "minecraft:mangrove_roots",
        name: "Mangrove Roots",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Roots"],
        generation: {
            dimension: "Overworld",
            yRange: "Mangrove Swamps"
        },
        description: "Mangrove Roots are the distinctive exposed roots that form the foundation of mangrove trees in Mangrove Swamp biomes. Unlike similar decorative blocks, these roots have a unique redstone-conducting property, allowing them to transmit redstone signals through their fibrous structure. This makes them valuable for creating hidden redstone circuits or underwater redstone mechanisms. Mangrove Roots can be harvested with any tool, with axes being the most efficient. They have a distinctive brown, fibrous appearance and can be used both for their redstone functionality and as decorative elements in swamp-themed builds or underground base construction."
    },
    "minecraft:big_dripleaf": {
        id: "minecraft:big_dripleaf",
        name: "Big Dripleaf",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Big Dripleaf"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves"
        },
        description: "Big Dripleaf is a plant found in Lush Caves. It can be used as a temporary platform; if an entity stands on it for too long, the leaf tilts and the entity falls through. It can be grown larger using bone meal and its tilting behavior can be prevented with a redstone signal."
    },
    "minecraft:pitcher_plant": {
        id: "minecraft:pitcher_plant",
        name: "Pitcher Plant",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pitcher Plant"],
        generation: {
            dimension: "Overworld",
            yRange: "Grown from Pitcher Pods (Sniffer drop)"
        },
        description: "The Pitcher Plant is a large, ancient flower that grows from Pitcher Pods, which are sniffed up by Sniffers. When fully grown, it stands two blocks tall visually but occupies a single block space. It can be harvested by hand or with any tool. In addition to its decorative value, it can be crafted into two Cyan Dye. It represents a piece of the ancient flora reintroduced to the Overworld."
    },
    "minecraft:torchflower": {
        id: "minecraft:torchflower",
        name: "Torchflower",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Torchflower"],
        generation: {
            dimension: "Overworld",
            yRange: "Grown from Torchflower Seeds (Sniffer drop)"
        },
        description: "The Torchflower is an ancient flower grown from Torchflower Seeds, which are discovered by Sniffers. Despite its glowing appearance and name, it does not emit actual light. It can be placed on farmland to grow or on grass/dirt as a decorative plant. The flower can be crafted into Orange Dye or used in Suspicious Stew to grant Night Vision. It adds a vibrant touch of ancient history to gardens."
    }
};
