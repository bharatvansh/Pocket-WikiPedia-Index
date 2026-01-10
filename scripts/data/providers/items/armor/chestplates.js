// Pocket Wikipedia Foundation - Chestplates Data
// ============================================
// This file contains: Leather tunic, chainmail chestplate,
// iron chestplate, golden chestplate, diamond chestplate,
// netherite chestplate, elytra
// ============================================

/**
 * Chestplate items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const chestplates = {
    "minecraft:netherite_chestplate": {
        id: "minecraft:netherite_chestplate",
        name: "Netherite Chestplate",
        maxStack: 1,
        durability: 592,
        enchantable: true,
        usage: {
            primaryUse: "Maximum torso protection and defense",
            secondaryUse: "Granting knockback resistance and fire immunity"
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Chestplate", "Netherite Ingot"]
        },
        specialNotes: [
            "Provides 8 armor points and 3 armor toughness",
            "Highest protection value for a single armor piece",
            "Increases knockback resistance by 10% (1 point)",
            "Fire-resistant and floats on lava; immune to fire damage",
            "Upgraded from Diamond Chestplate at a Smithing Table"
        ],
        description: "The Netherite Chestplate is the strongest body armor available in Minecraft Bedrock Edition. It provides a massive 8 armor points and 3 toughness points, making the wearer extremely resilient to physical damage. Like other netherite-tier items, it is completely immune to fire and lava, floating on top of lava pools if dropped. Obtaining it requires upgrading a Diamond Chestplate with a Netherite Ingot and a Smithing Template, making it a true late-game achievement for any survivor."
    },
    "minecraft:chainmail_chestplate": {
        id: "minecraft:chainmail_chestplate",
        name: "Chainmail Chestplate",
        maxStack: 1,
        durability: 240,
        enchantable: true,
        usage: {
            primaryUse: "Mid-tier torso protection",
            secondaryUse: "Rare collectible armor with unique appearance"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Mob drops from zombies and skeletons wearing armor", "Trading with Armorsmith villagers", "Finding in buried treasure, stronghold, or woodland mansion chests"]
        },
        specialNotes: [
            "Provides 5 armor points, same as golden chestplates",
            "Cannot be crafted; only obtainable through trading, mob drops, or loot chests",
            "Has higher enchantability (12) than iron armor (9)",
            "In Bedrock Edition, zombies drowned while wearing armor have 100% drop rate",
            "Armorsmith villagers sell chainmail chestplates for 4 emeralds at Journeyman level",
            "Durability of 240 matches iron chestplate durability"
        ],
        description: "The Chainmail Chestplate is a rare mid-tier body armor that cannot be crafted by players. It provides 5 armor points and 240 durability, matching the defensive stats of golden chestplates but with iron-tier durability. In Bedrock Edition, it can be obtained by trading with Journeyman-level Armorsmith villagers for 4 emeralds, from mob drops when armored zombies or skeletons are defeated, or rarely found in loot chests. Its distinctive chain-link appearance and rarity make it a prized collectible among players."
    }
};
