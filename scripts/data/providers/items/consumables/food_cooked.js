// Pocket Wikipedia Foundation - Cooked Food Data
// ============================================
// This file contains: Steak, cooked porkchop, cooked chicken,
// cooked mutton, cooked rabbit, cooked cod, cooked salmon,
// baked potato, bread, cookie, pumpkin pie, cake, mushroom stew,
// rabbit stew, beetroot soup, suspicious stew
// ============================================

/**
 * Cooked food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const cookedFood = {
    "minecraft:rabbit_stew": {
        id: "minecraft:rabbit_stew",
        name: "Rabbit Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "High-value cooked meal",
            secondaryUse: "Healing food for injured wolves"
        },
        food: {
            hunger: 10,
            saturation: 12
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Cooked Rabbit", "Carrot", "Baked Potato", "Any Mushroom", "Bowl"]
        },
        specialNotes: [
            "Restores 10 hunger (5 drumsticks) and 12 saturation",
            "Leaves behind an empty Bowl after eating",
            "Does not stack, making it less convenient for long trips",
            "Can be fed to wolves to heal them, but cannot breed or speed growth in Bedrock",
            "Crafted shapelessly from cooked rabbit, vegetables, a mushroom, and a bowl"
        ],
        description: "Rabbit Stew is a hearty cooked food item that restores a large amount of hunger and saturation, making it one of the best meals for recovering after a fight. It is crafted shapelessly using cooked rabbit, a carrot, a baked potato, any mushroom, and a bowl, and the bowl is returned after eating. In Bedrock Edition it can also be fed to an injured wolf to heal it, but it cannot be used for breeding or speeding up growth."
    },
    "minecraft:suspicious_stew": {
        id: "minecraft:suspicious_stew",
        name: "Suspicious Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food that grants a short status effect",
            secondaryUse: "Obtaining rare effects like Saturation without commands"
        },
        food: {
            hunger: 6,
            saturation: 7.2
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Red Mushroom", "Brown Mushroom", "Bowl", "Any Small Flower"]
        },
        specialNotes: [
            "Grants a short status effect based on the flower used in crafting",
            "Restores 6 hunger (3 drumsticks) and 7.2 saturation",
            "Can be eaten even when the hunger bar is full",
            "Leaves behind an empty Bowl after eating",
            "Can also be obtained from a Brown Mooshroom using a Bowl after feeding it a flower"
        ],
        description: "Suspicious Stew is a special bowl food that restores hunger while also granting a brief status effect determined by the small flower used to make it. It is crafted shapelessly from a bowl, red and brown mushrooms, and any small flower, and the bowl is returned after consumption. Unlike most foods, it can be eaten even at full hunger, making it useful for intentionally applying its effect."
    },
    "minecraft:bread": {
        id: "minecraft:bread",
        name: "Bread",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Basic food source",
            secondaryUse: "Breeding and taming animals"
        },
        food: {
            hunger: 5,
            saturation: 6.0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wheat x3"]
        },
        specialNotes: [
            "Restores 5 hunger (2.5 drumsticks) and 6.0 saturation",
            "Used to breed cows, sheep, and mooshrooms",
            "Can be used to tame and breed horses in Bedrock Edition",
            "Crafted from 3 wheat in a horizontal row",
            "One of the most efficient early-game food sources",
            "Stackable up to 64, making it convenient for travel"
        ],
        description: "Bread is a fundamental food item in Minecraft, crafted from three wheat arranged horizontally. It restores a moderate amount of hunger and saturation, making it an efficient early-game food source. Beyond its use as sustenance, bread serves as a breeding item for cows, sheep, and mooshrooms, and can also be used to tame and breed horses in Bedrock Edition. Its stackability and ease of production make it a staple for exploration and survival."
    },
    "minecraft:cookie": {
        id: "minecraft:cookie",
        name: "Cookie",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Quick snack food",
            secondaryUse: "Breeding parrots"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wheat x2", "Cocoa Beans"]
        },
        specialNotes: [
            "Restores 2 hunger (1 drumstick) and 0.4 saturation",
            "Used to breed parrots in Bedrock Edition",
            "Crafted from 2 wheat and 1 cocoa bean in a horizontal row",
            "Low saturation makes it less efficient for long-term hunger management",
            "Can be eaten quickly for small hunger boosts",
            "Stackable up to 64 for convenient storage"
        ],
        description: "Cookies are small snack items crafted from wheat and cocoa beans. They restore a small amount of hunger but have very low saturation, making them less efficient than other foods for sustained hunger management. However, their quick consumption and stackability make them useful for small hunger boosts during exploration. In Bedrock Edition, cookies are also used to breed parrots, adding a unique utility beyond basic sustenance."
    },
    "minecraft:pumpkin_pie": {
        id: "minecraft:pumpkin_pie",
        name: "Pumpkin Pie",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "High-saturation dessert food",
            secondaryUse: "Efficient hunger restoration"
        },
        food: {
            hunger: 8,
            saturation: 4.8
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Pumpkin", "Sugar", "Egg"]
        },
        specialNotes: [
            "Restores 8 hunger (4 drumsticks) and 4.8 saturation",
            "One of the most efficient food sources in terms of hunger per ingredient",
            "Crafted from pumpkin, sugar, and egg in a specific pattern",
            "Provides excellent hunger restoration for exploration",
            "Stackable up to 64, unlike bowl-based foods",
            "No special effects, purely nutritional value"
        ],
        description: "Pumpkin Pie is a highly efficient food item that provides substantial hunger restoration with good saturation. Crafted from a pumpkin, sugar, and an egg, it offers one of the best hunger-to-ingredient ratios in the game. Unlike bowl-based foods, pumpkin pie stacks up to 64, making it convenient for long journeys. Its balanced nutrition makes it an excellent choice for exploration and survival situations where inventory space is limited."
    },
    "minecraft:cake": {
        id: "minecraft:cake",
        name: "Cake",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Multi-serving dessert food",
            secondaryUse: "Decorative and celebratory item"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Milk Bucket", "Sugar x2", "Egg x3", "Wheat x3"]
        },
        specialNotes: [
            "Can be eaten 7 times (14 hunger total, 7 drumsticks)",
            "Each bite restores 2 hunger and 0.4 saturation",
            "Placed as a block that can be eaten by right-clicking",
            "Crafted with milk, sugar, eggs, and wheat in a specific pattern",
            "Does not require a bowl and leaves no container behind",
            "Can be used as a decorative block for celebrations",
            "Multiple players can eat from the same cake"
        ],
        description: "Cake is a unique multi-serving food item that functions as both a food source and a decorative block. When placed, it can be eaten up to 7 times, with each bite restoring a small amount of hunger. Crafted from milk, sugar, eggs, and wheat, cake provides a total of 14 hunger points when fully consumed. Unlike most foods, cake is placed as a block and can be shared among multiple players. Its distinctive appearance and multi-use nature make it popular for celebrations and decorative builds."
    }
};
