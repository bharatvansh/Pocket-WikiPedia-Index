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
    "minecraft:diamond_chestplate": {
        id: "minecraft:diamond_chestplate",
        name: "Diamond Chestplate",
        maxStack: 1,
        durability: 528,
        enchantable: true,
        usage: {
            primaryUse: "Heavy torso protection",
            secondaryUse: "Base for Netherite Chestplate upgrade"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x8"]
        },
        specialNotes: [
            "Provides 8 armor points (4 hearts)",
            "Has 528 durability points in Bedrock Edition",
            "Can be enchanted with Protection, Thorns, and Mending",
            "Requires 8 diamonds to craft in a standard chestplate pattern",
            "Required base item for crafting a Netherite Chestplate"
        ],
        description: "The Diamond Chestplate is the most powerful piece of armor in Minecraft before reaching Netherite. It provides 8 full armor points, significantly reducing incoming damage from mobs and environmental hazards. Crafted from 8 diamonds, it is a significant investment that provides unparalleled survivability. Like all diamond armor, it can be enchanted to near-invincibility and is the essential foundation for creating a soul-infused Netherite Chestplate."
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
