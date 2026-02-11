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
    "minecraft:ladder": {
        id: "minecraft:ladder",
        name: "Ladder",
        hardness: 0.4,
        blastResistance: 0.4,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Ladder"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Villages, Igloos"
        },
        description: "A Ladder is a wooden block used for climbing walls vertically. It can be placed on the sides of solid blocks and allows players and mobs to climb up or down. Ladders generate naturally in strongholds, villages, and igloo basements. They can be crafted from seven sticks arranged in an H-shape. While they have a low blast resistance and hardness, they are essential for compact vertical movement. In Bedrock Edition, ladders have a collision box that allows standing on top of them, and they can stop water flow."
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
    "minecraft:ominous_trial_spawner": {
        id: "minecraft:ominous_trial_spawner",
        name: "Ominous Trial Spawner",
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
            yRange: "Trial Chambers"
        },
        description: "The Ominous Trial Spawner is a dangerous variant of the trial spawner that activates when a player with the Trial Omen effect is nearby. It is distinguished by its unique soul fire blue particles and its ability to spawn much tougher, often armored mobs. During combat, it may eject harmful projectiles or potions to challenge players further. Defeating an ominous trial spawner grants superior rewards, including Ominous Trial Keys used to unlock Ominous Vaults. Like the standard variant, it cannot be collected by players and has extremely high resistance to damage."
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
    },
    "minecraft:candle": {
        id: "minecraft:candle",
        name: "Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Ancient Cities"
        },
        description: "A Candle is a light source block that can be placed in clusters of up to four. Each candle adds 3 to the light level, reaching a maximum of 12. Candles are crafted from string and honeycomb and can be dyed into 16 colors. They are unlit when placed and must be lit using flint and steel, fire charge, or any flaming projectile. Candles are waterloggable but cannot be lit while waterlogged. They can also be placed on cakes to create a candle cake."
    },
    "minecraft:blue_candle": {
        id: "minecraft:blue_candle",
        name: "Blue Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Blue Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Candle and Blue Dye"
        },
        description: "The Blue Candle is a decorative light source block that can be placed in clusters of up to four. Each candle provides a light level of 3, reaching a maximum of 12 when four are grouped together. It features a vibrant blue color and must be lit using flint and steel to emit light. Blue candles can also be placed on cakes to create a blue candle cake, perfect for themed decorations."
    },
    "minecraft:blue_candle_cake": {
        id: "minecraft:blue_candle_cake",
        name: "Blue Candle Cake",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Blue Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Placed on Cake"
        },
        description: "Blue Candle Cake is a festive block created by placing a blue candle on an uneaten cake. It serves as both a light source and a food source in Minecraft Bedrock Edition. When lit with flint and steel, the candle emits a light level of 3. If a player eats a slice of the cake, the candle drops as an item and the block reverts to a regular cake with one slice missing. Similarly, if the block is broken, it drops only the blue candle, and the cake is destroyed. It is a perfect decorative addition for celebrations and themed interior designs."
    },
    "minecraft:cyan_candle": {
        id: "minecraft:cyan_candle",
        name: "Cyan Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cyan Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Candle and Cyan Dye"
        },
        description: "The Cyan Candle is a decorative light source that adds a splash of vibrant teal color to any setting. Like all candles in Bedrock Edition, it can be clustered with up to four identical candles on a single block, increasing the light level from 3 to a maximum of 12. It must be lit using flint and steel, a fire charge, or a flaming projectile to emit light. These candles are waterloggable but cannot be lit while submerged. They can also be placed atop a cake to create a festive Cyan Candle Cake."
    },
    "minecraft:structure_void": {
        id: "minecraft:structure_void",
        name: "Structure Void",
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
        drops: [],
        generation: {
            dimension: "None",
            yRange: "Command only"
        },
        description: "The Structure Void is an invisible, intangible block used to indicate empty space in structures saved with Structure Blocks. When a structure is loaded, blocks in the target area are not overwritten if the corresponding block in the saved structure is a structure void. It is distinct from air, which overwrites existing blocks with air. Visible only when holding a structure void item or enabling 'Show Invisible Blocks', it allows for complex structure merging and terrain preservation."
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
            tool: "Hoe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Wet Sponge"],
        generation: {
            dimension: "Overworld",
            yRange: "Ocean Monuments"
        },
        description: "A Wet Sponge is a variant of the sponge block that has already absorbed water and cannot absorb more. It is found naturally in ocean monuments or created when a dry sponge comes into contact with water. Unlike dry sponges, wet sponges do not have any absorbent properties. To reuse a wet sponge, it must be dried in a furnace or placed in the Nether, where it instantly turns back into a dry sponge. In Bedrock Edition, wet sponges can also be dried by placing them in dry biomes or using a bucket during smelting to collect the water."
    },
    "minecraft:spawner": {
        id: "minecraft:spawner",
        name: "Monster Spawner",
        hardness: 5,
        blastResistance: 5,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: false
        },
        drops: [],
        generation: {
            dimension: "Overworld, Nether",
            yRange: "Dungeons, Mineshafts, Strongholds, Bastion Remnants, Nether Fortresses"
        },
        description: "A Monster Spawner is a cage-like block that generates naturally in various structures. It contains a miniature, spinning mob inside and attempts to spawn that specific mob in a 9x9x3 area around itself whenever a player is within 16 blocks. Spawners are invaluable for creating automated mob farms for experience and items. In survival mode, they cannot be obtained as an item, even with Silk Touch, and drop only experience when broken with a pickaxe. The spawn rate depends on light levels and whether the maximum mob density for that area has been reached."
    },
    "minecraft:pale_oak_door": {
        id: "minecraft:pale_oak_door",
        name: "Pale Oak Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "A Pale Oak Door is a decorative and functional block crafted from six pale oak planks. It features a muted, desaturated gray-white color that matches the eerie aesthetic of the Pale Garden biome. Like other wooden doors, it can be opened by hand or powered by redstone. It occupies a two-block high space and provides a ghostly, elegant entrance to any build."
    },
    "minecraft:pale_oak_trapdoor": {
        id: "minecraft:pale_oak_trapdoor",
        name: "Pale Oak Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks"
        },
        description: "The Pale Oak Trapdoor is a horizontal variant of the pale oak wood set. It shares the characteristic ghostly palette of the Pale Garden. Crafted from six pale oak planks, it functions as a one-block opening that can be toggled by player interaction or redstone signals. Its desaturated appearance makes it ideal for subtle flooring details, hidden passages, or unique architectural accents in more somber or weathered building designs."
    },
    "minecraft:pale_oak_fence_gate": {
        id: "minecraft:pale_oak_fence_gate",
        name: "Pale Oak Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pale Oak Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Pale Oak Planks and Sticks"
        },
        description: "A Pale Oak Fence Gate serves as an interactive entrance through fence perimeters. Matching the Pale Oak wood set, it displays a light, ghostly gray-white hue. It can be opened and closed by hand or via redstone, and always opens away from the player. When placed, it provides a seamless transition for pale oak fences while maintaining the desaturated, atmospheric look of the Pale Garden biome."
    },
    "minecraft:oak_fence_gate": {
        id: "minecraft:oak_fence_gate",
        name: "Oak Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Oak Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Found in Villages"
        },
        description: "The Oak Fence Gate is the interactive counterpart to the oak fence, allowing players and entities to pass through periodic openings in a perimeter. It can be toggled by right-clicking or by redstone power. When placed, it automatically aligns with adjacent fences and walls. One unique property of fence gates is that they can be placed in mid-air and will remain there, which is often used in complex builds or mob-grinding designs."
    },
    "minecraft:birch_fence_gate": {
        id: "minecraft:birch_fence_gate",
        name: "Birch Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "The Birch Fence Gate is a light-colored interactive barrier block that matches the Birch wood set. It serves as a secure entrance through birch fences and walls, and can be toggled manually or with redstone power. Naturally found in some village types, it stands 1.5 blocks high for entities, preventing them from jumping over while closed. Its clean, pale aesthetic makes it popular for modern gardens and light-themed architectural designs. Like other wood variants, it is flammable and best harvested with an axe."
    },
    "minecraft:iron_door": {
        id: "minecraft:iron_door",
        name: "Iron Door",
        hardness: 5.0,
        blastResistance: 5.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Iron Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Strongholds, Woodland Mansions"
        },
        description: "The Iron Door is a high-security entrance block that cannot be opened by hand, requiring redstone signals from levers, buttons, or pressure plates to function. This makes it immune to villager and zombie interaction, providing a safe haven for players. Crafted from six iron ingots, it is much more durable than wooden doors and is highly resistant to explosions. It is a fundamental component for secure bases and automated dungeon designs in Bedrock Edition."
    },
    "minecraft:iron_trapdoor": {
        id: "minecraft:iron_trapdoor",
        name: "Iron Trapdoor",
        hardness: 5.0,
        blastResistance: 5.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Iron Trapdoor"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "An Iron Trapdoor is a horizontal variant of the iron door, functioning as a one-block opening that only responds to redstone power. It cannot be toggled by player interaction, making it ideal for trap-based defenses, hidden entrances, or secure flooring. Like its vertical counterpart, it is fire-proof and explosion-resistant. Its sleek, metallic appearance also makes it a popular industrial-themed decoration for skylights, ventilation shafts, or futuristic flooring."
    },
    "minecraft:netherreactor": {
        id: "minecraft:netherreactor",
        name: "Nether Reactor Core",
        hardness: 3.0,
        blastResistance: 6.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Nether Reactor Core"],
        generation: {
            dimension: "Overworld",
            yRange: "Legacy / Creative Only"
        },
        description: "The Nether Reactor Core is an iconic legacy block from the early days of Minecraft Pocket Edition. Before the addition of the Nether dimension, players used this core as part of a multi-block structure with cobblestone and gold blocks to generate a 'Nether Spire.' Upon activation, it turned the surrounding area into a vertical tower of netherrack and spawned various items and Zombified Piglins. Although now obsolete following the introduction of the actual Nether dimension, the block remains a nostalgic piece of Bedrock history, obtainable only through commands."
    },

    "minecraft:cherry_door": {
        id: "minecraft:cherry_door",
        name: "Cherry Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks"
        },
        description: "The Cherry Door is a wooden door crafted from Cherry Planks. It features a light pink color with a unique window design, making it ideal for decorative entrances in cute or floral-themed builds. Like other wooden doors, it can be opened by hand or redstone. It occupies a two-block high space."
    },
    "minecraft:cherry_fence_gate": {
        id: "minecraft:cherry_fence_gate",
        name: "Cherry Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A (Crafted)"
        },
        description: "A cherry fence gate is a functional block with a beautiful pinkish hue, matching the aesthetic of the cherry grove biome. Like other fence gates, it can be toggled open or closed via interaction or redstone signals. It provides a way to control entity movement through fences and stands 1.5 blocks high, effectively preventing most mobs from jumping over it while allowing for decorative and secure boundaries."
    },
    "minecraft:mangrove_door": {
        id: "minecraft:mangrove_door",
        name: "Mangrove Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Door"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A (Crafted)"
        },
        description: "The Mangrove Door is a wooden door crafted from mangrove planks, featuring a deep red-brown color and a unique architectural style with a small decorative window. It functions as a two-block high entrance that blocks mob movement while allowing players to pass through. It can be opened manually or through redstone components like pressure plates and levers, making it a versatile choice for both aesthetics and security."
    },
    "minecraft:bamboo_door": {
        id: "minecraft:bamboo_door",
        name: "Bamboo Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Door"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "The Bamboo Door is a functional and decorative block introduced in the Trails & Tales update, crafted from bamboo planks. It features a unique, modern aesthetic with vertical slats, fitting perfectly with tropical or Asian-themed builds. Like other wooden doors, it can be opened and closed by hand or via redstone signals and occupies a two-block high space. In Bedrock Edition, it provides a distinctive style for players' homes and is most efficiently harvested with an axe."
    },
    "minecraft:bamboo_trapdoor": {
        id: "minecraft:bamboo_trapdoor",
        name: "Bamboo Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "N/A (Crafted)"
        },
        description: "The Bamboo Trapdoor is a functional block crafted from bamboo planks, showcasing a distinctive cross-hatch pattern unique to bamboo wood. It serves as a horizontal door that can be toggled between open and closed states. It is often used for creating trap pits, hidden entrances, or simply as a decorative slab-like detail in builds. Like other trapdoors, it can be controlled by hand or through various redstone signals."
    },
    "minecraft:mangrove_trapdoor": {
        id: "minecraft:mangrove_trapdoor",
        name: "Mangrove Trapdoor",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Mangrove Planks"
        },
        description: "The Mangrove Trapdoor is a functional block crafted from mangrove planks, featuring a deep red-brown color and a unique design with a large circular cutout. It serves as a horizontal door that can be toggled manually or with redstone. Its distinctive look is popular for tropical-themed builds, vents, or decorative accents. Like other wooden trapdoors, it is flammable and most efficiently harvested with an axe."
    },
    "minecraft:bamboo_fence_gate": {
        id: "minecraft:bamboo_fence_gate",
        name: "Bamboo Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Bamboo Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Bamboo Planks"
        },
        description: "The Bamboo Fence Gate is a functional block introduced in the 1.20 Trails & Tales update as part of the bamboo wood set. It features a unique, yellowish woven texture that provides a tropical or oriental aesthetic to perimeters. Like other fence gates, it can be toggled by player interaction or redstone signals and stands 1.5 blocks high, preventing most mobs from jumping over it. It is crafted from bamboo planks and sticks. Being a wood product, it is flammable and best harvested with an axe. It automatically aligns with adjacent fences to create a cohesive barrier."
    },
    "minecraft:birch_door": {
        id: "minecraft:birch_door",
        name: "Birch Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Planks"
        },
        description: "The Birch Door is a wooden door variant crafted from Birch Planks. It features a light, pale color with a clean, simple design and a small square window. Its bright aesthetic makes it a popular choice for modern, minimalist, or airy interiors. Like all wooden doors, it can be toggled manually or by redstone power. It occupies a two-block high space and is 100% flammable. While it provides less protection than an iron door, it is easily accessible and offers a welcoming look to any home or library."
    },
    "minecraft:mangrove_fence_gate": {
        id: "minecraft:mangrove_fence_gate",
        name: "Mangrove Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Mangrove Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Mangrove Planks and Sticks"
        },
        description: "The Mangrove Fence Gate is the interactive counterpart to the mangrove fence, serving as a secure entrance through perimeters. Matching the deep red-brown hue of the mangrove wood set, it can be toggled open or closed by player interaction or redstone signals. When placed, it automatically aligns with adjacent fences and walls. It stands 1.5 blocks high, effectively blocking mob passage while closed. Being crafted from wood, it is flammable and most efficiently broken with an axe. Its unique color makes it an excellent choice for atmospheric swamp-themed builds and gardens."
    },
    "minecraft:jungle_fence_gate": {
        id: "minecraft:jungle_fence_gate",
        name: "Jungle Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Planks and Sticks"
        },
        description: "The Jungle Fence Gate is the interactive counterpart to the jungle fence, providing a secure entrance through perimeters. It features a warm, pinkish-orange hue that matches the jungle wood set. Like other fence gates, it can be toggled open or closed by hand or redstone signals and stands 1.5 blocks high for entities. It is a perfect choice for tropical-themed builds and gardens, automatically aligning with adjacent fences and walls."
    },
    "minecraft:spruce_trapdoor": {
        id: "minecraft:spruce_trapdoor",
        name: "Spruce Trapdoor",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Spruce Planks"
        },
        description: "The Spruce Trapdoor is a functional block crafted from spruce planks, featuring the deep, dark brown coloration characteristic of the spruce wood set. It serves as a horizontal door that can be toggled manually or with redstone signals. Its solid and sturdy appearance makes it a popular choice for rustic, medieval, or cabin-themed builds, often used as decorative window shutters, floor hatches, or sturdy ceiling details. Like other wooden trapdoors, it is flammable and most efficiently harvested using an axe."
    },
    "minecraft:birch_trapdoor": {
        id: "minecraft:birch_trapdoor",
        name: "Birch Trapdoor",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Birch Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Birch Planks"
        },
        description: "The Birch Trapdoor is a light-colored functional block crafted from birch planks, featuring a distinct design that resembles a shoji screen. Its clean, pale aesthetic matches the bright look of the birch wood set, making it ideal for modern, minimalist, or Eastern-inspired builds. It functions as a horizontal opening that can be toggled by player interaction or redstone power. Builders often use birch trapdoors as decorative wall panels, shelving accents, or elegant skylights in light-themed structures. It is fully flammable and is best broken with an axe."
    },
    "minecraft:jungle_door": {
        id: "minecraft:jungle_door",
        name: "Jungle Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Planks"
        },
        description: "The Jungle Door is a wooden door crafted from jungle planks, featuring a warm, pinkish-orange hue and a unique design with a small window. It functions as a two-block high entrance that blocks mob movement while allowing players to pass through. It can be opened manually or through redstone components like pressure plates and levers, making it ideal for tropical or exotic-themed builds. Like other wooden doors in Bedrock Edition, it is flammable and most efficiently harvested with an axe."
    },
    "minecraft:jungle_trapdoor": {
        id: "minecraft:jungle_trapdoor",
        name: "Jungle Trapdoor",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Jungle Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Jungle Planks"
        },
        description: "The Jungle Trapdoor is a warm, pinkish-orange functional block crafted from jungle planks. It features a unique design with a central window, providing a tropical and exotic feel to any structure while allowing for limited visibility. It acts as a horizontal door that can be toggled manually or via redstone power. Its vibrant coloration is highly valued for builds in jungle biomes or for adding a touch of warmth to various architectural designs. As with all wood-based trapdoors, it can be ignited by fire and is most effectively mined with an axe."
    },
    "minecraft:acacia_door": {
        id: "minecraft:acacia_door",
        name: "Acacia Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Planks"
        },
        description: "The Acacia Door is a wooden door crafted from six acacia planks. It features a unique, vibrant orange color and a stylish design with three small horizontal windows, making it a popular choice for savanna-themed builds or modern architectural designs. Like all wooden doors, it can be opened by hand or powered by redstone. It occupies a two-block high space and is 100% flammable."
    },
    "minecraft:acacia_trapdoor": {
        id: "minecraft:acacia_trapdoor",
        name: "Acacia Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Planks"
        },
        description: "The Acacia Trapdoor is a functional block crafted from acacia planks, showcasing a vibrant orange hue and a unique design with a central rectangular cutout. It serves as a horizontal door that can be toggled manually or with redstone signals. Its distinctive appearance is ideal for savanna-themed builds, as decorative window shutters, or for creating unique ventilation details. Like other wooden trapdoors, it is flammable and most efficiently harvested using an axe."
    },
    "minecraft:acacia_fence_gate": {
        id: "minecraft:acacia_fence_gate",
        name: "Acacia Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Acacia Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Acacia Planks and Sticks"
        },
        description: "The Acacia Fence Gate is a vibrant, orange-toned interactive barrier block that matches the acacia wood set. Naturally found in Savanna villages, it serves as a secure entrance for fences and walls. Like other wooden gates, it can be toggled manually or with redstone. It stands 1.5 blocks high for entities, preventing them from jumping over while closed. It is flammable and best harvested with an axe."
    },
    "minecraft:brown_candle": {
        id: "minecraft:brown_candle",
        name: "Brown Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Brown Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Candle and Brown Dye"
        },
        description: "The Brown Candle is a decorative light source block featuring a rich, earthy brown color. Like other candles, it can be placed in clusters of up to four on a single block, with each candle increasing the light level by 3. It must be lit with flint and steel or a fire charge to provide illumination. Brown candles can also be placed on top of a cake to create a brown candle cake, making them a versatile choice for rustic or nature-themed interior decorations."
    },
    "minecraft:black_candle": {
        id: "minecraft:black_candle",
        name: "Black Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Black Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Candle and Black Dye"
        },
        description: "The Black Candle is a dark decorative light source block that can be placed in clusters of up to four on a single block. Each individual candle provides a light level of 3, reaching a maximum of 12 when a full cluster is present. Its deep black tone makes it ideal for gothic, moody, or sophisticated interior designs. Like other candles in Bedrock Edition, it must be lit with flint and steel or other flaming tools to emit light. It can also be placed on a cake to create a black candle cake, providing a striking visual for celebrations."
    },
    "minecraft:light_gray_candle": {
        id: "minecraft:light_gray_candle",
        name: "Light Gray Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:light_gray_candle"],
        generation: {
            dimension: "None",
            yRange: "Crafted"
        },
        description: "Light Gray Candle is a decorative light source that can be placed on most solid blocks and lit using flint and steel. Up to four candles of the same color can be placed on a single block, with each candle increasing the light level by 3, up to a maximum of 12. They can be extinguished with water or by interacting with them. In Bedrock Edition, light gray candles provide a neutral, sophisticated lighting option for interior designs, shrines, and atmospheric pathways."
    },
    "minecraft:spruce_door": {
        id: "minecraft:spruce_door",
        name: "Spruce Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Spruce Planks"
        },
        description: "A Spruce Door is a sturdy wooden door crafted from spruce planks. It is distinguished by its deep, rustic brown color and a solid, windowless design, offering a more defensive and private aesthetic compared to other wooden doors. Naturally occurring in taiga village houses, it is a favorite for medieval, cabin, or fortress-style builds. It functions as a two-block high barrier that can be opened manually or by redstone. Like other wood products, it is flammable and is best broken using an axe."
    },
    "minecraft:dark_oak_door": {
        id: "minecraft:dark_oak_door",
        name: "Dark Oak Door",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Door"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Dark Oak Planks"
        },
        description: "The Dark Oak Door is a sturdy wooden door crafted from dark oak planks. It is characterized by its rich, chocolate-brown color and a heavy, solid appearance with small square windows. This door is a favorite for medieval, gothic, or formal builds, providing both privacy and a sophisticated look. It can be opened manually or toggled by redstone power. In Bedrock Edition, it has a hardness of 3.0 and blast resistance of 3.0. It naturally generates in woodland mansions and can be crafted using six dark oak planks."
    },
    "minecraft:cherry_trapdoor": {
        id: "minecraft:cherry_trapdoor",
        name: "Cherry Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cherry Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Cherry Planks"
        },
        description: "The Cherry Trapdoor is a functional block crafted from Cherry Planks, introduced in Minecraft 1.20. It features a delightful light pink color and a unique design with a small decorative window, matching the aesthetic of the Cherry Grove biome. Like other wooden trapdoors, it serves as a horizontal door that can be toggled manually or with redstone. In Bedrock Edition, it has a hardness of 3.0 and is best harvested with an axe. Its aesthetic appeal makes it popular for creating decorative shutters, floor hatches, or delicate architectural accents."
    },
    "minecraft:dark_oak_fence_gate": {
        id: "minecraft:dark_oak_fence_gate",
        name: "Dark Oak Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "The Dark Oak Fence Gate is a sturdy, chocolate-colored interactive barrier that matches the Dark Oak wood set. It serves as a secure entrance for fences and walls, and can be toggled manually or with redstone power. Naturally found in woodland mansions, it stands 1.5 blocks high for entities, preventing them from jumping over while closed. Like other wooden gates, it is flammable and best harvested with an axe. It automatically aligns with adjacent fences to create a cohesive and elegant perimeter."
    },
    "minecraft:spruce_fence_gate": {
        id: "minecraft:spruce_fence_gate",
        name: "Spruce Fence Gate",
        hardness: 2.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Spruce Fence Gate"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "The Spruce Fence Gate is a dark brown interactive barrier block that matches the rustic aesthetic of the Spruce wood set. It provides a secure entrance through fences and walls, and can be opened or closed manually or via redstone signals. Often found in taiga village perimeters, it stands 1.5 blocks high for entities, ensuring they cannot jump over when it is closed. It is fully flammable and most efficiently broken with an axe. Its solid, darker appearance makes it a popular choice for cabins and rustic designs."
    },
    "minecraft:dark_oak_trapdoor": {
        id: "minecraft:dark_oak_trapdoor",
        name: "Dark Oak Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Dark Oak Trapdoor"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted only"
        },
        description: "The Dark Oak Trapdoor is a functional block crafted from dark oak planks, featuring a rich, chocolate-brown color and a solid, heavy design with a small square window. It functions as a horizontal door that can be toggled manually or with redstone power. Its sturdy and sophisticated look makes it a favorite for medieval or formal builds, often used as decorative window shutters or floor hatches. In Bedrock Edition, it has a hardness of 3.0 and is best harvested with an axe. Like all wooden trapdoors, it is flammable."
    },
    "minecraft:crimson_trapdoor": {
        id: "minecraft:crimson_trapdoor",
        name: "Crimson Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Crimson Trapdoor"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted only"
        },
        description: "The Crimson Trapdoor is a fire-resistant functional block crafted from Crimson Planks. Introduced in the Nether Update, it serves as a horizontal door that can be toggled by players or redstone signals. Unlike Overworld trapdoors, it is completely immune to fire and lava, making it ideal for builds in the Nether. In Bedrock Edition, it has a hardness of 3.0 and is most efficiently broken with an axe."
    },
    "minecraft:warped_trapdoor": {
        id: "minecraft:warped_trapdoor",
        name: "Warped Trapdoor",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Axe",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:warped_trapdoor"],
        generation: {
            dimension: "Nether",
            yRange: "Crafted only"
        },
        description: "The Warped Trapdoor is a fire-resistant functional block crafted from warped planks, native to the Nether's Warped Forest. It serves as a horizontal door that can be toggled by player interaction or redstone signals. Unlike Overworld wooden trapdoors, it is completely immune to fire and lava, making it essential for builds in hazardous dimensions. It features a unique teal color and a strange, alien-like texture that matches the warped wood set. In Bedrock Edition, it has a hardness of 3.0 and is most efficiently harvested using an axe."
    },
    "minecraft:chemical_heat": {
        id: "minecraft:chemical_heat",
        name: "Heat Block",
        hardness: 0.5,
        blastResistance: 0.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Heat Block"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "The Heat Block is a specialized functional block available in Bedrock Edition with Education features enabled. Its primary function is to melt nearby snow, ice, and frosted ice, similar to a torch, but without emitting any visible light. This makes it a unique tool for hidden utility, allowing players to keep paths clear or melt ice traps while maintaining complete darkness. It is created using a Lab Table by combining Iron, Charcoal, Salt, and Water, making it a valuable chemistry-based utility block."
    },
    "minecraft:yellow_candle_cake": {
        id: "minecraft:yellow_candle_cake",
        name: "Yellow Candle Cake",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Yellow Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Placed on Cake"
        },
        description: "Yellow Candle Cake is a celebratory block created by placing a single yellow candle on an uneaten cake. When lit with flint and steel, it emits a cozy light level of 3, making it a perfect centerpiece for birthdays and in-game celebrations. In Bedrock Edition, if a player eats a slice of the cake, the yellow candle drops as an item and the block reverts to a regular cake. Similarly, if the block is broken, only the candle is recovered while the cake is lost. It combines the functionality of a light source with the utility of a food block."
    },
    "minecraft:magenta_candle": {
        id: "minecraft:magenta_candle",
        name: "Magenta Candle",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Magenta Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Candle and Magenta Dye"
        },
        description: "The Magenta Candle is a vibrant, decorative light source in Minecraft Bedrock Edition. Like all candles, it can be clustered with up to four identical candles on a single block, with each candle increasing the light level by 3 to a maximum of 12. It must be lit using flint and steel, a fire charge, or any flaming projectile. Magenta candles are waterloggable but cannot be lit while submerged in water. They can also be placed on top of a cake to create a festive Magenta Candle Cake, perfect for colorful celebrations."
    },
    "minecraft:magenta_candle_cake": {
        id: "minecraft:magenta_candle_cake",
        name: "Magenta Candle Cake",
        hardness: 0.1,
        blastResistance: 0.1,
        flammability: true,
        gravityAffected: false,
        transparent: true,
        luminance: 3,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Magenta Candle"],
        generation: {
            dimension: "Overworld",
            yRange: "Placed on Cake"
        },
        description: "Magenta Candle Cake is a festive block created by placing a magenta candle on an uneaten cake. It serves as both a light source and a food source in Bedrock Edition. When lit, the candle emits a light level of 3. If a player eats a slice of the cake, the magenta candle drops as an item and the block reverts to a regular cake with one slice missing. Similarly, if the block is broken, it drops only the magenta candle, while the cake itself is destroyed. It is a perfect decorative addition for celebrations and colorful interior designs."
    }
};
