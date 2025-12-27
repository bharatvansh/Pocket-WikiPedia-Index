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
            "Passive mobs that live in villages",
            "Can trade with players using emeralds as currency",
            "Professions determine trade options and appearance",
            "Gain experience and unlock new trades as they work",
            "Run indoors during raids or at night",
            "Socialize with other villagers and share gossip",
            "Can be cured from zombie villager state with weakness + golden apple",
            "Iron Golems protect villagers from hostile mobs"
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
            "Aquatic mob that attacks hostile aquatic mobs",
            "Can be bred with buckets of tropical fish",
            "Can be led with leads and follow players holding tropical fish",
            "Plays dead when damaged, gaining regeneration for 10 seconds",
            "Dies after 5 minutes out of water",
            "Comes in 5 color variants: Leucistic (pink), Wild (brown), Gold, Cyan, and rare Blue (1 in 1200)",
            "Grants Regeneration I to players who help kill mobs it's fighting",
            "Attacks drowned, guardians, glow squids, squids, fish, and other aquatic hostile mobs"
        ],
        drops: [
            { item: "Experience", chance: "1 (when killed by player/tamed wolf)" }
        ],
        description: "Axolotls are passive aquatic mobs found exclusively in lush caves. They are the only mob that can breed underwater and have 5 color variants, with the rare blue variant having a 1 in 1200 spawn chance. Axolotls are unique helpers that fight hostile aquatic mobs like drowned and guardians. When a player kills a mob that an axolotl is fighting, the player receives Regeneration I for 5 seconds per axolotl, making them valuable allies for underwater exploration. Axolotls can play dead when damaged, recovering health and becoming temporarily immune to enemy attacks. They must be kept in water as they die after 5 minutes on land."
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
            "Flying passive mob that collects items and delivers them to players",
            "Give it an item and it will find and collect dropped items of the same type within 32 blocks",
            "Delivers collected items to the player who gave it the item",
            "Follows players within 64 blocks even without line of sight",
            "Dances to note blocks when a disc is playing nearby",
            "Cannot be harmed by the player who gave it an item",
            "Regenerates 2 health per second when damaged",
            "Holds one stack of items (usually 64) plus the item it was given",
            "Spawns in cages at Woodland Mansions and Pillager Outposts",
            "Cannot open doors or pass through solid blocks",
            "Ignores item enchantments, names, and items in shulker boxes"
        ],
        drops: [
            { item: "Item held", chance: "If holding" },
            { item: "Experience", chance: "1-3" }
        ],
        description: "Allays are flying passive mobs introduced in the Wild Update that collect and deliver items for players. When given an item, an allay will fly around searching for dropped items of the same type within a 32-block radius and deliver them to the player. Allays follow their assigned player from up to 64 blocks away, even through walls, making them excellent automated item collectors for farms. They dance happily when near active note blocks playing music discs. Allays spawn in cages at woodland mansions and pillager outposts. They cannot be harmed by the player who assigned them an item and regenerate health quickly when damaged. Their ability to automate item collection makes them invaluable for farming and sorting operations."
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
            "Can jump up to 8 blocks high, higher than most mobs",
            "Takes 5 less damage from falling than other mobs",
            "Uses long tongue to eat small slimes and small magma cubes",
            "Eating small magma cubes produces froglights (Pearlescent, Verdant, or Ochre depending on frog variant)",
            "Can be bred with slimeballs",
            "Grows from tadpoles, which are spawned by frogs",
            "Three variants determined by biome where tadpole grew up: Temperate (orange), Warm (white), and Cold (green)",
            "Prefers jumping on lily pads and big dripleaves",
            "Swims naturally in water bodies",
            "Can jump into boats and minecarts"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Frogs are passive mobs introduced in the Wild Update that inhabit swamp and mangrove swamp biomes. They are excellent jumpers, capable of leaping up to 8 blocks high and taking significantly reduced fall damage. Frogs use their long tongues to eat small slimes and small magma cubes—when they eat a small magma cube, it produces a froglight, a decorative light block that comes in three colors: Pearlescent (from warm frogs), Verdant (from cold frogs), and Ochre (from temperate frogs). Frogs come in three variants determined by the biome temperature where their tadpole stage matured. They can be bred using slimeballs and spawn naturally in groups of 2-5. Their unique ability to convert magma cubes into froglights makes them valuable for farming light sources, while their jumping behavior adds life to swamp environments."
    }
};
