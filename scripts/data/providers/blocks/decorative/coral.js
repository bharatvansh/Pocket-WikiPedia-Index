// Pocket Wikipedia Foundation - Coral Blocks Data
// ============================================
// This file contains: Coral blocks (all 5 colors), dead coral blocks,
// coral (all 5 types), dead coral, coral fans (all 5 types),
// dead coral fans
// ============================================

/**
 * Coral blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const coralBlocks = {
    "minecraft:brain_coral_block": {
        id: "minecraft:brain_coral_block",
        name: "Brain Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Dead Brain Coral Block", "Brain Coral Block (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes"
        },
        description: "The Brain Coral Block is a vibrant pink decorative block found in warm ocean biomes. It forms part of the colorful coral reefs that generate naturally underwater. To obtain the block in its living, colorful form, it must be mined with a tool enchanted with Silk Touch; otherwise, it turns into a gray Dead Brain Coral Block. It requires water to stay alive and will die if placed on land. It serves as a structural block for reefs and can be used for colorful underwater building."
    },
    "minecraft:bubble_coral_block": {
        id: "minecraft:bubble_coral_block",
        name: "Bubble Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Dead Bubble Coral Block", "Bubble Coral Block (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes"
        },
        description: "The Bubble Coral Block is a magenta-colored block found in coral reefs within warm oceans. Like other coral blocks, it requires water to maintain its vibrant color. Mining it without the Silk Touch enchantment yields a Dead Bubble Coral Block. It serves as a habitat for marine life and adds a splash of purple to underwater landscapes. It has a hardness of 1.5 and blast resistance of 6.0, making it relatively durable but fragile in terms of survival without water."
    },
    "minecraft:fire_coral_block": {
        id: "minecraft:fire_coral_block",
        name: "Fire Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Dead Fire Coral Block", "Fire Coral Block (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes"
        },
        description: "The Fire Coral Block is a striking red coral variant found in warm ocean reefs. It is one of the five types of coral blocks in Minecraft. To harvest it, players must use a pickaxe enchanted with Silk Touch to prevent it from turning into a Dead Fire Coral Block. It must remain in contact with water to survive; otherwise, it dries out and loses its color. Its bright red hue makes it an excellent choice for underwater decoration and reef construction."
    }
};
