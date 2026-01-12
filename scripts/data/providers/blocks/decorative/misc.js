// Pocket Wikipedia Foundation - Miscellaneous Decorative Blocks Data
// ============================================
// This file contains: Amethyst block, budding amethyst, amethyst clusters,
// carpets (all 16 colors), wool (all 16 colors), mob heads (all types),
// dragon egg, sponge, wet sponge, hay bale, target, honey block,
// slime block, dried kelp block, bone block, prismarine variants,
// purpur block, purpur pillar, crying obsidian, reinforced deepslate,
// fences (all types), iron bars, chain
// ============================================

/**
 * Miscellaneous decorative blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const miscDecorativeBlocks = {
    "minecraft:pink_petals": {
        id: "minecraft:pink_petals",
        name: "Pink Petals",
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
        drops: ["Pink Petals"],
        generation: {
            dimension: "Overworld",
            yRange: "Cherry Grove biome"
        },
        description: "Pink Petals are decorative blocks found in Cherry Grove biomes. Introduced in version 1.20, they grow in clusters of up to four on a single block, creating a layered floral carpet. They can be placed on dirt, grass, moss, and mud. These petals are renewable; using bone meal increases their density or spreads them to nearby grass. They attract and pollinate bees and can be crafted directly into Pink Dye. Their unique stacking ability and soft aesthetic make them ideal for detailed landscaping, garden paths, and adding floral accents to builds."
    },
    "minecraft:amethyst_block": {
        id: "minecraft:amethyst_block",
        name: "Amethyst Block",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Amethyst Block"],
        generation: {
            dimension: "Overworld",
            yRange: "0-64"
        },
        description: "Amethyst Block is a decorative purple block found in amethyst geodes. It can be crafted from four amethyst shards and has a distinctive crystalline appearance. Amethyst blocks are purely decorative and make a unique musical sound when walked on or broken."
    },
    "minecraft:budding_amethyst": {
        id: "minecraft:budding_amethyst",
        name: "Budding Amethyst",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes (Y -58 to 30)"
        },
        description: "Budding Amethyst is a rare block found in amethyst geodes that periodically grows amethyst buds and clusters on its sides. It is unobtainable in Survival mode, dropping nothing even if broken with Silk Touch. This ensures geodes remain valuable, permanent sites for farming amethyst shards. In Bedrock Edition, buds can grow into flowing water. Since it is the only block capable of producing amethyst clusters, players generally build dedicated farms around these blocks rather than attempting to relocate or use them for building."
    },
    "minecraft:bone_block": {
        id: "minecraft:bone_block",
        name: "Bone Block",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Bone Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 9 bone meal"
        },
        description: "Bone Block is a decorative block crafted from nine bone meal arranged in a 3x3 pattern. It features a distinctive off-white, porous texture resembling compressed bone material. Each bone block yields 9 bone meal when broken, making it an efficient storage method for bone meal. The block serves as a compact way to store large quantities of bone meal and provides a unique building material with a pale, weathered appearance. Bone blocks are popular for creating ancient, archaeological, or macabre-themed builds due to their bone-like aesthetic."
    },
    "minecraft:prismarine": {
        id: "minecraft:prismarine",
        name: "Prismarine",
        hardness: 1.5,
        blastResistance: 6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Prismarine"],
        generation: {
            dimension: "Overworld (Ocean Monuments)",
            yRange: "Any"
        },
        description: "Prismarine is a decorative block found exclusively in ocean monuments and underwater ruins. It comes in three variants: prismarine, prismarine bricks, and dark prismarine. Prismarine is obtained by mining it with any pickaxe, and can be crafted from prismarine shards obtained from sea lanterns. Its distinctive teal color makes it popular for underwater builds."
    },
    "minecraft:obsidian": {
        id: "minecraft:obsidian",
        name: "Obsidian",
        hardness: 50.0,
        blastResistance: 1200.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Obsidian"],
        generation: {
            dimension: "Overworld",
            yRange: "Any"
        },
        description: "Obsidian is one of the hardest blocks in Minecraft, formed when water flows over a lava source block. It requires a diamond or netherite pickaxe to mine, taking about 9.4 seconds with a diamond pickaxe. Obsidian is essential for building Nether portals and is practically immune to explosions, making it ideal for blast-resistant structures."
    },
    "minecraft:reinforced_deepslate": {
        id: "minecraft:reinforced_deepslate",
        name: "Reinforced Deepslate",
        hardness: 55,
        blastResistance: 1200,
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
            dimension: "Overworld",
            yRange: "Ancient Cities (Deep Dark)"
        },
        description: "Reinforced Deepslate is an extremely durable, blast-resistant block that generates as a frame-like structure in the center of each ancient city. It has a hardness of 55 and a blast resistance of 1200, and it drops nothing when broken, making it unobtainable in Survival mode even with Silk Touch. In Bedrock Edition, reinforced deepslate has no tool associated with it, so it breaks at the same speed regardless of what you use, and it cannot be moved by pistons. Builders mainly use it in Creative for its dark, industrial look and for recreating ancient city or portal-frame themed builds."
    },
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        hardness: 10.0,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Heavy Core"],
        generation: {
            dimension: "Overworld",
            yRange: "Ominous Vaults in Trial Chambers"
        },
        description: "The Heavy Core is a unique crafting component introduced in Minecraft 1.21 that can only be obtained by unlocking Ominous Vaults with Ominous Trial Keys in Trial Chambers. This mysterious, dense block serves as a key ingredient for crafting the Mace when combined with a Breeze Rod. The Heavy Core represents one of the most challenging rewards to obtain in the game, requiring players to defeat enhanced mobs spawned during ominous events. Its distinctive appearance and limited availability make it a prized possession for players seeking to craft the powerful Mace weapon."
    },
    "minecraft:creaking_heart": {
        id: "minecraft:creaking_heart",
        name: "Creaking Heart",
        hardness: 10,
        blastResistance: 10,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 7,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Resin Clump (1-3)"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "The Creaking Heart is a block found in Pale Garden biomes that spawns the Creaking, a hostile entity that only moves when not being watched. For the heart to activate, it must be placed between two vertically aligned Pale Oak Logs. During the night or in low-light, it pulses orange and summons Creakings to defend its location. Crucially, the Creaking cannot be damaged directly; players must locate and destroy the pulsing Heart to defeat it. This adds a strategic, sight-based challenge to exploring the Pale Garden."
    },
    "minecraft:resin_block": {
        id: "minecraft:resin_block",
        name: "Block of Resin",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Block of Resin"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Block of Resin is a vibrant orange block crafted from nine resin clumps. Clumps are dropped by a Creaking Heart when it or its linked Creaking mob is attacked. Beyond decoration, the block can be refined into resin bricks or used as a key ingredient in crafting a Creaking Heart (combined with two Pale Oak Logs). This allows players to manually spawn and control the mysterious Creaking mob. Introduced in Minecraft 1.21.50, it is a central resource for players exploring the Pale Garden's unique mechanics."
    },
    "minecraft:copper_bars": {
        id: "minecraft:copper_bars",
        name: "Copper Bars",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Copper Bars"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Copper bars are decorative fencing blocks with a hardness of 5.0 and blast resistance of 6.0, harvested with a wooden pickaxe. Like iron bars, they connect to adjacent blocks to form barriers. They feature four stages of oxidation (unoxidized, exposed, weathered, and oxidized), shifting from orange to teal. Players can use honeycomb to wax bars and lock their appearance or use axes and lightning to scrape away oxidation layers. They connect to solid blocks and other bars, providing a dynamic, aging aesthetic for windows, cages, and intricate structural designs."
    },
    "minecraft:slime_block": {
        id: "minecraft:slime_block",
        name: "Slime Block",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Slime Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from 9 slime balls"
        },
        description: "Slime Block is a unique functional block with special properties that causes entities to bounce when they land on it. When an entity contacts a slime block, it bounces in the opposite direction with significant velocity, making it useful for trampolines and redstone mechanisms. The block is crafted from nine slime balls obtained from slime mobs. Unlike other blocks, slime blocks are not completely solid - they allow entities to partially pass through them before bouncing. They have very low hardness and blast resistance, making them easy to break but also susceptible to explosions. Slime blocks can be used in innovative redstone contraptions for item transportation and entity launching systems."
    },
    "minecraft:sniffer_egg": {
        id: "minecraft:sniffer_egg",
        name: "Sniffer Egg",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Sniffer Egg"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean Ruins (Loot)"
        },
        description: "The sniffer egg is a large, decorative block that eventually hatches into a snifflet. It can be found in suspicious sand within warm ocean ruins or obtained by breeding two adult sniffers. When placed on a moss block, the egg hatches in approximately 10 minutes, which is twice as fast as on any other block type."
    },
    "minecraft:amethyst_cluster": {
        id: "minecraft:amethyst_cluster",
        name: "Amethyst Cluster",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 5,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Amethyst Shard (4)", "Amethyst Cluster (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes"
        },
        description: "An Amethyst Cluster is the fourth and final stage of growth for an amethyst bud. Found exclusively in amethyst geodes on budding amethyst blocks, it emits a soft light level of 5. When mined with a pickaxe of any tier, it drops four amethyst shards, which can be increased with the Fortune enchantment. If mined with any other tool or by hand, it drops nothing unless harvested with a Silk Touch tool. Amethyst clusters are highly decorative and make a pleasant chime sound when walked on or broken."
    },
    "minecraft:frogspawn": {
        id: "minecraft:frogspawn",
        name: "Frogspawn",
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
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Laid by frogs in water"
        },
        description: "Frogspawn is a non-solid block that is laid by frogs after they are bred with slimeballs in Minecraft Bedrock Edition. It must be placed on the surface of water that has at least one air block above it. Over time, it hatches into tadpoles, with the duration depending on random ticks. Frogspawn is extremely fragile; it is destroyed instantly if broken by any means, even with Silk Touch, and does not drop as an item. It is also destroyed if the water underneath it is removed or if a player or most entities fall on it, making it one of the most delicate blocks in the game."
    },
    "minecraft:turtle_egg": {
        id: "minecraft:turtle_egg",
        name: "Turtle Egg",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Turtle Egg"],
        generation: {
            dimension: "Overworld",
            yRange: "Sandy beaches"
        },
        description: "Turtle Eggs are blocks laid by sea turtles on sandy beaches after breeding. They must be placed on sand or red sand to hatch into baby turtles over several nights. These eggs are extremely fragile; they can be broken if players or mobs jump on them. Mobs like zombies and skeletons are attracted to turtle eggs and will actively try to trample them. Using a tool with Silk Touch is required to obtain the egg as an item; otherwise, it will break and drop nothing. They can be placed in clusters of up to four on a single block."
    },
    "minecraft:chain": {
        id: "minecraft:chain",
        name: "Chain",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Chain"],
        generation: {
            dimension: "Overworld",
            yRange: "Bastion Remnants / Mineshafts"
        },
        description: "Chain is a metallic decorative block that can be placed horizontally or vertically. Chains are naturally generated in Bastion Remnants, Ruined Portals, and Mineshafts. They can also be crafted using one Iron Ingot and two Iron Nuggets. Chains connect to each other and to lanterns, making them perfect for suspending light sources from ceilings. Chains have a small collision box aligned with their center. They are primarily used for decoration, especially for hanging lanterns or bells."
    },
    "minecraft:iron_bars": {
        id: "minecraft:iron_bars",
        name: "Iron Bars",
        hardness: 5.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Iron Bars"],
        generation: {
            dimension: "Overworld, End",
            yRange: "Strongholds, Villages, End Cities"
        },
        description: "Iron Bars are decorative blocks used to create fences, cages, or windows. They are crafted from six iron ingots and can be found naturally in strongholds, villages, igloos, woodland mansions, and end cities. Like glass panes, they connect to adjacent solid blocks and other iron bars, forming a thin barrier. They allow light to pass through completely. While they look fragile, they have the same blast resistance as cobblestone. In the End dimension, they are found in cages around End Crystals atop obsidian pillars."
    },
    "minecraft:small_amethyst_bud": {
        id: "minecraft:small_amethyst_bud",
        name: "Small Amethyst Bud",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Small Amethyst Bud (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes"
        },
        description: "Small Amethyst Bud is the first growth stage of an amethyst cluster, appearing exclusively on the sides of Budding Amethyst blocks in geodes. It emits a faint light level of 1. Like all amethyst buds, it cannot be mined with a standard pickaxe; breaking it without Silk Touch yields nothing. To collect the bud itself, a Silk Touch tool is required. It is primarily decorative, representing the initial phase of crystal growth before it matures into larger forms."
    },
    "minecraft:medium_amethyst_bud": {
        id: "minecraft:medium_amethyst_bud",
        name: "Medium Amethyst Bud",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 2,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Medium Amethyst Bud (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes"
        },
        description: "Medium Amethyst Bud is the second growth stage of the amethyst crystal lifecycle, found on Budding Amethyst blocks. It emits a light level of 2, slightly brighter than the small variant. This block is unobtainable via standard mining, as it drops nothing when broken without the Silk Touch enchantment. When harvested correctly, it serves as a distinct decorative element for detailed crystal builds, marking the progression from a small sprout to a larger formation."
    },
    "minecraft:large_amethyst_bud": {
        id: "minecraft:large_amethyst_bud",
        name: "Large Amethyst Bud",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 4,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Large Amethyst Bud (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Amethyst Geodes"
        },
        description: "Large Amethyst Bud is the third growth stage of an amethyst cluster, preceding the fully grown cluster. It generates on Budding Amethyst blocks within geodes and emits a light level of 4. Like other buds, it is fragile and drops nothing if mined without Silk Touch. With Silk Touch, it can be collected and placed on any block face. Visually prominent, it signifies a nearly mature crystal and is often used in builds to create varied, organic-looking crystal caves."
    },
    "minecraft:hanging_sign": {
        id: "minecraft:hanging_sign",
        name: "Hanging Sign",
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
        drops: ["Hanging Sign"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Hanging Sign is an elegant decorative block introduced in Minecraft 1.20 that displays text in a hanging format. Crafted from two chains and stripped wood, hanging signs provide a sophisticated alternative to standard signs. They can only be placed on the bottom face of solid blocks, with chains attaching to the ceiling. Like regular signs, they can hold up to 90 characters on four lines. Perfect for tavern names, shop signs, and detailed player-created signage systems."
    },
    "minecraft:flower_pot": {
        id: "minecraft:flower_pot",
        name: "Flower Pot",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Flower Pot", "Brick (if empty)"],
        generation: {
            dimension: "Overworld",
            yRange: "Woodland Mansions, Igloos"
        },
        description: "The Flower Pot is a decorative block that holds and displays flowers, mushrooms, saplings, cacti, and other plantable items. Crafted from three bricks arranged in a U-shape, it generates naturally in woodland mansion rooms and igloos. When a plant is placed inside, the pot shows the plant's texture; when empty, it displays the brick texture. Flower pots can be placed on any solid block or as headgear on armor stands. In Bedrock Edition, they can also be filled with dead bushes, ferns, and tall grass. They are essential for indoor gardening, herb gardens, and detailed botanical builds."
    }
};
