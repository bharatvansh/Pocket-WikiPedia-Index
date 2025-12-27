// Pocket Wikipedia Foundation - Passive Mobs Data
// Contains data for passive mob types

/**
 * Passive mobs data registry
 * @type {Object.<string, import('../mob_types').MobDetails>}
 */
export const passiveMobs = {
    "minecraft:dolphin": {
        id: "minecraft:dolphin",
        name: "Dolphin",
        health: 10,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.4
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Ocean", "Deep Ocean", "Cold Ocean", "Deep Cold Ocean", "Frozen Ocean", "Deep Frozen Ocean", "Lukewarm Ocean", "Deep Lukewarm Ocean", "Warm Ocean"],
            lightLevel: "Any",
            groupSize: "1-5"
        },
        behaviorTraits: [
            "Friendly aquatic mobs that swim in groups",
            "Can be ridden by players underwater",
            "Swim faster when following boats",
            "Jump out of water frequently",
            "Lead players to nearby shipwrecks and buried treasure",
            "Can be fed raw cod or raw salmon to gain trust",
            "Playful behavior with other dolphins",
            "Can be led with leads",
            "Provide Dolphin's Grace effect to nearby players (increased underwater movement speed)"
        ],
        drops: [
            { item: "Experience", chance: "1-3" }
        ],
        description: "Dolphins are friendly aquatic mobs that spawn in ocean biomes. They are known for their playful behavior and high intelligence. Dolphins swim in groups and can be ridden by players underwater, making them useful for ocean exploration. When following boats, dolphins swim faster and can lead players to nearby shipwrecks and buried treasure. They provide the Dolphin's Grace effect to nearby players, which increases underwater movement speed. Dolphins can be fed raw cod or raw salmon to gain their trust and can be led with leads. They are completely passive and do not attack players or other mobs."
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
    }
};
