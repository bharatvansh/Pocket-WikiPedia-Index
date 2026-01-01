// Pocket Wikipedia Foundation - Utility Tools Data
// ============================================
// This file contains: Shears, flint and steel, fishing rod,
// carrot on a stick, warped fungus on a stick, lead, brush,
// spyglass, compass, clock, recovery compass, map, empty map,
// bucket, water bucket, lava bucket, powder snow bucket,
// milk bucket, axolotl bucket, fish buckets (all types)
// ============================================

/**
 * Utility tool items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const utilityTools = {
    "minecraft:brush": {
        id: "minecraft:brush",
        name: "Brush",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Used in archaeology to brush suspicious sand and suspicious gravel blocks.",
            secondaryUse: "Reveals buried loot such as pottery sherds, armor trims, and other treasures."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Feather", "Copper Ingot", "Stick"]
        },
        specialNotes: [
            "Loses 1 durability for each successful block brushed.",
            "Can be enchanted with Unbreaking and Mending.",
            "Required to obtain items from Trial Chamber decorated pots without breaking them."
        ],
        description: "The brush is a tool used primarily for archaeology. By using it on suspicious sand or suspicious gravel, players can carefully reveal hidden items. It is essential for discovering ancient pottery sherds and other historical artifacts buried throughout the world. Brushes are crafted using a feather, a copper ingot, and a stick in a vertical line. Beyond archaeology, they can also be used on Decorated Pots to extract their contents safely."
    }
};
