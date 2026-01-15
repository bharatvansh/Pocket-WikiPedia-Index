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
    "minecraft:netherite_leggings": {
        id: "minecraft:netherite_leggings",
        name: "Netherite Leggings",
        maxStack: 1,
        durability: 555,
        enchantable: true,
        usage: {
            primaryUse: "Exceptional lower body protection",
            secondaryUse: "Granting knockback resistance and fire immunity"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Leggings", "Netherite Ingot"]
        },
        specialNotes: [
            "Provides 6 armor points and 3 armor toughness",
            "Increases knockback resistance by 10% (1 point)",
            "Fire-resistant; floats on lava and survives burning",
            "Requires a Smithing Table to upgrade from Diamond Leggings",
            "Exclusive Swift Sneak enchantment can be applied via books"
        ],
        description: "Netherite Leggings are the most powerful leg protection available in Minecraft Bedrock Edition. Boasting 6 armor points and 3 armor toughness, they offer significant damage reduction against heavy hits. Like all netherite equipment, they are fire-resistant and will float if dropped into lava. To obtain them, players must combine Diamond Leggings with a Netherite Ingot and a Netherite Upgrade Smithing Template at a Smithing Table, representing a significant investment of rare materials from the Nether."
    }
};
