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
    "minecraft:orange_dye": {
        id: "minecraft:orange_dye",
        name: "Orange Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks orange",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Orange Tulip", "Red Dye + Yellow Dye"]
        },
        specialNotes: [
            "Crafted from Orange Tulip or by mixing Red and Yellow Dye",
            "Used to dye wool, terracotta, glass, concrete, and beds orange",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting orange firework stars",
            "Used to craft orange balloons in Education Edition features",
            "Can be traded to Shepherd villagers"
        ],
        description: "Orange Dye is a secondary color dye obtained by crafting an Orange Tulip or by mixing Red Dye and Yellow Dye. It is used to apply a vibrant orange color to various building blocks like wool, terracotta, glass, and concrete. In Bedrock Edition, it is a versatile dye for customizing leather armor, shulker boxes, and creating orange firework stars. It also serves as a trade item with Shepherd villagers and can be used to dye the collars of tamed wolves."
    },
    "minecraft:magenta_dye": {
        id: "minecraft:magenta_dye",
        name: "Magenta Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks magenta",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Allium", "Lilac", "Purple Dye + Pink Dye"]
        },
        specialNotes: [
            "Crafted from Allium, Lilac, or by mixing Purple and Pink dyes",
            "Complex recipes: Blue+2Red+White, Blue+Red+Pink",
            "Used to dye wool, terracotta, glass, concrete, and beds magenta",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting magenta firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Magenta Dye is a secondary color dye that can be obtained from Alliums or Lilacs, or by mixing other dyes such as Purple and Pink. Bedrock Edition supports multiple mixing recipes for this dye, including combinations of Blue, Red, and White dyes. It provides a bright magenta color for wool, terracotta, glass, and concrete. Besides building, it is used to customize leather armor, dye shulker boxes, and create magenta firework stars."
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
    "minecraft:lime_dye": {
        id: "minecraft:lime_dye",
        name: "Lime Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks lime",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Green Dye + White Dye", "Sea Pickle (Smelting)"]
        },
        specialNotes: [
            "Crafted by mixing Green Dye with White Dye or Bone Meal",
            "Obtained by smelting Sea Pickles",
            "Used to dye wool, terracotta, glass, concrete, and beds lime",
            "Used to dye shulker boxes and leather armor",
            "Essential for crafting lime firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Lime Dye is a secondary color dye obtained by mixing Green Dye with White Dye (or Bone Meal in Bedrock Edition), or by smelting a Sea Pickle. It provides a bright lime green color for dyeing building materials like wool, terracotta, glass, and concrete. In Bedrock Edition, it is also used to craft lime firework stars and can be applied to shulker boxes, leather armor, and even water in cauldrons."
    },
    "minecraft:pink_dye": {
        id: "minecraft:pink_dye",
        name: "Pink Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks pink",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Red Dye + White Dye", "Pink Tulip", "Peony"]
        },
        specialNotes: [
            "Crafted from Pink Tulip, Peony, or Pink Petals",
            "Created by mixing Red Dye with White Dye or Bone Meal",
            "Used to dye wool, terracotta, glass, concrete, and beds pink",
            "Mixed with Purple Dye to create Magenta Dye",
            "Essential for crafting pink firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Pink Dye is a dye that can be crafted from various flowers including Pink Tulips, Peonies, and Pink Petals, or by mixing Red Dye with White Dye (or Bone Meal). It is used to color wool, sheep, terracotta, glass, and concrete a soft pink. In Bedrock Edition, Pink Dye is a key ingredient for mixing Magenta Dye and is also used for customizing leather armor, shulker boxes, and creating pink firework stars."
    },
    "minecraft:light_blue_dye": {
        id: "minecraft:light_blue_dye",
        name: "Light Blue Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks light blue",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Blue Orchid", "Blue Dye + White Dye"]
        },
        specialNotes: [
            "Crafted from Blue Orchid or by mixing Blue Dye with White Dye",
            "Lapis Lazuli can substitute Blue Dye in the mixing recipe",
            "Used to dye wool, terracotta, glass, concrete, and beds light blue",
            "Mixed with other dyes to create cyan and magenta dyes",
            "Essential for crafting light blue firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Light Blue Dye is a primary color dye obtained from Blue Orchids or by mixing Blue Dye (or Lapis Lazuli) with White Dye (or Bone Meal). It imparts a light blue hue to building blocks such as wool, terracotta, glass, and concrete. In Bedrock Edition, it is versatile in color mixing, contributing to the creation of Cyan and Magenta dyes. It is also used for dyeing shulker boxes, leather armor, and creating light blue firework stars."
    },
    "minecraft:cyan_dye": {
        id: "minecraft:cyan_dye",
        name: "Cyan Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks cyan",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Green Dye + Blue Dye", "Pitcher Plant"]
        },
        specialNotes: [
            "Crafted from Pitcher Plant or by mixing Green and Blue Dye",
            "Lapis Lazuli can substitute Blue Dye in the mixing recipe",
            "Used to dye wool, terracotta, glass, concrete, and beds cyan",
            "Mixed with other dyes to create gray and purple variations",
            "Essential for crafting cyan firework stars",
            "Can be used to dye the collars of tamed wolves"
        ],
        description: "Cyan Dye is a secondary color dye obtained by mixing Green Dye and Blue Dye (or Lapis Lazuli), or by crafting a Pitcher Plant. It provides a unique blue-green hue for various building materials including wool, terracotta, glass, and concrete. In Bedrock Edition, it is a popular choice for aquatic-themed builds and modern architecture. Beyond blocks, it can be used to customize the appearance of leather armor, shulker boxes, and is a component in several banner patterns."
    },
    "minecraft:purple_dye": {
        id: "minecraft:purple_dye",
        name: "Purple Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks purple",
            secondaryUse: "Mixing with other dyes to create secondary colors"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Blue Dye + Red Dye"]
        },
        specialNotes: [
            "Crafted by mixing Blue Dye and Red Dye in any crafting grid",
            "Lapis Lazuli can substitute Blue Dye in the mixing recipe",
            "Used to dye wool, terracotta, glass, concrete, and beds purple",
            "Mixed with Pink Dye to create Magenta Dye",
            "Essential for crafting purple firework stars",
            "Can be traded to Shepherd villagers"
        ],
        description: "Purple Dye is a secondary color dye produced by combining primary Blue Dye (or Lapis Lazuli) and Red Dye. It is used to apply a regal purple color to sheep, wool, and a wide variety of building blocks like concrete and glass. In Bedrock Edition, it is an essential middle step for creating Magenta Dye. It also allows for the customization of leather armor, shulker boxes, and firework stars, adding variety to both character appearance and celebratory displays."
    },
    "minecraft:gray_dye": {
        id: "minecraft:gray_dye",
        name: "Gray Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks gray",
            secondaryUse: "Mixing with other dyes to create Light Gray Dye"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Black Dye + White Dye", "Ink Sac + White Dye", "Open Eyeblossom"]
        },
        specialNotes: [
            "Crafted by mixing Black and White dyes or using an Open Eyeblossom",
            "Used to color wool, terracotta, glass, concrete, and beds gray",
            "Mixed with White Dye to create Light Gray Dye",
            "Essential for crafting gray firework stars",
            "Can be used to dye the collars of tamed wolves",
            "Can be traded to Shepherd villagers"
        ],
        description: "Gray Dye is a secondary color dye obtained by mixing Black Dye (or an Ink Sac) with White Dye, or by crafting an Open Eyeblossom. It provides a neutral gray tone for various building materials, including wool, terracotta, glass, and concrete. In Bedrock Edition, it is a key component for creating even lighter shades like Light Gray Dye. It is also used for cosmetic customization of leather armor, shulker boxes, and firework stars, offering a balanced and professional look for builds and equipment."
    },
    "minecraft:light_gray_dye": {
        id: "minecraft:light_gray_dye",
        name: "Light Gray Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks light gray",
            secondaryUse: "Decoration and aesthetic customization"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Azure Bluet", "Oxeye Daisy", "White Tulip", "Gray Dye + White Dye", "Black Dye + 2x White Dye"]
        },
        specialNotes: [
            "Crafted from Azure Bluet, Oxeye Daisy, or White Tulip flowers",
            "Can be made by mixing Gray Dye and White Dye, or Black and 2x White",
            "Used to color wool, terracotta, glass, concrete, and beds light gray",
            "Essential for crafting light gray firework stars",
            "Can be traded to Shepherd villagers",
            "Historically known as 'Silver Dye' in some contexts"
        ],
        description: "Light Gray Dye is a versatile coloring agent that can be obtained from several flowers or by mixing darker dyes with White Dye. It provides a soft, light gray hue that is popular for modern architecture and subtle detailing in Minecraft builds. Beyond blocks, it can be applied to leather armor, shulker boxes, and water in cauldrons. Its multiple crafting paths—both through floral gathering and chemical mixing—make it one of the most accessible secondary dyes for players."
    },
    "minecraft:brown_dye": {
        id: "minecraft:brown_dye",
        name: "Brown Dye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Dyeing wool, sheep, and building blocks brown",
            secondaryUse: "Customizing banners and firework stars"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Cocoa Beans"]
        },
        specialNotes: [
            "Crafted directly from Cocoa Beans",
            "Used to color wool, terracotta, glass, concrete, and beds brown",
            "Used to dye shulker boxes, leather armor, and wolf collars",
            "Essential for crafting brown firework stars",
            "Can be used to dye water in cauldrons (Bedrock Edition)",
            "Can be traded to Shepherd villagers"
        ],
        description: "Brown Dye is a primary color dye obtained exclusively from Cocoa Beans. It is used to apply a warm, earthy brown tone to various surfaces including wool, terracotta, glass, and concrete. In Bedrock Edition, it is a staple for creating realistic or rustic structures. Beyond its use in construction, Brown Dye allows for the personalization of leather armor and tamed wolf collars. It is also a necessary component for creating brown firework stars and various banner patterns."
    }
};
