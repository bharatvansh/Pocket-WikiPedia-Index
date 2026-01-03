// Pocket Wikipedia Foundation - Special Food Data
// ============================================
// This file contains: Golden apple, enchanted golden apple,
// golden carrot, honey bottle, rotten flesh, spider eye,
// poisonous potato, ominous bottle
// ============================================

/**
 * Special food items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const specialFood = {
    "minecraft:enchanted_golden_apple": {
        id: "minecraft:enchanted_golden_apple",
        name: "Enchanted Golden Apple",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Powerful food with status effects",
            secondaryUse: "PvP and boss fights"
        },
        food: {
            hunger: 4,
            saturation: 9.6
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in dungeon, mineshaft, desert temple, and ancient city chests"]
        },
        specialNotes: [
            "Grants Absorption IV for 2 minutes (8 extra hearts)",
            "Grants Regeneration II for 20 seconds in Java, 30 seconds in Bedrock",
            "Grants Fire Resistance I for 5 minutes",
            "Grants Resistance I for 5 minutes",
            "Cannot be crafted - must be found in loot chests",
            "Extremely rare drop from structure exploration"
        ],
        description: "The Enchanted Golden Apple, also known as the 'Notch Apple' or 'God Apple', is the most powerful food item in Minecraft. It provides multiple powerful status effects including Absorption, Regeneration, Fire Resistance, and Resistance, making it invaluable for difficult combat situations. Unlike regular golden apples, it cannot be crafted and must be found in dungeon chests."
    },
    "minecraft:ominous_bottle": {
        id: "minecraft:ominous_bottle",
        name: "Ominous Bottle",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Gaining Bad Omen effect for raids and trials",
            secondaryUse: "Triggering ominous events in villages and trial chambers"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Raid Captains and found in Vault chests"]
        },
        specialNotes: [
            "Available in levels I-V; Bedrock duration fixed at 100 minutes",
            "Bottle is consumed on use; grants Bad Omen effect",
            "Village use triggers Raid Omen (30s countdown to raid)",
            "Trial Chamber use triggers Trial Omen (ominous spawners active)",
            "Dropped by Raid Captains and found in Vaults (18.6% Standard, 13.4% Ominous)",
            "Higher levels increase event difficulty and rewards"
        ],
        description: "The Ominous Bottle is a consumable item that grants the Bad Omen effect (Levels I-V), replacing the banner mechanic. The level determines event difficulty: Raid Omen in villages or Trial Omen in Trial Chambers. It is dropped by Raid Captains or found in Vaults (18.6% Standard, 13.4% Ominous). In Bedrock, the effect lasts 1 hour and 40 minutes. The bottle shatters upon use, providing no empty bottle. It is the primary way to intentionally trigger raids and ominous trials."
    },
    "minecraft:honey_bottle": {
        id: "minecraft:honey_bottle",
        name: "Honey Bottle",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Food source that cures poison",
            secondaryUse: "Crafting Honey Blocks and Sugar"
        },
        food: {
            hunger: 6,
            saturation: 1.2
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Glass Bottle + Honey from Beehive/Bee Nest"]
        },
        specialNotes: [
            "Restores 6 hunger (3 drumsticks) and 1.2 saturation",
            "Removes the Poison status effect when consumed (but no other effects)",
            "Can be drunk even when hunger is full",
            "Crafting ingredient: 4 Honey Bottles make 1 Honey Block",
            "Crafting ingredient: 1 Honey Bottle makes 3 Sugar",
            "Harvested by using a Glass Bottle on a full Beehive or Bee Nest",
            "Campfire smoke is needed to harvest safely without angering bees"
        ],
        description: "A Honey Bottle is a consumable item obtained by using glass bottles on filled beehives or bee nests. It serves as a unique food source that can be consumed even when the hunger bar is full, restoring 6 hunger and 1.2 saturation. Unlike milk, drinking honey specifically cures the poison status effect without removing other buffs or debuffs. It is a key ingredient for crafting Honey Blocks or can be crafted into sugar. To harvest safely without angering bees, players should place a campfire beneath the hive or nest to pacify the colony before collection."
    },
    "minecraft:golden_carrot": {
        id: "minecraft:golden_carrot",
        name: "Golden Carrot",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Highly nutritious food",
            secondaryUse: "Breeding horses, donkeys, mules, and rabbits"
        },
        food: {
            hunger: 6,
            saturation: 14.4
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["8x Gold Nugget", "Carrot"]
        },
        specialNotes: [
            "Highest saturation value of any food in the game",
            "Used to brew Potions of Night Vision",
            "Can be used to breed or grow horses, donkeys, and rabbits",
            "Restores 6 hunger (3 drumsticks) and 14.4 saturation",
            "Considered one of the best food sources for end-game play"
        ],
        description: "The Golden Carrot is widely considered the best food source in Minecraft due to its exceptionally high saturation value, which keeps the player's hunger bar full for longer than any other food. It is crafted by surrounding a regular carrot with eight gold nuggets in a crafting table. Beyond its use as a superior food source, it is a critical ingredient in brewing Potions of Night Vision. Players also use golden carrots to breed horses, donkeys, mules, and rabbits, or to accelerate the growth of their offspring."
    },
    "minecraft:suspicious_stew": {
        id: "minecraft:suspicious_stew",
        name: "Suspicious Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        food: {
            hunger: 6,
            saturation: 7.2
        },
        usage: {
            primaryUse: "Eating to restore hunger and gain effects",
            secondaryUse: "Milking Brown Mooshrooms fed with flowers"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Red Mushroom", "Brown Mushroom", "Bowl", "Any Flower"]
        },
        specialNotes: [
            "Effect depends on the flower used (e.g., Dandelion gives Saturation)",
            "Effect duration varies (Saturation 0.3s, Night Vision 4s in Bedrock)",
            "Can be obtained by milking a Brown Mooshroom after feeding it a flower",
            "Found in Shipwreck supply chests and Ancient City chests",
            "Cannot be stacked"
        ],
        description: "Suspicious Stew is a unique food item that restores hunger and saturation while granting a short status effect. The specific effect is determined by the flower used in the crafting recipe or fed to a Brown Mooshroom before milking. Effects range from beneficial buffs like Saturation and Regeneration to harmful debuffs like Poison. Because it cannot be stacked, it is best used strategically rather than for bulk storage. It can be crafted or found in Shipwrecks and Ancient Cities."
    }
};
