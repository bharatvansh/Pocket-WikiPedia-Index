// Pocket Wikipedia Foundation - Swords Data
// ============================================
// This file contains: Wooden sword, stone sword, iron sword,
// golden sword, diamond sword, netherite sword, mace
// ============================================

/**
 * Sword items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const swords = {
    "minecraft:wooden_sword": {
        id: "minecraft:wooden_sword",
        name: "Wooden Sword",
        maxStack: 1,
        durability: 60,
        enchantable: true,
        usage: {
            primaryUse: "Basic melee combat",
            secondaryUse: "Breaking cobwebs"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Planks x2", "Stick"]
        },
        specialNotes: [
            "Deals 4 attack damage (2 hearts) per hit",
            "Has the lowest durability of all swords (60)",
            "Cheap and easy to craft for early game survival",
            "Can be used as fuel in a furnace (smelts 1 item)"
        ],
        description: "The Wooden Sword is the most basic melee weapon in Minecraft, often the first weapon a player crafts. Made from two planks of any wood type and a single stick, it deals 4 points of damage (2 hearts) per hit. While it has a very low durability of 60 uses, its cheap cost makes it invaluable for early defense against zombies and spiders. It can also be used to break cobwebs or bamboo more quickly than by hand."
    },
    "minecraft:stone_sword": {
        id: "minecraft:stone_sword",
        name: "Stone Sword",
        maxStack: 1,
        durability: 132,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat",
            secondaryUse: "Breaking cobwebs"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cobblestone x2", "Stick"]
        },
        specialNotes: [
            "Deals 6 attack damage (3 hearts) per hit",
            "Has a durability of 132",
            "Standard early-game weapon upgrade from wood",
            "Can be crafted with Cobblestone, Blackstone, or Cobbled Deepslate"
        ],
        description: "The Stone Sword is a common melee weapon and a direct upgrade from the Wooden Sword. Crafted from two blocks of stone-tier material (Cobblestone, Blackstone, or Cobbled Deepslate) and a stick, it deals 6 points of damage (3 hearts) in Bedrock Edition. With 132 durability, it offers a reliable balance between cost and performance for early survival."
    },
    "minecraft:golden_sword": {
        id: "minecraft:golden_sword",
        name: "Golden Sword",
        maxStack: 1,
        durability: 33,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat",
            secondaryUse: "Breaking cobwebs"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x2", "Stick"]
        },
        specialNotes: [
            "Deals 4 attack damage (2 hearts) per hit",
            "Has extremely low durability (33 uses)",
            "Easiest sword to enchant with high-level enchantments",
            "Can be smelted into a Gold Nugget"
        ],
        description: "The Golden Sword is a melee weapon known for its high enchantability but extremely low durability. Crafted from two Gold Ingots and a Stick, it deals 4 points of damage (2 hearts), equivalent to a Wooden Sword. While it has the fastest attack recovery in Java Edition, Bedrock Edition does not feature this mechanic, making the Golden Sword primarily useful for obtaining high-level enchantments easily or as a temporary weapon. Its 33 durability points make it unreliable for extended combat encounters."
    },
    "minecraft:iron_sword": {
        id: "minecraft:iron_sword",
        name: "Iron Sword",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat",
            secondaryUse: "Breaking cobwebs quickly"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x2", "Stick"]
        },
        specialNotes: [
            "Can be repaired with Iron Ingots",
            "Can receive Sharpness, Smite, or Bane of Arthropods"
        ],
        description: "The Iron Sword is a versatile weapon that deals moderate damage. It's more durable than wooden or stone swords but less powerful than diamond or netherite swords. Iron swords can be enchanted with various combat-related enchantments."
    },
    "minecraft:diamond_sword": {
        id: "minecraft:diamond_sword",
        name: "Diamond Sword",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "High-damage melee combat",
            secondaryUse: "Quickly breaking cobwebs and bamboo"
        },
        combat: {
            attackDamage: 8,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x2", "Stick"]
        },
        specialNotes: [
            "Deals 8 points of damage (4 hearts) per hit",
            "Can be upgraded to a Netherite Sword using a Smithing Template",
            "Durability of 1562 allows for extensive use before needing repair",
            "Can be repaired with Diamonds or in an anvil"
        ],
        description: "The Diamond Sword is a high-tier melee weapon that provides significant damage and durability. It was the strongest sword available before the introduction of netherite. To craft one, a player needs two diamonds and a stick. It can be further enhanced with various combat enchantments like Sharpness, Fire Aspect, and Knockback, making it a formidable weapon for any encounter."
    },
    "minecraft:mace": {
        id: "minecraft:mace",
        name: "Mace",
        maxStack: 1,
        durability: 501,
        enchantable: true,
        usage: {
            primaryUse: "Melee combat with powerful smash attacks",
            secondaryUse: "Dealing massive damage while falling from heights"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Heavy Core", "Breeze Rod"]
        },
        specialNotes: [
            "Smash attack triggers when falling >1.5 blocks; negates fall damage",
            "Damage scales infinitely with fall distance (Density enchant boosts this)",
            "Base damage: 6 (same as Iron Sword)",
            "Exclusive Enchants: Density (damage), Breach (armor pierce), Wind Burst (launch)",
            "Crafted with Heavy Core + Breeze Rod; no attack cooldown in Bedrock"
        ],
        description: "The Mace is a powerful melee weapon added in 1.21. Crafted from a Heavy Core and a Breeze Rod, it features a unique smash attack mechanic: falling 1.5+ blocks before hitting an enemy deals massive damage scaling with fall distance while negating the user's fall damage. In Bedrock Edition, it deals 6 base damage. It supports exclusive enchantments: Density for extra fall damage, Breach to bypass armor, and Wind Burst to launch the player upward on impact. This makes the Mace a devastating tool for aerial strikes and tactical combat."
    },
    "minecraft:iron_spear": {
        id: "minecraft:iron_spear",
        name: "Iron Spear",
        maxStack: 1,
        durability: 250,
        enchantable: true,
        usage: {
            primaryUse: "Long-reach melee combat",
            secondaryUse: "Thrusting and lunging attacks"
        },
        combat: {
            attackDamage: 5,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot", "Stick x2"]
        },
        specialNotes: [
            "Introduced as part of the 'Mounts of Mayhem' (1.21.130+) update",
            "Features a longer reach than standard swords",
            "Supported by the Lunge enchantment for gap-closing attacks",
            "Effective for keeping distance from creepers and other dangerous mobs",
            "In Bedrock, can be used to poke through narrow gaps"
        ],
        description: "The Iron Spear is a versatile melee weapon added to Bedrock Edition in the Mounts of Mayhem update. Crafted with a single iron ingot and two sticks, it provides an increased attack reach compared to standard swords, allowing players to strike enemies from a safer distance. It is uniquely compatible with the Lunge enchantment, which enables a powerful dash attack that closes the gap between the player and their target. Its defensive utility and range make it an excellent choice for cautious explorers and mounted combat."
    },
    "minecraft:diamond_spear": {
        id: "minecraft:diamond_spear",
        name: "Diamond Spear",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "Extended-reach melee combat",
            secondaryUse: "Powerful charge attacks while moving"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond", "Stick x2"]
        },
        specialNotes: [
            "Added in the Mounts of Mayhem update (1.21.130)",
            "Features a 1.5 block longer reach than swords",
            "Jab attack allows for safer spacing during combat",
            "Charge attack damage increases based on player's current speed",
            "Can be enchanted with Lunge for horizontal movement"
        ],
        description: "The Diamond Spear is a high-tier tiered weapon introduced in the Mounts of Mayhem update. Crafted from a single diamond and two sticks, it offers an increased attack range over standard swords, allowing players to poke enemies from distance. Its unique mechanics include a Jab attack for spacing and a Charge attack that scales in power with the user's velocity. While it deals less base damage than a diamond sword, its tactical advantages in reach and mounted combat make it a powerful choice for experienced warriors."
    },
    "minecraft:netherite_spear": {
        id: "minecraft:netherite_spear",
        name: "Netherite Spear",
        maxStack: 1,
        durability: 2031,
        enchantable: true,
        usage: {
            primaryUse: "Elite extended-reach combat",
            secondaryUse: "Devastating high-speed charge attacks"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Spear", "Netherite Ingot"]
        },
        specialNotes: [
            "The most powerful spear variant in Bedrock Edition",
            "Fireproof and floats on lava like all netherite items",
            "Maximum reach and durability for a tiered weapon",
            "Compatible with the Lunge enchantment for advanced mobility",
            "Charge attacks can deal extreme damage when used from a mount"
        ],
        description: "The Netherite Spear represents the pinnacle of tiered weaponry in Minecraft Bedrock. Upgraded from a Diamond Spear at a smithing table, it combines massive durability with the spear's signature extended reach. It features both the defensive Jab attack and the velocity-scaling Charge attack, which is especially lethal when performed from a fast mount like a horse or nautilus. Being made of netherite, it is completely immune to fire and lava damage, ensuring it won't be lost in the Nether's depths."
    },
    "minecraft:copper_spear": {
        id: "minecraft:copper_spear",
        name: "Copper Spear",
        maxStack: 1,
        durability: 180,
        enchantable: true,
        usage: {
            primaryUse: "Mid-tier extended-reach combat",
            secondaryUse: "Early-game charge attacks"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Copper Ingot", "Stick x2"]
        },
        specialNotes: [
            "Added in the Mounts of Mayhem update (1.21.130)",
            "Provides a useful sink for copper ingots in survival",
            "More durable than stone and golden spears",
            "Excellent for keeping hostile mobs at bay in early game",
            "Identical reach to higher-tier spear variants"
        ],
        description: "The Copper Spear is a cost-effective tiered weapon that bridges the gap between early and mid-game gear. Crafted using a copper ingot and two sticks, it provides the same extended reach as diamond or netherite spears but with lower durability and damage. It is an ideal weapon for players with an abundance of copper who want to utilize the spear's unique Jab and Charge mechanics without depleting more valuable materials like iron or diamonds."
    },
    "minecraft:wooden_spear": {
        id: "minecraft:wooden_spear",
        name: "Wooden Spear",
        maxStack: 1,
        durability: 59,
        enchantable: true,
        usage: {
            primaryUse: "Basic extended-reach combat",
            secondaryUse: "Early-game defense"
        },
        combat: {
            attackDamage: 3,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Any Planks", "Stick x2"]
        },
        specialNotes: [
            "Part of the 'Mounts of Mayhem' (1.21.130) update",
            "Cheapest spear variant to craft",
            "Offers more range than a wooden sword but lower speed",
            "Ideal for early survival against zombies and skeletons",
            "Can be repaired with any wooden planks"
        ],
        description: "The Wooden Spear is the most basic tier of polearm introduced in the Mounts of Mayhem update. While it has low durability and damage, its primary advantage is the extended reach it provides over standard swords. This allows early-game players to keep dangerous enemies at a distance. It is crafted simply with two sticks and any type of wooden plank, making it a highly accessible tool for new adventurers who prioritize safety over raw power."
    },
    "minecraft:stone_spear": {
        id: "minecraft:stone_spear",
        name: "Stone Spear",
        maxStack: 1,
        durability: 131,
        enchantable: true,
        usage: {
            primaryUse: "Starting extended-reach combat",
            secondaryUse: "Defensive perimeter control"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cobblestone or Blackstone", "Stick x2"]
        },
        specialNotes: [
            "Introduced alongside other tier-variants in Mounts of Mayhem",
            "More durable than wooden and golden spears",
            "Provides a 1-block reach advantage over standard tools",
            "Effective for early-game exploration of caves",
            "Crafted using cobblestone, blackstone, or cobbled deepslate"
        ],
        description: "The Stone Spear is a reliable early-game weapon that offers better durability and damage than its wooden counterpart. Part of the Mounts of Mayhem update, it grants players the ability to strike from a distance, which is particularly useful for dealing with creepers or keeping mobs away from base perimeters. It is a cost-effective choice for players who have not yet secured iron but need a weapon with more utility than a basic stone sword."
    },
    "minecraft:golden_spear": {
        id: "minecraft:golden_spear",
        name: "Golden Spear",
        maxStack: 1,
        durability: 32,
        enchantable: true,
        usage: {
            primaryUse: "High-enchantability reach combat",
            secondaryUse: "Fast-strike charge attacks"
        },
        combat: {
            attackDamage: 3,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot", "Stick x2"]
        },
        specialNotes: [
            "Added as the high-enchantability variant in Mounts of Mayhem",
            "Very low durability, matching other golden tools",
            "Significantly higher chance of getting top-tier enchantments",
            "Beneficial for early access to powerful Lunge or Jab levels",
            "Can be repaired with gold ingots in an anvil"
        ],
        description: "The Golden Spear combines the extended reach of the spear class with the high enchantability of gold. Although it suffers from extremely low durability, it is much easier to imbue with powerful enchantments at an enchanting table. This makes it a strategic choice for players who want to utilize the maximum potential of spear-exclusive enchants early on. Its' gold construction also makes it a valuable, albeit fragile, addition to any adventurer's arsenal in the Nether."
    },
    "minecraft:netherite_sword": {
        id: "minecraft:netherite_sword",
        name: "Netherite Sword",
        maxStack: 1,
        durability: 2031,
        enchantable: true,
        usage: {
            primaryUse: "Elite melee combat weapon",
            secondaryUse: "Breaking cobwebs and bamboo efficiently"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Sword", "Netherite Ingot"]
        },
        specialNotes: [
            "Highest base damage for a sword in Bedrock (9 points/4.5 hearts)",
            "Has 2031 durability points; significantly higher than diamond",
            "Immune to fire and lava; floats on lava pools if dropped",
            "Upgraded from Diamond Sword at a Smithing Table",
            "High enchantability allows for powerful combat modifiers"
        ],
        description: "The Netherite Sword is the most powerful melee weapon in Minecraft Bedrock Edition. With a base damage of 9 points, it surpasses the diamond sword in raw power and offers significantly more durability with 2031 points. It is fire-resistant, meaning it will float in lava instead of burning. To obtain this elite weapon, a player must upgrade a Diamond Sword using a Netherite Ingot and a Netherite Upgrade Smithing Template at a Smithing Table. Its superior stats make it the ultimate choice for high-tier combat."
    }
};
