// Pocket Wikipedia Foundation - Boots Data
// ============================================
// This file contains: Leather boots, chainmail boots, iron boots,
// golden boots, diamond boots, netherite boots
// ============================================

/**
 * Boots items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const boots = {
    "minecraft:iron_boots": {
        id: "minecraft:iron_boots",
        name: "Iron Boots",
        maxStack: 1,
        durability: 195,
        enchantable: true,
        usage: {
            primaryUse: "Mid-tier foot protection",
            secondaryUse: "Enabling enchantments like Feather Falling and Depth Strider"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x4"]
        },
        specialNotes: [
            "Provides 2 armor points of protection",
            "Crafted with 4 iron ingots in a boot-shaped pattern",
            "Third-highest tier of boots, above chainmail and below diamond",
            "Compatible with boots-specific enchantments: Feather Falling, Depth Strider, Frost Walker, Soul Speed",
            "Can be repaired with iron ingots on an anvil or combined with another pair in a crafting grid",
            "Durability of 195 provides good longevity for mid-game exploration"
        ],
        description: "Iron Boots are mid-tier foot armor crafted from four iron ingots, providing 2 armor points and 195 durability. They represent a solid upgrade from chainmail and copper boots, offering reliable protection during mid-game adventures. Their balanced durability and accessibility make them a popular choice before players obtain diamond-tier equipment. Iron Boots can be enchanted with all standard boot enchantments, including Feather Falling for fall damage reduction and Depth Strider for faster underwater movement."
    }
};
