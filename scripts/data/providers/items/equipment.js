// Pocket Wikipedia Foundation - Equipment Data
// Contains data for wearable/defensive equipment items

/**
 * Equipment data registry
 * @type {Object.<string, import('../item_types').ItemDetails>}
 */
export const equipment = {
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
    }
};
