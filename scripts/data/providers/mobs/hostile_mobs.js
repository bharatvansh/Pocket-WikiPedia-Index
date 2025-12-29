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
        description: "Zoglins are the zombified, hostile counterparts of Hoglins, created when these normally Nether-exclusive beasts find themselves in the wrong dimension. When a Hoglin is brought into the Overworld or End, it undergoes a dramatic transformation after approximately 15 seconds, turning into a Zoglin that is permanently hostile to players and villagers alike. Unlike their temperamental but manageable Hoglin cousins, Zoglins cannot be pacified with crimson fungus or bred, making them pure hostile mobs. They retain their impressive stature and attack power, lunging at targets with devastating headbutt attacks and maintaining the Hoglin's broad attack range. Zoglins are immune to fire and lava, making them dangerous opponents in any environment. Encountering Zoglins typically means a player has either deliberately transported Hoglins from the Nether for farming purposes or accidentally brought them through a portal, creating a persistent threat that must be dealt with carefully due to their considerable health pool and aggressive nature."
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
            "Hostile mob that spawns in patrols, outposts, and during raids",
            "Attacks with crossbows from a distance",
            "Can shoot arrows, fireworks, or other projectiles depending on variant",
            "Captains have banners on their heads and lead patrols (no unique clothing)",
            "Remains aggressive until defeated, does not flee when low on health",
            "Can open doors and climb ladders",
            "During raids, attacks villagers and iron golems relentlessly",
            "Can be distracted by villagers running indoors",
            "Drops crossbows, iron gear, enchanted books, and emeralds during raids"
        ],
        drops: [
            { item: "Crossbow", chance: "8.5% (up to 11.5% with Looting III)" },
            { item: "Arrow", chance: "0-2" },
            { item: "Iron Axe/Sword", chance: "Raid only (varies by wave)" },
            { item: "Enchanted Book", chance: "Raid only (varies by wave)" },
            { item: "Emerald", chance: "Raid only (1-3)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" },
            { item: "Banner (if captain)", chance: "100%" }
        ],
        description: "Pillagers are hostile mobs that serve as the primary raiders in village attacks, appearing in patrols, outposts, and during raid events. Armed with crossbows, they attack from a distance, making them dangerous opponents who can deal damage while staying out of melee range. Pillagers come in different roles, with standard pillagers wearing identical brown clothing and captains distinguished solely by banners on their heads. During raids, pillagers work together aggressively to overwhelm village defenses, targeting both villagers and iron golems without retreating. They exhibit intelligent behavior such as opening doors to pursue targets and climbing ladders to gain advantageous positions. Pillagers drop valuable items including crossbows, arrows, and experience, with raid-specific drops including iron gear, enchanted books, and emeralds. Captains always drop their distinctive banners. Their presence in the Overworld adds a dynamic threat system, as players must defend villages from coordinated pillager attacks or face the consequences of lost villagers and damaged structures."
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
            "Spawns from active Creaking Hearts at night in Pale Garden biomes",
            "Completely freezes and cannot move when any player is looking at it within 12 blocks",
            "Unfreezes and pursues players when not being observed",
            "Attacks with melee headbutts dealing 2-3 HP (1-1.5 hearts) damage depending on difficulty",
            "Naturally spawned creakings are completely immune to damage while connected to their heart",
            "Breaking the Creaking Heart instantly kills its linked creaking",
            "When hit while protected, orange particle trails appear between creaking and heart",
            "Hitting a protected creaking causes resin-related particle effects to shoot outward",
            "Creakings spawned via spawn eggs or /summon are not connected to a heart and take normal damage",
            "Become dormant during daytime, turning into an inanimate block-like state",
            "Named creakings do not despawn during daytime (Java Edition 1.21.5+)"
        ],
        drops: [
        ],
        description: "Creakings are eerie hostile mobs introduced as part of The Garden Awakens game drop (following Minecraft 1.21) that emerge from Creaking Hearts at night in the mysterious Pale Garden biome. These unsettling creatures possess a unique and unsettling behavior: they completely freeze and become immobile whenever any player looks directly at them within a 12-block radius. When unobserved, they pursue players with aggressive headbutt attacks dealing 2-3 HP (1-1.5 hearts) of damage depending on difficulty level. The most distinctive feature of naturally spawned creakings is their complete invulnerability—they are protected by their source Creaking Heart and cannot take any form of damage as long as the heart remains intact. Breaking the heart instantly kills the creaking. When players attack a protected creaking, orange particle trails connect the creaking to its heart, accompanied by resin-related particle effects shooting outward, creating a haunting visual display. Creakings spawned via spawn eggs or commands exist independently without heart protection and can be damaged normally. During daylight hours, creakings become dormant, freezing in place and appearing as static blocks until nightfall. Their mysterious nature and unique observation-based behavior make them one of Minecraft's most psychologically unsettling hostile mobs, turning the simple act of looking into a survival mechanic."
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
            "Large, powerful hostile mob that spawns during raids",
            "Attacks by ramming into players and mobs with its head",
            "Can destroy crops and some blocks when moving",
            "Has 50% knockback resistance (not fully immune)",
            "Takes normal damage from arrows (not immune)",
            "Roars when attacking or when hit",
            "Can be ridden by pillagers during raids",
            "Drops saddle when killed",
            "Standard damage from all weapon types (no axe vulnerability in Bedrock)",
            "Has a large hitbox making it difficult to avoid"
        ],
        drops: [
            { item: "Saddle", chance: "100%" },
            { item: "Experience", chance: "20 (when killed by player/tamed wolf)" }
        ],
        description: "Ravagers are massive, destructive hostile mobs that appear during village raids, serving as powerful mounted units for pillagers. With an imposing size and 100 health points (50 hearts), ravagers are among the most durable naturally spawning hostile mobs in the Overworld. They attack by charging at targets and ramming them with their large heads, dealing significant damage and often knocking players back. Ravagers have the unique ability to destroy crops and some blocks as they move, leaving a trail of destruction in their path. They have 50% knockback resistance, making them difficult to push back, and take normal damage from all weapon types including arrows. During raids, pillagers can be seen riding ravagers, using them as mobile platforms to attack from a higher position. When defeated, ravagers always drop a saddle, making them a reliable source of this useful item. Their distinctive roaring sounds and massive presence make ravagers one of the most intimidating threats during village raids, requiring coordinated efforts from players and iron golems to defeat."
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
            "Permanently attached to blocks, typically found on End City structures",
            "Opens its shell periodically to reveal a small head with two eyes",
            "Shoots guided shulker bullets that follow targets along X, Y, or Z axes",
            "Shulker bullets deal 4 damage and inflict Levitation for 10 seconds",
            "Teleports to nearby blocks when hit or when its attachment becomes invalid",
            "Has 20 armor points when shell is closed, deflecting arrows",
            "Armor is removed when shell opens for attack",
            "Below half health, has 25% chance to teleport after taking damage",
            "Other nearby shulkers target the attacker when one is provoked",
            "Vulnerable to fire and lava damage, and drowns in water",
            "In Peaceful difficulty, does not attack but still exists in the world",
            "Can be dyed various colors in Bedrock Edition",
            "Drops 0-1 shulker shells (increased by Looting enchantment)"
        ],
        drops: [
            { item: "Shulker Shell", chance: "0-1 (Bedrock), 50% (Java)" },
            { item: "Shulker Shell", chance: "+1 per Looting level (max 4)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Shulkers are enigmatic hostile mobs that dwell within the mysterious End Cities, permanently affixed to various surfaces with their purpur-like shells. Resembling a cross between a sea creature and a mechanical trap, the shulker remains motionless for most of the time, blending seamlessly with its surroundings. When disturbed or when a target wanders within approximately 16 blocks, the shulker reveals its true nature by opening its shell to expose a small yellow head with two dark eyes. From this exposed position, it launches powerful projectiles called shulker bullets—guided missiles that track their targets along cardinal axes, leaving trails of white particles in their wake. These projectiles deliver both physical damage and the disorienting Levitation status effect, which causes affected entities to float helplessly upward for 10 seconds. Shulkers possess remarkable defensive capabilities; when their shell is closed, they have 20 armor points that deflect incoming arrows and reduce damage taken. However, this protection comes at a cost—the armor is lost when the shell opens to attack, creating a tactical window for experienced players. When threatened, shulkers demonstrate their incredible survival instincts by teleporting to nearby valid attachment points, making them difficult to pin down. They can evaluate up to 17×17×17 areas in search of suitable surfaces and will attempt to teleport up to 5 times per tick if necessary. Their shell coloration can be altered using dyes in Bedrock Edition, allowing for creative customization. Shulkers are essential to End City exploration, as they guard the valuable End City structures and drop shulker shells—an essential crafting component for creating shulker boxes and perpetuating the cycle of End-based automation and storage systems."
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
            "Large, aggressive pig-like mobs found exclusively in the Nether",
            "Attacks players within 16 blocks with powerful upward thrusts",
            "Knocks targets upward with each hit, even bypassing shields",
            "Highly resistant to knockback (60%)",
            "Repelled by warped fungi, nether portals, and respawn anchors within 7 blocks",
            "Can be bred using crimson fungi as food",
            "Baby hoglins are smaller, deal less damage, and flee when hit",
            "All nearby hoglins become aggressive when any hoglin is attacked",
            "Sink in water and eventually drown",
            "Vulnerable to fire and lava damage",
            "Can be led using leads despite being hostile",
            "If brought to the Overworld or End, transforms into a zoglin after 15 seconds",
            "Piglins that attack hoglins cause nearby hoglins to retaliate",
            "In Peaceful difficulty, hoglins spawn but remain passive to players"
        ],
        drops: [
            { item: "Raw Porkchop", chance: "2-4 (+1 per Looting level, max 7)" },
            { item: "Leather", chance: "0-1 (+1 per Looting level, max 4)" },
            { item: "Cooked Porkchop", chance: "If killed while on fire" },
            { item: "Experience", chance: "5 (JE) / 1-3 (BE) when killed by player/tamed wolf" }
        ],
        description: "Hoglins are formidable, pig-like hostile mobs that inhabit the dangerous crimson forests and bastion remnants of the Nether, representing one of the most challenging natural encounters in that dimension. Towering over the player with a massive, rust-colored bristled body, hoglins are immediately recognizable as dangerous adversaries. Their appearance blends the anatomy of a wild boar with demonic features—prominent downward-curving tusks, small angry eyes, and a hunched posture that suggests constant aggression. These mobs attack with surprising force, thrusting their tusks upward in a motion that can launch unprepared players several blocks into the air, dealing significant damage in the process. This upward knockback is particularly dangerous because it can throw players into lava, off ledges, or into the path of other Nether hazards. Hoglins possess remarkable physical resilience, being 60% resistant to knockback effects and capable of pushing through most obstacles to reach their targets. Despite their aggressive nature, hoglins have some fascinating behaviors and ecological relationships. They are naturally repelled by the blue-hued warped fungi, nether portals, and respawn anchors, fleeing from these objects when within 7 blocks—useful knowledge for setting up safe pathways through Crimson Forests. Hoglins are one of only two hostile mobs in Minecraft that can be bred (the other being the killer bunny), accepting crimson fungi as breeding food and producing piglin-like offspring that grow into adult hoglins after 20 minutes. They share a complex social structure with piglins; while piglins occasionally hunt hoglins for food, hoglins will retaliate en masse if a piglin attacks one of their own, creating dynamic territorial conflicts that players can exploit. Perhaps most remarkably, hoglins cannot survive in the Overworld or the End—after just 15 seconds in these dimensions, they undergo a dramatic transformation, shaking violently before morphing into a zoglin, a permanent undead variant with the same aggressive tendencies but none of the breeding capabilities. When killed, hoglins provide valuable resources: raw porkchops for sustenance and leather for crafting, making them worth the significant danger they represent to any Nether explorer."
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
            "Flying hostile mob found in and around Nether Fortresses",
            "Frequently spawns from blaze spawners inside Nether Fortresses",
            "Hovers and moves freely through the air, often rising while attacking",
            "Attacks primarily at range by firing bursts of small fireballs (typically three shots)",
            "Fireballs can set targets on fire and ignite blocks they impact",
            "Immune to fire, lava, and the Burning status effect",
            "Takes damage from water and rain; snowballs deal 3 damage per hit",
            "Can deal melee damage at close range and may ignite targets",
            "A key source of blaze rods for potion brewing and End progression"
        ],
        drops: [
            { item: "Blaze Rod", chance: "0-1 (up to 4 with Looting III)" },
            { item: "Experience", chance: "10 (when killed by player/tamed wolf)" }
        ],
        description: "Blazes are flying hostile mobs that inhabit Nether Fortresses, where they act as dangerous ranged defenders and a major progression gate for potion brewing. A blaze attacks by hovering at range and firing bursts of small fireballs, which can both damage and ignite their target, making extended fights especially punishing without fire protection. While blazes are completely immune to fire and lava, they have a notable weakness to water-based damage—rain and direct water contact harm them, and snowballs are an effective low-cost counter that deal 3 damage per hit. Blazes are sought after because they drop blaze rods, which can be crafted into blaze powder. Blaze powder powers brewing stands and is also combined with ender pearls to craft eyes of ender, an essential item for locating strongholds and reaching The End."
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
            "Larger, stronger variant of the guardian that serves as the boss of ocean monuments",
            "Inflicts Mining Fatigue III on all players within 50 blocks, significantly slowing mining and attack speed",
            "Mining Fatigue effect lasts 5 minutes and makes it nearly impossible to break blocks like prismarine and sea lanterns",
            "Attacks with a powerful laser beam that deals damage based on difficulty (5 on Easy, 8 on Normal, 12 on Hard)",
            "Laser charges slower than regular guardian's laser but deals more damage",
            "Defensive spikes inflict retaliatory damage when attacked with melee (2 on Easy/Normal, 3 on Hard)",
            "Spikes can be retracted and extended depending on activity level",
            "Swims slower than regular guardians but has more health and stronger attacks",
            "Eye follows and stares at nearby players, similar to regular guardians",
            "Cannot attack players under Invisibility potion effects unless wearing armor",
            "Does not suffocate and can survive indefinitely out of water",
            "When out of water, flops on land and is vulnerable to player attacks",
            "Affected by the Impaling enchantment (Effective on all wet mobs in Bedrock)",
            "Drops a wet sponge when killed, a renewable source of sponge blocks"
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
        description: "The Elder Guardian is the formidable boss guardian that rules over ocean monuments, serving as the ultimate defender of these underwater structures. With 80 health points (40 hearts), it is significantly larger and more powerful than regular guardians, possessing a distinctive appearance with larger spikes and a more menacing eye. The Elder Guardian's most dangerous ability is its Mining Fatigue III aura, which automatically affects all players within a 50-block radius for 5 minutes. This debilitating effect dramatically slows mining speed, makes combat sluggish by reducing attack speed, and renders players nearly incapable of breaking monument blocks such as prismarine, sea lanterns, and gold blocks—effectively forcing players to confront the boss head-on rather than tunneling around it. The Elder Guardian attacks with a slower-charging but more damaging laser beam that inflicts 5 damage on Easy difficulty, 8 on Normal, and 12 on Hard. Like regular guardians, it possesses defensive spikes that automatically retaliate against melee attackers. The Elder Guardian is a valuable target because it always drops one wet sponge when killed, providing a renewable method of obtaining sponge blocks that can be dried into regular sponges for building and decoration. Since the 1.20 update, Elder Guardians also have a 20% chance to drop the Tide Armor Trim Smithing Template in Bedrock Edition, allowing players to customize their armor with ocean-themed designs. It also drops prismarine materials and various fish, making ocean monument raids rewarding beyond just the treasure chambers. Defeating the three Elder Guardians in a monument is a significant milestone, as it removes the Mining Fatigue effect and allows players to mine the valuable gold blocks, sea lanterns, and prismarine within the structure. The Elder Guardian's combination of high health, damaging attacks, and its devastating Mining Fatigue aura makes it one of the most challenging underwater encounters in Minecraft."
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
            "Flying hostile mob that spawns after a player hasn't slept for at least 3 in-game days",
            "Number of phantoms increases as more days pass without sleep (1-4 after 3 days, up to 6-10 after many days)",
            "Only spawns at night or during thunderstorms, despawns at dawn",
            "Flies in circles above the player, waiting for an opportunity to swoop down",
            "Swoops down to attack when the player is not looking up or when given the chance",
            "Each swoop attack deals damage based on difficulty (6 on Easy, 9 on Normal, 13 on Hard)",
            "Can be attacked during its swoop when it gets close to the player",
            "Burns in sunlight like other undead mobs when day arrives",
            "Cannot pass through closed trapdoors or glass, can pass through open doors",
            "Undead creature, affected by Smite enchantment and harmed by regeneration potions",
            "Can detect players from up to 64 blocks away",
            "Makes distinctive ghostly screeching sounds that can be heard from a distance",
            "When idle, circles slowly above the player at a high altitude",
            "Cannot be ridden or tamed, only hostile",
            "Will despawn peacefully if the player goes to sleep (ending the sleepless streak)"
        ],
        drops: [
            { item: "Phantom Membrane", chance: "0-1 (increased by Looting)" },
            { item: "Experience", chance: "5 (when killed by player/tamed wolf)" }
        ],
        description: "Phantoms are terrifying flying hostile mobs that materialize in the night sky when players have not slept for at least three consecutive in-game days. These ghostly creatures appear as large, translucent winged entities with glowing green eyes, haunting sleepless adventurers as punishment for their insomnia. Phantoms spawn in groups that increase in size the longer a player goes without sleeping—starting with 1-4 after three sleepless nights and potentially reaching 6-10 after many days without rest. During combat, phantoms fly in lazy circles high above their target, periodically swooping down to deliver a devastating melee attack that deals 6 damage on Easy, 9 on Normal, and 13 on Hard difficulty. These significantly higher damage values make phantoms particularly dangerous in Bedrock Edition compared to other versions. Players must time their attacks carefully during these swoops, as phantoms are otherwise difficult to hit when circling at altitude. Being undead mobs, phantoms burn in sunlight when morning arrives and take extra damage from the Smite enchantment. Their most valuable drop is the phantom membrane, a crucial crafting material used to repair elytra, the coveted wings that allow players to glide through the air. Each phantom drops 0-1 membranes, making them the primary renewable source for elytra repair. Phantoms also drop experience when killed. The best way to prevent phantom spawns is to sleep regularly in a bed, which resets the insomnia counter and causes all pursuing phantoms to despawn peacefully. Their eerie presence in the night sky serves as a constant reminder to players that rest is essential in the harsh world of Minecraft."
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
            "Hostile undead aquatic variant of zombies that spawns in oceans and rivers",
            "Regular zombies that remain submerged in water long enough can convert into drowned",
            "Swims effectively and can fight players underwater",
            "Often sinks and walks along the sea floor, especially when patrolling",
            "Some drowned spawn equipped with tridents, giving them dangerous ranged attacks",
            "Trident-wielding drowned throw their tridents and can continue fighting at close range",
            "May spawn holding nautilus shells or other equipment",
            "Burns in direct sunlight when on land, but is safe from sunlight while underwater",
            "Can pick up items and armor like other zombie-type mobs"
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
        description: "Drowned are waterlogged undead that haunt oceans and rivers, acting as the aquatic counterpart to zombies. They spawn naturally underwater in dark areas, and can also be created when regular zombies remain submerged long enough to convert. Drowned are much more threatening in water than on land: they swim well, pursue players through underwater caves and ruins, and often patrol by sinking and walking along the sea floor. Their most notable variant is the trident-wielding drowned, which can attack from range by throwing its trident—an encounter that can be especially dangerous for players without good armor, shields, or water mobility. Drowned are also an important farming target because tridents are exclusive to drowned and can be enchanted with powerful effects such as Loyalty, Riptide, and Channeling. Some drowned can also carry nautilus shells, a key component for crafting conduits, making them relevant to long-term underwater base building."
    }
};
