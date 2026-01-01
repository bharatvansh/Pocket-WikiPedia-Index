// Pocket Wikipedia Foundation - Crafting Materials Data
// ============================================
// This file contains: Stick, bowl, paper, book, glass bottle,
// brick, nether brick, clay ball, honeycomb, wheat, sugar,
// cocoa beans, charcoal, coal, flint, glowstone dust, redstone dust,
// blaze powder, nether wart, fermented spider eye, glistering melon slice,
// golden carrot (crafting), rabbit foot, dragon breath
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
            primaryUse: "Crafting decorated pots with the Flow pattern",
            secondaryUse: "Collecting and mixing patterns to customize the appearance of a decorated pot"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chambers by breaking naturally generated decorated pots (or by breaking any decorated pot crafted with this sherd)"]
        },
        specialNotes: [
            "A pottery sherd that depicts a curly loop shape (often compared to a wind charge)",
            "Decorated pots containing the Flow sherd can naturally generate in Trial Chambers",
            "When a decorated pot is broken, it drops the bricks and pottery sherds used to craft it",
            "Not renewable in normal survival gameplay"
        ],
        description: "The Flow Pottery Sherd is a decorative crafting material that can be used to apply the Flow motif to decorated pots. In Minecraft Bedrock Edition, it is primarily obtained from Trial Chambers, where decorated pots featuring this sherd can generate naturally; breaking those pots drops the sherd alongside any other bricks or sherds used in the pot's recipe. By combining pottery sherds and bricks in the crafting grid, players can create decorated pots with custom pattern mixes, making the Flow Sherd a collectible reward for builders and completionists alike."
    },
    "minecraft:guster_pottery_sherd": {
        id: "minecraft:guster_pottery_sherd",
        name: "Guster Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting decorated pots with the Guster pattern",
            secondaryUse: "Collecting and mixing patterns to customize the appearance of a decorated pot"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Trial Chambers by breaking naturally generated decorated pots (or by breaking any decorated pot crafted with this sherd)"]
        },
        specialNotes: [
            "A pottery sherd that depicts a Breeze",
            "Decorated pots containing the Guster sherd can naturally generate in Trial Chambers",
            "When a decorated pot is broken, it drops the bricks and pottery sherds used to craft it",
            "Not renewable in normal survival gameplay"
        ],
        description: "The Guster Pottery Sherd is a Trial Chambers-themed pottery sherd used to decorate crafted pots with an image inspired by the Breeze. In Bedrock Edition, the main way to obtain it is by exploring Trial Chambers and breaking decorated pots that naturally generate with the Guster pattern, which causes the pot to drop the exact bricks and sherds used to make it. Guster Sherds are used as ingredients when crafting decorated pots, letting players combine different sherds and bricks to design unique ceramic patterns for decoration and storytelling builds."
    }
};
