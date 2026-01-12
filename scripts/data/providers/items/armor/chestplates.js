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
    "minecraft:diamond_chestplate": {
        id: "minecraft:diamond_chestplate",
        name: "Diamond Chestplate",
        maxStack: 1,
        durability: 528,
        enchantable: true,
        usage: {
            primaryUse: "High-tier torso protection and defense",
            secondaryUse: "Base for upgrading to Netherite Chestplate"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond x8"]
        },
        specialNotes: [
            "Provides 8 armor points and 2 armor toughness",
            "Second-highest protection for body armor (after netherite)",
            "Has 528 durability in Bedrock Edition",
            "Can be repaired with diamonds on an anvil",
            "Enchantable with Protection, Thorns, Unbreaking, and Mending",
            "Upgradeable to Netherite Chestplate using a Smithing Table",
            "Found rarely in End City chests and Bastion Remnant treasure chests"
        ],
        description: "The Diamond Chestplate is a high-tier armor piece crafted from eight diamonds, offering exceptional torso protection with 8 armor points and 2 armor toughness. With 528 durability, it provides long-lasting defense against hostile mobs and environmental hazards. This chestplate is essential for late-game survival, especially when facing tough enemies like the Ender Dragon or Wither. It can be enchanted with powerful enchantments and serves as the base piece for upgrading to the ultimate Netherite Chestplate, making it a crucial milestone in any player's armor progression."
    }
};
