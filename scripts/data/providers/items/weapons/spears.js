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
    },
    "minecraft:wooden_spear": {
        id: "minecraft:wooden_spear",
        name: "Wooden Spear",
        maxStack: 1,
        durability: 60,
        enchantable: true,
        usage: {
            primaryUse: "Basic reach-based melee combat",
            secondaryUse: "Safe engagement with early-game hostile mobs"
        },
        combat: {
            attackDamage: 5,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Planks x1", "Stick x2"]
        },
        specialNotes: [
            "Deals 5 attack damage (2.5 hearts) per hit",
            "Longer reach than a wooden sword, keeping enemies at distance",
            "Crafted with one Plank and two Sticks arranged vertically",
            "Lowest durability in the spear family (60 uses)",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Wooden Spear is the most basic polearm, added in the 1.21.130 Mounts of Mayhem update. While it has low durability, it provides a critical advantage for early-game survival: extended reach. This allows players to strike zombies and spiders from a distance where they cannot easily counter-attack. It is an inexpensive weapon to craft, requiring only a single wooden plank and two sticks. For new players, it serves as a safer alternative to the wooden sword during their first nights in the Overworld."
    },
    "minecraft:stone_spear": {
        id: "minecraft:stone_spear",
        name: "Stone Spear",
        maxStack: 1,
        durability: 132,
        enchantable: true,
        usage: {
            primaryUse: "Reliable reach-based combat",
            secondaryUse: "Early-game mounted combat defense"
        },
        combat: {
            attackDamage: 7,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cobblestone x1", "Stick x2"]
        },
        specialNotes: [
            "Deals 7 attack damage (3.5 hearts) per hit",
            "Matches the damage of a copper spear but with lower durability (132)",
            "Crafted with one Cobblestone (or Blackstone/Deepslate) and two Sticks",
            "Significant upgrade from wooden weaponry for early survival",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Stone Spear is a formidable early-game weapon that bridges the gap between basic wooden tools and metal armaments. Introduced in version 1.21.130, it offers 7 points of damage, making it statistically stronger than an iron sword but with restricted close-quarters utility. Its main benefit is the polearm reach, which is essential for fending off creepers and skeletons. It can be crafted from common cobblestone, blackstone, or cobbled deepslate, ensuring players can always have a reliable reach weapon at hand."
    },
    "minecraft:golden_spear": {
        id: "minecraft:golden_spear",
        name: "Golden Spear",
        maxStack: 1,
        durability: 33,
        enchantable: true,
        usage: {
            primaryUse: "Enchantment-heavy reach combat",
            secondaryUse: "Fast jab attacks and high-level enchantability"
        },
        combat: {
            attackDamage: 5,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Ingot x1", "Stick x2"]
        },
        specialNotes: [
            "Deals 5 attack damage (2.5 hearts) per hit",
            "Extremely low durability (33 uses), identical to the golden sword",
            "Highly enchantable, making it easy to obtain powerful spear-specific enchants",
            "Can be used by Piglins in the Nether in some situations",
            "Introduced in the Mounts of Mayhem update (1.21.130+)"
        ],
        description: "The Golden Spear is a specialized polearm characterized by its brilliant appearance and extreme fragility. While it deals the same damage as a wooden spear and lasts for only 33 strikes, it boasts the highest enchantability of any spear tier. This makes it a prime candidate for obtaining powerful enchantments like Lunge or Sharpness V with minimal investment. Introduced in the 1.21.130 update, it is often used as a trophy weapon or a temporary tool when high-level magic is more important than durability."
    }
};
