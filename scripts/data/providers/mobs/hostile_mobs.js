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
            "Completely blind, relies on vibrations and smell to detect players",
            "Detects movement and sounds within a large radius (up to 16 blocks)",
            "Performs powerful melee attacks that bypass shields and deal massive damage",
            "Unleashes sonic boom ranged attack that ignores armor and shields",
            "Emerges from the ground when summoned by sculk shriekers after 4 activations",
            "Cannot be outrun easily due to high movement speed and pathfinding",
            "Despawns if no vibrations detected for 60 seconds",
            "Immune to most status effects including poison, wither, and fire",
            "Can detect players through walls and obstacles using vibration sensing"
        ],
        drops: [
            { item: "Sculk Catalyst", chance: "1" },
            { item: "Experience", chance: "5" }
        ],
        description: "The Warden is the most powerful and terrifying hostile mob in Minecraft, found exclusively in the Deep Dark biome. With an astonishing 500 health points (250 hearts), it has more health than any other naturally spawning mob in the game. The Warden is completely blind but possesses an advanced sensory system that detects players through vibrations and smell, making stealth essential when navigating ancient cities. It deals devastating melee damage that bypasses shields entirely and can unleash a sonic boom ranged attack that ignores armor and shields, dealing significant damage regardless of protection. The Warden emerges from the ground when summoned by sculk shriekers after four activations, creating a terrifying encounter. Its high movement speed and intelligent pathfinding make it nearly impossible to outrun. The Warden is designed to be avoided rather than fought, encouraging careful, stealthy gameplay in the Deep Dark biome. When defeated, it drops a Sculk Catalyst, which is essential for advanced sculk-based redstone contraptions, and 5 experience orbs."
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
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["Swamp", "Mangrove Swamp", "Trial Chambers (via Trial Spawners)"],
            lightLevel: "0 (Java) / 0-7 (Bedrock)",
            groupSize: "4 (natural), varies (Trial Spawners)"
        },
        behaviorTraits: [
            "Undead skeleton variant that spawns in swamps and mangrove swamps, mixed in with other skeleton spawns",
            "Can also spawn in trial chambers via trial spawners",
            "Attacks mainly at range with a bow, and may fire poison-tipped arrows",
            "Its poison arrows apply Poison for 4 seconds",
            "In Bedrock Edition, it can spawn during the day under dense mangrove canopy (light levels 0 through 7)",
            "Burns in daylight like other skeletons unless protected",
            "Unable to swim and tends to sink in water",
            "Melee damage is low compared to its ranged pressure"
        ],
        drops: [
            { item: "Bone", chance: "0-2" },
            { item: "Arrow", chance: "0-2" },
            { item: "Arrow of Poison", chance: "0-1 (player/tamed wolf kill)" },
            { item: "Bow", chance: "8.5% (player/tamed wolf kill; higher with Looting)" },
            { item: "Equipped items/armor", chance: "If holding" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Bogged are swamp-dwelling skeletons with a distinctive mossy look and a nasty twist: their arrows can poison targets, turning even a short exchange into a health drain. They naturally appear in swamps and mangrove swamps alongside normal skeletons, and can also be encountered in Trial Chambers through trial spawners. Like other undead skeletons, bogged burn in sunlight unless covered—so daytime in the open is safer—but their poison-tipped shots make them especially dangerous at range in the tangled, low-visibility terrain of swamps."
    },
    "minecraft:wither_skeleton": {
        id: "minecraft:wither_skeleton",
        name: "Wither Skeleton",
        health: 20,
        stats: {
            attackDamage: 8,
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["Nether Fortress"],
            lightLevel: "0-7 (Nether)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Wanders aimlessly when idle but sprints to attack players",
            "Inflicts the Wither effect for 10 seconds on hit, dealing 1 HP every 2 seconds",
            "Wither effect can cause death unlike Poison",
            "Immune to fire, lava, and the Wither effect",
            "Flees from wolves but retaliates when attacked",
            "Attacks players, snow golems, iron golems, baby turtles, piglins, and piglin brutes",
            "Taller than regular skeletons at 2.4 blocks high",
            "Can spawn with enchanted stone swords on higher difficulties"
        ],
        drops: [
            { item: "Coal", chance: "0-1 (50% base chance)" },
            { item: "Bone", chance: "0-2 (average 1.00)" },
            { item: "Wither Skeleton Skull", chance: "2.5% (up to 8.5% with Looting III)" },
            { item: "Stone Sword", chance: "8.5% (up to 11.5% with Looting III)" }
        ],
        description: "Wither Skeletons are dangerous undead hostile mobs found exclusively in Nether Fortresses. They are taller and darker variants of regular skeletons, standing 2.4 blocks high and wielding stone swords instead of bows. Their most distinctive and dangerous feature is their ability to inflict the Wither status effect on any target they hit, which turns the health bar black and deals 1 HP of damage every 2 seconds for 10 seconds. Unlike the Poison effect, Wither can kill players and mobs, making Wither Skeletons particularly lethal even with their relatively modest base damage of 8 HP on Normal difficulty. They are immune to fire and lava, allowing them to navigate the Nether's hazardous terrain safely, and unlike regular skeletons, they do not burn in sunlight when brought to the Overworld. Wither Skeletons sprint toward their targets when aggravated and attack players, iron golems, snow golems, baby turtles, piglins, and piglin brutes. They flee from wolves but will fight back if cornered. These mobs are crucial for progression to late-game content, as they have a rare 2.5% chance to drop Wither Skeleton Skulls, which can be increased to 8.5% with Looting III enchantment. Three of these skulls are required to summon the Wither boss, one of Minecraft's most challenging fights. Their other drops include coal and bones, making them useful for resource farming."
    },
    "minecraft:stray": {
        id: "minecraft:stray",
        name: "Stray",
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
            biomes: ["Ice Spikes", "Frozen River", "Snowy Plains", "Frozen Ocean", "Deep Frozen Ocean"],
            lightLevel: "0-7",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Shoots tipped arrows of slowness",
            "Burns in sunlight unless wearing a helmet",
            "Spawns in cold and frozen biomes",
            "Skeletons convert to strays in powder snow",
            "Immune to freezing damage"
        ],
        drops: [
            { item: "Bone", chance: "0-2" },
            { item: "Arrow", chance: "0-2" },
            { item: "Arrow of Slowness", chance: "0-1" },
            { item: "Bow", chance: "8.5%" },
            { item: "Experience", chance: "5 (plus 1-3 if stray has armor)" },
            { item: "Picked-up Equipment", chance: "100% (with current damage level)" }
        ],
        description: "Strays are a variant of skeletons that spawn in icy biomes. They are undead hostile mobs that shoot tipped arrows of slowness, making them dangerous in combat by reducing the player's movement speed. Like skeletons, they burn in sunlight. Skeletons that remain in powder snow for too long will transform into strays."
    },
    "minecraft:hoglin": {
        id: "minecraft:hoglin",
        name: "Hoglin",
        health: 40,
        stats: {
            attackDamage: "3-8 (varies by difficulty)",
            movementSpeed: 0.3,
            knockbackResistance: 0.6
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Crimson Forest", "Bastion Remnant"],
            lightLevel: "Any",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Hostile toward players on sight in the Nether",
            "Flees from warped fungus, nether portals, and respawn anchors",
            "Can be bred using crimson fungus",
            "Converts to zoglin when entering the Overworld or The End",
            "Baby hoglins attack players but deal less damage and don't fling them",
            "High knockback resistance (60%)",
            "Can be leashed with leads"
        ],
        drops: [
            { item: "Raw Porkchop", chance: "2-4" },
            { item: "Leather", chance: "0-1" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Hoglins are aggressive, pig-like hostile mobs that inhabit the crimson forests and bastion remnants of the Nether. These large creatures serve as the primary source of porkchops in the Nether and are essential for sustainable food production in this challenging dimension. Adult hoglins are formidable opponents with 40 health points (20 hearts) and can deal significant melee damage ranging from 3 to 8 hearts depending on game difficulty. They have a 60% knockback resistance, making them difficult to push back in combat. Hoglins have a unique relationship with their environment—they flee from warped fungus due to its unpleasant smell, and they also avoid nether portals and respawn anchors. Hoglins attack players on sight in the Nether under normal circumstances. Players can breed hoglins using crimson fungus, and baby hoglins will attack players but deal less damage and cannot fling them like adults can. Hoglins are a critical part of the Nether ecosystem and provide valuable resources including raw porkchops for food and leather for crafting."
    },
    "minecraft:zoglin": {
        id: "minecraft:zoglin",
        name: "Zoglin",
        health: 40,
        stats: {
            attackDamage: "3-8 (Normal), 2-5 (Easy), 4-12 (Hard)",
            movementSpeed: 0.25,
            knockbackResistance: 0.6
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["N/A (Created when Hoglin enters Overworld or The End)"],
            lightLevel: "Any",
            groupSize: "N/A"
        },
        behaviorTraits: [
            "Hostile toward players and most mobs",
            "Undead mob vulnerable to Smite enchantment",
            "Cannot spawn naturally—only created when hoglins enter the Overworld or End",
            "Despawns normally unless name-tagged",
            "Immune to poison and regeneration effects",
            "Healed by harming potions, damaged by healing potions",
            "Can be leashed with leads",
            "Baby zoglins deal less damage but are more aggressive",
            "Attacks relentlessly once provoked"
        ],
        drops: [
            { item: "Rotten Flesh", chance: "1-3" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Zoglins are the zombified, hostile variants of hoglins that are created when hoglins are brought into the Overworld or The End. These terrifying undead mobs are the only Nether-classified creatures that cannot naturally spawn in the Nether itself, making them unique entities that must be created through player interaction. Adult zoglins are formidable opponents with 40 health points (20 hearts) and can deal significant melee damage ranging from 3 to 8 hearts depending on game difficulty on Normal mode. Their undead nature makes them vulnerable to the Smite enchantment, which is particularly effective when battling these creatures. Zoglins attack relentlessly and are hostile toward players and most other mobs alike. They possess 60% knockback resistance, similar to their living counterparts. Baby zoglins exist and actively attack players despite their smaller size, though they deal less damage than adults. Zoglins are immune to poison and regeneration effects due to their undead nature. They are healed by harming potions and damaged by healing potions. When killed, zoglins drop 1-3 rotten flesh pieces, making them a renewable source of this material for trading or potion brewing."
    }
};
