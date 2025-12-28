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
    }
};
