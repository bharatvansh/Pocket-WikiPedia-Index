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
            secondaryUse: "Crafting Blocks of Raw Iron for compact storage"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by mining Iron Ore or Deepslate Iron Ore with a Stone Pickaxe or higher"]
        },
        specialNotes: [
            "Dropped in quantities of 1 when mining iron ore (more with Fortune)",
            "Must be smelted in a furnace or blast furnace to produce usable iron ingots",
            "Nine can be crafted into a Block of Raw Iron",
            "Found in loot chests in Raw Iron form in some structures",
            "Can be smelted in a furnace or blast furnace"
        ],
        description: "Raw Iron is a metallic material obtained by mining Iron Ore or Deepslate Iron Ore with a pickaxe of stone tier or higher. Introduced to streamline the inventory during mining, it replaces the direct drop of ore blocks. It must be processed in a furnace or blast furnace to create iron ingots, which are used for most iron-based crafting. Nine pieces of raw iron can be compacted into a Block of Raw Iron for efficient storage or decorative purposes."
    },
    "minecraft:raw_gold": {
        id: "minecraft:raw_gold",
        name: "Raw Gold",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Gold Ingots",
            secondaryUse: "Crafting Blocks of Raw Gold and trading with Piglins"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by mining Gold Ore or Deepslate Gold Ore with an Iron Pickaxe or higher"]
        },
        specialNotes: [
            "Dropped when mining gold ore; affected by the Fortune enchantment",
            "Yields gold ingots when smelted in a furnace or blast furnace",
            "Can be found in Bastion Remnant and Ruined Portal chests",
            "Nine can be crafted into a Block of Raw Gold",
            "Piglins are attracted to raw gold if dropped, though they don't barter for it"
        ],
        description: "Raw Gold is a precious metal resource harvested from Gold Ore or Deepslate Gold Ore found in the Overworld. Mining it requires an iron pickaxe or better, and it can be smelted into gold ingots for use in crafting powered rails, golden food, and armor. Like other raw metals, it can be combined into a raw block form for compact storage. In the Nether, its golden luster attracts the attention of Piglins, making it a valuable but dangerous item to carry around them."
    },
    "minecraft:raw_copper": {
        id: "minecraft:raw_copper",
        name: "Raw Copper",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Smelting into Copper Ingots",
            secondaryUse: "Crafting Blocks of Raw Copper"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by mining Copper Ore or Deepslate Copper Ore with a Stone Pickaxe or higher"]
        },
        specialNotes: [
            "Dropped in quantities of 2–5 when mining copper ore",
            "Affected significantly by the Fortune enchantment",
            "Can be smelted into copper ingots in a furnace or blast furnace",
            "Found in large ore veins, often mixed with granite or tuff",
            "Nine can be crafted into a Block of Raw Copper"
        ],
        description: "Raw Copper is a versatile metal obtained by mining Copper Ore, yielding multiple units per block broken. It is the primary source of copper ingots, which are used for a variety of building and utility purposes including lightning rods and spyglasses. Due to the high yield per ore block, it quickly fills inventories but can be compressed into Blocks of Raw Copper. Its abundance makes copper an excellent choice for large-scale decorative projects once smelted and crafted into various block forms."
    }
};
