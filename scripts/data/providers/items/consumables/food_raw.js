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
        description: "Chorus Fruit is a unique food item found exclusively in the End dimension, harvested from Chorus Plants that grow on End stone. Unlike other foods, eating a Chorus Fruit teleports the player to a random location within 8 blocks horizontally or vertically, making it invaluable for escaping dangerous situations or quickly navigating the treacherous End terrain. The teleportation ability can work through walls and into caves when valid air spaces exist, and the fruit is consumed even if no valid teleportation target is found or when the hunger bar is full. Chorus Fruit restores 4 hunger points and 2.4 saturation, providing both sustenance and mobility in the hostile End environment. Players can farm Chorus Fruit by planting Chorus Flowers on End stone, creating a renewable food source with its unique teleportation mechanic that defines End exploration and survival."
    },
    "minecraft:glow_berries": {
        id: "minecraft:glow_berries",
        name: "Glow Berries",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source and cave lighting",
            secondaryUse: "Decorative lighting with cave vines"
        },
        food: {
            hunger: 2,
            saturation: 0.6
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from cave vines in lush caves and other underground locations"]
        },
        specialNotes: [
            "Restores 2 hunger points (1 drumstick)",
            "Can be eaten to restore hunger",
            "Emit light level 14 when placed, providing cave illumination",
            "Can be planted on the underside of blocks to grow cave vines downward",
            "Cave vines grow naturally in lush caves and occasionally in other caves",
            "Glow berries can be composted with a 30% chance",
            "Foxes may eat glow berries during breeding",
            "Added in Caves & Cliffs Part II update (1.18)",
            "Useful for marking cave paths and creating decorative lighting"
        ],
        description: "Glow Berries are a unique food and light source item found on cave vines in Minecraft's underground environments, particularly lush caves. These vibrant orange berries can be eaten to restore 2 hunger points and 0.6 saturation, making them a modest but accessible food source for spelunkers. What makes Glow Berries truly valuable is their light-emitting property - when placed on cave vines, they emit a light level of 14, making them excellent for illuminating dark caverns without the need for torches. Players can farm Glow Berries by planting them on the underside of blocks, where the vines will grow downward and produce berries at random intervals. Beyond their practical uses, Glow Berries serve as an aesthetically pleasing decorative element for cave builds and underground bases, providing both sustenance and illumination in a single renewable resource."
    }
};
