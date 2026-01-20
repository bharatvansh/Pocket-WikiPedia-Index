// Pocket Wikipedia Foundation - Other Miscellaneous Items Data
// ============================================
// This file contains: Name tag, saddle, horse armor (all types),
// lead, trial key, ominous trial key, written book, book and quill,
// enchanted book, knowledge book, bundle, goat horn (all variants),
// painting, item frame, glow item frame, armor stand, end crystal,
// experience bottle, firework star, wolf armor, totem of undying,
// bucket, dragon egg, oak boat, oak boat with chest
// ============================================

/**
 * Other miscellaneous items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const miscItems = {
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Trophy item",
            secondaryUse: "Decorative and status symbol"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by defeating the Ender Dragon"]
        },
        specialNotes: [
            "Only one Dragon Egg naturally generates per world",
            "Teleports when hit or interacted with in Survival mode",
            "Falls like sand or gravel if no block is beneath it",
            "Can be collected using a piston or by placing a torch beneath it",
            "Widely considered the rarest item in Minecraft"
        ],
        description: "The Dragon Egg is a unique trophy item that appears at the top of the exit portal after defeating the Ender Dragon for the first time. It is widely considered the rarest item in the game since only one naturally generates per world. While it has no functional crafting use, it serves as a prestigious decorative piece. In survival mode, attempting to mine it normally will cause it to teleport to a nearby location; players must use clever methods like pistons or placing a torch under the block it falls on to successfully collect it."
    },
    "minecraft:name_tag": {
        id: "minecraft:name_tag",
        name: "Name Tag",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Naming mobs to prevent them from despawning",
            secondaryUse: "Customizing mobs and adding personal touches to tamed pets"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in dungeon chests, mineshaft chests, woodland mansion chests, ancient city chests", "Obtained from fishing (0.8% chance)", "Purchased from Librarian villagers (20 emeralds at Master level)"]
        },
        specialNotes: [
            "Prevents mob despawning; requires renaming at an anvil (1 XP)",
            "Found in Dungeon, Mineshaft, Mansion, and Ancient City chests",
            "Fishing treasure drop (0.8%); sold by Master Librarians (20 emeralds)",
            "Naming hostile mobs prevents despawning (except in Peaceful)",
            "Custom names appear in death messages if the mob kills a player"
        ],
        description: "A Name Tag is a utility item used to name mobs and prevent them from despawning. To use one, rename it at an anvil for one experience level, then apply it to a mob. This consumes the tag. Named mobs persist in the world and display their name above their head; their name also appears in death messages if they kill a player. Players can find Name Tags in loot chests (dungeons, mineshafts, ancient cities), catch them through fishing (0.8% chance), or buy them from Master-level Librarian villagers for 20 emeralds."
    },
    "minecraft:shield": {
        id: "minecraft:shield",
        name: "Shield",
        maxStack: 1,
        durability: 336,
        enchantable: true,
        usage: {
            primaryUse: "Blocking attacks",
            secondaryUse: "Deflecting projectiles"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wood Planks x6", "Iron Ingot"]
        },
        specialNotes: [
            "Blocks 100% of attack damage when raised",
            "Can block arrows, tridents, and other projectiles",
            "Creeper explosions and axes can disable shields temporarily",
            "Can be decorated with banner patterns",
            "Enchantable with Unbreaking and Mending"
        ],
        description: "The Shield is a defensive tool that can block incoming melee attacks and projectiles. When raised by crouching or using secondary action button, it reduces incoming damage to zero. Shields can be customized with banner patterns and enhanced with enchantments for increased durability."
    },
    "minecraft:elytra": {
        id: "minecraft:elytra",
        name: "Elytra",
        maxStack: 1,
        durability: 432,
        enchantable: true,
        usage: {
            primaryUse: "Gliding through air",
            secondaryUse: "Fast travel with fireworks"
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
            "Equipped in the chestplate slot",
            "Allows gliding when jumping from heights",
            "Firework rockets can boost speed while gliding",
            "Loses durability over time while gliding (1 per second)",
            "Can only be found in End Ship item frames",
            "Repairable with Phantom Membranes or Mending enchantment"
        ],
        description: "Elytra are rare wings found exclusively in End Ships within End Cities. They allow the player to glide through the air and, when combined with firework rockets, enable powerful flight capabilities. Elytra are one of the most sought-after items in the game, providing unparalleled mobility for exploration and travel."
    },
    "minecraft:trial_key": {
        id: "minecraft:trial_key",
        name: "Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking a Vault in a Trial Chamber",
            secondaryUse: "Claiming loot rewards from Trial Chamber challenges"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Trial Spawners and some other containers in Trial Chambers"]
        },
        specialNotes: [
            "Consumed when used to unlock a Vault",
            "Each Vault can be unlocked only once per player",
            "Used exclusively in Trial Chambers (Tricky Trials / 1.21+)"
        ],
        description: "The Trial Key is a reward item tied to Trial Chambers in Minecraft Bedrock Edition. It is used on a Vault to claim its loot, with the vault tracking which players have already opened it so each player can only unlock it once. Trial Keys are primarily earned from Trial Spawners after completing their combat waves, and can also appear in other Trial Chamber containers."
    },
    "minecraft:ominous_trial_key": {
        id: "minecraft:ominous_trial_key",
        name: "Ominous Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking an Ominous Vault in a Trial Chamber",
            secondaryUse: "Accessing higher-tier Trial Chamber loot during ominous trials"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained only from Ominous Trial Spawners"]
        },
        specialNotes: [
            "Consumed when used to unlock an Ominous Vault",
            "Ominous Trial Spawners are created when a player carrying the Trial Omen effect activates a Trial Spawner",
            "Used exclusively in Trial Chambers (Tricky Trials / 1.21+)"
        ],
        description: "The Ominous Trial Key is an upgraded form of the Trial Key used to open Ominous Vaults in Trial Chambers. These vaults provide significantly better loot, but the key is only obtainable from Ominous Trial Spawners during an ominous trial. Like normal vaults, an Ominous Vault can only be unlocked once per player, and the key is consumed on use."
    },
    "minecraft:trial_explorer_map": {
        id: "minecraft:trial_explorer_map",
        name: "Trial Explorer Map",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Locating Trial Chambers",
            secondaryUse: "Navigation and structure scouting"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Traded by Journeyman Cartographer villagers"]
        },
        specialNotes: [
            "Points to the nearest Trial Chamber in the Overworld",
            "Obtained from Journeyman level Cartographer villagers for 12 emeralds and a compass",
            "Essential tool for locating the Tricky Trials update's main structure",
            "In Bedrock Edition, they were added in the 1.21 update",
            "Unlike standard maps, these cannot be crafted from scratch"
        ],
        description: "The Trial Explorer Map is a specialized navigational tool used to uncover the location of Trial Chambers. These maps are not found in chests or crafted; instead, they must be purchased from a Journeyman-level Cartographer. The map reveals the surrounding terrain of a nearby Trial Chamber, marking its location with a small icon. This makes them indispensable for players looking to engage with the combat challenges and rewards of the chambers."
    },
    "minecraft:wolf_armor": {
        id: "minecraft:wolf_armor",
        name: "Wolf Armor",
        maxStack: 1,
        durability: 64,
        enchantable: false,
        usage: {
            primaryUse: "Equipping on tamed wolves to provide damage protection",
            secondaryUse: "Can be repaired with additional armadillo scutes"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Armadillo Scute x6"]
        },
        specialNotes: [
            "Provides 11 armor points when equipped (equivalent to a full set of gold armor)",
            "Can only be equipped on tamed wolves",
            "Reduces damage taken by wolves significantly",
            "Has 64 durability and breaks when depleted",
            "Can be repaired using armadillo scutes in crafting grid or by using directly on wolf (restores 8 durability)",
            "Two damaged wolf armors can be combined in crafting grid to repair"
        ],
        description: "Wolf armor is protective gear for tamed wolves, crafted from armadillo scutes. Introduced in 1.21, it provides protection equivalent to gold armor, absorbing incoming damage until its 64 durability points are depleted. Owners can repair damaged armor using armadillo scutes or by combining two worn pieces. This equipment significantly boosts a wolf's survivability against hostile mobs and environmental hazards, making them more resilient companions for combat and exploration."
    },
    "minecraft:totem_of_undying": {
        id: "minecraft:totem_of_undying",
        name: "Totem of Undying",
        maxStack: 1,
        durability: 1,
        enchantable: false,
        usage: {
            primaryUse: "Prevents death when held in off-hand or main hand",
            secondaryUse: "Survival in dangerous combat situations and boss fights"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Evokers in Woodland Mansions and Raids"]
        },
        specialNotes: [
            "Prevents death when held (hand/off-hand); consumed on use",
            "Grants Absorption II (5s), Regeneration II (45s), Fire Resistance I (40s)",
            "Dropped by Evokers in Mansions and Raids (100% chance)",
            "Does not protect against void damage or /kill",
            "Essential specialized loot for hardcore survival"
        ],
        description: "The Totem of Undying prevents death if held in either hand when taking lethal damage. Upon use, the item is consumed and grants the player Absorption II, Regeneration II, and Fire Resistance I. Totems are exclusively dropped by Evokers in Woodland Mansions and Raids. Note that it does not protect against void damage or the /kill command. This legendary survival tool provides a crucial second chance, making it one of the most sought-after items for high-stakes combat and exploration."
    },
    "minecraft:bundle": {
        id: "minecraft:bundle",
        name: "Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Staging and organizing multiple items within a single inventory slot.",
            secondaryUse: "Items can be added or removed from the bundle while it is held in the inventory."
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Leather", "String"]
        },
        specialNotes: [
            "Can hold up to 64 items of varying types.",
            "The capacity depends on the stack size of the items placed inside.",
            "Can be dyed in 16 different colors using dyes in a crafting grid.",
            "Fully released in Bedrock Edition 1.21.40 as part of the 'Bundles of Bravery' drop."
        ],
        description: "A bundle is a storage item that can be used to manage multiple items within a single inventory slot. It is particularly useful for gathering small amounts of different items that would otherwise clutter the inventory. After being an experimental feature for several years, bundles were officially released for Bedrock Edition in version 1.21.40. They provide a unique way to handle inventory management, especially for players who collect many different types of blocks and items during exploration."
    },
    "minecraft:white_bundle": {
        id: "minecraft:white_bundle",
        name: "White Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inventory organization",
            secondaryUse: "Storage of diverse small-stack items"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bundle", "White Dye"]
        },
        specialNotes: [
            "Can hold up to 64 items (depending on their individual stack sizes)",
            "Crafted by combining a standard bundle with white dye",
            "Allows for color-coded organization of inventories",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The White Bundle is a colored variant of the bundle storage item. Like the original, it can condense multiple different items into a single inventory slot, but with a clean white aesthetic. It is especially useful for players who want to categorize their loot color-wise, such as white blocks or materials. It represents a significant quality-of-life improvement for explorers who gather many different types of resources on their journeys."
    },
    "minecraft:black_bundle": {
        id: "minecraft:black_bundle",
        name: "Black Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inventory organization",
            secondaryUse: "Storage of diverse small-stack items"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bundle", "Black Dye"]
        },
        specialNotes: [
            "Can hold up to 64 items (depending on their individual stack sizes)",
            "Crafted by combining a standard bundle with black dye",
            "Allows for color-coded organization of inventories",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Black Bundle provides the same inventory management benefits as the standard bundle but with a dark obsidian-like appearance. By combining a bundle with black dye, players can create a sleek storage pouch for their darkest treasures. It is perfect for organizing end-game materials or simply adding a bit of style to a player's inventory management system."
    },
    "minecraft:red_bundle": {
        id: "minecraft:red_bundle",
        name: "Red Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inventory organization",
            secondaryUse: "Storage of diverse small-stack items"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bundle", "Red Dye"]
        },
        specialNotes: [
            "Can hold up to 64 items (depending on their individual stack sizes)",
            "Crafted by combining a standard bundle with red dye",
            "Allows for color-coded organization of inventories",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Red Bundle is a vibrant storage option for players who like to keep their inventories organized and colorful. Like other bundle variants, it allows for grouping multiple item types together. The red color is perfect for highlighting important resources or weapons in a cluttered backpack."
    },
    "minecraft:blue_bundle": {
        id: "minecraft:blue_bundle",
        name: "Blue Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inventory organization",
            secondaryUse: "Storage of diverse small-stack items"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bundle", "Blue Dye"]
        },
        specialNotes: [
            "Can hold up to 64 items (depending on their individual stack sizes)",
            "Crafted by combining a standard bundle with blue dye",
            "Allows for color-coded organization of inventories",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Blue Bundle offers a cool, calm aesthetic for inventory management. Obtained by dyeing a standard bundle with blue dye, it functions identically to other bundles. Many players use blue bundles to store water-themed resources like kelp, shells, or ice."
    },
    "minecraft:orange_bundle": {
        id: "minecraft:orange_bundle",
        name: "Orange Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Compact storage of up to 64 items",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Orange Dye"]
        },
        specialNotes: [
            "Holds a total of 64 items' worth of weight",
            "Obtained by dyeing a standard bundle with orange dye",
            "Items can be added or removed from the bundle in the inventory",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Orange Bundle is a colored variant of the bundle storage item, designed for players who value organization. It allows for grouping various small quantities of items into a single slot, with a capacity of 64. Its bright orange color makes it easily identifiable, helping players quickly sort their loot or resources while exploring."
    },
    "minecraft:yellow_bundle": {
        id: "minecraft:yellow_bundle",
        name: "Yellow Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Compact storage of up to 64 items",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Yellow Dye"]
        },
        specialNotes: [
            "Holds a total of 64 items' worth of weight",
            "Obtained by dyeing a standard bundle with yellow dye",
            "Items can be added or removed from the bundle in the inventory",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Yellow Bundle offers a cheerful, high-visibility storage option for managing inventory clutter. Like all bundles, it can hold different types of items together, provided their cumulative stack size doesn't exceed 64. This makes it an excellent choice for organizing seeds, dyes, or other materials during focused gathering tasks."
    },
    "minecraft:lime_bundle": {
        id: "minecraft:lime_bundle",
        name: "Lime Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Compact storage of up to 64 items",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Lime Dye"]
        },
        specialNotes: [
            "Holds a total of 64 items' worth of weight",
            "Obtained by dyeing a standard bundle with lime dye",
            "Items can be added or removed from the bundle in the inventory",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Lime Bundle provides a fresh, vibrant aesthetic for player inventory management. By combining a bundle with lime dye, players can create a distinct pouch for their green-themed items or natural resources. It follows the standard bundle mechanics, allowing for the efficient storage of multiple item types in a single inventory slot."
    },
    "minecraft:purple_bundle": {
        id: "minecraft:purple_bundle",
        name: "Purple Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Used to store up to 64 items of different types in a single slot.",
            secondaryUse: "Items can be added or removed from the bundle in the inventory."
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Purple Dye"]
        },
        specialNotes: [
            "Obtained by dyeing a standard bundle with purple dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)",
            "Can hold different items totaling up to a stack of 64"
        ],
        description: "The Purple Bundle is a royal-looking storage variant that helps adventurers manage their inventory space more effectively. By combining a standard bundle with purple dye, players can create this elegant pouch to group various small items together. It is perfect for organizing ender pearls, obsidian, or other purple-themed treasures found during exploration."
    },
    "minecraft:magenta_bundle": {
        id: "minecraft:magenta_bundle",
        name: "Magenta Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Used to store up to 64 items of different types in a single slot.",
            secondaryUse: "Items can be added or removed from the bundle in the inventory."
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Magenta Dye"]
        },
        specialNotes: [
            "Obtained by dyeing a standard bundle with magenta dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)",
            "Helps organize items by color or category while exploring"
        ],
        description: "The Magenta Bundle adds a pop of bright color to any player's inventory while providing the standard compact storage benefits of a bundle. It is crafted by applying magenta dye to a regular bundle, allowing players to store a variety of items up to a full stack's worth. This variant is ideal for those who enjoy a vibrant and highly organized method of carrying diverse loot."
    },
    "minecraft:pink_bundle": {
        id: "minecraft:pink_bundle",
        name: "Pink Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Used to store up to 64 items of different types in a single slot.",
            secondaryUse: "Items can be added or removed from the bundle in the inventory."
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Pink Dye"]
        },
        specialNotes: [
            "Obtained by dyeing a standard bundle with pink dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)",
            "Useful for early-game inventory management during exploration"
        ],
        description: "The Pink Bundle is a charming and useful addition for players looking to declutter their inventory with style. Like other dyed variants, it keeps the functionality of the standard bundle, letting players mix and match different items into the same slot. It reflects a softer aesthetic and is often used by players to organize cherry blossom petals or other delicate findings."
    },
    "minecraft:cyan_bundle": {
        id: "minecraft:cyan_bundle",
        name: "Cyan Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Compact storage of up to 64 items",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Cyan Dye"]
        },
        specialNotes: [
            "Holds a total of 64 items' worth of weight",
            "Obtained by dyeing a standard bundle with cyan dye",
            "Items can be added or removed from the bundle in the inventory",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Cyan Bundle provides a cool, aquatic aesthetic to inventory management in Minecraft Bedrock. By combining a standard bundle with cyan dye, players can create a vibrant storage pouch that stands out in any container. Like all bundles introduced in 1.21.40, it efficiently groups varied items into a single slot, making it indispensable for ocean explorers collecting shells, prismarine, and coral."
    },
    "minecraft:brown_bundle": {
        id: "minecraft:brown_bundle",
        name: "Brown Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Compact storage of up to 64 items",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Brown Dye"]
        },
        specialNotes: [
            "Holds a total of 64 items' worth of weight",
            "Obtained by dyeing a standard bundle with brown dye",
            "Items can be added or removed from the bundle in the inventory",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Brown Bundle offers an earthy, rustic look for players who appreciate traditional craftsmanship. This item is crafted by dyeing a bundle with brown dye, resulting in a pouch that resembles high-quality tanned leather. It is a perfect thematic choice for storing farming materials, seeds, or wood-related items. Its capacity to hold 64 items of mixed types ensures that even the most cluttered pack stays organized."
    },
    "minecraft:green_bundle": {
        id: "minecraft:green_bundle",
        name: "Green Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Compact storage of up to 64 items",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Green Dye"]
        },
        specialNotes: [
            "Holds a total of 64 items' worth of weight",
            "Obtained by dyeing a standard bundle with green dye",
            "Items can be added or removed from the bundle in the inventory",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Green Bundle is a dark, forest-toned variant of the versatile storage item. Ideal for wilderness explorers or botanists, this bundle is created by applying green dye to a standard bundle. It provides the same essential organizational benefits, condensing inventory slots by grouping together small amounts of different items. Its deep green color is perfect for camouflaging among foliage or organizing nature-derived resources."
    },
    "minecraft:light_blue_bundle": {
        id: "minecraft:light_blue_bundle",
        name: "Light Blue Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Stashing multiple items into one slot",
            secondaryUse: "Items can be added or removed from the bundle in the inventory."
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Light Blue Dye"]
        },
        specialNotes: [
            "Obtained by dyeing a standard bundle with light blue dye",
            "Increases inventory efficiency by grouping varied items",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Light Blue Bundle is a decorative and functional storage item that helps players manage their inventory more efficiently. By combining a regular bundle with light blue dye, players get a pouch with a sky-colored aesthetic. Like all bundles, it has a capacity of 64 and can hold different types of items together, making it perfect for organizing small quantities of diverse materials collected during exploration."
    },
    "minecraft:gray_bundle": {
        id: "minecraft:gray_bundle",
        name: "Gray Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Stashing multiple items into one slot",
            secondaryUse: "Items can be added or removed from the bundle in the inventory."
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Gray Dye"]
        },
        specialNotes: [
            "Obtained by dyeing a standard bundle with gray dye",
            "Useful for grouping industrial or stone-based materials",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Gray Bundle provides a neutral, stone-toned storage option for players who like to keep their inventories tidy with a more muted color palette. Crafted by applying gray dye to a regular bundle, it retains the full functionality of the base item, allowing for up to 64 mixed items to be stored in a single slot. This variant is especially popular for organizing ores, stones, or miscellaneous neutral-colored materials gathered during mining trips."
    },
    "minecraft:light_gray_bundle": {
        id: "minecraft:light_gray_bundle",
        name: "Light Gray Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Stashing multiple items into one slot",
            secondaryUse: "Items can be added or removed from the bundle in the inventory."
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Light Gray Dye"]
        },
        specialNotes: [
            "Obtained by dyeing a standard bundle with light gray dye",
            "Offers a clean, silver-like aesthetic for organization",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Light Gray Bundle is a sleek storage variant that combines utility with a polished, minimalist appearance. By combining a bundle with light gray dye, players create a pouch that is both easy to distinguish and aesthetically pleasing. It follows the standard bundle rules, allowing many different item types to share a single slot. It is an ideal choice for players who want to categorize their light-colored blocks or silver-toned items without using high-contrast colors."
    },
    "minecraft:spyglass": {
        id: "minecraft:spyglass",
        name: "Spyglass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Zooming in to view distant objects and terrain",
            secondaryUse: "Exploration and scouting from elevated positions"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Amethyst Shard x1", "Copper Ingot x2"]
        },
        specialNotes: [
            "Zooms FOV to 1/8x; restricts movement to sneak speed",
            "Crafted with 1 Amethyst Shard + 2 Copper Ingots",
            "Usable in boats/minecarts but not while swimming/flying",
            "Features circular vignette and smooth zoom transitions",
            "Useful for scouting distant structures and terrain"
        ],
        description: "Introduced in 1.17, the Spyglass allows players to zoom in on distant objects by narrowing their FOV to one-eighth of normal. It is crafted using one Amethyst Shard and two Copper Ingots. While in use, movement is restricted to sneaking speed, making it ideal for scouting biomes, structures, or threats from elevated positions. The tool features a unique circular vignette and smooth telescoping animations. Whether you are navigating the landscape or planning a large-scale build, the Spyglass is an essential reconnaissance tool for any explorer."
    },
    "minecraft:recovery_compass": {
        id: "minecraft:recovery_compass",
        name: "Recovery Compass",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Finding the location of the player's last death",
            secondaryUse: "Retrieving items and experience lost on death"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Echo Shard x8", "Compass x1"]
        },
        specialNotes: [
            "Points to last death location in the current dimension; spins if alive/different dim",
            "Crafted with Compass + 8 Echo Shards (from Ancient Cities)",
            "Does not track dropped items, only death coords",
            "Ineffective in the End dimension in Bedrock Edition",
            "Crucial for retrieving gear before despawn timer expires"
        ],
        description: "The Recovery Compass points to a player's most recent death location. It only functions within the same dimension where the death occurred; otherwise, it spins randomly. It is crafted using eight Echo Shards (rare loot found in Ancient City chests) and a regular compass. This tool is vital for retrieving dropped items and experience before the five-minute despawn timer. In Bedrock Edition, the compass does not function in the End. Its unique tracking ability makes it a crucial item for high-risk exploration where losing valuable gear is a constant threat."
    },
    "minecraft:goat_horn": {
        id: "minecraft:goat_horn",
        name: "Goat Horn",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing a loud horn sound",
            secondaryUse: "Signaling other players over long distances"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Goats when they ram into solid blocks"]
        },
        specialNotes: [
            "Dropped when a Goat rams into Coal Ore, Copper Ore, Emerald Ore, Iron Ore, Log, Packed Ice, or Stone",
            "Has 8 sound variants: Ponder, Sing, Seek, Feel (Regular); Admire, Call, Yearn, Dream (Screaming)",
            "Has a cooldown of 7 seconds between uses",
            "Sound can be heard up to 256 blocks away",
            "Not stackable",
            "Can be used by Pillagers in Raids (specifically the 'Seek' horn sound)",
            "Does not have durability"
        ],
        description: "The Goat Horn is an instrument item dropped by Goats when they ram into specific hard blocks like logs, stone, packed ice, or ores. There are eight different variants of the horn, each producing a unique sound when used. Four variants (Ponder, Sing, Seek, Feel) are dropped by regular goats, while the other four (Admire, Call, Yearn, Dream) are obtained exclusively from Screaming Goats. When played, the horn emits a loud sound audible up to 256 blocks away, followed by a 7-second cooldown. This makes it an excellent tool for long-distance signaling in multiplayer."
    },
    "minecraft:firework_rocket": {
        id: "minecraft:firework_rocket",
        name: "Firework Rocket",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Propelling the player while gliding with Elytra",
            secondaryUse: "Creating decorative explosions in the sky"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Paper", "Gunpowder (1-3)", "Firework Star (optional)"]
        },
        specialNotes: [
            "Flight duration (1-3) depends on the amount of Gunpowder used.",
            "If crafted with a Firework Star, it explodes with color and shape effects.",
            "Rockets used for Elytra boosting should not have explosion effects to avoid damaging the player.",
            "Can be launched from a dispenser or crossbow.",
            "Explosion effects include: Small Ball, Large Ball, Star-shaped, Creeper-shaped, and Burst."
        ],
        description: "The Firework Rocket is a versatile item used for both decorative displays and functional transport. When crafted with Gunpowder and Paper, it creates a simple rocket; adding Firework Stars imparts colorful explosion effects. Its most critical use in survival is powering Elytra flight, providing a speed boost that enables long-distance travel. The duration of the rocket's flight (tier 1-3) is determined by the amount of gunpowder used in crafting."
    },
    "minecraft:firework_star": {
        id: "minecraft:firework_star",
        name: "Firework Star",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Determines the color, effect, and shape of Firework Rockets",
            secondaryUse: "Crafting item for decorative pyrotechnics"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Gunpowder", "Any Dye", "Special Ingredient (Optional)"]
        },
        specialNotes: [
            "Crafted with 1 Gunpowder, at least 1 Dye, and optional effect modifiers",
            "Modifiers: Diamond (Trail), Glowstone Dust (Twinkle), Fire Charge (Large Ball)",
            "More modifiers: Gold Nugget (Star-shaped), Feather (Burst), Mob Head (Creeper-shaped)",
            "Multiple dyes can be used to create multi-colored explosions",
            "Essential component for crafting meaningful Firework Rockets",
            "The star itself cannot be launched; it must be combined with Paper and Gunpowder"
        ],
        description: "The Firework Star is a crucial component used to customize the explosion of Firework Rockets. By combining gunpowder with various dyes and optional ingredients in a crafting grid, players can create stars that determine the color, shape, and additional effects of the resulting firework. Adding a Diamond creates a trail, while Glowstone Dust adds a twinkle effect. Different items like gold nuggets or mob heads can change the explosion's shape. Once crafted, the star is combined with paper and more gunpowder to create a rocket that will display the chosen effects when launched."
    },
    "minecraft:saddle": {
        id: "minecraft:saddle",
        name: "Saddle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Riding horses, donkeys, mules, and camels",
            secondaryUse: "Riding pigs and striders (requires steering item)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in chests (Dungeons, Nether Fortresses, etc.)", "Fishing treasure", "Trading with Leatherworker villagers", "Mob drop (Ravager, Strider with Zombified Piglin)"]
        },
        specialNotes: [
            "Required to control Horses, Donkeys, Mules, and Camels.",
            "Required to ride Pigs (needs Carrot on a Stick to steer).",
            "Required to ride Striders (needs Warped Fungus on a Stick to steer).",
            "Cannot be crafted in standard survival (uncraftable).",
            "Ravagers always drop a saddle on death."
        ],
        description: "A Saddle is an item that allows players to ride and control various mobs. It is essential for transportation using horses, donkeys, mules, and camels. It is also used to ride pigs and striders, though these require a Carrot on a Stick or Warped Fungus on a Stick respectively to steer. Saddles cannot be crafted and must be found in loot chests, fished up as treasure, traded from Master-level Leatherworker villagers, or obtained by killing a Ravager."
    },
    "minecraft:diamond_horse_armor": {
        id: "minecraft:diamond_horse_armor",
        name: "Diamond Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Equipping on a tamed horse to provide high-level protection",
            secondaryUse: "Decorative armor for horses"
        },
        specialNotes: [
            "Provides 11 armor points (5.5 chestplates) to horses.",
            "Can only be found in structure chests; cannot be crafted.",
            "Cannot be enchanted or repaired.",
            "Found in Dungeons, Desert Temples, End Cities, and more.",
            "Equipped by opening the horse's inventory while riding or nearby."
        ],
        description: "Diamond Horse Armor is the highest tier of protection available for horses in Minecraft Bedrock Edition. Unlike player armor, it cannot be crafted and must be discovered within chests in various structures throughout the world, such as Nether Fortresses, End Cities, and Bastion Remnants. When equipped on a tamed horse, it provides a significant boost to its survivability, granting 11 armor points to reduce incoming damage. This makes it an essential item for players who rely on horses for long-distance travel and combat."
    },
    "minecraft:iron_horse_armor": {
        id: "minecraft:iron_horse_armor",
        name: "Iron Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Protecting a tamed horse",
            secondaryUse: "Increasing a horse's armor rating by 5 points"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests"]
        },
        specialNotes: [
            "Found in Dungeons, Strongholds, Villages, Nether Fortresses, and Jungle Temples",
            "Can be equipped on tamed horses only",
            "Does not have durability and never breaks"
        ],
        description: "Iron Horse Armor is a specialized piece of equipment designed to protect tamed horses from damage. Unlike player armor, it cannot be crafted and must be discovered within loot chests in various world structures. When equipped, it provides 5 points of armor to the horse, significantly increasing its survival chances against mobs and other hazards. It is a durable item that does not wear out over time, making it a permanent upgrade for a player's mount."
    },
    "minecraft:golden_horse_armor": {
        id: "minecraft:golden_horse_armor",
        name: "Golden Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Protecting a tamed horse",
            secondaryUse: "Increasing a horse's armor rating by 7 points"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in loot chests"]
        },
        specialNotes: [
            "Found in Dungeons, Villages (Weaponsmith chests), Nether Fortresses, Bastion Remnants, Ruined Portals, Desert Pyramids, Jungle Temples, Strongholds (Altar chests), and End Cities",
            "Provides more protection than iron horse armor but less than diamond",
            "Can be equipped on tamed horses only"
        ],
        description: "Golden Horse Armor offers a mid-to-high tier of protection for tamed horses, granting them 7 armor points. Found in various loot chests across the Overworld, the Nether, and The End, it is particularly common in Bastion Remnants and Ruined Portals. While gold tools and player armor are known for low durability, Golden Horse Armor is indestructible, providing a consistent defensive boost without the need for repair or replacement."
    },
    "minecraft:leather_horse_armor": {
        id: "minecraft:leather_horse_armor",
        name: "Leather Horse Armor",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Protecting and decorating a tamed horse",
            secondaryUse: "Can be dyed in a cauldron to change its color"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["7x Leather"]
        },
        specialNotes: [
            "The only type of horse armor that can be crafted in Bedrock Edition",
            "Can be dyed into 12,326,391 different colors using cauldrons",
            "Provides 3 armor points to the horse"
        ],
        description: "Leather Horse Armor is the entry-level protection for horses and is unique as the only craftable horse armor in Minecraft Bedrock Edition. It is made from seven pieces of leather and provides a modest 3 armor points. Its most notable feature is its customization; players can use dyed water in a cauldron to color the armor, allowing for millions of possible color combinations to personalize their steeds."
    },
    "minecraft:item_frame": {
        id: "minecraft:item_frame",
        name: "Item Frame",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying and protecting items",
            secondaryUse: "Creating galleries and showcases"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x8", "Leather x1"]
        },
        specialNotes: [
            "Displays one item/block; right-click rotates (8 positions)",
            "Placed on any solid surface; protects contents from environments",
            "Glowing variant (Glow Ink Sac) emits light level 7",
            "Customizable with banners for background patterns",
            "Items retrieved by breaking the frame"
        ],
        description: "The Item Frame is a decorative entity used to display items and blocks on any solid surface. Right-clicking a placed frame with an item inserts it, while additional clicks rotate the displayed item through 8 positions. It protects contents from environmental damage and accidental usage. A Glowing Item Frame variant, crafted with Glow Ink Sacs or traded from Fletchers, illuminates the item and provides a light level of 7. Useful for maps, storage organization, and building detail, Item Frames can be placed on walls, ceilings, and floors."
    },
    "minecraft:armor_stand": {
        id: "minecraft:armor_stand",
        name: "Armor Stand",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying armor and equipment",
            secondaryUse: "Creating mannequins and decorations"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x6", "Stone Slab x1"]
        },
        specialNotes: [
            "Displays armor and hand-held items; immune to gravity",
            "Customizable poses via commands or redstone signals",
            "Placed on any surface; resists water flow",
            "Takes damage from explosions/wither but regenerates if not destroyed",
            "Crafted with 6 Sticks + 1 Stone Slab"
        ],
        description: "The Armor Stand is a decorative entity used to display armor, weapons, and tools. Crafted with sticks and a stone slab, it holds full armor sets and items in either hand. Perfect for organizing gear or creating museum displays, these entities are a staple for builders. Though they typically remain where placed, commands can be used to customize their pose, size, and appearance. Whether used for practical equipment storage or as a creative tool for detailed builds, the armor stand's versatile nature makes it an essential addition to any base."
    },
    "minecraft:ender_pearl": {
        id: "minecraft:ender_pearl",
        name: "Ender Pearl",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Teleportation by throwing the pearl",
            secondaryUse: "Crafting Eyes of Ender and traveling long distances"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Endermen", "Obtained through bartering with Piglins (4.73% chance)"]
        },
        specialNotes: [
            "Deals 5 damage (2.5 hearts) upon teleportation",
            "Has a 1-second cooldown between uses",
            "Used to craft Eyes of Ender (with Blaze Powder)",
            "Endermen drop 0-1 Ender Pearls; increased by Looting",
            "In Bedrock, throwing pearl into a portal might teleport you to world spawn"
        ],
        description: "An Ender Pearl is a versatile utility item primarily dropped by Endermen or obtained through Piglin bartering. When thrown, it teleports the player to where it lands, though this process deals a small amount of damage. Beyond mobility, Ender Pearls are critical for late-game progression, as they are a necessary ingredient for crafting Eyes of Ender to locate and activate End Portals. They can also be used in stasis chambers to allow for instant travel back to a base."
    },
    "minecraft:fire_charge": {
        id: "minecraft:fire_charge",
        name: "Fire Charge",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Lighting fires and activating TNT",
            secondaryUse: "Serving as a projectile for dispensers"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Blaze Powder", "Gunpowder", "Coal or Charcoal"]
        },
        specialNotes: [
            "Functions as a single-use alternative to flint and steel",
            "When used from a dispenser, it fires a straight-moving fireball",
            "Fired charges set entities and blocks on fire upon impact",
            "Can be used to light obsidian portals and campfires",
            "Does not create an explosion unless hitting TNT"
        ],
        description: "A Fire Charge is a consumable item used to ignite fires or act as a projectile. When used by a player, it immediately starts a fire on a block, similar to flint and steel but with only one use per item. When placed in a dispenser, it is fired as a small fireball that travels in a straight line, setting fire to anything it hits. It is often used in traps, automated defense systems, or as an alternative ignition source when flint is unavailable."
    },
    "minecraft:experience_bottle": {
        id: "minecraft:experience_bottle",
        name: "Bottle o' Enchanting",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Throwing to release experience orbs",
            secondaryUse: "Quickly gaining XP for enchanting and anvil use"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Traded by Cleric villagers", "Found as generated loot in some structures"]
        },
        specialNotes: [
            "Shatters on impact and releases experience orbs",
            "Grants 3-11 XP (average 7) per bottle",
            "Stackable up to 64, unlike most bowl or bottle consumables",
            "Renewable through trading with Cleric villagers",
            "Useful for topping up levels at an enchanting table or anvil"
        ],
        description: "Bottle o' Enchanting is a throwable item that breaks on impact and releases experience orbs worth 3-11 XP (7 on average). It is commonly used to quickly gain levels for enchanting or to supply experience for anvil repairs when you are just short on XP. In Bedrock Edition it is renewable through Cleric villager trades, and it can also appear as generated loot in some structure chests."
    },
    "minecraft:end_crystal": {
        id: "minecraft:end_crystal",
        name: "End Crystal",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Respawning the Ender Dragon",
            secondaryUse: "Decorative or as an explosive trap"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Glass x7", "Eye of Ender x1", "Ghast Tear x1"]
        },
        specialNotes: [
            "Can only be placed on obsidian or bedrock blocks",
            "Heals the Ender Dragon if it is within range",
            "Explodes violently when attacked, even with a single punch",
            "Four crystals are required to respawn the Ender Dragon at the exit portal",
            "Highly dangerous due to large explosion radius and damage"
        ],
        description: "An End Crystal is a powerful and volatile item primarily used to respawn the Ender Dragon. To initiate the respawn process, four crystals must be placed on the edges of the exit portal in the End. In addition to their intended purpose, they are often used by players as high-damage explosive traps because they detonate instantly when hit. They can only be placed on obsidian or bedrock blocks. When active in the End, they project a healing beam toward the dragon, making their destruction a priority during the boss fight."
    },
    "minecraft:enchanted_book": {
        id: "minecraft:enchanted_book",
        name: "Enchanted Book",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying enchantments to items via an Anvil",
            secondaryUse: "Combining with other enchanted books to upgrade enchantment levels"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Enchanting Table, Fishing, Loot Chests, or Librarian Villagers"]
        },
        specialNotes: [
            "Allows applying specific enchantments to gear that may not be available via Enchanting Table",
            "Can be combined in an anvil to create higher-level enchantments (e.g., Sharpness IV + IV = V)",
            "Librarian villagers sell specific enchanted books for emeralds and a regular book",
            "Found as treasure while fishing (0.8% chance in Bedrock)",
            "Required to apply certain 'Treasure' enchantments like Mending or Frost Walker"
        ],
        description: "Enchanted Books are specialized items that store magical enchantments for later use. They are the primary way to apply specific buffs, such as Mending or Silk Touch, to tools, weapons, and armor using an Anvil. Players can obtain these books through various methods, including using an Enchanting Table on regular books, fishing, or trading with Librarian villagers. Because they allow for precise control over equipment upgrades and are necessary for applying powerful treasure enchantments, they are an essential resource for late-game gear optimization."
    },
    "minecraft:bucket": {
        id: "minecraft:bucket",
        name: "Bucket",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Carrying and placing liquids (water, lava, milk, powder snow)",
            secondaryUse: "Catching fish and axolotls"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["3x Iron Ingot"]
        },
        specialNotes: [
            "Can hold water, lava, milk, powder snow, or live fish/axolotls",
            "Empty buckets stack up to 16, but filled buckets only stack to 1",
            "Used to milk cows, mooshrooms, and goats",
            "Lava buckets can be used as fuel in furnaces (smelts 100 items)",
            "Water buckets can save players from fall damage or create infinite water sources",
            "Crafted with 3 iron ingots in a V-shape in the crafting grid"
        ],
        description: "The Bucket is a versatile utility item crafted from three iron ingots. It serves multiple essential functions including transporting liquids like water and lava, milking cows and goats, collecting powder snow, and capturing aquatic mobs such as fish and axolotls. Empty buckets stack up to 16, but once filled, they can only stack individually. Buckets are fundamental for farming, building, redstone contraptions, and survival tactics such as water elevators or using water to prevent fall damage. Lava-filled buckets serve as efficient fuel, smelting 100 items per bucket."
        },
        "minecraft:tripwire_hook": {
        id: "minecraft:tripwire_hook",
        name: "Tripwire Hook",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
        primaryUse: "Crafting Tripwires and Trapped Chests",
        secondaryUse: "Redstone detection and automation systems"
        },
        crafting: {
        recipeType: "Shaped",
        ingredients: ["Iron Ingot", "Stick", "Wood Plank"]
        },
        specialNotes: [
        "Used to craft Tripwire Hook (placed 4 in a line) connected with String",
        "Creates an invisible tripwire that triggers redstone when crossed by entities",
        "Shears can break tripwire without triggering it",
        "Used in crafting Trapped Chests (shapeless recipe with Chest and Tripwire Hook)",
        "Dropped by breaking Tripwire Hooks in Jungle Temples",
        "Essential for traps, mob detection, and automated redstone circuits"
        ],
        description: "The Tripwire Hook is a redstone component used to create detection systems and traps. When placed in a line of up to 40 blocks and connected with string, it creates a tripwire that activates a redstone signal when any entity passes through it. This mechanism is invaluable for creating automatic doors, mob spawners, trap defenses, and hidden alarm systems. Tripwire Hooks are also a key ingredient in crafting Trapped Chests, which appear identical to regular chests but emit a redstone signal when opened. While commonly found in Jungle Temple loot chests, they are easily crafted for early-game redstone automation."
        },
        "minecraft:writable_book": {
        id: "minecraft:writable_book",
        name: "Book and Quill",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Writing and storing custom text",
            secondaryUse: "Creating in-game guides, stories, or signs"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Book", "Ink Sac", "Feather"]
        },
        specialNotes: [
            "Can contain up to 100 pages of text (256 characters per page in Bedrock)",
            "Once signed, becomes a 'Written Book' with author and title",
            "Written Books can be copied by crafting with a Book and Quill",
            "Cannot be edited after signing; the original can make up to 8 copies",
            "Useful for leaving messages, creating maps, or building adventure maps",
            "Signed books show author name and generation (Original, Copy of Original, Copy of Copy)"
        ],
        description: "The Book and Quill is a unique item that allows players to write and store custom text within the game. Crafted using a book, ink sac, and feather, it provides up to 100 pages with 256 characters per page in Bedrock Edition. Players can use it to document adventures, create in-game guides, leave messages, or design narrative elements for adventure maps. Once complete, the book can be signed to create a Written Book, permanently recording the author's name and title. Signed books can be duplicated up to 8 times, making them valuable for sharing information across multiplayer worlds."
    },
    "minecraft:written_book": {
        id: "minecraft:written_book",
        name: "Written Book",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Reading and sharing signed text",
            secondaryUse: "Displaying books on lecterns and storing them in chiseled bookshelves"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Sign a Book and Quill"]
        },
        specialNotes: [
            "Created by signing a Book and Quill; the text cannot be edited afterward",
            "Stacks to 16, but only identical books (including generation) stack together",
            "Generations: Original, Copy of Original, Copy of Copy, Tattered",
            "Only Originals and Copies of Original can be duplicated in a crafting table",
            "Can be placed on a Lectern; the displayed page outputs a redstone signal",
            "Can be stored in a Chiseled Bookshelf by using it while holding the book"
        ],
        description: "A Written Book is a signed Book and Quill that locks its text and records a title and author on the cover. In Bedrock Edition, signed books can be displayed on a lectern for reading and redstone output based on the current page. Originals (and Copies of Original) can be duplicated in a crafting table to share guides, rules, or stories with other players."
    },
    "minecraft:wither_skeleton_skull": {
        id: "minecraft:wither_skeleton_skull",
        name: "Wither Skeleton Skull",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Summoning the Wither boss",
            secondaryUse: "Decorative block and wearable head armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Wither Skeletons in Nether Fortresses"]
        },
        specialNotes: [
            "Rare drop from Wither Skeletons (2.5% chance; increased by Looting)",
            "Three skulls are required to summon the Wither boss",
            "Can be worn as a helmet (purely decorative)",
            "Reduces the detection range of Wither Skeletons by 50% when worn"
        ],
        description: "The Wither Skeleton Skull is a rare and essential item for late-game progression, primarily used to summon the Wither boss. It is obtained as a rare drop from Wither Skeletons found within Nether Fortresses. Beyond its use in summoning, it can be placed as a decorative block or worn by the player as a helmet, which has the functional benefit of reducing the detection range of other Wither Skeletons. Its dark, skeletal appearance makes it a popular trophy for seasoned adventurers."
    },
    "minecraft:dragon_head": {
        id: "minecraft:dragon_head",
        name: "Dragon Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Redstone-interactive decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found on the front of End Ships in End Cities"]
        },
        specialNotes: [
            "Found exclusively on the prow of End Ships",
            "Mouth opens and closes repeatedly when the player wearing it moves",
            "When placed as a block, the mouth moves if powered by a redstone signal",
            "The largest of all mob head items in the game"
        ],
        description: "The Dragon Head is a unique decorative item found exclusively on End Ships within the End Cities. This large, detailed head can be worn as a helmet or placed as a block. One of its most distinctive features is its animated mouth; when worn by a moving player or powered by a redstone signal as a block, the mouth will continuously open and close. It serves as a major trophy of exploration and a status symbol for players who have conquered the End's most distant structures."
    },
    "minecraft:piglin_head": {
        id: "minecraft:piglin_head",
        name: "Piglin Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Piglin detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Piglins killed by a Charged Creeper"]
        },
        specialNotes: [
            "Added in the 1.20 Trails & Tales update",
            "Dropped when a Piglin or Piglin Brute is killed by a Charged Creeper explosion",
            "Ear flutters when the player wearing it moves or when powered by redstone",
            "Reduces the detection range of Piglins by 50% when worn"
        ],
        description: "The Piglin Head is a decorative mob head introduced in the 1.20 update. Like other mob heads, it is obtained through the rare event of a Charged Creeper killing a Piglin. When worn, the head's ears will flap as the player moves, a feature that can also be triggered by redstone when the head is placed as a block. Functionally, wearing the head reduces the detection range of Piglins, making it useful for navigating the Nether safely. It provides a unique aesthetic that captures the iconic look of the Piglin mobs."
    },
    "minecraft:minecart": {
        id: "minecraft:minecart",
        name: "Minecart",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting players and mobs on rails",
            secondaryUse: "Base for crafting specialized minecarts (Chest, Hopper, TNT)"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["5x Iron Ingot"]
        },
        specialNotes: [
            "Placed on rails by using it on them; broken by attacking it",
            "Can carry players and most mobs (including hostile ones)",
            "Speeds depend on the type of rail used (Powered vs Normal)",
            "Can be combined with Chests, Hoppers, or TNT in a crafting grid",
            "In Bedrock Edition, minecarts can be placed on a rail by a dispenser",
            "Minecarts can pick up mobs that walk into them while on a rail"
        ],
        description: "A Minecart is a fundamental vehicle used for transportation on rail systems. Crafted from five iron ingots, it can carry players, mobs, and items across large distances efficiently. Minecarts are placed on rails and can be propelled by Powered Rails or gravity. They serve as the base for several functional variants, including Minecarts with Chests, Hoppers, and TNT, which are essential for automation and complex rail networks. In Bedrock Edition, they are frequently used in both survival transport and intricate redstone machinery."
    },
    "minecraft:chest_minecart": {
        id: "minecraft:chest_minecart",
        name: "Minecart with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Transporting items on rails",
            secondaryUse: "Mobile storage in minecart systems"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Chest", "Minecart"]
        },
        specialNotes: [
            "Combines a Minecart and a Chest for item transport",
            "Has 27 slots of inventory space, same as a single chest",
            "Drops itself and its contents when broken",
            "Can be accessed by opening the GUI or using Hoppers",
            "Cannot carry players or mobs"
        ],
        description: "A Minecart with Chest is a utility vehicle that combines the mobility of a minecart with the storage capacity of a single chest. It allows players to transport large quantities of items across rail systems, making it essential for automated storage and delivery networks. In Bedrock Edition, it is crafted by combining a minecart and a chest in a crafting grid. When broken, it drops as a single item, spilling its inventory onto the ground. It can interact with hoppers placed under the track to load or unload items automatically."
    },
    "minecraft:hopper_minecart": {
        id: "minecraft:hopper_minecart",
        name: "Minecart with Hopper",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Collecting items from above rails",
            secondaryUse: "Transferring items between containers rapidly"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Hopper", "Minecart"]
        },
        specialNotes: [
            "Pulls items from the world and containers above it",
            "Sucks up items much faster than a regular hopper",
            "Can pick up items through full blocks directly above the rail",
            "Can be disabled by a powered Activator Rail",
            "Has 5 slots of inventory space"
        ],
        description: "A Minecart with Hopper is a specialized vehicle designed for item collection and transport. It possesses a powerful suction ability that allows it to pull loose items from the world or extract items from containers located directly above the track. Unlike stationary hoppers, it can collect items through full blocks, making it highly effective for farm collection systems where the collection mechanism needs to be hidden. Its collection function can be toggled using Activator Rails, allowing for precise control in automated sorting systems."
    },
    "minecraft:tnt_minecart": {
        id: "minecraft:tnt_minecart",
        name: "Minecart with TNT",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Creating mobile explosions",
            secondaryUse: "Clearing areas or breaching walls remotely"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["TNT", "Minecart"]
        },
        specialNotes: [
            "Explodes when passing over a powered Activator Rail",
            "Explosion power depends on the minecart's speed",
            "Detonates instantly upon high-speed collision",
            "Does not destroy rails or blocks under the track when on rails",
            "Can be dispensed onto rails"
        ],
        description: "A Minecart with TNT is a volatile vehicle used for controlled demolitions and traps. It detonates after a short delay when passing over a powered Activator Rail, or instantly if it crashes into a block or entity at high speed. The explosion's radius and damage are directly proportional to the cart's velocity at the moment of impact. Uniquely, when detonated while on a rail, it is designed not to destroy the track or the blocks immediately beneath it, allowing for reusable blasting lines in mining or terraforming operations."
    },
    "minecraft:oak_boat": {
        id: "minecraft:oak_boat",
        name: "Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities",
            secondaryUse: "Transporting mobs across land and water"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Oak Planks x5"]
        },
        specialNotes: [
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Since 1.20.10, no longer requires a wooden shovel to craft in Bedrock",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Oak Boat is a primary water transportation vessel in Minecraft Bedrock Edition. It can accommodate up to two passengers, making it ideal for moving players, pets, or even hostile mobs across large bodies of water. Since the 1.20.10 update, it is crafted using five oak planks, matching the Java Edition recipe. Boats are also famous for their extreme speed on ice and their ability to negate fall damage, though steering on land is considerably slower. In Bedrock, a unique feature allows boats to pick up mobs even while a player is currently occupying a seat."
    },
    "minecraft:spruce_boat": {
        id: "minecraft:spruce_boat",
        name: "Spruce Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with spruce wood appearance",
            secondaryUse: "Matching spruce wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Spruce Planks x5"]
        },
        specialNotes: [
            "Identical functionality to oak boat but with spruce wood texture",
            "Can carry two passengers, including mobs and players",
            "Useful for matching spruce wood builds and forest-themed bases",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Spruce Boat is a variant of the standard boat crafted from spruce planks, offering the same functionality as the oak boat but with a darker, more rustic appearance. It provides the same two-passenger capacity and water transportation capabilities while maintaining aesthetic consistency with spruce wood builds and forest-themed structures. This boat is particularly popular among players building in colder, forest biomes or those who prefer the darker aesthetic of spruce wood. All the benefits of standard boats apply, including enhanced speed on ice and fall damage protection."
    },
    "minecraft:raft": {
        id: "minecraft:raft",
        name: "Raft",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Alternative water transportation using boat oars for manual propulsion",
            secondaryUse: "Building floating structures and mobile bases"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Logs x6", "Sticks x2"]
        },
        specialNotes: [
            "Requires boat oar for manual rowing and propulsion",
            "Can be used to carry players and mobs across water",
            "Crafted from logs rather than planks, creating a more rustic appearance",
            "Can be used as a base for building floating structures",
            "Boat oar must be crafted separately and used to control movement",
            "Larger footprint than standard boats, offering more building potential",
            "In Bedrock, can pick up mobs when used as a water vehicle"
        ],
        description: "The Raft is a unique water transportation item offering a primitive and customizable approach to water travel. Unlike traditional boats, rafts require a separate boat oar for propulsion, giving players precise control over their watercraft. Rafts are crafted from logs and sticks, creating a larger, more rustic appearance ideal for building floating structures and mobile bases. The larger footprint provides creative building opportunities while maintaining full functionality for transporting players and mobs across water."
    },
    "minecraft:boat_oar": {
        id: "minecraft:boat_oar",
        name: "Boat Oar",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Propelling rafts across water surfaces",
            secondaryUse: "Crafting material for raft construction and modifications"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick", "Wood Slab"]
        },
        specialNotes: [
            "Essential tool for operating rafts - rafts cannot move without an oar",
            "Can be used on rafts to propel them forward through water",
            "Right-click while holding oar on raft to move in the direction you're facing",
            "Essential for raft-based exploration and transportation",
            "Can be combined with other items in crafting recipes",
            "Each oar can be used indefinitely without durability loss",
            "Required component for the raft crafting recipe in some versions"
        ],
        description: "The Boat Oar is a specialized tool item used exclusively for propelling rafts across water. Unlike boats that move automatically, rafts require manual propulsion using a boat oar, giving players precise control over their watercraft. The oar is crafted from a stick and wood slab, and when used on a raft, allows for directional movement across water surfaces. This manual control system makes rafts useful for precise navigation in tight spaces or for hands-on water transportation."
    },
    "minecraft:mangrove_boat": {
        id: "minecraft:mangrove_boat",
        name: "Mangrove Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with mangrove wood appearance",
            secondaryUse: "Matching mangrove wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Mangrove Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with red mangrove wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Mangrove Planks (no shovel required in 1.20+)",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Mangrove Boat is a variant of the standard boat crafted from mangrove planks, introduced in the 1.19 Wild Update. It features the distinctive reddish hue of mangrove wood, making it an excellent choice for navigating swamps or matching red-wood themed builds. Like other boats in Bedrock Edition, it accommodates two passengers and offers fall damage protection. It can be crafted using five mangrove planks, providing a stylish way to traverse water bodies."
    },
    "minecraft:cherry_boat": {
        id: "minecraft:cherry_boat",
        name: "Cherry Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with cherry wood appearance",
            secondaryUse: "Matching cherry wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Cherry Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with pink cherry wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Cherry Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Cherry Boat is a vibrant pink boat variant crafted from cherry planks, introduced in the 1.20 Trails & Tales update. It functions identically to other wooden boats, capable of carrying two passengers and moving swiftly across water or ice. Its unique pink color makes it a favorite for decorative purposes and for players who enjoy the aesthetic of the cherry grove biome. It requires five cherry planks to craft and offers the same fall damage negation as other boats."
    },
    "minecraft:bamboo_raft": {
        id: "minecraft:bamboo_raft",
        name: "Bamboo Raft",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with a raft design",
            secondaryUse: "Aesthetic alternative to traditional boats"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bamboo Planks x5"]
        },
        specialNotes: [
            "Functionally identical to boats but with a flat raft model",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Bamboo Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Bamboo Raft is a distinct vehicle introduced in the 1.20 Trails & Tales update, offering a flat, open design compared to traditional walled boats. Despite its different appearance, it functions identically to standard boats, allowing for two passengers and high-speed travel on ice. Crafted from five bamboo planks, the raft provides a unique aesthetic that fits well with jungle or tropical themed builds. It also shares the ability to negate fall damage and transport mobs across water."
    },
    "minecraft:birch_boat": {
        id: "minecraft:birch_boat",
        name: "Birch Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with birch wood appearance",
            secondaryUse: "Matching birch wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Birch Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with pale birch wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Birch Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Birch Boat is a variant of the standard boat crafted from birch planks. It shares all the functional characteristics of other wooden boats, including the ability to carry two passengers and high speed on ice. Its distinguishing feature is its pale wood texture, matching the aesthetic of birch forests. Like all boats in Bedrock Edition, it is crafted from five planks and requires no shovel. It serves as a reliable vehicle for water travel and transporting mobs."
    },
    "minecraft:painting": {
        id: "minecraft:painting",
        name: "Painting",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing decorative art on walls",
            secondaryUse: "Creating secret doors and hidden passages"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stick x8", "Wool (any color) x1"]
        },
        specialNotes: [
            "Can be placed in different sizes (1x1 to 4x4) depending on available space",
            "There are 30 different paintings available in Bedrock Edition",
            "Can be placed over doors or openings to create hidden passages",
            "Breaking a painting drops the item for relocation"
        ],
        description: "Paintings are decorative entities that can be placed on vertical surfaces. They come in various sizes, from small 1x1 canvases to large 4x4 masterpieces, randomly chosen based on the space available when placed. In Bedrock Edition, there are 30 unique painting designs. Beyond decoration, paintings are commonly used to create secret doors, as players and mobs can walk through them if there is an opening behind the canvas."
    },
    "minecraft:glow_item_frame": {
        id: "minecraft:glow_item_frame",
        name: "Glow Item Frame",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying items with a glowing background",
            secondaryUse: "Lighting up displayed items in the dark"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Item Frame", "Glow Ink Sac"]
        },
        specialNotes: [
            "Makes the displayed item clearly visible even in total darkness",
            "Does not increase the light level of the surrounding area (decorative only)",
            "Obtained by combining a regular item frame with a glow ink sac from a glow squid",
            "Can be placed on any side of most blocks, including top and bottom"
        ],
        description: "The Glow Item Frame is a specialized version of the standard item frame that allows displayed items to remain fully visible in the dark. It is crafted by combining a regular item frame with a glow ink sac. While it makes the item glow with a bright background, it does not actually emit light into the environment. This makes it perfect for maps, signage, or trophy rooms where visibility is needed regardless of lighting conditions."
    },
    "minecraft:oak_chest_boat": {
        id: "minecraft:oak_chest_boat",
        name: "Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation with mobile storage",
            secondaryUse: "Transporting a single player or mob plus items"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Oak Boat", "Chest"]
        },
        specialNotes: [
            "Provides 27 slots of storage, equivalent to a single chest",
            "Can only hold one passenger (player or mob) instead of the two allowed in standard boats",
            "When broken, it drops both the boat with chest item and the contents of the chest",
            "Useful for long-distance ocean exploration or moving base materials across water"
        ],
        description: "The Oak Boat with Chest is a mobile storage vehicle that combines the utility of a boat with the capacity of a chest. It allows players to transport up to 27 slots of items across water bodies while still being able to pilot the vessel. Due to the space taken up by the chest, it can only carry a single passenger. This boat is an essential tool for explorers and players moving large quantities of resources between coastal bases."
    },
    "minecraft:command_block_minecart": {
        id: "minecraft:command_block_minecart",
        name: "Minecart with Command Block",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Executing commands on rails",
            secondaryUse: "Creating mobile command systems"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained via commands or Creative inventory"]
        },
        specialNotes: [
            "Cannot be crafted; must be obtained using /give or Pick Block in Creative",
            "Executes its command when passing over a powered Activator Rail",
            "Checks the command once every game tick if on an always-active circuit, but on rails it depends on activation",
            "Useful for adventure maps and automated systems",
            "Drops as an item when broken in Creative mode (contents saved if Ctrl+Pick Block used)"
        ],
        description: "The Minecart with Command Block is a utility vehicle that combines a minecart with an Impulse Command Block. It allows for the execution of commands as the cart travels along a rail system. The command stored within is triggered when the minecart passes over a powered Activator Rail. This item is not available in the Survival inventory and cannot be crafted; it must be obtained via commands or the Creative inventory. It is a powerful tool for map makers and technical players creating complex, mobile automation systems."
    },
    "minecraft:jungle_boat": {
        id: "minecraft:jungle_boat",
        name: "Jungle Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities with jungle wood appearance",
            secondaryUse: "Matching jungle wood builds and aesthetic consistency"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Jungle Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with reddish-brown jungle wood texture",
            "Can carry two passengers, including mobs and players",
            "Crafted from 5 Jungle Planks",
            "Moves significantly faster on ice and packed ice",
            "In Bedrock, mobs can be picked up even when a player is already riding",
            "Look angle is restricted to a 180-degree arc while rowing in Bedrock",
            "Nullifies fall damage for all passengers when falling from any height"
        ],
        description: "The Jungle Boat is a variant of the standard boat crafted from jungle planks. It offers the same reliable water transportation for two passengers as other wooden boats but features the distinct reddish-brown hue of jungle wood. This makes it an ideal choice for players navigating jungle rivers or seeking to match the aesthetic of jungle treehouses and builds. Like all boats in Bedrock Edition, it is crafted from five planks without a shovel and provides immunity to fall damage when occupied."
    },
    "minecraft:acacia_boat": {
        id: "minecraft:acacia_boat",
        name: "Acacia Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two passengers",
            secondaryUse: "Fast travel on ice"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Acacia Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with orange acacia wood texture",
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Nullifies fall damage for all passengers when falling"
        ],
        description: "The Acacia Boat is a variant of the standard boat crafted from acacia planks. It features the distinctive orange color of acacia wood, making it a popular choice for players in savanna biomes. Like all boats in Minecraft Bedrock Edition, it can carry up to two passengers and is famous for its high speed when placed on ice. It is crafted from five acacia planks in a 'U' shape and provides a reliable way to traverse oceans and rivers."
    },
    "minecraft:dark_oak_boat": {
        id: "minecraft:dark_oak_boat",
        name: "Dark Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two passengers",
            secondaryUse: "Fast travel on ice"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Dark Oak Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats but with dark oak wood texture",
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Nullifies fall damage for all passengers when falling"
        ],
        description: "The Dark Oak Boat is a variant of the standard boat crafted from dark oak planks. It features the characteristic dark brown color of dark oak, providing a solid and rustic aesthetic. Functionally identical to other boats, it can carry two passengers and travels extremely fast on ice surfaces. It is a reliable tool for exploration and mob transport, especially for players who prefer the darker wood tones in their equipment."
    },
    "minecraft:spruce_chest_boat": {
        id: "minecraft:spruce_chest_boat",
        name: "Spruce Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Spruce Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Spruce Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Ideal for long-distance transport of resources across oceans"
        ],
        description: "The Spruce Boat with Chest is a utility vehicle that provides 27 slots of storage while maintaining water mobility. Crafted by combining a Spruce Boat with a Chest, it allows players to move large quantities of items across water. Because the chest ocupaies the second seat, it can only carry one passenger. This makes it a vital tool for resource gathering trips and moving between coastal bases."
    },
    "minecraft:birch_chest_boat": {
        id: "minecraft:birch_chest_boat",
        name: "Birch Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Birch Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Birch Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Matches the pale aesthetic of birch wood"
        ],
        description: "The Birch Boat with Chest offers mobile storage for players who prefer the light-colored birch aesthetic. By combining a Birch Boat with a Chest, players gain a vessel capable of carrying 27 item stacks across oceans and rivers. While it sacrifices the second passenger seat for storage, it is an invaluable asset for exploration and moving base supplies across water."
    },
    "minecraft:jungle_chest_boat": {
        id: "minecraft:jungle_chest_boat",
        name: "Jungle Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Jungle Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Jungle Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the reddish-brown jungle wood texture"
        ],
        description: "The Jungle Boat with Chest is a mobile inventory solution crafted from a Jungle Boat and a Chest. It provides 27 slots of storage for aquatic journeys, perfect for transporting loot from tropical explorations. As with all chest boats, it accommodates only one passenger. It remains a reliable and stylish way to move large amounts of cargo across jungle rivers and open seas."
    },
    "minecraft:acacia_chest_boat": {
        id: "minecraft:acacia_chest_boat",
        name: "Acacia Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Acacia Boat", "Chest"]
        },
        specialNotes: [
            "Combines an Acacia Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the bright orange acacia wood texture"
        ],
        description: "The Acacia Boat with Chest is a mobile inventory solution crafted from an Acacia Boat and a Chest. It provides 27 slots of storage for aquatic journeys, perfect for transporting loot across savanna coastal regions. As with all chest boats, it accommodates only one passenger. It remains a reliable and stylish way to move large amounts of cargo across rivers and open seas."
    },
    "minecraft:dark_oak_chest_boat": {
        id: "minecraft:dark_oak_chest_boat",
        name: "Dark Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Dark Oak Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Dark Oak Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the dark brown dark oak wood texture"
        ],
        description: "The Dark Oak Boat with Chest is a sturdy mobile storage vessel crafted by combining a Dark Oak Boat with a Chest. It provides 27 slots of storage, making it ideal for hauling heavy loads across deep oceans and rivers. While it only accommodates a single passenger, its large storage capacity makes it indispensable for moving resources to new base locations."
    },
    "minecraft:mangrove_chest_boat": {
        id: "minecraft:mangrove_chest_boat",
        name: "Mangrove Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Mangrove Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Mangrove Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the deep red mangrove wood texture"
        ],
        description: "The Mangrove Boat with Chest is a specialized vessel introduced for swamp and mangrove exploration. By combining a Mangrove Boat with a Chest, players gain 27 slots of mobile storage. It's perfect for gathering mangrove wood and other swamp resources. Like other chest boats, it carries one passenger and provides a reliable way to move goods through narrow waterways."
    },
    "minecraft:cherry_chest_boat": {
        id: "minecraft:cherry_chest_boat",
        name: "Cherry Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Cherry Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Cherry Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Features the pink cherry wood texture"
        ],
        description: "The Cherry Boat with Chest is a vibrant pink mobile storage unit introduced in the Trails & Tales update. Crafted from a Cherry Boat and a Chest, it offers 27 slots of inventory space for sea-bound adventures. It provides a unique aesthetic for transport and is as functional as it is colorful, allowing players to move their valuables across water with ease."
    },
    "minecraft:bamboo_chest_raft": {
        id: "minecraft:bamboo_chest_raft",
        name: "Bamboo Raft with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Transporting items across large bodies of water"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bamboo Raft", "Chest"]
        },
        specialNotes: [
            "Combines a Bamboo Raft with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the raft and the chest contents when broken",
            "Features the unique flat bamboo raft design"
        ],
        description: "The Bamboo Raft with Chest provides a flat, open platform for water travel with the added benefit of 27 storage slots. Crafted using a Bamboo Raft and a Chest, it is perfect for tropical-themed transport and exploration. While it only supports one passenger, its distinctive Look and large capacity make it a favorite for players navigating jungle biomes and island archipelagos."
    },
    "minecraft:pale_oak_boat": {
        id: "minecraft:pale_oak_boat",
        name: "Pale Oak Boat",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Water transportation for up to two entities",
            secondaryUse: "Fuel"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Pale Oak Planks x5"]
        },
        specialNotes: [
            "Identical functionality to other boats with a desaturated white texture",
            "Can carry two passengers, including mobs and players",
            "Moves significantly faster on ice and packed ice",
            "Nullifies fall damage for all passengers when falling",
            "Can be used as fuel in a furnace (smelts 6 items)"
        ],
        description: "The Pale Oak Boat is a variant of the standard boat crafted from pale oak planks, introduced in the 1.21.50 Winter Drop. It features a unique, desaturated white appearance that matches the aesthetic of the Pale Garden biome. Like all boats in Bedrock Edition, it handles up to two passengers and provides immunity to fall damage. It is a reliable tool for aquatic exploration and transporting mobs."
    },
    "minecraft:pale_oak_chest_boat": {
        id: "minecraft:pale_oak_chest_boat",
        name: "Pale Oak Boat with Chest",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Mobile storage and water transportation",
            secondaryUse: "Fuel"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Pale Oak Boat", "Chest"]
        },
        specialNotes: [
            "Combines a Pale Oak Boat with a Chest for 27 slots of mobile storage",
            "Can only carry one passenger (player or mob) due to the chest",
            "Drops both the boat and the chest contents when broken",
            "Matches the desaturated aesthetic of the Pale Garden",
            "Can be used as fuel in a furnace (smelts 6 items)"
        ],
        description: "The Pale Oak Boat with Chest offers mobile storage for players exploring the Pale Garden or other coastal biomes. By combining a Pale Oak Boat with a Chest, players gain a vessel capable of carrying 27 item stacks across oceans and rivers. While it sacrifices the second passenger seat for storage, it is an invaluable asset for exploration and moving base supplies across water with a unique Winter Drop aesthetic."
    },
    "minecraft:pale_oak_sign": {
        id: "minecraft:pale_oak_sign",
        name: "Pale Oak Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing text on walls or floor",
            secondaryUse: "Labeling chests or designating areas"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Pale Oak Planks x6", "Stick"]
        },
        specialNotes: [
            "Matches the pale, desaturated white color of the Pale Oak set",
            "Can be placed on the ground (standing) or on walls (hanging/attached)",
            "Supports up to four lines of text on both sides in Bedrock",
            "Can be edited after placement unless waxed with Honeycomb",
            "Text can be dyed or made to glow with a Glow Ink Sac"
        ],
        description: "The Pale Oak Sign is a decorative and informational item introduced in the Winter Drop (1.21.50). Crafted from pale oak planks and a stick, it provides a desaturated white canvas for player-written text. In Bedrock Edition, signs can have text on both sides, and the text can be further customized with dyes or glow ink. It is essential for organization, navigation, and adding detail to builds within the Pale Garden biome."
    },
    "minecraft:pale_oak_hanging_sign": {
        id: "minecraft:pale_oak_hanging_sign",
        name: "Pale Oak Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative signage that hangs from blocks",
            secondaryUse: "Detailed building and labeling"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Stripped Pale Oak Log x6", "Chain x2"]
        },
        specialNotes: [
            "Features two chains that can hang from the bottom or side of blocks",
            "More expensive to craft than standard signs, requiring chains and logs",
            "Text can be applied to both sides and customized with dyes or glow ink",
            "Provides a more rustic and detailed look for signage",
            "Matches the unique white-gray color of the Pale Garden set"
        ],
        description: "The Pale Oak Hanging Sign is a premium signage variant introduced in the 1.21.50 update. Crafted with chains and stripped pale oak logs, it offers a distinct aesthetic compared to floor-standing signs. It hangs beautifully from fences, walls, or the bottom of blocks, making it ideal for shop signs or artistic labels. Its pale, ghostly appearance makes it a perfect fit for the mysterious atmosphere of the Pale Garden."
    },
    "minecraft:oak_hanging_sign": {
        id: "minecraft:oak_hanging_sign",
        name: "Oak Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative signage that hangs from blocks",
            secondaryUse: "Displaying text in a dangling format"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Oak Log", "2x Chain"]
        },
        specialNotes: [
            "Can hang from the bottom of blocks or be attached to walls",
            "Text can be applied to both sides and customized with dyes",
            "Makes use of stripped oak logs for a consistent wood grain",
            "Introduced in the 1.20 Trails & Tales update"
        ],
        description: "The Oak Hanging Sign is a decorative signage item crafted from stripped oak logs and chains. Introduced in the Trails & Tales update, it allows players to display text in a dangling format. It can be suspended from the bottom of blocks or attached to the sides of solid blocks. Like standard signs, it supports writing on both the front and back, and the text can be customized with various dyes and glow ink to improve visibility."
    },
    "minecraft:spruce_hanging_sign": {
        id: "minecraft:spruce_hanging_sign",
        name: "Spruce Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text with a dark, rustic aesthetic",
            secondaryUse: "Versatile placement for decorative shop signs"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Spruce Log", "2x Chain"]
        },
        specialNotes: [
            "Features the distinctive dark brown color of spruce wood",
            "Hanging signs can be attached to the side of a block with a bracket",
            "Supports double-sided text that can be locked with honeycomb",
            "Text can be made luminous with a Glow Ink Sac"
        ],
        description: "The Spruce Hanging Sign is a dark-wood decorative piece made using stripped spruce logs and chains. It provides a rustic, dark brown aesthetic that is well-suited for taiga builds or more industrial designs. This hanging variant is more versatile in placement than traditional standing signs, as it can hang directly from ceilings or brackets on walls. Players can customize the text on both sides using dyes, and then lock it in place using honeycomb."
    },
    "minecraft:birch_hanging_sign": {
        id: "minecraft:birch_hanging_sign",
        name: "Birch Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "High-visibility signage with a light wood background",
            secondaryUse: "Modern labeling for bright architectures"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Birch Log", "2x Chain"]
        },
        specialNotes: [
            "Provides excellent contrast for text due to its pale wood color",
            "Can dangle from the bottom of blocks or attach to walls",
            "Allows players to write and edit text on both sides",
            "Features a creamy white-yellow birch texture"
        ],
        description: "The Birch Hanging Sign offers a light-colored, highly visible option for decorative signage. Crafted from stripped birch logs and chains, its pale creamy wood provides a high-contrast background that makes it one of the easiest sign types to read. It is particularly effective for modern shop signs or bright, airy builds. It follows the same functionality as other hanging signs, supporting double-sided text, color dyes, and luminosity when combined with glow ink sacs."
    },
    "minecraft:oak_sign": {
        id: "minecraft:oak_sign",
        name: "Oak Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Placing and displaying written text on walls or ground",
            secondaryUse: "Inventory organization and navigation markers"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Oak Planks x6", "Stick x1"]
        },
        specialNotes: [
            "Can be placed on the top or sides of most blocks",
            "Supports up to four lines of text on both the front and back sides",
            "Text can be customized with dyes and made to glow with Glow Ink Sacs",
            "Editable after placement; use Honeycomb to wax and prevent further edits",
            "Commonly used for labeling chests and creating directional markers"
        ],
        description: "The Oak Sign is a classic informational and decorative item crafted from oak planks and a stick. It serves as a primary way for players to communicate, label storage, or provide directions within the world. In Bedrock Edition, signs are versatile; they can be placed on the ground or attached to walls. Both sides of the sign can hold text, which can be further customized using various dyes or made to glow in the dark with a Glow Ink Sac. Its' light brown color is iconic and matches most traditional wooden structures."
    },
    "minecraft:spruce_sign": {
        id: "minecraft:spruce_sign",
        name: "Spruce Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying written information with a rustic appearance",
            secondaryUse: "Labeling and decorative detailing in wilderness builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Spruce Planks x6", "Stick x1"]
        },
        specialNotes: [
            "Features the dark, rustic brown color of spruce wood",
            "Both sides support up to four lines of text each",
            "Text color can be changed using dyes; Glow Ink Sacs make text luminous",
            "Can be 'waxed' with Honeycomb to lock the text and prevent editing",
            "Generates naturally in taiga village structures"
        ],
        description: "The Spruce Sign is a dark-wood variant of the standard sign, perfect for rustic or forest-themed environments. Crafted from spruce planks and a stick, it provides a beautiful dark brown background for player-written messages. Functionally identical to other signs, it can be placed standing on the ground or attached to walls. Players can write on both sides of the sign and use honeycomb to prevent any further changes to the text. Its' aesthetic fits perfectly with taiga builds, campsites, and industrial designs where a darker wood tone is preferred."
    },
    "minecraft:birch_sign": {
        id: "minecraft:birch_sign",
        name: "Birch Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Providing highly visible signage with a light-colored background",
            secondaryUse: "Modern labeling and clean aesthetic detailing"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Birch Planks x6", "Stick x1"]
        },
        specialNotes: [
            "Features a pale, light-colored background for high text visibility",
            "Allows for text on both front and back faces",
            "Dyes and Glow Ink Sacs can be used to customize text appearance",
            "Waxing with Honeycomb prevents the sign from being edited",
            "Matches the aesthetics of modern and birch forest architecture"
        ],
        description: "The Birch Sign is a light-colored informational item crafted from birch planks and a stick. Due to its' pale, creamy color, it offers excellent contrast for dark text, making it one of the most readable sign types. Like all signs in Bedrock Edition, it can be placed in multiple orientations and features double-sided text support. Players can enhance their signs with colored dyes or glow ink, and lock them using honeycomb to prevent tampering. Its' clean, bright appearance makes it a favorite for modern builds, labs, and well-lit residential areas."
    },
    "minecraft:cherry_hanging_sign": {
        id: "minecraft:cherry_hanging_sign",
        name: "Cherry Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for Cherry Grove themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Cherry Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Can be placed under blocks, on the side of blocks, or attached to other hanging signs.",
            "Text can be applied to both sides and can be dyed or made to glow.",
            "Matches the pink aesthetic of the Cherry Grove biome."
        ],
        description: "The Cherry Hanging Sign is a decorative item that allows players to display text in a stylish hanging format. Crafted from stripped cherry logs and chains, it features the vibrant pink color unique to the cherry wood set. Unlike standard signs, hanging signs have a smaller text area but can be placed in more versatile positions, such as dangling from the bottom of blocks or protruding from walls. They are perfect for adding detail to Cherry Grove settlements or creating elegant shop signs."
    },
    "minecraft:bamboo_hanging_sign": {
        id: "minecraft:bamboo_hanging_sign",
        name: "Bamboo Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for jungle or bamboo themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Bamboo Block", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Crafted from stripped bamboo blocks rather than traditional logs.",
            "Can hang from the bottom of blocks or be attached to fences and walls.",
            "Features the unique yellowish texture of the bamboo wood set."
        ],
        description: "The Bamboo Hanging Sign is a unique variant of the hanging sign crafted from bamboo. It provides a tropical aesthetic that fits perfectly with jungle environments or bamboo structures. Like other hanging signs, it can hold text on both sides and can be customized with dyes and glow ink. Its distinct yellow-green color and bamboo-pole texture make it a popular choice for players looking to create a more organic or rustic look for their signage systems."
    },
    "minecraft:mangrove_hanging_sign": {
        id: "minecraft:mangrove_hanging_sign",
        name: "Mangrove Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for swamp or dark-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Mangrove Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Features a deep reddish-brown color characteristic of mangrove wood.",
            "Can be placed on the side of blocks with a protruding bracket.",
            "Supports text on both its front and back faces."
        ],
        description: "The Mangrove Hanging Sign offers a bold, reddish-brown aesthetic for player signage. Crafted from stripped mangrove logs and chains, it is ideal for use in swamp biomes or as a high-contrast label in various builds. It functions identically to other hanging signs, allowing for four lines of text per side. Its rich color and unique bracket design when placed on walls make it a favored item for builders who prioritize a sophisticated and weathered look."
    },
    "minecraft:crimson_hanging_sign": {
        id: "minecraft:crimson_hanging_sign",
        name: "Crimson Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text in the Nether or on fire-resistant structures",
            secondaryUse: "Decorative signage for Nether-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Crimson Hyphae", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Completely fireproof, as it is made from Nether-native wood.",
            "Features a vibrant purple-red color with a unique hyphae texture.",
            "Does not burn if placed near lava or fire."
        ],
        description: "The Crimson Hanging Sign is a fire-resistant signage option native to the Nether's Crimson Forests. Because it is crafted from hyphae rather than Overworld wood, it will not burn, making it the perfect choice for labeling chest rooms or directions in the Nether. It features a striking purple-red hue and can be placed in various orientations. Like its Overworld counterparts, it supports multi-line text on both sides and remains a durable decorative piece in the most extreme environments."
    },
    "minecraft:warped_hanging_sign": {
        id: "minecraft:warped_hanging_sign",
        name: "Warped Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text in the Nether or on fire-resistant structures",
            secondaryUse: "Decorative signage for End or Nether themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Warped Hyphae", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Completely fireproof, as it is made from Nether-native wood.",
            "Features a unique teal-blue color characteristic of Warped Forests.",
            "Ideal for high-visibility signs in dark environments."
        ],
        description: "The Warped Hanging Sign is a teal-colored, fireproof sign found in the Warped Forests of the Nether. Being immune to fire, it is an essential tool for navigation in volcanic regions. Its bright teal color provides excellent visibility against darker blocks, and its texture is distinct from Overworld wood. It can be hung from the bottom or sides of blocks and supports text customization including dyes and glow effects, serving as both a functional and eerie decorative element."
    },
    "minecraft:jungle_hanging_sign": {
        id: "minecraft:jungle_hanging_sign",
        name: "Jungle Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for jungle-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Jungle Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Features the distinct greenish-brown hue of jungle wood.",
            "Can be placed under blocks, on the side of blocks, or attached to other hanging signs.",
            "Text can be applied to both sides and can be dyed or made to glow."
        ],
        description: "The Jungle Hanging Sign is a decorative item that allows players to display text in a stylish hanging format. Crafted from stripped jungle logs and chains, it features the distinct greenish-brown hue of jungle wood. Unlike standard signs, hanging signs are double-sided and can be hung from the bottom of blocks or protruding from walls with a metal bracket. They are ideal for adding detail to tropical settlements or dense jungle outposts where standard floor signs might be too bulky."
    },
    "minecraft:dark_oak_hanging_sign": {
        id: "minecraft:dark_oak_hanging_sign",
        name: "Dark Oak Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for dark forest themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Dark Oak Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Features the rich, deep brown color of dark oak wood.",
            "Can be placed under blocks, on the side of blocks, or attached to other hanging signs.",
            "Text can be applied to both sides and can be dyed or made to glow."
        ],
        description: "The Dark Oak Hanging Sign provides a robust and elegant way to display information using the dark, rich tones of dark oak wood. These signs are double-sided, allowing text to be read from both directions. They are especially useful in dark forest builds or when a more formal, darker aesthetic is required. Like other hanging signs, they can be suspended from chains or mounted on walls with a sturdy bracket, making them perfect for tavern signs or shop labels."
    },
    "minecraft:acacia_hanging_sign": {
        id: "minecraft:acacia_hanging_sign",
        name: "Acacia Hanging Sign",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying text on a hanging sign",
            secondaryUse: "Decorative signage for savanna-themed builds"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["6x Stripped Acacia Log", "2x Chain"]
        },
        specialNotes: [
            "Introduced in 1.20 Trails & Tales update.",
            "Features the vibrant orange color unique to acacia wood.",
            "Can be placed under blocks, on the side of blocks, or attached to other hanging signs.",
            "Text can be applied to both sides and can be dyed or made to glow."
        ],
        description: "The Acacia Hanging Sign is a vibrant decorative item characterized by the bright orange color of acacia wood. It allows players to place double-sided signs in various orientations, including hanging from ceilings or extending from walls. Its unique color makes it stand out in arid biomes like savannas. Crafting requires stripped acacia logs and chains, making it a more advanced signage option that coordinates perfectly with the orange palette of savanna structures."
    },
    "minecraft:zombie_head": {
        id: "minecraft:zombie_head",
        name: "Zombie Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Zombie detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Zombies killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Zombie is killed by a Charged Creeper's explosion",
            "Can be worn as a helmet or placed as a decorative block",
            "Reduces the detection range of Zombies by 50% when worn",
            "Compatible with note blocks to produce Zombie sounds",
            "Added as a trophy item for late-game combat challenges"
        ],
        description: "The Zombie Head is a rare decorative item representing the iconic undead mob. It is primarily obtained by manipulation of a Charged Creeper to kill a Zombie. When worn by a player, it serves a functional purpose by significantly masking the player's presence from other Zombies, reducing their detection range. Additionally, placing it on a note block allows players to create ambient mob sounds, making it a favorite for map-makers and decorators."
    },
    "minecraft:skeleton_skull": {
        id: "minecraft:skeleton_skull",
        name: "Skeleton Skull",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Skeleton detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Skeletons killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Skeleton is killed by a Charged Creeper's explosion",
            "Can be worn as a helmet (purely decorative protection)",
            "Reduces the detection range of Skeletons by 50% when worn",
            "Produces Skeleton bone sounds when placed on a note block",
            "Can be used to craft Skeleton-themed banner patterns"
        ],
        description: "The Skeleton Skull is a prized decorative item obtained through the rare encounter of a Charged Creeper killing a Skeleton. This stark white skull can be worn by players to partially camouflage themselves from Skeletons, making it easier to navigate areas populated by archers. In Bedrock Edition, it also has a creative interaction with note blocks, allowing for the generation of skeleton-specific sound effects for atmospheric builds."
    },
    "minecraft:creeper_head": {
        id: "minecraft:creeper_head",
        name: "Creeper Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Reducing Creeper detection range"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Creepers killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Creeper is killed by another Charged Creeper's explosion",
            "Reduces the detection range of Creepers by 50% when worn",
            "Produces the iconic 'hiss' sound when placed on a note block",
            "Essential for crafting the Creeper Charge banner pattern",
            "A popular trophy item for surviving dangerous mob interactions"
        ],
        description: "The Creeper Head is one of the most recognizable trophies in Minecraft, obtained when a Charged Creeper kills one of its own kind. Beyond its use as a distinctive green helmet, it provides a tactical advantage by halving the distance at which Creepers notice the player. Builders often use it alongside note blocks to create suspenseful 'hissing' traps or ambient sounds in themed environments."
    },
    "minecraft:player_head": {
        id: "minecraft:player_head",
        name: "Player Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Purely decorative block and wearable item",
            secondaryUse: "Unique identity representation in builds"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Creative inventory or Commands only in Bedrock"]
        },
        specialNotes: [
            "In Bedrock Edition, this item is generally only accessible via Creative Mode",
            "Does not display individual player skins in Bedrock like it does in Java",
            "Can be worn as a helmet but provides no armor value",
            "Takes on the appearance of the default 'Steve' skin",
            "Commonly used by creators for high-detail custom map decorations"
        ],
        description: "The Player Head in Minecraft Bedrock Edition is a decorative item that mimics the default player appearance. While it lacks the ability to display specific player skins found in the Java Edition, it remains a heavily utilized block for detailing and custom maps. It can be worn as a purely cosmetic piece or placed as a block to represent human presence in a build. In Survival mode, it remains one of the few unobtainable heads without experimental features or cheats."
    },
    "minecraft:camera": {
        id: "minecraft:camera",
        name: "Camera",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Capturing photographs of the world",
            secondaryUse: "Placing as a stationary photo-taking device"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Obtainable via commands or Creative inventory"]
        },
        specialNotes: [
            "Exclusively found in Bedrock and Education Editions.",
            "Creates a Photo item when used to take a picture.",
            "Can be placed on the ground and will track nearby players."
        ],
        description: "The Camera is a unique tool found in Minecraft Bedrock Edition, originally part of the Education Edition features. It allows players to capture still images of their surroundings, which are then saved as Photo items. When held, it can be used to take a snapshot, and when placed on the ground, it acts as a stationary camera that follows player movements. It is a fantastic tool for documenting adventures or creating in-game galleries."
    },
    "minecraft:portfolio": {
        id: "minecraft:portfolio",
        name: "Portfolio",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Storing and viewing photographs",
            secondaryUse: "Managing photo collections"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Obtainable via commands or Creative inventory"]
        },
        specialNotes: [
            "Acts as a digital photo album for the player.",
            "Can hold multiple Photos taken with the Camera.",
            "Bedrock and Education Edition exclusive item."
        ],
        description: "The Portfolio is a specialized item used to store and organize the photos captured with a Camera. It functions similarly to a book, allowing players to flip through their pictures and add captions. This makes it an essential companion for the Camera, providing a way to preserve and share memories of your Minecraft journey. It is only available when Education features are enabled or via the Creative inventory."
    },
    "minecraft:balloon": {
        id: "minecraft:balloon",
        name: "Balloon",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Attaching to mobs to make them float",
            secondaryUse: "Decoration when tied to fences"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Latex x6", "Lead x1", "Helium x1", "Dye x1"]
        },
        specialNotes: [
            "Can be attached to passive and neutral mobs.",
            "Goes up at a steady speed and can lift mobs into the sky.",
            "Requires Education Edition features to be enabled for crafting."
        ],
        description: "Balloons are fun, buoyant objects available in Minecraft Bedrock when Education features are active. They can be attached to most mobs, causing them to float upwards into the air, or tied to fence posts for colorful decorations. They come in 16 different colors based on the dye used in crafting. While they are mostly for fun, they can be popped by arrows or other projectiles, making for interesting mini-games."
    },
    "minecraft:latex": {
        id: "minecraft:latex",
        name: "Latex",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting fuel and material for Balloons",
            secondaryUse: "Chemistry component"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Carbon x5", "Hydrogen x8"]
        },
        specialNotes: [
            "Created using the formula C5H8 in the Compound Creator.",
            "Essential ingredient for crafting balloons of any color.",
            "Exclusive to the Education Edition features toggle.",
            "Cannot be used as fuel or food."
        ],
        description: "Latex is a complex chemical compound used primarily in the production of balloons. It is created by combining carbon and hydrogen atoms in a specific ratio within the Compound Creator. As one of the core chemistry items in Bedrock Edition's education features, it represents the intersection of science and crafting, allowing players to manufacture items that defy standard Minecraft physics, such as lifting mobs into the sky."
    },
    "minecraft:bleach": {
        id: "minecraft:bleach",
        name: "Bleach",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Removing dye from colored blocks and items",
            secondaryUse: "Chemistry component"
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Water x3", "Sodium Hypochlorite x3"]
        },
        specialNotes: [
            "Can reset the color of wool, carpets, beds, and banners to white.",
            "Created by combining Water and Sodium Hypochlorite in a Lab Table.",
            "Requires Education Edition features to be enabled.",
            "Provides a way to reclaim basic building materials from dyed versions."
        ],
        description: "Bleach is a powerful cleaning agent that can strip the color from various dyed items in Minecraft. When combined with colored wool, beds, or banners in a crafting grid, it restores them to their original white color. This item is particularly useful for builders who want to repurpose their materials or correct mis-colored decorations. It is manufactured using the Lab Table by balancing specific amounts of Water and Sodium Hypochlorite."
    },
    "minecraft:sparkler": {
        id: "minecraft:sparkler",
        name: "Sparkler",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Emitting colorful particles when held and activated",
            secondaryUse: "Decoration and celebration"
        },
        crafting: {
            recipeType: "Lab Table/Crafting Table",
            ingredients: ["Magnesium", "Stick", "Chloride (Calcium, Mercuric, Lithium, Potassium, or Tungsten)"]
        },
        specialNotes: [
            "Available in Blue, Red, Green, Purple, and Orange colors.",
            "Activated when used in the player's hand, continuously emitting particles.",
            "Does not emit actual light level, only visual particles.",
            "Gradually consumes durability while active until it burns out."
        ],
        description: "Sparklers are decorative items that create a beautiful, continuous stream of colored particles when held and used. They come in five distinct colors, each determined by the specific metal chloride used during crafting. While they don't provide functional lighting for exploration, they are perfect for celebrations, markers, or atmospheric effects in maps. They are a staple of the chemistry-based crafting available in Bedrock Edition's education mode."
    },
    "minecraft:glow_stick": {
        id: "minecraft:glow_stick",
        name: "Glow Stick",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Portable, hand-held light source",
            secondaryUse: "Underwater illumination"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Polyethylene x6", "Hydrogen Peroxide", "Luminol", "Dye"]
        },
        specialNotes: [
            "Emits a bright light level of 15 when activated.",
            "Must be 'shaken' (used) to start glowing.",
            "Works perfectly underwater, unlike torches.",
            "Eventually burns out and is removed from the inventory.",
            "Available in 16 different colors based on the dye used."
        ],
        description: "Glow Sticks are advanced portable light sources that provide high-intensity illumination while held in the player's hand. Unlike traditional torches, they are waterproof and can be used to light up the depths of the ocean. After being activated with a shake, they emit light for a limited time before eventually burning out. They are crafted through a multi-step chemistry process involving the creation of polyethylene and luminol."
    },
    "minecraft:medicine": {
        id: "minecraft:medicine",
        name: "Medicine",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing specific negative status effects",
            secondaryUse: "Advanced alchemy"
        },
        crafting: {
            recipeType: "Brewing Stand",
            ingredients: ["Awkward Potion", "Element (Silver, Bismuth, Calcium, or Cobalt)"]
        },
        specialNotes: [
            "Antidote cures Poison; Elixir cures Weakness; Eye Drops cure Blindness; Tonic cures Nausea.",
            "Brewed by adding specific elements to Awkward Potions.",
            "More targeted than milk, as it only removes the specific negative effect.",
            "Cannot be turned into splash or lingering versions."
        ],
        description: "Medicines are specialized remedial items that provide targeted cures for some of Minecraft's most common ailments. Unlike milk buckets, which remove all status effects, each medicine type focuses on a single debuff: Antidote for Poison, Elixir for Weakness, Eye Drops for Blindness, and Tonic for Nausea. These are brewed using the Brewing Stand by infusing Awkward Potions with pure chemical elements like Silver or Cobalt, representing the pinnacle of chemistry-based survival."
    },
    "minecraft:super_fertilizer": {
        id: "minecraft:super_fertilizer",
        name: "Super Fertilizer",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly growing plants and crops to maturity.",
            secondaryUse: "Generating flowers and tall grass on grass blocks."
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Ammonia + Phosphorus"]
        },
        specialNotes: [
            "Guaranteed 100% growth rate compared to standard Bone Meal.",
            "Increases the count of flowers produced when used on soil.",
            "One of the few functional chemistry items in Bedrock.",
            "Requires Education Edition features to be enabled."
        ],
        description: "Super Fertilizer is an enhanced version of bone meal available in Bedrock Edition's education mode. It is crafted on a Lab Table by combining Ammonia and Phosphorus. Unlike regular bone meal, which has a chance to fail or require multiple uses, Super Fertilizer instantly grows plants to their final stage and produces a larger amount of flowers and grass when used on ground. It represents a more efficient, chemistry-based approach to farming and horticulture."
    },
    "minecraft:compound_creator": {
        id: "minecraft:compound_creator",
        name: "Compound Creator",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Combining chemical elements into compounds.",
            secondaryUse: "Educational exploration of molecular chemistry."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Contains 36 input slots for elements.",
            "Allows creation of over 30 unique compounds.",
            "Includes a 'combination' animation during success.",
            "Vital for crafting Latex and other special materials."
        ],
        description: "The Compound Creator is one of the four chemistry workstations introduced in Education Edition. It allows players to combine various chemical elements into compounds, such as Salt, Latex, or Crude Oil. Players place elements in the grid, and if the proportions are correct, the resulting compound appears. It is the fundamental starting point for advanced chemistry-based crafting, enabling the creation of unique items like balloons and glow sticks."
    },
    "minecraft:element_constructor": {
        id: "minecraft:element_constructor",
        name: "Element Constructor",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Synthesizing chemical elements from subatomic particles.",
            secondaryUse: "Learning atomic numbers and structure."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Allows setting precise Protons, Neutrons, and Electrons.",
            "Can create all 118 known elements.",
            "Supports fictional isotopes like 'PWI' (if applicable) or high-numbered elements.",
            "The primary source for Silver, Gold, and Carbon elements."
        ],
        description: "The Element Constructor is a powerful workstation that allows players to build chemical elements from scratch. By adjusting the number of protons, neutrons, and electrons in its interface, players can create any of the 118 elements from the periodic table, as well as several fictional isotopes. This block serves as the source of all raw materials for Education Edition's chemistry system, turning atomic theory into a tangible gameplay mechanic."
    },
    "minecraft:lab_table": {
        id: "minecraft:lab_table",
        name: "Lab Table",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Executing complex chemical reactions to create special items.",
            secondaryUse: "Experimental crafting of alchemical products."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Used to create Ice Bombs, Bleach, and Heat Blocks.",
            "Requires clicking the 'Combine' button to activate.",
            "Failure results in a puff of smoke and loss of materials.",
            "Features a unique 'shaking' animation when working."
        ],
        description: "The Lab Table is a workstation used to combine compounds and elements into functional items through chemical reactions. Unlike the Compound Creator, which is for stable mixtures, the Lab Table is used for 'experimental' results like Bleach, Ice Bombs, and Super Fertilizer. It features a unique animation when used, where the player must 'combine' the materials, and occasionally an incorrect mixture can lead to a small puff of fire and smoke."
    },
    "minecraft:material_reducer": {
        id: "minecraft:material_reducer",
        name: "Material Reducer",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decomposing Minecraft blocks into their constituent elements.",
            secondaryUse: "Analyzing the chemical composition of game materials."
        },
        crafting: {
            recipeType: "Creative/Commands Only",
            ingredients: []
        },
        specialNotes: [
            "Deconstructs common blocks like Grass, Stone, and Wood.",
            "The output elements depend on the block's real-world properties.",
            "A non-destructive way to farm elements in peaceful experiments.",
            "Available only when Education features are toggled."
        ],
        description: "The Material Reducer is a chemistry workstation that breaks down standard Minecraft blocks into their constituent chemical elements. By placing a block like Grass, Stone, or Glass into the reducer, the machine decomposes it into a variety of elements such as Oxygen, Silicon, or Carbon. This provides a way to obtain elements without using the Element Constructor, allowing players to discover the chemical makeup of the Minecraft world."
    },
    "minecraft:sodium_acetate": {
        id: "minecraft:sodium_acetate",
        name: "Sodium Acetate",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Ice Bombs",
            secondaryUse: "Alchemy and chemistry experiments"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Carbon x2", "Hydrogen x3", "Sodium x1", "Oxygen x2"]
        },
        specialNotes: [
            "Chemical formula: C2H3NaO2",
            "Requires 2 Carbon, 3 Hydrogen, 1 Sodium, and 2 Oxygen in the Compound Creator.",
            "Used to create Ice Bombs by combining four units in a Lab Table.",
            "Only available when Education Edition features are enabled."
        ],
        description: "Sodium Acetate is a chemical compound used in Minecraft Bedrock's education mode primarily for the creation of Ice Bombs. It is synthesized in the Compound Creator by combining carbon, hydrogen, sodium, and oxygen atoms. When four units of Sodium Acetate are processed in a Lab Table, they result in an Ice Bomb, which can freeze water into ice upon impact. It represents one of the more complex chemical products players can manufacture for functional use."
    },
    "minecraft:sodium_hypochlorite": {
        id: "minecraft:sodium_hypochlorite",
        name: "Sodium Hypochlorite",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Bleach",
            secondaryUse: "Chemistry-based utility"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Sodium x1", "Chlorine x1", "Oxygen x1"]
        },
        specialNotes: [
            "Chemical formula: NaClO",
            "Synthesized using 1 Sodium, 1 Chlorine, and 1 Oxygen in the Compound Creator.",
            "Core ingredient for making Bleach when combined with Water in a Lab Table.",
            "Essential for chem-based cleaning and color restoration in Minecraft."
        ],
        description: "Sodium Hypochlorite is a powerful oxidizing compound used in the production of Bleach within Minecraft Bedrock's education features. Players can create it in the Compound Creator by balancing sodium, chlorine, and oxygen elements. When mixed with water at a Lab Table, it produces Bleach, a versatile tool for removing dyes from beds, banners, and wool. It serves as a key example of how chemistry can be applied to decorative and utility-based crafting."
    },
    "minecraft:magnesium_oxide": {
        id: "minecraft:magnesium_oxide",
        name: "Magnesium Oxide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Heat Blocks",
            secondaryUse: "Environmental heat management"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Magnesium x1", "Oxygen x1"]
        },
        specialNotes: [
            "Chemical formula: MgO",
            "Created by combining 1 Magnesium and 1 Oxygen in the Compound Creator.",
            "Used at the Lab Table to manufacture Heat Blocks.",
            "Helps create blocks that can melt nearby ice and snow without emitting light."
        ],
        description: "Magnesium Oxide is a basic chemical compound available in the chemistry system of Minecraft Bedrock. It is produced by combining magnesium and oxygen atoms in the Compound Creator. Its primary utility is as a component for crafting Heat Blocks, which are unique blocks capable of melting snow and ice in a wide radius. This makes Magnesium Oxide an important material for players looking to manage frozen environments using advanced chemical tools."
    },
    "minecraft:aluminum_oxide": {
        id: "minecraft:aluminum_oxide",
        name: "Aluminum Oxide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Hardened Glass",
            secondaryUse: "Industrial building reinforcement"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Aluminum x2", "Oxygen x3"]
        },
        specialNotes: [
            "Chemical formula: Al2O3",
            "Synthesized from 2 Aluminum and 3 Oxygen atoms in the Compound Creator.",
            "Used in a Crafting Table to produce Hardened Glass and Hardened Glass Panes.",
            "One of the two compounds required for industrial-strength transparent blocks."
        ],
        description: "Aluminum Oxide is a sturdy chemical compound used primarily in the manufacturing of Hardened Glass within Minecraft Bedrock's education mode. It is created in the Compound Creator using aluminum and oxygen. When combined with Boron Trioxide and regular glass in a Crafting Table, it produces a much more durable version of glass that has higher blast resistance. This compound highlights the industrial applications of chemistry in creating superior building materials."
    },
    "minecraft:boron_trioxide": {
        id: "minecraft:boron_trioxide",
        name: "Boron Trioxide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ingredient for crafting Hardened Glass",
            secondaryUse: "Industrial building reinforcement"
        },
        crafting: {
            recipeType: "Compound Creator",
            ingredients: ["Boron x2", "Oxygen x3"]
        },
        specialNotes: [
            "Chemical formula: B2O3",
            "Created by combining 2 Boron and 3 Oxygen atoms in the Compound Creator.",
            "Vital component for crafting Hardened Glass in the Crafting Table.",
            "Works in conjunction with Aluminum Oxide to reinforce glass structures."
        ],
        description: "Boron Trioxide is a specialized chemical compound fundamental to the production of Hardened Glass in Minecraft Bedrock's education features. Produced in the Compound Creator from boron and oxygen, it serves as one of the reinforcing agents when applied to standard glass blocks. By layering Boron Trioxide and Aluminum Oxide with glass in a crafting grid, players can create transparent blocks that are significantly more resistant to explosions and breakage than their standard counterparts."
    }
};
