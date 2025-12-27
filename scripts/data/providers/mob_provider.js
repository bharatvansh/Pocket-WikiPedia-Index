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
                "Blind - relies on sound and vibrations to detect players",
                "Detects vibrations from movement, mining, and other actions",
                "Can be distracted by throwing projectiles",
                "Emerges from the ground when sculk shriekers activate",
                "Deals massive melee damage that bypasses armor",
                "Has a powerful sonic boom ranged attack",
                "Becomes increasingly agitated with continued disturbance",
                "Despawns after 60 seconds of calm"
            ],
            drops: [
                { item: "Sculk Catalyst", chance: "1" }
            ],
            description: "The Warden is the strongest hostile mob in Minecraft, found exclusively in the Deep Dark biome. It is completely blind and hunts using vibrations and smell. The Warden has 500 health points and deals devastating damage that can kill even heavily armored players in a few hits. It cannot be outrun and its sonic boom attack ignores armor and shields. The best strategy is to avoid detection by sneaking and avoiding vibrations."
        },
        "minecraft:villager": {
            id: "minecraft:villager",
            name: "Villager",
            health: 20,
            stats: {
                attackDamage: 0,
                movementSpeed: 0.5
            },
            classification: {
                type: "Passive",
                undead: false
            },
            spawning: {
                biomes: ["Villages in Plains", "Desert", "Savanna", "Taiga", "Snowy Tundra", "Swamp", "Jungle"],
                lightLevel: "Any",
                groupSize: "Varies by village"
            },
            behaviorTraits: [
                "Trades items with players using emeralds",
                "Has 15 different profession types",
                "Gains experience and levels up trades through trading",
                "Requires a job site block to gain a profession",
                "Sleeps at night and wakes at dawn",
                "Gossips with other villagers about player actions",
                "Seeks shelter during rain",
                "Runs from zombies and other hostile mobs",
                "Breeds when given food (bread, carrots, potatoes, beetroots)"
            ],
            drops: [
                { item: "Nothing", chance: "N/A" }
            ],
            description: "Villagers are passive mobs that live in villages and can trade with players. Each villager can take on one of 15 professions, determined by nearby job site blocks. They offer unique trades for emeralds, and their trade options improve as they gain experience. Villagers are essential for obtaining many rare items like enchanted books, diamond gear, and special food items. Protecting villagers from zombies is important as they can be converted into zombie villagers."
        }
    };

    if (mobData[mobId]) {
        return mobData[mobId];
    }

    throw new Error(`Mob details not found for: ${mobId}`);
}
