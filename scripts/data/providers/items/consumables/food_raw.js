// Pocket Wikipedia Foundation - Raw Food Data
// ============================================
// This file contains: Raw beef, raw porkchop, raw chicken,
// raw mutton, raw rabbit, raw cod, raw salmon, tropical fish,
// apple, melon slice, sweet berries, glow berries,
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
    "minecraft:potato": {
        id: "minecraft:potato",
        name: "Potato",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Smelting into Baked Potatoes and breeding pigs"
        },
        food: {
            hunger: 1,
            saturation: 0.6
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Harvested from potato crops", "Found in village farms", "Dropped by zombies"]
        },
        specialNotes: [
            "Restores 1 hunger point (0.5 drumsticks) and 0.6 saturation",
            "Found in village farm plots and can be farmed by planting on farmland",
            "Zombies, husks, and zombie villagers have a 2.5% (1/40) chance to drop a potato",
            "Smelting in a furnace or smoker creates a Baked Potato (restores 5 hunger)",
            "Can be used to breed pigs in Bedrock Edition",
            "Rarely yields a Poisonous Potato when harvested (60% chance for poisonous variant)",
            "Farmer villagers buy potatoes for emeralds in Bedrock"
        ],
        description: "Potatoes are staple food crops grown from potato plants planted on farmland. While raw potatoes provide minimal nutrition (1 hunger, 0.6 saturation), they are easily farmed and can be smelted into Baked Potatoes for much better sustenance. They spawn naturally in village farms and can be obtained as rare drops from zombies. Potatoes serve as breeding food for pigs, making them valuable for livestock management. Harvesting potatoes carries a small risk of obtaining a Poisonous Potato, which applies a harmful effect when consumed."
    },
    "minecraft:poisonous_potato": {
        id: "minecraft:poisonous_potato",
        name: "Poisonous Potato",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Emergency food (with risk)",
            secondaryUse: "Composting material"
        },
        food: {
            hunger: 2,
            saturation: 1.2
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Rare harvest from potato crops"]
        },
        specialNotes: [
            "Restores 2 hunger points (1 drumstick) and 1.2 saturation but inflicts Poison for 5 seconds",
            "60% chance to be obtained when harvesting a mature potato crop in Bedrock Edition",
            "Cannot be smelted or cooked into a non-poisonous version",
            "Has a 100% chance to add a layer when composted in a composter",
            "Poison effect prevents natural regeneration, making it risky to use in combat",
            "Can be distinguished from regular potatoes by its green coloration",
            "Useful for composting to obtain bone meal without wasting regular potatoes"
        ],
        description: "The Poisonous Potato is a rare variant obtained when harvesting mature potato crops, with a 60% chance in Bedrock Edition. While it provides more hunger than a regular potato (2 points versus 1), it inflicts the Poison effect for 5 seconds, preventing natural health regeneration. This makes it a risky food choice during combat. The item cannot be cooked to remove the poison, but it can be composted with 100% efficiency. Its distinctive green appearance helps players identify it before consumption."
    },
    "minecraft:carrot": {
        id: "minecraft:carrot",
        name: "Carrot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Breeding rabbits and pigs, and crafting Golden Carrots"
        },
        food: {
            hunger: 3,
            saturation: 3.6
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Harvested from carrot crops", "Found in village farms", "Dropped by zombies"]
        },
        specialNotes: [
            "Restores 3 hunger points (1.5 drumsticks) and 3.6 saturation",
            "Found growing in village farm plots and can be farmed on farmland",
            "Zombies, husks, and zombie villagers have a 2.5% (1/40) chance to drop a carrot",
            "Used to breed and speed up growth of rabbits and pigs in Bedrock",
            "8 carrots can be crafted with 1 gold nugget to create a Golden Carrot",
            "Golden Carrots are used for Potion of Night Vision and have highest saturation of any stackable food",
            "Farmer villagers buy carrots for emeralds in Bedrock"
        ],
        description: "Carrots are versatile crops grown on farmland that provide solid nutrition at 3 hunger points and 3.6 saturation. They spawn naturally in village farms and can be obtained as rare zombie drops, similar to potatoes. Carrots serve multiple purposes: they are primary breeding food for rabbits and pigs, can be used to craft Golden Carrots for brewing Night Vision potions, and combined with a fishing rod and stick to create Carrot on a Stick for pig control. Their balanced hunger restoration and multiple utility uses make them a valuable crop for any farm."
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
    "minecraft:salmon": {
        id: "minecraft:salmon",
        name: "Raw Salmon",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source (better when cooked)",
            secondaryUse: "Feeding and breeding cats and ocelots"
        },
        food: {
            hunger: 2,
            saturation: 0.2
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Salmon mobs", "Obtained via fishing", "Rare drop from Guardians and Elder Guardians", "Dropped by Polar Bears (25% chance)"]
        },
        specialNotes: [
            "Restores 2 hunger points (1 drumstick) and 0.2 saturation when eaten raw",
            "Can be cooked in a furnace, smoker, or campfire to make Cooked Salmon",
            "Cooked Salmon restores 6 hunger and 9.6 saturation, making cooking highly recommended",
            "Used to tame cats (10-33% success rate) and breed them after taming",
            "Used to gain trust from ocelots (cannot be fully tamed in Bedrock)",
            "Salmon mobs drop 1 raw salmon guaranteed when killed",
            "Can be caught while fishing with approximately 25% chance in the fish category"
        ],
        description: "Raw Salmon is a common food item obtained from fishing, killing salmon mobs, or as rare drops from guardians and polar bears. While it can be eaten raw to restore 2 hunger points, its low saturation makes it far less efficient than cooking it first. Cooked Salmon provides significantly better nutrition with 6 hunger and 9.6 saturation. Raw Salmon is essential for taming cats and gaining the trust of ocelots, making it valuable beyond just food. Salmon are found in rivers and various ocean biomes, making this item accessible throughout exploration."
    },
    "minecraft:cod": {
        id: "minecraft:cod",
        name: "Raw Cod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source (better when cooked)",
            secondaryUse: "Feeding and breeding cats and ocelots"
        },
        food: {
            hunger: 2,
            saturation: 0.4
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Cod mobs", "Obtained via fishing", "Rare drop from Guardians and Elder Guardians", "Obtained by killing Dolphins (in Bedrock)"]
        },
        specialNotes: [
            "Restores 2 hunger points (1 drumstick) and 0.4 saturation when eaten raw",
            "Can be cooked in a furnace, smoker, or campfire to make Cooked Cod",
            "Cooked Cod restores 5 hunger and 6 saturation, making cooking recommended",
            "Used to tame cats (10-33% success rate) and breed them after taming",
            "Used to gain trust from ocelots (cannot be fully tamed in Bedrock)",
            "Cod mobs drop 1 raw cod guaranteed when killed",
            "Most common fish catch while fishing at approximately 60% of fish catches"
        ],
        description: "Raw Cod is the most common fish item in Minecraft, easily obtained through fishing or by killing cod mobs in ocean biomes. While edible raw, providing 2 hunger and 0.4 saturation, cooking it into Cooked Cod significantly improves its nutritional value to 5 hunger and 6 saturation. Raw Cod is essential for taming cats and gaining ocelot trust, making it valuable for pet collectors. As the most abundant fish in the game, cod serves as a reliable and renewable food source for players near oceans. Guardians and Elder Guardians also have a chance to drop raw cod, though fishing is the most efficient method."
    }
};
