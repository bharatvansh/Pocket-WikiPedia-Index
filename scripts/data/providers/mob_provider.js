// Pocket Wikipedia Foundation - Mob Content Provider
// Provides detailed mob information on demand

/**
 * @typedef {Object} MobDrop
 * @property {string} item - Item name
 * @property {string} [chance] - Drop chance
 */

/**
 * @typedef {Object} MobDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} health - Health points
 * @property {Object} [stats] - Combat stats
 * @property {number} [stats.attackDamage] - Attack damage
 * @property {number} [stats.movementSpeed] - Movement speed
 * @property {Object} [classification] - Mob classification
 * @property {string} [classification.type] - Hostile/Passive/Neutral
 * @property {boolean} [classification.undead] - Whether undead
 * @property {Object} [spawning] - Spawning conditions
 * @property {string[]} [spawning.biomes] - Spawn biomes
 * @property {string} [spawning.lightLevel] - Required light level
 * @property {string} [spawning.groupSize] - Group spawn size
 * @property {string[]} [behaviorTraits] - Behavior traits
 * @property {MobDrop[]} [drops] - Items dropped on death
 * @property {string} description - Detailed description
 */

/**
 * Get detailed information for a specific mob
 * @param {string} mobId
 * @returns {Promise<MobDetails>}
 */
export async function getMobDetails(mobId) {
    const mobData = {
        "minecraft:creeper": {
            id: "minecraft:creeper",
            name: "Creeper",
            health: 20,
            stats: {
                attackDamage: 49,
                movementSpeed: 0.25
            },
            classification: {
                type: "Hostile",
                undead: false
            },
            spawning: {
                biomes: ["Most Overworld biomes"],
                lightLevel: "0-7",
                groupSize: "1-4"
            },
            behaviorTraits: [
                "Silently approaches players",
                "Explodes when within 3 blocks",
                "Flees from cats and ocelots",
                "Can be ignited by flint and steel"
            ],
            drops: [
                { item: "Gunpowder", chance: "0-2" },
                { item: "Music Disc", chance: "If killed by Skeleton" }
            ],
            description: "Creepers are iconic hostile mobs that silently approach players and explode. They are known for their distinctive hissing sound before detonation. Creepers drop gunpowder when killed, which is essential for crafting TNT and fireworks."
        },
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
        "minecraft:zombie": {
            id: "minecraft:zombie",
            name: "Zombie",
            health: 20,
            stats: {
                attackDamage: 3,
                movementSpeed: 0.23
            },
            classification: {
                type: "Hostile",
                undead: true
            },
            spawning: {
                biomes: ["Most Overworld biomes"],
                lightLevel: "0-7",
                groupSize: "2-4"
            },
            behaviorTraits: [
                "Burns in sunlight unless wearing a helmet",
                "Can break wooden doors on Hard difficulty",
                "Can pick up items and armor",
                "Calls nearby zombies when attacked",
                "Baby zombies are faster and don't burn in sunlight"
            ],
            drops: [
                { item: "Rotten Flesh", chance: "0-2" },
                { item: "Iron Ingot", chance: "Rare (2.5%)" },
                { item: "Carrot", chance: "Rare (2.5%)" },
                { item: "Potato", chance: "Rare (2.5%)" },
                { item: "Equipped items/armor", chance: "If picked up" }
            ],
            description: "Zombies are common undead hostile mobs that spawn in dark areas throughout the Overworld. They burn in direct sunlight unless protected by a helmet or shade. Zombies attack by pursuing players and villagers, dealing melee damage. They can spawn with armor and weapons, and have a chance to drop useful items."
        },
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
        "minecraft:skeleton": {
            id: "minecraft:skeleton",
            name: "Skeleton",
            health: 20,
            stats: {
                attackDamage: 4,
                movementSpeed: 0.25
            },
            classification: {
                type: "Hostile",
                undead: true
            },
            spawning: {
                biomes: ["Most Overworld biomes", "Nether Fortresses"],
                lightLevel: "0-7",
                groupSize: "1-4"
            },
            behaviorTraits: [
                "Shoots arrows from up to 16 blocks away",
                "Burns in sunlight unless wearing a helmet or in shade",
                "Seeks shade during daytime",
                "Can pick up items and wear armor",
                "Strafe sideways while shooting at players",
                "Flee from wolves"
            ],
            drops: [
                { item: "Bone", chance: "0-2" },
                { item: "Arrow", chance: "0-2" },
                { item: "Bow", chance: "8.5% (increases with Looting)" },
                { item: "Equipped items/armor", chance: "If picked up" }
            ],
            description: "Skeletons are common undead hostile mobs that attack players with bows from a distance. They spawn in dark areas and burn in direct sunlight unless protected. Skeletons are excellent sources of bones and arrows, making them valuable for farming bonemeal and ammunition. They can spawn with enchanted bows and armor, making some variants more dangerous."
        },
        "minecraft:warden": {
            id: "minecraft:warden",
            name: "Warden",
            health: 500,
            stats: {
                attackDamage: 30,
                movementSpeed: 0.3
            },
            classification: {
                type: "Hostile",
                undead: false
            },
            spawning: {
                biomes: ["Deep Dark"],
                lightLevel: "Any",
                groupSize: "1"
            },
            behaviorTraits: [
                "Completely blind, relies on vibrations and smell",
                "Detects movement and sounds within a large radius",
                "Performs powerful melee attacks that disable shields",
                "Unleashes sonic boom ranged attack that ignores armor and shields",
                "Emerges from the ground when summoned by sculk shriekers",
                "Cannot be outrun easily due to high movement speed",
                "Despawns if no vibrations detected for 60 seconds"
            ],
            drops: [
                { item: "Sculk Catalyst", chance: "1" }
            ],
            description: "The Warden is the most powerful hostile mob in Minecraft, found exclusively in the Deep Dark biome. With 500 health points, it has more health than any other naturally spawning mob. The Warden is completely blind but detects players through vibrations and smell. It deals devastating melee damage and can fire a sonic boom attack that pierces through armor and shields. The Warden is meant to be avoided rather than fought, encouraging stealth gameplay in ancient cities."
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
                biomes: ["Plains", "Desert", "Savanna", "Taiga", "Snowy Tundra"],
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

    if (mobData[mobId]) {
        return mobData[mobId];
    }

    throw new Error(`Mob details not found for: ${mobId}`);
}
