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
    "minecraft:web": {
        id: "minecraft:web",
        name: "Cobweb",
        hardness: 4.0,
        blastResistance: 4.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Sword",
            minTier: "None",
            silkTouch: true
        },
        drops: ["String (1)", "Cobweb (with Silk Touch/Shears)"],
        generation: {
            dimension: "Overworld",
            yRange: "Mineshafts, Strongholds, Basements"
        },
        description: "Cobweb is a unique block that significantly slows down entities moving through it. It naturally generates in mineshafts, strongholds, library rooms, and igloo basements. While it can be broken by hand, using a sword is much faster, and shears are the most efficient tool. Breaking it with shears or a Silk Touch sword drops the cobweb itself; otherwise, it drops one piece of string. It is not flammable and allows light to pass through. Cobwebs are excellent for trapping mobs or players and adding an abandoned aesthetic to builds."
    },
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
    "minecraft:glowingobsidian": {
        id: "minecraft:glowingobsidian",
        name: "Glowing Obsidian",
        hardness: 50.0,
        blastResistance: 1200.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 12,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Glowing Obsidian"],
        generation: {
            dimension: "Overworld",
            yRange: "Nether Reactor (Historic)"
        },
        description: "Glowing Obsidian is a rare, luminous block found in Minecraft Bedrock Edition, historically associated with the activation of the Nether Reactor. It emits a light level of 12 and produces distinctive red smoke particles. While it shares the incredible hardness (50) and blast resistance (1200) of regular obsidian, it is notably distinguished by its glowing red texture. In current versions, it can only be obtained through commands, but it remains a nostalgic reminder of the game's early mobile development."
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
    "minecraft:exposed_copper_bars": {
        id: "minecraft:exposed_copper_bars",
        name: "Exposed Copper Bars",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["minecraft:exposed_copper_bars"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Exposed Copper Bars are decorative barrier blocks representing the second stage of copper oxidation. Introduced in the Minecraft 1.21 update, they exhibit a light green patina beginning to cover the original orange copper. They function identically to iron bars, connecting to adjacent blocks to form fences or windows. Players can stop the oxidation process by applying honeycomb, creating a waxed version, or scrape the patina off using an axe. They require a stone pickaxe or higher to harvest and are immune to fire, making them a durable and evolving architectural element."
    },
    "minecraft:weathered_copper_bars": {
        id: "minecraft:weathered_copper_bars",
        name: "Weathered Copper Bars",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["minecraft:weathered_copper_bars"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Weathered Copper Bars are the third oxidation stage of copper bars, showcasing a significant teal-green coloration with only hints of the original copper visible. Like other copper variants in Minecraft 1.21, they provide a unique, aging aesthetic to builds. They share the same physical properties as iron bars, connecting to adjacent blocks and surfaces to form barriers. They are highly resistant to explosions and can be scraped back to an exposed state with an axe or struck by lightning to revert further. Their distinct blue-green hue is ideal for ancient or aquatic-themed structures."
    },
    "minecraft:oxidized_copper_bars": {
        id: "minecraft:oxidized_copper_bars",
        name: "Oxidized Copper Bars",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: false
        },
        drops: ["minecraft:oxidized_copper_bars"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Oxidized Copper Bars represent the final, fully weathered stage of copper bars, featuring a complete teal-green patina. These decorative blocks are perfect for creating aged, weathered looks in Minecraft Bedrock Edition. Introduced in version 1.21, they connect to surrounding blocks just like iron bars and offer the same durability. While they no longer oxidize further, they can still be scraped with an axe to reveal previous stages or waxed to preserve their current appearance. Their vibrant green color and thin profile make them popular for intricate metalwork, industrial cages, and overgrown ruins."
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
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        hardness: 3.0,
        blastResistance: 5.0,
        flammability: false,
        gravityAffected: true,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dragon Egg (Only obtainable via piston or special methods)"],
        generation: {
            dimension: "The End",
            yRange: "Top of exit portal (First Dragon)"
        },
        description: "The Dragon Egg is a unique trophy block that appears on top of the exit portal after defeating the Ender Dragon for the first time. It teleports when interacted with or mined normally, and can only be collected using a piston or by causing it to drop (e.g., torch technique). If there is no supporting block under it, it will fall like sand or gravel."
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
    "minecraft:frog_spawn": {
        id: "minecraft:frog_spawn",
        name: "Frog Spawn",
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
            yRange: "Laid by frogs on water surface"
        },
        description: "Frog Spawn is a non-solid block laid by frogs after breeding with slimeballs on the surface of water. Entities pass through it rather than standing on it, and it does not break due to trampling or collision. It breaks if the supporting water block is removed or if broken by a player. In Bedrock Edition, the spawn takes between 5 to 10 minutes to hatch into 2-5 tadpoles. It cannot be obtained as an item in Survival mode, even with the Silk Touch enchantment, ensuring that tadpole production remains a localized process within the frogs' natural or artificial habitats."
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
            silkTouch: false
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
    },
    "minecraft:prismarine_bricks": {
        id: "minecraft:prismarine_bricks",
        name: "Prismarine Bricks",
        hardness: 1.5,
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
        drops: ["Prismarine Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments, Underwater Ruins"
        },
        description: "Prismarine Bricks are a decorative variant of prismarine with a cracked, teal brick texture. They generate naturally in ocean monuments and underwater ruins. Crafted from nine prismarine shards, they share the same hardness (1.5) and blast resistance (6.0) as other prismarine blocks. Unlike sea lanterns, they do not emit light. Their vibrant color and animated texture make them excellent for underwater builds and detailed flooring."
    },
    "minecraft:dark_prismarine": {
        id: "minecraft:dark_prismarine",
        name: "Dark Prismarine",
        hardness: 1.5,
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
        drops: ["Dark Prismarine"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "Dark Prismarine is the darkest variant of the prismarine family, featuring a deep teal-gray grid pattern. It generates in ocean monuments, typically encasing the central gold blocks. Crafted from eight prismarine shards surrounding an ink sac (or black dye in Bedrock Edition), it offers a sleek, tiled appearance. With a hardness of 1.5 and blast resistance of 6.0, it is a durable building block perfect for contrast in aquatic-themed structures."
    },
    "minecraft:white_wool": {
        id: "minecraft:white_wool",
        name: "White Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["White Wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Pillager Outposts, Ancient Cities, Villages"
        },
        description: "White Wool is a decorative building block obtained by shearing or killing white sheep, or by crafting four strings together. It is flammable and weak against explosions. In Bedrock Edition, wool has unique acoustic properties; it blocks vibrations from reaching Sculk Sensors and prevents Sculk Shriekers from detecting players walking on it. It can be dyed into 15 other colors. It generates naturally in Shepherd villager houses, woodland mansions, and pillager outposts."
    },
    "minecraft:pale_oak_fence": {
        id: "minecraft:pale_oak_fence",
        name: "Pale Oak Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks and Sticks"
        },
        description: "Pale Oak Fences are thin, protective barrier blocks crafted from pale oak planks and sticks. They are 1.5 blocks high for most entities, preventing them from being jumped over. Naturally fitting the Pale Garden's somber aesthetic, these fences offer a ghostly, light gray alternative to traditional wood barriers. They connect automatically to adjacent fences, gates, and most solid blocks, making them perfect for atmospheric perimeters or detailed decorative railings."
    },
    "minecraft:oak_fence": {
        id: "minecraft:oak_fence",
        name: "Oak Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oak Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Found in Villages"
        },
        description: "An Oak Fence is a thin barrier block, 1.5 blocks high for movement but only 1 block high visually. Crafted from sticks and oak planks, it provides a rustic and efficient way to contain livestock or protect property without blocking line of sight. It connects automatically to neighboring fences and solid blocks. In Bedrock Edition, it is a staple of early-game construction, found naturally in many villages and farm structures."
    },
    "minecraft:birch_fence": {
        id: "minecraft:birch_fence",
        name: "Birch Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Planks and Sticks"
        },
        description: "Birch Fences are thin, decorative barrier blocks crafted from birch planks and sticks. They are 1.5 blocks high for entities, preventing them from being jumped over, while appearing only one block tall. Their bright, pale color matches the birch wood set, making them ideal for modern, minimalist, or airy builds. Like other fences, they connect automatically to adjacent fences, gates, and most solid blocks."
    },
    "minecraft:bamboo_fence": {
        id: "minecraft:bamboo_fence",
        name: "Bamboo Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Fence"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Bamboo Planks"
        },
        description: "The Bamboo Fence is a vibrant, yellowish wood-type barrier introduced with the bamboo wood set. Crafted from bamboo planks and sticks, it features a unique vertical grain and a bright palette that fits perfectly with tropical or oriental-themed builds. Like other fences, it prevents most mobs from jumping over it and connects to adjacent solid surfaces. It offers a fresh, renewable alternative to traditional wood types, reflecting the dense growth of jungle biomes."
    },
    "minecraft:acacia_fence": {
        id: "minecraft:acacia_fence",
        name: "Acacia Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Savanna Villages"
        },
        description: "Acacia Fences are thin barrier blocks crafted from acacia planks and sticks, known for their vibrant orange hue. They provide a 1.5-block high collision box that prevents most mobs from jumping over, while appearing as only one block high. Naturally occurring in Savanna villages, they are a staple for desert-themed landscaping and livestock enclosures. They connect automatically to adjacent fences, gates, and solid blocks. Being a wood-based block, they are flammable and are most efficiently broken with an axe, making them a durable and stylish choice for colorful builds."
    },
    "minecraft:spruce_fence": {
        id: "minecraft:spruce_fence",
        name: "Spruce Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga Villages"
        },
        description: "Spruce Fences are thin barrier blocks crafted from spruce planks and sticks. They provide a 1.5-block high collision box that prevents most mobs from jumping over, while appearing visually as a single block. Characterized by their dark, rustic wood tone, they are a favorite for medieval, alpine, and cabin-style builds. Like other fences, they automatically connect to adjacent fences, gates, and solid blocks. Being wood-based, they are flammable and are best harvested with an axe."
    },
    "minecraft:mangrove_fence": {
        id: "minecraft:mangrove_fence",
        name: "Mangrove Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Mangrove Planks and Sticks"
        },
        description: "A Mangrove Fence is a thin, decorative barrier block crafted from mangrove planks and sticks. It stands 1.5 blocks high for entities, preventing players and most mobs from jumping over it, while appearing only one block tall visually. Characterized by its deep red-brown wood tone, it is perfect for tropical, swampy, or rustic builds. It automatically connects to adjacent fences, gates, and most solid blocks to form a continuous perimeter. Like other wood variants, it is flammable and best harvested with an axe. It is a durable and stylish choice for secure enclosures and railings."
    },
    "minecraft:jungle_fence": {
        id: "minecraft:jungle_fence",
        name: "Jungle Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Planks and Sticks"
        },
        description: "Jungle Fences are thin barrier blocks crafted from jungle planks and sticks. They possess a unique pinkish-tan hue that matches the tropical aesthetic of the jungle wood set. Standing 1.5 blocks high for most entities, they effectively prevent mobs from jumping over while allowing players to see through them. They connect automatically to adjacent fences, gates, and most solid blocks. Being wood-based, they are flammable and are best harvested using an axe, making them a stylish choice for tropical enclosures."
    },
    "minecraft:cherry_fence": {
        id: "minecraft:cherry_fence",
        name: "Cherry Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks and Sticks"
        },
        description: "Cherry Fences are decorative barrier blocks introduced in the 1.20 Trails & Tales update. Crafted from cherry planks and sticks, they feature a beautiful pale pink color that matches the cherry grove aesthetic. Like other fences, they stand 1.5 blocks high for entities, preventing players and most mobs from jumping over them. They connect to adjacent fences, gates, and solid blocks. Their soft pink hue makes them ideal for floral gardens, aesthetic cottages, and adding a delicate touch to any build."
    },
    "minecraft:dark_oak_fence": {
        id: "minecraft:dark_oak_fence",
        name: "Dark Oak Fence",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Fence"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Dark Oak Planks and Sticks"
        },
        description: "Dark Oak Fences are thin barrier blocks crafted from dark oak planks and sticks. Known for their rich, deep brown color, they provide a 1.5-block high collision box that effectively contains livestock or protects property while remaining visually one block tall. They connect automatically to adjacent fences, gates, and solid blocks, creating a seamless and secure perimeter. Their sophisticated dark tone makes them a popular choice for gothic, rustic, or moody architectural designs. Being wood-based, they are flammable and are most efficiently harvested using an axe."
    },
    "minecraft:blue_wool": {
        id: "minecraft:blue_wool",
        name: "Blue Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Blue Wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Blue Sheep"
        },
        description: "Blue Wool is a vibrant decorative block obtained by shearing blue sheep or crafting white wool with blue dye. It has a soft texture and is primarily used for construction and art. Like all wool blocks, it is highly flammable and provides low blast resistance. In Bedrock Edition, wool blocks have the unique ability to dampen vibrations, preventing Sculk Sensors from detecting movement and Sculk Shriekers from being activated by nearby footsteps. It can also be used as a fuel in furnaces, smelting a small number of items."
    },
    "minecraft:black_wool": {
        id: "minecraft:black_wool",
        name: "Black Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Black Wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Black Sheep"
        },
        description: "Black Wool is a dark decorative block obtained by shearing black sheep or crafting white wool with black dye. It is one of the few wool colors that can be found naturally on sheep. Like all wool blocks, it is highly flammable and offers low blast resistance. In Bedrock Edition, it can dampen vibrations for Sculk Sensors and prevent Sculk Shrieker activation. Its deep black tone makes it ideal for pixel art, shadows, and sleek modern designs. It can also be used as a fuel in furnaces, though it is relatively inefficient."
    },
    "minecraft:brown_wool": {
        id: "minecraft:brown_wool",
        name: "Brown Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:brown_wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Brown Sheep"
        },
        description: "Brown Wool is a decorative building block obtained by shearing brown sheep or by crafting white wool with brown dye. It is one of the natural colors that can appear on sheep in the wild, though it is less common than white. Like other wool blocks, it is highly flammable and provides low blast resistance. In Bedrock Edition, wool has the unique ability to dampen vibrations, which prevents Sculk Sensors from detecting movement on or near it. It is commonly used for earthy-toned architecture, pixel art, and as a component for crafting brown carpets and beds."
    },
    "minecraft:gray_wool": {
        id: "minecraft:gray_wool",
        name: "Gray Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:gray_wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Gray Sheep"
        },
        description: "Gray Wool is a somber decorative block obtained by shearing gray sheep or combining white wool with gray dye. It is a natural color that can occasionally be found on sheep in the Overworld. In Bedrock Edition, wool blocks possess acoustic dampening properties, effectively blocking vibrations from reaching Sculk Sensors and preventing the activation of Sculk Shriekers by movement. While it is weak against explosions and highly flammable, its neutral tone makes it an excellent choice for industrial designs, shadows in pixel art, and creating transition gradients in colorful builds."
    },
    "minecraft:cyan_wool": {
        id: "minecraft:cyan_wool",
        name: "Cyan Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:cyan_wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from White Wool and Cyan Dye"
        },
        description: "Cyan Wool is a vibrant decorative block crafted by applying cyan dye to white wool or shearing a cyan-dyed sheep. It features a rich, blue-green hue that provides a striking pop of color for any build. Like all wool variants in Bedrock Edition, it functions as an acoustic insulator, preventing Sculk Sensors from detecting vibrations and allowing for stealthy movement in Deep Dark biomes. Although it is flammable and offers minimal protection against blasts, its unique color is highly valued for modern architecture, aquatic-themed designs, and detailed pixel art."
    },
    "minecraft:blue_carpet": {
        id: "minecraft:blue_carpet",
        name: "Blue Carpet",
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
        drops: ["Blue Carpet"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Blue Carpet is a thin, decorative block primarily used for floor covering and aesthetics. It is crafted from two blocks of blue wool, yielding three carpets. In Bedrock Edition, carpets have the unique ability to dampen vibrations, preventing Sculk Sensors from detecting movement above them. They can be placed on most solid blocks, including non-full blocks like glass or other carpets. Blue carpets provide a soft, vibrant surface for interiors without adding significant height, making them ideal for detailed rug designs, runners, or acoustic dampening in sculk-sensitive areas."
    },
    "minecraft:cyan_carpet": {
        id: "minecraft:cyan_carpet",
        name: "Cyan Carpet",
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
        drops: ["Cyan Carpet"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "Cyan Carpet is a thin decorative block used for flooring and aesthetics. Crafted from cyan wool, it provides a soft surface without adding significant height to a block. In Bedrock Edition, carpets have the unique ability to dampen vibrations, preventing Sculk Sensors from detecting movement on top of them. This makes them highly useful for stealthy navigation in sculk-infested areas like Ancient Cities."
    },
    "minecraft:black_carpet": {
        id: "minecraft:black_carpet",
        name: "Black Carpet",
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
        drops: ["Black Carpet"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Black Carpet is a thin, decorative block used for floor covering and aesthetic detailing. It is crafted from black wool and provides a soft, dark surface without adding significant height to a block. In Bedrock Edition, carpets have the unique ability to dampen vibrations, preventing Sculk Sensors from detecting movement on top of them. This makes it a valuable tool for stealthy navigation in sculk-infested areas. It is highly flammable and can be placed on most solid surfaces."
    },
    "minecraft:yellow_wool": {
        id: "minecraft:yellow_wool",
        name: "Yellow Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Yellow Wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Yellow Sheep"
        },
        description: "Yellow Wool is a bright decorative block obtained by shearing yellow sheep or crafting white wool with yellow dye. It is primarily used for construction and creative art due to its vibrant color. Like all wool blocks, it is highly flammable and provides low blast resistance. In Bedrock Edition, it has the unique ability to dampen vibrations, preventing Sculk Sensors from detecting movement nearby. It can also be used as a fuel in furnaces, though inefficiently, and is an essential material for crafting yellow carpets, banners, beds, and decorative tapestries."
    },
    "minecraft:green_wool": {
        id: "minecraft:green_wool",
        name: "Green Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Green Wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Green Sheep"
        },
        description: "Green Wool is a decorative building block with a soft texture and a deep forest-green color. It is obtained by shearing green sheep or by combining white wool with green dye. In Bedrock Edition, green wool has the unique property of blocking vibrations, making it essential for navigating sculk-infested areas like Ancient Cities without alerting Sculk Sensors. While highly flammable and weak to explosions, its rich color and acoustic dampening qualities make it a popular choice for lush organic builds, nature-themed decorations, and complex redstone sound-proofing."
    },
    "minecraft:pink_wool": {
        id: "minecraft:pink_wool",
        name: "Pink Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pink Wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Sheared from Pink Sheep"
        },
        description: "Pink Wool is a soft, decorative block primarily obtained by shearing pink sheep or crafting white wool with pink dye. Its gentle pink hue makes it a popular choice for aesthetic builds, pixel art, and cozy interior designs. In Bedrock Edition, wool has unique acoustic properties; it blocks vibrations, preventing Sculk Sensors from detecting movement and Sculk Shriekers from being triggered by nearby footsteps. While it is highly flammable and offers low blast resistance, its versatility in crafting beds, banners, and carpets makes it an essential material for any creative builder."
    },
    "minecraft:magenta_wool": {
        id: "minecraft:magenta_wool",
        name: "Magenta Wool",
        hardness: 0.8,
        blastResistance: 0.8,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:magenta_wool"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted or Dyed Sheep"
        },
        description: "Magenta Wool is a vibrant decorative block obtained by shearing magenta sheep or crafting white wool with magenta dye. Like all wool in Bedrock Edition, it has the unique ability to dampen vibrations, preventing Sculk Sensors from detecting movement and Sculk Shriekers from being activated. It is highly flammable and weak to explosions, but its rich color makes it a favorite for artistic builds, carpets, and banners. It can also be used as a fuel in furnaces."
    }
};
