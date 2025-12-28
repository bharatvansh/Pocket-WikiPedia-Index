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
    "minecraft:phantom": {
        id: "minecraft:phantom",
        name: "Phantom",
        health: 20,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.3
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["Overworld (sky)", "Nether", "The End"],
            lightLevel: "Any (night sky)",
            groupSize: "1-5 (varies by insomnia level)"
        },
        behaviorTraits: [
            "Spawns above players who haven't slept in 3+ in-game days",
            "Spawning frequency increases the longer players go without sleeping",
            "Spawning can be toggled with the game rule 'doInsomnia'",
            "Flies in circular patterns 15-25 blocks horizontally and 24-35 blocks vertically from players",
            "Leaves a trail of gray smoke while flying",
            "Avoids cats and ocelots, staying at least 64 blocks away",
            "Attacks by diving toward players, dealing impact damage on contact",
            "Undead mob: harmed by Instant Health, immune to Poison and Regeneration effects",
            "Ignored by Wither and Wither Skeletons' targeting",
            "Despawns at sunrise unless chasing a target",
            "Cannot enter nether portals or go through end gateway portals"
        ],
        drops: [
            { item: "Phantom Membrane", chance: "0-1 (up to 4 with Looting III)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Phantoms are undead flying hostile mobs that materialize above players who have neglected to sleep for extended periods. They are the physical manifestation of insomnia in Minecraft's world, appearing as large, bat-like creatures with skeletal features and glowing eye sockets. Phantoms spawn exclusively in the Overworld, Nether, and The End, but only at night in the Overworld when there is an unobstructed view of the sky. Their spawn rate scales with how long a player has gone without sleeping—the more nights without rest, the more frequently phantoms appear. Players can reduce or eliminate phantom spawns by sleeping in beds, which resets the insomnia counter. Phantoms are excellent sources of phantom membranes, a crucial crafting ingredient needed to repair elytra and craft crossbow fireworks. As undead mobs, they are affected by smite-based enchantments and potions of Harming, while being healed by potions of Healing. Their weakness to sunlight causes them to flee to shadowy areas during the day unless engaged in combat, making early morning attacks an effective strategy. The phantom membrane drop rate can be increased using the Looting enchantment, allowing players to collect up to 4 membranes with Looting III."
    },
    "minecraft:bogged": {
        id: "minecraft:bogged",
        name: "Bogged",
        health: 16,
        stats: {
            attackDamage: 3,
            movementSpeed: 0.22
        },
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
    "minecraft:shulker": {
        id: "minecraft:shulker",
        name: "Shulker",
        health: 30,
        stats: {
            attackDamage: 4,
            movementSpeed: 0
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["End City"],
            lightLevel: "Any",
            groupSize: "Varies (on end city structures)"
        },
        behaviorTraits: [
            "Box-shaped hostile mob found exclusively in End Cities",
            "Hides in its shell to blend in with purpur blocks and avoid detection",
            "Attacks by shooting homing projectiles called shulker bullets at nearby players",
            "Shulker bullets track targets and apply Levitation effect on hit",
            "Opens its shell to reveal a small yellow head with two eyes when attacking",
            "When shell is closed, has 20 armor points and deflects arrows",
            "Loses armor protection when shell opens for attack",
            "At less than half health, attempts to teleport to a new location",
            "Teleportation may spawn a new shulker of the same color at original location",
            "Nearby shulkers decrease the odds of new shulker spawning by 20% each",
            "If 5+ shulkers are nearby, no new shulker spawns during teleportation",
            "Attacks other hostile mobs when spawned via /summon command",
            "Does not attack teammates intentionally or retaliate when hit",
            "In Peaceful difficulty, exists in world but does not attack",
            "Cannot be pushed by pistons or flowing water",
            "Mobs cannot pathfind around or jump over shulkers",
            "Falling on a shulker from height deals fall damage to player"
        ],
        drops: [
            { item: "Shulker Shell", chance: "1 (when killed by player/tamed wolf)" },
            { item: "Experience", chance: "15 (when killed by player/tamed wolf)" },
            { item: "Pearlescent Froglight", chance: "Rare (from shulker bullets in Trial Chambers)" }
        ],
        description: "Shulkers are enigmatic, box-shaped hostile mobs that dwell within the mysterious End Cities perched on the outer islands of The End dimension. These peculiar creatures possess a remarkable ability to camouflage themselves among purpur blocks, their shell resembling the distinctive purple blocks that compose much of End City architecture. When undisturbed, a shulker remains hidden, its shell closed and its presence nearly invisible to unsuspecting players exploring these end-game structures. However, when a target comes within approximately 16 blocks, the shulker reveals its true nature by opening its shell to expose a small yellow head with two piercing eyes. From this vulnerable state, it launches guided projectiles known as shulker bullets that pursue their targets relentlessly and inflict the Levitation status effect on contact, causing affected players to float upward uncontrollably. This makes shulkers particularly dangerous in the vertical environments of End Cities, where levitation can send players into the void below. Shulkers possess a unique defensive mechanism—their closed shell provides 20 armor points that can deflect arrows and reduce incoming damage, though this protection is lost when the shell opens to attack. When reduced to less than half health, a wounded shulker attempts to flee by teleporting to a new location, with a chance to spawn an additional shulker at its original position. This regenerative behavior can quickly overwhelm players who don't deal with shulkers efficiently, as multiple shulkers nearby reduce the spawning success rate but can lead to overwhelming numbers if not managed carefully. Shulkers drop valuable shulker shells when killed, essential crafting materials used to create shulker boxes—one of the most practical storage solutions in Minecraft, as they can be opened and closed like normal containers while retaining their inventory when placed on item frames or carried in other inventories. The Levitation effect applied by shulker bullets lasts for varying durations based on difficulty, making shulkers particularly threatening on higher difficulty settings where players have less time to react before being carried into the void. Though shulkers do not naturally attack in Peaceful difficulty, they remain present in the world, waiting for players who dare to challenge the End."
    }
};
