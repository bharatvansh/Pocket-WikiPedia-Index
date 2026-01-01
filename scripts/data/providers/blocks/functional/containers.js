// Pocket Wikipedia Foundation - Container Blocks Data
// ============================================
// This file contains: Chest, trapped chest, ender chest, barrel,
// shulker box (all 17 colors including undyed), decorated pot,
// chiseled bookshelf, jukebox, composter, beehive, bee nest
// ============================================

/**
 * Container blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const containerBlocks = {
    "minecraft:decorated_pot": {
        id: "minecraft:decorated_pot",
        name: "Decorated Pot",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Decorated Pot (when broken by hand)", "Pottery Sherds (when broken by tool)"],
        generation: {
            dimension: "Overworld",
            yRange: "Found in archaeological sites"
        },
        description: "The Decorated Pot is a versatile decorative and storage block crafted using four Pottery Sherds or Bricks. Introduced in the Trails & Tales update, these pots can be customized with various patterns depending on the sherds used in their creation, reflecting ancient Minecraft lore. Beyond their aesthetic appeal, Decorated Pots can store a single stack of items, which can be inserted by players or even through hoppers. In Bedrock Edition, they have unique breaking mechanics: breaking a pot with a sword will shatter it into its original components, while breaking it with any other tool, by hand, or with a projectile will cause it to drop as a whole block. This allows for interesting interactions in adventure maps and base designs."
    },
    "minecraft:chiseled_bookshelf": {
        id: "minecraft:chiseled_bookshelf",
        name: "Chiseled Bookshelf",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Chiseled Bookshelf"],
        generation: {
            dimension: "Overworld",
            yRange: "Craftable"
        },
        description: "The Chiseled Bookshelf is a functional storage block that allows players to store and display up to six books, including regular Books, Book and Quills, Written Books, and Enchanted Books. Unlike regular bookshelves, players can manually place and remove books from specific slots, making it a dynamic part of library builds. The block also has redstone integration, where a Redstone Comparator can detect the last slot interacted with and output a corresponding signal strength. This allows for the creation of secret doors and hidden mechanisms triggered by simply pulling a book from a shelf. It is crafted using six wooden slabs and three wooden planks, making it an accessible and highly useful addition to any player's base."
    }
};
