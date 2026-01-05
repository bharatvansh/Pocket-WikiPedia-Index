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
    "minecraft:husk": {
        id: "minecraft:husk",
        name: "Husk",
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
            biomes: ["Desert"],
            lightLevel: "0",
            groupSize: "2-4"
        },
        behaviorTraits: [
            "Desert variant of zombie that replaces 70% of zombies in desert biomes",
            "Does not burn in sunlight unlike regular zombies",
            "Inflicts Hunger effect for 7 seconds when attacking players",
            "Can pick up items and wear armor like regular zombies",
            "Can call nearby zombies for reinforcements when damaged",
            "Breaks wooden doors on Hard difficulty",
            "Baby husks are faster and do not burn in sunlight"
        ],
        drops: [
            { item: "Rotten Flesh", chance: "0-2" },
            { item: "Iron Ingot", chance: "Rare (2.5%)" },
            { item: "Carrot", chance: "Rare (2.5%)" },
            { item: "Potato", chance: "Rare (2.5%)" },
            { item: "Equipped items/armor", chance: "If picked up" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Husks are zombie variants that spawn exclusively in desert biomes. They function similarly to regular zombies but with key differences: they do not burn in sunlight and their attacks inflict the Hunger effect, depleting player food bars. Husks can break down wooden doors on Hard difficulty and call for reinforcements. In Bedrock Edition, they replace 70% of zombies in desert environments. Their immunity to sunlight makes them particularly dangerous during daytime when other undead mobs are neutralized by the sun."
    },
    "minecraft:zoglin": {
        id: "minecraft:zoglin",
        name: "Zoglin",
        health: 40,
        stats: {
            attackDamage: "3-8",
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: ["All Overworld/End biomes (from converted Hoglins)"],
            lightLevel: "Any",
            groupSize: "1 (from 1 Hoglin)"
        },
        behaviorTraits: [
            "Created when a Hoglin leaves the Nether or stays in Overworld/End for ~15 seconds",
            "Always hostile to players, villagers, and most mobs",
            "Immune to fire and lava damage",
            "Cannot be bred or pacified like Hoglins",
            "Attacks by charging at targets with headbutt attacks",
            "Retains broad attack range from Hoglin ancestry"
        ],
        drops: [
            { item: "Rotten Flesh", chance: "1-3" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Zoglins are zombified Hoglins created when a Hoglin remains in the Overworld or End for 15 seconds. Unlike their living counterparts, Zoglins are permanently hostile to nearly all mobs and cannot be pacified or bred. They retain the Hoglin's high health and powerful headbutt attack, which knocks targets into the air. Immune to fire and lava, Zoglins are relentless predators that do not flee from any threat. They are one of the few mobs that will attack almost anything on sight, making them extremely dangerous in any environment."
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
            "Completely blind; relies on vibrations and smell to detect players even through walls.",
            "Detects movement and sounds within a large radius (up to 16 blocks).",
            "Performs powerful melee attacks that bypass shields and deal massive damage.",
            "Unleashes a sonic boom ranged attack that ignores both armor and shields.",
            "Emerges from the ground when summoned by sculk shriekers after 4 activations.",
            "Possesses high movement speed and advanced pathfinding making it hard to outrun.",
            "Despawns by burrowing underground if no vibrations are detected for 60 seconds."
        ],
        drops: [
            { item: "Sculk Catalyst", chance: "1" },
            { item: "Experience", chance: "5" }
        ],
        description: "The Warden is the most powerful hostile mob in Minecraft, found in the Deep Dark. With 500 health (250 hearts), it tracks players using vibrations and smell. It deals massive melee damage that disables shields and a sonic boom ranged attack that ignores armor. Summoned by sculk shriekers after four triggers, it is meant to be avoided through stealth rather than fought. If defeated, it drops a Sculk Catalyst and 5 experience. Its immense strength and intelligent pathfinding make it a terrifying guardian of Ancient Cities."
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
            "Aquatic hostile mob that spawns exclusively in and around ocean monuments.",
            "Attacks with a slow-charging laser beam that deals up to 9 damage on Hard difficulty.",
            "Features defensive spikes that deal retaliatory damage to attackers using melee weapons.",
            "Hostile toward players, squid, glow squid, and axolotls within its line of sight.",
            "Vulnerable to the Impaling enchantment and cannot track players with the Invisibility effect.",
            "Survives indefinitely out of water, where it hops erratically instead of swimming.",
            "Congregates around sea lantern blocks and is pushed faster by flowing water than other mobs."
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
        description: "Guardians are hostile aquatic mobs defending ocean monuments. They utilize a charging laser beam (4-9 damage) and retractable spikes that damage melee attackers. Their eye tracks players constantly. Though aquatic, they don't suffocate on land, where they hop while still firing lasers. They are the sole source of prismarine shards and crystals, vital for crafting sea lanterns and conduits. They also drop various fish. Their laser is uniquely affected by Strength potions. Engaging them requires preparation against their ranged beams and defensive thorns."
    },
    "minecraft:pillager": {
        id: "minecraft:pillager",
        name: "Pillager",
        health: 24,
        stats: {
            attackDamage: 4,
            movementSpeed: 0.35
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["All Overworld biomes", "Pillager Outposts"],
            lightLevel: "Any",
            groupSize: "2-5 (patrols), 3-6 (outposts), varies (raids)"
        },
        behaviorTraits: [
            "Hostile mob that spawns in patrols, outposts, and during village raids.",
            "Attacks from a distance using crossbows to fire arrows.",
            "Captains carry banners on their heads and lead patrols or raid waves.",
            "Remains aggressive until defeated and does not flee when low on health.",
            "Can navigate complex structures by opening doors and climbing ladders.",
            "Relentlessly attacks villagers and iron golems, especially during raids.",
            "Drops valuable items like emeralds, enchanted books, and iron equipment during raids."
        ],
        drops: [
            { item: "Crossbow", chance: "8.5% (up to 11.5% with Looting III)" },
            { item: "Arrow", chance: "0-2" },
            { item: "Iron Sword", chance: "Raid only (varies by wave)" },
            { item: "Iron Axe", chance: "Raid only (varies by wave)" },
            { item: "Iron Pickaxe", chance: "Raid only (varies by wave)" },
            { item: "Iron Shovel", chance: "Raid only (varies by wave)" },
            { item: "Iron Helmet", chance: "Raid only (varies by wave)" },
            { item: "Iron Chestplate", chance: "Raid only (varies by wave)" },
            { item: "Iron Leggings", chance: "Raid only (varies by wave)" },
            { item: "Iron Boots", chance: "Raid only (varies by wave)" },
            { item: "Enchanted Book", chance: "Raid only (varies by wave)" },
            { item: "Emerald", chance: "Raid only (1-3)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" },
            { item: "Banner (if captain)", chance: "100%" },
            { item: "Ominous Bottle", chance: "1 (dropped by captains outside of raids)" }
        ],
        description: "Pillagers are hostile ranged mobs armed with crossbows, found in patrols, outposts, and raids. They target villagers and iron golems, using intelligent tactics like opening doors or climbing ladders. Captains, identifiable by banners, drop Ominous Bottles (v1.21+) when killed outside raids, granting the Bad Omen effect. During raids, they drop emeralds, crossbows, and enchanted books. As primary raiders, they pose a dynamic threat to villages, requiring players to defend or risk losing inhabitants. Their distance attacks make them dangerous foes in open combat."
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
            "Spawns in swamps, mangrove swamps, and trial chambers via trial spawners.",
            "Attacks at range with a bow and fires poison-tipped arrows.",
            "Its poison arrows apply a status effect that lasts for 4 seconds.",
            "In Bedrock Edition, it can spawn during the day under dense mangrove canopy.",
            "Burns in direct sunlight like other undead skeletons unless protected.",
            "Unable to swim and tends to sink when in water.",
            "Melee damage is significantly lower than its ranged combat pressure."
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
            "Sprints to attack players instead of walking aimlessly when aggroed",
            "Inflicts a fatal Wither effect for 10 seconds on hit, dealing 1 HP every 2 seconds",
            "Immune to fire, lava, and the Wither status effect",
            "Flees from wolves but will retaliate if attacked",
            "Hostile toward players, golems, baby turtles, and piglins",
            "Stands 2.4 blocks tall, allowing players to block its path with 2-high gaps",
            "Can spawn with enchanted stone swords on higher difficulty levels"
        ],
        drops: [
            { item: "Coal", chance: "0-1 (50% base chance)" },
            { item: "Bone", chance: "0-2 (average 1.00)" },
            { item: "Wither Skeleton Skull", chance: "2.5% (up to 8.5% with Looting III)" },
            { item: "Stone Sword", chance: "8.5% (up to 11.5% with Looting III)" }
        ],
        description: "Wither Skeletons are 2.4-block tall, dark undead exclusive to Nether Fortresses. Wielding stone swords, they sprint at players and inflict the Wither effect, which drains health and can kill. Unlike normal skeletons, they are immune to fire and do not burn in sunlight. They are primarily hunted for Wither Skeleton Skulls (2.5% drop rate, 8.5% with Looting III); three are required to summon the Wither boss. Dropping coal and bones, these mobs are essential for mid-to-late game progression, resource farming, and obtaining Nether Stars for beacons."
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
    "minecraft:creaking": {
        id: "minecraft:creaking",
        name: "Creaking",
        health: 1,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Pale Garden (from Creaking Hearts at night)"],
            lightLevel: "Active at night, dormant during day",
            groupSize: "1 (per Creaking Heart)"
        },
        behaviorTraits: [
            "Spawns at night in Pale Garden biomes from active Creaking Hearts.",
            "Freezes completely while a player is looking at it, but pursues players when unobserved.",
            "Naturally spawned creakings are immune to direct damage while connected to their heart.",
            "Breaking the linked Creaking Heart is the only way to kill the mob instantly.",
            "Hitting a protected creaking reveals particle trails that point toward its heart's location.",
            "Attacks players with melee headbutts dealing up to 1.5 hearts of damage.",
            "Becomes a dormant, inanimate block state during the day unless named."
        ],
        drops: [
        ],
        description: "Creakings are eerie hostile mobs found in the Pale Garden at night, spawning from Creaking Hearts. They freeze when looked at but attack when unobserved. Naturally spawned Creakings are invulnerable; they only die when their source Creaking Heart is destroyed. Attacking them reveals orange particle trails pointing toward the heart. At dawn, they become dormant and static. Creakings spawned via eggs or commands lack heart protection and can be damaged normally."
    },
    "minecraft:ravager": {
        id: "minecraft:ravager",
        name: "Ravager",
        health: 100,
        stats: {
            attackDamage: 12,
            movementSpeed: 0.4,
            knockbackResistance: 0.5
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["All Overworld biomes (during raids)"],
            lightLevel: "Any",
            groupSize: "1-2 (per raid wave)"
        },
        behaviorTraits: [
            "Large hostile mob that spawns specifically during village raids",
            "Deals high damage by ramming players and other mobs with its head",
            "Destroys crops and certain soft blocks like leaves when moving through them",
            "Possesses 50% knockback resistance, making it difficult to keep at a distance",
            "Can serve as a mount for pillagers, vindicators, or evokers during raids",
            "Blocking its ramming attack with a shield stuns the creature and triggers a roar",
            "Always drops a saddle when killed by a player"
        ],
        drops: [
            { item: "Saddle", chance: "100%" },
            { item: "Experience", chance: "20 (when killed by player/tamed wolf)" }
        ],
        description: "Ravagers are massive hostile mobs found in village raids, often serving as mounts for pillagers. With 100 health and 50% knockback resistance, they are formidable tanks. They attack by charging and ramming targets, dealing high damage and knockback. Uniquely, they can destroy crops and certain blocks as they move. When defeated, a ravager always drops a saddle. Their sheer size and destructive nature make them one of the greatest threats to villages, usually requiring iron golems or well-equipped players to stop."
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
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Found permanently attached to blocks within End City structures",
            "Shoots guided shulker bullets that track targets along X, Y, or Z axes",
            "Bullets deal damage and inflict the Levitation status effect for 10 seconds",
            "Has 20 armor points and deflects arrows when its shell is closed",
            "Armor is removed and vulnerability increases when the shell opens to attack",
            "Teleports to nearby blocks when damaged or when its attachment point is broken",
            "Drops shulker shells upon death which are used to craft shulker boxes"
        ],
        drops: [
            { item: "Shulker Shell", chance: "0-1 (Bedrock), 50% (Java)" },
            { item: "Shulker Shell", chance: "+1 per Looting level (max 4)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Shulkers are hostile mobs found in End Cities, disguised as purpur blocks. They open their shells to fire guided bullets that track targets and inflict Levitation for 10 seconds. While closed, they possess 20 armor points and deflect arrows, but become vulnerable when attacking. If damaged or obstructed, they teleport to nearby surfaces. Shulkers are essential for late-game play as they drop shulker shells, the core ingredient for crafting shulker boxes, allowing for portable, high-capacity storage."
    },
    "minecraft:hoglin": {
        id: "minecraft:hoglin",
        name: "Hoglin",
        health: 40,
        stats: {
            attackDamage: "2.5-5 (Easy), 3-8 (Normal), 4.5-12 (Hard)",
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
            groupSize: "3-4"
        },
        behaviorTraits: [
            "Large, aggressive Nether mobs that attack players within a 16-block range.",
            "Attacks deal high damage and powerful upward knockback that bypasses shields.",
            "Highly resistant to knockback (60%) compared to most other mobs.",
            "Repelled and kept at bay by warped fungi, nether portals, and respawn anchors.",
            "Attacks are social; hitting one hoglin alerts all nearby hoglins to become aggressive.",
            "Breedable with crimson fungi, making them a renewable source of leather and porkchops.",
            "Rapidly transforms into a mindless, universally hostile zoglin when outside the Nether."
        ],
        drops: [
            { item: "Raw Porkchop", chance: "2-4 (+1 per Looting level, max 7)" },
            { item: "Leather", chance: "0-1 (+1 per Looting level, max 4)" },
            { item: "Cooked Porkchop", chance: "If killed while on fire" },
            { item: "Experience", chance: "5 (JE) / 1-3 (BE) when killed by player/tamed wolf" }
        ],
        description: "Hoglins are powerful, pig-like hostile mobs found in Nether crimson forests and bastions. They attack by launching players into the air with their tusks and possess 60% knockback resistance. Despite their aggression, they flee from warped fungi, nether portals, and respawn anchors. Uniquely, they can be bred using crimson fungi. If brought to the Overworld or End, they transform into undead Zoglins after 15 seconds. While piglins hunt them for food, hoglins will retaliate if attacked. They drop porkchops and leather upon death, making them a vital but dangerous resource."
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
            undead: false
        },
        spawning: {
            biomes: ["Nether Fortress"],
            lightLevel: "11 or lower (spawners); 11 or lower (natural)",
            groupSize: "1-4 (natural), spawner"
        },
        behaviorTraits: [
            "Spawns in and around Nether Fortresses, frequently from spawners.",
            "Hovers and flies freely, often rising higher while attacking.",
            "Fires bursts of three fireballs that ignite players and blocks.",
            "Immune to fire, lava, and the Burning status effect.",
            "Takes damage from water and rain; snowballs deal 3 damage per hit.",
            "Deals melee damage at close range and may ignite targets.",
            "Drops blaze rods, essential for potion brewing and End progression."
        ],
        drops: [
            { item: "Blaze Rod", chance: "0-1 (up to 4 with Looting III)" },
            { item: "Experience", chance: "10 (when killed by player/tamed wolf)" }
        ],
        description: "Blazes are flying hostile mobs found in Nether Fortresses. They attack by firing bursts of small fireballs that ignite targets. Immune to fire and lava, they are uniquely vulnerable to water and snowballs, which deal 3 damage per hit. Upon death, they drop blaze rods, a vital resource for progression. Blaze rods are crafted into blaze powder, used to fuel brewing stands and combined with ender pearls to create eyes of ender. These items are necessary to locate strongholds and access the End dimension, making blazes a mandatory stop for game completion."
    },
    "minecraft:elder_guardian": {
        id: "minecraft:elder_guardian",
        name: "Elder Guardian",
        health: 80,
        stats: {
            attackDamage: "5 (Easy), 8 (Normal), 12 (Hard)",
            movementSpeed: 0.3
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Ocean Monument"],
            lightLevel: "Any (requires water)",
            groupSize: "3 per monument (Specific locations: top, left, right)"
        },
        behaviorTraits: [
            "Serves as the boss of ocean monuments and is a significantly larger, stronger variant of the regular guardian.",
            "Inflicts Mining Fatigue III on all players within 50 blocks, making it nearly impossible to break blocks for 5 minutes.",
            "Attacks with a powerful laser beam that deals high damage based on difficulty, reaching up to 12 on Hard.",
            "Defensive spikes inflict retaliatory damage on players who use melee attacks while the spikes are extended.",
            "Does not attack players under the effect of Invisibility potions, provided the player is not wearing armor.",
            "Unlike regular guardians, it does not suffocate and can survive indefinitely out of water.",
            "Guaranteed to drop a wet sponge upon death, providing a renewable source of sponge blocks."
        ],
        drops: [
            { item: "Wet Sponge", chance: "1 (guaranteed)" },
            { item: "Prismarine Shard", chance: "0-2" },
            { item: "Prismarine Crystals", chance: "33% (1 in 3, increased by Looting)" },
            { item: "Raw Cod", chance: "50% (1 in 2, increased by Looting)" },
            { item: "Rare Fish", chance: "2.5% (weighted pool: Tropical Fish 2%, Pufferfish 0.8%, Raw Salmon 0.6%)" },
            { item: "Tide Armor Trim Smithing Template", chance: "20% (Bedrock Edition 1.20+)" },
            { item: "Cooked Cod", chance: "If killed while on fire" },
            { item: "Experience", chance: "10 (when killed by player/tamed wolf)" }
        ],
        description: "The Elder Guardian is a powerful boss found in ocean monuments with 80 health. It radiates a Mining Fatigue III aura in a 50-block radius, significantly slowing mining and attack speed to force direct confrontation. It attacks using a high-damage laser beam and defensive spikes. Upon death, it always drops a wet sponge, prismarine materials, and occasionally the Tide Armor Trim template. Defeating the three guardians in a monument is essential to remove the mining debuff and safely harvest valuable blocks like gold and sea lanterns within the structure."
    },
    "minecraft:phantom": {
        id: "minecraft:phantom",
        name: "Phantom",
        health: 20,
        stats: {
            attackDamage: "6 (Easy), 9 (Normal), 13 (Hard)",
            movementSpeed: 0.4
        },
        classification: {
            type: "Hostile",
            undead: true
        },
        spawning: {
            biomes: "Most Overworld biomes",
            lightLevel: "0-7 (nighttime only)",
            groupSize: "1-4 (increases based on days without sleep)"
        },
        behaviorTraits: [
            "Spawns at night or during thunderstorms when a player has not slept for at least three in-game days.",
            "Flies in circles at high altitudes before swooping down to attack the player when they are vulnerable.",
            "Categorized as an undead mob, meaning it burns in sunlight and is vulnerable to the Smite enchantment.",
            "Deals significant damage based on difficulty level, ranging from 6 points on Easy to 13 points on Hard.",
            "The number of phantoms that spawn simultaneously increases the longer the player remains awake.",
            "Has a large detection range of 64 blocks and can be tracked by its loud, ghostly screeching sounds.",
            "Sleeping in a bed immediately resets the phantom spawn timer and causes existing phantoms to despawn."
        ],
        drops: [
            { item: "Phantom Membrane", chance: "0-1 (increased by Looting)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Phantoms are flying undead mobs that appear when a player hasn't slept for three or more in-game days. They circle high above and swoop down to attack, dealing up to 13 damage depending on difficulty. As undead, they burn in sunlight and are vulnerable to Smite. Their main drop, the phantom membrane, is essential for repairing elytra. To prevent spawns, players must sleep in a bed to reset their insomnia counter. These ghostly threats make regular rest a vital part of survival in the night sky."
    },
    "minecraft:drowned": {
        id: "minecraft:drowned",
        name: "Drowned",
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
            biomes: ["Ocean", "River"],
            lightLevel: "0 (natural underwater spawn); Any (zombie conversion)",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Hostile aquatic undead that spawn in oceans and rivers or through submerged zombie conversion.",
            "Swims effectively and patrols the sea floor, making underwater combat difficult.",
            "Trident-wielding variants perform high-damage ranged attacks and switch to melee at close range.",
            "Can spawn holding valuable nautilus shells or tridents, which are primary sources for these items.",
            "Burns in direct sunlight when on land but is completely immune to sunlight while underwater.",
            "Capable of picking up items and equipping armor, which can increase their threat level.",
            "Will exit the water to chase players onto land during the night or during rain."
        ],
        drops: [
            { item: "Rotten Flesh", chance: "0-2" },
            { item: "Copper Ingot", chance: "11% (Bedrock Edition)" },
            { item: "Trident", chance: "If holding (chance varies; increased by Looting)" },
            { item: "Nautilus Shell", chance: "If holding" },
            { item: "Fishing Rod", chance: "If holding" },
            { item: "Equipped items/armor", chance: "If picked up" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Drowned are aquatic undead found in oceans and rivers. They spawn in dark water or when regular zombies submerge for too long. While slow on land, they swim efficiently and patrol the seabed. Most notably, some carry tridents, performing dangerous ranged attacks. Drowned are the primary renewable source for tridents and nautilus shells, which are essential for crafting conduits. Because tridents can be enchanted with unique effects like Loyalty and Riptide, hunting Drowned is vital for players seeking high-tier gear and underwater base utility."
    },
    "minecraft:evoker": {
        id: "minecraft:evoker",
        name: "Evoker",
        health: 24,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.5
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Woodland Mansion (specific rooms)", "Village (during raids)"],
            lightLevel: "Any",
            groupSize: "1 (Mansion), 1-5 (Raid waves)"
        },
        behaviorTraits: [
            "Powerful spellcasting illager found in woodland mansions and late-wave raids",
            "Attacks using 'fang' spells that erupt from the ground in a line or circle",
            "Fangs deal 6 HP (3 hearts) damage and ignore armor enchantments",
            "Summons 3 Vexes to pursue and attack players",
            "Flee from players when their spells are on cooldown",
            "In 1.21+, their presence in raids is tied to the new Raid Omen mechanic",
            "Can ride Ravagers during wave 7 of a raid in Bedrock Edition"
        ],
        drops: [
            { item: "Totem of Undying", chance: "1 (100% guaranteed)" },
            { item: "Emerald", chance: "0-1 (increased by Looting)" },
            { item: "Illager Banner", chance: "If raid captain" },
            { item: "Experience", chance: "10" }
        ],
        description: "Evokers are elite spellcasting illagers found in woodland mansions and late-stage raids. They are the only source of the Totem of Undying. Evokers attack by summoning armor-piercing fangs from the ground and conjuring Vexes—hostile, wall-phasing flying spirits. They avoid direct combat, preferring to cast spells from a distance. They are also known for their 'wololo' spell which changes sheep colors. Since 1.21, they appear in raids triggered via the Raid Omen system. Their magical power and lethal summons make them high-priority targets for any adventurer."
    },
    "minecraft:piglin_brute": {
        id: "minecraft:piglin_brute",
        name: "Piglin Brute",
        health: 50,
        stats: {
            attackDamage: 13,
            movementSpeed: 0.35
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Bastion Remnant"],
            lightLevel: "Any",
            groupSize: "Varies (based on bastion structure)"
        },
        behaviorTraits: [
            "Aggressive toward players regardless of whether they are wearing gold armor",
            "Attacks using a Golden Axe, dealing massive melee damage",
            "Does not retreat from soul fire or soul-related items unlike regular piglins",
            "Cannot be bartered with and ignores dropped gold ingots",
            "Alerts nearby piglins and piglin brutes when attacked",
            "Does not respawn once killed; each Bastion has a limited number of brutes",
            "Turns into a zombified piglin if brought to the Overworld or End"
        ],
        drops: [
            { item: "Golden Axe", chance: "8.5% (increased by Looting)" },
            { item: "Experience", chance: "20" }
        ],
        description: "Piglin Brutes are elite axe-wielding guardians found in Bastion Remnants. Unlike standard piglins, they ignore gold armor, refuse bartering, and do not fear soul fire. They are highly aggressive with 50 HP and deal up to 13 damage on Normal difficulty. Crucially, they do not respawn, making their defeat a permanent change to a bastion's safety. If transported to the Overworld, they transform into zombified piglins. Their role is to protect treasure at all costs, requiring players to engage in direct combat rather than using distractions."
    },
    "minecraft:vindicator": {
        id: "minecraft:vindicator",
        name: "Vindicator",
        health: 24,
        stats: {
            attackDamage: 13,
            movementSpeed: 0.35
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Woodland Mansion", "All Overworld biomes (during raids)"],
            lightLevel: "Any",
            groupSize: "1-2 (mansions), 1-3 (raids, wave 2+)"
        },
        behaviorTraits: [
            "Wields an iron axe that can disable shields with a single hit",
            "Sprints toward targets at high speed, moving faster than most other illagers",
            "Spawns in Woodland Mansions and participates in raids starting at wave 2",
            "Does not respawn after its initial generation inside Woodland Mansions",
            "Attacks players, villagers, iron golems, and wandering traders on sight",
            "Rare 'Johnny' variant attacks almost any mob except other illagers when named",
            "Drops emeralds and occasionally iron axes upon being defeated"
        ],
        drops: [
            { item: "Emerald", chance: "0-1" },
            { item: "Iron Axe", chance: "8.5% (increased by Looting)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Vindicators are fast, axe-wielding illagers found in Woodland Mansions and village raids. Their iron axes can disable shields, making them lethal melee threats. In mansions, they are non-respawning guardians; in raids, they join from wave 2 onwards. Naming one 'Johnny' makes it hyper-aggressive, attacking almost any mob except fellow illagers. They commonly drop emeralds and occasionally their iron axes. Known for their high speed and strength, vindicators are among the most dangerous illagers players will face in close combat."
    },
    "minecraft:vex": {
        id: "minecraft:vex",
        name: "Vex",
        health: 14,
        stats: {
            attackDamage: 9,
            movementSpeed: 0.3
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["N/A (spawns only via Evoker summoning, spawn eggs, or commands)"],
            lightLevel: "Any",
            groupSize: "3 (per Evoker summoning)"
        },
        behaviorTraits: [
            "Small flying hostile mob that phases through all blocks",
            "Cannot be spawned naturally—only via Evoker summoning, spawn eggs, or /summon command",
            "Spawns in groups of 3 when an Evoker performs its summoning attack",
            "Attacks players, villagers, iron golems, snow golems, and wandering traders",
            "Carries an iron sword and lunges at targets while flying",
            "Has a limited lifespan of 30 to 119 seconds before taking damage",
            "Immune to fire and lava damage"
        ],
        drops: [
            { item: "Iron Sword", chance: "8.5% (Bedrock Edition only, increased by Looting)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Vexes are tiny, flying hostile mobs summoned by Evokers in groups of three. They resemble ghostly allays and carry iron swords. Their most dangerous trait is the ability to phase through solid blocks, preventing players from hiding. With 14 HP and immunity to fire and lava, they are relentless attackers. Vexes have a limited lifespan of 30 to 119 seconds, after which they take damage and despawn. They drop 5 XP when killed, and potentially their iron sword in Bedrock Edition. These ethereal weapons are a major threat during raids and in woodland mansions."
    },
    "minecraft:witch": {
        id: "minecraft:witch",
        name: "Witch",
        health: 26,
        stats: {
            attackDamage: "Splash potions (varies by type)",
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["All Overworld biomes except Mushroom Fields and Deep Dark", "Swamp Huts", "During Raids"],
            lightLevel: "0 (Bedrock Edition)",
            groupSize: "1"
        },
        behaviorTraits: [
            "Throws splash potions of Poison, Harming, Slowness, and Weakness from up to 10 blocks away",
            "Drinks Instant Health and other beneficial potions to heal or gain combat buffs",
            "Automatically drinks Fire Resistance when on fire and Water Breathing when underwater",
            "Immune to poison damage and possesses high resistance to magic-based potion damage",
            "Spawns naturally in swamp huts and appears in raids as ranged support starting at wave 4",
            "Villagers transform into witches if struck by lightning",
            "Does not burn in sunlight, remaining active during the day unlike most hostile mobs"
        ],
        drops: [
            { item: "Redstone Dust", chance: "4-8 (increased by Looting)" },
            { item: "Glowstone Dust", chance: "0-2 (increased by Looting)" },
            { item: "Sugar", chance: "0-2 (increased by Looting)" },
            { item: "Gunpowder", chance: "0-2 (increased by Looting)" },
            { item: "Spider Eye", chance: "0-2 (increased by Looting)" },
            { item: "Glass Bottle", chance: "0-2 (increased by Looting)" },
            { item: "Stick", chance: "0-2 (increased by Looting)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Witches are hostile mobs that use potions for offense and defense. They throw splash potions of Poison, Harming, Slowness, and Weakness at players from range. Uniquely, they drink beneficial potions to survive: Instant Health when hurt, Fire Resistance if burning, and Water Breathing if submerged. They spawn in swamp huts, during raids, or when villagers are struck by lightning. Upon death, they drop various brewing ingredients like redstone, glowstone, and gunpowder. Their tactical self-healing and immunity to poison make them a cunning threat requiring quick, decisive combat."
    },
    "minecraft:ghast": {
        id: "minecraft:ghast",
        name: "Ghast",
        health: 10,
        stats: {
            attackDamage: "Fireball impact: 6 (Normal), Explosion: 17 (at epicenter)",
            movementSpeed: 0.3
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Nether Wastes", "Soul Sand Valley", "Basalt Deltas"],
            lightLevel: "Any",
            groupSize: "1"
        },
        behaviorTraits: [
            "Shoots explosive fireballs from up to 100 blocks away that deal both direct and explosion damage.",
            "Fireballs can be deflected back at the ghast with any attack to deal damage or earn the Return to Sender advancement.",
            "Explosions destroy weak blocks like netherrack but are stopped by blast-resistant materials like cobblestone.",
            "Will only initiate an attack if it has a direct line of sight to the player.",
            "Large flying mob that emits loud, distinctive crying sounds audible from significant distances.",
            "Requires a minimum open space of 5x5x4 blocks to spawn throughout the Nether.",
            "Completely immune to fire and lava damage but vulnerable to standard attacks and drowning."
        ],
        drops: [
            { item: "Ghast Tear", chance: "0-1 (increased by Looting)" },
            { item: "Gunpowder", chance: "0-2 (increased by Looting)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Ghasts are large, jellyfish-like hostile mobs that fly through the Nether's open biomes. With 10 HP, they are fragile but dangerous, launching explosive fireballs that destroy weak blocks like netherrack. Players can deflect these fireballs back at them for the 'Return to Sender' achievement. Ghasts spawn in 5x5x4 spaces within Nether Wastes, Soul Sand Valleys, and Basalt Deltas. Upon death, they drop gunpowder and ghast tears, which are vital for crafting End Crystals and brewing Regeneration potions. Their eerie wails alert players to their presence."
    },
    "minecraft:slime": {
        id: "minecraft:slime",
        name: "Slime",
        health: 16,
        stats: {
            attackDamage: "Big: 4 (Normal), Medium: 2 (Normal), Small: 0",
            movementSpeed: 0.2
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Slime chunks (Overworld, below Y=40)", "Swamp", "Mangrove Swamp"],
            lightLevel: "Any in slime chunks; 0-7 in swamps/mangrove swamps (Y=51-69)",
            groupSize: "1"
        },
        behaviorTraits: [
            "Hostile cube-like monster that attacks by colliding with targets while hopping",
            "Naturally spawns in three sizes (small, medium, big) and splits into smaller slimes when a larger one is killed",
            "Big slimes (16 HP) deal 4 damage; medium slimes deal 2 damage; small slimes deal 0 damage and cannot hurt",
            "Immune to fall damage",
            "Spawns in swamps at Y=51-69 at light level 7 or below; spawn frequency tied to moon phase (peaks at full moon)",
            "Spawns in slime chunks below Y=40 at any light level; Bedrock slime chunks are fixed and seed-independent",
            "During ominous trials, Trial Spawners can apply the Oozing effect, which spawns medium slimes when an affected entity dies"
        ],
        drops: [
            { item: "Slimeball", chance: "0-2 (small slimes; +1 per Looting level, max 5)" },
            { item: "Slimeball", chance: "1 (if killed by a frog)" },
            { item: "Experience", chance: "1 (small), 2 (medium), or 4 (big) (when killed by player/tamed wolf)" }
        ],
        description: "Slimes are bouncy, hostile mobs found deep underground in specific slime chunks (below Y=40) or in swamps at night (Y=51-69), where spawning depends on the moon phase. They appear in three sizes; large and medium slimes split into smaller versions when killed. Only the smallest slimes drop slimeballs when defeated. These items are crucial for crafting sticky pistons, leads, and slime blocks, making slimes a vital resource for redstone engineers and complex contraptions. Their unique jumping movement and splitting mechanic make them a distinct threat in dark caves and wetlands."
    },
    "minecraft:silverfish": {
        id: "minecraft:silverfish",
        name: "Silverfish",
        health: 8,
        stats: {
            attackDamage: 1,
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Strongholds", "Igloo Basements", "Windswept Hills (Infested Blocks)"],
            lightLevel: "0-7",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Hides inside stone, cobblestone, or stone brick blocks",
            "Calls all nearby Silverfish to attack when damaged",
            "Infests stone-based blocks to create Monster Eggs",
            "Extremely small hitbox makes them difficult to hit",
            "Takes extra damage from the Bane of Arthropods enchantment",
            "Slowed and damaged when walking over Soul Sand",
            "Does not spawn in Peaceful difficulty unless from a spawner"
        ],
        drops: [
            { item: "Experience", chance: "5" }
        ],
        description: "Silverfish are small, bug-like hostile mobs often found hiding in infested blocks within strongholds and mountain biomes. They are the smallest mobs in the game, making them hard to target. When a silverfish is attacked and not killed instantly, it summons other silverfish from nearby infested blocks to swarm the player. While they deal low individual damage, their ability to call reinforcements can quickly overwhelm an unprepared explorer in the narrow corridors of a stronghold."
    },
    "minecraft:magma_cube": {
        id: "minecraft:magma_cube",
        name: "Magma Cube",
        health: 16,
        stats: {
            attackDamage: 6,
            movementSpeed: "0.6-0.75"
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Basalt Deltas", "Nether Wastes", "Bastion Remnants", "Nether Fortress"],
            lightLevel: "Any",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Moves by jumping, expanding its body to reveal a molten core",
            "Splits into 2-4 smaller versions when a large or medium cube is killed",
            "Completely immune to fire, lava, and fall damage",
            "Big and medium magma cubes can damage players by touch or jumping",
            "Small magma cubes deal damage (unlike small Slimes)",
            "Able to jump over obstacles and swim in lava with ease",
            "Attack speed and jump height are higher than regular Slimes"
        ],
        drops: [
            { item: "Magma Cream", chance: "0-1 (from Big/Medium cubes)" },
            { item: "Experience", chance: "1-4 (varies by size)" }
        ],
        description: "Magma Cubes are hostile mobs found in the Nether, acting as the fire-resistant counterparts to Overworld slimes. They move in a series of leaps, stretching vertically to reveal their glowing interior. When defeated, larger cubes split into several smaller ones. Unlike small slimes, even the smallest magma cubes deal damage to players. They are the primary source of magma cream, a vital ingredient for brewing potions of Fire Resistance."
    },
    "minecraft:cave_spider": {
        id: "minecraft:cave_spider",
        name: "Cave Spider",
        health: 12,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.3
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Mineshafts (from spawners)"],
            lightLevel: "0-7",
            groupSize: "1"
        },
        behaviorTraits: [
            "Smaller than regular spiders, allowing them to fit through 0.5-block gaps",
            "Attacks inflict Poison for 7 seconds on Normal difficulty",
            "Can climb walls and vertical surfaces with ease",
            "Immune to the Poison status effect",
            "Becomes neutral in high light levels (9+) unless already aggressive",
            "Loses aggression if the player moves out of sight or stays far away",
            "Can leap at players from a distance of up to 5 blocks"
        ],
        drops: [
            { item: "String", chance: "0-2" },
            { item: "Spider Eye", chance: "0-1" },
            { item: "Experience", chance: "5" }
        ],
        description: "Cave Spiders are dangerous hostile mobs found exclusively in Mineshafts, where they spawn from monster spawners often surrounded by cobwebs. They are smaller than their surface-dwelling cousins, enabling them to navigate through tiny gaps and crawl over walls. Their most fearsome trait is their venomous bite, which poisons players and drains health over time. Due to their small size and the cramped, web-filled environments they inhabit, they can be difficult to hit and even harder to escape."
    },
    "minecraft:endermite": {
        id: "minecraft:endermite",
        name: "Endermite",
        health: 8,
        stats: {
            attackDamage: 2,
            movementSpeed: 0.25
        },
        classification: {
            type: "Hostile",
            undead: false
        },
        spawning: {
            biomes: ["Any (from Ender Pearl)"],
            lightLevel: "Any",
            groupSize: "1"
        },
        behaviorTraits: [
            "Has a 5% chance to spawn when a player throws an ender pearl",
            "Attacked by any Endermen within a 64-block radius",
            "Despawns within 2 minutes unless named with a name tag",
            "Small size allows it to fit through gaps smaller than a full block",
            "Moves quickly and attacks players with a melee bite",
            "Emits purple particles similar to Endermen and Shulkers"
        ],
        drops: [
            { item: "Experience", chance: "3" }
        ],
        description: "Endermites are the smallest hostile mobs in Minecraft, resembling small, purple silverfish. They have a 5% chance of spawning whenever a player throws an ender pearl. Endermen are naturally hostile to endermites and will attack them on sight within a 64-block range. Endermites are short-lived, despawning after two minutes unless given a name tag. While individually weak, their small hitbox and quick movement can make them a nuisance. They provide a unique interaction between player teleportation and the mysterious creatures of the End."
    }
};
