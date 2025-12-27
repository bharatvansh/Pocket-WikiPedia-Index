// Pocket Wikipedia Foundation - Hostile Mobs Data
// Contains data for hostile mob types

/**
 * Hostile mobs data registry
 * @type {Object.<string, import('../mob_types').MobDetails>}
 */
export const hostileMobs = {
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
    "minecraft:blaze": {
        id: "minecraft:blaze",
        name: "Blaze",
        health: 20,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.23
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["Nether Fortresses"],
            lightLevel: "0-11",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Shoots fireballs from a distance that ignite targets",
            "Floats and can ascend when attacked or moving upward",
            "Immune to fire and lava damage",
            "Damaged by water and snowballs",
            "Can pass through nether portal blocks",
            "Emits smoke particles when not attacking",
            "Fireballs have a cooldown between shots"
        ],
        drops: [
            { item: "Blaze Rod", chance: "0-1" }
        ],
        description: "Blazes are hostile mobs found exclusively in Nether Fortresses. They float in the air and attack players by shooting fireballs from a distance. Blazes are immune to fire and lava but take damage from water and snowballs. Their fireballs can ignite players and blocks, making them dangerous opponents in the fiery Nether environment. Blaze rods dropped by these mobs are essential for brewing potions and crafting Eyes of Ender, making them a valuable resource for progression."
    },
    "minecraft:guardian": {
        id: "minecraft:guardian",
        name: "Guardian",
        health: 30,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.2
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Ocean Monuments"],
            lightLevel: "Any",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Shoots laser beam that charges for 3 seconds before firing",
            "Extends spikes when attacking, dealing thorns-like damage to attackers",
            "Cannot move while charging laser attack",
            "Laser has maximum range of about 15 blocks",
            "Naturally hostile towards players, dolphins, squids, axolotls, and glow squids",
            "Can survive outside water but flops around",
            "Defends ocean monuments with elder guardians"
        ],
        drops: [
            { item: "Prismarine Shard", chance: "0-2" },
            { item: "Prismarine Crystal", chance: "0-1" },
            { item: "Raw Cod", chance: "0-1" },
            { item: "Random Fish", chance: "2.5%" }
        ],
        description: "Guardians are hostile aquatic mobs that spawn exclusively in and around ocean monuments. They attack using a laser beam that charges for approximately 3 seconds before firing, dealing significant damage. Guardians have a unique defense mechanism where they extend spikes when attacking, damaging attackers similar to the Thorns enchantment. They cannot move while charging their laser, which can be exploited by players. Guardians drop prismarine materials and fish, making them valuable for underwater exploration and building. They work alongside elder guardians to protect ocean monuments from intruders."
    }
};
