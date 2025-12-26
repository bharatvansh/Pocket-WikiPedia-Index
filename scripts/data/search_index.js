// Pocket Wikipedia Foundation - Search Index
// Lightweight registry for search and listing functionality

/**
 * @typedef {Object} SearchEntry
 * @property {string} id - Namespace ID (e.g., "minecraft:creeper")
 * @property {string} name - Display Name
 * @property {"block"|"item"|"mob"} category - Entry category
 * @property {string} icon - Path to texture icon
 */

/**
 * Lightweight search index containing only essential metadata
 * @type {SearchEntry[]}
 */
export const searchIndex = [
    // Blocks
    {
        id: "minecraft:dirt",
        name: "Dirt",
        category: "block",
        icon: "textures/blocks/dirt"
    },
    {
        id: "minecraft:stone",
        name: "Stone",
        category: "block",
        icon: "textures/blocks/stone"
    },
    
    // Items
    {
        id: "minecraft:iron_sword",
        name: "Iron Sword",
        category: "item",
        icon: "textures/items/iron_sword"
    },
    {
        id: "minecraft:apple",
        name: "Apple",
        category: "item",
        icon: "textures/items/apple"
    },
    
    // Mobs
    {
        id: "minecraft:creeper",
        name: "Creeper",
        category: "mob",
        icon: "textures/entities/creeper"
    },
    {
        id: "minecraft:pig",
        name: "Pig",
        category: "mob",
        icon: "textures/entities/pig"
    }
];