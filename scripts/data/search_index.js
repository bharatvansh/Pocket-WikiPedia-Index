// Pocket Wikipedia Foundation - Search Index
// Lightweight registry for search and listing functionality

/**
 * @typedef {Object} SearchEntry
 * @property {string} id - Namespace ID (e.g., "minecraft:creeper")
 * @property {string} name - Display Name
 * @property {"block"|"item"|"mob"} category - Entry category
 * @property {string} icon - Path to texture icon
 * @property {string} themeColor - Minecraft color code for this entry (e.g., "§a" for green)
 *                                 NOTE: Never use black (§0) - use darkGray (§8) instead for dark colors
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
        icon: "textures/blocks/dirt",
        themeColor: "§6" // gold/brown
    },
    {
        id: "minecraft:stone",
        name: "Stone",
        category: "block",
        icon: "textures/blocks/stone",
        themeColor: "§7" // gray
    },
    {
        id: "minecraft:deepslate",
        name: "Deepslate",
        category: "block",
        icon: "textures/blocks/deepslate",
        themeColor: "§8" // dark gray
    },
    {
        id: "minecraft:copper_ore",
        name: "Copper Ore",
        category: "block",
        icon: "textures/blocks/copper_ore",
        themeColor: "§6" // orange/copper
    },
    {
        id: "minecraft:amethyst_block",
        name: "Amethyst Block",
        category: "block",
        icon: "textures/blocks/amethyst_block",
        themeColor: "§d" // light purple
    },
    {
        id: "minecraft:glowstone",
        name: "Glowstone",
        category: "block",
        icon: "textures/blocks/glowstone",
        themeColor: "§e" // yellow/gold
    },
    {
        id: "minecraft:obsidian",
        name: "Obsidian",
        category: "block",
        icon: "textures/blocks/obsidian",
        themeColor: "§5" // dark purple
    },
    {
        id: "minecraft:sand",
        name: "Sand",
        category: "block",
        icon: "textures/blocks/sand",
        themeColor: "§e" // yellow
    },
    
    // Items
    {
        id: "minecraft:iron_sword",
        name: "Iron Sword",
        category: "item",
        icon: "textures/items/iron_sword",
        themeColor: "§f" // white/silver
    },
    {
        id: "minecraft:apple",
        name: "Apple",
        category: "item",
        icon: "textures/items/apple",
        themeColor: "§c" // red
    },
    {
        id: "minecraft:diamond_pickaxe",
        name: "Diamond Pickaxe",
        category: "item",
        icon: "textures/items/diamond_pickaxe",
        themeColor: "§b" // aqua/diamond blue
    },
    {
        id: "minecraft:bow",
        name: "Bow",
        category: "item",
        icon: "textures/items/bow",
        themeColor: "§e" // yellow
    },
    {
        id: "minecraft:enchanted_golden_apple",
        name: "Enchanted Golden Apple",
        category: "item",
        icon: "textures/items/apple_golden",
        themeColor: "§5" // dark purple
    },
    {
        id: "minecraft:trident",
        name: "Trident",
        category: "item",
        icon: "textures/items/trident",
        themeColor: "§b" // aqua
    },
    {
        id: "minecraft:netherite_ingot",
        name: "Netherite Ingot",
        category: "item",
        icon: "textures/items/netherite_ingot",
        themeColor: "§4" // dark red
    },
    {
        id: "minecraft:crossbow",
        name: "Crossbow",
        category: "item",
        icon: "textures/items/crossbow",
        themeColor: "§8" // dark gray
    },
    
    // Mobs
    {
        id: "minecraft:creeper",
        name: "Creeper",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_creeper.png",
        themeColor: "§a" // green
    },
    {
        id: "minecraft:pig",
        name: "Pig",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_pig.png",
        themeColor: "§d" // pink
    },
    {
        id: "minecraft:zombie",
        name: "Zombie",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_zombie.png",
        themeColor: "§2" // dark green
    },
    {
        id: "minecraft:enderman",
        name: "Enderman",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_enderman.png",
        themeColor: "§5" // dark purple
    },
    {
        id: "minecraft:skeleton",
        name: "Skeleton",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_skeleton.png",
        themeColor: "§7" // gray
    },
    {
        id: "minecraft:warden",
        name: "Warden",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_warden.png",
        themeColor: "§8" // dark gray
    },
    {
        id: "minecraft:phantom",
        name: "Phantom",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_phantom.png",
        themeColor: "§5" // dark purple
    },
    {
        id: "minecraft:axolotl",
        name: "Axolotl",
        category: "mob",
        icon: "textures/items/spawn_eggs/spawn_egg_axolotl.png",
        themeColor: "§d" // pink/purple
    }
];