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
                lightLevel: "0-7 (Overworld)", "Any (End)",
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
        }
    };

    if (mobData[mobId]) {
        return mobData[mobId];
    }

    throw new Error(`Mob details not found for: ${mobId}`);
}
