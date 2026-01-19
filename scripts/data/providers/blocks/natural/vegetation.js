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
    "minecraft:vine": {
        id: "minecraft:vine",
        name: "Vines",
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
        drops: ["Vines (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungles, Swamps, Lush Caves"
        },
        description: "Vines are climbable vegetation blocks that grow naturally on trees and walls in Jungles, Swamps, and Lush Caves. They can spread downwards to adjacent air blocks, allowing them to cover large areas over time. Players can climb them like ladders if they are supported by a solid block behind them. To harvest vines as an item, Shears must be used; otherwise, they drop nothing. They are widely used for decoration to add an overgrown or ancient look to builds. In Bedrock Edition, vines can be used to stop a player's fall damage if they touch the wall while falling."
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
    "minecraft:azalea_leaves": {
        id: "minecraft:azalea_leaves",
        name: "Azalea Leaves",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Hoe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Azalea Leaves (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves biome"
        },
        description: "Azalea Leaves are natural foliage blocks that generate as part of Azalea trees, which mark the location of Lush Caves below. They are characterized by a dense, vibrant green texture. Unlike flowering azalea leaves, they do not contain blossoms. These leaves can be harvested using shears or a tool with Silk Touch; otherwise, they have a chance to drop azalea saplings or flowering azalea saplings. They are highly flammable and serve as a beautiful decorative block for gardens and custom trees, reflecting the lush atmosphere of their native biome."
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
    },
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
            yRange: "Oceans (except Frozen/Warm/Deep Warm)"
        },
        description: "Kelp is an aquatic plant block that generates naturally in all ocean biomes except frozen, warm, and deep warm oceans. It grows in tall stalks from the ocean floor up to the water surface. When broken, it drops the Kelp item, which can be dried in a furnace to create Dried Kelp (a food source) or crafted into Dried Kelp Blocks for fuel. Kelp has a unique mechanic where placing it converts flowing water into source blocks, making it extremely useful for creating bubble columns with Soul Sand or Magma Blocks."
    },
    "minecraft:cactus": {
        id: "minecraft:cactus",
        name: "Cactus",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cactus"],
        generation: {
            dimension: "Overworld",
            yRange: "Deserts, Badlands"
        },
        description: "Cactus is a prickly plant block that generates naturally in dry biomes like Deserts and Badlands. It deals damage to any mob or player that touches it, making it useful for simple mob farms and defenses. Cacti can only be placed on Sand, Red Sand, or other Cactus blocks, and they cannot be placed directly adjacent to other solid blocks. When a block is placed next to a cactus, it breaks instantly. It can be smelted in a furnace to produce Green Dye."
    },
    "minecraft:deadbush": {
        id: "minecraft:deadbush",
        name: "Dead Bush",
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
        drops: ["Stick (0-2)", "Dead Bush (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Deserts, Badlands, Giant Tree Taigas"
        },
        description: "Dead Bush is a decorative transparent block found in arid biomes such as Deserts, Badlands, and Giant Tree Taigas. It represents a withered shrub and provides an atmospheric touch to dry environments. When broken by hand or with most tools, it has a chance to drop 0-2 Sticks, serving as an emergency source of wood in treeless areas. To collect the Dead Bush itself for decoration (e.g., in flower pots), players must use Shears."
    },
    "minecraft:wither_rose": {
        id: "minecraft:wither_rose",
        name: "Wither Rose",
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
        drops: ["Wither Rose"],
        generation: {
            dimension: "Overworld, Nether, End",
            yRange: "N/A (Spawns when Wither kills a mob)"
        },
        description: "The Wither Rose is a rare, dark flower that is created when a Wither kills a non-undead mob. Unlike most plants, it inflicts the Wither effect on any creature that walks through it, making it a powerful tool for traps and automated mob farms. It can be placed on most solid blocks, including netherrack and soul sand, which is atypical for flowers. Despite its lethal nature, it can be used to craft Black Dye or as a decorative element in more macabre builds. It is one of the few flowers that can be found in any dimension, provided a Wither has been summoned to create it."
    },
    "minecraft:cherry_sapling": {
        id: "minecraft:cherry_sapling",
        name: "Cherry Sapling",
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
        drops: ["Cherry Sapling"],
        generation: {
            dimension: "Overworld",
            yRange: "Cherry Grove biome"
        },
        description: "Cherry Sapling is a beautiful pink-flowered sapling introduced in the 1.20 Trails & Tales update. It grows naturally in the Cherry Grove biome and can be obtained by breaking or decaying Cherry Leaves. Unlike dark oak saplings, a single cherry sapling can grow into a full cherry tree, though it may take several growth stages. Its vibrant pink appearance makes it a popular choice for decorative landscaping and botanical gardens. Bone meal can be used to accelerate its growth into a mature cherry tree with its iconic falling leaf particles."
    },
    "minecraft:allium": {
        id: "minecraft:allium",
        name: "Allium",
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
        drops: ["Allium"],
        generation: {
            dimension: "Overworld",
            yRange: "Flower Forest, Meadow biomes"
        },
        description: "Alliums are decorative flowers with distinctive ball-shaped magenta blooms. They are primarily found in the Flower Forest and Meadow biomes. Players can use them to craft magenta dye or in a suspicious stew to gain Fire Resistance for a short duration. They can be placed in flower pots for decoration and are a favorite for bees."
    },
    "minecraft:azure_bluet": {
        id: "minecraft:azure_bluet",
        name: "Azure Bluet",
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
        drops: ["Azure Bluet"],
        generation: {
            dimension: "Overworld",
            yRange: "Plains, Flower Forest, Meadow biomes"
        },
        description: "Azure Bluets are small, white flowers that grow in Plains, Flower Forests, and Meadows. They are often found in large patches and can be used to craft light gray dye. When used to make suspicious stew, they grant the Blindness effect (7 seconds in Bedrock). Their delicate appearance makes them popular for landscaping and garden builds."
    },
    "minecraft:cornflower": {
        id: "minecraft:cornflower",
        name: "Cornflower",
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
        drops: ["Cornflower"],
        generation: {
            dimension: "Overworld",
            yRange: "Plains, Flower Forest biomes"
        },
        description: "Cornflowers are vibrant blue flowers naturally generating in Plains and Flower Forest biomes. Introduced in the Village & Pillage update, they provide an easy source of blue dye. In Bedrock Edition, a suspicious stew crafted with a cornflower gives players the Jump Boost effect for 5 seconds. They are frequently used to add a splash of deep blue to meadows and gardens."
    },
    "minecraft:lily_of_the_valley": {
        id: "minecraft:lily_of_the_valley",
        name: "Lily of the Valley",
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
        drops: ["Lily of the Valley"],
        generation: {
            dimension: "Overworld",
            yRange: "Forest, Flower Forest, Meadow biomes"
        },
        description: "Lily of the Valley is a beautiful, bell-shaped white flower found in Forest biomes. Despite its elegant look, it is poisonous in-game; using it in a suspicious stew inflicts the Poison effect for 11 seconds. It is a reliable source of white dye and adds a touch of sophistication to forest floors and indoor floral arrangements."
    },
    "minecraft:oxeye_daisy": {
        id: "minecraft:oxeye_daisy",
        name: "Oxeye Daisy",
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
        drops: ["Oxeye Daisy"],
        generation: {
            dimension: "Overworld",
            yRange: "Plains, Flower Forest, Meadow biomes"
        },
        description: "Oxeye Daisies are common wildflowers with white petals and yellow centers, found in Plains and Flower Forests. They can be crafted into light gray dye and produce a suspicious stew that grants the Regeneration effect for 7 seconds. They are versatile decorative blocks that fit well in any rural or naturalistic Minecraft build."
    },
    "minecraft:red_mushroom": {
        id: "minecraft:red_mushroom",
        name: "Red Mushroom",
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
        drops: ["Red Mushroom"],
        generation: {
            dimension: "Overworld, Nether",
            yRange: "0–128 (Shaded areas)"
        },
        description: "Red Mushrooms are small, non-solid fungal vegetation found in dark or shaded areas across many biomes, especially Swamps, Dark Forests, and the Nether. They can also be found in Mushroom Fields and generated by applying bone meal to mycelium or moss. While they cannot grow in high light levels, they can be planted on podzol, mycelium, or soul sand regardless of light. They are used to craft mushroom stew, rabbit stew, and suspicious stew, or can be grown into huge red mushrooms using bone meal. Their bright red cap with white spots makes them easily identifiable in the wild."
    },
    "minecraft:sweet_berry_bush": {
        id: "minecraft:sweet_berry_bush",
        name: "Sweet Berry Bush",
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
        drops: ["Sweet Berries"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga, Snowy Taiga, Old Growth Taiga"
        },
        description: "A Sweet Berry Bush is a prickly plant found in Taiga biomes that produces Sweet Berries. It has four growth stages; harvesting a mature bush (stages 3 and 4) provides 1-3 berries. Players and most mobs that walk through the bush are slowed down and take half a heart of damage every second. They can be planted on grass, dirt, podzol, or moss blocks. Foxes are immune to its damage and can harvest the berries themselves. It serves as a natural defensive barrier and a renewable food source."
    },
    "minecraft:cave_vines": {
        id: "minecraft:cave_vines",
        name: "Cave Vines",
        hardness: 0.2,
        blastResistance: 0.2,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 14,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Glow Berries"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves"
        },
        description: "Cave Vines are hanging plants native to Lush Caves. They grow downwards from the ceiling and can grow up to 26 blocks long. Some segments of the vine produce Glow Berries, which emit a light level of 14, providing natural illumination underground. These berries can be eaten or used to breed foxes. Cave Vines can be climbed like regular vines, making them useful for vertical navigation in caves. They can be grown by placing a Glow Berry on the underside of most solid blocks."
    },
    "minecraft:waterlily": {
        id: "minecraft:waterlily",
        name: "Lily Pad",
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
        drops: ["Lily Pad"],
        generation: {
            dimension: "Overworld",
            yRange: "Swamp, Mangrove Swamp biomes"
        },
        description: "Lily Pads are flat, green vegetation blocks that float on the surface of water and ice. They generate naturally in Swamps and Mangrove Swamps. Players and mobs can walk on top of them, allowing for easy travel across water without swimming. They can be placed on source blocks and flowing water, but they will break if the water beneath them is removed. In Bedrock Edition, they can also be used as a source of green dye when composted, or simply as a decorative element for garden ponds and aquatic landscapes."
    },
    "minecraft:brown_mushroom": {
        id: "minecraft:brown_mushroom",
        name: "Brown Mushroom",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Brown Mushroom"],
        generation: {
            dimension: "Overworld, Nether",
            yRange: "Shaded areas, Mushroom Fields, Nether floors"
        },
        description: "The Brown Mushroom is a small fungal vegetation found in low-light environments throughout the Overworld and the Nether. Unlike most plants, it emits a very faint light level of 1 in Bedrock Edition. It can be planted on most solid blocks in light levels below 13, or on mycelium and podzol at any light level. When treated with bone meal on these surfaces, it grows into a huge brown mushroom. It is a key ingredient for crafting Mushroom Stew, Rabbit Stew, and various Suspicious Stews, making it a valuable resource for survival food and effects."
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
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Seagrass (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Underwater (Oceans, Rivers, Swamps)"
        },
        description: "Seagrass is an underwater vegetation block that generates naturally in most aquatic biomes. It serves as the primary food source for turtles; feeding them seagrass allows players to breed them, and baby turtles will consume it to grow faster. While it can be broken by hand, it only drops seagrass items when harvested with shears. It can be grown on underwater dirt, sand, or gravel by using bone meal. In Bedrock Edition, it provides a lush, vibrant look to underwater landscapes and is essential for turtle-based resource farming."
    },
    "minecraft:sunflower": {
        id: "minecraft:sunflower",
        name: "Sunflower",
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
        drops: ["Sunflower"],
        generation: {
            dimension: "Overworld",
            yRange: "Sunflower Plains biome"
        },
        description: "Sunflowers are tall, vibrant yellow flowers that naturally generate in the Sunflower Plains biome. A unique characteristic of sunflowers is that they always face east, regardless of where they are placed, making them a natural compass for players. They can be used to craft yellow dye or added to a suspicious stew recipes to provide health restoration. Using bone meal on a sunflower will cause it to drop another sunflower item, making them easily renewable for decoration and dye production."
    },
    "minecraft:lilac": {
        id: "minecraft:lilac",
        name: "Lilac",
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
        drops: ["Lilac"],
        generation: {
            dimension: "Overworld",
            yRange: "Forest biomes"
        },
        description: "Lilacs are beautiful, two-block tall flowers characterized by their fragrant, light purple clusters of blossoms. They generate naturally in many forested biomes, including the standard Forest and Birch Forest. Like other tall flowers, applying bone meal to a lilac cause it to drop an additional lilac item. They are primarily used for decoration in gardens and can be crafted into two pieces of magenta dye. Their height and color make them a popular choice for adding vertical variety and soft tones to Minecraft landscapes."
    },
    "minecraft:rose_bush": {
        id: "minecraft:rose_bush",
        name: "Rose Bush",
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
        drops: ["Rose Bush"],
        generation: {
            dimension: "Overworld",
            yRange: "Forest biomes"
        },
        description: "Rose Bushes are tall, thorny plants featuring multiple vibrant red blooms. They are commonly found in Forest biomes and are a reliable source of red dye, yielding two pieces per plant. Rose bushes are frequently used for landscaping and as decorative barriers in gardens. In Bedrock Edition, using bone meal on a placed rose bush will produce a copy of the item. Their classic red appearance adds a traditional touch to floral arrangements and can be used to add color to various building materials through dye."
    },
    "minecraft:peony": {
        id: "minecraft:peony",
        name: "Peony",
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
        drops: ["Peony"],
        generation: {
            dimension: "Overworld",
            yRange: "Forest biomes"
        },
        description: "Peonies are large, two-block tall flowers that bloom with delicate pink petals. They generate naturally in Forest biomes and are prized for their soft, aesthetic appeal in garden designs. Like other tall flowers, they can be easily farmed by applying bone meal, which causes the plant to drop a duplicate peony item. One peony can be crafted into two pieces of pink dye, making them an efficient way to obtain the color. They are ideal for creating lush, floral environments and adding a touch of elegance to any build."
    },
    "minecraft:tall_grass": {
        id: "minecraft:tall_grass",
        name: "Tall Grass",
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
        drops: ["Wheat Seeds (chance)", "Tall Grass (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Plains, Savannas, Jungles"
        },
        description: "Tall Grass is a two-block high variant of grass that generates naturally in various biomes like Plains, Savannas, and Jungles. Unlike regular short grass, it provides more visual density to the landscape. When broken by hand, it has a chance to drop wheat seeds, but it must be harvested with Shears to be collected as an item. It can be grown by applying bone meal to short grass or directly to a grass block. Its height makes it useful for creating overgrown aesthetics or providing camouflage in survival situations."
    },
    "minecraft:bamboo_sapling": {
        id: "minecraft:bamboo_sapling",
        name: "Bamboo Sapling",
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
        drops: ["Bamboo"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle biomes"
        },
        description: "A Bamboo Sapling is the initial growth stage of a bamboo plant. It is created when a player plants bamboo on a valid block like grass, dirt, or sand. After a short period, it matures into a full bamboo stalk. While in this stage, it is extremely fragile and will break instantly if harvested or if its supporting block is removed. In Bedrock Edition, it's a key part of the fast-growing bamboo ecosystem, allowing players to quickly establish large bamboo forests for wood, fuel, and crafting."
    },
    "minecraft:moss_carpet": {
        id: "minecraft:moss_carpet",
        name: "Moss Carpet",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Anything",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Moss Carpet"],
        generation: {
            dimension: "Overworld",
            yRange: "Lush Caves"
        },
        description: "Moss Carpet is a thin, decorative block that generates naturally in Lush Caves. It can also be crafted from two moss blocks or grown by using bone meal on a moss block. It is one of the few carpeting blocks that is non-flammable and provides a soft, green texture to floors. Because it is so thin, it does not obstruct the player's movement and can be used to hide lighting sources like sea lanterns or glowstone while still allowing light to pass through. It is also a source of decoration that adds a life-like, organic feel to builds."
    },
    "minecraft:fern": {
        id: "minecraft:fern",
        name: "Fern",
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
        drops: ["Wheat Seeds (12.5% chance)", "Fern (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga, Jungle, Flower Forest"
        },
        description: "Ferns are decorative vegetation blocks that add texture and detail to forest floors, especially in Taiga and Jungle biomes. They share properties with tall grass, appearing as small, bushy green plants. While they don't produce unique items, they can be harvested with shears for use in landscaping or placed in flower pots. Using bone meal on a fern will transform it into a Large Fern, which is two blocks tall. They are a staple for builders looking to create organic environments."
    },
    "minecraft:reeds": {
        id: "minecraft:reeds",
        name: "Sugar Cane",
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
        drops: ["Sugar Cane"],
        generation: {
            dimension: "Overworld",
            yRange: "Banks of water (0-128)"
        },
        description: "Sugar Cane is a vital plant found naturally along the banks of rivers and oceans in the Overworld. In Bedrock Edition, it can be instantly grown to a maximum height of three blocks using bone meal, provided it is planted on grass, dirt, sand, or podzol adjacent to water. It is primarily used to craft paper for books and maps, or sugar for culinary and alchemical recipes. Breaking the bottom section will cause all segments above it to drop as items, making harvesting quick and efficient."
    },
    "minecraft:bamboo": {
        id: "minecraft:bamboo",
        name: "Bamboo",
        hardness: 1.0,
        blastResistance: 1.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle and Bamboo Jungle biomes"
        },
        description: "Bamboo is a fast-growing plant primarily found in Jungle biomes. It can grow exceptionally tall and is an extremely versatile resource. Bamboo can be used as fuel, to breed pandas, or crafted into scaffolding, sticks, and the bamboo wood set. In Bedrock Edition, using bone meal on bamboo will cause it to grow instantly. While it can be broken with any tool, a sword or axe is the most effective. It serves as a sustainable source of building materials and fuel for many survival projects."
    },
    "minecraft:large_fern": {
        id: "minecraft:large_fern",
        name: "Large Fern",
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
        drops: ["Large Fern (with Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Jungle and Taiga biomes"
        },
        description: "The Large Fern is a two-block tall variant of the common fern, found naturally in lush biomes like Jungles and Taigas. Like its smaller counterpart, it is purely decorative and adds a dense, wild aesthetic to landscapes. When broken by hand, it has a chance to drop wheat seeds, but it must be harvested with Shears to be obtained as an item. Applying bone meal to a regular fern will cause it to grow into a Large Fern, providing builders with an excellent option for realistic forest undergrowth."
    },
    "minecraft:yellow_flower": {
        id: "minecraft:yellow_flower",
        name: "Dandelion",
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
        drops: ["Dandelion"],
        generation: {
            dimension: "Overworld",
            yRange: "Most grassy biomes"
        },
        description: "The Dandelion is one of the most common flowers in Minecraft, recognizable by its bright yellow petals. It generates naturally in most grassy biomes across the Overworld. Dandelions are a primary source of yellow dye and can be used to craft suspicious stew, which provides a Saturation effect in Bedrock Edition. In addition to their practical uses, they are popular for decoration and are a favorite for bees. Applying bone meal to grass blocks in favorable biomes will produce more dandelions."
    }
};
