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
    "minecraft:breeze": {
        id: "minecraft:breeze",
        name: "Breeze",
        health: 30,
        stats: {
            attackDamage: 1
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Trial Chambers"],
            lightLevel: "Any",
            groupSize: "Varies (spawns from Trial Spawners)"
        },
        behaviorTraits: [
            "Agile hostile mob that appears in Trial Chambers",
            "Attacks by launching wind charges that deal low direct damage but strong knockback",
            "Direct-hit damage scales with difficulty (about 1 on Easy/Normal and 1.5 on Hard)",
            "Uses high jumps and quick repositioning to keep distance from melee attackers",
            "Wind charge impacts create a gust that can push entities and interact with blocks that respond to projectiles",
            "Most dangerous in enclosed rooms where knockback can push players into traps or off ledges"
        ],
        drops: [
            { item: "Breeze Rod", chance: "1-2 (increased by Looting)" }
        ],
        description: "Breezes are hostile mobs encountered in Trial Chambers. Rather than relying on heavy melee hits, a breeze fights with wind charges—projectiles that create a gust on impact, knocking targets back and disrupting positioning. Their mobility and knockback-focused attacks make them especially threatening in compact Trial Chamber arenas, where getting pushed into hazards can be more dangerous than the direct hit itself. Breezes drop breeze rods, a key material for Trial Chambers-related progression and crafting."
    },
    "minecraft:guardian": {
        id: "minecraft:guardian",
        name: "Guardian",
        health: 30,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Ocean Monument"],
            lightLevel: "Any (requires water)",
            groupSize: "Multiple"
        },
        behaviorTraits: [
            "Aquatic hostile mob that spawns in and around ocean monuments",
            "Attacks with a slow-charging laser beam that deals damage based on difficulty (4 on Easy, 6 on Normal, 9 on Hard)",
            "Has defensive spikes that inflict retaliatory damage when the guardian is hit by melee attacks (2 on Easy/Normal, 3 on Hard)",
            "Swims in abrupt charges, moving tail rapidly when active",
            "Spikes retract while swimming and extend when idle or on land",
            "Eye follows and stares at any nearby players, always looking directly at its target",
            "Cannot attack players under Invisibility potion effects (Java Edition) unless wearing armor",
            "Affected by the Impaling enchantment (Java Edition)",
            "Does not suffocate and can survive indefinitely out of water",
            "When out of water, hops erratically and makes loud squeaking sounds",
            "Attacks players, squid, glow squid, and axolotls within laser range",
            "Congregates around sea lantern blocks in ocean monuments",
            "Stationary guardians are pushed much faster by flowing water than other mobs"
        ],
        drops: [
            { item: "Prismarine Shard", chance: "0-2" },
            { item: "Prismarine Crystals", chance: "40% (increased by Looting)" },
            { item: "Raw Cod", chance: "40% (increased by Looting)" },
            { item: "Raw Salmon", chance: "2.5% (player kill only)" },
            { item: "Pufferfish", chance: "2.5% (player kill only)" },
            { item: "Tropical Fish", chance: "2.5% (player kill only)" },
            { item: "Cooked Cod", chance: "If killed while on fire" },
            { item: "Experience", chance: "10 (when killed by player/tamed wolf)" }
        ],
        description: "Guardians are aquatic hostile mobs that spawn exclusively in and around ocean monuments, serving as the primary defenders of these underwater structures. They are formidable opponents with two distinct attack modes: a slow-charging laser beam that deals significant damage (ranging from 4 to 9 points depending on difficulty) and defensive spikes that automatically retaliate against melee attackers. Guardians swim in abrupt, jerky charges when active, with their spikes retracted, and extend their spikes while idle or on land. Their distinctive eye tracks any nearby players constantly, making their targeting behavior apparent. Unlike most aquatic mobs, guardians do not suffocate out of water, though they become vulnerable and erratic on land, hopping helplessly while still able to use their laser attack. Guardians are valuable farming targets as they drop prismarine shards, prismarine crystals, and various types of fish. Their drops include rare fish variants like pufferfish and tropical fish when killed by players. The prismarine materials they drop are essential for crafting prismarine blocks, sea lanterns, and conduits. Guardians' laser attacks are unique in that they are affected by the Strength potion, despite being a ranged attack. When exploring ocean monuments, guardians present a significant challenge due to their numbers, damaging lasers, and defensive spikes, requiring careful preparation including appropriate armor, weapons, and possibly water breathing potions."
    },
    "minecraft:bogged": {
        id: "minecraft:bogged",
        name: "Bogged",
        health: 16,
        stats: {
            attackDamage: 3,
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["Swamp", "Mangrove Swamp", "Trial Chambers"],
            lightLevel: "0-7 (Swamps), Any (Trial Chambers)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Shoots poison arrows that inflict Poison for 4 seconds",
            "Fires slower than regular skeletons (3.5s cooldown)",
            "Burns in sunlight unless wearing a helmet or in shade",
            "Sinks in water but does not drown",
            "Fears wolves",
            "Can be sheared to drop mushrooms (reverts to skeleton appearance but stays Bogged)"
        ],
        drops: [
            { item: "Bone", chance: "0-2" },
            { item: "Arrow", chance: "0-2" },
            { item: "Poison Arrow", chance: "50% (increases with Looting)" },
            { item: "Bow", chance: "8.5% (increases with Looting)" },
            { item: "Red/Brown Mushroom", chance: "2 (when sheared)" }
        ],
        description: "The Bogged is a mossy, mushroom-covered skeleton variant found in swamps, mangrove swamps, and trial chambers. Unlike standard skeletons, the Bogged shoots poison arrows that inflict damage over time, making them dangerous even with good armor. They have slightly less health (16 points) than regular skeletons but compensate with their status-inflicting attacks. The Bogged fires arrows at a slower rate than normal skeletons. Like other undead mobs, they burn in sunlight and are healed by harming potions. Players can shear a Bogged to harvest mushrooms from it, revealing a more skeleton-like appearance underneath the moss."
    }
};
