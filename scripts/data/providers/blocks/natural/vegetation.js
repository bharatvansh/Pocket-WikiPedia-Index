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
    "minecraft:kelp": {
        id: "minecraft:kelp",
        name: "Kelp",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Kelp"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean biomes"
        },
        description: "Kelp is an underwater plant block that grows in ocean biomes. It can be harvested to obtain the kelp item, which can be eaten dried or used as fuel. It grows upward and can create tall stalks. Kelp can be smelted into dried kelp."
    },
    "minecraft:seagrass": {
        id: "minecraft:seagrass",
        name: "Seagrass",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Seagrass (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean biomes (except frozen)"
        },
        description: "Seagrass is a non-solid plant block found in all ocean biomes except frozen oceans. It grows on the ocean floor and provides a habitat for turtles. It drops nothing when broken unless harvested with shears."
    },
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
    "minecraft:brown_mushroom_block": {
        id: "minecraft:brown_mushroom_block",
        name: "Brown Mushroom Block",
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
        drops: ["Brown Mushroom (0-2)"],
        generation: {
            dimension: "Overworld",
            yRange: "Any"
        },
        description: "The Brown Mushroom Block is a solid block that makes up the cap of huge brown mushrooms. It has a distinct brown, spotted texture on its outer faces. When mined with a tool not enchanted with Silk Touch, it has a chance to drop up to two brown mushrooms. Using Silk Touch allows the player to obtain the block itself. These blocks are most efficiently broken with an axe. They are commonly found in Dark Forest and Mushroom Fields biomes, where they form the massive canopies of giant fungal structures."
    },
    "minecraft:red_mushroom_block": {
        id: "minecraft:red_mushroom_block",
        name: "Red Mushroom Block",
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
        drops: ["Red Mushroom (0-2)"],
        generation: {
            dimension: "Overworld",
            yRange: "Any"
        },
        description: "The Red Mushroom Block forms the large, vibrant red caps of huge red mushrooms found in Dark Forests and Mushroom Fields. Its surface is characterized by a bright red color with white spots. Similar to its brown counterpart, it drops 0-2 red mushrooms when broken without Silk Touch, but can be collected as a whole block using the Silk Touch enchantment. It is categorized as a natural vegetation block and is best harvested with an axe. These blocks are essential for creating the iconic giant mushroom landscapes in Minecraft."
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
    "minecraft:spore_blossom": {
        id: "minecraft:spore_blossom",
        name: "Spore Blossom",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spore Blossom"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves (ceiling)"
        },
        description: "The Spore Blossom is a beautiful decorative block found naturally in Lush Caves, where it attaches to the ceiling. It emits a constant stream of green particles that drift downwards, covering a large area (up to 22.5 blocks horizontally and vertically) with a mystical atmosphere. While it doesn't provide light or functional utility beyond aesthetics, it is highly sought after for its unique particle effect. It can be placed on the underside of any solid block. Breaking it is instantaneous and it always drops as an item, regardless of the tool used."
    },
    "minecraft:pitcher_plant": {
        id: "minecraft:pitcher_plant",
        name: "Pitcher Plant",
        hardness: 0,
        blastResistance: 0,
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
            yRange: "Grown from Pitcher Pods discovered by Sniffers"
        },
        description: "The Pitcher Plant is a large, two-block tall decorative flower introduced in Minecraft 1.20. It grows from Pitcher Pods, which are rare seeds discovered by Sniffers when digging in specific blocks like dirt or moss. The plant has five distinct growth stages before reaching maturity. Once fully grown, it can be harvested for its unique appearance, making it a prized addition to gardens. It cannot be crafted and must be grown from pods obtained through a Sniffer."
    },
    "minecraft:torchflower": {
        id: "minecraft:torchflower",
        name: "Torchflower",
        hardness: 0,
        blastResistance: 0,
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
            yRange: "Grown from Torchflower Seeds discovered by Sniffers"
        },
        description: "Torchflowers are decorative plants introduced in the 1.20 Trails & Tales update. They grow from Torchflower Seeds, which are ancient seeds that Sniffers find by sniffing and digging in the ground. Although its name and vibrant orange-to-red appearance suggest it might emit light, the Torchflower does not actually provide any luminance. It has three growth stages and is primarily used for decoration, crafting orange dye, or breeding bees. Its unique look adds a touch of prehistoric flora to any Minecraft garden."
    },
    "minecraft:small_dripleaf": {
        id: "minecraft:small_dripleaf",
        name: "Small Dripleaf",
        hardness: 0,
        blastResistance: 0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Small Dripleaf (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves"
        },
        description: "Small Dripleaves are elegant aquatic and terrestrial plants that naturally generate in Lush Caves. They can be placed on clay or moss blocks, and if underwater, they can also be placed on dirt and several other block types. When bone meal is used on a small dripleaf, it grows into a Big Dripleaf that can be several blocks tall. They are fragile and break instantly when mined, but require shears to be collected as an item. Unlike big dripleaves, they cannot be stood upon as platforms, serving instead as a decorative element and the initial growth stage for their larger counterparts."
    },
    "minecraft:open_eyeblossom": {
        id: "minecraft:open_eyeblossom",
        name: "Open Eyeblossom",
        hardness: 0,
        blastResistance: 0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Open Eyeblossom"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome (night)"
        },
        description: "The Open Eyeblossom is a unique flower native to the Pale Garden biome, introduced in Minecraft 1.21.50. It blooms at night, revealing a glowing orange eye in its center, though this glow is purely visual and emits no light level. When planted in the Pale Garden, it transitions between open and closed states based on the time of day. Open Eyeblossoms can be crafted into Orange Dye or used to make Suspicious Stew that grants Blindness. Bees interacting with this flower will be poisoned. It emits ambient sounds when placed on Pale Moss Blocks."
    },
    "minecraft:closed_eyeblossom": {
        id: "minecraft:closed_eyeblossom",
        name: "Closed Eyeblossom",
        hardness: 0,
        blastResistance: 0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Closed Eyeblossom"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome (day)"
        },
        description: "The Closed Eyeblossom is the daytime state of the Eyeblossom flower, found in the Pale Garden biome. During the day, its petals are shut tight. It naturally transitions to an Open Eyeblossom at night. Players can harvest it to craft Gray Dye or use it in a Suspicious Stew recipe to obtain Nausea. Like its open counterpart, it is a key feature of the Pale Garden's eerie flora and can be bonemealed on Pale Moss Blocks to propagate."
    },
    "minecraft:pitcher_crop": {
        id: "minecraft:pitcher_crop",
        name: "Pitcher Crop",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pitcher Pod"],
        generation: {
            dimension: "Overworld",
            yRange: "Grown from Pitcher Pods"
        },
        description: "The Pitcher Crop is a plantable crop block introduced in Minecraft 1.20, grown from Pitcher Pods dug up by Sniffers. It advances through four growth stages before producing a mature Pitcher Plant. It requires light level 9 or higher to grow and can be accelerated with bone meal. Unlike other crops, it drops a Pitcher Pod when broken at any growth stage, making it renewable. Players can harvest the fully grown Pitcher Plant to obtain Cyan Dye for building palettes and decoration."
    },
    "minecraft:short_grass": {
        id: "minecraft:short_grass",
        name: "Short Grass",
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
        drops: ["Wheat Seeds (12.5% chance)"],
        generation: {
            dimension: "Overworld",
            yRange: "Plains, Forests, Savanna, and more"
        },
        description: "Short Grass is a common vegetation block introduced in Minecraft 1.20.3 to replace the tall grass texture in most biomes, while the renamed Tall Grass (minecraft:tall_grass) remains much taller and rarer. Found in abundance across nearly every grassy Overworld biome, it can be instantly broken by hand or water and has a chance to drop wheat seeds. It often generates with flowers mixed in, creating natural-looking meadows. Short grass is a purely decorative block that adds visual diversity to landscapes without obstructing player movement."
    },
    "minecraft:pale_oak_sapling": {
        id: "minecraft:pale_oak_sapling",
        name: "Pale Oak Sapling",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Sapling"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "The Pale Oak Sapling is a rare plant introduced in the 1.21.50 update, native to the eerie Pale Garden biome. Like Dark Oak, it must be planted in a 2x2 grid of four saplings to grow into a large Pale Oak tree. They have a distinct desaturated appearance, fitting the monochromatic theme of their home biome. They can be obtained by decaying or breaking Pale Oak Leaves or occasionally purchased from Wandering Traders. When grown, they form the ghostly trees that may house a Creaking Heart."
    },
    "minecraft:hanging_roots": {
        id: "minecraft:hanging_roots",
        name: "Hanging Roots",
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
        drops: ["Hanging Roots"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves, under Rooted Dirt"
        },
        description: "Hanging Roots are decorative vegetation blocks that sprout from the underside of Rooted Dirt blocks, typically found in Lush Caves. They add a detailed, organic feel to cave ceilings and forest floors. While they break instantly by hand, they can only be collected as an item using Shears or a tool with Silk Touch. In Bedrock Edition, they can also be grown by using Bone Meal on a Rooted Dirt block. They are purely decorative and do not obstruct player movement, making them ideal for adding atmosphere to nature-themed builds."
    },
    "minecraft:cocoa": {
        id: "minecraft:cocoa",
        name: "Cocoa",
        hardness: 0.2,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cocoa Beans (2-3)"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle biomes (on Jungle logs)"
        },
        description: "Cocoa is a renewable plant block that grows naturally on the sides of jungle logs in Jungle biomes. It has three growth stages, starting as a small green pod and maturing into a larger orange-brown pod. When fully grown, it drops 2-3 cocoa beans, which are used to craft brown dye and cookies. It breaks instantly when mined with an axe. Players can manually plant cocoa beans on jungle logs (stripped or regular, including wood variants) to farm them. Bone meal can be used to instantly advance their growth stage."
    },
    "minecraft:melon_block": {
        id: "minecraft:melon_block",
        name: "Melon Block",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Melon Slice (3-7)"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle biomes, Savanna villages, Woodland Mansions"
        },
        description: "Melon is a fruit block that generates naturally in jungle biomes, savanna villages, and woodland mansions. It can be farmed from melon seeds planted on farmland. When broken, it drops 3-7 melon slices, which can be eaten or crafted into glistering melon slices or melon seeds. Using a tool with Silk Touch drops the melon block itself. It has a hardness and blast resistance of 1.0 and is most efficiently mined with an axe."
    },
    "minecraft:pumpkin": {
        id: "minecraft:pumpkin",
        name: "Pumpkin",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pumpkin"],
        generation: {
            dimension: "Overworld",
            yRange: "Grassy biomes, Woodland Mansions, Pillager Outposts"
        },
        description: "Pumpkin is a fruit block that generates naturally in patches in most grassy biomes. It has a smooth, orange texture without a face. Players can use shears on a pumpkin to carve it, turning it into a carved pumpkin and dropping four pumpkin seeds. It can be farmed from pumpkin seeds planted on farmland. Pumpkins are essential for creating snow golems and iron golems (using the carved variant) and can be crafted into pumpkin pie."
    },
    "minecraft:carved_pumpkin": {
        id: "minecraft:carved_pumpkin",
        name: "Carved Pumpkin",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Carved Pumpkin"],
        generation: {
            dimension: "Overworld",
            yRange: "Woodland Mansions, Pillager Outposts, Rail rooms"
        },
        description: "Carved Pumpkin is a block with a spooky face carved into one side. It can be obtained by shearing a regular pumpkin or found naturally in woodland mansions and pillager outposts. It is a key component for building Snow Golems and Iron Golems. Additionally, players can wear a carved pumpkin as a helmet to prevent Endermen from becoming hostile when looked at, though it obscures vision with a pumpkin overlay. It can also be combined with a torch to create a Jack o'Lantern."
    }
};
