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
            primaryUse: "Applying the 'Flower' pattern to a banner in a Loom",
            secondaryUse: "Creating decorative banners with a daisy or sun-like design"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Oxeye Daisy"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of 1 Paper and 1 Oxeye Daisy",
            "Oxeye Daisies are common flowers found in Plains and Flower Forest biomes",
            "The banner pattern item is not consumed when used in a Loom",
            "Completely renewable since Paper and Oxeye Daisies can be farmed indefinitely",
            "The pattern resembles a flower or sun, making it versatile for nature or celestial themes"
        ],
        description: "The Flower Banner Pattern is a renewable decorative item used to apply a floral design to banners, resembling an Oxeye Daisy or a sun. In Minecraft Bedrock Edition, it is easily crafted by combining one Paper and one Oxeye Daisy in a crafting grid. Since both ingredients are readily available and renewable, this pattern serves as an accessible and popular choice for adding intricate details to banners, often used in clan flags, garden decorations, or celestial imagery."
    },
    "minecraft:mojang_banner_pattern": {
        id: "minecraft:mojang_banner_pattern",
        name: "Thing Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Thing' pattern (Mojang logo) to a banner in a Loom",
            secondaryUse: "Creating banners with the official Mojang logo for branding or decoration"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["1 Paper", "1 Enchanted Golden Apple"]
        },
        specialNotes: [
            "Crafted using a shapeless recipe of 1 Paper and 1 Enchanted Golden Apple",
            "Enchanted Golden Apples are uncraftable and extremely rare, found only in loot chests",
            "Due to the ingredient cost, this is one of the most expensive items to craft in survival",
            "The banner pattern item is not consumed when used in a Loom",
            "Features the official Mojang logo, often called 'The Thing'",
            "Adds a prestigious symbol to any banner design"
        ],
        description: "The Thing Banner Pattern is a highly prestigious decorative item that allows players to stamp the official Mojang logo onto banners. In Bedrock Edition, it is crafted using a shapeless recipe that combines Paper with an Enchanted Golden Apple. Because Enchanted Golden Apples are uncraftable and exceptionally rare loot items, this banner pattern is a significant status symbol. Fortunately, the pattern is not consumed upon use in a Loom, meaning a single successful craft provides infinite use of the logo for all future banner projects."
    },
    "minecraft:globe_banner_pattern": {
        id: "minecraft:globe_banner_pattern",
        name: "Globe Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Globe' pattern to a banner in a Loom",
            secondaryUse: "Creating banners with a cubic earth design for maps or planetary themes"
        },
        crafting: {
            recipeType: "Trading",
            ingredients: ["Traded from Master-level Cartographer villagers"]
        },
        specialNotes: [
            "Obtainable in Bedrock Edition by trading with a Master-level Cartographer villager",
            "Typically costs 8 Emeralds, though prices can vary with discounts",
            "The banner pattern item is not consumed when used in a Loom",
            "Cannot be crafted by players; exclusive to trading",
            "Features a cubic representation of the Minecraft world",
            "Ideal for map rooms, libraries, and planetary builds"
        ],
        description: "The Globe Banner Pattern is a unique decorative item that applies a cubic earth design to banners, representing the Minecraft world. In Bedrock Edition, it cannot be crafted and is exclusively obtained by trading with a Master-level Cartographer villager, typically costing around 8 emeralds. This makes it a reward for developing a village's economy. Once acquired, the pattern can be used indefinitely in a Loom to add a sophisticated, worldly touch to banners, perfect for decorating map rooms, libraries, or diplomatic halls."
    }
};
