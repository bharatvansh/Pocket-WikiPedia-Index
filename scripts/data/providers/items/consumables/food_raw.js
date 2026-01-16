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
    },
    "minecraft:carrot": {
        id: "minecraft:carrot",
        name: "Carrot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source and farming",
            secondaryUse: "Breeding pigs and rabbits"
        },
        food: {
            hunger: 3,
            saturation: 3.6
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Village gardens", "Rare drop from Zombies"]
        },
        specialNotes: [
            "Restores 3 hunger (1.5 drumsticks) and 3.6 saturation",
            "Used to breed pigs and rabbits",
            "Crafting ingredient for Golden Carrots, Rabbit Stew, and Carrot on a Stick",
            "Can be traded to Farmer villagers for emeralds",
            "Planted on farmland to grow more carrots"
        ],
        description: "Carrots are a common food crop found in village gardens or obtained as a rare drop from zombies. Eating a carrot restores 3 hunger points and 3.6 saturation. They are a staple crop for players, serving as a reliable food source and a key item for animal husbandry, specifically for breeding pigs and rabbits. Carrots are also the base ingredient for Golden Carrots, one of the best food items in the game, and are essential for controlling pigs when crafted into a Carrot on a Stick."
    },
    "minecraft:potato": {
        id: "minecraft:potato",
        name: "Potato",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Farming and baking into Baked Potatoes",
            secondaryUse: "Breeding pigs and trading"
        },
        food: {
            hunger: 1,
            saturation: 0.6
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Village gardens", "Rare drop from Zombies"]
        },
        specialNotes: [
            "Restores 1 hunger (0.5 drumsticks) and 0.6 saturation when raw",
            "Should be cooked into Baked Potatoes for better nutrition",
            "Planted on farmland to grow more potatoes",
            "Has a small chance to drop a Poisonous Potato when harvested",
            "Used to breed pigs and trade with Farmer villagers"
        ],
        description: "Potatoes are a versatile crop found in villages or dropped rarely by zombies. While they can be eaten raw to restore 1 hunger point, they are most effective when cooked in a furnace to create Baked Potatoes, which provide significantly more nourishment. Potatoes are highly efficient to farm due to their multiple yields per harvest. However, harvesting them carries a small risk of obtaining a useless Poisonous Potato. They are a fundamental crop for survival and trading with villagers."
    },
    "minecraft:melon_slice": {
        id: "minecraft:melon_slice",
        name: "Melon Slice",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Crafting seeds and Glistering Melon"
        },
        food: {
            hunger: 2,
            saturation: 1.2
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Melon blocks"]
        },
        specialNotes: [
            "Restores 2 hunger (1 drumstick) and 1.2 saturation",
            "Melon blocks drop 3-7 slices when broken (more with Fortune)",
            "Crafted into Melon Seeds for farming or Glistering Melon for potions",
            "Can be composted with a 50% chance of raising the compost level",
            "Farmer villagers may sell melon slices or buy full melon blocks"
        ],
        description: "A Melon Slice is a food item obtained by breaking a full Melon block. Each block drops multiple slices, making it a high-volume food source, though its individual nutritional value is low with only 2 hunger and 1.2 saturation restored. Its true value lies in its utility: slices can be crafted into seeds for farming or combined with gold nuggets to create Glistering Melons, a key ingredient for healing potions. It also serves as a decent composting material."
    },
    "minecraft:beetroot": {
        id: "minecraft:beetroot",
        name: "Beetroot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source and crafting Beetroot Soup",
            secondaryUse: "Breeding pigs and crafting Red Dye"
        },
        food: {
            hunger: 1,
            saturation: 1.2
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Harvested from Beetroot crops", "Village gardens"]
        },
        specialNotes: [
            "Restores 1 hunger point and 1.2 saturation",
            "Used to craft Beetroot Soup (6 Beetroots + 1 Bowl)",
            "Can be crafted into Red Dye",
            "Used to breed pigs and lead them",
            "Farmer villagers may trade Beetroots for Emeralds",
            "Compostable with a 65% chance to raise the compost level"
        ],
        description: "Beetroot is a vegetable crop found in village gardens or grown from seeds. While it provides minimal nourishment on its own, restoring only 1 hunger point, it can be crafted into Beetroot Soup for a much more substantial meal. Beetroots are also versatile in crafting, serving as a source of Red Dye. They play a role in animal husbandry for breeding pigs and can be traded with Farmer villagers. Players can farm them by planting Beetroot Seeds, which are also obtained during harvest."
    },
    "minecraft:beef": {
        id: "minecraft:beef",
        name: "Raw Beef",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source (better when cooked)",
            secondaryUse: "Breeding and healing dogs/wolves"
        },
        food: {
            hunger: 3,
            saturation: 1.8
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Cows and Mooshrooms"]
        },
        specialNotes: [
            "Restores 3 hunger points (1.5 drumsticks) and 1.8 saturation",
            "Dropped by Cows (1-3) and Mooshrooms (1-3) upon death",
            "Can be cooked into Steak, which provides significantly better stats",
            "Used to breed and heal tamed wolves",
            "Butcher villagers may buy raw beef for emeralds",
            "Can be fed to wolves to speed up the growth of baby wolves"
        ],
        description: "Raw Beef is a food item dropped by cows and mooshrooms. While it can be eaten raw to restore 3 hunger points and 1.8 saturation, it is most valuable when cooked into Steak, which offers superior nutrition. Raw beef serves a critical role in animal husbandry, allowing players to breed and heal tamed wolves. It is a common drop in most biomes where cows spawn, making it a reliable early-game resource for both food and pet management."
    },
    "minecraft:porkchop": {
        id: "minecraft:porkchop",
        name: "Raw Porkchop",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Breeding and healing dogs/wolves"
        },
        food: {
            hunger: 3,
            saturation: 1.8
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Pigs"]
        },
        specialNotes: [
            "Restores 3 hunger points (1.5 drumsticks) and 1.8 saturation",
            "Dropped by Pigs (1-3) upon death",
            "Can be cooked into Cooked Porkchop for much better stats",
            "Used to breed and heal tamed wolves",
            "Butcher villagers may buy raw porkchop for emeralds",
            "Can be fed to wolves to speed up the growth of baby wolves"
        ],
        description: "Raw Porkchop is a food item dropped by pigs. Eating it raw provides 3 hunger points and 1.8 saturation, but cooking it into Cooked Porkchop significantly increases its nutritional value to match that of steak. Beyond consumption, raw porkchops are used to breed and heal tamed wolves, making them useful for players who maintain a pack of dogs. They are easily obtained in most grassy biomes where pigs spawn."
    },
    "minecraft:mutton": {
        id: "minecraft:mutton",
        name: "Raw Mutton",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Breeding and healing dogs/wolves"
        },
        food: {
            hunger: 2,
            saturation: 1.2
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Sheep"]
        },
        specialNotes: [
            "Restores 2 hunger points (1 drumstick) and 1.2 saturation",
            "Dropped by Sheep (1-2) upon death",
            "Can be cooked into Cooked Mutton for better stats",
            "Used to breed and heal tamed wolves",
            "Butcher villagers may buy raw mutton for emeralds",
            "Can be fed to wolves to speed up the growth of baby wolves"
        ],
        description: "Raw Mutton is a food item dropped by sheep. It provides 2 hunger points and 1.2 saturation when eaten raw. Cooking it into Cooked Mutton significantly improves its nutritional value to match that of cooked salmon. Raw mutton is also useful for breeding and healing tamed wolves. It is easily obtained from sheep farms, often as a byproduct of wool production."
    },
    "minecraft:chicken": {
        id: "minecraft:chicken",
        name: "Raw Chicken",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source (better when cooked)",
            secondaryUse: "Breeding and healing tamed wolves"
        },
        food: {
            hunger: 2,
            saturation: 1.2
        },
        stats: {
            hungerChance: "30%"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Chickens"]
        },
        specialNotes: [
            "30% chance of inflicting Hunger effect for 30 seconds when eaten.",
            "Dropped by chickens when they die.",
            "Used to breed and heal tamed wolves.",
            "Better to cook in a furnace, smoker or campfire to make Cooked Chicken."
        ],
        description: "Raw Chicken is a food item obtained from chickens. While it can be eaten raw, it has a 30% chance of causing the Hunger status effect, making it less efficient and potentially harmful. It is primarily used to breed wolves or as a raw material to be cooked into Cooked Chicken, which provides much better nutritional value and has no negative effects."
    },
    "minecraft:rabbit": {
        id: "minecraft:rabbit",
        name: "Raw Rabbit",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source (better when cooked)",
            secondaryUse: "Ingredient for Rabbit Stew"
        },
        food: {
            hunger: 3,
            saturation: 1.8
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Rabbits"]
        },
        specialNotes: [
            "Dropped by rabbits when they die.",
            "Can be cooked into Cooked Rabbit for better nutrition.",
            "Used as an ingredient in Rabbit Stew.",
            "Can be used to breed and heal tamed wolves."
        ],
        description: "Raw Rabbit is a food item obtained by killing rabbits. It provides 3 hunger points and 1.8 saturation. While it can be eaten raw, its maximum potential is reached when cooked into Cooked Rabbit or used as a key ingredient in Rabbit Stew. Like other raw meats, it is also useful for breeding and healing tamed wolves."
    },
    "minecraft:tropical_fish": {
        id: "minecraft:tropical_fish",
        name: "Tropical Fish",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source",
            secondaryUse: "Taming and breeding cats and ocelots"
        },
        food: {
            hunger: 1,
            saturation: 0.2
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained via fishing", "Dropped by Tropical Fish mobs"]
        },
        specialNotes: [
            "Cannot be cooked in a furnace, smoker, or campfire.",
            "Dropped by tropical fish mobs.",
            "Used to feed and breed cats and ocelots.",
            "Comes in many varieties in the world, but the item form is singular."
        ],
        description: "Tropical Fish is a food item obtained by killing tropical fish or through fishing. Unlike cod or salmon, it cannot be cooked, making it a relatively poor food source for players with only 1 hunger point and 0.2 saturation. Its primary utility is for taming and breeding cats or gaining the trust of ocelots in Bedrock Edition. It is commonly found in warm ocean biomes."
    }
};
