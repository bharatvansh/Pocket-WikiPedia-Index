// Pocket Wikipedia Foundation - Passive Mobs Data
// Contains data for passive mob types

/**
 * Passive mobs data registry
 * @type {Object.<string, import('../mob_types').MobDetails>}
 */
export const passiveMobs = {
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
    },
    "minecraft:allay": {
        id: "minecraft:allay",
        name: "Allay",
        health: 20,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.4
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Woodland Mansion", "Pillager Outpost"],
            lightLevel: "Any",
            groupSize: "1-3"
        },
        behaviorTraits: [
            "Flying passive mob that collects items and delivers them to players",
            "Give it an item and it will find and collect dropped items of the same type within 32 blocks",
            "Delivers collected items to the player who gave it the item",
            "Follows players within 64 blocks even without line of sight",
            "Dances to note blocks when a disc is playing nearby",
            "Cannot be harmed by the player who gave it an item",
            "Regenerates 2 health per second when damaged",
            "Holds one stack of items (usually 64) plus the item it was given",
            "Spawns in cages at Woodland Mansions and Pillager Outposts",
            "Cannot open doors or pass through solid blocks",
            "Ignores item enchantments, names, and items in shulker boxes"
        ],
        drops: [
            { item: "Item held", chance: "If holding" }
        ],
        description: "Allays are flying passive mobs introduced in the Wild Update that collect and deliver items for players. When given an item, an allay will fly around searching for dropped items of the same type within a 32-block radius and deliver them to the player. Allays follow their assigned player from up to 64 blocks away, even through walls, making them excellent automated item collectors for farms. They dance happily when near active note blocks playing music discs. Allays spawn in cages at woodland mansions and pillager outposts. They cannot be harmed by the player who assigned them an item and regenerate health quickly when damaged. Their ability to automate item collection makes them invaluable for farming and sorting operations."
    },
    "minecraft:frog": {
        id: "minecraft:frog",
        name: "Frog",
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
            biomes: ["Swamp", "Mangrove Swamp"],
            lightLevel: "Any",
            groupSize: "2-5"
        },
        behaviorTraits: [
            "Passive mob that spawns naturally in swamp and mangrove swamp biomes",
            "Can jump up to 8 blocks high, higher than most mobs",
            "Takes 5 less damage from falling than other mobs",
            "Uses long tongue to eat small slimes and small magma cubes",
            "Eating small magma cubes produces froglights (Pearlescent, Verdant, or Ochre depending on frog variant)",
            "Can be bred with slimeballs",
            "Grows from tadpoles, which are spawned by frogs",
            "Three variants determined by biome where tadpole grew up: Temperate (orange), Warm (white), and Cold (green)",
            "Prefers jumping on lily pads and big dripleaves",
            "Swims naturally in water bodies",
            "Can jump into boats and minecarts"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" }
        ],
        description: "Frogs are passive mobs introduced in the Wild Update that inhabit swamp and mangrove swamp biomes. They are excellent jumpers, capable of leaping up to 8 blocks high and taking significantly reduced fall damage. Frogs use their long tongues to eat small slimes and small magma cubes—when they eat a small magma cube, it produces a froglight, a decorative light block that comes in three colors: Pearlescent (from warm frogs), Verdant (from cold frogs), and Ochre (from temperate frogs). Frogs come in three variants determined by the biome temperature where their tadpole stage matured. They can be bred using slimeballs and spawn naturally in groups of 2-5. Their unique ability to convert magma cubes into froglights makes them valuable for farming light sources, while their jumping behavior adds life to swamp environments."
    },
    "minecraft:camel": {
        id: "minecraft:camel",
        name: "Camel",
        health: 32,
        stats: {
            attackDamage: 0
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Desert Village"],
            lightLevel: "Any",
            groupSize: "1 (per village)"
        },
        behaviorTraits: [
            "Tall rideable passive mob that naturally spawns in desert villages",
            "One camel spawns in the center of each desert village during world generation",
            "Can be saddled and ridden by up to two players at once",
            "Has a dash ability while being ridden, letting it burst forward after a short charge",
            "Can sit down when idle; interacting causes it to stand",
            "Can be bred using cactus",
            "Its height makes it harder for many melee mobs to reach riders"
        ],
        drops: [
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf)" },
            { item: "Saddle", chance: "If equipped" }
        ],
        description: "Camels are tall passive mobs that spawn in desert villages. Unlike most mounts, they can carry two players at the same time, making them a convenient way to travel together without needing two separate animals. When ridden, camels can perform a short charged dash to quickly reposition or cross gaps, and their height often keeps riders safely above the reach of many ground-based melee attacks. Camels can be bred with cactus, and a saddle is required to ride them."
    },
    "minecraft:armadillo": {
        id: "minecraft:armadillo",
        name: "Armadillo",
        health: 12,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.14
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Savanna", "Savanna Plateau", "Windswept Savanna", "Badlands", "Eroded Badlands", "Wooded Badlands"],
            lightLevel: "7+",
            groupSize: "1-4 (varies by biome)"
        },
        behaviorTraits: [
            "Passive mob that naturally spawns in savanna and badlands biomes",
            "Rolls up when threatened, becoming more resistant to damage",
            "Spiders and cave spiders run away from armadillos",
            "Can be bred using spider eyes (breeding cooldown: 5 minutes)",
            "Can be brushed with a brush to knock off an armadillo scute",
            "Adults periodically shed an armadillo scute about every 5–10 minutes",
            "Armadillo scutes are used to craft wolf armor"
        ],
        drops: [
            { item: "Armadillo Scute", chance: "1 (every 5–10 minutes; also from brushing)" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf; adults)" }
        ],
        description: "Armadillos are passive overworld animals that protect themselves by curling into a ball when danger gets too close. Their presence has a practical perk: spiders and cave spiders will avoid armadillos, making them a natural deterrent in the wild. The armadillo’s most important resource is the armadillo scute, which can be brushed off or shed over time and is used to craft wolf armor—an upgrade that helps keep your canine companions safer in combat."
    },
    "minecraft:sniffer": {
        id: "minecraft:sniffer",
        name: "Sniffer",
        health: 14,
        stats: {
            attackDamage: 0,
            movementSpeed: 0.1
        },
        classification: {
            type: "Passive",
            undead: false
        },
        spawning: {
            biomes: ["Warm Ocean Ruins (Sniffer Eggs in suspicious sand)", "Player-bred (egg laid as an item)"],
            lightLevel: "Any",
            groupSize: "N/A (hatches from Sniffer Egg)"
        },
        behaviorTraits: [
            "Ancient passive mob that cannot spawn naturally; it must be hatched from a sniffer egg",
            "Sniffer eggs are obtained by brushing suspicious sand in warm ocean ruins",
            "Tempted and bred using torchflower seeds; breeding produces a sniffer egg item",
            "Occasionally sniffs and digs in dirt-like blocks to find ancient plant items",
            "Can dig up torchflower seeds and pitcher pods, letting players grow torchflowers and pitcher plants"
        ],
        drops: [
            { item: "Torchflower Seeds", chance: "Occasionally dug up while sniffing" },
            { item: "Pitcher Pod", chance: "Occasionally dug up while sniffing" },
            { item: "Sniffer Egg", chance: "Laid when breeding two sniffers" },
            { item: "Experience", chance: "1-3 (when killed by player/tamed wolf; adults)" }
        ],
        description: "Sniffers are massive, gentle creatures that bring a bit of archaeology into survival gameplay. They don’t appear through normal spawning—players must recover sniffer eggs from suspicious sand in warm ocean ruins (or breed existing sniffers) and hatch them. Once grown, sniffers occasionally stop to sniff the ground and dig up rare plant items like torchflower seeds and pitcher pods, allowing players to cultivate unique decorative plants."
    }
};
