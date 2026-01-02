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
            primaryUse: "Determining the time of day in the Overworld",
            secondaryUse: "Checking day/night cycle while underground"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x4", "Redstone Dust"]
        },
        specialNotes: [
            "Shows the position of the sun and moon on its dial.",
            "Works in the inventory, item frame, or when held.",
            "In Bedrock Edition, the dial rotates clockwise in the Nether and End dimensions.",
            "Villagers (Librarians) sell clocks.",
            "Piglins are attracted to clocks and will inspect them."
        ],
        description: "The Clock is a utility item that displays the current time of day by showing the position of the sun and moon on its dial. It is particularly useful for miners who spend long periods underground and need to know when it is safe to surface. The clock functions correctly only in the Overworld; in the Nether and End dimensions, the dial rotates clockwise (Bedrock Edition behavior), making it useless for telling time. Clocks can be crafted using four gold ingots and one redstone dust, or purchased from expert-level Librarian villagers. Additionally, Piglins in the Nether are attracted to clocks and will inspect them if thrown on the ground."
    },
    "minecraft:compass": {
        id: "minecraft:compass",
        name: "Compass",
        maxStack: 64,
        durability: 0,
        enchantable: true,
        usage: {
            primaryUse: "Pointing to the world spawn point",
            secondaryUse: "Creating Locator Maps"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot x4", "Redstone Dust"]
        },
        specialNotes: [
            "Points to the world spawn point, not the player's bed.",
            "Spins wildly in the Nether and End unless used on a Lodestone.",
            "Can be used on a Lodestone to create a Lodestone Compass.",
            "Required to add location markers to maps in Bedrock Edition.",
            "Can be enchanted with Curse of Vanishing."
        ],
        description: "The Compass is a navigation tool that primarily points to the world spawn point. It is essential for players exploring far from home who need a reliable way to navigate back to the initial spawn area. In the Nether and End dimensions, the compass needle spins uncontrollably, rendering it useless for standard navigation. However, using a compass on a Lodestone transforms it into a Lodestone Compass, which will then point to that specific Lodestone in any dimension. In Bedrock Edition, a compass is also required to craft a Locator Map or to add location markers to an existing map using an anvil or cartography table."
    },
    "minecraft:lead": {
        id: "minecraft:lead",
        name: "Lead",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Leashing and leading passive and neutral mobs",
            secondaryUse: "Tying mobs to fences"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String x4", "Slimeball"]
        },
        specialNotes: [
            "Can be used on most passive mobs, including horses, cows, and sheep.",
            "Can be attached to a fence post to tether the mob.",
            "Breaks if the mob moves more than 10 blocks away from the holder or fence.",
            "Dropped by Wandering Traders when they are separated from their llamas.",
            "Multiple mobs can be leashed at once."
        ],
        description: "The Lead (also known as a leash) is a tool used to guide or tether passive and neutral mobs. By using a lead on a mob, the player can pull it along, making it easier to transport animals over long distances or across difficult terrain. The lead can also be attached to a fence post, effectively tethering the mob to a specific location. Leads are crafted using four strings and one slimeball. They are also commonly obtained from Wandering Traders, who drop them when separated from their Trader Llamas. If a lead is stretched too far (more than 10 blocks), it will break and drop as an item."
    }
};
