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
