// Pocket Wikipedia Foundation - Shovels Data
// ============================================
// This file contains: Wooden shovel, stone shovel, iron shovel,
// golden shovel, diamond shovel, netherite shovel
// ============================================

/**
 * Shovel items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const shovels = {
    "minecraft:netherite_shovel": {
        id: "minecraft:netherite_shovel",
        name: "Netherite Shovel",
        maxStack: 1,
        durability: 2032,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, gravel, and snow efficiently",
            secondaryUse: "Creating grass paths and extinguishing campfires"
        },
        combat: {
            attackDamage: 6,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Diamond Shovel", "Netherite Ingot", "Netherite Upgrade Smithing Template"]
        },
        specialNotes: [
            "Most durable shovel with 2032 durability in Bedrock Edition",
            "Immune to fire and lava - will not burn if dropped in lava",
            "Can create grass paths by right-clicking grass blocks",
            "Able to extinguish campfires without taking damage",
            "Upgraded from Diamond Shovel using a Smithing Template",
            "Enchanted with Efficiency for near-instant block mining"
        ],
        description: "The Netherite Shovel is the most powerful and durable digging tool available in Minecraft Bedrock Edition. It can clear through large amounts of soft materials like dirt, sand, and gravel with incredible speed, especially when enchanted with Efficiency. Its fire resistance allows it to survive in lava, a trait shared by all netherite-tier items. Additionally, it can be used to create decorative paths on grass blocks or to safely extinguish campfires."
    }
};
