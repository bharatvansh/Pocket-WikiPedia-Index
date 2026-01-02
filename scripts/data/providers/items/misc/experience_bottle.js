// Pocket Wikipedia Foundation - Experience Bottle Data

/**
 * Experience Bottle item provider
 * @type {Object.<string, import('../../../item_types').ItemDetails>}
 */
export const experienceBottle = {
    "minecraft:experience_bottle": {
        id: "minecraft:experience_bottle",
        name: "Bottle o' Enchanting",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Thrown to release experience orbs",
            secondaryUse: "Mending items with the Mending enchantment"
        },
        crafting: {
            recipeType: "Trading",
            ingredients: ["Traded with Master-level Cleric villagers"]
        },
        specialNotes: [
            "Releases 3-11 experience points when thrown",
            "Obtained from trading with Cleric villagers or pillager outposts",
            "Useful for repairing Mending gear quickly",
            "Found in shipwrecks and buried treasure chests",
            "Also known as an Experience Bottle",
            "Does not require brewing to obtain"
        ],
        description: "The Bottle o' Enchanting (or Experience Bottle) is a throwable item that shatters on impact, releasing experience orbs worth 3 to 11 points. It is commonly obtained by trading with Master-level Cleric villagers or finding it in structure chests like shipwrecks and pillager outposts. This item is highly valuable for players looking to quickly repair tools and armor enchanted with Mending, as the released experience is immediately absorbed to repair durability."
    }
};
