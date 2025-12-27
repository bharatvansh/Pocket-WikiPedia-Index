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
        health: 24,
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
            lightLevel: "Any (dark underground water)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Amphibious - can survive both on land and in water",
            "Must return to water periodically or will dry out and die",
            "Can be picked up with a bucket and transported",
            "Bred with buckets of tropical fish",
            "Attacks drowned, guardians, squid, fish, and glow squid",
            "Ignores turtles, dolphins, and other axolotls",
            "Grants player Regeneration I for 100 ticks when player kills a mob it's fighting",
            "Can play dead when damaged to regenerate health and avoid targeting"
        ],
        drops: [
            { item: "None", chance: "N/A" }
        ],
        description: "Axolotls are amphibious passive mobs that spawn exclusively in the Lush Caves biome. They are unique in their ability to survive both on land and in water, though they must periodically return to water to avoid drying out. Axolotls can be picked up with a bucket and transported, and they breed with buckets of tropical fish. Despite their passive nature toward players, axolotls are fierce aquatic predators that attack drowned, guardians, and other hostile aquatic mobs. When a player kills a mob that an axolotl is fighting, the player receives a Regeneration buff, making axolotls valuable allies in underwater combat. Axolotls can also play dead when damaged to regenerate health and avoid enemy targeting."
    },
    "minecraft:bee": {
        id: "minecraft:bee",
        name: "Bee",
        health: 10,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Plains", "Sunflower Plains", "Flower Forest", "Meadow"],
            lightLevel: "Any",
            groupSize: "Naturally in bee nests"
        },
        behaviorTraits: [
            "Live in bee nests (natural) or beehives (crafted)",
            "Pollinate flowers to fill nests/hives with honey",
            "Harvest level 5 honey from hives with glass bottles or shears",
            "Must place campfire below hive to safely harvest without angering bees",
            "Attack in swarms when provoked or when hive is harvested without campfire",
            "Die after stinging an enemy",
            "Passive on Peaceful difficulty",
            "Follow players holding flowers"
        ],
        drops: [
            { item: "None", chance: "N/A" }
        ],
        description: "Bees are neutral flying arthropod mobs that live in bee nests or beehives and pollinate flowers. They spawn naturally in bee nests located in flower-rich biomes like Plains, Sunflower Plains, Flower Forest, and Meadow. Bees gather nectar from flowers and return to their hive to produce honey. Once a hive reaches honey level 5, players can harvest honey bottles or honeycombs. However, harvesting without a campfire underneath will anger the bees, causing them to swarm and attack. Bees die after stinging, making them formidable but short-lived defenders. On Peaceful difficulty, bees remain passive regardless of provocation."
    }
};
