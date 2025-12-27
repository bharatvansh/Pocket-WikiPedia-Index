// Pocket Wikipedia Foundation - Item Content Provider
// Provides detailed item information on demand

/**
 * @typedef {Object} ItemDetails
 * @property {string} id - Namespace ID
 * @property {string} name - Display Name
 * @property {number} maxStack - Maximum stack size
 * @property {number} durability - Durability value (0 if not applicable)
 * @property {boolean} enchantable - Whether the item can be enchanted
 * @property {Object} [usage] - Usage information
 * @property {string} [usage.primaryUse] - Primary use case
 * @property {string} [usage.secondaryUse] - Secondary use case
 * @property {Object} [combat] - Combat stats
 * @property {number} [combat.attackDamage] - Attack damage
 * @property {number} [combat.attackSpeed] - Attack speed
 * @property {Object} [crafting] - Crafting information
 * @property {string} [crafting.recipeType] - Recipe type
 * @property {string[]} [crafting.ingredients] - Required ingredients
 * @property {string[]} [specialNotes] - Special notes about the item
 * @property {string} description - Detailed description
 */

/**
 * Get detailed information for a specific item
 * @param {string} itemId
 * @returns {Promise<ItemDetails>}
 */
export async function getItemDetails(itemId) {
    const itemData = {
        "minecraft:iron_sword": {
            id: "minecraft:iron_sword",
            name: "Iron Sword",
            maxStack: 1,
            durability: 250,
            enchantable: true,
            usage: {
                primaryUse: "Melee combat",
                secondaryUse: "Breaking cobwebs quickly"
            },
            combat: {
                attackDamage: 6,
                attackSpeed: 1.6
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Iron Ingot x2", "Stick"]
            },
            specialNotes: [
                "Can be repaired with Iron Ingots",
                "Can receive Sharpness, Smite, or Bane of Arthropods"
            ],
            description: "The Iron Sword is a versatile weapon that deals moderate damage. It's more durable than wooden or stone swords but less powerful than diamond or netherite swords. Iron swords can be enchanted with various combat-related enchantments."
        },
        "minecraft:apple": {
            id: "minecraft:apple",
            name: "Apple",
            maxStack: 64,
            durability: 0,
            enchantable: false,
            usage: {
                primaryUse: "Food (restores 4 hunger)",
                secondaryUse: "Crafting Golden Apples"
            },
            crafting: {
                recipeType: "N/A",
                ingredients: ["Found naturally"]
            },
            specialNotes: [
                "Restores 2.4 saturation points",
                "Can drop from Oak and Dark Oak leaves"
            ],
            description: "Apples are a common food source that can be found in chests or obtained from oak trees. They restore 4 hunger points and 2.4 saturation points when eaten. Apples can also be crafted into golden apples for more powerful effects."
        },
        "minecraft:diamond_pickaxe": {
            id: "minecraft:diamond_pickaxe",
            name: "Diamond Pickaxe",
            maxStack: 1,
            durability: 1561,
            enchantable: true,
            usage: {
                primaryUse: "Mining blocks efficiently",
                secondaryUse: "Required to mine obsidian and ancient debris"
            },
            combat: {
                attackDamage: 5,
                attackSpeed: 1.2
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Diamond x3", "Stick x2"]
            },
            specialNotes: [
                "Can be repaired with Diamonds or another Diamond Pickaxe",
                "Can receive Efficiency, Fortune, Silk Touch, Unbreaking, and Mending enchantments",
                "Mining speed multiplier: 8x",
                "Essential for mining obsidian, ancient debris, and deepslate blocks efficiently"
            ],
            description: "The Diamond Pickaxe is one of the most durable and efficient mining tools in Minecraft. It's required to mine obsidian and ancient debris, making it essential for accessing the Nether and creating netherite equipment. With proper enchantments, it can last thousands of uses."
        },
        "minecraft:bow": {
            id: "minecraft:bow",
            name: "Bow",
            maxStack: 1,
            durability: 384,
            enchantable: true,
            usage: {
                primaryUse: "Ranged combat with arrows",
                secondaryUse: "Activating targets and buttons from distance"
            },
            combat: {
                attackDamage: 9,
                attackSpeed: 1.0
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Stick x3", "String x3"]
            },
            specialNotes: [
                "Damage ranges from 1 to 9 depending on charge time",
                "Can be enchanted with Power, Punch, Flame, Infinity, Unbreaking, and Mending",
                "Requires arrows to shoot (unless enchanted with Infinity)",
                "Fully charged arrows have maximum range of 120 blocks",
                "Can be repaired with another bow or string"
            ],
            description: "The Bow is a ranged weapon that shoots arrows at enemies from a distance. It must be charged before firing, with longer charge times resulting in more damage and longer range. Bows are essential for fighting enemies from safety and can be enhanced with various enchantments."
        },
        "minecraft:enchanted_golden_apple": {
            id: "minecraft:enchanted_golden_apple",
            name: "Enchanted Golden Apple",
            maxStack: 64,
            durability: 0,
            enchantable: false,
            usage: {
                primaryUse: "Food with powerful status effects",
                secondaryUse: "Emergency healing and protection"
            },
            crafting: {
                recipeType: "Uncraftable",
                ingredients: ["Found in loot chests"]
            },
            specialNotes: [
                "Restores 4 hunger points",
                "Provides Regeneration II for 20 seconds",
                "Provides Absorption IV for 2 minutes",
                "Provides Fire Resistance I for 5 minutes",
                "Provides Resistance I for 5 minutes",
                "Extremely rare, found in dungeons, desert temples, mineshafts, and bastions"
            ],
            description: "The Enchanted Golden Apple, also known as a Notch Apple, is an extremely rare and powerful food item. It provides multiple beneficial status effects including regeneration, absorption, fire resistance, and damage resistance. Unlike regular golden apples, it cannot be crafted and must be found in loot chests throughout the world."
        },
        "minecraft:trident": {
            id: "minecraft:trident",
            name: "Trident",
            maxStack: 1,
            durability: 250,
            enchantable: true,
            usage: {
                primaryUse: "Melee and ranged combat weapon",
                secondaryUse: "Can be thrown and retrieved"
            },
            combat: {
                attackDamage: 9,
                attackSpeed: 1.1
            },
            crafting: {
                recipeType: "Uncraftable",
                ingredients: ["Dropped by Drowned"]
            },
            specialNotes: [
                "Can be thrown as a ranged weapon dealing 8 damage",
                "Enchantable with Loyalty, Riptide, Channeling, Impaling, Unbreaking, and Mending",
                "Loyalty enchantment makes it return after throwing",
                "Riptide allows propelling yourself when thrown in water or rain",
                "Channeling summons lightning during thunderstorms",
                "Impaling increases damage against aquatic mobs",
                "Only obtainable from drowned mobs with a 6.25% drop chance"
            ],
            description: "The Trident is a unique weapon that can be used for both melee and ranged combat. It can be thrown like a spear and retrieved with the Loyalty enchantment. Tridents are obtained exclusively from drowned mobs and can be enhanced with special water-themed enchantments. When enchanted with Channeling, it can summon lightning strikes during thunderstorms."
        },
        "minecraft:shield": {
            id: "minecraft:shield",
            name: "Shield",
            maxStack: 1,
            durability: 337,
            enchantable: true,
            usage: {
                primaryUse: "Blocking incoming attacks",
                secondaryUse: "Cannot be smelted despite using iron"
            },
            combat: {
                attackDamage: 0,
                attackSpeed: 0
            },
            crafting: {
                recipeType: "Shaped",
                ingredients: ["Wooden Planks x6", "Iron Ingot"]
            },
            specialNotes: [
                "Blocks attacks from the front when sneaking (5 second cooldown)",
                "Durability damage equals attack strength rounded up (minimum 3)",
                "Can be enchanted with Unbreaking and Mending",
                "Can be repaired with wooden planks at an anvil",
                "Axes disable shields for 5 seconds when striking",
                "Blocks most melee attacks, projectiles, and some explosions"
            ],
            description: "The Shield is a defensive item used to block incoming attacks from the front. When equipped and sneaking, the player slows down but becomes immune to damage from frontal attacks. Shields can block melee attacks, arrows, and even some explosions. Despite requiring an iron ingot to craft, shields cannot be smelted. They can be enchanted with Unbreaking and Mending to increase durability."
        },
        "minecraft:elytra": {
            id: "minecraft:elytra",
            name: "Elytra",
            maxStack: 1,
            durability: 432,
            enchantable: true,
            usage: {
                primaryUse: "Glide through the air",
                secondaryUse: "Chest slot armor piece"
            },
            combat: {
                attackDamage: 0,
                attackSpeed: 0
            },
            crafting: {
                recipeType: "Uncraftable",
                ingredients: ["Found in End Ships"]
            },
            specialNotes: [
                "Found in End Ships of End Cities",
                "Durability decreases by 1 per second while gliding",
                "432 durability provides 7 minutes 12 seconds of flight without enchantments",
                "Firework rockets boost speed and don't damage elytra",
                "Unbreaking extends flight time significantly",
                "Durability cannot go below 1",
                "Can be repaired with phantom membranes at an anvil",
                "Takes chest armor slot and provides no protection"
            ],
            description: "The Elytra is a rare pair of wings found in End Ships that allows players to glide through the air. When equipped in the chest slot, jumping mid-air activates gliding mode. Elytra durability decreases by one point per second of flight, providing over 7 minutes of flight without enchantments. Firework rockets can be used to boost speed without damaging the elytra. With Unbreaking III, flight time extends to approximately 28 minutes."
        },
        "minecraft:netherite_ingot": {
            id: "minecraft:netherite_ingot",
            name: "Netherite Ingot",
            maxStack: 64,
            durability: 0,
            enchantable: false,
            usage: {
                primaryUse: "Upgrade diamond gear to netherite",
                secondaryUse: "Crafting beacon bases and netherite blocks"
            },
            crafting: {
                recipeType: "Crafting",
                ingredients: ["Netherite Scrap x4", "Gold Ingot x4"]
            },
            specialNotes: [
                "Netherite has blast resistance of 1,200",
                "Tools and armor float in lava and cannot burn",
                "Items drop as a block when destroyed by a wither or ghast fireball",
                "Can be crafted into a 3x3 netherite block for decorative storage",
                "Higher durability than diamond gear"
            ],
            description: "Netherite Ingots are the highest tier material in Minecraft, crafted from netherite scrap and gold ingots. They are used with a smithing table to upgrade diamond equipment to netherite, which offers increased durability and damage resistance. Netherite items float in lava and cannot be destroyed by fire. They are essential for end-game gear and are found in bastion remnant treasure chests."
        },
        "minecraft:shulker_box": {
            id: "minecraft:shulker_box",
            name: "Shulker Box",
            maxStack: 1,
            durability: 0,
            enchantable: false,
            usage: {
                primaryUse: "Portable 27-slot storage",
                secondaryUse: "Transporting items securely"
            },
            crafting: {
                recipeType: "Uncraftable",
                ingredients: ["Found in End Cities"]
            },
            specialNotes: [
                "Has 27 inventory slots for storage",
                "Items are preserved when the box is broken",
                "Can be dyed into 16 colors using dyes",
                "Dyed boxes can be undyed using a cauldron",
                "Cannot be placed inside other shulker boxes",
                "Provides 36 slots when stacked in a double chest configuration",
                "Makes a distinctive sound when opened"
            ],
            description: "Shulker Boxes are portable containers found in End Cities that provide 27 slots of storage space. When broken with a pickaxe, the shulker box drops with all its contents preserved, making them ideal for transporting large quantities of items. They can be dyed any of the 16 Minecraft colors to help organize storage or create aesthetic builds. Shulker boxes are essential for late-game exploration and base organization."
        }
    };

    if (itemData[itemId]) {
        return itemData[itemId];
    }

    throw new Error(`Item details not found for: ${itemId}`);
}
