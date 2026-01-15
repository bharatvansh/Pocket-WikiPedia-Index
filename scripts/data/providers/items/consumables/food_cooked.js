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
    "minecraft:cooked_rabbit": {
        id: "minecraft:cooked_rabbit",
        name: "Cooked Rabbit",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Ingredient for Rabbit Stew and healing wolves"
        },
        food: {
            hunger: 5,
            saturation: 6.0
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Rabbit", "Fuel"]
        },
        specialNotes: [
            "Restores 5 hunger (2.5 drumsticks) and 6.0 saturation",
            "Obtained by smelting raw rabbit or killing rabbits with fire",
            "Key ingredient for crafting Rabbit Stew",
            "Can be fed to wolves to heal them in Bedrock Edition",
            "Stackable up to 64"
        ],
        description: "Cooked Rabbit is a food item obtained by cooking raw rabbit in a furnace, smoker, or campfire. It restores 5 hunger points and 6.0 saturation, making it comparable to bread or baked potatoes. Its primary utility lies in being a core ingredient for Rabbit Stew, which provides massive hunger restoration. Additionally, in Bedrock Edition, cooked rabbit can be used to heal tamed wolves, adding to its value for pet owners."
    },
    "minecraft:cooked_salmon": {
        id: "minecraft:cooked_salmon",
        name: "Cooked Salmon",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Healing wolves"
        },
        food: {
            hunger: 6,
            saturation: 9.6
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Salmon", "Fuel"]
        },
        specialNotes: [
            "Restores 6 hunger (3 drumsticks) and 9.6 saturation",
            "Obtained by smelting raw salmon or killing salmon/polar bears with fire",
            "Significantly better stats than cooked cod (matches cooked mutton)",
            "Can be fed to wolves to heal them in Bedrock Edition",
            "Stackable up to 64"
        ],
        description: "Cooked Salmon is a nutritious food item obtained by cooking raw salmon. It restores 6 hunger points and provides 9.6 saturation, making it a superior food source compared to cooked cod and statistically identical to cooked mutton. It is easily sourced from rivers and oceans where salmon are abundant. In Bedrock Edition, it also serves as a healing item for tamed wolves, making it a versatile resource for survival and exploration."
    },
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
            primaryUse: "Hearty early-game bowl meal",
            secondaryUse: "Instant food by using a Bowl on a Mooshroom"
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
            "Does not stack and returns an empty Bowl after eating",
            "Crafted shapelessly from one red mushroom, one brown mushroom, and a bowl",
            "Can be obtained by using a Bowl on a Mooshroom (no cooldown)",
            "Great food source in Mushroom Fields due to abundant mushrooms"
        ],
        description: "Mushroom Stew is a simple bowl-based food crafted from one red mushroom, one brown mushroom, and a bowl. It restores 6 hunger points and 7.2 saturation, making it a strong early-game meal when mushrooms are plentiful. Players can also obtain it instantly by using a bowl on a mooshroom. After eating, the empty bowl is returned for reuse."
    },
    "minecraft:beetroot_soup": {
        id: "minecraft:beetroot_soup",
        name: "Beetroot Soup",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Bowl meal made from farmed beetroots",
            secondaryUse: "Reliable food once beetroot farming is established"
        },
        food: {
            hunger: 6,
            saturation: 7.2
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Beetroot x6", "Bowl"]
        },
        specialNotes: [
            "Restores 6 hunger (3 drumsticks) and 7.2 saturation",
            "Crafted shapelessly from 6 beetroots and a bowl",
            "Does not stack and returns an empty Bowl after eating",
            "Works well as a renewable base food when you have a beetroot farm",
            "Takes more inventory space than stackable foods like bread"
        ],
        description: "Beetroot Soup is a bowl-based food item crafted shapelessly from six beetroots and a bowl. It restores 6 hunger points and 7.2 saturation, matching mushroom stew in nutrition while rewarding players who set up beetroot farms. Because it does not stack, it is most convenient for base use or short trips. The bowl is returned after eating."
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
            primaryUse: "High hunger restoration food",
            secondaryUse: "Efficient exploration food source"
        },
        food: {
            hunger: 8,
            saturation: 4.8
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Pumpkin", "Sugar", "Egg"]
        },
        specialNotes: [
            "Restores 8 hunger (4 drumsticks) and 4.8 saturation",
            "One of the most efficient food sources in terms of hunger per ingredient",
            "Crafted from pumpkin, sugar, and egg in any arrangement (shapeless)",
            "Provides excellent hunger restoration for exploration",
            "Stackable up to 64, unlike bowl-based foods",
            "No special effects, purely nutritional value"
        ],
        description: "Pumpkin Pie is a highly efficient food item that provides substantial hunger restoration. Crafted from a pumpkin, sugar, and an egg in any arrangement, it offers one of the best hunger-to-ingredient ratios in the game. Unlike bowl-based foods, pumpkin pie stacks up to 64, making it convenient for long journeys. Its high hunger restoration makes it an excellent choice for exploration and survival situations where inventory space is limited."
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
    },
    "minecraft:dried_kelp": {
        id: "minecraft:dried_kelp",
        name: "Dried Kelp",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Quick-to-eat food source",
            secondaryUse: "Crafting Dried Kelp Blocks for fuel"
        },
        food: {
            hunger: 1,
            saturation: 0.6
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Kelp", "Fuel"]
        },
        specialNotes: [
            "Restores 1 hunger point (0.5 drumsticks) and 0.6 saturation",
            "Can be eaten about twice as fast as other food items (0.8s vs 1.6s)",
            "Obtained by smelting regular kelp in a furnace or smoker",
            "Nine items can be crafted into a Dried Kelp Block",
            "A Dried Kelp Block can be used as a high-efficiency fuel source",
            "Useful for topping off the hunger bar quickly"
        ],
        description: "Dried Kelp is a unique food item obtained by smelting raw kelp in a furnace or smoker. While it only restores a small amount of hunger and saturation, it is notable for being consumed twice as fast as most other foods in Minecraft. This makes it an excellent choice for players who need a quick hunger boost without pausing for long. Beyond its use as food, dried kelp can be crafted into blocks that serve as highly efficient fuel, capable of smelting 20 items per block. It is a highly renewable resource, especially when harvested from large-scale kelp farms."
    },
    "minecraft:cooked_beef": {
        id: "minecraft:cooked_beef",
        name: "Steak",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "High-tier food source",
            secondaryUse: "Breeding and healing wolves"
        },
        food: {
            hunger: 8,
            saturation: 12.8
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Beef", "Fuel"]
        },
        specialNotes: [
            "Restores 8 hunger (4 drumsticks) and 12.8 saturation",
            "Obtained by smelting raw beef in a furnace, smoker, or campfire",
            "Cows and mooshrooms drop 1-3 steak when killed while on fire",
            "One of the best food items for saturation in Bedrock Edition",
            "Can be used to breed, heal, and speed up growth of wolves",
            "Stackable up to 64, making it ideal for exploration and combat"
        ],
        description: "Steak is a high-quality food item obtained by cooking raw beef or by killing cows and mooshrooms with fire. It is one of the most effective food sources in Minecraft Bedrock Edition, providing 8 hunger points and an impressive 12.8 saturation points. This high saturation keeps the player's hunger bar full for longer than most other foods, making it a favorite for long-distance travel and intense combat. Additionally, steak plays a vital role in animal husbandry, as it can be used to breed and heal tamed wolves."
    },
    "minecraft:cooked_chicken": {
        id: "minecraft:cooked_chicken",
        name: "Cooked Chicken",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Moderate-tier food source",
            secondaryUse: "Breeding and healing tamed wolves"
        },
        food: {
            hunger: 6,
            saturation: 7.2
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Chicken", "Fuel"]
        },
        specialNotes: [
            "Restores 6 hunger points (3 drumsticks) and 7.2 saturation",
            "Eliminates the 30% chance of Hunger effect from raw chicken",
            "Obtained by smelting raw chicken or killing chickens with fire",
            "Can be used to breed, heal, and grow baby wolves",
            "Sold by Butcher villagers in exchange for emeralds",
            "Dropped by chickens when killed by a weapon with Fire Aspect"
        ],
        description: "Cooked Chicken is a reliable food source obtained by cooking raw chicken in a furnace, smoker, or campfire. It is significantly safer than raw chicken, which has a 30% chance of inflicting the Hunger status effect in Bedrock Edition. Providing 6 hunger points and 7.2 saturation, it serves as a solid mid-tier meal. Beyond player consumption, cooked chicken is highly useful for managing a pack of wolves, as it can be used for breeding and healing them. It's easily renewable through automated chicken farms, making it a staple for many survival players."
    },
    "minecraft:baked_potato": {
        id: "minecraft:baked_potato",
        name: "Baked Potato",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Efficient farmable food source",
            secondaryUse: "Crafting Rabbit Stew"
        },
        food: {
            hunger: 5,
            saturation: 6.0
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Potato", "Fuel"]
        },
        specialNotes: [
            "Restores 5 hunger points (2.5 drumsticks) and 6.0 saturation",
            "Obtained by smelting regular potatoes in a furnace, smoker, or campfire",
            "One of the best early-to-mid game foods due to high crop yields",
            "Required ingredient for crafting the high-tier Rabbit Stew",
            "Can be purchased from Farmer villagers for emeralds",
            "Unlike raw potatoes, they cannot be planted to grow more crops"
        ],
        description: "The Baked Potato is a highly efficient food item in Minecraft Bedrock Edition, produced by cooking raw potatoes. While a single baked potato restores 5 hunger points and 6.0 saturation, the real strength lies in the high yield of potato crops, which can produce multiple potatoes per harvest. This makes it a very sustainable food source for survival players. Additionally, baked potatoes are a necessary component in the recipe for Rabbit Stew, the game's most restorative meal. They are a popular choice for automated farms and are also commonly traded by Farmer villagers."
    },
    "minecraft:cooked_porkchop": {
        id: "minecraft:cooked_porkchop",
        name: "Cooked Porkchop",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "High-value food source",
            secondaryUse: "Breeding and healing wolves"
        },
        food: {
            hunger: 8,
            saturation: 12.8
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Porkchop", "Fuel"]
        },
        specialNotes: [
            "Restores 8 hunger (4 drumsticks) and 12.8 saturation",
            "Obtained by smelting raw porkchop or killing pigs with fire",
            "Statistically identical to Steak",
            "Can be used to breed, heal, and grow wolves",
            "Stackable up to 64"
        ],
        description: "Cooked Porkchop is a high-energy food item obtained by cooking raw porkchop in a furnace, smoker, or campfire. It can also be obtained directly by killing pigs or hoglins with fire. Statistically identical to steak, it restores 8 hunger points and provides excellent saturation (12.8), making it one of the best food sources for sustaining health and hunger during long adventures or combat encounters. It serves as a reliable staple for players who farm pigs."
    },
    "minecraft:cooked_mutton": {
        id: "minecraft:cooked_mutton",
        name: "Cooked Mutton",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Breeding and healing wolves"
        },
        food: {
            hunger: 6,
            saturation: 9.6
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Mutton", "Fuel"]
        },
        specialNotes: [
            "Restores 6 hunger (3 drumsticks) and 9.6 saturation",
            "Obtained by smelting raw mutton or killing sheep with fire",
            "Can be used to breed, heal, and grow wolves",
            "Stackable up to 64",
            "A byproduct of sheep wool farms"
        ],
        description: "Cooked Mutton is a nutritious food item obtained by cooking raw mutton or killing sheep with fire. Restoring 6 hunger points and providing solid saturation (9.6), it serves as a reliable food source for players who raise sheep for wool. While slightly less nutritious than steak or porkchops, it is a valuable byproduct of wool farms and offers a good balance of availability and sustenance."
    },
    "minecraft:cooked_cod": {
        id: "minecraft:cooked_cod",
        name: "Cooked Cod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Healing wolves"
        },
        food: {
            hunger: 5,
            saturation: 6.0
        },
        crafting: {
            recipeType: "Smelting",
            ingredients: ["Raw Cod", "Fuel"]
        },
        specialNotes: [
            "Restores 5 hunger (2.5 drumsticks) and 6.0 saturation",
            "Obtained by smelting raw cod or killing cod with fire",
            "Can be fed to wolves to heal them",
            "Cats can be fed cooked cod to heal them (but prefer raw to tame)",
            "Stackable up to 64"
        ],
        description: "Cooked Cod is a food item obtained by cooking raw cod in a furnace, smoker, or campfire. It restores 5 hunger points and 6 saturation, making it equal to bread or baked potatoes in nutritional value. Easily obtained from the abundant cod found in oceans, it is a convenient food source for players living near water or exploring marine biomes. It can also be fed to wolves to heal them."
    }
};
