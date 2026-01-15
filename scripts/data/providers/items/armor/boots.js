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
    "minecraft:netherite_boots": {
        id: "minecraft:netherite_boots",
        name: "Netherite Boots",
        maxStack: 1,
        durability: 481,
        enchantable: true,
        usage: {
            primaryUse: "Superior foot protection and mobility support",
            secondaryUse: "Providing knockback resistance and fire immunity"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Boots", "Netherite Ingot"]
        },
        specialNotes: [
            "Provides 3 armor points and 3 armor toughness",
            "Increases knockback resistance by 10% (1 point)",
            "Immune to fire damage and floats on lava surfaces",
            "Upgraded from Diamond Boots using a Smithing Table",
            "Compatible with mobility enchantments like Depth Strider and Soul Speed"
        ],
        description: "Netherite Boots provide the ultimate foot protection in Minecraft Bedrock Edition, offering 3 armor points and 3 armor toughness. They share the unique properties of the netherite tier, including fire immunity and knockback resistance. These boots are particularly valuable when combined with enchantments like Feather Falling or Soul Speed, as their high 481 durability ensures they last through extensive exploration and combat. Crafting them requires a Diamond Boots base, a Netherite Ingot, and a Netherite Upgrade Smithing Template."
    }
};
