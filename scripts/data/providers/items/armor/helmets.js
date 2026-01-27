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
            secondaryUse: "Dyeing for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather x5"]
        },
        specialNotes: [
            "Provides 1 armor point (half an armor icon).",
            "Can be dyed in a cauldron to change its color (Bedrock Edition).", 
            "Low durability compared to iron or gold armor.",
            "Often dropped by zombies and husks.",
            "Essential for the 'Tie Dye Outfit' achievement in Bedrock Edition."      
        ],
        description: "The Leather Cap is the most basic tier of head protection available in Minecraft Bedrock Edition. Crafted from five pieces of leather, it provides 1 point of armor. While its defensive capabilities are minimal, it offers a unique customization feature: players can dye it in a wide array of colors using a cauldron filled with dyed water. This makes it a popular choice for team identification or vanity sets. It has a durability of 55 points, necessitating frequent repair or replacement in active combat."
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
    "minecraft:copper_helmet": {
        id: "minecraft:copper_helmet",
        name: "Copper Helmet",
        maxStack: 1,
        durability: 110,
        enchantable: true,
        usage: {
            primaryUse: "Head protection",
            secondaryUse: "Mid-tier armor set component"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Copper Ingot x5"]
        },
        specialNotes: [
            "Provides 2 armor points (1 bar)",
            "Durability: 110 (Between Leather's 55 and Iron's 165)",
            "Introduced in Bedrock Edition 1.21.111 update",
            "Can be smelted into one Copper Nugget"
        ],
        description: "The Copper Helmet is an armor piece introduced in the Copper Age update (1.21.111). It provides 2 points of armor and has a durability of 110. While it offers less protection than an Iron Helmet, it is a significant upgrade over leather gear and utilizes copper ingots, which are highly abundant. This makes copper armor an excellent choice for players exploring the early to mid-game world who want reliable defense without depleting their iron reserves."
    },
    "minecraft:golden_helmet": {
        id: "minecraft:golden_helmet",
        name: "Golden Helmet",
        maxStack: 1,
        durability: 77,
        enchantable: true,
        usage: {
            primaryUse: "Head protection and Piglin pacification",
            secondaryUse: "Easier access to high-level enchantments"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x5"]
        },
        specialNotes: [
            "Provides 2 armor points (1 bar).",
            "Prevents Piglins from attacking the wearer in the Nether.",
            "Extremely low durability compared to iron (77 vs 165).",
            "High enchantability allows for better enchantments at lower levels.",
            "Can be found in Nether Bastion Remnants and Ruined Portals."
        ],
        description: "The Golden Helmet provides the same protection as iron (2 armor points) but with significantly lower durability. However, its high enchantability and unique utility in the Nether make it a strategic choice. Wearing any piece of gold armor, such as this helmet, pacifies Piglins, allowing players to explore the Nether more safely. While it breaks quickly, it is often favored by players who want to save their iron or diamond gear for combat while traveling through neutral mob territories."
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
