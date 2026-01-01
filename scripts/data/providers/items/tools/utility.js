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
    },
    "minecraft:warped_fungus_on_a_stick": {
        id: "minecraft:warped_fungus_on_a_stick",
        name: "Warped Fungus on a Stick",
        maxStack: 1,
        durability: 100,
        enchantable: true,
        usage: {
            primaryUse: "Guiding and boosting saddled Striders across lava",
            secondaryUse: "Attracting nearby Striders"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Fishing Rod", "Warped Fungus"]
        },
        specialNotes: [
            "Used to control the direction of a Strider when riding it",
            "Right-clicking gives the Strider a speed boost but consumes 1 durability",
            "In Bedrock Edition, it has 100 durability",
            "Can be enchanted with Unbreaking, Mending, and Curse of Vanishing",
            "Crafted using a Fishing Rod and a Warped Fungus in any crafting grid",
            "If the fishing rod used in crafting has enchantments, they are removed",
            "When durability reaches 0, it turns back into a Fishing Rod",
            "Essential for safe Nether travel across lava oceans"
        ],
        description: "The Warped Fungus on a Stick is a utility tool used to control Striders, the passive mobs found in the Nether's lava oceans. Similar to how a Carrot on a Stick works for pigs, holding this item allows a player to steer a saddled Strider. By right-clicking (or using the item), the player can boost the Strider's speed, which consumes 1 point of the item's 100 durability. It is crafted by combining a Fishing Rod and a Warped Fungus. This tool is essential for traversing the Nether safely, as Striders can walk on lava without taking damage. Unlike Java Edition, in Bedrock Edition, when the item breaks, it reverts to a Fishing Rod rather than disappearing completely."
    }
};
