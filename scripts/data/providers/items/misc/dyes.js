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
    "minecraft:green_dye": {
        id: "minecraft:green_dye",
        name: "Green Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks green",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Cactus"]
        },
        specialNotes: [
            "Obtained by smelting Cactus in a Furnace",
            "Used to dye wool, terracotta, glass, concrete, and beds green",
            "Mixed with other dyes to create lime and cyan dyes",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting green firework stars",
            "The only primary dye that requires smelting to obtain"
        ],
        description: "Green Dye is a primary color dye obtained by smelting Cactus in a Furnace. It is unique among primary dyes as it requires a smelting process rather than simple crafting. This dye allows players to color wool, sheep, terracotta, glass, and concrete a vibrant green. In Bedrock Edition, it is used to create other colors like Lime (mixed with White Dye) and Cyan (mixed with Blue Dye). It is also used to dye shulker boxes, leather armor, and to create green firework stars."
    },
    "minecraft:yellow_dye": {
        id: "minecraft:yellow_dye",
        name: "Yellow Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks yellow",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Dandelion", "Sunflower"]
        },
        specialNotes: [
            "Crafted from Dandelion (1 dye) or Sunflower (2 dyes)",
            "Used to dye wool, terracotta, glass, concrete, and beds yellow",
            "Mixed with other dyes to create orange dye",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting yellow firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Yellow Dye is a primary color dye crafted from Dandelions or Sunflowers. It is used to color building materials such as wool, terracotta, glass, and concrete a bright yellow. In Bedrock Edition, it serves as a base for mixing to create Orange Dye (when combined with Red Dye). Yellow Dye is also used for cosmetic customization of leather armor, shulker boxes, and firework stars."
    },
    "minecraft:black_dye": {
        id: "minecraft:black_dye",
        name: "Black Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks black",
            secondaryUse: "Mixing with other dyes to create darker shades"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Ink Sac", "Wither Rose"]
        },
        specialNotes: [
            "Crafted from Ink Sac or Wither Rose",
            "Used to dye wool, terracotta, glass, concrete, and beds black",
            "Mixed with other dyes to create gray and light gray dyes",
            "Used to dye sign text black (Ink Sacs cannot be used for this)",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting black firework stars"
        ],
        description: "Black Dye is a primary color dye obtained from Ink Sacs (dropped by Squids) or Wither Roses. It is used to darken wool, terracotta, glass, concrete, and beds to a deep black color. In Bedrock Edition, it is essential for creating Gray Dye (mixed with White Dye). It is the required item for dyeing sign text black, as raw Ink Sacs cannot be used for this purpose. It is also used for custom banners, shulker boxes, and leather armor."
    },
    "minecraft:orange_dye": {
        id: "minecraft:orange_dye",
        name: "Orange Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks orange",
            secondaryUse: "Mixing to create other colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Red Dye + Yellow Dye", "Orange Tulip"]
        },
        specialNotes: [
            "Crafted from Orange Tulip (1 dye) or Red Dye + Yellow Dye (2 dyes)",
            "Used to dye wool, terracotta, glass, concrete, and beds orange",
            "Used to dye shulker boxes, candles, and leather armor",
            "Used to craft orange firework stars",
            "Can be used to dye the collar of a tamed wolf or cat",
            "Can be traded to Shepherd villagers"
        ],
        description: "Orange Dye is a secondary color dye created by combining Red Dye and Yellow Dye, or by crafting an Orange Tulip. It serves as a vibrant coloring agent for building materials like wool, terracotta, stained glass, and concrete. Beyond construction, it is used to customize the appearance of leather armor, shulker boxes, and candles. It can also be applied to tamed pets such as wolves and cats to change the color of their collars, and is essential for crafting orange firework stars."
    }
};
