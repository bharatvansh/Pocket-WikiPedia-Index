// Pocket Wikipedia Foundation - Raw Food Data
// ============================================
// This file contains: Raw beef, raw porkchop, raw chicken,
// raw mutton, raw rabbit, raw cod, raw salmon, tropical fish,
// pufferfish, apple, melon slice, sweet berries, glow berries,
// carrot, potato, beetroot, dried kelp, chorus fruit
// ============================================

/**
 * Raw food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const rawFood = {
    "minecraft:apple": {
        id: "minecraft:apple",
        name: "Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Crafting golden apples"
        },
        food: {
            hunger: 4,
            saturation: 2.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Drops from oak and dark oak leaves"]
        },
        specialNotes: [
            "Restores 4 hunger points (2 drumsticks)",
            "Has a 0.5% chance to drop from oak or dark oak leaves when broken",
            "Can be used to craft golden apples with gold ingots"
        ],
        description: "Apples are a common food item that can be obtained by breaking oak or dark oak leaves, or found in various structure chests. They provide moderate hunger restoration and are essential ingredients for crafting golden apples."
    },
    "minecraft:chorus_fruit": {
        id: "minecraft:chorus_fruit",
        name: "Chorus Fruit",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food with teleportation ability",
            secondaryUse: "Exploration and escaping danger in the End dimension"
        },
        food: {
            hunger: 4,
            saturation: 2.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Chorus Plants in the End dimension"]
        },
        specialNotes: [
            "Teleports the player to a random location within 8 blocks when eaten",
            "Can be eaten at any time, even if teleportation fails or hunger is full",
            "Teleportation can work through walls and into caves when valid",
            "Eating time: 1.6 seconds (standard); Teleport cooldown: 1 second",
            "Restores 4 hunger points (2 drumsticks) and 2.4 saturation",
            "Chorus Plants grow on End stone and require End stone to grow",
            "Can be farmed by planting Chorus Flowers on End stone",
            "Unique to the End dimension and cannot be obtained elsewhere naturally"
        ],
        description: "Chorus Fruit is a unique food item found exclusively in the End dimension, harvested from Chorus Plants that grow on End stone. Unlike other foods, eating a Chorus Fruit teleports the player to a random location within 8 blocks horizontally or vertically, making it invaluable for escaping dangerous situations or quickly navigating the treacherous End terrain. The teleportation ability can work through walls and into caves as long as there are valid air spaces within range, but the fruit cannot be eaten if no valid teleportation targets exist nearby. Chorus Fruit restores 4 hunger points and 2.4 saturation, providing both sustenance and mobility in the hostile End environment. Players can farm Chorus Fruit by planting Chorus Flowers on End stone, creating a renewable food source with its unique teleportation mechanic that defines End exploration and survival."
    }
};
