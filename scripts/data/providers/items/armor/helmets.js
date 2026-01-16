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
    "minecraft:iron_helmet": {
        id: "minecraft:iron_helmet",
        name: "Iron Helmet",
        maxStack: 1,
        durability: 165,
        enchantable: true,
        usage: {
            primaryUse: "Head protection",
            secondaryUse: "Decoration for Armor Stands"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x5"]
        },
        specialNotes: [
            "Provides 2 armor points.",
            "Reliable mid-tier protection for the head.",
            "Frequently found in village armorer chests or dropped by zombies.",
            "Can be repaired in an anvil with Iron Ingots.",
            "Supports various enchantments including Protection and Respiration."
        ],
        description: "The Iron Helmet is a reliable mid-tier armor piece that provides 2 points of armor for the head. It is crafted using five iron ingots and is much more accessible than diamond gear, making it a staple for players transitioning out of the early game. Iron helmets can also be found in various loot chests throughout the world or obtained from villager trading. With 165 durability, it offers decent protection and can be enchanted to improve survivability in various environments."
    },
    "minecraft:diamond_helmet": {
        id: "minecraft:diamond_helmet",
        name: "Diamond Helmet",
        maxStack: 1,
        durability: 363,
        enchantable: true,
        usage: {
            primaryUse: "Head protection",
            secondaryUse: "Base for crafting Netherite Helmet"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x5"]
        },
        specialNotes: [
            "Provides 3 armor points and 2 armor toughness.",
            "Durable head protection crafted from 5 diamonds.",
            "Base item for crafting Netherite Helmet in a Smithing Table.",
            "Repairable in an anvil using Diamonds.",
            "Can be enchanted with Aqua Affinity and Respiration."
        ],
        description: "The Diamond Helmet is a premium piece of armor crafted from five diamonds. It provides 3 points of armor and 2 points of armor toughness, offering significant protection against physical damage. It is a vital step in progressing toward late-game equipment, as it serves as the base for upgrading into a Netherite Helmet using a Smithing Table. Its high durability of 363 makes it incredibly reliable for long exploration trips and intense boss fights."
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
