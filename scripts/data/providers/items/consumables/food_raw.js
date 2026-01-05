// Pocket Wikipedia Foundation - Raw Food Data
// ============================================
// This file contains: Raw beef, raw porkchop, raw chicken,
// raw mutton, raw rabbit, raw cod, raw salmon, tropical fish,
// pufferfish, apple, melon slice, sweet berries, glow berries,
// carrot, potato, beetroot, dried kelp, chorus fruit
// ============================================

/**
 * Raw food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const rawFood = {
    "minecraft:apple": {
        id: "minecraft:apple",
        name: "Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Crafting golden apples"
        },
        food: {
            hunger: 4,
            saturation: 2.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Drops from oak and dark oak leaves"]
        },
        specialNotes: [
            "Restores 4 hunger points (2 drumsticks)",
            "Has a 0.5% chance to drop from oak or dark oak leaves when broken",
            "Can be used to craft golden apples with gold ingots"
        ],
        description: "Apples are a common food item that can be obtained by breaking oak or dark oak leaves, or found in various structure chests. They provide moderate hunger restoration and are essential ingredients for crafting golden apples."
    },
    "minecraft:chorus_fruit": {
        id: "minecraft:chorus_fruit",
        name: "Chorus Fruit",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food with teleportation ability",
            secondaryUse: "Exploration and escaping danger in the End dimension"
        },
        food: {
            hunger: 4,
            saturation: 2.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Chorus Plants in the End dimension"]
        },
        specialNotes: [
            "Teleports player 8 blocks randomly through walls; usable even when full",
            "Eating time: 1.6s (standard); Teleport cooldown: 1s",
            "Restores 4 hunger (2 drumsticks) and 2.4 saturation",
            "Harvested from Chorus Plants on End stone in the End dimension",
            "Farmable by planting Chorus Flowers on End stone",
            "Essential for escaping danger or navigating difficult terrain"
        ],
        description: "Chorus Fruit is a unique food found in the End, harvested from Chorus Plants on End stone. Eating it teleports the player to a random location within 8 blocks, even through walls or when the hunger bar is full. This makes it invaluable for escaping danger or navigating terrain. It restores 4 hunger points and 2.4 saturation. Players can farm it by planting Chorus Flowers on End stone, creating a renewable source of food and mobility."
    },
    "minecraft:glow_berries": {
        id: "minecraft:glow_berries",
        name: "Glow Berries",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source and cave lighting",
            secondaryUse: "Decorative lighting with cave vines"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from cave vines in lush caves and other underground locations"]
        },
        specialNotes: [
            "Restores 2 hunger and emits light level 14 when placed",
            "Found in lush caves growing on cave vines; renewable via bone meal",
            "Can be planted on ceilings to grow downward vines",
            "Foxes may eat them during breeding",
            "Compostable with a 30% chance of raising compost level",
            "Added in Caves & Cliffs Part I (1.17) for decoration and utility"
        ],
        description: "Glow Berries are a food and light source found on cave vines in lush caves. Eating them restores 2 hunger and 0.4 saturation. When attached to vines, they emit a light level of 14, providing a natural alternative to torches. Players can farm them by planting them on the underside of solid blocks; the resulting cave vines grow downward and produce berries over time or when bone-mealed. Beyond sustenance, they are highly valued as decorative lighting for underground bases and garden builds."
    },
    "minecraft:spider_eye": {
        id: "minecraft:spider_eye",
        name: "Spider Eye",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing ingredient for Potions of Poison",
            secondaryUse: "Emergency food source (applies poison effect)"
        },
        food: {
            hunger: 2,
            saturation: 3.2
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Spiders and Cave Spiders", "Witch drops"]
        },
        specialNotes: [
            "Restores 2 hunger but inflicts Poison for 4 seconds in Bedrock Edition",
            "Spiders drop 0-1 Spider Eyes (33% chance), cave spiders drop 0-1 when killed",
            "Witches drop 0-6 Spider Eyes from their loot pool when killed",
            "Used to craft Fermented Spider Eye with brown mushroom and sugar",
            "Brewing ingredient for Potion of Poison (Awkward Potion + Spider Eye)",
            "Cannot be composted (only plant-based items are compostable)"
        ],
        description: "Spider Eyes are dropped by spiders and cave spiders when killed, and occasionally by witches. While they can be eaten to restore 2 hunger points and 3.2 saturation, they inflicts the Poison effect for 4 seconds in Bedrock Edition, making them a risky emergency food source. Their primary use is as a brewing ingredient for creating Potions of Poison when combined with an Awkward Potion. Spider Eyes are also essential for crafting Fermented Spider Eyes, which are used to corrupt or modify various potions in brewing."
    },
    "minecraft:egg": {
        id: "minecraft:egg",
        name: "Egg",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting ingredient for cakes and pumpkin pies",
            secondaryUse: "Spawning chickens (12.5% chance when thrown)"
        },
        food: {
            hunger: 0,
            saturation: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Laid by chickens every 5-10 minutes", "Found in village fletcher chests"]
        },
        specialNotes: [
            "Cannot be eaten directly in Bedrock Edition",
            "Chickens lay eggs every 5-10 minutes in loaded chunks",
            "Throwing eggs has 12.5% chance to spawn a baby chicken",
            "Used to craft Cake (3 eggs required)",
            "Used to craft Pumpkin Pie (1 egg required)",
            "Baby chickens spawned from eggs grow into adults in 20 minutes",
            "Also used as projectile weapon (deals 0 damage but has knockback)"
        ],
        description: "Eggs are a renewable resource laid by chickens in Minecraft Bedrock Edition every 5-10 minutes. While they cannot be eaten directly, they serve as essential crafting ingredients for cake and pumpkin pie, providing a reliable food source when combined with wheat, milk, sugar, and pumpkins. Additionally, throwing eggs at surfaces has a 12.5% chance to hatch a baby chicken, offering a passive way to expand poultry farms. This dual utility makes eggs valuable for both culinary purposes and animal husbandry. Baby chickens grow into egg-laying adults in roughly 20 minutes, creating a sustainable cycle."
    },
    "minecraft:sweet_berries": {
        id: "minecraft:sweet_berries",
        name: "Sweet Berries",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source and fox breeding",
            secondaryUse: "Defensive hedging using bushes"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from sweet berry bushes in taiga biomes"]
        },
        specialNotes: [
            "Restores 2 hunger and 0.4 saturation",
            "Found in various taiga biomes; can be replanted on grass or dirt",
            "Sweet berry bushes deal 1 damage every 0.5s to moving players/mobs",
            "Used to breed foxes and speed up the growth of baby foxes",
            "Villager butchers may buy sweet berries for emeralds",
            "Harvested by right-clicking a mature bush without breaking it",
            "Can be used as a composting ingredient (30% chance)"
        ],
        description: "Sweet Berries are a versatile food item found growing on bushes within Taiga biomes in Minecraft Bedrock Edition. While they only provide a small amount of hunger restoration, they are easily farmed and can be harvested from mature bushes without destroying the plant. Beyond consumption, they are essential for breeding foxes and can be planted to create defensive hedges that slow and damage most mobs. Their ability to grow quickly and provide both food and protection makes them a valuable resource for players living in colder climates."
    },
    "minecraft:raw_cod": {
        id: "minecraft:raw_cod",
        name: "Raw Cod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Taming and breeding cats"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Dropped by Cod mobs", "Caught via fishing"]
        },
        specialNotes: [
            "Restores 2 hunger (1 drumstick) and 0.4 saturation",
            "Can be cooked to create Cooked Cod",
            "Used to tame stray cats and breed tamed cats",
            "Healing source for tamed cats",
            "Dolphins follow players holding raw cod",
            "Can be sold to Fisherman villagers"
        ],
        description: "Raw Cod is a basic food item obtained by fishing or by killing cod in ocean biomes. While it can be eaten raw for minor hunger restoration, it is better used as a crafting ingredient for Cooked Cod or as a tool for animal husbandry. In Bedrock Edition, it is a primary item for taming and breeding cats. Additionally, holding raw cod will attract nearby dolphins, who may lead you to treasure if fed."
    },
    "minecraft:raw_salmon": {
        id: "minecraft:raw_salmon",
        name: "Raw Salmon",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Taming and breeding cats"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Dropped by Salmon mobs", "Caught via fishing"]
        },
        specialNotes: [
            "Restores 2 hunger (1 drumstick) and 0.4 saturation",
            "Can be cooked into Cooked Salmon for better nutrition",
            "Works for taming and breeding cats",
            "Speeds up the growth of kittens",
            "Salmon mobs in Bedrock can spawn in three different sizes",
            "Dolphins can be fed raw salmon to find underwater structures"
        ],
        description: "Raw Salmon is a common food obtained from salmon mobs or through fishing. It provides the same hunger and saturation as raw cod when eaten raw. Its real value lies in being cooked or used for taming cats and kittens. In Bedrock Edition, salmon are found in rivers and cold oceans, appearing in various sizes. Like cod, raw salmon can be fed to dolphins to uncover buried treasure or shipwrecks."
    },
    "minecraft:pufferfish": {
        id: "minecraft:pufferfish",
        name: "Pufferfish",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing ingredient for Potions of Water Breathing",
            secondaryUse: "Trading with fisherman villagers"
        },
        food: {
            hunger: 1,
            saturation: 0.2
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Dropped by Pufferfish mobs", "Caught via fishing"]
        },
        specialNotes: [
            "Restores 1 hunger but inflicts severe status effects",
            "Applies Poison IV (1m), Hunger III (15s), and Nausea (15s)",
            "Essential for brewing Water Breathing potions",
            "Master-level Fisherman villagers buy them for emeralds",
            "Cannot be used for taming or breeding cats",
            "Pufferfish mobs inflate when players are nearby, dealing damage"
        ],
        description: "Pufferfish are unique items primarily used in brewing rather than for food. While they can be eaten, they are highly toxic in Bedrock Edition, inflicting multiple negative status effects including a long-lasting Poison IV. Their most important role is as the key ingredient for Potions of Water Breathing. They are obtained by fishing or by killing pufferfish mobs, which are known for their ability to inflate and sting nearby threats."
    }
};
