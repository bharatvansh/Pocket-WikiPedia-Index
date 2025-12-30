// Pocket Wikipedia Foundation - Vegetation Blocks Data
// ============================================
// This file contains: Flowers (all types), tall flowers, grass,
// tall grass, ferns, large ferns, dead bush, saplings (all types),
// mushrooms, mushroom blocks, azalea, flowering azalea,
// moss block, moss carpet, hanging roots, spore blossom,
// glow lichen, vines, cave vines, weeping vines, twisting vines,
// lily pad, dripleaf (small and big), sugar cane, bamboo,
// cactus, kelp, seagrass, sea pickle, crops (wheat, carrots,
// potatoes, beetroot, melon, pumpkin, cocoa, sweet berries,
// glow berries, torchflower, pitcher plant)
// ============================================

/**
 * Vegetation blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const vegetationBlocks = {
    "minecraft:pale_hanging_moss": {
        id: "minecraft:pale_hanging_moss",
        name: "Pale Hanging Moss",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Shears",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Hanging Moss"],
        generation: {
            dimension: "Overworld",
            yRange: "Pale Garden biome"
        },
        description: "Pale Hanging Moss is a distinctive gray vegetation block that naturally grows underneath Pale Oak Leaves in the Pale Garden biome, introduced in Minecraft Bedrock Edition 1.21.50. This atmospheric moss creates curtains of gray tendrils that hang from the pale oak trees, contributing to the eerie ambiance of the biome. The moss emits unique ambient sounds and can be collected using shears. Like other moss variants, it adds visual depth to the mysterious Pale Garden, which is home to the elusive Creaking mob. Pale Hanging Moss cannot be crafted and must be obtained directly from Pale Garden biomes."
    }
};
