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
    },
    "minecraft:iron_chestplate": {
        id: "minecraft:iron_chestplate",
        name: "Iron Chestplate",
        maxStack: 1,
        durability: 240,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection",
            secondaryUse: "Decoration on armor stands"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x8"]
        },
        specialNotes: [
            "Provides 6 armor points (3 full armor icons)",
            "Durability: 240 (Bedrock Edition)",
            "Can be crafted using 8 Iron Ingots in a U-shape",
            "Often worn by Zombies and Skeletons",
            "Can be smelted into an Iron Nugget"
        ],
        description: "The Iron Chestplate is a standard mid-tier body armor piece in Minecraft Bedrock Edition. It provides 6 points of armor protection, offering a solid balance between cost and defense. With a durability of 240, it is much more resilient than leather or gold alternatives. It is a common choice for players transitioning into the mid-game and can be further enhanced with enchantments like Protection or Thorns."
    },
    "minecraft:golden_chestplate": {
        id: "minecraft:golden_chestplate",
        name: "Golden Chestplate",
        maxStack: 1,
        durability: 112,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection",
            secondaryUse: "Preventing Piglin hostility in the Nether"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x8"]
        },
        specialNotes: [
            "Provides 5 armor points (2.5 armor icons)",
            "Durability: 112 (Bedrock Edition)",
            "High enchantability, making it easier to get powerful enchantments",
            "Prevents Piglins from attacking the wearer",
            "Can be smelted into a Gold Nugget"
        ],
        description: "The Golden Chestplate is a specialized piece of armor primarily used for its unique interaction with Piglins. While it provides 5 points of protection, its low durability of 112 makes it less effective for prolonged combat than iron. However, its high enchantability allows players to easily obtain high-level enchantments. In the Nether, wearing at least one piece of gold armor, such as this chestplate, prevents Piglins from becoming hostile toward the player."
    },
    "minecraft:diamond_chestplate": {
        id: "minecraft:diamond_chestplate",
        name: "Diamond Chestplate",
        maxStack: 1,
        durability: 528,
        enchantable: true,
        usage: {
            primaryUse: "High-level torso protection",
            secondaryUse: "Base for Netherite Chestplate upgrade"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x8"]
        },
        specialNotes: [
            "Provides 8 armor points (4 full armor icons)",
            "Durability: 528 (Bedrock Edition)",
            "Second highest protection value for a single armor piece",
            "Required base item for crafting a Netherite Chestplate",
            "Often found in high-level loot chests like Bastion Remnants"
        ],
        description: "The Diamond Chestplate is an elite tier of body armor, offering 8 points of protection and exceptional durability of 528. Until the introduction of netherite, it was the strongest armor available. It remains a crucial item for late-game players, as it provides significant damage reduction and serves as the necessary base for upgrading to netherite. It is highly sought after and can be found in rare structures or traded from Master-level Armorer villagers."
    }
};
