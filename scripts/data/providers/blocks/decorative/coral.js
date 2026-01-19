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
    },
    "minecraft:tube_coral_block": {
        id: "minecraft:tube_coral_block",
        name: "Tube Coral Block",
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
        drops: ["Dead Tube Coral Block", "Tube Coral Block (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes"
        },
        description: "The Tube Coral Block is a vibrant blue solid block found within coral reefs in warm ocean biomes. It is one of the five living coral variants and requires being submerged in or adjacent to water to maintain its color; otherwise, it will transform into a gray Dead Tube Coral Block. Mining this block requires a pickaxe, and only a tool enchanted with Silk Touch can harvest the living version. These blocks are frequently used by builders to create colorful underwater landscapes and reef-themed structures."
    },
    "minecraft:horn_coral_block": {
        id: "minecraft:horn_coral_block",
        name: "Horn Coral Block",
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
        drops: ["Dead Horn Coral Block", "Horn Coral Block (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes"
        },
        description: "The Horn Coral Block is a bright yellow solid block that naturally generates in warm ocean coral reefs. As a living organism, it must remain in contact with water blocks or it will quickly die, turning into a desaturated Dead Horn Coral Block. To obtain the block in its vibrant yellow state, it must be mined using a pickaxe with the Silk Touch enchantment. It is prized for its intense color, which allows builders to add warm, sunny tones to underwater builds and complex marine environments."
    },
    "minecraft:tube_coral": {
        id: "minecraft:tube_coral",
        name: "Tube Coral",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Tube Coral (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (on top of coral blocks)"
        },
        description: "Tube Coral is a non-solid, vibrant blue aquatic plant found growing on the surfaces of coral blocks in warm oceans. Unlike the full block variant, this smaller coral structure is quite delicate and can be broken instantly by hand. However, it will only drop as an item if harvested with a Silk Touch enchantment; otherwise, it is simply destroyed. It must stay underwater to survive and will perish if removed from its aquatic environment. Its unique blue shape makes it a popular detail for decorating aquariums."
    },
    "minecraft:horn_coral": {
        id: "minecraft:horn_coral",
        name: "Horn Coral",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Horn Coral (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (on top of coral blocks)"
        },
        description: "Horn Coral is a decorative, yellow non-solid block that grows naturally in warm ocean reefs, typically found atop coral blocks. This small plant-like structure adds intricate detail and a splash of bright yellow to the ocean floor. It is very fragile and is destroyed immediately if broken without a Silk Touch tool. Like all coral, it requires water to live and will die if exposed to air. Its branch-like appearance is reminiscent of marine horns or antlers, making it a beautiful addition to any player-made reef."
    },
    "minecraft:brain_coral": {
        id: "minecraft:brain_coral",
        name: "Brain Coral",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Brain Coral (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (on top of coral blocks)"
        },
        description: "Brain Coral is a non-solid, pink-colored aquatic plant that grows in clusters within warm ocean biomes. It is named for its intricate, folded texture that resembles a brain. This small decorative block can be found attached to the tops of solid blocks underwater, primarily on coral reefs. While it can be broken easily, it requires Silk Touch to be collected; otherwise, it yields nothing. If placed outside of water, it will soon die and lose its vibrant pink color. It is a fantastic choice for organic detail."
    }
};
