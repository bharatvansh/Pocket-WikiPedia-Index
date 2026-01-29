// Pocket Wikipedia Foundation - Spear Weapons Data
/** @type {Object.<string, import('../../item_types').ItemDetails>} */
export const spears = {
    "minecraft:diamond_spear": {
        id: "minecraft:diamond_spear",
        name: "Diamond Spear",
        maxStack: 1,
        durability: 1562,
        enchantable: true,
        usage: {
            primaryUse: "Reach-based melee combat",
            secondaryUse: "Jab and Charge attacks"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Diamond", "Stick x2"]
        },
        specialNotes: [
            "Increased reach compared to swords",
            "Deals 9 attack damage in Bedrock Edition",
            "Can be enchanted with Lunge, Sharpness, and Looting",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Diamond Spear is a powerful high-tier polearm added in the Mounts of Mayhem update. It offers superior reach compared to traditional swords, allowing players to keep foes at a distance. Crafted with a diamond and two sticks in a vertical pattern, it deals 9 damage per hit and can be upgraded to a Netherite version. Its unique lunge capability makes it a formidable weapon for both ground and mounted combat."
    },
    "minecraft:iron_spear": {
        id: "minecraft:iron_spear",
        name: "Iron Spear",
        maxStack: 1,
        durability: 251,
        enchantable: true,
        usage: {
            primaryUse: "Reliable reach-based combat",
            secondaryUse: "Mid-tier mounted combat"
        },
        combat: {
            attackDamage: 8,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Iron Ingot", "Stick x2"]
        },
        specialNotes: [
            "Deals 8 attack damage, outperforming the iron sword's reach",
            "Crafted with one Iron Ingot and two Sticks vertically",
            "Reliable mid-game weapon for safe enemy engagement",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Iron Spear is a versatile mid-tier polearm that provides players with a significant reach advantage. Introduced in the 1.21.130 Mounts of Mayhem update, it allows for safer engagement with hostile mobs by keeping them at a distance. Dealing 8 points of damage, it is a formidable alternative to the iron sword, especially when used while mounted. It shares the 251 durability of other iron tools and can be enchanted to further enhance its combat effectiveness."
    },
    "minecraft:copper_spear": {
        id: "minecraft:copper_spear",
        name: "Copper Spear",
        maxStack: 1,
        durability: 180,
        enchantable: true,
        usage: {
            primaryUse: "Accessible reach-based combat",
            secondaryUse: "Early-game mounted defense"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Copper Ingot", "Stick x2"]
        },
        specialNotes: [
            "Deals 7 attack damage (3.5 hearts) per hit",
            "Durability of 180 uses, slightly higher than stone",
            "An excellent early-game use for abundant copper ingots",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Copper Spear is an accessible early-game polearm introduced in version 1.21.130. It offers 7 points of damage and the signature extended reach of the spear family, making it safer to use than swords against early-game threats. With 180 durability, it outlasts stone weapons and provides a meaningful use for copper. Its vertical crafting recipe makes it easy to obtain once a player has mined basic resources, serving as a gateway to polearm combat."
    },
    "minecraft:netherite_spear": {
        id: "minecraft:netherite_spear",
        name: "Netherite Spear",
        maxStack: 1,
        durability: 2031,
        enchantable: true,
        usage: {
            primaryUse: "Elite reach-based combat",
            secondaryUse: "Powerful mounted attacks"
        },
        combat: {
            attackDamage: 10,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Smithing",
            ingredients: ["Netherite Upgrade Smithing Template", "Diamond Spear", "Netherite Ingot"]
        },
        specialNotes: [
            "Highest tier spear with 10 attack damage",
            "Superior durability (2031 uses) and fire resistance",
            "Enhanced reach for safe combat against dangerous mobs",
            "Upgraded from a Diamond Spear at a Smithing Table"
        ],
        description: "The Netherite Spear represents the pinnacle of polearm weaponry in Minecraft. It combines the extreme durability and fire resistance of netherite with the extended reach of the spear. Dealing 10 damage in Bedrock Edition, it is an elite choice for late-game combat, especially when facing large groups or mounted enemies. Like other netherite gear, it does not burn in lava and must be upgraded from its diamond counterpart."
    }
};
