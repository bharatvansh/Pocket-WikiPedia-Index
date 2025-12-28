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
    "minecraft:blaze": {
        id: "minecraft:blaze",
        name: "Blaze",
        health: 20,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Nether Fortress"],
            lightLevel: "11 or less",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Hostile mob found exclusively in Nether Fortresses",
            "Attacks by shooting small fireballs in volleys of three",
            "Fireballs deal 5 damage (Easy), 6 damage (Normal), or 7.5 damage (Hard)",
            "Melee attack with spinning rods deals 4 damage (Easy), 6 damage (Normal), or 9 damage (Hard)",
            "Floats upward while preparing to attack, making melee combat challenging",
            "Can be damaged by water and rain, taking 1 damage every half second",
            "Immune to fire and lava damage",
            "Has a smoke particle effect when idle and fire particle effect when attacking",
            "Spawns from monster spawners in Nether Fortresses",
            "Teleport distance in Bedrock Edition is 16 blocks"
        ],
        drops: [
            { item: "Blaze Rod", chance: "0-1 (50% base, increases with Looting: 75% Looting I, 87.5% Looting II, 91.67% Looting III)" },
            { item: "Experience", chance: "10 (when killed by player/tamed wolf)" }
        ],
        description: "Blazes are formidable hostile mobs that spawn exclusively in Nether Fortresses and from monster spawners within these structures. These floating, fiery creatures are the only source of Blaze Rods, a crucial material for crafting brewing stands, blaze powder for potions, and Eyes of Ender required to locate Strongholds. Blazes attack by shooting small fireballs in rapid volleys of three projectiles, each dealing 5-7.5 damage depending on difficulty. They also possess a dangerous melee attack using their spinning rods, dealing 4-9 damage. Blazes float upward during combat, making them difficult to hit with melee weapons and requiring players to engage them with bows or by using high ground. A critical weakness of Blazes is their vulnerability to water and rain—they take 1 damage every half second when in contact with water, making splash water bottles a highly effective counter. They are completely immune to fire and lava damage, allowing them to navigate the Nether's hazardous terrain unharmed. Blazes emit distinctive smoke particles when idle and burst with fire particles when attacking, making their presence and attack state easily recognizable. Their fireball attacks can be deflected using a shield in Bedrock Edition. Farming Blazes for their rods is a common practice due to their importance in brewing and End-game progression."
    },
    "minecraft:ravager": {
        id: "minecraft:ravager",
        name: "Ravager",
        health: 100,
        stats: {
            attackDamage: 12,
            movementSpeed: 0.4
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Raids (overworld villages)"],
            lightLevel: "Any",
            groupSize: "1 (per raid wave)"
        },
        behaviorTraits: [
            "Massive hostile mob that spawns exclusively during raids on villages",
            "One Ravager spawns with the final raid wave (wave 3 on Easy, wave 5 on Normal, wave 7 on Hard)",
            "Deals devastating melee damage: 7 (Easy), 12 (Normal), or 18 (Hard)",
            "Can be ridden by Pillagers, Vindicators, and Evokers during raids",
            "Performs a powerful roar that damages nearby players within 3 blocks (6 damage Easy/Normal, 10 damage Hard) and knocks them back",
            "Roar has a cooldown between uses and bypasses armor and shields",
            "Charges at players when in range, dealing heavy damage on impact",
            "Can destroy most blocks by biting, including leaves, crops, and some natural blocks",
            "Cannot be tamed or bred",
            "Has 50 hearts of health, making it one of the toughest non-boss mobs",
            "Immune to knockback and most status effects",
            "Moves relatively slowly but becomes faster when charging"
        ],
        drops: [
            { item: "Saddle", chance: "1 (100% - always drops when killed by player/tamed wolf)" },
            { item: "Experience", chance: "20 (when killed by player/tamed wolf)" }
        ],
        description: "Ravagers are the most powerful non-boss hostile mobs in Minecraft, appearing exclusively during raids on villages as the final wave's centerpiece. These massive, beast-like creatures serve as the raid's heavy enforcers, commanding respect with their imposing size of 1.95 blocks wide and 2.2 blocks tall. Ravagers have 100 health points (50 hearts), making them exceptionally durable, and they deal crushing melee damage ranging from 7 on Easy difficulty to 18 on Hard. Their most devastating ability is their roar attack, which damages all players within a 3-block radius, dealing 6 damage on Easy and Normal difficulties or 10 damage on Hard, while knocking them back. This roar bypasses armor and shields, making it particularly dangerous even to well-equipped players. During raids, Ravagers can be ridden by Pillagers, Vindicators, and Evokers, adding ranged and magical threats to their already formidable presence. They are immune to knockback, making them difficult to keep at bay, and their charge attack can close distances quickly. Ravagers can destroy many natural blocks by biting, including leaves and crops, adding to the destructive nature of raids. When killed by a player or tamed wolf, Ravagers always drop a Saddle, making them a reliable source for this useful item. Their combination of high health, devastating damage, and roar attack makes them one of the most feared mobs to encounter in raids."
    },
    "minecraft:phantom": {
        id: "minecraft:phantom",
        name: "Phantom",
        health: 20,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.7
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["Overworld (any biome)"],
            lightLevel: "7 or less (nighttime/thunderstorms)",
            groupSize: "1-4 (increases with longer insomnia)"
        },
        behaviorTraits: [
            "Flying hostile mob that spawns when player hasn't slept or died for 3+ in-game days",
            "Spawns only at night or during thunderstorms",
            "Number of spawning phantoms increases for each day without sleeping (1-4 after 3 days, potentially more after extended insomnia)",
            "Circles high above players, occasionally swooping down to attack",
            "Dive-bomb attack deals 4 damage (Easy), 6 damage (Normal), or 9 damage (Hard)",
            "Cannot hit players while they are sleeping in a bed",
            "Burns in sunlight like other undead mobs unless in shade or water",
            "Cannot fly through water and will sink and drown if submerged",
            "Has a large detection range of 64 blocks horizontally",
            "Attacks are timed, making prediction and dodging possible",
            "Small size (0.5 blocks tall, 0.9 blocks wide) makes them difficult to hit",
            "Can be damaged by melee, ranged, and splash potions",
            "Takes extra damage from Smite enchantment as an undead mob",
            "Does not spawn in the Nether or End"
        ],
        drops: [
            { item: "Phantom Membrane", chance: "0-1 (50% base, increases with Looting: 75% Looting I, 87.5% Looting II, 91.67% Looting III)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Phantoms are flying undead hostile mobs that spawn in the Overworld specifically to punish players who haven't slept or died for at least three in-game days. These ghostly creatures were introduced as a mechanic to encourage players to maintain a regular sleep schedule. Phantoms appear in groups of 1-4 at night or during thunderstorms, with the maximum group size increasing the longer the player goes without sleeping. They circle high above their target at a distance, periodically swooping down in a dive-bomb attack that deals 4-9 damage depending on difficulty. Their small hitbox (0.5 blocks tall and 0.9 blocks wide) makes them frustrating to hit, especially with melee weapons. Phantoms burn in direct sunlight like other undead mobs, providing a natural counter during daytime fights. They are immune to fall damage due to their flying nature and have a horizontal detection range of 64 blocks, making them persistent pursuers. Phantom Membranes, which they have a 50% chance to drop (increased by Looting enchantment), are valuable items used to repair Elytra and craft Slow Falling potions. The number of Phantoms that spawn scales with the player's insomnia level—after 3 days of not sleeping, 1-4 may spawn, and this can increase with additional days. Players can prevent Phantom spawns by sleeping in a bed regularly or by dying, which resets the insomnia counter. Their predictable attack pattern and vulnerability to sunlight make them manageable, but their persistence and numbers can make them a significant threat during extended nighttime exploration."
    }
};
