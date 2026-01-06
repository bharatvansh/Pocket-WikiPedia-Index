// Pocket Wikipedia Foundation - Stone Blocks Data
// ============================================
// This file contains: Stone variants, deepslate variants, cobblestone,
// smooth stone, stone bricks, mossy variants, cracked variants,
// andesite, diorite, granite (and polished versions), tuff, calcite,
// dripstone, basalt, blackstone variants
// ============================================

/**
 * Stone-type blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const stoneBlocks = {
    "minecraft:stone": {
        id: "minecraft:stone",
        name: "Stone",
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
        drops: ["Cobblestone"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 320"
        },
        description: "Stone is a durable building material that requires a pickaxe to mine. It's commonly found underground and can be smelted from cobblestone. Stone is resistant to explosions and is often used for construction."
    },
    "minecraft:deepslate": {
        id: "minecraft:deepslate",
        name: "Deepslate",
        hardness: 3.0,
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
        drops: ["Cobbled Deepslate"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 8"
        },
        description: "Deepslate is a harder variant of stone found in the deepest layers of the Overworld. It generates below Y-level 0 and becomes more common below Y-level -8. Deepslate takes twice as long to mine as stone and has a distinctive dark gray appearance with subtle cracks."
    },
    "minecraft:chiseled_tuff": {
        id: "minecraft:chiseled_tuff",
        name: "Chiseled Tuff",
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
        drops: ["Chiseled Tuff"],
        generation: {
            dimension: "Overworld",
            yRange: "Trial Chambers"
        },
        description: "Chiseled Tuff is a decorative stone variant introduced in Minecraft 1.21, carved with intricate patterns resembling the trial chamber motifs. It can be crafted from two tuff slab blocks placed vertically in a crafting grid or created in a stonecutter from a single tuff block. Chiseled Tuff shares the same hardness and blast resistance as regular tuff while providing builders with a uniquely patterned block for detailed architectural work. It generates naturally as part of Trial Chamber structures and is part of the expanded tuff block family that includes stairs, slabs, walls, and bricks variants."
    },
    "minecraft:polished_deepslate": {
        id: "minecraft:polished_deepslate",
        name: "Polished Deepslate",
        hardness: 3.0,
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
        drops: ["Polished Deepslate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Deepslate"
        },
        description: "Polished Deepslate is a refined building material crafted by arranging four cobbled deepslate blocks in a 2x2 grid. It features a smooth, dark gray surface with subtle striations that catch light beautifully, making it an excellent choice for sophisticated architectural designs. As part of the deepslate family, polished deepslate is significantly harder than regular stone with the same blast resistance, making it ideal for both decorative and defensive building. It serves as a crafting ingredient for polished deepslate stairs, slabs, and walls."
    },
    "minecraft:cracked_stone_bricks": {
        id: "minecraft:cracked_stone_bricks",
        name: "Cracked Stone Bricks",
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
        drops: ["Cracked Stone Bricks"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Igloos, Villages"
        },
        description: "Cracked Stone Bricks are a weathered variant of stone bricks that feature visible cracks and a worn appearance, giving structures a sense of age and history. They generate naturally in strongholds, igloos, and jungle temples, as well as in some village buildings. Players can create cracked stone bricks by smelting stone bricks in a furnace, which simulates heating that causes brick patterns to crack. While they share the same hardness and blast resistance as regular stone bricks, their distinct visual texture makes them popular for creating ancient ruins and dungeon designs."
    }
};
