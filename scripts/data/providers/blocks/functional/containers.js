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
        description: "The Decorated Pot is a storage block crafted from four Pottery Sherds or Bricks. Its patterns depend on the sherds used, reflecting ancient lore. It can hold a single stack of items, which can be inserted by players or hoppers. Breaking it with a sword shatters it into its original components, while using any other tool, hand, or projectile drops the pot as a whole block. This allows for unique interactions in builds and adventure maps, serving as both a decorative piece and a functional container."
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
        description: "The Chiseled Bookshelf is a functional block used to store and display up to six books, including regular, Written, and Enchanted Books. Players can manually place or remove items from specific slots. When paired with a Redstone Comparator, it outputs a signal based on the last slot interacted with, enabling secret doors and complex contraptions. It is crafted from six wooden slabs and three wooden planks. This block adds dynamic utility to libraries, serving as both a storage solution and a redstone trigger."
    }
};
