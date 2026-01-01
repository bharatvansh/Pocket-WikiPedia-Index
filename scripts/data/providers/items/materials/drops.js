// Pocket Wikipedia Foundation - Mob Drops Data
// ============================================
// This file contains: String, leather, feather, bone, gunpowder,
// slime ball, ender pearl, blaze rod, ghast tear, magma cream,
// nether star, shulker shell, phantom membrane, rabbit hide,
// rabbit foot, ink sac, glow ink sac, spider eye, rotten flesh,
// breeze rod, armadillo scute, turtle scute, nautilus shell,
// heart of the sea, dragon breath, totem of undying
// ============================================

/**
 * Mob drop items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const mobDrops = {
    "minecraft:breeze_rod": {
        id: "minecraft:breeze_rod",
        name: "Breeze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wind Charges and the Mace",
            secondaryUse: "Repairing Maces at an Anvil and duplicating Flow Armor Trim templates"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Breezes upon death", "Can also be found in Vaults and Ominous Vaults"]
        },
        specialNotes: [
            "Breezes drop 1-2 Breeze Rods (up to 8 with Looting III in Bedrock)",
            "Has an 11.5% chance to drop from standard Vaults",
            "Has a 5.5% chance to drop from Ominous Vaults",
            "One Breeze Rod can be crafted into four Wind Charges",
            "Required to craft the Mace when combined with a Heavy Core"
        ],
        description: "The Breeze Rod is a unique item dropped exclusively by Breezes in Trial Chambers. Similar to Blaze Rods, they serve as a fundamental crafting component for specialized items introduced in the 1.21 Tricky Trials update. A single Breeze Rod can be broken down into four Wind Charges or combined with a Heavy Core to create the powerful Mace weapon. Beyond crafting, Breeze Rods are essential for maintaining a Mace's durability at an anvil and can be used to duplicate the rare Flow Armor Trim smithing template."
    },
    "minecraft:armadillo_scute": {
        id: "minecraft:armadillo_scute",
        name: "Armadillo Scute",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wolf Armor to protect tamed wolves",
            secondaryUse: "Repairing damaged Wolf Armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by armadillos every 5-10 minutes", "Can also be obtained by brushing armadillos with a Brush"]
        },
        specialNotes: [
            "Dropped by armadillos every 5-10 minutes naturally",
            "Can also be obtained by brushing armadillos with a Brush",
            "Armadillos can be brushed while rolled up to obtain scutes",
            "Required to craft Wolf Armor, which provides wolves with 11 armor points",
            "Using an armadillo scute on a wolf wearing damaged armor repairs 8 durability points"
        ],
        description: "Armadillo Scutes are protective plating materials introduced in Minecraft 1.21, dropped periodically by armadillos or obtained by brushing them. These scutes are exclusively used to craft Wolf Armor, a new defensive equipment that can be equipped on tamed wolves to significantly increase their survivability. When wolves wear Wolf Armor, they gain substantial protection from damage, and the armor can be repaired by using additional armadillo scutes directly on the armored wolf. The armadillo's unique behavior of curling into a ball when threatened adds an engaging mechanic to obtaining these valuable scutes."
    },
    "minecraft:resin_clump": {
        id: "minecraft:resin_clump",
        name: "Resin Clump",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Block of Resin (9 clumps = 1 block)",
            secondaryUse: "Smelting into Resin Bricks in a furnace or smoker"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by attacking a Creaking Heart or hitting a Creaking mob linked to its heart", "Drops 1-3 Resin Clumps per hit"]
        },
        specialNotes: [
            "Creaking Hearts drop 1-3 Resin Clumps when attacked in Bedrock Edition",
            "Hitting a Creaking mob while it's linked to its heart also yields Resin Clumps",
            "Nine Resin Clumps can be crafted into one Block of Resin",
            "Resin Clumps can be smelted in a furnace or smoker to create Resin Bricks",
            "Block of Resin can be used to craft a Creaking Heart",
            "Added in Minecraft Bedrock Edition 1.21.50 as part of the Pale Garden biome content",
            "The Resin Clump has a vibrant orange color matching the Creaking aesthetic"
        ],
        description: "Resin Clumps are a unique resource material introduced in Minecraft Bedrock Edition 1.21.50, obtained exclusively from the Creaking Heart and Creaking mobs found in Pale Garden biomes. When a player attacks a Creaking Heart or strikes a Creaking mob while it remains linked to its heart, 1-3 Resin Clumps are dropped as a reward. These orange, resinous clumps serve as the primary crafting material for creating Blocks of Resin in a 3x3 crafting grid or smelting them in a furnace to create Resin Bricks. The process of obtaining Resin Clumps requires players to engage with the unique mechanics of the Creaking mob, creating an interactive harvesting experience tied to the atmospheric horror elements of the Pale Garden. This resource enables players to incorporate the distinctive orange resin aesthetic into their constructions while reproducing one of the 1.21 update's most memorable new features."
    },
    "minecraft:ender_pearl": {
        id: "minecraft:ender_pearl",
        name: "Ender Pearl",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Throwing to teleport to the landing location",
            secondaryUse: "Crafting Eyes of Ender to locate End portals"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Ender Pearl x1", "Blaze Powder x1"]
        },
        specialNotes: [
            "Dropped by Endermen when killed (0-2 pearls, up to 4 with Looting III)",
            "Can be found in End City chests and woodland mansions",
            "Tradeable from Cleric villagers for 4-7 emeralds (expert level)",
            "Teleportation causes 2.5 hearts (5 HP) of fall damage when landing",
            "Has a 1-second cooldown between throws",
            "Can cancel regular fall damage if thrown just before hitting the ground",
            "Teleports player across dimensions (can work from Overworld to Nether)",
            "Consumed upon use regardless of successful or failed teleport",
            "Has a small chance to spawn an Endermite when thrown",
            "Required item for accessing the End dimension via Eyes of Ender"
        ],
        description: "The Ender Pearl is a distinctive light purple item dropped by Endermen, one of the most iconic mobs in Minecraft. When thrown, an Ender Pearl teleports the player to its landing location while consuming the item, making it an invaluable tool for quick traversal, escaping danger, or reaching otherwise inaccessible areas. The teleportation comes at a cost of 2.5 hearts of fall damage, which can be mitigated by Feather Falling boots or armor enchantments. Beyond teleportation, Ender Pearls are essential for progression as they combine with Blaze Powder to craft Eyes of Ender, the critical items used to locate and activate End portals leading to the final dimension. Endermen typically drop 0-2 pearls upon death, with Looting enchantment increasing the drop to up to 4. These pearls can also be obtained from Cleric villagers through trading or found in chest loot in woodland mansions and End Cities. The Ender Pearl's unique teleportation mechanic, combined with its role in endgame progression, makes it one of the most strategically important items in Minecraft Bedrock Edition."
    },
    "minecraft:blaze_rod": {
        id: "minecraft:blaze_rod",
        name: "Blaze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Blaze Powder and Brewing Stands",
            secondaryUse: "Crafting End Rods, Copper Bulbs, and as furnace fuel"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Blazes in Nether Fortresses (0-1 per kill, up to 4 with Looting III)"]
        },
        specialNotes: [
            "Dropped exclusively by Blazes in Nether Fortresses",
            "Can be crafted into Blaze Powder (2 powder per rod)",
            "Required to craft Brewing Stands (1 rod in crafting grid)",
            "Used to craft End Rods (1 rod + 1 Blaze Powder)",
            "Used to craft Copper Bulbs (1 rod + 3 Copper Blocks)",
            "Acts as furnace fuel, smelting 12 items per rod",
            "More efficient fuel than coal (8 items) but less than coal blocks (80 items)",
            "Blaze Rods can be obtained by trading with Piglin Barons",
            "Essential item for brewing and accessing the End dimension",
            "Blaze Rods are renewable as Blazes can be spawned from spawners"
        ],
        description: "The Blaze Rod is a vital Nether-exclusive material obtained by defeating Blazes, the fiery creatures found in Nether Fortresses. These orange-golden rods serve multiple crucial functions in Minecraft's progression system. Their primary use is crafting Blaze Powder by placing a single rod in a crafting grid, which yields two powder. This powder is essential for brewing potions, fueling brewing stands, and crafting Eyes of Ender needed to access the End dimension. Blaze Rods themselves are directly used to craft Brewing Stands, End Rods for lighting in the End, and Copper Bulbs introduced in recent updates. Beyond crafting, Blaze Rods function as highly efficient furnace fuel, capable of smelting 12 items per rod—significantly more efficient than individual coal items. Blazes have a chance to drop 0-1 rods upon death, with the Looting enchantment potentially increasing the drop to 4. Their renewable nature through spawner farming makes them sustainable for long-term gameplay. The Blaze Rod's versatility across brewing, crafting, and fuel systems makes it one of the most valuable resources in the Nether and a cornerstone of advanced gameplay progression."
    }
};
