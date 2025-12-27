// Pocket Wikipedia Foundation - Neutral Mobs Data
// Contains data for neutral mob types

/**
 * Neutral mobs data registry
 * @type {Object.<string, import('../mob_types').MobDetails>}
 */
export const neutralMobs = {
    "minecraft:enderman": {
        id: "minecraft:enderman",
        name: "Enderman",
        health: 40,
        stats: {
            attackDamage: 7,
            movementSpeed: 0.3
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Most Overworld biomes", "The Nether", "The End"],
            lightLevel: "0-7 (Overworld), Any (End)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Teleports when hit by projectiles or water",
            "Becomes hostile when looked at in the eyes",
            "Can pick up and place blocks",
            "Damaged by water and rain",
            "Immune to projectiles due to teleportation",
            "Makes distinctive vwooping sounds"
        ],
        drops: [
            { item: "Ender Pearl", chance: "0-1" },
            { item: "Block", chance: "If carrying one" }
        ],
        description: "Endermen are tall, mysterious neutral mobs that can teleport and pick up blocks. They are normally passive but become hostile if a player looks at their face or attacks them. Endermen are damaged by water and rain, causing them to teleport away rapidly. They drop ender pearls, which are essential for locating and accessing The End dimension."
    },
    "minecraft:spider": {
        id: "minecraft:spider",
        name: "Spider",
        health: 16,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Most Overworld biomes"],
            lightLevel: "0-7 (Hostile), 12+ (Neutral)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Neutral in daylight (light level 12+), hostile in darkness",
            "Can climb any block including fences and walls",
            "Moves faster when hostile",
            "Jumps at players to attack",
            "Can fit through 1-block gaps",
            "Unaffected by cobwebs",
            "Glowing eyes always visible, even when invisible",
            "Small chance to spawn with potion effects on hard difficulty"
        ],
        drops: [
            { item: "String", chance: "0-2" },
            { item: "Spider Eye", chance: "0-1" }
        ],
        description: "Spiders are neutral mobs that become hostile in low light conditions. During the day or in bright areas (light level 12+), they are passive and will not attack unless provoked. At night or in darkness, they become hostile and pursue players. Spiders are unique in their ability to climb any vertical surface, making them dangerous as they can attack from unexpected angles. They drop string and spider eyes, which are useful for crafting and brewing."
    }
};
