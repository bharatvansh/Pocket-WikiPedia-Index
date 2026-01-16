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
    "minecraft:golden_leggings": {
        id: "minecraft:golden_leggings",
        name: "Golden Leggings",
        maxStack: 1,
        durability: 105,
        enchantable: true,
        usage: {
            primaryUse: "Leg protection",
            secondaryUse: "Piglin neutrality"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x7"]
        },
        specialNotes: [
            "Provides 3 armor points",
            "High enchantability value (25)",
            "Prevents Piglins from being hostile in the Nether",
            "Lower durability than iron or chainmail",
            "Can be found in Ruined Portal and Bastion chests"
        ],
        description: "Golden Leggings provide 3 armor points and are notable for their high enchantability, making them easier to obtain powerful enchantments on. While they have relatively low durability (105), they serve a crucial role in Nether exploration by making Piglins neutral toward the wearer. They can be crafted with 7 gold ingots arranged in a 'U' shape or found as loot in various Nether structures."
    },
    "minecraft:diamond_leggings": {
        id: "minecraft:diamond_leggings",
        name: "Diamond Leggings",
        maxStack: 1,
        durability: 495,
        enchantable: true,
        usage: {
            primaryUse: "High-level leg protection",
            secondaryUse: "Base for Netherite Leggings"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x7"]
        },
        specialNotes: [
            "Provides 6 armor points",
            "High durability (495 in Bedrock Edition)",
            "Required to craft Netherite Leggings",
            "Can be trimmed with various designs in a Smithing Table",
            "Highest tier of protection obtainable via crafting without netherite"
        ],
        description: "Diamond Leggings are a top-tier armor piece offering 6 points of defense and exceptional durability. They represent the highest protection level that can be directly crafted using diamonds before upgrading to netherite. These leggings can also be customized with armor trims using various smithing templates and materials. They are commonly discarded once netherite is obtained but remain a staple of late-game equipment."
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
