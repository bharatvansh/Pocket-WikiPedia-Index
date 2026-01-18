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
    }
};
