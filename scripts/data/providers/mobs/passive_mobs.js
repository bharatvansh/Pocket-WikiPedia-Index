// Pocket Wikipedia Foundation - Passive Mobs Data
// Contains data for passive mob types

/**
 * Passive mobs data registry
 * @type {Object.<string, import('../mob_types').MobDetails>}
 */
export const passiveMobs = {
    "minecraft:pig": {
        id: "minecraft:pig",
        name: "Pig",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.25
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Forest", "Savanna", "Taiga"],
            lightLevel: "9+",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Follows players holding carrots",
            "Can be ridden with a saddle",
            "Controlled with carrot on a stick",
            "Transforms into Zombified Piglin when struck by lightning"
        ],
        drops: [
            { item: "Raw Porkchop", chance: "1-3" },
            { item: "Saddle", chance: "If equipped" }
        ],
        description: "Pigs are common passive mobs found in most biomes. They can be ridden when equipped with a saddle and controlled with a carrot on a stick. Pigs drop porkchops when killed, which can be cooked into food."
    },
    "minecraft:villager": {
        id: "minecraft:villager",
        name: "Villager",
        health: 20,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.2
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Desert", "Savanna", "Taiga", "Snowy Plains", "Snowy Taiga", "Meadow", "Sunflower Plains"],
            lightLevel: "Any",
            groupSize: "Villages"
        },
        behaviorTraits: [
            "Passive mobs that naturally spawn and live in villages.",
            "Trade goods and services with players using emeralds as currency.",
            "Workstations determine specific professions, appearances, and trade pools.",
            "Gain experience through trading to unlock higher-tier items and rewards.",
            "Retreat indoors to seek safety during nightfall or active raids.",
            "Can be cured from a zombie state using weakness and a golden apple.",
            "Naturally spawn Iron Golems to defend the village from hostile mobs."
        ],
        drops: [
            { item: "None", chance: "N/A" }
        ],
        description: "Villagers are passive NPCs that inhabit villages across the Overworld. They are essential to gameplay due to their trading system, which allows players to exchange emeralds for valuable items including enchanted gear, food, and resources. Each villager has a profession that determines their trades and appearance. Villagers work at job site blocks during the day and sleep at night. They can be converted to zombie villagers by zombie attacks, which can then be cured back to normal with a splash potion of weakness and a golden apple."
    },
    "minecraft:axolotl": {
        id: "minecraft:axolotl",
        name: "Axolotl",
        health: 14,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Lush Caves"],
            lightLevel: "Any (darkness preferred)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Attacks aquatic mobs including drowned, guardians, squids, and fish.",
            "Plays dead when damaged to recover health and stop enemy aggression.",
            "Grants Regeneration I to players who assist in killing its targets.",
            "Can be bred using buckets of tropical fish.",
            "Can be led with leads or lured with buckets of tropical fish.",
            "Dies after 5 minutes out of water.",
            "Has five color variants, including a rare blue type (1 in 1200)."
        ],
        drops: [
            { item: "Experience", chance: "1 (when killed by player/tamed wolf)" }
        ],
        description: "Axolotls are passive aquatic mobs found in lush caves. They come in five colors; the blue variant has a rare 1/1200 spawn rate. These allies attack hostile mobs like drowned and guardians. If a player kills a mob an axolotl is attacking, they receive Regeneration I. Axolotls can play dead to heal and become immune to damage. They must remain in water, dying after five minutes on land, and are the only mob that breeds underwater. Players can transport them using buckets."
    },
    "minecraft:allay": {
        id: "minecraft:allay",
        name: "Allay",
        health: 20,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.4
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Woodland Mansion", "Pillager Outpost"],
            lightLevel: "Any",
            groupSize: "1-3"
        },
        behaviorTraits: [
            "Spawns in cages at Woodland Mansions and Pillager Outposts",
            "Collects and delivers dropped items of the same type as the item it is given",
            "Searches for items within 32 blocks and follows players within 64 blocks",
            "Cannot be harmed by the player who gave it an item and regenerates health",
            "Dances to note blocks when a music disc is playing nearby",
            "Holds one full stack of items plus the reference item",
            "Ignores item enchantments, names, and items in shulker boxes"
        ],
        drops: [
            { item: "Item held", chance: "If holding" }
        ],
        description: "Allays are flying passive mobs that collect and deliver items. Give one an item, and it searches a 32-block radius for matching drops, following its owner from up to 64 blocks away. They can deliver items to players or nearby active note blocks, which also make them dance. Allays spawn in cages at woodland mansions and pillager outposts. They are immune to damage from the player who gave them an item and possess quick health regeneration. Their unique ability to automate item sorting and collection makes them highly valuable for complex farming operations."
    },
    "minecraft:frog": {
        id: "minecraft:frog",
        name: "Frog",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.25
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Swamp", "Mangrove Swamp"],
            lightLevel: "Any",
            groupSize: "2-5"
        },
        behaviorTraits: [
            "Passive mob that spawns naturally in swamp and mangrove swamp biomes",
            "Can jump up to 8 blocks high, significantly higher than most mobs",
            "Uses its tongue to consume small slimes and small magma cubes",
            "Eating small magma cubes produces froglights (Pearlescent, Verdant, or Ochre)",
            "Can be bred with slimeballs to produce frogspawn",
            "Grows from tadpoles which can be transported in buckets for biome manipulation",
            "Three variants (Temperate, Warm, and Cold) determined by the biome where the tadpole matured"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Frogs are passive mobs found in swamp and mangrove swamp biomes. They can jump up to 8 blocks high and take reduced fall damage. There are three variants: temperate, warm, and cold, determined by the biome where a tadpole matures. Frogs can be bred using slimeballs. They use their tongues to eat small slimes and small magma cubes; consuming the latter produces a froglight block. Froglight colors vary by variant: Pearlescent (warm), Verdant (cold), and Ochre (temperate). Their unique diet makes them essential for farming these decorative light sources."
    },
    "minecraft:camel": {
        id: "minecraft:camel",
        name: "Camel",
        health: 32,
        stats: {
            attackDamage: 0
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Desert Village"],
            lightLevel: "Any",
            groupSize: "1 (per village)"
        },
        behaviorTraits: [
            "Tall rideable passive mob that naturally spawns in desert villages",
            "One camel spawns in the center of each desert village during world generation",
            "Can be saddled and ridden by up to two players at once",
            "Has a dash ability while being ridden, letting it burst forward after a short charge",
            "Can sit down when idle; interacting causes it to stand",
            "Can be bred using cactus",
            "Its height makes it harder for many melee mobs to reach riders"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" },
            { item: "Saddle", chance: "If equipped" }
        ],
        description: "Camels are tall passive mobs that spawn in desert villages. Unlike most mounts, they can carry two players at the same time, making them a convenient way to travel together without needing two separate animals. When ridden, camels can perform a short charged dash to quickly reposition or cross gaps, and their height often keeps riders safely above the reach of many ground-based melee attacks. Camels can be bred with cactus, and a saddle is required to ride them."
    },
    "minecraft:armadillo": {
        id: "minecraft:armadillo",
        name: "Armadillo",
        health: 12,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.14
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Savanna", "Savanna Plateau", "Windswept Savanna", "Badlands", "Eroded Badlands", "Wooded Badlands"],
            lightLevel: "7+",
            groupSize: "1-4 (varies by biome)"
        },
        behaviorTraits: [
            "Passive mob that naturally spawns in savanna and badlands biomes",
            "Rolls up when threatened, becoming more resistant to damage",
            "Spiders and cave spiders run away from armadillos",
            "Can be bred using spider eyes (breeding has a cooldown)",
            "Can be brushed with a brush to knock off an armadillo scute",
            "Adults periodically shed an armadillo scute about every 5–10 minutes",
            "Armadillo scutes are used to craft wolf armor"
        ],
        drops: [
            { item: "Armadillo Scute", chance: "1 (every 5–10 minutes; also from brushing)" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf; adults)" }
        ],
        description: "Armadillos are passive overworld animals that protect themselves by curling into a ball when danger gets too close. Their presence has a practical perk: spiders and cave spiders will avoid armadillos, making them a natural deterrent in the wild. The armadillo’s most important resource is the armadillo scute, which can be brushed off or shed over time and is used to craft wolf armor—an upgrade that helps keep your canine companions safer in combat."
    },
    "minecraft:sniffer": {
        id: "minecraft:sniffer",
        name: "Sniffer",
        health: 14,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.1
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Warm Ocean Ruins (Sniffer Eggs in suspicious sand)", "Player-bred (egg laid as an item)"],
            lightLevel: "Any",
            groupSize: "N/A (hatches from Sniffer Egg)"
        },
        behaviorTraits: [
            "Ancient passive mob that cannot spawn naturally; it must be hatched from a sniffer egg",
            "Sniffer eggs are obtained by brushing suspicious sand in warm ocean ruins",
            "Tempted and bred using torchflower seeds; breeding produces a sniffer egg item",
            "Occasionally sniffs and digs in dirt-like blocks to find ancient plant items",
            "Can dig up torchflower seeds and pitcher pods, letting players grow torchflowers and pitcher plants"
        ],
        drops: [
            { item: "Torchflower Seeds", chance: "Occasionally dug up while sniffing" },
            { item: "Pitcher Pod", chance: "Occasionally dug up while sniffing" },
            { item: "Sniffer Egg", chance: "Laid when breeding two sniffers" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf; adults)" }
        ],
        description: "Sniffers are massive, gentle creatures that bring a bit of archaeology into survival gameplay. They don’t appear through normal spawning—players must recover sniffer eggs from suspicious sand in warm ocean ruins (or breed existing sniffers) and hatch them. Once grown, sniffers occasionally stop to sniff the ground and dig up rare plant items like torchflower seeds and pitcher pods, allowing players to cultivate unique decorative plants."
    },
    "minecraft:chicken": {
        id: "minecraft:chicken",
        name: "Chicken",
        health: 4,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.25
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Forest", "Jungle", "Taiga", "Swamp"],
            lightLevel: "7+",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Lays eggs every 5-10 minutes",
            "Slow falls by flapping wings (immune to fall damage)",
            "Follows players holding seeds",
            "Can be bred with seeds",
            "Hunted by ocelots and foxes"
        ],
        drops: [
            { item: "Raw Chicken", chance: "1" },
            { item: "Feather", chance: "0-2" },
            { item: "Cooked Chicken", chance: "If killed by fire" }
        ],
        description: "Chickens are common passive mobs found in grassy biomes. They are the main source of eggs, feathers, and chicken meat. Chickens have the unique ability to flap their wings to fall slowly, preventing fall damage. They lay eggs periodically, which can be thrown to spawn baby chickens. They can be bred using various types of seeds."
    },
    "minecraft:sheep": {
        id: "minecraft:sheep",
        name: "Sheep",
        health: 8,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.23
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Forest", "Taiga", "Meadows", "Snowy Plains"],
            lightLevel: "7+",
            groupSize: "2-3 (world generation), 2-4 (wandering)"
        },
        behaviorTraits: [
            "Follows players holding wheat and can be bred to produce offspring",
            "Can be dyed in 16 different colors using various dyes",
            "Regrows wool after eating grass blocks or tall grass",
            "Eating grass causes the block beneath them to turn into dirt",
            "Baby sheep inherit parent colors with a mechanic for color mixing",
            "Most commonly spawns in white, gray, light gray, black, or brown",
            "Extremely rare pink sheep have a 0.164% chance to spawn naturally"
        ],
        drops: [
            { item: "White Wool", chance: "1 (if not sheared)" },
            { item: "Wool (by shearing)", chance: "1-3" },
            { item: "Raw Mutton", chance: "1-2" },
            { item: "Colored Wool", chance: "Matches sheep's dye color" },
            { item: "Experience", chance: "1-3 (if killed by player/tamed wolf)" }
        ],
        description: "Sheep are essential passive mobs for early-game wool and food resources. They spawn in most grassy biomes in groups and provide wool through shearing (recommended) or killing. Sheep can be dyed 16 different colors, making them valuable for building and decoration. They regrow wool by eating grass blocks or tall grass, turning the grass into dirt blocks beneath them. Sheep are crucial for crafting beds, the first night survival essential item, and provide mutton for food. Rare variants include naturally spawning pink sheep with 0.164% spawn rate."
    },
    "minecraft:cow": {
        id: "minecraft:cow",
        name: "Cow",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.2
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Forest", "Meadows", "Savanna", "Jungle"],
            lightLevel: "9+",
            groupSize: "2-3 (world generation)"
        },
        behaviorTraits: [
            "Follows players holding wheat or similar foods",
            "Can be milked using a bucket for unlimited milk",
            "Can be bred with wheat to produce baby cows",
            "Baby cows take 20 minutes to grow (can be accelerated with wheat)",
            "Occasionally walk slowly while mooing",
            "Avoid cliffs and dangerous drops",
            "Can be attached to leads for transport"
        ],
        drops: [
            { item: "Raw Beef", chance: "1-3" },
            { item: "Leather", chance: "0-2" },
            { item: "Cooked Beef", chance: "If killed by fire" },
            { item: "Milk Bucket", chance: "When milked with bucket" },
            { item: "Experience", chance: "1-3 (if killed by player/tamed wolf)" }
        ],
        description: "Cows are fundamental passive mobs for leather and food resources, essential for early-game survival. They spawn commonly in grassy biomes and provide leather for armor and item crafting, as well as beef for food. Cows can be milked infinite times using buckets, providing milk that removes all status effects when consumed. They can be bred with wheat to establish sustainable farms. The brown mooshroom variant spawns exclusively on mushroom islands and provides mushroom stew when milked with a bowl. Cows are one of the most valuable early-game passive mobs for food, leather, and milk resources."
    },
    "minecraft:goat": {
        id: "minecraft:goat",
        name: "Goat",
        health: 10,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Mountains", "Meadows", "Snowy Slopes", "Frozen Peaks", "Jagged Peaks"],
            lightLevel: "7+",
            groupSize: "2-3"
        },
        behaviorTraits: [
            "Neutral mob that rams stationary players and mobs when provoked or after a few seconds",
            "Can jump up to 10 blocks high to easily navigate steep mountains and obstacles",
            "Drops goat horns when ramming into solid blocks such as stone or logs",
            "Can be bred with wheat to produce baby goats",
            "Exists as a rare screaming variant which is much more aggressive and rams more frequently",
            "Screaming goats make loud and distinctive noises when preparing to ram targets",
            "Intelligently avoids walking off cliffs or taking dangerous fall damage"
        ],
        drops: [
            { item: "Goat Horn", chance: "When ramming into solid blocks" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Goats are agile neutral mobs found in mountain biomes. They are skilled climbers capable of jumping up to 10 blocks high. While generally passive, they occasionally ram players or other mobs. If a goat hits a solid block while ramming, it may drop a goat horn, used for sound signaling. Goats have two variants: the common goat and the rare, noisy screaming goat. They can be bred using wheat. Their unique jumping and ramming behaviors make them a distinct part of high-altitude environments."
    },
    "minecraft:glow_squid": {
        id: "minecraft:glow_squid",
        name: "Glow Squid",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.2
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Ocean", "Deep Ocean", "Lukewarm Ocean", "Deep Lukewarm Ocean", "Warm Ocean"],
            lightLevel: "0 and Below Y-level 30",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Passive aquatic mob that glows in the dark",
            "Swims in groups and emits light particles",
            "Cannot be bred by players",
            "Drops glow ink sacs when killed",
            "Glow is purely visual and does not provide actual light illumination",
            "Can be led with leads",
            "Does not attack players or other mobs"
        ],
        drops: [
            { item: "Glow Ink Sac", chance: "1-3" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Glow Squids are passive aquatic mobs that emit a soft glow with beautiful light particles. They spawn in various ocean biomes in complete darkness (light level 0) below Y-level 30 and are completely harmless. When killed, they drop glow ink sacs, which can be used to craft glow item frames and glow signs. The glow is purely visual and aesthetic, providing no actual light illumination to the environment. Glow squids cannot be bred by players but can be led with leads, making them easy to transport. They are primarily decorative mobs that add visual interest to underwater environments."
    },
    "minecraft:strider": {
        id: "minecraft:strider",
        name: "Strider",
        health: 20,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.16
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Nether Wastes", "Soul Sand Valley", "Crimson Forest", "Warped Forest", "Basalt Deltas"],
            lightLevel: "Any",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Naturally spawn on lava in the Nether",
            "Immune to fire and lava damage",
            "Can walk on lava surfaces",
            "Ridable with a saddle and controlled with warped fungus on a stick",
            "Breed with and follow players holding warped fungus",
            "Adults can be ridden while babies cannot",
            "Shiver and move slower when out of lava for extended periods"
        ],
        drops: [
            { item: "String", chance: "2-5" },
            { item: "Saddle", chance: "If equipped" }
        ],
        description: "Striders are passive mobs native to the Nether that can walk on lava. They are immune to fire and lava damage, making them the primary way to traverse lava oceans. Players can ride adult striders using a saddle and control them with a warped fungus on a stick. When outside of lava, striders change color to purple, shiver, and move much slower. They can be bred using warped fungus, and babies sometimes spawn riding on an adult's head. Their ability to safely cross molten hazards makes them invaluable for Nether exploration."
    },
    "minecraft:tadpole": {
        id: "minecraft:tadpole",
        name: "Tadpole",
        health: 6,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.1
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: [],
            lightLevel: "Any",
            groupSize: "2-5 (from frogspawn)"
        },
        behaviorTraits: [
            "Baby form of frogs that swim aimlessly in water",
            "Flops around on land and seeks water to survive",
            "Follows players holding slimeballs",
            "Can be picked up and transported in water buckets",
            "Hunted by axolotls in aquatic environments",
            "Grows into different frog variants based on biome",
            "Takes 20 minutes to mature into a frog"
        ],
        drops: [
            { item: "None", chance: "Baby animals don't drop items" }
        ],
        description: "Tadpoles are the aquatic baby form of frogs that hatch from frogspawn. They swim aimlessly in water and flop around on land while seeking water to survive. Tadpoles follow players holding slimeballs and can be collected in water buckets for transport. They are hunted by axolotls and take 20 minutes to grow into adult frogs, with their final variant determined by the biome they mature in. Tadpoles are essential for frog breeding and provide a unique aquatic life cycle in Minecraft."
    },
    "minecraft:tropical_fish": {
        id: "minecraft:tropical_fish",
        name: "Tropical Fish",
        health: 3,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.25
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Warm Ocean", "Lukewarm Ocean", "Deep Lukewarm Ocean", "Lush Caves", "Mangrove Swamp"],
            lightLevel: "Any",
            groupSize: "Common: 3-5; Random: 1-3"
        },
        behaviorTraits: [
            "Colorful fish that swim in schools",
            "Can be collected and transported in water buckets",
            "Cannot be bred by players",
            "Swims against water currents",
            "Dies when out of water after flopping around",
            "Vulnerable to Impaling enchantment",
            "Comes in 3,072 different color and pattern variants"
        ],
        drops: [
            { item: "Tropical Fish", chance: "1" },
            { item: "Bone", chance: "25%" }
        ],
        description: "Tropical fish are colorful passive mobs found in warm ocean biomes. They swim in schools and come in 3,072 different color and pattern variants. Players can collect them in water buckets for transport or aquariums. Tropical fish cannot be bred and only spawn naturally in designated biomes. They provide a vibrant aquatic ecosystem and can be used for decoration or as a food source. When killed, they drop tropical fish items and have a 25% chance to drop bone."
    },
    "minecraft:pufferfish": {
        id: "minecraft:pufferfish",
        name: "Pufferfish",
        health: 3,
        stats: {
            attackDamage: 1,
            movementSpeed: 0.2
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Ocean", "Deep Ocean", "Cold Ocean", "Deep Cold Ocean", "Lukewarm Ocean", "Deep Lukewarm Ocean", "Warm Ocean"],
            lightLevel: "Any",
            groupSize: "1-3"
        },
        behaviorTraits: [
            "Swims alone unlike other fish that school",
            "Inflates when threatened by players or mobs",
            "Inflicts Poison effect when touched while inflated",
            "Can be collected in water buckets for transport",
            "Hunted by axolotls, nautiluses, and zombie nautiluses",
            "Cannot be bred by players",
            "Dies when out of water after flopping around"
        ],
        drops: [
            { item: "Pufferfish", chance: "1" },
            { item: "Bone Meal", chance: "5%" }
        ],
        description: "Pufferfish are unique passive mobs found in various ocean biomes. Unlike other fish, they swim alone and have a defensive mechanism where they inflate when threatened. When inflated, they inflict the Poison effect on players and mobs that touch them. Pufferfish can be collected in water buckets and are hunted by axolotls. They cannot be bred and only spawn naturally. When killed, they drop pufferfish items and occasionally bone meal. Their distinctive appearance and defensive behavior make them an interesting addition to aquatic ecosystems."
    },
    "minecraft:mooshroom": {
        id: "minecraft:mooshroom",
        name: "Mooshroom",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.25
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Mushroom Fields"],
            lightLevel: "9+",
            groupSize: "4-8"
        },
        behaviorTraits: [
            "Rare variant of cow found exclusively in Mushroom Fields",
            "Has red mushroom caps growing on its back",
            "Can be sheared to obtain red mushrooms and become regular cow",
            "Can be milked for mushroom stew when using a bowl",
            "Cannot be sheared if it has a baby mooshroom nearby",
            "Breeds like normal cows with wheat",
            "Can be cured from suspicious stew effects"
        ],
        drops: [
            { item: "Raw Beef", chance: "1-3" },
            { item: "Leather", chance: "0-1" },
            { item: "Red Mushroom", chance: "0-2" }
        ],
        description: "Mooshrooms are rare variants of cows found exclusively in Mushroom Fields biomes. These mushroom-covered mobs provide beef and leather, but offer a unique benefit: milking them with a bowl yields mushroom stew. Players can shear a mooshroom to obtain red mushrooms, which transforms the mob into a regular cow. They behave like cows and are bred with wheat. If struck by lightning, a red mooshroom becomes a brown variant, which can produce suspicious stew if fed a flower before milking. They are a prized discovery for players seeking infinite food sources."
    },
    "minecraft:wandering_trader": {
        id: "minecraft:wandering_trader",
        name: "Wandering Trader",
        health: 20,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.3
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["All Overworld biomes"],
            lightLevel: "Any",
            groupSize: "1 (with 2 Trader Llamas)"
        },
        behaviorTraits: [
            "Randomly spawns near players in the Overworld",
            "Offers 6 random trades from a pool of exotic items",
            "Drinks a Potion of Invisibility at night to hide from mobs",
            "Drinks Milk to remove the invisibility effect at dawn",
            "Always accompanied by two leashed Trader Llamas",
            "Will drink a Potion of Healing if damaged",
            "Does not naturally despawn if named with a name tag"
        ],
        drops: [
            { item: "Lead", chance: "0-2" },
            { item: "Milk Bucket", chance: "If killed while drinking" },
            { item: "Potion of Invisibility", chance: "If killed while drinking (rare)" }
        ],
        description: "The Wandering Trader is a passive mob that periodically spawns near players, accompanied by two leashed Trader Llamas. Unlike regular villagers, they do not belong to a village and offer unique items from various biomes, such as coral blocks, dye, and rare saplings. At nightfall, they drink a Potion of Invisibility to protect themselves from hostile mobs, only revealing themselves again at daybreak. They are a valuable source of rare items for players who prefer to stay in one location."
    },
    "minecraft:rabbit": {
        id: "minecraft:rabbit",
        name: "Rabbit",
        health: 3,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.3
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Desert", "Flower Forest", "Taiga", "Plains", "Meadow", "Snowy Plains", "Frozen Ocean", "Frozen River", "Snowy Beach", "Snowy Slopes", "Cherry Grove", "Grove"],
            lightLevel: "7+",
            groupSize: "1-3 (varies by biome)"
        },
        behaviorTraits: [
            "Hops around randomly with fast, erratic movement patterns",
            "Follows players holding carrots, golden carrots, or dandelions",
            "Can be bred with carrots, golden carrots, or dandelions",
            "Avoids wolves and foxes which hunt them",
            "Has multiple color variants based on biome (gold, white, brown, black, salt, white splotched)",
            "Jumps up to 2 blocks high while moving",
            "Moves significantly faster than most ground mobs"
        ],
        drops: [
            { item: "Raw Rabbit", chance: "1" },
            { item: "Rabbit Hide", chance: "0-1 (50%)" },
            { item: "Rabbit's Foot", chance: "0-1 (10%, by player/tamed wolf)" },
            { item: "Cooked Rabbit", chance: "If killed by fire" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Rabbits are small, fast-moving passive mobs found in various biomes across the Overworld. They have six color variants determined by their spawning biome: gold in deserts, white in snowy areas, and mixtures of brown, black, salt, and white splotched elsewhere. Their quick hopping behavior makes them difficult to catch, but they can be bred using carrots, golden carrots, or dandelions. Rabbits drop valuable items including rabbit hide for leather crafting and rabbit's feet for brewing, making them useful for players seeking renewable resources."
    },
    "minecraft:bat": {
        id: "minecraft:bat",
        name: "Bat",
        health: 6,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.15
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Caves", "Dark Overworld areas"],
            lightLevel: "0-7 (underground)",
            groupSize: "1-2"
        },
        behaviorTraits: [
            "Flying ambient mob that spawns in dark areas underground",
            "Hangs upside down from solid blocks when idle",
            "Flies around aimlessly and squeaks randomly",
            "Flies away when player approaches, even if invisible",
            "Cannot be bred, tamed, or led with leads",
            "Does not drop any items or experience",
            "Despawns when over 32 blocks away from player"
        ],
        drops: [
            { item: "None", chance: "Ambient mob, no drops" }
        ],
        description: "Bats are small flying ambient mobs that spawn exclusively in dark underground areas and caves. They hang upside down from solid blocks when idle and fly around aimlessly when active, occasionally squeaking. Despite their peaceful nature, bats immediately flee when players approach, even invisible ones. They cannot be bred, tamed, or transported with leads or boats. Unlike most mobs, bats do not drop any items or experience when killed, making them purely decorative creatures that add atmosphere to cave environments."
    },
    "minecraft:squid": {
        id: "minecraft:squid",
        name: "Squid",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.2
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Ocean", "Deep Ocean", "Frozen Ocean", "Deep Frozen Ocean", "Cold Ocean", "Deep Cold Ocean", "Lukewarm Ocean", "Deep Lukewarm Ocean", "Warm Ocean", "River", "Frozen River"],
            lightLevel: "Any",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Passive aquatic mob found in ocean and river biomes",
            "Swims around and produces ink clouds when attacked",
            "Not attracted to light and does not deliberately interact with players",
            "Sometimes beaches itself and suffocates on river banks and ocean beaches",
            "Cannot be bred by players",
            "Baby squid only found through natural spawning",
            "Growth cannot be sped up and takes 20 minutes to mature"
        ],
        drops: [
            { item: "Ink Sac", chance: "1-3" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Squid are passive aquatic mobs found in all ocean biomes, as well as river and frozen river biomes. They spawn in groups of 2 to 4 in oceans and exactly 2 in rivers. Squid swim peacefully and do not interact with players unless attacked, at which point they release a cloud of ink as a defense mechanism. They cannot be bred, and babies only spawn naturally. Occasionally, squid may beach themselves on river banks or ocean shores and suffocate. They drop ink sacs when killed, which are used for crafting black dye and making books."
    },
    "minecraft:horse": {
        id: "minecraft:horse",
        name: "Horse",
        health: 22,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.225
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Savanna", "Windswept Savanna", "Savanna Plateau", "Sunflower Plains"],
            lightLevel: "7+",
            groupSize: "2-6"
        },
        behaviorTraits: [
            "Rideable passive mob that can be tamed and equipped with saddles and armor",
            "Spawns in herds with the same color but different markings",
            "Can be bred using golden apples or golden carrots",
            "20% of spawned horses are foals that take 20 minutes to mature",
            "Has customizable stats including health (15-30), speed, and jump height",
            "Cannot be bred with donkeys to produce mules (use horse + donkey instead)",
            "Can be equipped with saddles for riding and various armor types for protection",
            "Safe fall distance of 7 blocks (much higher than most mobs)"
        ],
        drops: [
            { item: "Leather", chance: "0-2" },
            { item: "Raw Beef (steak if cooked)", chance: "1-3 (when killed)" }
        ],
        description: "Horses are versatile rideable passive mobs that spawn naturally in plains, savanna, and related biomes. They are essential for fast transportation in Minecraft, with variable stats including health (15-30), movement speed, and jumping ability. Wild horses can be tamed using a saddle and provide the fastest land-based transportation in the game. They spawn in herds of 2-6 with matching colors but varying markings. Breeding horses with golden apples or carrots allows players to create offspring with potentially better stats. Horses can be equipped with armor and saddles, making them both practical and stylish mounts for long-distance travel and exploration."
    },
    "minecraft:mule": {
        id: "minecraft:mule",
        name: "Mule",
        health: 20,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.225
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Cannot spawn naturally"],
            lightLevel: "N/A",
            groupSize: "N/A"
        },
        behaviorTraits: [
            "Hybrid passive mob bred from horse and donkey parents",
            "Cannot breed with other mules or produce offspring",
            "Has unique inventory with 15 slots for transporting items",
            "Tamed with saddles for riding, like horses and donkeys",
            "Retains the speed of its horse parent and the patience of its donkey parent",
            "20% of mule spawn eggs produce foals instead of adults",
            "Safe fall distance of 7 blocks and takes half normal fall damage",
            "Slowly regenerates health over time"
        ],
        drops: [
            { item: "Leather", chance: "0-2" },
            { item: "Raw Mutton (cooked mutton if killed by fire)", chance: "1-4 (when killed)" }
        ],
        description: "Mules are sterile hybrid passive mobs created by breeding a horse with a donkey, inheriting the best traits from both parents. They combine the speed and strength of horses with the patience and carrying capacity of donkeys. Unlike horses, mules cannot breed with other mules, making them unique hybrid creatures that must be created through specific breeding combinations. They have an expanded inventory system with 15 slots, making them excellent pack animals for long journeys and storage. Mules are slower than horses but more patient, making them ideal for transportation of goods and materials across vast distances. Their unique hybrid nature and practical inventory system make them invaluable for players who need both speed and storage capacity."
    }
};
