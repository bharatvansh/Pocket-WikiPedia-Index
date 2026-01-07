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
    "minecraft:flower_banner_pattern": {
        id: "minecraft:flower_banner_pattern",
        name: "Flower Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Flower Charge' pattern to a banner in a Loom",
            secondaryUse: "Creating decorative banners with a floral design"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1x Paper", "1x Oxeye Daisy"]
        },
        specialNotes: [
            "Crafted by combining one Paper and one Oxeye Daisy in any crafting grid.",
            "Used in a Loom to add a flower-shaped emblem to a banner.",
            "The pattern item is not consumed when used in the Loom, allowing for infinite reuse.",
            "Completely renewable since both Paper and Oxeye Daisies are easily obtainable.",
            "In Bedrock Edition, it is known as the 'Flower Charge' pattern in the Loom interface."
        ],
        description: "The Flower Banner Pattern is a renewable decorative item used to apply a beautiful floral emblem to banners. It is easily crafted by combining a single piece of paper with an oxeye daisy. When placed in a loom with a banner and dye, it produces the 'Flower Charge' design, making it a favorite for players who want to add a touch of nature or elegance to their bases and heraldry. Since the pattern is not consumed upon use, it serves as a permanent addition to a player's design toolkit."
    },
    "minecraft:globe_banner_pattern": {
        id: "minecraft:globe_banner_pattern",
        name: "Globe Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Globe' pattern to a banner in a Loom",
            secondaryUse: "Creating geography-themed decorative banners"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Sold by Master Cartographer villagers"]
        },
        specialNotes: [
            "Obtained by trading with Master-level Cartographer villagers for 8 emeralds.",
            "The banner pattern item is not consumed when used in a Loom.",
            "Features a stylized globe design representing the world.",
            "In Bedrock Edition, it became obtainable in survival mode starting with version 1.18.10.",
            "Used in a Loom with a banner and any color dye to apply the design."
        ],
        description: "The Globe Banner Pattern is a specialized decorative item in Minecraft Bedrock Edition that allows players to apply a stylized globe design to their banners. Unlike many other patterns, it cannot be crafted and must be purchased from a Master-level Cartographer villager for 8 emeralds. Once obtained, it can be used indefinitely as it is not consumed during the patterning process, making it a valuable asset for players who enjoy creating detailed heraldry or geographical-themed decorations."
    },
    "minecraft:thing_banner_pattern": {
        id: "minecraft:thing_banner_pattern",
        name: "Thing Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Thing' (Mojang Studios logo) pattern in a Loom",
            secondaryUse: "Creating prestigious banners featuring official game branding"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Enchanted Golden Apple"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of one Paper and one Enchanted Golden Apple.",
            "Displays the iconic Mojang Studios logo on banners.",
            "The banner pattern item is not consumed when used in a Loom.",
            "One of the rarest patterns due to the cost of an Enchanted Golden Apple.",
            "Commonly referred to as the 'Mojang' logo pattern."
        ],
        description: "The Thing Banner Pattern is one of the most prestigious decorative items in Minecraft, allowing players to emblazon the Mojang Studios logo onto their banners. In Bedrock Edition, it is crafted by combining a piece of paper with an Enchanted Golden Apple, making it exceptionally rare and expensive to produce. Despite its high cost, the pattern itself is not consumed when used in a Loom, allowing a single pattern to be used to create an infinite number of banners."
    },
    "minecraft:field_masoned_banner_pattern": {
        id: "minecraft:field_masoned_banner_pattern",
        name: "Field Masoned Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Field Masoned' pattern to a banner in a Loom",
            secondaryUse: "Creating decorative banners with a masonry brickwork design"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Bricks"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of 1 Paper and 1 Bricks block",
            "Added in the 1.21.40 'Bundles of Bravery' update",
            "The banner pattern item is not consumed when used in a Loom",
            "Creates a brick-like texture on the banner",
            "Completely renewable resource"
        ],
        description: "The Field Masoned Banner Pattern is a decorative item introduced in the 1.21.40 update. It allows players to apply a distinct masonry or brickwork design to banners using a Loom. Crafted by combining Paper and a Bricks block, this pattern is reusable, meaning a single item can be used to create an unlimited number of banners. It provides builders with new options for adding texture and detail to their banner designs, perfect for castle walls or fortified structures."
    },
    "minecraft:bordure_indented_banner_pattern": {
        id: "minecraft:bordure_indented_banner_pattern",
        name: "Bordure Indented Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Bordure Indented' pattern to a banner in a Loom",
            secondaryUse: "Creating banners with a jagged border design"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Vines"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of 1 Paper and 1 Vines",
            "Added in the 1.21.40 'Bundles of Bravery' update",
            "The banner pattern item is not consumed when used in a Loom",
            "Creates a jagged, tooth-like border around the banner",
            "Renewable since both Paper and Vines are farmable"
        ],
        description: "The Bordure Indented Banner Pattern is a decorative item added in Bedrock Edition 1.21.40. It is used in a Loom to apply a 'Bordure Indented' design, which features a jagged, saw-tooth border around the edge of the banner. The pattern is crafted using Paper and Vines and is not consumed upon use, making it a permanent addition to a player's design toolkit. This pattern is excellent for creating heraldry that looks rugged, dangerous, or ornate."
    }
};
