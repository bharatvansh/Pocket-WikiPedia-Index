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
            primaryUse: "Moderate torso protection",
            secondaryUse: "Mid-game survival armor"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x8"]
        },
        specialNotes: [
            "Provides 6 armor points (3 full armor icons)",
            "Standard durability of 240 points",
            "Reliable mid-tier armor for early to mid-game exploration",
            "Can be repaired at an anvil using Iron Ingots",
            "Meltable into an Iron Nugget in a furnace"
        ],
        description: "The Iron Chestplate is a fundamental piece of armor that provides significant protection. Crafted from eight iron ingots, it is the most common armor choice for players entering the mid-game. With 6 armor points, it offers a solid defense against most common threats like zombies and skeletons. Its durability and ease of repair make it a practical choice for long mining expeditions or surface exploration."
    },
    "minecraft:diamond_chestplate": {
        id: "minecraft:diamond_chestplate",
        name: "Diamond Chestplate",
        maxStack: 1,
        durability: 528,
        enchantable: true,
        usage: {
            primaryUse: "Excellent torso protection",
            secondaryUse: "Base for Netherite upgrade"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x8"]
        },
        specialNotes: [
            "Provides 8 armor points (4 full armor icons)",
            "High durability of 528 points",
            "Highest protection of non-netherite armor",
            "Required to craft the Netherite Chestplate",
            "Best choice for high-tier enchantments like Protection IV"
        ],
        description: "The Diamond Chestplate is a high-tier protective gear piece, offering the best defense available from craftable overworld materials. It provides a substantial 8 armor points, greatly reducing damage from enemy attacks. Its high durability ensures long-lasting protection during intense combat situations. Beyond its raw stats, it serves as the essential base for creating netherite armor, representing a major milestone in a player's progression."
    },
    "minecraft:golden_chestplate": {
        id: "minecraft:golden_chestplate",
        name: "Golden Chestplate",
        maxStack: 1,
        durability: 112,
        enchantable: true,
        usage: {
            primaryUse: "Torso protection and Piglin neutrality",
            secondaryUse: "High-level enchantment base"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x8"]
        },
        specialNotes: [
            "Provides 5 armor points (same as Chainmail)",
            "Low durability (112 uses)",
            "Prevents Piglins from attacking the player in the Nether",
            "Highest enchantability of all chestplates",
            "Commonly gold-farmed or found in bastion loot"
        ],
        description: "The Golden Chestplate is a specialized armor piece primarily valued for its properties in the Nether. While it only provides 5 armor points and has relatively low durability, wearing it prevents Piglins from becoming aggressive toward the player. It also possesses the highest enchantability of any armor material, making it easier to obtain powerful modifiers. It is often found in Bastion Remnants or crafted using eight Gold Ingots."
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
