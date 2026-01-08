// Pocket Wikipedia Foundation - Container Blocks Data
// ============================================
// This file contains: Chest, trapped chest, ender chest, barrel,
// shulker box (all 17 colors including undyed), decorated pot,
// chiseled bookshelf, jukebox, composter, beehive, bee nest
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
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Chest (items inside drop when broken)"],
        generation: {
            dimension: "Overworld, Nether, End",
            yRange: "Loot containers in many structures; can also generate as a Bonus Chest"
        },
        description: "A Chest is the most common storage block, providing 27 slots and combining into a 54-slot large chest when placed next to another chest. It can be accessed by hoppers and other containers for automation, and breaking it drops the chest while spilling its contents as item entities. Chests generate widely across the game as loot containers in structures such as dungeons, villages, strongholds, shipwrecks, nether fortresses, bastion remnants, and trial chambers."
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
    }
};
