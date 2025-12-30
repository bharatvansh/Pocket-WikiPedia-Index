// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// wolf armor, lead, trial key, ominous trial key, written book,
// book and quill, enchanted book, knowledge book, bundle,
// goat horn (all variants), painting, item frame, glow item frame,
// armor stand, end crystal, experience bottle, firework star
// ============================================

/**
 * Other miscellaneous items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const miscItems = {
    "minecraft:shield": {
        id: "minecraft:shield",
        name: "Shield",
        maxStack: 1,
        durability: 336,
        enchantable: true,
        usage: {
            primaryUse: "Blocking attacks",
            secondaryUse: "Deflecting projectiles"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wood Planks x6", "Iron Ingot"]
        },
        specialNotes: [
            "Blocks 100% of attack damage when raised",
            "Can block arrows, tridents, and other projectiles",
            "Creeper explosions and axes can disable shields temporarily",
            "Can be decorated with banner patterns",
            "Enchantable with Unbreaking and Mending"
        ],
        description: "The Shield is a defensive tool that can block incoming melee attacks and projectiles. When raised by crouching or using the secondary action button, it reduces incoming damage to zero. Shields can be customized with banner patterns and enhanced with enchantments for increased durability."
    },
    "minecraft:elytra": {
        id: "minecraft:elytra",
        name: "Elytra",
        maxStack: 1,
        durability: 432,
        enchantable: true,
        usage: {
            primaryUse: "Gliding through the air",
            secondaryUse: "Fast travel with fireworks"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in End Ships"]
        },
        specialNotes: [
            "Equipped in the chestplate slot",
            "Allows gliding when jumping from heights",
            "Firework rockets can boost speed while gliding",
            "Loses durability over time while gliding (1 per second)",
            "Can only be found in End Ship item frames",
            "Repairable with Phantom Membranes or Mending enchantment"
        ],
        description: "Elytra are rare wings found exclusively in End Ships within End Cities. They allow the player to glide through the air and, when combined with firework rockets, enable powerful flight capabilities. Elytra are one of the most sought-after items in the game, providing unparalleled mobility for exploration and travel."
    }
};
