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
    "minecraft:poisonous_potato": {
        id: "minecraft:poisonous_potato",
        name: "Poisonous Potato",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Emergency food source (dangerous)",
            secondaryUse: "Composting for bonemeal"
        },
        food: {
            hunger: 2,
            saturation: 1.2
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["2% drop when harvesting potatoes", "Cannot be cooked or crafted into anything useful"]
        },
        specialNotes: [
            "60% chance to inflict Poison II for 4 seconds (2.5 hearts damage)",
            "Restores only 2 hunger (1 drumstick) and 1.2 saturation",
            "Only obtainable as rare drop from potato crops (2% chance per potato)",
            "Cannot be cooked, planted, or used in any crafting recipes",
            "Can be composted in composters with 85% success rate",
            "Serves as early-game emergency food with high risk/reward",
            "Stacks with regular potatoes but has distinct greenish appearance"
        ],
        description: "Poisonous Potatoes are rare, toxic variants of regular potatoes that occasionally drop when harvesting potato crops. They restore minimal hunger while having a 60% chance to inflict Poison II for 4 seconds, dealing significant damage. While dangerous to eat, they can serve as desperate emergency food or be composted for bone meal. Unlike normal potatoes, they cannot be planted, cooked, or used in crafting. Their distinctive green appearance warns players of the risk, though sometimes consuming one is necessary when survival demands extreme measures."
    }
};
