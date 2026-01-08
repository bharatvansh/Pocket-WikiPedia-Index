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
            primaryUse: "Helmet that grants brief Water Breathing when your air runs out",
            secondaryUse: "Reliable mid-tier protection for ocean exploration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Turtle Scute x5"]
        },
        specialNotes: [
            "Crafted with 5 Turtle Scutes arranged like a helmet",
            "Provides 2 armor points",
            "Durability: 275 (higher than iron, gold, chainmail, and copper helmets)",
            "Grants 10 seconds of Water Breathing when the player's air supply runs out",
            "Used to brew the Potion of the Turtle Master (Awkward Potion + Turtle Shell)",
            "Can be enchanted (Respiration, Aqua Affinity, Protection, Unbreaking, Mending)"
        ],
        description: "The Turtle Shell is a unique helmet crafted from five Turtle Scutes, which are obtained when baby turtles grow into adults. It provides 2 armor points and a high 275 durability, making it tougher than standard mid-tier helmets. When worn underwater, it grants a 10-second Water Breathing effect once your air supply runs out, giving you extra time to surface. Like other helmets, it can be enchanted and is also used to brew the Potion of the Turtle Master."
    }
};
