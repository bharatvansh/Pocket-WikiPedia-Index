// Pocket Wikipedia Foundation - Spawn Eggs Data
// ============================================
// This file contains: All spawn eggs (one for each mob type)
// Approximately 80+ spawn eggs total
// ============================================

/**
 * Spawn egg items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const spawnEggs = {
    "minecraft:sniffer_egg": {
        id: "minecraft:sniffer_egg",
        name: "Sniffer Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Spawns a Sniffer mob",
            secondaryUse: "Breeding and decorative storage"
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Drops from Sniffers or obtained by breeding"]
        },
        specialNotes: [
            "Spawns a Sniffer when placed on the ground",
            "Sniffers are passive mobs that can dig up Torchflower Seeds",
            "Hatches in 6,720-13,440 ticks (5.6-11.2 minutes)",
            "Can be bred using Torchflower Seeds",
            "Sniffers explore the ground in search of seeds",
            "Part of the Trails & Tales update (1.20)"
        ],
        description: "The Sniffer Egg is used to spawn a Sniffer, a large passive mob introduced in the Trails & Tales update. Sniffers are ancient mobs that explore the ground, digging up Torchflower Seeds with their snouts. The egg must be placed on the ground and will hatch after 5.6-11.2 minutes, spawning a baby Sniffer. Sniffers can be bred using Torchflower Seeds, and they serve as living archaeological specimens, representing the Ancient Builders civilization."
    }
};
