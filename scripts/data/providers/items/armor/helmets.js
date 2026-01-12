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
            primaryUse: "Underwater breathing and head protection",
            secondaryUse: "Crafted from baby turtle scutes for aquatic exploration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Scute x5"]
        },
        specialNotes: [
            "Provides 10 seconds of Water Breathing when entering water (refreshes every 10s)",
            "Offers 2 armor points for protection",
            "Crafted from 5 Scutes dropped by baby turtles when they grow into adults",
            "Can be repaired using Scutes in an anvil",
            "Highest durability helmet in the game naturally (275 points)",
            "Excellent for underwater exploration and monument raiding"
        ],
        description: "The Turtle Shell is a unique helmet crafted from 5 Scutes, which are dropped by baby turtles when they mature into adults. It provides 2 armor points and the special ability to grant Water Breathing for 10 seconds when the player enters water, making it invaluable for underwater exploration. As the most durable helmet naturally available in the game with 275 durability points, it offers excellent protection and utility. The shell can be enchanted with standard helmet enchantments and repaired using additional Scutes at an anvil, making it a sustainable choice for ocean monument raids and underwater base construction."
    }
};
