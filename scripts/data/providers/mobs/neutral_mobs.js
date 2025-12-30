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
            "Neutral mobs found in the Nether that are hostile unless the player wears golden armor",
            "Can be bartered with using gold ingots to obtain various items including ender pearls, fire charges, and obsidian",
            "Adult piglins wield golden swords, crossbows, or golden spears (Java Edition)",
            "Baby piglins are passive, play with baby hoglins, and ride on them",
            "Piglins can open and close wooden and copper doors but cannot climb ladders",
            "Retreat from zombified piglins, zoglins, soul fire, soul torches, soul lanterns, and lit soul campfires",
            "Cannot swim and will drown if submerged in water",
            "Aggravated when players without gold armor get too close, attack piglins, open/break chests, or break gold-related blocks",
            "Crossbow piglins do not reload when spawned, only when provoked",
            "Baby piglins also retreat from wither skeletons and withers",
            "Piglins snort enviously when watching players holding gold-related items",
            "If killed in one hit while admiring a gold ingot, the ingot drops"
        ],
        drops: [
            { item: "Piglin Head", chance: "If killed by charged creeper" },
            { item: "Gold Ingot", chance: "If holding when killed in one hit" },
            { item: "Equipped items/armor", chance: "If holding" }
        ],
        description: "Piglins are neutral mobs native to the Nether that serve as the primary currency-based traders in the dimension. Adult piglins are hostile toward players unless they are wearing at least one piece of golden armor. When not provoked by non-gold-armored players, piglins will examine gold ingots dropped near them or presented directly, then offer random items in return through a bartering system. This unique trading mechanic provides players with valuable Nether-exclusive items including ender pearls, fire charges, obsidian, soul sand, crying obsidian, and various potions. Piglins spawn in Nether Wastes, Crimson Forests, and Bastion Remnants, where they defend the treasure structures. They come in both adult and baby variants—babies are passive and playful, often riding baby hoglins. Piglins can become aggravated by various actions including attacking them, opening or breaking chests, mining gold ore and blocks, or simply approaching without golden armor. They share a complex social structure with zombified piglins, fleeing from their undead counterparts and from soul-related blocks. Piglins cannot swim or climb ladders, making water an effective defensive barrier against them."
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
            "Naturally spawns in villages based on villager population and gossip",
            "Can be player-crafted with 4 iron blocks arranged in a T-shape and 1 carved pumpkin on top",
            "Protects villagers from hostile mobs within 16 blocks",
            "Attacks most hostile mobs including zombies, skeletons, and spiders",
            "Does not attack creepers directly but can be damaged by their explosions",
            "Immune to fall damage, drowning, and knockback",
            "Cannot be pushed by pistons or flowing water",
            "Player-built golems are permanently passive toward the player who created them",
            "Naturally spawned golems are neutral but become hostile if player attacks villagers or has low village reputation",
            "Cannot attack targets that are 3 or more blocks above them",
            "Offers poppies to villagers and baby villagers accept them",
            "Shows health through visible cracks: uncracked, low cracked, half cracked, and high cracked",
            "Can be healed using iron ingots (each restores 25 HP)",
            "Patrols villages and wanders near village boundaries",
            "Targets hostile mobs up to 16 blocks away and can attack through 1-block walls"
        ],
        drops: [
            { item: "Iron Ingot", chance: "3-5" },
            { item: "Poppy", chance: "0-2" }
        ],
        description: "Iron Golems are powerful neutral utility mobs that serve as the primary defenders of villages. With 100 health points (50 hearts), they are among the most durable mobs in Minecraft and deal devastating melee damage ranging from 7.5 to 32.25 HP depending on difficulty level. Iron Golems naturally spawn in villages when certain population requirements are met, appearing near gathering points or during villager panic states. They can also be player-crafted by arranging four iron blocks in a T-shape and placing a carved pumpkin or jack o'lantern on top, creating a permanent ally that never attacks its creator. Iron Golems exhibit unique defensive behaviors, actively seeking out and attacking hostile mobs within a 16-block radius to protect villagers. Their attack animation involves violently swinging their arms upward, launching enemies into the air with significant knockback. They possess several immunities including complete resistance to fall damage, drowning, and knockback effects, making them nearly unstoppable guardians. Iron Golems display social behaviors such as occasionally offering poppies to villagers, particularly baby villagers who accept the gift. Their health status is visually indicated by progressive cracking on their body texture, ranging from pristine to heavily damaged. Players can repair damaged Iron Golems by using iron ingots, with each ingot restoring 25 HP. Naturally spawned golems patrol village boundaries and can turn hostile toward players who harm villagers or develop poor village reputation. However, player-built golems remain permanently passive. When killed, Iron Golems drop 3-5 iron ingots and 0-2 poppies, making them a valuable but morally questionable source of iron. Their inability to attack targets elevated three blocks above them provides a safe strategy for players who need to defeat them without taking damage."
    },
    "minecraft:panda": {
        id: "minecraft:panda",
        name: "Panda",
        health: 20,
        stats: {
            attackDamage: 6,
            movementSpeed: 0.15
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Bamboo Jungle"],
            lightLevel: "9+",
            groupSize: "1-2"
        },
        behaviorTraits: [
            "Neutral mobs that generally act passively but retaliate once when attacked",
            "Spawn with one of 7 random personalities: Normal, Lazy, Worried, Playful, Aggressive, Weak, or Brown (rare variant)",
            "Lazy pandas move slower, lie on their backs, and do not pick up items",
            "Worried pandas shake during thunderstorms and hide their faces",
            "Playful pandas roll over and jump around frequently",
            "Aggressive pandas are hostile when players or other pandas are attacked",
            "Weak pandas have 10 HP (5 hearts) instead of 20 HP and sneeze often",
            "Brown pandas are a rare texture variant with no unique behaviors",
            "Baby pandas sneeze, which can startle nearby adult pandas and cause them to jump",
            "Eat bamboo items and cake from the ground",
            "Sit upright to eat bamboo, displaying a unique eating animation",
            "Can be bred with bamboo if there are at least 8 bamboo blocks within 5 blocks"
        ],
        drops: [
            { item: "Bamboo", chance: "0-2" },
            { item: "Slimeball", chance: "1 (rarely dropped by baby Weak pandas when sneezing)" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Pandas are clumsy and adorable neutral mobs found in bamboo jungles, known for their complex personality system. Unlike most mobs, pandas spawn with one of seven distinct traits—Normal, Lazy, Worried, Playful, Aggressive, Weak, or the rare Brown variant—which dictate their behavior. For instance, Lazy pandas are lethargic and refuse to interact with items, while Playful pandas constantly roll and tumble. Though generally peaceful, pandas will retaliate if attacked, with Aggressive pandas defending the entire group. They have a unique diet, sitting upright to eat bamboo or cake items dropped by players. Their breeding mechanic is also unique, requiring the presence of 8 nearby bamboo blocks to feel comfortable enough to mate. Baby pandas are particularly endearing, occasionally sneezing in a way that startles nearby adults and, in the case of Weak pandas, potentially dropping a slimeball. With their varied personalities and social behaviors, pandas add significant life and variety to jungle biomes."
    },
    "minecraft:polar_bear": {
        id: "minecraft:polar_bear",
        name: "Polar Bear",
        health: 30,
        stats: {
            attackDamage: "4 (Easy), 6 (Normal), 9 (Hard)",
            movementSpeed: 0.25
        },
        classification: {
            type: "Neutral",
            undead: false
        },
        spawning: {
            biomes: ["Snowy Plains", "Ice Spikes", "Frozen Ocean", "Deep Frozen Ocean"],
            lightLevel: "7+ (on grass), Any (on ice)",
            groupSize: "1-2 (often parent with cub)"
        },
        behaviorTraits: [
            "Neutral mobs that become hostile under specific conditions",
            "Adults are hostile when accompanied by cubs or when provoked",
            "Cubs are passive but will flee if attacked",
            "Attacking a cub causes all nearby adults to become hostile",
            "Attack by rearing up on hind legs and mauling with front paws",
            "Swim faster than players in water",
            "Hunt foxes in the wild (adults attack foxes within 16 blocks)",
            "Cannot be bred, but cubs grow into adults over time",
            "Drop raw cod or salmon when killed",
            "Immune to freezing damage from powder snow"
        ],
        drops: [
            { item: "Raw Cod", chance: "0-2 (75% chance)" },
            { item: "Raw Salmon", chance: "0-2 (25% chance)" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Polar Bears are majestic but dangerous neutral mobs that inhabit the frozen biomes of Minecraft. They are fiercely protective parents; while solitary adults are generally passive unless provoked, an adult accompanying a cub will attack players who get too close. This makes navigating icy biomes risky, as stumbling upon a family group can quickly turn deadly. Their attack is visually distinct, as they rear up on their hind legs to deliver powerful swipes that deal significant damage—up to 9 HP (4.5 hearts) on Hard difficulty. Polar bears are also excellent swimmers, capable of moving faster than players in water, which makes escaping them in frozen oceans difficult. They are natural predators of foxes and will actively hunt them. Unlike many other animals, polar bears cannot be bred by players, though naturally spawning cubs will eventually mature into adults. They provide a source of fish when killed but are primarily an ambient danger that reinforces the harsh nature of the snowy environments they call home."
    }
};
