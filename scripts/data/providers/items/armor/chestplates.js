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
    "minecraft:iron_chestplate": {
        id: "minecraft:iron_chestplate",
        name: "Iron Chestplate",
        maxStack: 1,
        durability: 240,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection",
            secondaryUse: "Decoration for Armor Stands"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x8"]
        },
        specialNotes: [
            "Provides 6 armor points (3 bars).",
            "Reliable mid-tier protection for the torso.",
            "Can be repaired in an anvil with Iron Ingots.",
            "Can be found in village armorer chests.",
            "Essential for players transitioning to mid-game combat."
        ],
        description: "The Iron Chestplate is a fundamental piece of armor that provides 6 points of armor, making it significantly more protective than leather or chainmail. It is crafted with eight iron ingots and is a staple for most players due to iron's abundance. It offers a great balance between cost and protection, serving as the primary defense against common hostile mobs before the player acquires diamond equipment. Like all chestplates, it can be enchanted with various protection types."
    },
    "minecraft:golden_chestplate": {
        id: "minecraft:golden_chestplate",
        name: "Golden Chestplate",
        maxStack: 1,
        durability: 112,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection and Piglin pacification",
            secondaryUse: "Easier access to high-level enchantments"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x8"]
        },
        specialNotes: [
            "Provides 5 armor points (2.5 bars).",
            "Prevents Piglins from attacking the wearer in the Nether.",
            "Low durability (112) makes it less practical for prolonged combat.",
            "Requires 8 Gold Ingots to craft.",
            "Higher enchantability than iron, chainmail, and diamond."
        ],
        description: "The Golden Chestplate is a flashy yet fragile armor piece. While it offers 5 armor points—more than leather but less than iron—it wears down quickly under stress. Its primary advantages are its high enchantability and its utility in the Nether, where wearing any piece of gold armor prevents Piglins from becoming aggressive toward the player. It is commonly found in ruined portal chests or held by Piglins themselves. Most players use it specifically for Nether exploration rather than general defense."
    },
    "minecraft:diamond_chestplate": {
        id: "minecraft:diamond_chestplate",
        name: "Diamond Chestplate",
        maxStack: 1,
        durability: 528,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection",
            secondaryUse: "Base for crafting Netherite Chestplate"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x8"]
        },
        specialNotes: [
            "Provides 8 armor points and 2 armor toughness.",
            "The highest protection value for a single diamond armor piece.",
            "Essential for late-game combat and exploration.",
            "Base item for upgrading to a Netherite Chestplate.",
            "Can be enchanted with Protection, Thorns, or Unbreaking."
        ],
        description: "The Diamond Chestplate is the most protective single piece of armor in Minecraft Bedrock Edition, excluding Netherite. Offering a substantial 8 points of armor and 2 points of toughness, it drastically reduces damage taken from most sources. Crafted with eight diamonds, it is an essential piece for any player facing dangerous mobs or bosses. It also serves as the necessary base item to be upgraded into a Netherite Chestplate at a Smithing Table using a Smithing Template."
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
