// Pocket Wikipedia Foundation - Honeycomb Data

/**
 * Honeycomb item provider
 * @type {Object.<string, import('../../../item_types').ItemDetails>}
 */
export const honeycomb = {
    "minecraft:honeycomb": {
        id: "minecraft:honeycomb",
        name: "Honeycomb",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting beehives and candles",
            secondaryUse: "Waxing copper blocks to prevent oxidation"
        },
        crafting: {
            recipeType: "Harvested",
            ingredients: ["Shears on a Bee Nest or Beehive (Honey Level 5)"]
        },
        specialNotes: [
            "Obtained by shearing a bee nest or beehive",
            "Used to craft beehives, candles, and honeycomb blocks",
            "Can wax copper blocks to freeze their oxidation state",
            "Does not Anger bees if a campfire is placed under the hive",
            "Essential for beekeeping and copper preservation",
            "Can be used to craft waxed copper variants"
        ],
        description: "Honeycomb is a versatile material obtained by using shears on a bee nest or beehive when it is full of honey (level 5). It is primarily used to craft artificial beehives, allowing players to expand their apiaries, and to make candles for lighting and decoration. Additionally, honeycomb plays a crucial role in maintaining copper builds, as it can be used to wax copper blocks, freezing their oxidation process and preserving their current appearance."
    }
};
