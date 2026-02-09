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
    },
    "minecraft:bubble_coral": {
        id: "minecraft:bubble_coral",
        name: "Bubble Coral",
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
        drops: ["Bubble Coral (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (on top of coral blocks)"
        },
        description: "Bubble Coral is a magenta-colored, non-solid aquatic plant found naturally in warm ocean reefs. It grows on the upper surfaces of coral blocks and adds a vibrant splash of purple-pink to the underwater environment. This delicate organism can be broken instantly by hand but only yields an item if mined with a Silk Touch tool. Like all living corals, it must remain submerged in water to retain its color and life; exposure to air causes it to die and turn gray. It is highly valued by builders for its unique color and shape."
    },
    "minecraft:fire_coral": {
        id: "minecraft:fire_coral",
        name: "Fire Coral",
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
        drops: ["Fire Coral (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (on top of coral blocks)"
        },
        description: "Fire Coral is a striking red, non-solid coral variant that grows in the warm oceans of Minecraft. It is found attached to the tops of coral blocks within reef structures. While it is easily broken, harvesting it requires the Silk Touch enchantment to obtain it as an item. Fire Coral must be kept in water to survive; if placed on land, it will quickly die and lose its vibrant red color, becoming dead coral. Its intense red hue makes it an excellent choice for adding detail and contrast to underwater landscapes and aquariums."
    },
    "minecraft:tube_coral_fan": {
        id: "minecraft:tube_coral_fan",
        name: "Tube Coral Fan",
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
        drops: ["Tube Coral Fan (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (sides of coral blocks)"
        },
        description: "Tube Coral Fan is a vibrant blue, fan-like aquatic structure that grows on the sides of coral blocks in warm ocean biomes. Unlike the standard coral plants, fans are specifically found attached to the vertical faces of blocks, adding depth to reef formations. They are extremely fragile and will only drop as an item if harvested with a Silk Touch tool. Submergence in water is essential for their survival; without it, they wither and become Dead Tube Coral Fans. Their delicate, flat shape is perfect for detailed underwater decorating."
    },
    "minecraft:brain_coral_fan": {
        id: "minecraft:brain_coral_fan",
        name: "Brain Coral Fan",
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
        drops: ["Brain Coral Fan (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (sides of coral blocks)"
        },
        description: "Brain Coral Fan is a pink, decorative aquatic plant that attaches to the vertical surfaces of coral blocks in warm oceans. It features the same intricate, folded patterns as Brain Coral but in a flat, fan-like configuration. This non-solid block is instantly broken by hand and requires Silk Touch to be collected as an item. It must remain in water to stay alive and colorful. Builders often use Brain Coral Fans to create more realistic and complex coral reef designs, utilizing its ability to be placed on the sides of blocks for extra detail."
    },
    "minecraft:bubble_coral_fan": {
        id: "minecraft:bubble_coral_fan",
        name: "Bubble Coral Fan",
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
        drops: ["Bubble Coral Fan (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (sides of coral blocks)"
        },
        description: "Bubble Coral Fan is a magenta-colored fan variant that grows naturally on the sides of coral blocks within warm ocean reefs. It provides a unique vertical decoration with its vibrant purple-pink hue and flat, fan-like shape. Like other coral fans, it is delicate and requires a Silk Touch enchanted tool for successful harvesting. It depends on water to maintain its life and color; it will turn into a dead variant if removed from the ocean or placed on land. It is an essential component for creating diverse and visually interesting coral reef ecosystems."
    },
    "minecraft:fire_coral_fan": {
        id: "minecraft:fire_coral_fan",
        name: "Fire Coral Fan",
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
        drops: ["Fire Coral Fan (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (sides of coral blocks)"
        },
        description: "Fire Coral Fan is a striking red, fan-shaped marine structure that populates the warm ocean floors and reefs. Known for its vibrant crimson hue, it typically grows on the sides of coral blocks, contributing to the complex architecture of undersea life. In Bedrock Edition, these fans are delicate and require water to maintain their color; if removed from water, they quickly dehydrate into their dead variants. They are best harvested with Silk Touch to keep their vivid appearance, making them a favorite for players looking to create lush, red-tinted aquatic displays."
    },
    "minecraft:horn_coral_fan": {
        id: "minecraft:horn_coral_fan",
        name: "Horn Coral Fan",
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
        drops: ["Horn Coral Fan (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (sides of coral blocks)"
        },
        description: "Horn Coral Fan is a distinctive yellow, fan-like growth found within warm ocean biomes. Its bright yellow color and branching, fan shape make it stand out amidst the blues and purples of a coral reef. Like other coral fans, it often attaches to the sides of solid coral blocks and provides essential detail to the underwater environment. To collect one without it breaking, a tool with the Silk Touch enchantment must be used. It belongs to the horn coral family and will turn gray and lifeless if left out of water for too long, losing its characteristic sunny glow."
    },
    "minecraft:dead_brain_coral_fan": {
        id: "minecraft:dead_brain_coral_fan",
        name: "Dead Brain Coral Fan",
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
        drops: ["Dead Brain Coral Fan (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (results from living coral fans dying)"
        },
        description: "Dead Brain Coral Fan is the bleached, gray remains of a once-vibrant Brain Coral Fan. This state occurs when the living coral is removed from its aquatic habitat or when the water source is destroyed. While it lacks the pinkish color of its living counterpart, it remains a useful decorative block for builders aiming for a more muted or weathered underwater aesthetic. It features the same intricate, maze-like patterns characteristic of the brain coral family. It can be found naturally in biomes where reefs have died or created by placing living coral fans on land."
    },
    "minecraft:dead_tube_coral": {
        id: "minecraft:dead_tube_coral",
        name: "Dead Tube Coral",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dead Tube Coral"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (results from living coral dying)"
        },
        description: "Dead Tube Coral is the bleached, gray remains of a living tube coral plant. In Minecraft Bedrock Edition, these structures can be harvested by hand or with any tool even without the Silk Touch enchantment, unlike their living counterparts. This makes them easily obtainable for decorative purposes. They must be placed underwater to retain their form in some versions, though as dead coral, they are primarily used to add a weathered or ancient aesthetic to sea floors and aquariums. They feature a unique tubular shape that adds organic variety to rocky underwater landscapes."
    },
    "minecraft:dead_brain_coral_block": {
        id: "minecraft:dead_brain_coral_block",
        name: "Dead Brain Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dead Brain Coral Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (Result of living coral dying)"
        },
        description: "A Dead Brain Coral Block is the desaturated, gray remains of a living brain coral block. This state occurs when a living coral block is placed out of water or when its water source is removed. While it loses its vibrant pink color, it retains its intricate, maze-like texture and structural properties. It can be mined with any pickaxe and does not require Silk Touch to be harvested once dead. Builders often use these blocks for weathered underwater structures, rocky sea floors, or as a muted alternative to stone in various architectural designs."
    },
    "minecraft:dead_bubble_coral_block": {
        id: "minecraft:dead_bubble_coral_block",
        name: "Dead Bubble Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dead Bubble Coral Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (Result of living coral dying)"
        },
        description: "A Dead Bubble Coral Block is the gray, lifeless form of a bubble coral block that has been removed from water or has seen its water source vanish. Although it loses its vibrant magenta or purple color, it maintains its unique bubble-like surface texture and solid structure. In Bedrock Edition, it can be harvested with any pickaxe without needing the Silk Touch enchantment. It is frequently utilized by players to build realistic, desaturated reef environments or as a textured gray building material for rugged underwater landscapes."
    },
    "minecraft:dead_fire_coral_block": {
        id: "minecraft:dead_fire_coral_block",
        name: "Dead Fire Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dead Fire Coral Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (Result of living coral dying)"
        },
        description: "A Dead Fire Coral Block represents the bleached remains of a living fire coral block. This transformation occurs when the block is exposed to air for too long. While the striking red hue is gone, the block remains a sturdy decorative element with a distinct, branching texture. It is a solid block that requires a pickaxe to mine efficiently in Bedrock Edition, and once dead, it will drop itself even without Silk Touch. It is ideal for creating the look of ancient or dying reefs and adding organic variety to stone-based builds."
    },
    "minecraft:dead_horn_coral_block": {
        id: "minecraft:dead_horn_coral_block",
        name: "Dead Horn Coral Block",
        hardness: 1.5,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Dead Horn Coral Block"],
        generation: {
            dimension: "Overworld",
            yRange: "Warm Ocean biomes (Result of living coral dying)"
        },
        description: "Dead Horn Coral Blocks are the desaturated, gray versions of the vibrant yellow horn coral blocks. They are created when a living horn coral block is left out of water, causing it to die and lose its color. Despite its lifeless appearance, it retains its interesting structural patterns. In Minecraft Bedrock, these blocks can be mined with any pickaxe and do not require Silk Touch to be collected. They are excellent for adding textural detail to underwater caves, rocky shorelines, or any build where a weathered, organic stone look is desired."
    }
};
