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
    }
};
