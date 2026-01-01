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
    "minecraft:spyglass": {
        id: "minecraft:spyglass",
        name: "Spyglass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Zooming in on distant objects and terrain",
            secondaryUse: "Scouting for structures or mobs from a distance"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Amethyst Shard", "Copper Ingot x2"]
        },
        specialNotes: [
            "Reduces Field of View (FOV) to 1/10th when used",
            "Creates a square vignette overlay on the screen",
            "Slows player movement while looking through it",
            "Makes a unique sound when opening and closing",
            "Visible to other players as an animation of holding the spyglass to the eye",
            "Cannot be used in the off-hand"
        ],
        description: "The Spyglass is a valuable scouting tool that allows players to observe distant details with high precision. By focusing the player's vision, it provides a significant zoom effect, making it much easier to identify far-off structures, biomes, or entities. It is crafted using copper ingots and an amethyst shard, representing one of the many functional uses for these materials. While active, the spyglass restricts the peripheral vision through a vignette effect, encouraging players to find a safe spot before peering into the distance."
    }
};
