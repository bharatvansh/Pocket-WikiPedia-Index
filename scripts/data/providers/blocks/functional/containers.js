// Pocket Wikipedia Foundation - Container Blocks Data
// ============================================
// This file contains: Chest, trapped chest, ender chest, barrel,
// shulker box (all 17 colors including undyed), decorated pot,
// chiseled bookshelf, jukebox, composter, beehive, bee nest, hopper
// ============================================

/**
 * Container blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const containerBlocks = {
    "minecraft:chest": {
        id: "minecraft:chest",
        name: "Chest",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Chest"],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, dungeons, mineshafts, strongholds, temples, woodland mansions, ocean ruins"
        },
        description: "A Chest is a fundamental storage block with 27 inventory slots for storing items and blocks. Two adjacent chests combine to form a large chest with 54 slots. Chests can be trapped by mobs, which occurs when a silverfish, endermite, or zombie villager spawns inside. They generate naturally in villages, dungeons, mineshafts, strongholds, and various temples. In Bedrock Edition, chests can be placed underwater and work as expected, making them useful for underwater base storage."
    },
    "minecraft:trapped_chest": {
        id: "minecraft:trapped_chest",
        name: "Trapped Chest",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Trapped Chest"],
        generation: {
            dimension: "Overworld",
            yRange: "Dungeons, mineshafts, villages, woodland mansions, jungle temples"
        },
        description: "A Trapped Chest is a variant of the standard chest that emits a redstone signal when opened, detectable by adjacent redstone comparators. The signal strength is based on how many players are viewing the chest simultaneously, ranging from 1 to 15. It functions identically to a regular chest for storage, combining with adjacent trapped chests to form large trapped chests. Trapped chests can be used in combination traps, hidden switches, and detection systems in Bedrock Edition."
    },
    "minecraft:barrel": {
        id: "minecraft:barrel",
        name: "Barrel",
        hardness: 2.5,
        blastResistance: 2.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Barrel"],
        generation: {
            dimension: "Overworld",
            yRange: "Village fisher cottages, pillager outposts"
        },
        description: "A Barrel is a storage block that functions like a chest, offering 27 inventory slots for items. Unlike chests, barrels can be placed adjacent to each other without blocking access, and they do not emit light. Barrels can be placed on top of or below blocks, and their top and sides have different textures for decorative variety. Crafted from six wooden planks and two wooden slabs, barrels serve as job site blocks for Fisherman villagers and spawn naturally in their houses. In Bedrock Edition, barrels are particularly useful in compact builds due to their small footprint."
    },
    "minecraft:decorated_pot": {
        id: "minecraft:decorated_pot",
        name: "Decorated Pot",
        hardness: 0.0,
        blastResistance: 0.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Decorated Pot (when broken by hand)", "Pottery Sherds (when broken by tool)"],
        generation: {
            dimension: "Overworld",
            yRange: "Found in archaeological sites"
        },
        description: "The Decorated Pot is a storage block crafted from four Pottery Sherds or Bricks. Its patterns depend on the sherds used, reflecting ancient lore. It can hold a single stack of items, which can be inserted by players or hoppers. Breaking it with a sword shatters it into its original components, while using any other tool, hand, or projectile drops the pot as a whole block. This allows for unique interactions in builds and adventure maps, serving as both a decorative piece and a functional container."
    },
    "minecraft:chiseled_bookshelf": {
        id: "minecraft:chiseled_bookshelf",
        name: "Chiseled Bookshelf",
        hardness: 1.5,
        blastResistance: 1.5,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Chiseled Bookshelf"],
        generation: {
            dimension: "Overworld",
            yRange: "Craftable"
        },
        description: "The Chiseled Bookshelf is a functional block used to store and display up to six books, including regular, Written, and Enchanted Books. Players can manually place or remove items from specific slots. When paired with a Redstone Comparator, it outputs a signal based on the last slot interacted with, enabling secret doors and complex contraptions. It is crafted from six wooden slabs and three wooden planks. This block adds dynamic utility to libraries, serving as both a storage solution and a redstone trigger."
    },
    "minecraft:beehive": {
        id: "minecraft:beehive",
        name: "Beehive",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Beehive"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "A beehive is a player-crafted home for bees that can hold up to three bees and store honey as they return from pollinating flowers. When its honey level reaches 5, players can use glass bottles to collect honey bottles or shears to harvest honeycomb; placing a campfire beneath prevents bees from becoming angry. Breaking a beehive always drops the block, but using Silk Touch preserves any bees and honey stored inside so it can be relocated safely."
    },
    "minecraft:bee_nest": {
        id: "minecraft:bee_nest",
        name: "Bee Nest",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: true,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Bee Nest (requires Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Naturally generated on trees"
        },
        description: "A bee nest is the naturally generated bee home found attached to trees in certain Overworld biomes, often spawning with up to three bees inside. Like a beehive, it fills with honey up to level 5 and can be harvested with bottles or shears, ideally with campfire smoke to avoid angering the bees. In Bedrock Edition, breaking a bee nest without Silk Touch drops nothing, while Silk Touch allows the nest to be collected with its bees still inside."
    },
    "minecraft:ender_chest": {
        id: "minecraft:ender_chest",
        name: "Ender Chest",
        hardness: 22.5,
        blastResistance: 600,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: true
        },
        drops: ["Obsidian (8) if broken without Silk Touch"],
        generation: {
            dimension: "End",
            yRange: "End Cities treasure rooms"
        },
        description: "An ender chest is a storage block with a unique shared inventory across all dimensions for each player. Items placed inside one ender chest are accessible from any other ender chest in any world or dimension. It requires a diamond or netherite pickaxe to mine and drops 8 obsidian unless harvested with Silk Touch. Unlike regular chests, ender chests cannot be moved by pistons and emit light. The crafting recipe requires 8 obsidian and 1 eye of ender, making it a valuable resource for inventory management across multiple bases."
    },
    "minecraft:shulker_box": {
        id: "minecraft:shulker_box",
        name: "Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Shulker Box"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Shulker Box is a unique storage block that preserves its contents when broken, allowing items to be transported easily. It provides 27 slots of inventory space, similar to a chest. Unlike chests, shulker boxes can be picked up and placed elsewhere without losing the items inside, making them essential for high-capacity transport and organization. They can be dyed in 16 different colors and are crafted using two shulker shells and a chest. In Bedrock Edition, they can be broken by hand and will still drop as an item."
    },
    "minecraft:hopper": {
        id: "minecraft:hopper",
        name: "Hopper",
        hardness: 3.0,
        blastResistance: 4.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Hopper"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Hopper is a functional block used to collect item entities and move items between containers. It has five inventory slots and can be placed under a container to pull items from it, or against a container to push items into it. Hoppers can be disabled by a redstone signal, which prevents them from moving items. They are essential for automation in farms and storage systems. Crafted from five iron ingots and one chest, they are a fundamental component in advanced redstone engineering in Bedrock Edition."
    },
    "minecraft:white_shulker_box": {
        id: "minecraft:white_shulker_box",
        name: "White Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["White Shulker Box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + White Dye)"
        },
        description: "The White Shulker Box is a portable storage block that retains its contents when broken. It is created by dyeing a regular shulker box with white dye. This feature makes it an essential tool for high-level resource gathering and inventory management. It can be placed and opened like a chest but cannot be opened if a block is directly above it. When broken, it drops as an item containing all stored items, allowing players to carry vast amounts of materials easily."
    },
    "minecraft:magenta_shulker_box": {
        id: "minecraft:magenta_shulker_box",
        name: "Magenta Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Magenta Shulker Box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Magenta Dye)"
        },
        description: "The Magenta Shulker Box is a premium portable storage solution that retains its items even when broken and carried in the inventory. It is crafted by combining a standard shulker box with magenta dye. With 27 slots of storage space, it effectively expands a player's inventory capacity. In Bedrock Edition, it can be mined with any tool or by hand to be relocated. It cannot be opened if there is a solid block directly above it, and it provides a colorful way to organize complex storage systems and categorize resources effectively."
    },
    "minecraft:blue_shulker_box": {
        id: "minecraft:blue_shulker_box",
        name: "Blue Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Blue Shulker Box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Blue Dye)"
        },
        description: "The Blue Shulker Box is a premium portable storage block that preserves its contents even when broken and carried in the inventory. It is created by combining a standard shulker box with blue dye. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport and organization. In Bedrock Edition, it can be mined with any tool or even by hand to be relocated. It cannot be opened if there is a solid block directly above it, and it provides a vibrant, deep blue option for categorized storage systems."
    },
    "minecraft:gray_shulker_box": {
        id: "minecraft:gray_shulker_box",
        name: "Gray Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Gray Shulker Box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Gray Dye)"
        },
        description: "The Gray Shulker Box is a premium portable storage block that retains its contents even when broken and carried. It is created by combining a standard shulker box with gray dye. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport. In Bedrock Edition, it can be mined with any tool or by hand to be relocated. It cannot be opened if there is a solid block directly above it, and it provides a sleek, neutral option for organizing storage systems."
    },
    "minecraft:black_shulker_box": {
        id: "minecraft:black_shulker_box",
        name: "Black Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Black Shulker Box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Black Dye)"
        },
        description: "The Black Shulker Box is a versatile portable storage solution that retains its items even when broken and carried in the inventory. It is crafted by combining a standard shulker box with black dye, providing a sleek and dark aesthetic for organization. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport. In Bedrock Edition, it can be mined with any tool or by hand to be relocated. It cannot be opened if there is a solid block directly above it, making it ideal for compact and secure storage systems."
    },
    "minecraft:red_shulker_box": {
        id: "minecraft:red_shulker_box",
        name: "Red Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:red_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Red Dye)"
        },
        description: "The Red Shulker Box is a premium portable storage solution in Minecraft Bedrock Edition that retains its items even when broken and carried. It is crafted by combining a standard shulker box with red dye. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport. In Bedrock Edition, it can be mined with any tool or even by hand to be relocated. It cannot be opened if there is a solid block directly above it, and its vibrant red color makes it ideal for organizing and categorizing high-priority resources."
    },
    "minecraft:yellow_shulker_box": {
        id: "minecraft:yellow_shulker_box",
        name: "Yellow Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:yellow_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Yellow Dye)"
        },
        description: "The Yellow Shulker Box is a bright, portable storage container that preserves its contents when broken and moved. Crafted by applying yellow dye to a standard shulker box, it offers 27 slots of secure inventory space. This block is essential for organized resource gathering and long-range exploration. In Bedrock Edition, it can be broken by hand or any tool to be collected as an item without losing the items inside. Its sunny yellow hue stands out in dark environments, making it a favorite for labeling equipment or specific building materials in complex storage systems."
    },
    "minecraft:lime_shulker_box": {
        id: "minecraft:lime_shulker_box",
        name: "Lime Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:lime_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Lime Dye)"
        },
        description: "The Lime Shulker Box is a vibrant, portable storage solution that keeps its contents intact even when broken and carried. Created by dyeing a regular shulker box with lime dye, it provides 27 slots of inventory capacity. In Bedrock Edition, it features the unique property of being mineable by hand while still dropping as an item. It cannot be opened if obstructed by a solid block above it. Its striking lime green color is perfect for categorization in storage rooms, helping players quickly identify specific blocks, organic materials, or farm outputs during their adventures."
    },
    "minecraft:orange_shulker_box": {
        id: "minecraft:orange_shulker_box",
        name: "Orange Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:orange_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Orange Dye)"
        },
        description: "The Orange Shulker Box is a vibrant portable storage container that retains its contents even when broken. It is created by dyeing a regular shulker box with orange dye. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport. In Bedrock Edition, it can be mined with any tool or by hand to be relocated. It cannot be opened if there is a solid block directly above it, and its bright color makes it ideal for organizing and categorizing resources."
    },
    "minecraft:cyan_shulker_box": {
        id: "minecraft:cyan_shulker_box",
        name: "Cyan Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:cyan_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Cyan Dye)"
        },
        description: "The Cyan Shulker Box is a versatile portable storage solution that retains its items even when broken and carried in the inventory. It is crafted by combining a standard shulker box with cyan dye, offering a vibrant teal aesthetic. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport. In Bedrock Edition, it can be mined with any tool or even by hand to be relocated. It cannot be opened if there is a solid block directly above it, making it ideal for organized and colorful storage systems."
    },
    "minecraft:green_shulker_box": {
        id: "minecraft:green_shulker_box",
        name: "Green Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:green_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Green Dye)"
        },
        description: "The Green Shulker Box is a sturdy portable storage container that preserves its contents when broken, allowing for efficient item transport. Created by dyeing a regular shulker box with green dye, it provides 27 slots of secure inventory space. This block is indispensable for large-scale resource gathering and organization. In Bedrock Edition, it can be broken by hand or any tool to be collected as an item without losing the items inside. Its deep forest-green color is excellent for categorizing organic materials or farm outputs in complex storage systems."
    },
    "minecraft:brown_shulker_box": {
        id: "minecraft:brown_shulker_box",
        name: "Brown Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:brown_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Brown Dye)"
        },
        description: "The Brown Shulker Box is a specialized portable storage block that retains all stored items when broken and moved. It is crafted by combining a standard shulker box with brown dye, providing an earthy tone that blends well with rustic or industrial environments. Offering 27 slots of inventory space, it is a vital tool for inventory management during long adventures. In Bedrock Edition, it can be mined with any tool or by hand. It cannot be opened if obstructed by a solid block above, and its natural color is perfect for organizing wood or earth-based materials."
    },
    "minecraft:purple_shulker_box": {
        id: "minecraft:purple_shulker_box",
        name: "Purple Shulker Box",
        hardness: 2.0,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:purple_shulker_box"],
        generation: {
            dimension: "End",
            yRange: "Crafted (Shulker Box + Purple Dye)"
        },
        description: "The Purple Shulker Box is a portable storage solution that retains its contents even when broken and carried. It is created by combining a standard shulker box with purple dye. With 27 slots of storage space, it effectively expands a player's inventory capacity for long-distance transport. In Bedrock Edition, it can be mined with any tool or even by hand to be relocated. It cannot be opened if there is a solid block directly above it, and its royal purple color makes it ideal for organizing and categorizing high-value resources like enchantments or rare ores."
    }
};
