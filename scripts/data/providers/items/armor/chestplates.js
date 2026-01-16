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
    "minecraft:leather_chestplate": {
        id: "minecraft:leather_chestplate",
        name: "Leather Tunic",
        maxStack: 1,
        durability: 80,
        enchantable: true,
        usage: {
            primaryUse: "Basic torso protection",
            secondaryUse: "Freezing protection and decoration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather x8"]
        },
        specialNotes: [
            "Provides 3 armor points (1.5 shield icons)",
            "Protects the wearer from freezing damage in Powder Snow",
            "Can be dyed millions of colors using a Cauldron in Bedrock Edition",
            "Durability: 80",
            "Repairable with Leather in an Anvil",
            "Crafted using 8 pieces of Leather in a shaped pattern"
        ],
        description: "The Leather Tunic is a torso protection piece that provides 3 armor points. Beyond its survival utility, it is the only armor piece in Minecraft Bedrock Edition that protects the player from the freezing effect caused by Powder Snow. Like other leather armor, it can be dyed in a cauldron to create millions of unique colors, making it essential for both cold-weather exploration and decorative outfit design."
    },
    "minecraft:chainmail_chestplate": {
        id: "minecraft:chainmail_chestplate",
        name: "Chainmail Chestplate",
        maxStack: 1,
        durability: 240,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection",
            secondaryUse: "Decoration or trophy armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests", "Trading with Armorer villagers", "Dropped by mobs"]
        },
        specialNotes: [
            "Provides 5 armor points (Iron provides 6)",
            "Durability: 240 (same as Iron Chestplate)",
            "Enchantability: 12 (Higher than Iron's 9)",
            "Can be repaired with Iron Ingots in an Anvil",
            "Obtainable via Armorer villager trades or Buried Treasure",
            "Semi-transparent texture allows skin visibility"
        ],
        description: "The Chainmail Chestplate is a body armor piece that provides 5 defense points, slightly less than the Iron Chestplate's 6, but shares the same durability of 240. It features a higher enchantability value of 12, making it easier to obtain better enchantments. Since it cannot be crafted, players must seek it out by trading with Armorer villagers or exploring structures like Buried Treasure and Woodland Mansions. It can be repaired in an anvil using Iron Ingots."
    },
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
    }
};
