// Pocket Wikipedia Foundation - Neutral Mobs Data
// Contains data for neutral mob types

/**
 * Neutral mobs data registry
 * @type {Object.<string, import('../mob_types').MobDetails>}
 */
export const neutralMobs = {
    "minecraft:fox": {
        id: "minecraft:fox",
        name: "Fox",
        health: 20,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Taiga", "Snowy Taiga", "Old Growth Pine Taiga", "Old Growth Spruce Taiga"],
            lightLevel: "Any",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Neutral mobs that become hostile when attacked",
            "Hunt small animals like rabbits and chickens",
            "Can be bred with sweet berries",
            "Sleep during the day and are active at night",
            "Can pick up items in their mouth and carry them",
            "Come in two variants: red (taiga) and white (snowy taiga)",
            "Can jump over fences and walls (does not climb ladders)",
            "Avoid wolves and polar bears",
            "Baby foxes follow adult foxes and inherit their trust status"
        ],
        drops: [
            { item: "Experience", chance: "1-3" }
        ],
        description: "Foxes are small, intelligent neutral mobs that spawn in taiga biomes. They are nocturnal creatures that sleep during the day and become active at night. Foxes hunt small animals like rabbits and chickens, making them useful for passive mob farming. They can be bred with sweet berries and come in two variants: red foxes in regular taiga biomes and white foxes in snowy taiga biomes. Foxes have unique behaviors like picking up and carrying items in their mouths, jumping over fences and walls, and avoiding predators like wolves and polar bears. They are generally passive but will defend themselves when attacked."
    },
    "minecraft:dolphin": {
        id: "minecraft:dolphin",
        name: "Dolphin",
        health: 10,
        stats: {
            attackDamage: 3,
            movementSpeed: 0.4
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Ocean", "Deep Ocean", "Cold Ocean", "Deep Cold Ocean", "Lukewarm Ocean", "Deep Lukewarm Ocean", "Warm Ocean"],
            lightLevel: "Any",
            groupSize: "1-5"
        },
        behaviorTraits: [
            "Neutral aquatic mobs that swim in groups",
            "Swim faster when following boats",
            "Jump out of water frequently",
            "Lead players to nearby shipwrecks and buried treasure",
            "Can be fed raw cod or raw salmon to gain trust",
            "Playful behavior with other dolphins",
            "Can be led with leads",
            "Provide speed boost to players (not a visible status effect icon)",
            "Become hostile when attacked"
        ],
        drops: [
            { item: "Experience", chance: "1-3" }
        ],
        description: "Dolphins are neutral aquatic mobs that spawn in ocean biomes. They are known for their playful behavior and high intelligence. Dolphins swim in groups and follow boats, swimming faster when doing so. They frequently jump out of water and can lead players to nearby shipwrecks and buried treasure. Dolphins can be fed raw cod or raw salmon to gain their trust and can be led with leads. They provide a speed boost to nearby players, though this is not displayed as a visible status effect icon. Dolphins are neutral and will attack when provoked, dealing damage based on difficulty level (2.5 on Easy, 3 on Normal, 4.5 on Hard)."
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
            biomes: ["Plains", "Sunflower Plains", "Flower Forest", "Forest", "Birch Forest", "Old Growth Birch Forest", "Meadow", "Mangrove Swamp", "Cherry Grove"],
            lightLevel: "Any",
            groupSize: "1-3 (in bee nests)"
        },
        behaviorTraits: [
            "Neutral mobs that become hostile when attacked or when their nest/hive is disturbed",
            "All nearby bees become enraged when one is attacked",
            "Attack only once, then die approximately 1 minute later (lose stinger)",
            "Apply Poison effect to players on successful sting (10 seconds on Normal, 18 seconds on Hard, no poison on Easy)",
            "Can be pacified with a campfire placed under their hive",
            "Collect nectar from flowers and return to hive to make honey",
            "Can pollinate crops, advancing their growth stages",
            "Follow players holding flowers and can be bred with any flower",
            "Are arthropods (Bane of Arthropods effective)",
            "Babies can fly through small gaps and do not attack",
            "Bees do not deal damage in Peaceful difficulty"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (adult), 0 (baby)" }
        ],
        description: "Bees are neutral arthropod mobs that spawn naturally in bee nests within flower-rich biomes like plains and flower forests. They are the only arthropod mob that can spawn in any difficulty including Peaceful. Bees spend their days collecting nectar from flowers and returning it to their hive to produce honey. When angered (by attacking them, harvesting honey, or destroying their nest without a campfire), bees swarm and attack as a group, stinging once and then dying shortly after. Their sting applies poison to players for varying durations depending on difficulty. Bees are valuable for pollination, as they can accelerate crop growth, and for honey/honeycomb production when housed in beehives. Campfires placed directly under hives pacify bees during harvesting."
    }
};
