// Pocket Wikipedia Foundation - Leggings Data
// ============================================
// This file contains: Leather pants, chainmail leggings,
// iron leggings, golden leggings, diamond leggings,
// netherite leggings
// ============================================

/**
 * Leggings items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const leggings = {
    "minecraft:leather_leggings": {
        id: "minecraft:leather_leggings",
        name: "Leather Pants",
        maxStack: 1,
        durability: 75,
        enchantable: true,
        usage: {
            primaryUse: "Basic leg protection",
            secondaryUse: "Customization through dyeing"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather x7"]
        },
        specialNotes: [
            "Provides 2 armor points (1 full armor icon).",
            "Durable enough for early-game exploration.",
            "Can be dyed in Bedrock Edition using a cauldron.",
            "Crafted with seven pieces of leather in a 'U' shape.",
            "Allows players to display custom colors while maintaining minimal defense."
        ],
        description: "Leather Pants offer basic protection for the lower body, providing 2 armor points. They are crafted from seven leather pieces and are often the second piece of armor players make. In Bedrock Edition, they can be customized by dipping them into a cauldron filled with dyed water. With 75 durability, they are suited for players who haven't yet secured enough iron for better gear but wish to avoid taking full damage from fall or mob attacks."
    },
    "minecraft:chainmail_leggings": {
        id: "minecraft:chainmail_leggings",
        name: "Chainmail Leggings",
        maxStack: 1,
        durability: 225,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Decoration or trophy armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests", "Trading with Armorer villagers", "Dropped by mobs"]
        },
        specialNotes: [
            "Provides 4 armor points (Iron provides 5)",
            "Durability: 225 (same as Iron Leggings)",
            "Enchantability: 12 (Higher than Iron's 9)",
            "Can be repaired with Iron Ingots in an Anvil",
            "Obtainable via Armorer villager trades or Buried Treasure",
            "Partially transparent texture"
        ],
        description: "Chainmail Leggings provide 4 armor points of protection for the legs, one point less than Iron Leggings, while maintaining the same durability of 225. They possess a higher enchantability rating (12), allowing for potentially better enchantment rolls. Uncraftable in survival, they are primarily sourced from Armorer villagers, loot chests, or drops from armored mobs. Like other chainmail pieces, they can be repaired using Iron Ingots in an anvil."
    },
    "minecraft:iron_leggings": {
        id: "minecraft:iron_leggings",
        name: "Iron Leggings",
        maxStack: 1,
        durability: 225,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Decoration for Armor Stands"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x7"]
        },
        specialNotes: [
            "Provides 5 armor points (2.5 bars).",
            "Crafted with 7 Iron Ingots in a 'U' shape.",
            "Second most protective piece in the iron armor set.",
            "Commonly dropped by armored Zombies and Skeletons.",
            "Supports enchantments like Swift Sneak and Protection."
        ],
        description: "Iron Leggings are a standard mid-tier choice for lower-body protection. Offering 5 armor points, they provide a significant defensive boost while remaining easy to craft using iron ingots. They are often one of the first pieces of armor a player crafts after a chestplate. These leggings are durable enough for extensive exploration and cave diving, and they can be found in various loot chests in villages, shipwrecks, and strongholds."
    },
    "minecraft:copper_leggings": {
        id: "minecraft:copper_leggings",
        name: "Copper Leggings",
        maxStack: 1,
        durability: 150,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Mid-tier armor set component"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Copper Ingot x7"]
        },
        specialNotes: [
            "Provides 4 armor points (2 bars)",
            "Durability: 150 (Superior to Gold's 105 but inferior to Iron's 225)",
            "Part of the Copper Age game drop",
            "Can be smelted into one Copper Nugget"
        ],
        description: "Copper Leggings provide 4 armor points for the lower body, offering a reliable middle ground between gold and iron armor. Introduced in the 1.21.111 update, they feature 150 durability points. They are crafted from seven copper ingots and are ideal for players who need dependable leg protection while conserving iron for other tools. Their distinctive orange-brown tint makes them easily recognizable in early-game gear sets."
    },
    "minecraft:golden_leggings": {
        id: "minecraft:golden_leggings",
        name: "Golden Leggings",
        maxStack: 1,
        durability: 105,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection and Piglin pacification",
            secondaryUse: "High enchantability for better rolls"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x7"]
        },
        specialNotes: [
            "Provides 3 armor points (1.5 bars).",
            "Prevents Piglins from attacking the wearer in the Nether.",
            "Very low durability compared to iron leggings (105 vs 225).",
            "High enchantability, making it easier to get better enchantments.",
            "Can be found in Nether Bastion Remnants and Ruined Portals."
        ],
        description: "Golden Leggings are a tier of leg armor providing 3 points of protection. While their durability is significantly lower than iron or diamond gear, they have one major advantage: they pacify Piglins in the Nether. This makes them a popular choice for exploration in dangerous dimensions. They also feature high enchantability, allowing players to obtain powerful buffs more easily at enchantment tables."
    },
    "minecraft:diamond_leggings": {
        id: "minecraft:diamond_leggings",
        name: "Diamond Leggings",
        maxStack: 1,
        durability: 495,
        enchantable: true,
        usage: {
            primaryUse: "Lower body protection",
            secondaryUse: "Base for crafting Netherite Leggings"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x7"]
        },
        specialNotes: [
            "Provides 6 armor points and 2 armor toughness.",
            "Offers significant protection for the player's legs.",
            "Required to craft the Netherite Leggings using a Smithing Table.",
            "Can be enchanted with Swift Sneak or Fire Protection.",
            "Crafted using seven diamonds in a 'U' shape."
        ],
        description: "Diamond Leggings provide excellent lower-body protection, granting 6 armor points and 2 armor toughness. They are crafted by arranging seven diamonds in a large 'U' shape. These leggings offer a perfect balance of protection and durability (495 points), making them ideal for high-stakes mining and combat. Like all diamond armor, they can be upgraded into their Netherite counterparts to gain knockback resistance and fire immunity while preserving their existing enchantments."
    },
    "minecraft:netherite_leggings": {
        id: "minecraft:netherite_leggings",
        name: "Netherite Leggings",
        maxStack: 1,
        durability: 555,
        enchantable: true,
        usage: {
            primaryUse: "Superior leg protection",
            secondaryUse: "Fire resistance and knockback protection"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Leggings", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Provides 6 armor points (same as Diamond)",
            "Durability: 555 (Diamond has 495 in Bedrock)",
            "Grants 10% knockback resistance",
            "Item is immune to fire and lava damage",
            "Requires Smithing Table and Upgrade Template to craft",
            "Highest tier of leg protection in the game"
        ],
        description: "Netherite Leggings are the strongest and most durable leg armor in Minecraft Bedrock Edition. They provide the same 6 points of armor as Diamond Leggings but offer significantly higher durability and built-in knockback resistance. A unique property of netherite equipment is its immunity to fire and lava; if dropped, the item will float on top of lava rather than burning. They are crafted by upgrading Diamond Leggings with a Netherite Ingot and a Smithing Template at a Smithing Table."
    }
};
