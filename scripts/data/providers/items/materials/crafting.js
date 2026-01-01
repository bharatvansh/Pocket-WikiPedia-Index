// Pocket Wikipedia Foundation - Crafting Materials Data
// ============================================
// This file contains: Stick, bowl, paper, book, glass bottle,
// brick, nether brick, clay ball, honeycomb, wheat, sugar,
// cocoa beans, charcoal, coal, flint, glowstone dust, redstone dust,
// blaze powder, nether wart, fermented spider eye, glistering melon slice,
// golden carrot (crafting), rabbit foot, dragon breath,
// flow pottery sherd, guster pottery sherd, heart_of_the_sea, nether_star,
// amethyst shard
// ============================================

/**
 * Crafting material items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const craftingMaterials = {
    "minecraft:flow_pottery_sherd": {
        id: "minecraft:flow_pottery_sherd",
        name: "Flow Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Flow motif",
            secondaryUse: "Collecting and mixing pottery designs for custom archaeological-style builds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots that generate in Trial Chambers"]
        },
        specialNotes: [
            "Breaking a Decorated Pot drops the exact bricks and pottery sherds used to craft it",
            "Used as one of the four side ingredients when crafting a Decorated Pot; the chosen sherd determines the pattern on that side",
            "Decorated Pots featuring the Flow design naturally generate in Trial Chambers",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "The Flow Pottery Sherd is an archaeology-themed crafting item that can be used to decorate a Decorated Pot with a swirling loop design reminiscent of a wind charge. In Minecraft Bedrock Edition, it is found in Trial Chambers by breaking naturally generated Decorated Pots that use the Flow sherd in their recipe. When placed into the Decorated Pot crafting recipe, it determines the pattern displayed on one side of the finished pot, letting builders create customized pottery by mixing different sherd designs."
    },
    "minecraft:guster_pottery_sherd": {
        id: "minecraft:guster_pottery_sherd",
        name: "Guster Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Guster motif",
            secondaryUse: "Collecting Trial Chamber-themed pottery designs featuring the Breeze"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots that generate in Trial Chambers"]
        },
        specialNotes: [
            "Breaking a Decorated Pot drops the exact bricks and pottery sherds used to craft it",
            "Used as one of the four side ingredients when crafting a Decorated Pot; the chosen sherd determines the pattern on that side",
            "Decorated Pots featuring the Guster design naturally generate in Trial Chambers",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "The Guster Pottery Sherd is a pottery decoration ingredient that depicts a Breeze and can be incorporated into a Decorated Pot to apply its pattern to one side. In Minecraft Bedrock Edition, players can obtain it in Trial Chambers by breaking naturally generated Decorated Pots that were crafted with the Guster sherd. By combining it with bricks or other pottery sherds in the Decorated Pot recipe, builders can create unique, story-like pottery designs that match the wind-themed Trial Chamber aesthetic."
    },
    "minecraft:heart_of_the_sea": {
        id: "minecraft:heart_of_the_sea",
        name: "Heart of the Sea",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Conduits for underwater exploration",
            secondaryUse: "Essential component for underwater base projects"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in buried treasure chests"]
        },
        specialNotes: [
            "Found exclusively in buried treasure chests",
            "Used to craft Conduits (requires 8 Nautilus Shells + 1 Heart of the Sea)",
            "No particles or glint (Standard item behavior)",
            "Cannot be crafted or obtained through any other means",
            "Rare item that requires treasure hunting to find",
            "Buried treasure maps can be found in shipwrecks and ocean ruins",
            "Required for building underwater farms, bases, and monuments",
            "Conduits provide Conduit Power effect (water breathing, night vision, haste underwater)"
        ],
        description: "The Heart of the Sea is a rare and valuable item found exclusively in buried treasure chests throughout Minecraft's ocean biomes. This glowing, blue-tinged item is the central component required to craft a Conduit, a powerful underwater block that provides players with the Conduit Power effect, granting water breathing, night vision, and increased mining speed when underwater. Players must locate buried treasure using treasure maps found in shipwrecks and ocean ruins, making the Heart of the Sea a reward for dedicated exploration. Once obtained and combined with 8 Nautilus Shells, it creates a Conduit that can revolutionize underwater gameplay by enabling extended deep-sea exploration, mining, and construction without the need for constant resurfacing. The Heart of the Sea's distinctive glowing appearance makes it both visually striking and highly coveted.",
        rarityColor: "§e"
    },
    "minecraft:nether_star": {
        id: "minecraft:nether_star",
        name: "Nether Star",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Beacons",
            secondaryUse: "Trophy item for defeating the Wither"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by the Wither boss"]
        },
        specialNotes: [
            "Always drops 1 from defeating the Wither",
            "Cannot be obtained through any other means",
            "Required exclusively for crafting Beacons",
            "Has enchantment glint (shimmer) but no particle emission",
            "One of the rarest and most difficult items to obtain",
            "Requires summoning and defeating the Wither boss (4 soul sand, 3 wither skeleton skulls)",
            "Beacons provide status effects to players within range",
            "The Nether Star's value makes it a symbol of advanced progression",
            "Wither is one of the most challenging bosses in the game",
            "Can be used in item frames as a decorative trophy"
        ],
        description: "The Nether Star is an exceptionally rare and valuable item obtained exclusively by defeating the Wither, one of Minecraft's most dangerous and challenging bosses. This glowing purple star serves as the central component for crafting Beacons, powerful pyramid-shaped blocks that provide beneficial status effects such as Speed, Haste, Resistance, Jump Boost, and Strength to players within their range. The Wither always drops exactly one Nether Star upon defeat, making it a hard-earned reward that requires preparation, skill, and resources to obtain. Summoning the Wither requires gathering 4 soul sand blocks and 3 wither skeleton skulls, a task that demands significant effort in Nether fortresses. The Nether Star's distinctive purple glow, but no particle effects, make it visually striking, and it's often displayed as a trophy in item frames. As an essential component for Beacon construction, the Nether Star represents a major milestone in a player's progression, unlocking powerful buffs that enhance both survival and building capabilities. Its rarity and the difficulty of obtaining it make the Nether Star one of the most prestigious items in Minecraft Bedrock Edition.",
        themeColor: "§b (Aqua/Rare)"
    },
    "minecraft:amethyst_shard": {
        id: "minecraft:amethyst_shard",
        name: "Amethyst Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Spyglass, Tinted Glass, and Calibrated Sculk Sensor",
            secondaryUse: "Creating Block of Amethyst and crafting decorative amethyst blocks"
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Budding Amethyst in Amethyst Geodes", "Found in Ancient City and Trial Chamber chests"]
        },
        specialNotes: [
            "Harvested by mining Amethyst Clusters growing on Budding Amethyst blocks",
            "Budding Amethyst cannot be moved or collected - it only generates naturally",
            "Amethyst Clusters drop 4 Amethyst Shards when mined with a pickaxe",
            "Using Fortune enchantment can increase the yield up to 16 shards per cluster",
            "Mined with anything other than a pickaxe drops 2 shards",
            "Can be found in chest loot: Ancient Cities (1-15 shards) and Trial Chambers (8-20 shards)",
            "Nine Amethyst Shards craft into one Block of Amethyst",
            "Required for crafting Spyglass (1 shard), Tinted Glass (2 shards), and Calibrated Sculk Sensor (4 shards)",
            "Amethyst Clusters take time to grow on Budding Amethyst - not renewable quickly",
            "Added in Caves & Cliffs update (1.17) alongside amethyst geodes"
        ],
        description: "Amethyst Shards are crystalline crafting materials obtained exclusively from Amethyst Geodes, rare underground structures that generate in caves and occasionally on the surface. These beautiful purple shards are harvested by mining Amethyst Clusters that grow on Budding Amethyst blocks within geodes, which serve as the heart of amethyst growth. When mined with a pickaxe, an Amethyst Cluster drops 4 shards, and Fortune enchantment can increase this yield up to 16 shards, making enchanted tools highly valuable for amethyst farming. The Budding Amethyst block itself cannot be moved or collected, only generating naturally, which means players must find geodes to access this resource. Beyond mining, Amethyst Shards can be found as loot in Ancient Cities (1-15 shards) and Trial Chambers (8-20 shards), providing alternative acquisition methods. These versatile shards serve as essential crafting ingredients for multiple items: Spyglass (for zoomed exploration), Tinted Glass (for decorative light-blocking windows), Calibrated Sculk Sensor (for advanced redstone), and Block of Amethyst (for decorative building). The renewable nature of Amethyst Clusters, which slowly regrow on Budding Amethyst, makes Amethyst Shards a sustainable resource once a geode is discovered. Their distinctive purple color and crystalline appearance also make them popular for decorative builds and pixel art, adding both functionality and aesthetic appeal to Minecraft Bedrock Edition."
    }
};
