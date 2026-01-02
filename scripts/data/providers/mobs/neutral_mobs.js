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
            "Neutral mobs that become hostile to the player when attacked",
            "Hunt small animals like rabbits and chickens by pouncing",
            "Can be bred with sweet berries and babies inherit trust status",
            "Sleep during the day and are active at night",
            "Can pick up items in their mouth and carry them",
            "Come in two variants: red (taiga) and white (snowy taiga)",
            "Can jump over fences and walls to reach prey or items"
        ],
        drops: [
            { item: "Experience", chance: "1-3" }
        ],
        description: "Foxes are nocturnal neutral mobs found in taiga biomes. They have two variants: red foxes in regular taigas and white foxes in snowy taigas. They sleep during the day and hunt small animals like rabbits and chickens at night. Players can breed them using sweet berries. Foxes possess unique traits, such as the ability to carry items in their mouths, pounce on prey, and jump over fences. They naturally avoid predators like wolves and polar bears. While generally passive, they will defend themselves if attacked. A fox born from breeding will trust the player, not fleeing like wild ones."
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
            "Neutral aquatic mobs that swim in groups and become hostile when attacked",
            "Provide a speed boost to players swimming nearby",
            "Lead players to nearby shipwrecks and buried treasure",
            "Can be fed raw cod or raw salmon to gain trust",
            "Swim faster when following boats",
            "Can be led with leads for transport",
            "Jump out of water frequently"
        ],
        drops: [
            { item: "Experience", chance: "1-3" }
        ],
        description: "Dolphins are neutral aquatic mobs found in ocean biomes. They swim in groups, follow boats, and jump out of water. Feeding them raw cod or salmon causes them to lead players to nearby shipwrecks and buried treasure. Swimming near a dolphin provides a speed boost. They can be guided with leads. If provoked, dolphins become hostile, dealing 2.5 damage on Easy, 3 on Normal, and 4.5 on Hard. They are highly intelligent, playful, and often assist players in navigating the seas."
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
            "Neutral in light levels 12 and above but hostile in the dark",
            "Climbs vertical surfaces including walls and fences",
            "Able to squeeze through gaps only 1 block high",
            "Jumps at targets from a distance to attack",
            "Movement speed increases significantly when hostile",
            "Unaffected by the slowing properties of cobwebs",
            "Can spawn with random potion effects on Hard difficulty"
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
            "Neutral mobs that become hostile when attacked or when their nest or hive is disturbed",
            "Nearby bees enrage and swarm when a bee is attacked",
            "Can only attack once, dying shortly after losing their stinger",
            "Inflict Poison effect on players when they sting",
            "Can be pacified using a campfire placed under their hive to safely harvest resources",
            "Collect nectar from flowers to produce honey and pollinate crops to advance growth stages",
            "Follow players holding flowers and can be bred with any flower"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (adult), 0 (baby)" }
        ],
        description: "Bees are neutral arthropods that spawn in nests within plains and flower forests. They spend days collecting nectar to produce honey and honeycomb. While peaceful, they swarm if provoked, stinging once and dying shortly after; their sting applies poison. Bees provide a major utility by pollinating crops to accelerate growth. To harvest honey safely without triggering an attack, place a campfire directly under the hive. Unlike other arthropods, they spawn in all difficulties, including Peaceful."
    },
    "minecraft:piglin": {
        id: "minecraft:piglin",
        name: "Piglin",
        health: 16,
        stats: {
            attackDamage: 5,
            movementSpeed: 0.35
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Nether Wastes", "Crimson Forest", "Bastion Remnant"],
            lightLevel: "Any",
            groupSize: "1-4"
        },
        behaviorTraits: [
            "Neutral mobs in the Nether that are hostile unless the player wears golden armor.",
            "Adult piglins can be bartered with using gold ingots to obtain items like ender pearls, fire charges, and obsidian.",
            "Aggravated when players attack piglins, open or break chests, or break gold-related blocks.",
            "Retreat from zombified piglins, zoglins, soul fire, soul torches, soul lanterns, and soul campfires.",
            "Adults wield golden swords or crossbows and are capable of opening and closing wooden or copper doors.",
            "Baby piglins are passive, do not barter, and retreat from withers and wither skeletons.",
            "If killed in one hit while admiring a gold ingot, the ingot is dropped."
        ],
        drops: [
            { item: "Piglin Head", chance: "If killed by charged creeper" },
            { item: "Gold Ingot", chance: "If holding when killed in one hit" },
            { item: "Equipped items/armor", chance: "If holding" }
        ],
        description: "Piglins are neutral Nether mobs found in Crimson Forests, Wastes, and Bastions. They attack players unless gold armor is worn. Use gold ingots to barter for items like ender pearls and obsidian. They turn hostile if you mine gold or open chests nearby. Adults hunt hoglins, while babies are passive. Piglins fear soul-related items and zombified piglins. If they enter the Overworld or End, they transform into zombified piglins after 15 seconds. Essential for Nether resource trading, they provide a unique gold-based economy."
    },
    "minecraft:iron_golem": {
        id: "minecraft:iron_golem",
        name: "Iron Golem",
        health: 100,
        stats: {
            attackDamage: 21,
            movementSpeed: 0.25
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Village", "Pillager Outpost"],
            lightLevel: "Any",
            groupSize: "Varies (based on village size)"
        },
        behaviorTraits: [
            "Naturally spawns in villages based on population or can be player-crafted with 4 iron blocks and a carved pumpkin.",
            "Protects villagers by attacking most hostile mobs within 16 blocks, though it ignores creepers.",
            "Naturally spawned golems become hostile if the player attacks villagers or has a low village reputation.",
            "Player-built golems remain permanently passive toward the player who created them.",
            "Immune to fall damage, drowning, and knockback, making it a highly resilient guardian.",
            "Shows visible health damage through physical cracks and can be healed using iron ingots.",
            "Cannot attack enemies positioned 3 or more blocks above them, a key tactical weakness."
        ],
        drops: [
            { item: "Iron Ingot", chance: "3-5" },
            { item: "Poppy", chance: "0-2" }
        ],
        description: "Iron Golems are durable village defenders with 100 HP. They spawn when villagers panic or can be built using four iron blocks in a T-shape topped with a pumpkin. They deal massive melee damage, flinging enemies upward, and are immune to fall damage and knockback. While player-made golems are loyal, natural ones attack players who harm villagers. They show damage through body cracks and can be repaired using iron ingots. When killed, they drop 3-5 iron ingots and poppies. Occasionally, they offer flowers to baby villagers."
    },
    "minecraft:wolf": {
        id: "minecraft:wolf",
        name: "Wolf",
        health: 8,
        stats: {
            attackDamage: 4,
            movementSpeed: 0.3
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Forest", "Taiga", "Snowy Taiga", "Old Growth Pine Taiga", "Old Growth Spruce Taiga", "Grove", "Savanna Plateau", "Sparse Jungle", "Wooded Badlands"],
            lightLevel: "Any",
            groupSize: "1-8 (varies by biome/variant)"
        },
        behaviorTraits: [
            "Neutral mob that becomes hostile when attacked; nearby wolves in the pack also become hostile",
            "Can be tamed using bones; a tamed wolf becomes loyal to its owner, can be commanded to sit, and gains 40 HP (20 hearts)",
            "Attacks by leaping and biting; deals 4 damage on Normal difficulty when angry",
            "Can be bred using meat, producing pups",
            "Collar color of a tamed wolf can be dyed",
            "Can be equipped with Wolf Armor crafted from armadillo scutes to help protect it from damage",
            "Has multiple variants that depend on the biome it spawns in, with different pack sizes in different biomes"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (adult; when killed by player/tamed wolf)" }
        ],
        description: "Wolves are neutral, pack-spawning animals best known for becoming one of the player's most useful companions. In the wild they are wary but will defend themselves aggressively if attacked—usually with their whole pack—while a tamed wolf will follow its owner, fight hostile mobs on command, and can be told to sit and stay. In Bedrock Edition 1.21+, tamed wolves have 40 HP (20 hearts) and can wear Wolf Armor crafted from armadillo scutes, making them much more resilient in combat. Wolves also come in several biome-based variants, encouraging exploration if you want to collect different looks."
    },
    "minecraft:ocelot": {
        id: "minecraft:ocelot",
        name: "Ocelot",
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
            biomes: ["Jungle", "Sparse Jungle"],
            lightLevel: "Any",
            groupSize: "1-2"
        },
        behaviorTraits: [
            "Wild jungle cats that are naturally skittish and flee from players",
            "Can be tamed using raw fish (cod or salmon) to become cats",
            "Tamed cats creep around and sit on chests, beds, and furnaces",
            "Creepers and phantoms are afraid of cats, making them useful for protection",
            "Will sprint and leap at chickens to hunt them",
            "Cannot be bred in Bedrock Edition unlike other tamed cats",
            "Come in four different color variations with spotted patterns"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Ocelots are skittish jungle cats found in jungle biomes. Naturally fearful, they sprint from players unless lured with raw cod or salmon. Once tamed, they transform into domestic cats that sit on chests and purr. They provide valuable base protection by scaring away creepers and phantoms. Additionally, their hunting instincts make them useful for automated chicken farms. Though they cannot be bred in Bedrock Edition, their unique spotted variations and ability to repel dangerous mobs make them a precious companion for any explorer."
    },
    "minecraft:polar_bear": {
        id: "minecraft:polar_bear",
        name: "Polar Bear",
        health: 30,
        stats: {
            attackDamage: 4,
            movementSpeed: 0.2
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Snowy Plains", "Ice Spikes", "Frozen Ocean", "Deep Frozen Ocean", "Frozen River", "Snowy Slopes"],
            lightLevel: "Any",
            groupSize: "1-2 (adults), 1 (baby with adult)"
        },
        behaviorTraits: [
            "Large arctic bears that spawn in snowy and icy biomes",
            "Neutral by default but become hostile if attacked or if players approach baby polar bears",
            "Adult polar bears attack with 4 damage on Normal difficulty",
            "Can be bred using fish, producing adorable white cubs",
            "Baby polar bears follow their parents and grow up over time",
            "Will swim in water to pursue players or escape danger",
            "Have natural resistance to cold and snow effects"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Polar bears are powerful neutral mobs found in snowy and icy biomes. Boasting 30 health (15 hearts), they are formidable predators that become aggressive if attacked or if a player nears their cubs. They are capable swimmers and deal significant damage. In Bedrock Edition, they can be bred using raw fish. Baby polar bears follow their parents and mimic their behavior towards players. Encountering these massive creatures requires caution, especially when offspring are present, as the adults will relentlessly defend their family in the harsh arctic environment."
    }
};
