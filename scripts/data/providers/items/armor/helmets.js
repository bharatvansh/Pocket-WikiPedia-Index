// Pocket Wikipedia Foundation - Helmets Data
// ============================================
// This file contains: Leather cap, chainmail helmet, iron helmet,
// golden helmet, diamond helmet, netherite helmet, turtle shell
// ============================================

/**
 * Helmet items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const helmets = {
    "minecraft:netherite_helmet": {
        id: "minecraft:netherite_helmet",
        name: "Netherite Helmet",
        maxStack: 1,
        durability: 407,
        enchantable: true,
        usage: {
            primaryUse: "Superior head protection in combat",
            secondaryUse: "Providing knockback resistance and fire immunity"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Helmet", "Netherite Ingot"]
        },
        specialNotes: [
            "Provides 3 armor points and 3 armor toughness",
            "Increases knockback resistance by 10% (1 point)",
            "Immune to fire and lava damage; floats on lava pools",
            "Requires a Smithing Table to upgrade from a Diamond Helmet",
            "Has 407 durability points in Bedrock Edition"
        ],
        description: "The Netherite Helmet represents the pinnacle of head protection in Minecraft Bedrock Edition. It is crafted by upgrading a Diamond Helmet at a Smithing Table using a Netherite Ingot and a Netherite Upgrade Smithing Template. Beyond its formidable 3 armor points and 3 armor toughness, it provides unique knockback resistance. Its most distinctive feature is its immunity to fire; if a player dies in lava, the helmet will float on the surface instead of being destroyed, allowing for potential recovery."
    },
    "minecraft:turtle_helmet": {
        id: "minecraft:turtle_helmet",
        name: "Turtle Shell",
        maxStack: 1,
        durability: 275,
        enchantable: true,
        usage: {
            primaryUse: "Head protection and Water Breathing effect",
            secondaryUse: "Brewing Potion of the Turtle Master"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["5x Scute (Turtle Scute)"]
        },
        specialNotes: [
            "Provides 2 armor points",
            "Grants 10 seconds of Water Breathing when the player is out of water",
            "Used to brew Potion of the Turtle Master (Awkward Potion + Turtle Shell)",
            "Durability of 275 in Bedrock Edition",
            "Crafted using 5 Scutes (dropped by baby turtles when they grow up)",
            "Can be enchanted with Respiration and Aqua Affinity"
        ],
        description: "The Turtle Shell is a unique piece of headwear that serves as both armor and a functional tool for underwater exploration. When worn, it provides 2 armor points and grants the player 10 seconds of the Water Breathing effect, which resets every time the player surfaces. This makes it invaluable for short underwater tasks. It is crafted from five Scutes, which are obtained only when baby turtles grow into adults. Additionally, the Turtle Shell is a key ingredient in brewing the Potion of the Turtle Master, which provides high resistance at the cost of movement speed."
    }
};
