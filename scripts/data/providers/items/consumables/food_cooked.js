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
    "minecraft:mushroom_stew": {
        id: "minecraft:mushroom_stew",
        name: "Mushroom Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating to restore hunger",
            secondaryUse: "None"
        },
        food: {
            hunger: 6,
            saturation: 7.2
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Red Mushroom", "Brown Mushroom", "Bowl"]
        },
        specialNotes: [
            "Restores 6 hunger (3 drumsticks) and 7.2 saturation",
            "Leaves behind an empty Bowl after eating",
            "Not stackable",
            "Can be obtained by 'milking' a Mooshroom with a Bowl"
        ],
        description: "Mushroom Stew is a liquid food item that restores 6 hunger points and 7.2 saturation. It is crafted shapelessly using a bowl, a red mushroom, and a brown mushroom. Alternatively, players can obtain it by using a bowl on a Mooshroom. Like other soups and stews, it is not stackable, but the bowl is returned to the player's inventory after consumption."
    },
    "minecraft:beetroot_soup": {
        id: "minecraft:beetroot_soup",
        name: "Beetroot Soup",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating to restore hunger",
            secondaryUse: "None"
        },
        food: {
            hunger: 6,
            saturation: 7.2
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bowl", "Beetroot x6"]
        },
        specialNotes: [
            "Restores 6 hunger (3 drumsticks) and 7.2 saturation",
            "Leaves behind an empty Bowl after eating",
            "Not stackable",
            "Crafted with 6 Beetroots and a Bowl"
        ],
        description: "Beetroot Soup is a liquid food item crafted from six beetroots and a bowl. It restores 6 hunger points and 7.2 saturation, making it identical in nutritional value to Mushroom Stew. While it provides a decent amount of food, its unstackable nature makes it less convenient for exploration compared to stackable foods like bread or steak."
    },
    "minecraft:cookie": {
        id: "minecraft:cookie",
        name: "Cookie",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Eating to restore hunger",
            secondaryUse: "Composting"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wheat", "Cocoa Beans", "Wheat"]
        },
        specialNotes: [
            "Restores 2 hunger (1 drumstick) and 0.4 saturation",
            "Crafted in batches of 8 using 2 Wheat and 1 Cocoa Beans",
            "Feeding cookies to Parrots kills them instantly",
            "Can be bought from Farmer villagers"
        ],
        description: "A Cookie is a food item made from cocoa beans and wheat. Each crafting operation yields 8 cookies, making them easy to mass-produce once cocoa beans are obtained. However, they provide very little nourishment, restoring only 2 hunger points and minimal saturation. Warning: Cookies are toxic to parrots and will kill them instantly if fed."
    }
};
