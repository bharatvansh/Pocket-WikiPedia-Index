// Pocket Wikipedia Foundation - Utility Tools Data
// ============================================
// This file contains: Shears, flint and steel, fishing rod,
// carrot on a stick, warped fungus on a stick, lead, brush,
// spyglass, compass, clock, recovery compass, map, empty map,
// bucket, water bucket, lava bucket, powder snow bucket,
// milk bucket, axolotl bucket, fish buckets (all types)
// ============================================

/**
 * Utility tool items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const utilityTools = {
    "minecraft:brush": {
        id: "minecraft:brush",
        name: "Brush",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Used in archaeology to brush suspicious sand and suspicious gravel blocks.",
            secondaryUse: "Used on armadillos to obtain armadillo scutes for crafting wolf armor."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Feather", "Copper Ingot", "Stick"]
        },
        specialNotes: [
            "Loses 1 durability for each successful block brushed.",
            "Loses approximately 13 durability (20% of total) when used to brush an armadillo in Bedrock Edition, allowing for 5 uses.",
            "Can be enchanted with Unbreaking and Mending.",
            "Used to reveal buried loot such as pottery sherds, armor trims, and sniffer eggs."
        ],
        description: "The brush is a tool used primarily for archaeology and interacting with armadillos. By using it on suspicious sand or suspicious gravel, players can carefully reveal hidden items like ancient pottery sherds or armor trims. When used on an armadillo, it causes the mob to drop an armadillo scute, which is necessary for crafting wolf armor. Brushes are crafted using a feather, a copper ingot, and a stick in a vertical line. While Decorated Pots in Trial Chambers contain loot, they must be broken to retrieve it rather than brushed."
    },
    "minecraft:warped_fungus_on_a_stick": {
        id: "minecraft:warped_fungus_on_a_stick",
        name: "Warped Fungus on a Stick",
        maxStack: 1,
        durability: 100,
        enchantable: true,
        usage: {
            primaryUse: "Guiding and boosting saddled Striders across lava",
            secondaryUse: "Attracting nearby Striders"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Fishing Rod", "Warped Fungus"]
        },
        specialNotes: [
            "Used to control the direction of a Strider when riding it",
            "Right-clicking gives the Strider a speed boost but consumes 1 durability",
            "In Bedrock Edition, it has 100 durability",
            "Can be enchanted with Unbreaking, Mending, and Curse of Vanishing",
            "Crafted using a Fishing Rod and a Warped Fungus in any crafting grid",
            "If the fishing rod used in crafting has enchantments, they are removed",
            "When durability reaches 0, it turns back into a Fishing Rod",
            "Essential for safe Nether travel across lava oceans"
        ],
        description: "The Warped Fungus on a Stick is a utility tool used to control Striders, the passive mobs found in the Nether's lava oceans. Similar to how a Carrot on a Stick works for pigs, holding this item allows a player to steer a saddled Strider. By right-clicking (or using the item), the player can boost the Strider's speed, which consumes 1 point of the item's 100 durability. It is crafted by combining a Fishing Rod and a Warped Fungus. This tool is essential for traversing the Nether safely, as Striders can walk on lava without taking damage. Unlike Java Edition, in Bedrock Edition, when the item breaks, it reverts to a Fishing Rod rather than disappearing completely."
    },
    "minecraft:clock": {
        id: "minecraft:clock",
        name: "Clock",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying the time of day (position of the sun and moon).",
            secondaryUse: "Distracting Piglins."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x4", "Redstone Dust"]
        },
        specialNotes: [
            "Shows the current in-game time in the Overworld.",
            "In the Nether and End dimensions, the dial rotates clockwise and does not tell time.",
            "Can be placed in an Item Frame to create a wall clock.",
            "Piglins are attracted to clocks and will inspect them if dropped.",
            "Expert-level Librarian villagers sell clocks.",
            "Allows players to know when it is safe to sleep (dusk)."
        ],
        description: "A Clock is a utility item used to tell the time of day in Minecraft. It displays the position of the sun and moon on its dial, allowing players to determine if it is day or night, which is especially useful when underground. The clock functions correctly only in the Overworld; in the Nether or End, the dial rotates clockwise. Clocks can be crafted using four Gold Ingots and one Redstone Dust. Additionally, Piglins in the Nether are attracted to clocks and will run to inspect them if they are dropped on the ground."
    },
    "minecraft:compass": {
        id: "minecraft:compass",
        name: "Compass",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Pointing to the World Spawn point.",
            secondaryUse: "Can be used on a Lodestone to become a Lodestone Compass."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x4", "Redstone Dust"]
        },
        specialNotes: [
            "Points to the world spawn point, not the player's bed spawn.",
            "In the Nether and End, the needle spins wildly unless linked to a Lodestone.",
            "Can be used to craft a Map or Recovery Compass.",
            "Expert-level Librarian villagers sell compasses.",
            "Using a compass on a Lodestone links it to that specific block."
        ],
        description: "A Compass is a navigation tool that points to the world spawn point. It is essential for players exploring far from their starting location. By combining a compass with Paper, players can create an Empty Map. In the Nether or End dimensions, the compass needle spins randomly, rendering it useless for direction unless it is used on a Lodestone. When used on a Lodestone, it becomes a Lodestone Compass and points to that specific Lodestone block, allowing for navigation in all dimensions."
    },
    "minecraft:lead": {
        id: "minecraft:lead",
        name: "Lead",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Leashing and leading passive or neutral mobs.",
            secondaryUse: "Tying mobs to fence posts."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String x4", "Slimeball"]
        },
        specialNotes: [
            "Can be used to lead multiple mobs at once.",
            "Can leash Boats in Bedrock Edition.",
            "Breaks if the distance between the player and the mob becomes too great.",
            "Can be obtained from Wandering Traders or crafted.",
            "Dropped items from broken leads can be recovered."
        ],
        description: "A Lead (also known as a leash) is a tool used to guide passive and neutral mobs, such as horses, cows, and llamas. It can also be used to tie these mobs to a fence post to keep them in place. In Bedrock Edition, leads can even be attached to boats, allowing players to tow them. A lead is crafted using four Strings and a Slimeball. If the player moves too far or too fast from the leashed mob, the lead will break and drop as an item."
    },
    "minecraft:fishing_rod": {
        id: "minecraft:fishing_rod",
        name: "Fishing Rod",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Catching fish, treasure, and junk items",
            secondaryUse: "Hooking mobs, players, or items and pulling them"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x3", "String x2"]
        },
        specialNotes: [
            "Can be enchanted with Lure (decreases wait time) and Luck of the Sea (increases treasure chance).",
            "Used to craft Carrot on a Stick and Warped Fungus on a Stick.",
            "Hooking an entity costs 5 durability (or more depending on action).",
            "Can be used to activate pressure plates or tripwires from a distance."
        ],
        description: "The Fishing Rod is a versatile tool primarily used for fishing to obtain food, treasure (like enchanted books and nautilus shells), and junk items. It has a durability of 64, matching the Java Edition. Beyond fishing, it can hook onto mobs, players, and items, allowing the user to pull them closer. It is crafted using three sticks and two strings."
    },
    "minecraft:shears": {
        id: "minecraft:shears",
        name: "Shears",
        maxStack: 1,
        durability: 238,
        enchantable: true,
        usage: {
            primaryUse: "Shearing sheep, mooshrooms, and snow golems",
            secondaryUse: "Harvesting leaves, cobwebs, grass, ferns, dead bushes, and vines"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x2"]
        },
        specialNotes: [
            "Required to obtain Wool from Sheep without killing them (drops 1-3 wool).",
            "Can be used to break Tripwire without triggering it.",
            "Used to carve Pumpkins into Carved Pumpkins.",
            "Can be enchanted with Efficiency, Unbreaking, Mending, and Silk Touch.",
            "Harvesting blocks like leaves consumes durability, but shearing sheep does not consume durability in Creative mode."
        ],
        description: "Shears are a tool used to harvest blocks and items that cannot be obtained by hand or other tools, such as leaves, grass, ferns, dead bushes, vines, and cobwebs. They are essential for obtaining wool from sheep without killing them, yielding 1-3 blocks of wool per shear. Shears are also used to turn pumpkins into carved pumpkins and to harvest honeycombs from bee nests and hives. Crafted from two iron ingots, they have a durability of 238."
    },
    "minecraft:flint_and_steel": {
        id: "minecraft:flint_and_steel",
        name: "Flint and Steel",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Igniting blocks, TNT, and Nether Portals",
            secondaryUse: "Lighting campfires, candles, and creepers"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot", "Flint"]
        },
        specialNotes: [
            "Used to light Nether Portals to travel to the Nether.",
            "Can ignite TNT, which counts as a player kill if it kills a mob.",
            "Can be used to detonate Creepers instantly.",
            "Durability is consumed when successfully igniting a block.",
            "Enchantable with Unbreaking and Mending."
        ],
        description: "Flint and Steel is a tool used to create fire. Its most important use is activating Nether Portals by lighting the obsidian frame. It can also be used to ignite TNT, campfires, and candles. In combat, it can be used to set the ground on fire to damage mobs, or to force a Creeper to explode instantly. It is crafted using one Iron Ingot and one Flint."
    },
    "minecraft:milk_bucket": {
        id: "minecraft:milk_bucket",
        name: "Milk Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Consuming to remove all status effects",
            secondaryUse: "Crafting ingredient for Cake"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by using a Bucket on a Cow, Mooshroom, or Goat"]
        },
        specialNotes: [
            "Removes all positive and negative status effects (e.g., Poison, Regeneration, Bad Omen).",
            "Does not extinguish fire (fire is not a status effect).",
            "Returns an empty Bucket after drinking or crafting.",
            "Wandering Traders may drink milk to remove invisibility at night/dawn.",
            "Can be obtained from Cows, Mooshrooms, and Goats."
        ],
        description: "A Milk Bucket is a consumable item obtained by using an empty bucket on a cow, mooshroom, or goat. When drunk, it instantly removes all status effects from the player, including both positive ones (like Strength) and negative ones (like Poison or Bad Omen). This makes it extremely useful for countering witches, cave spiders, or the Wither effect. It is also a key ingredient in crafting Cake. Unlike water or lava buckets, milk buckets cannot be placed as a liquid block."
    },
    "minecraft:lava_bucket": {
        id: "minecraft:lava_bucket",
        name: "Lava Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing a Lava source block",
            secondaryUse: "Fuel in a Furnace (smelts 100 items)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by using a Bucket on a Lava source"]
        },
        specialNotes: [
            "Acts as a very efficient fuel source, lasting 1000 seconds (smelts 100 items).",
            "Can be used to create Obsidian (with Water) or Cobblestone/Stone generators.",
            "Can be dispensed by a Dispenser to place or pick up lava.",
            "Can be found in Ruined Portal chests.",
            "Returns an empty Bucket after placing the lava or being used as fuel."
        ],
        description: "A Lava Bucket is a tool used to transport and place lava source blocks. It is obtained by using an empty bucket on a lava source. It serves as an excellent fuel source for furnaces, blast furnaces, and smokers, capable of smelting 100 items per bucket—the longest-lasting fuel in the game. Care must be taken when handling lava, as it can cause fire and massive damage to players and structures. It is also essential for creating obsidian or cobblestone generators."
    },
    "minecraft:water_bucket": {
        id: "minecraft:water_bucket",
        name: "Water Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing a Water source block",
            secondaryUse: "Extinguishing fires and players on fire"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by using a Bucket on a Water source"]
        },
        specialNotes: [
            "Essential for creating infinite water sources.",
            "Used to perform 'MLG' water bucket clutches to negate fall damage.",
            "Can turn lava into obsidian or cobblestone.",
            "Required for farming to hydrate farmland.",
            "Can be dispensed by a Dispenser."
        ],
        description: "A Water Bucket is one of the most versatile tools in Minecraft, allowing players to transport and place water source blocks. It is obtained by scooping up water with an empty bucket. Players use it for a variety of tasks, including creating infinite water sources, hydrating crops for farming, climbing steep surfaces, and extinguishing fires. It is also famous for the 'water bucket clutch' technique, where players place water beneath them just before landing to completely negate fall damage."
    },
    "minecraft:powder_snow_bucket": {
        id: "minecraft:powder_snow_bucket",
        name: "Powder Snow Bucket",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing a Powder Snow block",
            secondaryUse: "Trapping mobs or players in freezing snow"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by using a Bucket on Powder Snow"]
        },
        specialNotes: [
            "Powder Snow causes entities inside it to freeze and take damage over time.",
            "Leather boots prevent the player from sinking into Powder Snow.",
            "Can be dispensed by a Dispenser.",
            "Obtained by using a bucket on a Cauldron filled with powder snow (during snowfall).",
            "Can be used to dampen fall damage."
        ],
        description: "A Powder Snow Bucket is a tool used to transport and place blocks of Powder Snow. Unlike regular snow, Powder Snow is a trap block that entities can sink into, causing them to freeze and take damage over time unless they are wearing leather armor. It is obtained by using an empty bucket on a Powder Snow block or a Cauldron filled with snow during a snowy weather event. It allows for the creation of traps and secret entrances, as players wearing leather boots can walk on top of it without sinking."
    }
};
