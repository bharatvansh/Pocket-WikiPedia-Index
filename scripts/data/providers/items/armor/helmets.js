// Pocket Wikipedia Foundation - Helmets Data
// ============================================
// This file contains: Leather cap, chainmail helmet, iron helmet,
// golden helmet, diamond helmet, netherite helmet, turtle shell
// ============================================

/**
 * Helmet items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const helmets = {
    "minecraft:leather_helmet": {
        id: "minecraft:leather_helmet",
        name: "Leather Cap",
        maxStack: 1,
        durability: 55,
        enchantable: true,
        usage: {
            primaryUse: "Basic head protection",
            secondaryUse: "Team identification and decoration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather x5"]
        },
        specialNotes: [
            "Provides 1 armor point (half a shield icon)",
            "Can be dyed millions of colors using a Cauldron in Bedrock Edition",
            "Durability: 55",
            "Can be repaired using Leather in an Anvil",
            "Does not protect against freezing in Powder Snow",
            "Renewable via Cow, Mooshroom, or Hoglin drops"
        ],
        description: "The Leather Cap is the most basic form of head protection in Minecraft. While it only provides a single armor point and has a low durability of 55, it possesses a unique property: it can be dyed in over 12 million color combinations using a cauldron. This makes it a popular choice for team-based minigames and aesthetic customization. Despite its minimal defensive capabilities, it remains a staple for early-game survival and decorative armor sets."
    },
    "minecraft:iron_helmet": {
        id: "minecraft:iron_helmet",
        name: "Iron Helmet",
        maxStack: 1,
        durability: 165,
        enchantable: true,
        usage: {
            primaryUse: "Reliable head protection in combat",
            secondaryUse: "Trading and smelting for resources"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x5"]
        },
        specialNotes: [
            "Provides 2 armor points (1 full shield icon)",
            "Durability: 165",
            "Can be repaired using Iron Ingots in an Anvil",
            "Most common metal armor used by players in mid-game",
            "Frequently dropped by armored Zombies and Skeletons",
            "Can be melted down in a Furnace to yield one Iron Nugget"
        ],
        description: "The Iron Helmet is a solid mid-tier piece of armor that balances protection and cost. Providing 2 armor points—matching Golden and Turtle shells—it offers a much higher durability of 165 compared to gold. It is commonly one of the first metal armor pieces a player crafts due to the abundance of iron and its reliable performance in early-to-mid game survival and combat scenarios across the Overworld."
    },
    "minecraft:golden_helmet": {
        id: "minecraft:golden_helmet",
        name: "Golden Helmet",
        maxStack: 1,
        durability: 77,
        enchantable: true,
        usage: {
            primaryUse: "Pacifying Piglins and head protection",
            secondaryUse: "High-level enchantment base"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x5"]
        },
        specialNotes: [
            "Provides 2 armor points (1 full shield icon)",
            "Prevents Piglins from attacking the player in the Nether",
            "Highest enchantability rating (25) of all helmet materials",
            "Durability: 77 (lower than Iron's 165)",
            "Can be melted down in a Furnace to yield one Gold Nugget",
            "Repairable with Gold Ingots in an Anvil"
        ],
        description: "The Golden Helmet offers the same level of protection as an iron helmet but with significantly lower durability. Its primary strategic value is found in the Nether; wearing any piece of golden armor prevents Piglins from becoming aggressive. It also boasts the highest enchantability of any material, making it easier to obtain powerful enchantments like Protection IV at lower levels, though it will break much faster than iron or diamond."
    },
    "minecraft:diamond_helmet": {
        id: "minecraft:diamond_helmet",
        name: "Diamond Helmet",
        maxStack: 1,
        durability: 363,
        enchantable: true,
        usage: {
            primaryUse: "High-level head protection",
            secondaryUse: "Base for Netherite upgrade"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x5"]
        },
        specialNotes: [
            "Provides 3 armor points (1.5 shield icons) and 2 armor toughness",
            "Durability: 363",
            "Can be repaired with Diamonds in an Anvil",
            "Renewable through Master-level Armorer villager trades",
            "Base material required to upgrade to a Netherite Helmet",
            "Offers superior protection against high-damage attacks due to toughness"
        ],
        description: "The Diamond Helmet is a high-tier protective item offering 3 armor points and 2 armor toughness. With a durability of 363, it is significantly more resilient than iron or gold alternatives. Until the discovery of ancient debris, it represents the strongest head protection available. It is often a priority for players entering dangerous late-game environments like the End or exploring Guardian-infested Ocean Monuments."
    },
    "minecraft:chainmail_helmet": {
        id: "minecraft:chainmail_helmet",
        name: "Chainmail Helmet",
        maxStack: 1,
        durability: 165,
        enchantable: true,
        usage: {
            primaryUse: "Head protection",
            secondaryUse: "Decoration or trophy armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests", "Trading with Armorer villagers", "Dropped by mobs"]
        },
        specialNotes: [
            "Provides 2 armor points (same as Iron/Gold/Turtle)",
            "Durability: 165 (same as Iron Helmet)",
            "Enchantability: 12 (Higher than Iron's 9, lower than Gold's 25)",
            "Can be repaired with Iron Ingots in an Anvil",
            "Cannot be crafted; obtained via trading or loot",
            "Allows the skin layer to be partially visible through the mesh"
        ],
        description: "The Chainmail Helmet is a piece of armor made of linked metal rings. It offers the same protection (2 points) and durability (165) as an Iron Helmet but has a slightly higher enchantability of 12. Unlike other armor sets, Chainmail cannot be crafted by players and must be obtained through trading with Armorer villagers, looting chests in structures like Buried Treasure or Woodland Mansions, or as drops from mobs wearing it. Its unique semi-transparent texture makes it a popular choice for cosmetic armor stands and specific player skins."
    },
    "minecraft:turtle_helmet": {
        id: "minecraft:turtle_helmet",
        name: "Turtle Shell",
        maxStack: 1,
        durability: 275,
        enchantable: true,
        usage: {
            primaryUse: "Helmet that grants Water Breathing",
            secondaryUse: "Brewing ingredient for Potion of the Turtle Master"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Turtle Scute x5"]
        },
        specialNotes: [
            "Provides 2 armor points (same as Golden/Iron/Chainmail Helmet)",
            "Grants 10 seconds of Water Breathing when entering water",
            "Effect refreshes every time the player exits and re-enters water",
            "Used to brew Potion of the Turtle Master (Awkward Potion + Turtle Shell)",
            "Durability of 276 is higher than iron (165) but lower than diamond (363)",
            "Can be repaired with Turtle Scutes"
        ],
        description: "The Turtle Shell is a unique helmet crafted from five Turtle Scutes. It offers the same protection level as an iron helmet but comes with a special ability: it grants the player 10 seconds of Water Breathing whenever they are in the air or on land, which effectively adds 10 seconds of extra breath when diving underwater. This effect resets instantly upon resurfacing. Additionally, the shell is a potent brewing ingredient used to create the Potion of the Turtle Master, which grants high resistance and slowness."
    },
    "minecraft:netherite_helmet": {
        id: "minecraft:netherite_helmet",
        name: "Netherite Helmet",
        maxStack: 1,
        durability: 407,
        enchantable: true,
        usage: {
            primaryUse: "Superior head protection in combat",
            secondaryUse: "Providing knockback resistance and fire immunity"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Helmet", "Netherite Ingot"]
        },
        specialNotes: [
            "Provides 3 armor points and 3 armor toughness",
            "Increases knockback resistance by 10% (1 point)",
            "Immune to fire and lava damage; floats on lava pools",
            "Requires a Smithing Table to upgrade from a Diamond Helmet",
            "Has 407 durability points in Bedrock Edition"
        ],
        description: "The Netherite Helmet represents the pinnacle of head protection in Minecraft Bedrock Edition. It is crafted by upgrading a Diamond Helmet at a Smithing Table using a Netherite Ingot and a Netherite Upgrade Smithing Template. Beyond its formidable 3 armor points and 3 armor toughness, it provides unique knockback resistance. Its most distinctive feature is its immunity to fire; if a player dies in lava, the helmet will float on the surface instead of being destroyed, allowing for potential recovery."
    }
};
