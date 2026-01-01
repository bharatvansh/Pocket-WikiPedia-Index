// Pocket Wikipedia Foundation - Crafting Materials Data
// ============================================
// This file contains: Stick, bowl, paper, book, glass bottle,
// brick, nether brick, clay ball, honeycomb, wheat, sugar,
// cocoa beans, charcoal, coal, flint, glowstone dust, redstone dust,
// blaze powder, nether wart, fermented spider eye, glistering melon slice,
// golden carrot (crafting), rabbit foot, dragon breath,
// flow pottery sherd, guster pottery sherd
// ============================================

/**
 * Crafting material items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const craftingMaterials = {
    "minecraft:flow_pottery_sherd": {
        id: "minecraft:flow_pottery_sherd",
        name: "Flow Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Flow motif",
            secondaryUse: "Collecting and mixing pottery designs for custom archaeological-style builds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots that generate in Trial Chambers"]
        },
        specialNotes: [
            "Breaking a Decorated Pot drops the exact bricks and pottery sherds used to craft it",
            "Used as one of the four side ingredients when crafting a Decorated Pot; the chosen sherd determines the pattern on that side",
            "Decorated Pots featuring the Flow design naturally generate in Trial Chambers",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "The Flow Pottery Sherd is an archaeology-themed crafting item that can be used to decorate a Decorated Pot with a swirling loop design reminiscent of a wind charge. In Minecraft Bedrock Edition, it is found in Trial Chambers by breaking naturally generated Decorated Pots that use the Flow sherd in their recipe. When placed into the Decorated Pot crafting recipe, it determines the pattern displayed on one side of the finished pot, letting builders create customized pottery by mixing different sherd designs."
    },
    "minecraft:guster_pottery_sherd": {
        id: "minecraft:guster_pottery_sherd",
        name: "Guster Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Guster motif",
            secondaryUse: "Collecting Trial Chamber-themed pottery designs featuring the Breeze"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by breaking Decorated Pots that generate in Trial Chambers"]
        },
        specialNotes: [
            "Breaking a Decorated Pot drops the exact bricks and pottery sherds used to craft it",
            "Used as one of the four side ingredients when crafting a Decorated Pot; the chosen sherd determines the pattern on that side",
            "Decorated Pots featuring the Guster design naturally generate in Trial Chambers",
            "Stacks up to 64 in Bedrock Edition",
            "Introduced in Minecraft 1.21 (Tricky Trials)"
        ],
        description: "The Guster Pottery Sherd is a pottery decoration ingredient that depicts a Breeze and can be incorporated into a Decorated Pot to apply its pattern to one side. In Minecraft Bedrock Edition, players can obtain it in Trial Chambers by breaking naturally generated Decorated Pots that were crafted with the Guster sherd. By combining it with bricks or other pottery sherds in the Decorated Pot recipe, builders can create unique, story-like pottery designs that match the wind-themed Trial Chamber aesthetic."
    }
};
