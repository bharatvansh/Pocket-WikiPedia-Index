// Pocket Wikipedia Foundation - Suspicious Stew Data

/**
 * Suspicious Stew item provider
 * @type {Object.<string, import('../../../item_types').ItemDetails>}
 */
export const suspiciousStew = {
    "minecraft:suspicious_stew": {
        id: "minecraft:suspicious_stew",
        name: "Suspicious Stew",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Restores hunger and gives a status effect",
            secondaryUse: "Used for various status effects like Night Vision or Fire Resistance"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Red Mushroom", "Brown Mushroom", "Bowl", "Any Flower"]
        },
        specialNotes: [
            "Restores 6 hunger and 7.2 saturation points",
            "Effect depends on the flower used in crafting",
            "Can be found in shipwreck supply chests",
            "Effects are hidden until consumed",
            "Obtained by milking a Brown Mooshroom fed with a flower",
            "Duration of effect varies by flower type",
            "Cannot be stacked in inventory"
        ],
        description: "Suspicious Stew is a unique food item that restores 6 hunger points and 7.2 saturation while granting a temporary status effect. The specific effect is determined by the flower used during crafting or fed to a Brown Mooshroom before milking. For example, using an Oxeye Daisy grants Regeneration, while a Blue Orchid grants Saturation. The effect remains hidden from the player until the stew is consumed, adding an element of mystery and strategy to its use."
    }
};
