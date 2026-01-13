// Pocket Wikipedia Foundation - Dyes Data
// ============================================
// This file contains: All 16 dye colors (white, orange, magenta,
// light blue, yellow, lime, pink, gray, light gray, cyan, purple,
// blue, brown, green, red, black), glow ink sac, ink sac
// ============================================

/**
 * Dye items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const dyes = {
    "minecraft:glow_ink_sac": {
        id: "minecraft:glow_ink_sac",
        name: "Glow Ink Sac",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Making signs and item frames glow",
            secondaryUse: "Creating glowing decorative displays and text"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Glowing Squids"]
        },
        specialNotes: [
            "Dropped by Glowing Squids (1-3 per kill; increased by Looting)",
            "Applied to signs to make text glow and be readable in darkness",
            "Applied to item frames to make them emit light level 7",
            "Glowing text appears brighter and can be read from further distances",
            "Can be removed from signs using a regular Ink Sac",
            "Glowing Item Frames provide both light and item display",
            "Does not dye sheep or wool (unlike regular Ink Sac)"
        ],
        description: "A Glow Ink Sac is a luminescent dye item dropped exclusively by Glowing Squids, the aquatic variant of squids that spawn in dark underwater environments. Its primary function is to make objects glow: applying it to signs causes the text to become luminescent and readable even in complete darkness, while using it on Item Frames makes them emit light level 7. This makes it invaluable for navigation, as glowing signs can mark paths and locations without requiring torches. The glowing effect can be removed from signs by using a regular Ink Sac, restoring normal text appearance."
    },
    "minecraft:white_dye": {
        id: "minecraft:white_dye",
        name: "White Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks white",
            secondaryUse: "Mixing with other dyes to create lighter shades"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bone Meal", "Lily of the Valley"]
        },
        specialNotes: [
            "Crafted from Bone Meal or Lily of the Valley",
            "Used to dye wool, terracotta, glass, concrete, and beds white",
            "Mixed with other dyes to create pink, light blue, lime, and gray dyes",
            "Unlike Bone Meal, it cannot be used as fertilizer",
            "Can be used to bleach colored banners",
            "Used to dye leather armor white"
        ],
        description: "White Dye is a primary coloring material produced by crafting Bone Meal or a Lily of the Valley. It serves as the standard agent for dyeing wool, sheep, terracotta, glass, and concrete white. In Bedrock Edition, it plays a crucial role in color mixing, allowing players to create pastel shades like pink, light blue, and lime by combining it with other dyes. While Bone Meal can also be used as a dye, White Dye is a distinct item that lacks the fertilizing properties of its predecessor, focusing solely on cosmetic applications."
    },
    "minecraft:red_dye": {
        id: "minecraft:red_dye",
        name: "Red Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks red",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Poppy", "Red Tulip", "Beetroot", "Rose Bush"]
        },
        specialNotes: [
            "Crafted from Poppy, Red Tulip, Beetroot, or Rose Bush",
            "Used to dye wool, terracotta, glass, concrete, and beds red",
            "Mixed with other dyes to create orange, pink, and purple dyes",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting red firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Red Dye is a primary color dye obtained from various flora including poppies, red tulips, beetroots, and rose bushes. It is fundamental for coloring building materials such as wool, terracotta, glass, and concrete a vibrant red. In Bedrock Edition, it is a key component for color mixing, necessary to produce secondary colors like orange, pink, and purple. Beyond construction, Red Dye is used to customize leather armor, dye shulker boxes, and create red firework stars for celebratory displays."
    },
    "minecraft:blue_dye": {
        id: "minecraft:blue_dye",
        name: "Blue Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks blue",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Lapis Lazuli", "Cornflower"]
        },
        specialNotes: [
            "Crafted from Lapis Lazuli or Cornflower",
            "Used to dye wool, terracotta, glass, concrete, and beds blue",
            "Mixed with other dyes to create purple, cyan, and light blue dyes",
            "Separates the coloring function from the enchanting utility of Lapis Lazuli",
            "Used to dye water in cauldrons (Bedrock Edition)",
            "Essential for crafting blue firework stars"
        ],
        description: "Blue Dye is a primary color dye crafted from Lapis Lazuli or Cornflowers. It allows players to color wool, sheep, terracotta, glass, and concrete a deep blue. In Bedrock Edition, it is essential for mixing secondary colors such as purple, cyan, and light blue. While Lapis Lazuli can be used directly as a dye, processing it into Blue Dye creates a dedicated cosmetic item, separating it from its use in enchanting. It is also used to dye water in cauldrons and create blue firework stars."
    },
    "minecraft:black_dye": {
        id: "minecraft:black_dye",
        name: "Black Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks black",
            secondaryUse: "Mixing with other dyes to create gray and light gray shades"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Ink Sac", "Wither Rose"]
        },
        specialNotes: [
            "Crafted from an Ink Sac or a Wither Rose",
            "Added in Bedrock Edition 1.8.0 to separate dye function from Ink Sacs",
            "Used to dye wool, terracotta, glass, concrete, and shulker boxes black",
            "Essential for creating black concrete, which is the darkest block in the game",
            "Can be used to dye cat and wolf collars",
            "Sold by Wandering Traders for 1 Emerald"
        ],
        description: "Black Dye is a primary colorant in Minecraft Bedrock Edition, primarily obtained from Ink Sacs or Wither Roses. It is essential for players seeking the darkest aesthetic, as it is used to create black concrete, which absorbs almost all light. Beyond construction, it can be applied to sheep, wool, leather armor, and collars. While Ink Sacs themselves functioned as dye in older versions, the introduction of Black Dye provided a dedicated item for cosmetic purposes, aligning with the game's expanded dyeing system."
    },
    "minecraft:green_dye": {
        id: "minecraft:green_dye",
        name: "Green Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks green",
            secondaryUse: "Mixing with Blue Dye to create Cyan Dye"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Cactus", "Fuel"]
        },
        specialNotes: [
            "Obtained by smelting Cactus in a furnace, smoker, or campfire",
            "One of the few dyes that requires smelting rather than simple crafting",
            "In Bedrock Edition, it can also be obtained by smelting Sea Pickles",
            "Used to dye wool, terracotta, glass, and concrete green",
            "Expert-level Shepherd villagers may buy 12 green dye for 1 emerald",
            "Essential for crafting lime dye when mixed with white dye"
        ],
        description: "Green Dye is a natural pigment in Minecraft, uniquely obtained by smelting Cactus in a furnace. This distinguishes it from most other dyes which are crafted directly from flowers. It provides a rich, forest-green color to building materials like wool, glass, and terracotta. In Bedrock Edition, players can also obtain it by smelting Sea Pickles. Green Dye is a vital component for secondary colors, notably being mixed with Blue Dye for Cyan or White Dye for Lime, making it a cornerstone of the game's color palette."
    },
    "minecraft:yellow_dye": {
        id: "minecraft:yellow_dye",
        name: "Yellow Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks yellow",
            secondaryUse: "Mixing with Red Dye to create Orange Dye"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Dandelion", "Sunflower"]
        },
        specialNotes: [
            "Crafted from Dandelions (1 dye) or Sunflowers (2 dyes)",
            "Renamed from 'Dandelion Yellow' to 'Yellow Dye' in Bedrock 1.8.0",
            "Used to dye wool, terracotta, glass, concrete, and beds yellow",
            "Can be mixed with Red Dye to create Orange Dye",
            "Sold by Wandering Traders for 1 Emerald",
            "Found in village mason chests and trail ruins suspicious gravel"
        ],
        description: "Yellow Dye is a bright, cheerful primary colorant obtained from common flowers like Dandelions and Sunflowers. It is one of the most accessible dyes in the game, used to color a wide range of items from wool and concrete to leather armor and shulker boxes. In Bedrock Edition, it was formerly known as Dandelion Yellow before being standardized as Yellow Dye. It serves as a base for several secondary colors and is frequently traded by Wandering Traders, making it a staple for decorative projects."
    }
};
