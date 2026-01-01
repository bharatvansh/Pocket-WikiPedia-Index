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
    "minecraft:blaze_rod": {
        id: "minecraft:blaze_rod",
        name: "Blaze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Brewing Stand, Blaze Powder, End Rods, and Copper Bulbs",
            secondaryUse: "Fuel for furnaces (smelts 12 items per rod)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Blazes in Nether fortresses"]
        },
        specialNotes: [
            "Blazes drop 0-1 Blaze Rods on death (up to 4 with Looting III in Bedrock Edition)",
            "One Blaze Rod crafts into two Blaze Powder",
            "Blaze Powder is essential for brewing potions",
            "Blaze Rods can be used as furnace fuel, smelting 12 items per rod",
            "Required to craft Brewing Stand (1 Blaze Rod + 3 Cobblestone/Blackstone/Cobbled Deepslate)",
            "Required to craft End Rods (1 Blaze Rod + 1 Popped Chorus Fruit)",
            "Required to craft Copper Bulbs (1 Blaze Rod + 3 Copper Blocks + 1 Redstone Dust)",
            "Blaze Powder is used to craft Eyes of Ender for finding strongholds",
            "Blazes spawn exclusively in Nether fortresses",
            "Essential for potion brewing and accessing the End dimension"
        ],
        description: "Blaze Rods are essential Nether materials dropped exclusively by Blazes, the fiery hostile mobs that spawn in Nether fortresses. Each Blaze has a chance to drop 0-1 Blaze Rods upon death, with Looting III enchantment increasing the maximum drop to 4 rods in Bedrock Edition. These blazing-hot rods serve multiple critical functions in Minecraft progression: they are smelted into Blaze Powder, the fundamental ingredient for brewing potions and crafting Eyes of Ender. A single Blaze Rod produces two Blaze Powder, and rods can also be used directly as furnace fuel, smelting 12 items per rod. The Brewing Stand, essential for all potion brewing, requires one Blaze Rod and three stone-tier blocks to craft. Beyond brewing, Blaze Rods are direct crafting ingredients for End Rods, decorative light sources for End Cities, and Copper Bulbs, toggleable light sources introduced in the Tricky Trials update. Blaze Powder combines with Ender Pearls to create Eyes of Ender, which are necessary for locating and activating End Portals to access the End dimension and defeat the Ender Dragon. Without Blaze Rods, players cannot brew potions or reach the End, making them one of the most important progression items in the game."
    },
    "minecraft:nautilus_shell": {
        id: "minecraft:nautilus_shell",
        name: "Nautilus Shell",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Conduits for underwater power",
            secondaryUse: "Decorative item and trading resource"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from fishing", "Dropped by Drowned", "Purchased from Wandering Traders"]
        },
        specialNotes: [
            "Can be caught as 'treasure' while fishing (1.2% chance with a regular rod)",
            "Drowned have an 8% chance to spawn holding a shell in their off-hand; they always drop it upon death",
            "Wandering Traders sell them for 5 Emeralds each",
            "Essential for crafting Conduits (8 Nautilus Shells + 1 Heart of the Sea)",
            "Unlike some other shells, it cannot be placed as a block"
        ],
        description: "The Nautilus Shell is a beautiful, spiral-patterned item found throughout the oceans of Minecraft. It serves as a critical component in late-game underwater exploration, as eight of these shells must be combined with a Heart of the Sea to craft a Conduit. Conduits provide players with the 'Conduit Power' effect, granting water breathing, night vision, and increased mining speed when submerged. Players can obtain nautilus shells through several methods: they are a rare treasure that can be caught while fishing, can be purchased from Wandering Traders for emeralds, or can be looted from Drowned mobs who are occasionally seen clutching them in their hands. Because of their necessity for building permanent underwater bases, nautilus shells are highly valued by ocean-dwelling players."
    },
    "minecraft:slime_ball": {
        id: "minecraft:slime_ball",
        name: "Slimeball",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sticky Pistons, Magma Cream, Slime Blocks, and Leads",
            secondaryUse: "Breeding Frogs and speeding up Tadpole growth"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Slimes", "Sneezed by Baby Pandas", "Sold by Wandering Traders"]
        },
        specialNotes: [
            "Primary drop from Slimes (small size)",
            "Used to craft Sticky Pistons (Slimeball + Piston)",
            "Used to craft Leads (Slimeball + 4 String)",
            "Used to craft Magma Cream (Slimeball + Blaze Powder)",
            "Used to craft Slime Blocks (9 Slimeballs)",
            "Key ingredient for Redstone contraptions requiring sticky mechanics",
            "Baby Pandas have a small chance (1/700) to drop one when they sneeze",
            "Wandering Traders may sell them for 4 Emeralds"
        ],
        description: "The Slimeball is a gelatinous material primarily obtained from defeating small slimes. It is a fundamental component for advanced Redstone engineering, as it is required to craft Sticky Pistons and Slime Blocks, both of which are essential for moving blocks in complex machines. Beyond engineering, slimeballs are used to create Leads for leashing mobs and Magma Cream for potion brewing. They also serve a biological purpose, acting as the breeding food for frogs and a growth accelerant for tadpoles."
    }
};
