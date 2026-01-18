// Pocket Wikipedia Foundation - Miscellaneous Items Provider
// Contains metadata for items that don't fit into other categories:
// enchanted book, knowledge book, bundle, goat horn (all variants),
// dragon egg, elytra, and other unique items.

/**
 * Miscellaneous items metadata
 * @type {Object.<string, import('../index').ItemMetadata>}
 */
export const miscItems = {
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ultimate trophy and decorative block",
            secondaryUse: "Teleports when interacted with (right-click/tap)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by defeating the Ender Dragon for the first time"]
        },
        specialNotes: [
            "Only one Dragon Egg exists naturally per world",
            "Falls like sand or gravel if no block is beneath it",
            "Can be mined by placing a torch two blocks below and breaking the block it sits on",
            "Does not have a functional use in crafting or progression beyond decoration",
            "Considered the rarest item in a single-player survival world"
        ],
        description: "The Dragon Egg is the rarest and most prestigious trophy in Minecraft. It appears on the exit portal after the Ender Dragon is defeated for the very first time in a world. While it has no functional purpose in terms of gameplay progression or crafting, it serves as a symbol of a player's triumph over the game's final boss. It has the unique property of teleporting to a nearby location when clicked, making it notoriously difficult to pick up without specific techniques like using pistons or gravity-based mining."
    },
    "minecraft:elytra": {
        id: "minecraft:elytra",
        name: "Elytra",
        maxStack: 1,
        durability: 432,
        enchantable: true,
        usage: {
            primaryUse: "Gliding and powered flight (with firework rockets)",
            secondaryUse: "High-speed transportation across long distances"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in End Ships within End Cities"]
        },
        specialNotes: [
            "Equipped in the chestplate slot; reduces armor protection to zero for that slot",
            "Repaired using Phantom Membranes in an anvil or the Mending enchantment",
            "Lose 1 durability point per second while gliding",
            "When durability reaches 1, they become 'Broken Elytra' and stop functioning until repaired",
            "Can be enchanted with Unbreaking and Mending for longevity"
        ],
        description: "Elytra are rare, high-tier items that provide players with the ability to glide and fly. Found exclusively in End Ships, they are considered one of the most transformative items in the game, completely changing how players navigate the world. When paired with firework rockets, Elytra allow for sustained, powered flight, making them the fastest mode of travel in Minecraft. They are fragile and require regular maintenance with Phantom Membranes to prevent them from becoming broken and unusable."
    },
    "minecraft:trial_key": {
        id: "minecraft:trial_key",
        name: "Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking Vaults in Trial Chambers",
            secondaryUse: "Accessing loot from Trial Spawner rewards"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Dropped by Trial Spawners after defeating all mobs"]
        },
        specialNotes: [
            "Introduced in Bedrock Edition 1.21",
            "Has a 50% chance to drop from a standard Trial Spawner",
            "Consumed upon use when unlocking a Vault",
            "Distinct from the Ominous Trial Key used for Ominous Vaults",
            "A stackable reward that encourages multiple dungeon runs"
        ],
        description: "The Trial Key is a specialized utility item used to unlock Vaults found within Trial Chambers. These keys are earned by successfully completing the challenges set by Trial Spawners. Once all mobs from a spawner are defeated, there is a high chance it will eject a Trial Key as part of its reward. Using the key on a Vault grants the player a variety of valuable loot, but the key is consumed in the process. Each Vault can only be opened once per player, encouraging explorers to seek out more chambers."
    },
    "minecraft:ominous_trial_key": {
        id: "minecraft:ominous_trial_key",
        name: "Ominous Trial Key",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Unlocking Ominous Vaults in Trial Chambers",
            secondaryUse: "Obtaining high-tier rewards like the Heavy Core"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Dropped by Ominous Trial Spawners"]
        },
        specialNotes: [
            "Requires the 'Bad Omen' effect to be active near Trial Spawners",
            "Features a much more difficult combat challenge than standard keys",
            "Has a 30% chance to drop from an Ominous Trial Spawner",
            "The only way to obtain the Heavy Core for crafting the Mace",
            "Identified by its darker, more menacing texture compared to the standard key"
        ],
        description: "The Ominous Trial Key is a rare and dangerous variant of the standard Trial Key, used to unlock the significantly more valuable Ominous Vaults. To obtain one, players must trigger an Ominous Trial by approaching a Trial Spawner while under the Raid Omen effect. This initiates a much harder version of the Trial Spawner's challenge. If successful, the spawner has a chance to drop this key. These keys provide access to the best loot the chambers have to offer, including the elusive Heavy Core."
    },
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Mace weapon",
            secondaryUse: "High-value decorative block"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Rare reward from Ominous Vaults (7.5% chance)"]
        },
        specialNotes: [
            "Extremely heavy; cannot be moved by pistons",
            "Used with a Breeze Rod in a crafting table to create the Mace",
            "One of the most difficult items to obtain in the 1.21 update",
            "Emits a distinct metallic sound when placed or broken",
            "A block-item hybrid that can be placed in the world"
        ],
        description: "The Heavy Core is a dense, metallic block-item that serves as the heart of the Mace weapon. It is one of the rarest rewards in the game, only obtainable by unlocking Ominous Vaults within Trial Chambers. Its primary purpose is to be combined with a Breeze Rod to create the Mace, a powerful weapon that scales damage with fall distance. Due to its weight and rarity, the Heavy Core is a symbol of both martial prowess and a bit of luck in conquering the game's toughest trials."
    },
    "minecraft:breeze_rod": {
        id: "minecraft:breeze_rod",
        name: "Breeze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wind Charges and the Mace",
            secondaryUse: "Crafting Flow Armor Trim and Flow Banner Patterns"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Dropped by Breezes in Trial Chambers"]
        },
        specialNotes: [
            "Breezes drop 1-2 rods; increased by Looting enchantment",
            "Can be crafted into 4 Wind Charges",
            "Essential component for the Mace (with Heavy Core)",
            "A relatively new material added in the 1.21 update"
        ],
        description: "The Breeze Rod is a specialized crafting material dropped by the Breeze mob, found within Trial Chambers. It crackles with elemental wind energy and serves multiple purposes in high-level crafting. Most notably, it is used alongside a Heavy Core to create the Mace, and it can also be broken down into Wind Charges for player use. Its versatility and connection to the Trial Chambers make it a highly sought-after drop for players looking to master the 1.21 combat features."
    },
    "minecraft:bundle": {
        id: "minecraft:bundle",
        name: "Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Storing and organizing multiple item types in one slot",
            secondaryUse: "Gathering diverse items during early exploration"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String x1", "Leather x1"]
        },
        specialNotes: [
            "Can hold up to 64 items (1 stack equivalent)",
            "Items can be added or removed from the bundle while it is held in the inventory.",
            "Visual bar indicates how full the bundle is",
            "Empty bundles stack to 1, but multiple bundles can be carried in the inventory",
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
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "White Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with white dye",
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
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Black Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with black dye",
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
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Red Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with red dye",
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
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Blue Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with blue dye",
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
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Orange Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with orange dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Orange Bundle is a colorful storage tool introduced in the Bundles of Bravery drop. It allows players to combine different item types into a single inventory slot, saving precious space during exploration. By using orange dye on a standard bundle, players can create this vibrant pouch. It is ideal for categorizing resources like copper, pumpkins, or acacia wood, making it easier to stay organized while on the go in the vast world of Minecraft Bedrock Edition."
    },
    "minecraft:magenta_bundle": {
        id: "minecraft:magenta_bundle",
        name: "Magenta Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Magenta Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with magenta dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Magenta Bundle is a bright and distinctive variant of the bundle item, added in the 1.21.40 update. It provides the same essential storage functionality as all bundles, allowing for up to 64 items of various types to be grouped together. Its unique magenta color is perfect for players who want their storage to stand out or for organizing end-themed loot like chorus fruit. Crafted with magenta dye, it adds a splash of color to any player's inventory management system."
    },
    "minecraft:light_blue_bundle": {
        id: "minecraft:light_blue_bundle",
        name: "Light Blue Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Light Blue Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with light blue dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Light Blue Bundle brings a soft, airy aesthetic to inventory organization. Part of the 'Bundles of Bravery' update, this item is crafted by combining a standard bundle with light blue dye. It functions as a compact storage solution, especially useful for gathering small quantities of various materials without filling up the inventory. The light blue color is often chosen by players for sorting sky or ocean-related items, helping to maintain a tidy and visually appealing backpack."
    },
    "minecraft:yellow_bundle": {
        id: "minecraft:yellow_bundle",
        name: "Yellow Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Yellow Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with yellow dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Yellow Bundle is a sunny and cheerful storage pouch that helps players tackle inventory clutter. Introduced in version 1.21.40, it allows for the storage of multiple items in one slot, with the total capacity base on standard stack sizes. This yellow variant is easily identifiable in a busy inventory, making it perfect for marking high-priority supplies or gold-related items. It is a practical and stylish addition to any adventurer's gear, crafted simply with yellow dye."
    },
    "minecraft:lime_bundle": {
        id: "minecraft:lime_bundle",
        name: "Lime Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Lime Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with lime dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Lime Bundle is a vivid, green-tinted storage item that arrived with the 'Bundles of Bravery' drop for Bedrock Edition. It offers players a convenient way to condense their items, holding up to 64 units across multiple types. By dyeing a bundle with lime dye, players get a pouch that is perfect for organizing natural resources like saplings, seeds, or moss. Its bright color ensures it won't be easily lost among other items, providing both utility and aesthetic appeal."
    },
    "minecraft:green_bundle": {
        id: "minecraft:green_bundle",
        name: "Green Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Green Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with green dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Green Bundle is a dark, forest-toned storage variant introduced in the Bundles of Bravery update. It allows for the efficient organization of items, fitting multiple types into a single inventory slot up to a total count of 64. Crafted by combining a standard bundle with green dye, it is a favorite for players who want to categorize their wilderness finds or foliage-related blocks. Its deep green hue provides a classic Minecraft look while significantly improving the quality of inventory management during long-distance travels."
    },
    "minecraft:brown_bundle": {
        id: "minecraft:brown_bundle",
        name: "Brown Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Brown Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with brown dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Brown Bundle is a practical storage solution with an earthy aesthetic, added to Bedrock Edition in version 1.21.40. Like all bundles, it can hold up to a stack's worth of diverse items, making it perfect for clearing up the clutter of miscellaneous blocks. It is crafted by dyeing a bundle with brown dye. Many players find the brown bundle ideal for storing wood-related materials, dirt, or other subterranean loot, blending seamlessly with a traditional survivalist's inventory layout."
    },
    "minecraft:purple_bundle": {
        id: "minecraft:purple_bundle",
        name: "Purple Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Purple Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with purple dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Purple Bundle offers a royal and mysterious aesthetic for storage, becoming available as part of the 1.21.40 drop. This variant is created by applying purple dye to a regular bundle, resulting in a sleek pouch that can house various item stacks in one slot. It is particularly useful for organizing high-value or end-game resources like obsidian or shulker-related items. The vibrant purple color makes it easy to locate in a inventory, providing both function and a splash of color to the player's UI."
    },
    "minecraft:cyan_bundle": {
        id: "minecraft:cyan_bundle",
        name: "Cyan Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Cyan Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with cyan dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Cyan Bundle is a bright and modern storage alternative for Minecraft explorers. Introduced in the 'Bundles of Bravery' update, it allows players to store up to 64 items of different types in a single slot. By crafting a bundle with cyan dye, players receive this distinctively colored pouch. It is often used for ocean-themed resources or prismarine blocks, helping players keep their theme-specific loot organized. This bundle is an essential tool for any player looking to optimize their carrying capacity with style."
    },
    "minecraft:pink_bundle": {
        id: "minecraft:pink_bundle",
        name: "Pink Bundle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Colored storage pouch",
            secondaryUse: "Inventory organization by color"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Bundle", "Pink Dye"]
        },
        specialNotes: [
            "Functions identically to a standard bundle",
            "Crafted by combining a standard bundle with pink dye",
            "Introduced in Bedrock Edition 1.21.40 (Bundles of Bravery)"
        ],
        description: "The Pink Bundle is a cheerful and vibrant storage variant added to the game in version 1.21.40. Crafted using pink dye on a standard bundle, it functions as a compact storage pouch for grouping various items together. This variant is especially popular for players who enjoy a more colorful and personalized inventory setup. Whether you're gathering flowers, wool, or cherry wood, the pink bundle provides a dedicated, easy-to-spot location for your pink-themed collections, ensuring your backpack stays tidy and bright."
    },
    "minecraft:totem_of_undying": {
        id: "minecraft:totem_of_undying",
        name: "Totem of Undying",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Preventing death once per item",
            secondaryUse: "Gaining temporary combat buffs (Regeneration, Fire Resistance, Absorption)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Evokers in Woodland Mansions or Raids"]
        },
        specialNotes: [
            "Must be held in the main hand or off-hand when fatal damage is taken",
            "Consumed upon use, leaving the player with half a heart of health",
            "Clears all existing status effects upon activation",
            "Does not prevent death from the Void or the `/kill` command",
            "One of the few items dropped by specific mobs that cannot be farmed easily without raids"
        ],
        description: "The Totem of Undying is a powerful and rare defensive item that offers players a literal second chance at life. When held during a fatal blow, the totem activates, preserving the player's life and granting them a brief window of nearly invulnerable status effects. It is primarily obtained by defeating Evokers, the powerful spellcasters of the Illager family. For many survivors and hardcore mode players, the Totam of Undying is an essential item that they never leave home without."
    },
    "minecraft:goat_horn": {
        id: "minecraft:goat_horn",
        name: "Goat Horn",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Playing a loud horn sound",
            secondaryUse: "Atmospheric signaling and decoration"
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Dropped by a Goat ramming a hard block (Stone, Logs, Ore, etc.)"]
        },
        specialNotes: [
            "Exists in 8 unique variants: Ponder, Sing, Seek, Feel, Admire, Call, Yearn, and Dream",
            "4 variants are exclusive to Screaming Goats",
            "Sound can be heard over long distances (up to 256 blocks)",
            "Has a 7-second cooldown after being used",
            "Dropping conditions require the goat to ram a naturally occurring solid block"
        ],
        description: "Goat Horns are interactive musical instruments that signify player presence or signal activities in multiplayer. They are obtained when a goat accidentally rams into a solid, natural block like stone or iron ore, causing one of its horns to break off. There are eight distinct sounds available, each with its own name and texture variant. While they provide no combat advantage, they are highly valued for their unique sounds and the challenge associated with collecting all eight variants from both regular and rare screaming goats."
    },
    "minecraft:brush": {
        id: "minecraft:brush",
        name: "Brush",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Extracting items from Suspicious Sand and Gravel",
            secondaryUse: "Participating in Archaeology gameplay"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Feather x1", "Copper Ingot x1", "Stick x1"]
        },
        specialNotes: [
            "Introduced in Bedrock Edition 1.20 (Trails & Tales)",
            "Only works on Suspicious Sand and Suspicious Gravel blocks",
            "Can be enchanted with Unbreaking and Mending",
            "Loses 1 durability point per block successfully brushed",
            "Essential for finding Pottery Sherds and Armor Trims"
        ],
        description: "The Brush is the primary tool for the archaeology system in Minecraft. Crafted with a simple combination of a feather, copper, and a stick, it allows players to carefully uncover hidden treasures buried within suspicious blocks. When used on suspicious sand or gravel found in ruins or wells, the brush slowly reveals the item contained within. This tool is the only way to obtain Pottery Sherds, which can be crafted into decorative pots, and certain rare armor trim smithing templates."
    },
    "minecraft:ominous_bottle": {
        id: "minecraft:ominous_bottle",
        name: "Ominous Bottle",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Triggering the 'Bad Omen' and 'Trial Omen' effects",
            secondaryUse: "Initiating raids or ominous trials"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Raid Captains or reward from Vaults"]
        },
        specialNotes: [
            "Introduced in Bedrock Edition 1.21",
            "Replaced the method of gaining Bad Omen from killing Captains directly",
            "Comes in levels I through V, determining the difficulty and duration of the Omen",
            "Drinking the bottle lasts for 1 hour 40 minutes (100 minutes)",
            "Essential for players wishing to start an Ominous Trial for better rewards"
        ],
        description: "The Ominous Bottle is a consumable item that grants the player the Bad Omen status effect upon drinking. In the 1.21 update, this item became the primary way to manage when and where raids or Ominous Trials occur. Bottles can be found as loot in Trial Chambers or dropped by Pillager Captains. By consuming a higher-level bottle, players can increase the intensity of the challenges they face, leading to better rewards but significantly higher danger from the mobs they encounter."
    },
    "minecraft:echo_shard": {
        id: "minecraft:echo_shard",
        name: "Echo Shard",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Recovery Compass",
            secondaryUse: "High-tier decorative crafting material"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found only in Ancient City loot chests"]
        },
        specialNotes: [
            "Extremely rare item found in the Deep Dark biome",
            "Requires 8 shards and a Compass to craft one Recovery Compass",
            "Cannot be obtained through mining or mob drops",
            "Distinct dark blue and teal appearance matching skulk blocks",
            "One of the only items tied specifically to the Warden's domain"
        ],
        description: "Echo Shards are mysterious crystals found exclusively within the loot chests of Ancient Cities. These shards are imbued with the energy of the Deep Dark and serve as the core component of the Recovery Compass. They are difficult to obtain due to the presence of the Warden and the stealth required to navigate Ancient Cities. For many players, gathering enough Echo Shards to craft a Recovery Compass is a major milestone in their exploration of the overworld's most dangerous depths."
    },
    "minecraft:recovery_compass": {
        id: "minecraft:recovery_compass",
        name: "Recovery Compass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Pointing to the location of the player's last death",
            secondaryUse: "Finding lost items after a fatal accident"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Echo Shard x8", "Compass x1"]
        },
        specialNotes: [
            "Only works if the player has previously died in the current dimension",
            "If the player has not died or is in the wrong dimension, the needle spins randomly",
            "Does not work in Hardcore mode (since there is no respawn)",
            "Considered one of the most useful late-game utility items for survival",
            "Must be crafted using rare materials from Ancient Cities"
        ],
        description: "The Recovery Compass is an advanced navigational tool that assists players in retrieving their lost gear. Unlike a standard compass that points to world spawn, the Recovery Compass tracks the exact coordinates of a player's last death. This makes it invaluable for long-distance explorers who may have died far from their base. However, it requires a significant investment of rare Echo Shards to craft and only functions while held in the same dimension where the death occurred."
    },
    "minecraft:disc_fragment_5": {
        id: "minecraft:disc_fragment_5",
        name: "Disc Fragment 5",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the '5' Music Disc",
            secondaryUse: "Collectable material from Ancient Cities"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Ancient City loot chests"]
        },
        specialNotes: [
            "9 fragments are required to craft the full Music Disc",
            "Extremely rare; found in small quantities (1-2 per chest)",
            "The resulting disc is one of the most unique and unsettling tracks in the game",
            "Exclusively found in the Deep Dark biome",
            "Introduced as part of the 1.19 Wild Update"
        ],
        description: "Disc Fragments are small, broken pieces of a music disc found only in the ruins of Ancient Cities. Separately, they are just shards of blackened material, but when nine of them are gathered and combined in a crafting grid, they form the mysterious '5' Music Disc. This disc is notable for containing ambient sounds and lore-heavy audio rather than a traditional musical track, making the fragments a high-priority item for players interested in Minecraft's hidden story and environmental storytelling."
    },
    "minecraft:spyglass": {
        id: "minecraft:spyglass",
        name: "Spyglass",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Zooming in on distant blocks and entities",
            secondaryUse: "Scouting terrain and checking for danger"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Amethyst Shard x1", "Copper Ingot x2"]
        },
        specialNotes: [
            "Provides an FOV (Field of View) reduction of roughly 1/10th",
            "Creates a circular vignette effect on the screen when used",
            "Player movement speed is significantly slowed while looking through it",
            "Allows players to see detail beyond the normal render distance limitations",
            "A non-consuming tool that lasts forever"
        ],
        description: "The Spyglass is a handheld tool used for long-distance observation. It allows players to zoom in on specific points in the distance, making it much easier to spot structures, mobs, or other players from a safe distance. Crafted from copper and amethyst, it represents one of the early functional uses for these materials. While it doesn't provide any combat buffs, its utility for scouting and planning makes it a staple for any explorer's inventory."
    },
    "minecraft:totem": {
        id: "minecraft:totem",
        name: "Totem of Undying",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Preventing death once per item",
            secondaryUse: "Gaining temporary combat buffs (Regeneration, Fire Resistance, Absorption)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Evokers in Woodland Mansions or Raids"]
        },
        specialNotes: [
            "Must be held in the main hand or off-hand when fatal damage is taken",
            "Consumed upon use, leaving the player with half a heart of health",
            "Clears all existing status effects upon activation",
            "Does not prevent death from the Void or the `/kill` command",
            "One of the few items dropped by specific mobs that cannot be farmed easily without raids"
        ],
        description: "The Totem of Undying is a powerful and rare defensive item that offers players a literal second chance at life. When held during a fatal blow, the totem activates, preserving the player's life and granting them a brief window of nearly invulnerable status effects. It is primarily obtained by defeating Evokers, the powerful spellcasters of the Illager family. For many survivors and hardcore mode players, the Totem of Undying is an essential item that they never leave home without."
    },
    "minecraft:trident": {
        id: "minecraft:trident",
        name: "Trident",
        maxStack: 1,
        durability: 250,
        enchantable: true,
        usage: {
            primaryUse: "Melee and ranged aquatic combat",
            secondaryUse: "Mobility (Riptide) and lightning strikes (Channeling)"
        },
        combat: {
            attackDamage: 9,
            attackSpeed: 1.1
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Drowned (0.53% chance when holding one in Bedrock)"]
        },
        specialNotes: [
            "In Bedrock, can be found as a drop from Drowned even if they are not holding one",
            "Has unique enchantments: Loyalty, Impaling, Riptide, and Channeling",
            "Riptide allows the player to launch themselves through water or rain",
            "Channeling summons lightning during thunderstorms if a mob is hit",
            "Impaling deals extra damage to aquatic mobs (in Bedrock, this includes all mobs in water)"
        ],
        description: "The Trident is a legendary aquatic weapon that offers some of the most unique gameplay mechanics in Minecraft. It cannot be crafted and must be obtained as a rare drop from Drowned. Depending on its enchantments, the Trident can be a powerful throwing weapon that returns to your hand (Loyalty), a tool for summoning lightning (Channeling), or a high-speed engine for flying through the rain (Riptide). It is particularly potent in Bedrock Edition, where its Impaling enchantment applies to any mob standing in water or rain, making it a versatile tool for both land and sea."
    },
    "minecraft:shield": {
        id: "minecraft:shield",
        name: "Shield",
        maxStack: 1,
        durability: 336,
        enchantable: true,
        usage: {
            primaryUse: "Blocking incoming attacks and projectiles",
            secondaryUse: "Deflecting creeper explosions"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Wood Planks x6", "Iron Ingot x1"]
        },
        specialNotes: [
            "In Bedrock, blocking is activated by crouching",
            "Reduces damage from most frontal attacks to zero when active",
            "Can be customized with Banners to change its appearance",
            "Blocks projectiles like arrows, causing them to bounce off",
            "Can be disabled for a short time if struck by an Axe-wielding mob or player"
        ],
        description: "The Shield is a fundamental defensive tool that significantly increases a player's survivability. By holding the crouch button in Bedrock Edition, the player raises the shield, negating almost all damage from the front, including explosions and projectiles. It is relatively easy to craft, requiring only wood and a single iron ingot. Shields can also be personalized by applying banners to them in a crafting grid, allowing players to show off their designs while staying protected in combat."
    },
    "minecraft:saddle": {
        id: "minecraft:saddle",
        name: "Saddle",
        maxStack: 1,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Riding horses, donkeys, mules, pigs, and striders",
            secondaryUse: "Transportation and racing"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in Dungeon, Fortress, and Village chests", "Fishing reward", "Traded by Leatherworkers"]
        },
        specialNotes: [
            "Essential for controlling the movement of tamed horses and llamas",
            "Pigs require a 'Carrot on a Stick' to be steered while saddled",
            "Striders require a 'Warped Fungus on a Stick' to be steered",
            "Cannot be crafted; must be found or traded",
            "A renewable resource through fishing and high-level villager trading"
        ],
        description: "The Saddle is an essential utility item for players looking to master ground and lava-based transportation. While it can be placed on several different mobs, its primary use is for riding tamed horses, allowing for high-speed travel across the overworld. Because it cannot be crafted, finding a saddle in a loot chest or through fishing is often considered a major milestone for early-game players. It also enables the unique ability to ride pigs and striders when paired with their respective steering tools."
    },
    "minecraft:name_tag": {
        id: "minecraft:name_tag",
        name: "Name Tag",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Giving custom names to mobs",
            secondaryUse: "Preventing mobs from despawning"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Found in chests (Dungeon, Mineshaft, Mansion)", "Fishing reward", "Traded by Librarians"]
        },
        specialNotes: [
            "Must be renamed in an Anvil before it can be used on a mob",
            "A named mob will never despawn naturally",
            "Cannot be used on players or the Ender Dragon",
            "Includes Easter eggs like 'Dinnerbone' or 'Grumm' (flips mobs) and 'jeb_' (rainbow sheep)",
            "Using 'Toast' on a rabbit gives it a special memorial skin"
        ],
        description: "The Name Tag is a simple but beloved item used to add personality and persistence to the mobs in a player's world. By renaming the tag in an anvil and using it on a mob, the player gives that creature a permanent name that appears whenever looked at. This is particularly useful for pet animals or for keeping specific hostile mobs (like an 'invited' zombie) from disappearing. It also unlocks several of Minecraft's most famous hidden features, changing the appearance or behavior of certain mobs based on the name given."
    },
    "minecraft:lead": {
        id: "minecraft:lead",
        name: "Lead",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Leashing and leading mobs around",
            secondaryUse: "Tethering mobs to fence posts"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String x4", "Slimeball x1"]
        },
        specialNotes: [
            "Can be used on most passive and neutral mobs",
            "In Bedrock, can also leash certain boat types or entities depending on experiments",
            "Multiple mobs can be led by a single player using separate leads",
            "Will break if the distance between the player and mob exceeds 10 blocks",
            "Dropping the lead item occurs when the leash is broken or the mob is killed"
        ],
        description: "The Lead (or leash) is a fundamental tool for animal husbandry and mob transport. It allows players to manually guide animals like cows, sheep, and horses without needing to lure them with food. It is also the only way to tether a mob to a fixed location, such as a fence post, which is essential for building stables or securing pets. While it can be crafted easily with string and slime, many players obtain their first leads by encounter with the Wandering Trader's llamas."
    },
    "minecraft:firework_rocket": {
        id: "minecraft:firework_rocket",
        name: "Firework Rocket",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Elytra propulsion and celebrations",
            secondaryUse: "Ranged attack (when crafted with Firework Stars)"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Gunpowder x1-3", "Paper x1", "Firework Star (Optional)"]
        },
        specialNotes: [
            "Flight duration is determined by the amount of gunpowder (1 to 3)",
            "Propels the player forward when using Elytra in mid-air",
            "Does not deal damage unless a Firework Star is included in the recipe",
            "Can be fired from Crossbows as a powerful explosive projectile",
            "Used to create beautiful, customizable light shows in the sky"
        ],
        description: "Firework Rockets are versatile items used for both transportation and aesthetics. While originally intended for decorative displays, they became one of the game's most essential items with the introduction of Elytra, as they provide the thrust needed for sustained flight. By adjusting the amount of gunpowder during crafting, players can control how long each rocket boost lasts. For combat, rockets can be infused with firework stars to create explosive ammunition for crossbows, making them as dangerous as they are beautiful."
    },
    "minecraft:flint_and_steel": {
        id: "minecraft:flint_and_steel",
        name: "Flint and Steel",
        maxStack: 1,
        durability: 64,
        enchantable: true,
        usage: {
            primaryUse: "Lighting fires, portals, and TNT",
            secondaryUse: "Clearing leaves and igniting campfires"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Flint x1", "Iron Ingot x1"]
        },
        specialNotes: [
            "Required to activate the Nether Portal",
            "Instantly ignites Creeper if used on them",
            "Can be enchanted with Unbreaking and Mending",
            "Has a limited number of uses before it breaks",
            "A essential tool for early survival and entering other dimensions"
        ],
        description: "Flint and Steel is a basic but indispensable tool for any Minecraft player. It is used to start fires on the surface of most blocks, light campfires for cooking, and, most importantly, ignite the obsidian frame to open a Nether Portal. Beyond its utility for travel, it can be used offensively to set mobs on fire or to quickly clear clutter like excess foliage. Every player should carry one, especially when preparing to travel to the Nether or deal with TNT."
    },
    "minecraft:item_frame": {
        id: "minecraft:item_frame",
        name: "Item Frame",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Displaying items and blocks on any solid surface",
            secondaryUse: "Creating storage labels, maps, and decorations"
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
            secondaryUse: "Redstone-interactive decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by a Piglin when killed by a Charged Creeper"]
        },
        specialNotes: [
            "Features animated ears that flap when the wearer moves",
            "When placed as a block and powered by redstone, its ears flap continually",
            "Reduces the detection range of Piglins by 50% when worn",
            "A rare trophy item obtained through careful mob manipulation",
            "Essential for mimicking Piglin behavior or high-detail Nether builds"
        ],
        description: "The Piglin Head is a rare decorative item added to the game as part of late-game exploration and mob combat. It is uniquely obtained when a Charged Creeper's explosion kills a Piglin. Like other mob heads, it can be worn as a helmet or placed as a block. Its most iconic feature is the animated ears, which flap as the player moves or when powered by redstone. For adventurers, it serves as a powerful tool for sneaking through the Nether, as it halves the distance at which Piglins will notice and potentially attack the player."
    },
    "minecraft:zombie_head": {
        id: "minecraft:zombie_head",
        name: "Zombie Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Redstone-interactive decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by a Zombie when killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Zombie is killed by another Charged Creeper's explosion",
            "Reduces the detection range of Zombies by 50% when worn",
            "Can be placed on a note block to play the Zombie's idle sound",
            "A gruesome but popular trophy for survival players",
            "Used in crafting the Zombie Charge banner pattern"
        ],
        description: "The Zombie Head is a collectible entity item that captures the likeness of the common undead mob. It is a rare drop that occurs only when a Zombie is caught in the blast of a Charged Creeper. Players can wear it as a decorative helmet, which also provides a stealth benefit by reducing Zombie detection range. In more creative uses, placing it on a note block allows builders to create custom ambient soundscapes, making it a favorite for haunted house builds and complex map designs."
    },
    "minecraft:skeleton_skull": {
        id: "minecraft:skeleton_skull",
        name: "Skeleton Skull",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Redstone-interactive decoration"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by a Skeleton when killed by a Charged Creeper"]
        },
        specialNotes: [
            "Obtained when a Skeleton is killed by another Charged Creeper's explosion",
            "Reduces the detection range of Skeletons by 50% when worn",
            "Produces the Skeleton's bone-rattling sound when placed on a note block",
            "Used to craft the Skeleton Charge (Skull) banner pattern",
            "Classic white skeletal trophy for any player's base"
        ],
        description: "The Skeleton Skull is a classic decorative item that players can obtain through the difficult task of using a Charged Creeper to kill a Skeleton. It serves as both a trophy and a utility item; when worn as armor, it halves the distance at which Skeletons will target the player, providing a tactical edge in the dark. It is also an essential crafting ingredient for creating the iconic skull-and-crossbones banner pattern, making it a staple for pirate-themed builds and high-detail dungeon aesthetics."
    },
    "minecraft:creeper_head": {
        id: "minecraft:creeper_head",
        name: "Creeper Head",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Decorative block and wearable head armor",
            secondaryUse: "Redstone-interactive decoration"
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
        description: "The Material Reducer is a chemistry workstation that breaks down standard Minecraft blocks into their constituent chemical elements. By placing a block like Grass, Stone, or Wood into the reducer, the machine decomposes it into a variety of elements such as Oxygen, Silicon, or Carbon. This provides a way to obtain elements without using the Element Constructor, allowing players to discover the chemical makeup of the Minecraft world."
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
