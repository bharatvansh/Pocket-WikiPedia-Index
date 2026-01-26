// Pocket Wikipedia Foundation - Banner Items Data
// ============================================
// This file contains: All base banner items (white, black,
// red, blue, green, etc.)
// ============================================

/**
 * Banner items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const bannerItems = {
    "minecraft:white_banner": {
        id: "minecraft:white_banner",
        name: "White Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x White Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 white wool blocks in the top two rows and a stick in the bottom-middle slot",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items",
            "Does not mark maps in Bedrock Edition (unlike Java Edition)",
            "Highly customizable with over 900 quadrillion design combinations possible"
        ],
        description: "The White Banner is a tall decorative item used for base heraldry and signaling in Minecraft Bedrock Edition. It is crafted using six pieces of white wool and a single stick. Beyond its basic placement on walls and floors, it serves as the foundation for complex designs in a Loom. Since version 1.20, Bedrock players can apply customized white banners to shields, allowing for personalized defensive equipment. While it lacks the map-marking utility found in other versions, its decorative versatility remains unmatched."
    },
    "minecraft:black_banner": {
        id: "minecraft:black_banner",
        name: "Black Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Black Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 black wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Frequently used by players to create ominous or night-themed base decorations",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items",
            "Pairs well with glow ink sacs to make bright, glowing text on signs nearby"
        ],
        description: "The Black Banner is a striking decorative item essential for creating dark-themed aesthetics and heraldry in Minecraft Bedrock Edition. It is crafted with six pieces of black wool and a stick. Like all base banners, it can be customized with various patterns using a Loom and can be applied to shields for a personalized look. Its deep color makes it a popular choice for forming the background of intimidating emblems or marking territory in the dark depths of the Overworld or Nether."
    },
    "minecraft:red_banner": {
        id: "minecraft:red_banner",
        name: "Red Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Red Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 red wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Often used for warning signs or to represent fire and danger in builds",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items",
            "Red wool is easily renewable through sheep farming and red dye from flowers"
        ],
        description: "The Red Banner is a vibrant decorative item used to add bold color and warning signs to structures in Minecraft Bedrock Edition. It is crafted using six pieces of red wool and a stick. In addition to being placed as a flag, it acts as a base for intricate loom patterns. Since the 1.20 update, players can carry their red-themed heraldry into battle by combining it with a shield. Its bright hue makes it an excellent choice for visibility and marking important locations."
    },
    "minecraft:blue_banner": {
        id: "minecraft:blue_banner",
        name: "Blue Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Blue Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 blue wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Ideal for water-themed decorations or representing kingdoms and royalty",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items",
            "Blue dye can be obtained from Lapis Lazuli or Cornflowers"
        ],
        description: "The Blue Banner is a regal decorative item often associated with water, sky, and royalty in Minecraft Bedrock Edition. Crafted from six pieces of blue wool and a stick, it serves as a versatile canvas for heraldic designs. Whether placed atop a castle tower or applied to a shield for personal flair, the blue banner provides a clean and professional look for any player faction. Its color is easily sourced from lapis lazuli, making it a sustainable choice for large-scale decoration."
    },
    "minecraft:green_banner": {
        id: "minecraft:green_banner",
        name: "Green Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Green Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 green wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Excellent for forest-themed builds or camouflage in grassy biomes",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items",
            "Green dye is uniquely obtained by smelting Cactus in a furnace"
        ],
        description: "The Green Banner is a nature-inspired decorative item used to represent life, forests, and growth in Minecraft Bedrock Edition. It is crafted using six pieces of green wool and a single stick. Players often use it for camouflage in lush biomes or to mark hidden outposts. Like other banners, it can be elaborately decorated in a Loom and applied to shields. Since green dye requires smelting cactus, this banner represents a unique link to desert resources and farming."
    },
    "minecraft:orange_banner": {
        id: "minecraft:orange_banner",
        name: "Orange Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Orange Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 orange wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Orange wool can be obtained from orange sheep or by using orange dye from orange tulips or poppies",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items"
        ],
        description: "The Orange Banner is a bright, energetic decorative item used to display heraldry and mark territory in Minecraft Bedrock Edition. It is crafted by combining six pieces of orange wool with a single stick in a shaped recipe. Like other banners, it can be elaborately customized in a Loom using dyes and banner patterns to create unique designs. Since the 1.20 update, it can also be applied to Shields to provide a personalized defensive option. Its warm, vibrant color is perfect for desert builds, autumn-themed areas, or signaling danger and warmth."
    },
    "minecraft:magenta_banner": {
        id: "minecraft:magenta_banner",
        name: "Magenta Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Magenta Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 magenta wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Magenta dye is crafted by combining pink and purple dyes or from allium flowers",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items"
        ],
        description: "The Magenta Banner is a vibrant and unique decorative piece used for complex heraldry and base decoration in Minecraft Bedrock Edition. Crafted from six pieces of magenta wool and a stick, it offers a bold, purplish-pink hue that stands out in any environment. It serves as a base for intricate designs in a Loom and can be applied to shields for a personalized flair. Magenta dye is often obtained by combining pink and purple dyes, making this banner a symbol of sophisticated crafting. It is ideal for fantasy builds, magical-themed areas, or as a striking marker."
    },
    "minecraft:yellow_banner": {
        id: "minecraft:yellow_banner",
        name: "Yellow Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Yellow Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 yellow wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Yellow dye is obtained from dandelions or sunflowers",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items"
        ],
        description: "The Yellow Banner is a sun-colored decorative item used to brighten up builds and display player-created designs in Minecraft Bedrock Edition. It is crafted using six blocks of yellow wool and a single stick. This banner represents light and energy, making it a popular choice for marking settlements, shops, or farms. Beyond being a simple flag, it can be customized with various patterns in a Loom and applied to shields for personal expression. Its visibility from a distance makes it an excellent tool for navigation and signaling across the Overworld biomes."
    },
    "minecraft:purple_banner": {
        id: "minecraft:purple_banner",
        name: "Purple Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Purple Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 purple wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Purple dye is crafted by combining red and blue dyes",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items"
        ],
        description: "The Purple Banner is a regal decorative item often associated with mystery and magic in Minecraft Bedrock Edition. Crafted from six pieces of purple wool and a stick, it serves as a versatile canvas for heraldic designs. Whether placed atop a wizard's tower or applied to a shield for personal flair, the purple banner provides a rich and professional look for any player faction. Its color is easily sourced from mixing primary dyes, making it a sustainable choice for large-scale decoration."
    },
    "minecraft:cyan_banner": {
        id: "minecraft:cyan_banner",
        name: "Cyan Banner",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative banner that can be placed on the ground or on walls",
            secondaryUse: "Used in a Loom to create complex designs or applied to Shields for customization"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Cyan Wool", "1x Stick"]
        },
        specialNotes: [
            "Crafted with 6 cyan wool blocks in the top two rows and a stick in the bottom-middle slot",
            "Cyan dye is crafted by combining green and blue dyes",
            "In Bedrock Edition, can be applied to a Shield in a crafting grid to transfer designs",
            "Can be washed in a Cauldron to remove the top-most pattern layer",
            "Has a maximum stack size of 16 items"
        ],
        description: "The Cyan Banner is a vibrant decorative item often associated with the ocean and modern aesthetics in Minecraft Bedrock Edition. Crafted from six pieces of cyan wool and a stick, it serves as a versatile canvas for heraldic designs. Its bright, teal color makes it an excellent choice for visibility and marking important locations, especially in aquatic or modern-themed builds."
    }
};
