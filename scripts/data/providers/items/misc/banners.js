// Pocket Wikipedia Foundation - Banner Patterns Data
// ============================================
// This file contains: All banner pattern items (creeper charge,
// skull charge, flower charge, thing, globe, snout, piglin,
// flow, guster)
// ============================================

/**
 * Banner pattern items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const bannerPatterns = {
    "minecraft:creeper_banner_pattern": {
        id: "minecraft:creeper_banner_pattern",
        name: "Creeper Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Creeper Face' pattern to a banner in a Loom",
            secondaryUse: "Creating menacing decorative banners with a creeper face design"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Creeper Head"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of 1 Paper and 1 Creeper Head",
            "Creeper Heads are obtained when a Charged Creeper's explosion kills another Creeper",
            "In Bedrock Edition, every Creeper killed by the same Charged Creeper blast will drop a head",
            "The banner pattern item is not consumed when used in a Loom",
            "Completely renewable since Paper and Creeper Heads can be obtained indefinitely"
        ],
        description: "The Creeper Banner Pattern is a renewable decorative item used to apply a distinctive creeper face design to banners. In Bedrock Edition, it is crafted using a shapeless recipe combining one Paper and one Creeper Head. Since creeper heads can be obtained by creating Charged Creepers and both materials are renewable, this banner pattern represents an accessible option for players wanting to create menacing or mob-themed decorations without needing to explore dangerous loot chests."
    },
    "minecraft:flow_banner_pattern": {
        id: "minecraft:flow_banner_pattern",
        name: "Flow Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Flow' pattern to a banner in a Loom",
            secondaryUse: "Creating banners with a distinctive spiral motif for decoration or wayfinding"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as loot from Ominous Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Has a 4.4% chance to appear in Ominous Vaults in Bedrock Edition",
            "The banner pattern item is not consumed when used in a Loom",
            "Cannot be crafted and is not renewable outside of repeatedly opening Ominous Vaults",
            "Added in the 1.21 Tricky Trials update",
            "Used in a Loom with a banner and any color dye"
        ],
        description: "The Flow Banner Pattern is a rare banner pattern introduced in Minecraft Bedrock Edition 1.21 as part of the Tricky Trials update. Found in Trial Chambers as loot from Ominous Vaults, it lets players apply a swirling spiral design to banners using a Loom. Because the pattern is not consumed when used, a single Flow Banner Pattern can be reused indefinitely, making it a valuable decorative unlock for bases, towns, and map markers."
    },
    "minecraft:guster_banner_pattern": {
        id: "minecraft:guster_banner_pattern",
        name: "Guster Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Guster' pattern to a banner in a Loom",
            secondaryUse: "Creating distinctive decorative banners with a wind-vortex design"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as a reward from Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Has a 3.6% chance to drop from standard Vaults in Bedrock Edition",
            "Features a swirling wind pattern inspired by the Breeze mob's appearance",
            "Added in the 1.21 Tricky Trials update",
            "Cannot be crafted; must be found within Trial Chamber Vaults",
            "Used in a Loom with a banner and any color dye"
        ],
        description: "The Guster Banner Pattern is a decorative item added in the 1.21 Tricky Trials update, found exclusively in Trial Chamber Vaults. It allows players to apply a 'Guster' design to banners, featuring a swirling vortex inspired by the Breeze mob. Since it cannot be crafted, it is a sought-after collectible for explorers. Using it in a Loom with a banner and dye creates a unique wind-themed visual, ideal for marking territory or themed base decoration."
    },
    "minecraft:skull_banner_pattern": {
        id: "minecraft:skull_banner_pattern",
        name: "Skull Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Skull' pattern to a banner in a Loom",
            secondaryUse: "Creating ominous decorative banners with a skull design for intimidation or warning"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Wither Skeleton Skull"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of 1 Paper and 1 Wither Skeleton Skull",
            "Wither Skeleton Skulls can be obtained by defeating Wither Skeletons (2.5% drop chance, increased by Looting)",
            "The banner pattern item is not consumed when used in a Loom",
            "Completely renewable since Paper and Wither Skeleton Skulls can be obtained indefinitely",
            "Perfect for creating warning signs, mob-themed builds, or intimidating base decorations"
        ],
        description: "The Skull Banner Pattern is a renewable decorative item used to apply a menacing skull design to banners. In Bedrock Edition, it is crafted using a shapeless recipe combining one Paper and one Wither Skeleton Skull. Since wither skeleton skulls can be obtained by farming Wither Skeletons and both materials are renewable, this banner pattern represents an accessible option for players wanting to create ominous or warning decorations without needing to explore dangerous loot chests."
    },
    "minecraft:piglin_banner_pattern": {
        id: "minecraft:piglin_banner_pattern",
        name: "Snout Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Snout' pattern to a banner in a Loom",
            secondaryUse: "Creating banners with a piglin snout design for Nether-themed builds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found exclusively in bastion remnant loot chests"]
        },
        specialNotes: [
            "Found only in bastion remnant chests (housing units, generic items, treasure chests)",
            "The banner pattern item is not consumed when used in a Loom",
            "Cannot be crafted and is not renewable outside of bastion remnant exploration",
            "Uses any color dye to create a piglin snout design on banners",
            "Essential for creating piglin or Nether-themed decorations and builds"
        ],
        description: "The Snout Banner Pattern is a specialized decorative item used to apply a distinctive piglin snout design to banners. Found exclusively in bastion remnants throughout the Nether, it is a rare and valuable collectible for players wanting to create Nether-themed or piglin-inspired decorations. Since it cannot be crafted and is only obtainable from bastion remnant exploration, it represents a significant achievement in surviving the dangerous Nether environment."
    },
    "minecraft:field_masoned_banner_pattern": {
        id: "minecraft:field_masoned_banner_pattern",
        name: "Field Masoned Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Field Masoned' pattern to a banner in a Loom",
            secondaryUse: "Creating banners with a brickwork design"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["1 Paper", "1 Brick Block"]
        },
        specialNotes: [
            "Added in version 1.21",
            "Crafted using 1 Paper and 1 Brick Block",
            "Adds a brick-like masonry pattern to banners",
            "The banner pattern item is not consumed when used in a Loom",
            "Allows for detailed architectural designs on banners"
        ],
        description: "The Field Masoned Banner Pattern is a decorative item introduced in Minecraft 1.21. It allows players to apply a brickwork or masonry pattern to banners using a Loom. Crafted by combining a piece of paper with a block of bricks, this pattern provides a unique texture useful for castle builds, walls, and detailed heraldry. Like other banner patterns, it is not consumed upon use, allowing for infinite replication of the design."
    }
};
