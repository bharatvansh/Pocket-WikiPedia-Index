// Pocket Wikipedia Foundation - Ingots & Raw Materials Data
// ============================================
// This file contains: Iron ingot, gold ingot, copper ingot,
// netherite ingot, netherite scrap, raw iron, raw gold, raw copper,
// iron nugget, gold nugget
// ============================================

/**
 * Ingot and raw material items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const ingots = {
    "minecraft:netherite_ingot": {
        id: "minecraft:netherite_ingot",
        name: "Netherite Ingot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Upgrading diamond equipment to netherite in a smithing table",
            secondaryUse: "Crafting Blocks of Netherite and applying armor trims"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["4x Netherite Scrap", "4x Gold Ingot"]
        },
        specialNotes: [
            "Immune to fire and lava - will float on top of lava if dropped",
            "Used with a Netherite Upgrade Smithing Template to upgrade diamond gear",
            "Preserves enchantments, durability, and custom names when upgrading items",
            "Required to create the highest tier of tools and armor in the game",
            "Can be used as payment to power or activate a beacon"
        ],
        description: "Netherite Ingots are rare materials used to create Minecraft's strongest gear. Both the ingots and items made from them are fire-resistant and float on lava. To craft one, combine four netherite scraps (smelted from ancient debris) with four gold ingots. At a Smithing Table, use an ingot and a Netherite Upgrade Template to transform diamond tools and armor into netherite versions. This increases durability, efficiency, and knockback resistance while preserving existing enchantments."
    },
    "minecraft:netherite_scrap": {
        id: "minecraft:netherite_scrap",
        name: "Netherite Scrap",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Netherite Ingots",
            secondaryUse: "Used as a rare material for late-game progression"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Ancient Debris", "Fuel (Furnace or Blast Furnace)"]
        },
        specialNotes: [
            "Obtained by smelting Ancient Debris found deep in the Nether",
            "Completely immune to fire and lava damage",
            "Four scraps combined with four gold ingots create one Netherite Ingot",
            "Non-renewable resource found at Y levels 8-22 in Bedrock Edition",
            "Found in Bastion Remnant chests (approx. 15-25% chance)"
        ],
        description: "Netherite Scrap is an incredibly rare and durable material found in the depths of the Nether. It is produced by smelting Ancient Debris, a tough ore that only generates in small veins near the bottom of the dimension. Because it is a Netherite-tier material, it is entirely immune to fire and lava, floating on top of lava pools instead of burning. Its sole purpose is to be combined with gold ingots to create Netherite Ingots, which are essential for upgrading diamond gear to the highest level of protection and efficiency."
    },
    "minecraft:iron_ingot": {
        id: "minecraft:iron_ingot",
        name: "Iron Ingot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting tools, armor, and weapons",
            secondaryUse: "Crafting Buckets, Hoppers, Pistons, and many other utility blocks"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Iron or Iron Ore", "Fuel"]
        },
        specialNotes: [
            "Dropped by Iron Golems (3-5) upon death",
            "Can be crafted from 9 Iron Nuggets or 1/9th of an Iron Block",
            "Found in almost all loot chests in the game",
            "Renewable via Iron Golem farms",
            "Used to repair iron equipment in an anvil"
        ],
        description: "Iron Ingots are versatile and essential materials for mid-game survival and automation. They are used to create a wide range of tools, armor, and essential utility blocks like Buckets and Hoppers. Iron is relatively easy to find in large quantities compared to rarer metals, making it the primary choice for large-scale construction and complex redstone machinery. Its renewability through Iron Golem farms makes it an infinite resource for advanced players."
    },
    "minecraft:gold_ingot": {
        id: "minecraft:gold_ingot",
        name: "Gold Ingot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting golden equipment and food",
            secondaryUse: "Bartering with Piglins in the Nether"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Gold or Gold Ore", "Fuel"]
        },
        specialNotes: [
            "Required for crafting Golden Apples and Golden Carrots",
            "Primary currency for bartering with Piglins",
            "Can be crafted from 9 Gold Nuggets or 1/9th of a Gold Block",
            "Gold tools have the highest mining speed but very low durability"
        ],
        description: "Gold Ingots are versatile materials used for crafting high-tier food items, decorative blocks, and specialized tools. While golden armor and weapons have low durability, they possess high enchantability. In the Nether, gold ingots are essential for bartering with Piglins, who will exchange various items for the metal. They can be obtained by smelting raw gold or gold ore, found in loot chests, or dropped by Zombified Piglins."
    },
    "minecraft:iron_nugget": {
        id: "minecraft:iron_nugget",
        name: "Iron Nugget",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Iron Ingots, Chains, and Lanterns",
            secondaryUse: "Recycling iron equipment into useful material"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Iron tools, weapons, or armor", "Fuel"]
        },
        specialNotes: [
            "Obtained by smelting iron tools, weapons, or armor",
            "Can be found in shipwreck chests and taiga village houses",
            "Nine nuggets combine to craft one Iron Ingot",
            "Used in crafting Lanterns and Iron Chains",
            "Piglins may give iron nuggets through bartering (2.43% chance)",
            "Essential for crafting Lanterns when iron is scarce"
        ],
        description: "Iron Nuggets are small fragments of iron metal that serve as a compact way to store iron and craft specific items. They are primarily obtained by smelting iron tools, weapons, or armor in a furnace, effectively recycling unwanted equipment. Nine iron nuggets can be crafted into one iron ingot, making them worth one-ninth of an ingot. These nuggets are essential components for crafting Lanterns and Iron Chains, which cannot be made with whole ingots alone."
    },
    "minecraft:copper_ingot": {
        id: "minecraft:copper_ingot",
        name: "Copper Ingot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting copper blocks, lightning rods, spyglasses, and brushes",
            secondaryUse: "Crafting copper grates, doors, trapdoors, and other copper variants"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Copper or Copper Ore", "Fuel"]
        },
        specialNotes: [
            "Smelted from Raw Copper or Copper Ore in a furnace or blast furnace",
            "Crafts Lightning Rods, Spyglasses (with Amethyst Shard), Brushes (with Stick and Copper Ingot)",
            "Used to craft Blocks of Copper (9 ingots), Cut Copper, and all copper decorative blocks",
            "Copper blocks naturally oxidize through four stages: unoxidized, exposed, weathered, and oxidized",
            "Can be waxed with honeycomb to prevent oxidation",
            "Renewable resource found in ore veins at Y levels 47-0 in Bedrock Edition",
            "Struck by lightning when used as a lightning rod to prevent flammable structure damage"
        ],
        description: "Copper Ingots are metallic materials introduced in 1.17, used primarily for building and redstone applications. Smelted from raw copper or copper ore, they craft a wide variety of functional and decorative blocks. Copper blocks are unique in that they naturally oxidize over time, transitioning from bright orange to teal-green, though this can be prevented by waxing with honeycomb. Essential redstone uses include crafting Lightning Rods, which attract lightning strikes to prevent fire damage, and Brushes for archaeology. The ingots also create Spyglasses with Amethyst Shards for distant viewing and numerous building materials like grates, doors, and trapdoors."
    },
    "minecraft:raw_iron": {
        id: "minecraft:raw_iron",
        name: "Raw Iron",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Iron Ingots",
            secondaryUse: "Crafting Raw Iron Blocks"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Iron Ore and Deepslate Iron Ore"]
        },
        specialNotes: [
            "Obtained by mining Iron Ore with a stone pickaxe or better",
            "Dropped in quantities of 1, increased by Fortune enchantment",
            "Can be smelted in a furnace or blast furnace to produce Iron Ingots",
            "Used to craft Raw Iron Blocks (9 raw iron) for compact storage",
            "Introduced in version 1.17 alongside other raw metal materials"
        ],
        description: "Raw Iron is a material obtained by mining Iron Ore or Deepslate Iron Ore using a stone pickaxe or higher. Before version 1.17, mining iron ore dropped the block itself; now, it drops raw iron, which must be smelted into iron ingots for use in crafting gear and machinery. This change made the Fortune enchantment effective on iron, allowing players to significantly increase their iron yields. Raw iron can also be combined into blocks for efficient storage or decorative purposes."
    },
    "minecraft:raw_gold": {
        id: "minecraft:raw_gold",
        name: "Raw Gold",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Gold Ingots",
            secondaryUse: "Crafting Raw Gold Blocks"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Gold Ore and Deepslate Gold Ore"]
        },
        specialNotes: [
            "Obtained by mining Gold Ore with an iron pickaxe or better",
            "Dropped in quantities of 1, increased by Fortune enchantment",
            "Can be smelted in a furnace or blast furnace to produce Gold Ingots",
            "Used to craft Raw Gold Blocks (9 raw gold) for compact storage",
            "Found in treasure chests within Bastion Remnants"
        ],
        description: "Raw Gold is a material dropped when Gold Ore or Deepslate Gold Ore is mined with an iron pickaxe or better. Introduced in 1.17, it replaces the gold ore block as the primary drop from mining, enabling the use of the Fortune enchantment to multiply the amount of gold gathered. To be used for crafting tools or bartering, raw gold must be smelted into gold ingots. It can also be found as loot in Bastion Remnants or crafted into Raw Gold Blocks for storage."
    },
    "minecraft:raw_copper": {
        id: "minecraft:raw_copper",
        name: "Raw Copper",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Copper Ingots",
            secondaryUse: "Crafting Raw Copper Blocks"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Copper Ore and Deepslate Copper Ore"]
        },
        specialNotes: [
            "Obtained by mining Copper Ore with a stone pickaxe or better",
            "Drops in quantities of 2-5, significantly increased by Fortune",
            "Smelted into Copper Ingots in a furnace or blast furnace",
            "Used to craft Raw Copper Blocks (9 raw copper) for storage",
            "Primary source for copper-based building materials"
        ],
        description: "Raw Copper is a metallic resource harvested from Copper Ore or Deepslate Copper Ore. When mined with a stone pickaxe or higher, it drops 2 to 5 pieces of raw copper, a yield that can be further increased with the Fortune enchantment. This material must be smelted into copper ingots to craft decorative blocks, lightning rods, and spyglasses. Its introduction in 1.17 allowed players to gather copper much more efficiently than other metals, supporting the large-scale construction often associated with copper blocks."
    },
    "minecraft:copper_nugget": {
        id: "minecraft:copper_nugget",
        name: "Copper Nugget",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting material for copper ingots",
            secondaryUse: "Recycling copper equipment"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Copper Ingot"]
        },
        specialNotes: [
            "Nine nuggets can be crafted into one Copper Ingot.",
            "Obtained by smelting copper tools or armor in a furnace or blast furnace.",
            "Introduced as a way to recycle copper equipment more efficiently."
        ],
        description: "A Copper Nugget is a small piece of copper metal. Like iron and gold nuggets, nine of these can be combined in a crafting grid to create a full copper ingot. They are primarily obtained by smelting copper-based tools, weapons, or armor, allowing players to salvage materials from unwanted or damaged equipment. This makes them an essential part of the copper resource cycle in later versions of Minecraft Bedrock Edition."
    }
};
