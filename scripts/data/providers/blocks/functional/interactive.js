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
    "minecraft:ominous_vault": {
        id: "minecraft:ominous_vault",
        name: "Ominous Vault",
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
        description: "An ominous vault is an enhanced version of the vault block introduced in Minecraft 1.21, found within Trial Chambers. It requires an ominous trial key obtained during ominous events to unlock. When opened, it provides superior loot compared to regular vaults, including enchanted equipment with higher enchantment levels, better armor trims, and the coveted heavy core. Ominous vaults have a distinctive ominous appearance and emit particles when active."
    },
    "minecraft:soul_lantern": {
        id: "minecraft:soul_lantern",
        name: "Soul Lantern",
        hardness: 3.5,
        blastResistance: 3.5,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 10,
        mining: {
            tool: "Pickaxe",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Soul Lantern"],
        generation: {
            dimension: "Nether",
            yRange: "Bastion Remnants"
        },
        description: "A soul lantern is a Nether variant of the lantern crafted from soul torches and iron nuggets. It emits a ghostly blue flame with light level 10 and features a unique property: it repels piglins within a 7-block radius, making them 7% less likely to attack players. Unlike regular lanterns, soul lanterns have a distinctive blue appearance and can be found naturally in bastion remnants. This makes them invaluable for building safe zones in Nether fortifications and creating atmospheric lighting with functional benefits."
    }
};
