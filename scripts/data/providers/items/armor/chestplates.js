// Pocket Wikipedia Foundation - Chestplates Data
// ============================================
// This file contains: Leather tunic, chainmail chestplate,
// iron chestplate, golden chestplate, diamond chestplate,
// netherite chestplate, elytra
// ============================================

/**
 * Chestplate items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const chestplates = {
    "minecraft:netherite_chestplate": {
        id: "minecraft:netherite_chestplate",
        name: "Netherite Chestplate",
        maxStack: 1,
        durability: 592,
        enchantable: true,
        usage: {
            primaryUse: "Maximum torso protection and defense",
            secondaryUse: "Granting knockback resistance and fire immunity"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Chestplate", "Netherite Ingot"]
        },
        specialNotes: [
            "Provides 8 armor points and 3 armor toughness",
            "Highest protection value for a single armor piece",
            "Increases knockback resistance by 10% (1 point)",
            "Fire-resistant and floats on lava; immune to fire damage",
            "Upgraded from Diamond Chestplate at a Smithing Table"
        ],
        description: "The Netherite Chestplate is the strongest body armor available in Minecraft Bedrock Edition. It provides a massive 8 armor points and 3 toughness points, making the wearer extremely resilient to physical damage. Like other netherite-tier items, it is completely immune to fire and lava, floating on top of lava pools if dropped. Obtaining it requires upgrading a Diamond Chestplate with a Netherite Ingot and a Smithing Template, making it a true late-game achievement for any survivor."
    },
    "minecraft:chainmail_chestplate": {
        id: "minecraft:chainmail_chestplate",
        name: "Chainmail Chestplate",
        maxStack: 1,
        durability: 241,
        enchantable: true,
        usage: {
            primaryUse: "Mid-tier torso protection obtained mostly via trading, mob drops, or loot",
            secondaryUse: "Can be enchanted and trimmed using smithing templates"
        },
        specialNotes: [
            "Provides 5 armor points and 0 armor toughness",
            "Durability: 241 in Bedrock Edition",
            "Cannot be crafted in survival; usually obtained from trades, mob drops, or generated loot",
            "Can be smelted into an Iron Nugget in a furnace",
            "Non-stackable; repairable with iron ingots or by combining two damaged chestplates"
        ],
        description: "The Chainmail Chestplate is an uncommon mid-tier body armor in Minecraft Bedrock Edition. It grants 5 armor points with moderate durability (241 BE) and cannot be crafted in survival; players obtain it through trades, hostile mob drops, and generated loot. It can be enchanted and repaired like other chestplates."
    }
};
