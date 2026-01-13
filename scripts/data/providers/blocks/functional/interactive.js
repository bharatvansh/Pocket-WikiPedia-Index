// Pocket Wikipedia Foundation - Interactive Blocks Data
// ============================================
// This file contains: Doors (all types), trapdoors (all types),
// fence gates (all types), beds (all 16 colors), signs (all types),
// hanging signs (all types), banners (all 16 colors), bells,
// campfire, soul campfire, lantern, soul lantern, torch, soul torch,
// candles (all 17 colors including undyed), cake, flower pot
// ============================================

/**
 * Interactive blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const interactiveBlocks = {
    "minecraft:dragon_egg": {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        hardness: 3.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: true,
        transparent: true,
        luminance: 1,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dragon Egg"],
        generation: {
            dimension: "End",
            yRange: "Top of Exit Portal"
        },
        description: "The Dragon Egg is a rare decorative block that generates on top of the exit portal in the End after defeating the Ender Dragon. It serves as a trophy item, as there is usually only one per world (two in Bedrock Edition). The egg teleports to a nearby location when clicked or attacked, making it difficult to mine directly. To collect it, players must make it fall onto a non-solid block like a torch or push it with a piston. It is affected by gravity and emits a very faint light level of 1."
    },
    "minecraft:wet_sponge": {
        id: "minecraft:wet_sponge",
        name: "Wet Sponge",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Wet Sponge"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "A Wet Sponge is a block obtained when a sponge absorbs water or is found naturally in Ocean Monuments. Unlike a dry sponge, it cannot absorb water. It can be dried by smelting it in a furnace, which converts it back into a sponge and fills an empty bucket in the fuel slot with water if available. In the Nether, placing a wet sponge instantly dries it, turning it into a regular sponge with a puff of steam. This mechanic makes sponges reusable for clearing large bodies of water."
    },
    "minecraft:lodestone": {
        id: "minecraft:lodestone",
        name: "Lodestone",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Lodestone"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Chests"
        },
        description: "A lodestone is a block that can be used to alter compasses to point toward it. It can be used in all three dimensions. When a compass is used on a lodestone, it becomes a Lodestone Compass pointing to that specific block."
    },
    "minecraft:trial_spawner": {
        id: "minecraft:trial_spawner",
        name: "Trial Spawner",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "-40 to -20"
        },
        description: "A trial spawner is a special spawner block found exclusively within Trial Chambers in Minecraft 1.21+. Unlike regular monster spawners, trial spawners activate when a player enters a 14-block radius and spawn mobs based on the number of nearby players. All spawned mobs must be defeated before the trial spawner ejects loot and a trial key. Ominous variants appear during ominous events and spawn stronger, armored mobs. As a permanent structure block, it cannot be obtained by players."
    },
    "minecraft:vault": {
        id: "minecraft:vault",
        name: "Vault",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 6,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "-40 to -20"
        },
        description: "A vault is a unique reward container block introduced in Minecraft 1.21, found within Trial Chambers. When unlocked using a trial key obtained from defeating all mobs spawned by a nearby trial spawner, the vault ejects 3-6 items including valuable loot like armor trims, banner patterns, enchanted books, and the heavy core. Vaults emit light when active or ejecting items, and cannot be accelerated by any tool. As a permanent structure block, it cannot be obtained by players."
    },
    "minecraft:ominous_vault": {
        id: "minecraft:ominous_vault",
        name: "Ominous Vault",
        hardness: 50,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 12,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Ominous Trial Chambers"
        },
        description: "The Ominous Vault is a dangerous variant of the vault found in Trial Chambers during ominous events in Minecraft 1.21+. It shares the same indestructible properties and mining requirements as regular vaults, but glows brighter (light level 12) and ejects superior loot when unlocked with an ominous trial key. These rare structures appear with ominous trial spawners that spawn armored mobs, and can even spawn bogged skeletons to attack nearby players, creating a significant challenge."
    },
    "minecraft:conduit": {
        id: "minecraft:conduit",
        name: "Conduit",
        hardness: 3,
        blastResistance: 3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Conduit"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Conduit is a powerful underwater utility block that grants the Conduit Power effect to nearby players when activated. To activate, it must be surrounded by a frame of 16-42 prismarine blocks (or variants) and be submerged in water. When active, it emits light level 15, attacks hostile mobs within range, and provides players with water breathing, night vision, and Haste underwater within a 32-96 block radius depending on frame size. Crafted from 8 Nautilus Shells and 1 Heart of the Sea, conduits are essential for underwater bases and ocean monument exploration."
    },
    "minecraft:honey_block": {
        id: "minecraft:honey_block",
        name: "Honey Block",
        hardness: 0,
        blastResistance: 0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Honey Block"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "A Honey Block is a unique, sticky functional block crafted from four honey bottles. It significantly reduces movement speed and jump height for entities walking on it, and prevents fall damage entirely. Its most notable feature is its stickiness; entities walking or falling against its side will slide down slowly. In redstone contraptions, honey blocks stick to most adjacent blocks when moved by pistons, but crucially, they do not stick to slime blocks, allowing for more compact and complex machinery."
    },
    "minecraft:sponge": {
        id: "minecraft:sponge",
        name: "Sponge",
        hardness: 0.6,
        blastResistance: 0.6,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Sponge"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "A Sponge is a functional block capable of absorbing water. When placed next to water, it instantly absorbs all water source blocks and flowing water within a 7-block taxicab distance, up to a maximum of 65 blocks, and becomes a Wet Sponge. This makes it an essential tool for clearing out underwater structures or draining ponds. Once wet, it can no longer absorb water until it is dried by smelting it in a furnace or placing it in the Nether, where it instantly evaporates its stored water."
    },
    "minecraft:bell": {
        id: "minecraft:bell",
        name: "Bell",
        hardness: 5,
        blastResistance: 5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Bell"],
        generation: {
            dimension: "Overworld",
            yRange: "Village meeting points"
        },
        description: "A Bell is an interactive functional block found primarily in village meeting points. It can be rung by players using the interact button or by being hit with projectiles, producing a loud ringing sound and a swaying animation. In Bedrock Edition, ringing a bell during a raid highlights nearby raiders with the Glowing effect, making them visible through walls. It also serves as a gathering point for villagers, who congregate around it during certain times of the day or when it is rung. Bells can be attached to the side, top, or bottom of solid blocks."
    },
    "minecraft:scaffolding": {
        id: "minecraft:scaffolding",
        name: "Scaffolding",
        hardness: 0,
        blastResistance: 0,
        flammability: true,
        gravityAffected: true,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Scaffolding"],
        generation: {
            dimension: "None",
            yRange: "Crafted from 6 bamboo and 1 string"
        },
        description: "Scaffolding is a functional block used to assist players when building structures. It allows players to quickly climb up or down by jumping or crouching while inside the block. Scaffolding can be stacked up to 6 blocks horizontally from a supported base before it falls due to gravity. One of its most useful features is the ability to break the bottom-most block, causing the entire stack to collapse and drop as items. This makes it a superior alternative to temporary dirt or gravel pillars during large-scale construction projects."
    },
    "minecraft:jukebox": {
        id: "minecraft:jukebox",
        name: "Jukebox",
        hardness: 2.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jukebox", "Music Disc (if inserted)"],
        generation: {
            dimension: "None",
            yRange: "Crafted from 8 planks and 1 diamond"
        },
        description: "A Jukebox is an interactive block that plays music discs when one is inserted by right-clicking or through hoppers and droppers. While playing, it emits note particles and a redstone signal that can power adjacent redstone components. The hardness was increased from 0.8 to 2.0 and blast resistance from 0.8 to 6.0 in update 1.20.30. Tamed parrots within a 3-block radius and allays within a 10-block radius dance when music is playing. Jukeboxes are essential for ambiance and can be used in redstone contraptions, making them both decorative and functional in Bedrock Edition."
    },
    "minecraft:campfire": {
        id: "minecraft:campfire",
        name: "Campfire",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Charcoal (2) (itself with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Taiga and Snowy Taiga villages"
        },
        description: "The Campfire is a versatile functional block used for cooking food, providing light, and acting as a smoke signal. It can cook up to four food items simultaneously, taking 30 seconds per item, without requiring fuel. When placed over a hay bale, the smoke signal reaches much higher (24 blocks). It also serves as a light source with a level of 15. Campfires can be extinguished with water or a shovel and relighted using flint and steel or fire charges. They also help safely harvest honey from beehives and bee nests by calming the bees."
    },
    "minecraft:soul_campfire": {
        id: "minecraft:soul_campfire",
        name: "Soul Campfire",
        hardness: 2.0,
        blastResistance: 2.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 10,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Soul Soil (2) (itself with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted from 3 sticks, 1 soul soil/sand, and 3 logs"
        },
        description: "The Soul Campfire is a functional block that emits a dim, blue light and does not melt snow or ice, unlike its regular counterpart. Introduced in the Nether Update, it is crafted using soul sand or soul soil, which gives it its characteristic blue flame. It deals more damage than a regular campfire and can be used for cooking up to four food items simultaneously, though at the same speed. In Bedrock Edition, it has a light level of 10. When broken without Silk Touch, it drops two pieces of soul soil. It also repels Piglins, making it a useful defensive tool in the Nether."
    },
    "minecraft:jigsaw": {
        id: "minecraft:jigsaw",
        name: "Jigsaw Block",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld",
            yRange: "Villages, Pillager Outposts, Ancient Cities, Bastion Remnants"
        },
        description: "The Jigsaw Block is a technical block used for generating structures like villages, pillager outposts, ancient cities, and bastion remnants. It cannot be obtained in Survival mode and is only accessible through commands in Creative mode. Jigsaw blocks define how structure pieces connect by matching target pools and attachment types. In Bedrock Edition, structures can be generated using the /place jigsaw command with keepJigsaws set to true to preserve jigsaw blocks. This unbreakable block primarily serves as a tool for map makers and structure designers."
    },
    "minecraft:barrier": {
        id: "minecraft:barrier",
        name: "Barrier",
        hardness: -1,
        blastResistance: 3600000.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Barrier is an invisible, indestructible block used to create solid boundaries in Minecraft Bedrock Edition. Obtainable only through commands, it cannot be mined or destroyed in Survival mode. While transparent to light, barriers provide collision detection, preventing passage. When held or with particle effects enabled, a red particle texture appears for visibility. Essential for map makers to restrict player movement and define boundaries in custom worlds and servers."
    },
    "minecraft:allow": {
        id: "minecraft:allow",
        name: "Allow",
        hardness: -1,
        blastResistance: 18000000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only or Creative with Education Edition enabled"
        },
        description: "The Allow block is exclusive to Bedrock Edition with Education Edition enabled. It permits players to place and break blocks above it, even in protected areas created by Deny blocks or spawn protection. Obtainable through commands or Creative inventory with Education features active, it's essential for educators building interactive learning environments. Only World Builder permission holders can manipulate Allow blocks. Displays a distinctive green checkmark texture for easy identification."
    },
    "minecraft:deny": {
        id: "minecraft:deny",
        name: "Deny",
        hardness: -1,
        blastResistance: 18000000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only or Creative with Education Edition enabled"
        },
        description: "The Deny block is exclusive to Bedrock Edition with Education Edition enabled. It prevents players without World Builder permissions from placing or breaking blocks above it, creating restricted zones for educational environments and adventure maps. Obtainable through commands or Creative inventory with Education features active, it works with Allow blocks to define precise boundaries. Displays a red prohibition symbol texture. World Builder status holders can override restrictions and manipulate Deny blocks."
    },
    "minecraft:border_block": {
        id: "minecraft:border_block",
        name: "Border Block",
        hardness: -1,
        blastResistance: 18000000,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only or Creative with Education Edition enabled"
        },
        description: "The Border Block is a utility block exclusive to Education and Bedrock Editions that functions as an impassable barrier extending infinitely upwards and downwards. It appears as a red wall-like structure and emits red particles when approached. It prevents players without World Builder permissions from moving past it, making it ideal for enclosing play areas in educational worlds or adventure maps."
    },
    "minecraft:command_block": {
        id: "minecraft:command_block",
        name: "Command Block",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Command Block is a technical block that can execute commands when powered by redstone. It is obtained only through commands and cannot be mined or broken in Survival mode. In Bedrock Edition, it features three modes: Impulse (orange, runs once), Chain (green, runs after another command block), and Repeat (purple, runs every tick). Command blocks are essential for map making, custom game modes, and server administration, allowing complex logic and automation beyond standard survival mechanics."
    },
    "minecraft:repeating_command_block": {
        id: "minecraft:repeating_command_block",
        name: "Repeating Command Block",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Repeating Command Block is a purple variant of the command block that executes its command every game tick (20 times per second) while powered. Obtainable only through commands or 'Pick Block' on an existing one, it cannot be mined in Survival mode. It is essential for creating continuous effects, loops, and monitoring systems in custom maps and servers."
    },
    "minecraft:chain_command_block": {
        id: "minecraft:chain_command_block",
        name: "Chain Command Block",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Chain Command Block is a green variant of the command block that executes its command only if the command block pointing into it has successfully executed. This allows for the creation of complex, sequential command chains. Like other command blocks, it is indestructible in Survival mode and obtainable only via commands."
    },
    "minecraft:structure_block": {
        id: "minecraft:structure_block",
        name: "Structure Block",
        hardness: -1,
        blastResistance: 3600000,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Structure Block is a technical block used to save and load structures in Minecraft. It is unobtainable in Survival mode and indestructible. In Bedrock Edition, it supports 3D export for use in external programs and features modes like Save, Load, Corner, and 3D Export. Structure blocks allow players to copy and paste buildings, rotate them, and transfer them between worlds (via behavior packs). They visualizes the structure's bounding box with white lines, making it a powerful tool for map makers."
    },
    "minecraft:light_block": {
        id: "minecraft:light_block",
        name: "Light Block",
        hardness: 0,
        blastResistance: 3600000.8,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 15,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Light Block is an invisible block that emits light, primarily used by map makers to illuminate areas without visible light sources. It is obtained via commands and has 16 data values representing light levels from 0 to 15. In Bedrock Edition, the block is invisible unless the player is holding a light block item, which reveals a particle icon. It has no collision box, allowing entities to walk through it, and can be broken instantly. It is waterloggable, making it useful for underwater lighting."
    }
};
