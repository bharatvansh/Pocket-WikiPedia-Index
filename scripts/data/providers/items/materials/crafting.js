// Pocket Wikipedia Foundation - Crafting Materials Data
// ============================================
// This file contains: Stick, bowl, paper, book, glass bottle,
// brick, nether brick, clay ball, honeycomb, wheat, sugar,
// cocoa beans, charcoal, coal, flint, glowstone dust, redstone dust,
// blaze powder, nether wart, fermented spider eye, glistering melon slice,
// golden carrot (crafting), rabbit foot, dragon breath,
// flow pottery sherd, guster pottery sherd, heart_of_the_sea, nether_star,
// amethyst shard, gunpowder
// ============================================

/**
 * Crafting material items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const craftingMaterials = {
    "minecraft:rabbit_foot": {
        id: "minecraft:rabbit_foot",
        name: "Rabbit's Foot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Potion of Leaping (Jump Boost)",
            secondaryUse: "Trading with Cleric villagers and crafting ingredient"
        },
        crafting: {
            recipeType: "Brewing",
            ingredients: ["Dropped by rabbits", "Brewed in a brewing stand with Awkward Potion"]
        },
        specialNotes: [
            "10.5% drop chance from rabbits (boosted by Looting); also cat gifts",
            "Brewing: Awkward Potion + Rabbit's Foot = Potion of Leaping (Jump Boost)",
            "Jump Boost increases jump height and reduces fall damage",
            "Sold to Cleric villagers for emeralds (4 per emerald in Bedrock)",
            "Renewable via rabbit farming and cat gifts"
        ],
        description: "A Rabbit's Foot is a brewing ingredient dropped by rabbits (10.5% chance, increased by Looting) or gifted by tamed cats. Its primary use is in a brewing stand with an Awkward Potion to create a Potion of Leaping, which grants the Jump Boost effect, increasing jump height and reducing fall damage. Additionally, Cleric villagers buy Rabbit's Feet in exchange for emeralds. This item is essential for players seeking enhanced mobility or those looking to trade surplus mob drops for currency."
    },
    "minecraft:fermented_spider_eye": {
        id: "minecraft:fermented_spider_eye",
        name: "Fermented Spider Eye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Corrupting potions and brewing Potion of Weakness",
            secondaryUse: "Creating negative effect potions for combat and PvP"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Spider Eye", "Brown Mushroom", "Sugar"]
        },
        specialNotes: [
            "Crafted shapelessly with 1 Spider Eye, 1 Brown Mushroom, and 1 Sugar",
            "Corrupts positive potions: Speed → Slowness, Night Vision → Invisibility, Healing → Harming, Poison → Harming",
            "Can be added to Awkward Potion to brew Potion of Weakness",
            "Can be added to Water Bottle to brew Potion of Weakness directly",
            "Potion of Weakness is required to cure Zombie Villagers with a Golden Apple",
            "Essential for both negative combat potions and villager curing mechanics"
        ],
        description: "A Fermented Spider Eye is a versatile brewing ingredient used to corrupt existing potions into their negative counterparts and brew the essential Potion of Weakness. It is crafted shapelessly by combining a spider eye, brown mushroom, and sugar. When added to potions, it reverses their effects: Speed becomes Slowness, Night Vision becomes Invisibility, Healing becomes Harming, and Poison becomes Harming. The Potion of Weakness it creates is vital for curing Zombie Villagers back into normal villagers using a Golden Apple, making it indispensable for village restoration and villager trading."
    },
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
            "Found exclusively in buried treasure chests (via maps)",
            "Crafts Conduits: 8 Nautilus Shells + 1 Heart of the Sea",
            "Conduits grant Water Breathing, Night Vision, and Haste underwater",
            "Rare, uncraftable item essential for underwater bases",
            "Standard item behavior (no glint or particles)"
        ],
        description: "The Heart of the Sea is a rare item found exclusively in buried treasure chests, located using maps from shipwrecks or ocean ruins. Its primary use is crafting a Conduit when combined with eight Nautilus Shells. When placed within a prismarine structure, the resulting Conduit provides the Conduit Power effect, granting players water breathing, night vision, and increased mining speed in a surrounding radius. This item is essential for large-scale underwater exploration and construction, allowing players to work deep beneath the waves without needing to surface for air.",
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
            "Guaranteed drop from the Wither boss; uncraftable otherwise",
            "Exclusively used to craft Beacons for area-wide buffs",
            "Features enchantment glint but no particles",
            "Immune to explosion damage",
            "Represents a major endgame milestone",
            "Can be displayed in item frames as a trophy"
        ],
        description: "The Nether Star is a rare item dropped exclusively by the Wither upon its defeat. It is the primary component used to craft Beacons, which grant powerful status effects like Haste, Speed, and Strength to nearby players when activated on a mineral pyramid. To obtain a star, players must summon the Wither using four soul sand or soul soil blocks and three wither skeleton skulls. The star features a unique purple glow and, notably, cannot be destroyed by explosions. It serves as a major endgame milestone, providing permanent area-of-effect buffs essential for large-scale projects.",
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
            "Mined from Amethyst Clusters on Budding Amethyst (4 shards; up to 16 with Fortune)",
            "Found in Ancient City (1-15) and Trial Chamber (8-20) chests",
            "Crafts Block of Amethyst (9 shards), Spyglass, Tinted Glass, Calibrated Sculk Sensor",
            "Budding Amethyst is immovable and the only natural source",
            "Renewable but slow-growing resource"
        ],
        description: "Amethyst Shards are crystalline materials harvested from Amethyst Clusters found in underground Geodes. When mined with a pickaxe, a cluster drops 4 shards, increasing up to 16 with Fortune. They are renewable, as clusters regrow on immovable Budding Amethyst blocks. Shards can also be found in loot chests within Ancient Cities and Trial Chambers. Essential for crafting, they are used to create Spyglasses, Tinted Glass, Calibrated Sculk Sensors, and decorative Amethyst Blocks. Their vibrant purple color offers both functional utility and aesthetic appeal."
    },
    "minecraft:disc_fragment_5": {
        id: "minecraft:disc_fragment_5",
        name: "Disc Fragment 5",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Music Disc 5",
            secondaryUse: "None"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City chests"]
        },
        specialNotes: [
            "Found exclusively in Ancient City chests (29.8% chance)",
            "Combine 9 fragments in a crafting table to create Music Disc 5",
            "The only way to obtain Music Disc 5 in survival mode",
            "Added in the Wild Update (1.19)"
        ],
        description: "Disc Fragment 5 is a rare crafting material found exclusively in the chests of Ancient Cities within the Deep Dark biome. It appears as a shard of a broken record. Its sole purpose is to be crafted into Music Disc 5. To do this, a player must collect nine fragments and arrange them in a 3x3 grid in a crafting table. This makes Music Disc 5 the only music disc in the game that must be crafted rather than found whole or obtained as a mob drop."
    },
    "minecraft:glistering_melon_slice": {
        id: "minecraft:glistering_melon_slice",
        name: "Glistering Melon Slice",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Potion of Healing",
            secondaryUse: "Trading with Master-level Cleric villagers"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["8x Gold Nugget", "Melon Slice"]
        },
        specialNotes: [
            "Crafted by surrounding a melon slice with 8 gold nuggets",
            "Inedible, unlike regular melon slices",
            "Key ingredient for Potions of Healing (Awkward Potion + Glistering Melon Slice)",
            "Master-level Cleric villagers in Bedrock have a chance to buy 3 for an emerald",
            "Cannot be found naturally in loot chests; must be crafted or traded"
        ],
        description: "A Glistering Melon Slice is an essential brewing ingredient used to create Potions of Healing. Despite being made from a melon slice, it is completely inedible and serves only for alchemy and trading. It is crafted by combining a single melon slice with eight gold nuggets. When brewed with an Awkward Potion, it creates a Potion of Healing, which instantly restores health. This makes glistering melons a vital resource for players preparing for difficult battles or exploring dangerous environments."
    },
    "minecraft:gunpowder": {
        id: "minecraft:gunpowder",
        name: "Gunpowder",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting TNT and Firework Rockets",
            secondaryUse: "Creating Splash Potions and Time Bombs"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers, Ghasts, and Witches", "Can also be obtained from chests in various structures"]
        },
        specialNotes: [
            "Creepers drop 0-2 gunpowder (increased by Looting)",
            "Ghasts drop 0-2 gunpowder upon death",
            "Witches have a chance to drop gunpowder (1.5% per Looting level)",
            "Crafts TNT (4x Sand/Red Sand + 5x Gunpowder) and Firework Rockets (Paper + 1-3 Gunpowder)",
            "Required for Splash Potions (Gunpowder + regular potion)",
            "Found in Dungeon, Desert Temple, Shipwreck, and Woodland Mansion chests",
            "Essential for explosive mining, combat, and aerial travel"
        ],
        description: "Gunpowder is a versatile explosive material dropped by Creepers, Ghasts, and Witches. It's used to craft TNT for demolition, Firework Rockets for Elytra flight or celebrations, and Splash Potions for ranged effects. TNT needs five gunpowder and four sand, while Firework Rockets require paper and one to three gunpowder. Essential for mining, combat, and aerial travel, gunpowder is indispensable in survival."
    }
};
