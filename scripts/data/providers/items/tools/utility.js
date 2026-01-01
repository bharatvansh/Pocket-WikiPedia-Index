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
            secondaryUse: "Used on armadillos to obtain armadillo scutes for crafting wolf armor."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Feather", "Copper Ingot", "Stick"]
        },
        specialNotes: [
            "Loses 1 durability for each successful block brushed.",
            "Loses approximately 13 durability (20% of total) when used to brush an armadillo in Bedrock Edition, allowing for 5 uses.",
            "Can be enchanted with Unbreaking and Mending.",
            "Used to reveal buried loot such as pottery sherds, armor trims, and sniffer eggs."
        ],
        description: "The brush is a tool used primarily for archaeology and interacting with armadillos. By using it on suspicious sand or suspicious gravel, players can carefully reveal hidden items like ancient pottery sherds or armor trims. When used on an armadillo, it causes the mob to drop an armadillo scute, which is necessary for crafting wolf armor. Brushes are crafted using a feather, a copper ingot, and a stick in a vertical line. While Decorated Pots in Trial Chambers contain loot, they must be broken to retrieve it rather than brushed."
    }
};
