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
            primaryUse: "Head protection with underwater breathing bonus",
            secondaryUse: "Crafting Potion of the Turtle Master"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Scute x5"]
        },
        specialNotes: [
            "Provides 2 armor points, same as iron and chainmail helmets",
            "Grants Water Breathing status effect for 10 seconds when worn",
            "Scutes are obtained from baby turtles growing into adults",
            "Can be enchanted with standard helmet enchantments including Respiration",
            "Used as a brewing ingredient for Potion of the Turtle Master in Bedrock Edition",
            "Durability of 275 is between iron (165) and diamond (363)"
        ],
        description: "The Turtle Shell is a unique helmet crafted from five scutes dropped by baby turtles when they mature into adults. Providing 2 armor points and 275 durability, it offers defense comparable to iron helmets but with a special benefit: wearing it grants the Water Breathing effect for 10 seconds, which resets whenever the player surfaces for air. This makes it invaluable for extended underwater exploration. In Bedrock Edition, it can also be used as a brewing ingredient to create Potions of the Turtle Master."
    }
};
