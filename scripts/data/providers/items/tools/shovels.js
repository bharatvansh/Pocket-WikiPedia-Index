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
    },
    "minecraft:iron_shovel": {
        id: "minecraft:iron_shovel",
        name: "Iron Shovel",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Digging dirt, sand, and gravel",
            secondaryUse: "Creating grass paths"
        },
        combat: {
            attackDamage: 4,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot", "Stick x2"]
        },
        specialNotes: [
            "Deals 4 attack damage (2 hearts) in Bedrock Edition",
            "Has 251 durability, making it durable for most tasks",
            "Can break dirt-based blocks much faster than hand or stone tools",
            "Crafted using 1 Iron Ingot and 2 Sticks",
            "Can extinguish campfires by right-clicking"
        ],
        description: "The Iron Shovel is a versatile digging tool used to harvest dirt, sand, gravel, and snow efficiently. Crafted from one iron ingot and two sticks, it has a durability of 251, making it a dependable mid-game tool. In Bedrock Edition, it deals 4 damage (2 hearts). It allows players to quickly clear land, collect resources like flint from gravel, and create grass paths by right-clicking on grass blocks."
    }
};
