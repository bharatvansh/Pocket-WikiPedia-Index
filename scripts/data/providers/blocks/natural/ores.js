// Pocket Wikipedia Foundation - Ore Blocks Data
// ============================================
// This file contains: All ore variants (stone and deepslate versions),
// coal ore, iron ore, copper ore, gold ore, redstone ore,
// lapis lazuli ore, diamond ore, emerald ore, nether gold ore,
// nether quartz ore, ancient debris
// ============================================

/**
 * Ore blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const oreBlocks = {
    "minecraft:coal_ore": {
        id: "minecraft:coal_ore",
        name: "Coal Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Coal (1, affected by Fortune)"],
        generation: {
            dimension: "Overworld",
            yRange: "0 to 320 (and -64 to 192)"
        },
        description: "Coal Ore is a common mineral block found in the Overworld that drops Coal when mined. It is the most abundant ore and can be found at almost any elevation, though it is most common near the surface and in mountain biomes. Coal is an essential early-game resource used primarily as fuel for furnaces and to craft torches. Mining coal ore also drops experience orbs, making it a good source of XP."
    },
    "minecraft:iron_ore": {
        id: "minecraft:iron_ore",
        name: "Iron Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Iron (1-2 with Fortune I, 1-3 with Fortune II, 1-4 with Fortune III)"],
        generation: {
            dimension: "Overworld",
            yRange: "0 to 320 (multiple batches)"
        },
        description: "Iron Ore is a common mineral block found in the stone layer of the Overworld that drops raw iron when mined. It generates in three batches: most abundantly between Y 80-384 peaking at Y 232, another batch between Y -24 to 56 peaking at Y 16, and a third batch evenly distributed from Y -64 to 72. Iron can be smelted into iron ingots, one of the most essential materials in Minecraft used for tools, armor, and countless crafting recipes. Its abundance makes it the backbone of early-to-mid game progression."
    },
    "minecraft:gold_ore": {
        id: "minecraft:gold_ore",
        name: "Gold Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Raw Gold (1-1 with Fortune I, 1-2 with Fortune II, 1-3 with Fortune III)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 32"
        },
        description: "Gold Ore is a mineral block found in the Overworld that drops raw gold when mined. It generates at low altitudes below Y 32, becoming increasingly rare at higher elevations. Gold ore must be mined with an iron pickaxe or better. Raw gold smelts into gold ingots, used for golden tools, armor, powered rails, golden apples, and trading with piglins. While gold tools mine faster than diamond, they have very low durability and cannot mine most ores or blocks."
    },
    "minecraft:redstone_ore": {
        id: "minecraft:redstone_ore",
        name: "Redstone Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Redstone Dust (4-5 with Fortune I, 4-6 with Fortune II, 4-7 with Fortune III)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 15"
        },
        description: "Redstone Ore is a mineral block that emits redstone particles and light level 9 when clicked or stepped on, becoming lit redstone ore. It generates deep underground from Y -64 to 15, with larger concentrations at lower depths. When mined, it drops redstone dust (4-5, increasing with Fortune), the core component for redstone circuits, mechanisms, and automation. Unlike most ores, redstone ore can generate even when exposed to air, making it visible in cave systems."
    },
    "minecraft:lapis_lazuli_ore": {
        id: "minecraft:lapis_lazuli_ore",
        name: "Lapis Lazuli Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Lapis Lazuli (4-18 with Fortune I, 4-27 with Fortune II, 4-36 with Fortune III)"],
        generation: {
            dimension: "Overworld",
            yRange: "0 to 64"
        },
        description: "Lapis Lazuli Ore is a rare blue mineral block that drops lapis lazuli when mined. It generates in the stone layer from Y 0 to 64, with highest concentrations around Y 0. Lapis is used primarily for enchanting in the enchantment table (each enchantment requires 1-3 lapis) and blue dye. It can also be crafted into lapis lazuli blocks for decoration and storage. The distinctive blue veins make it easily identifiable in cave walls."
    },
    "minecraft:copper_ore": {
        id: "minecraft:copper_ore",
        name: "Copper Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Copper (2-5)"],
        generation: {
            dimension: "Overworld",
            yRange: "-16 to 112"
        },
        description: "Copper Ore is a common ore found in the Overworld that drops raw copper when mined. It can be smelted into copper ingots, which are used to craft various copper blocks, lightning rods, and spyglasses. Copper blocks naturally oxidize over time, changing from orange to green."
    },
    "minecraft:ancient_debris": {
        id: "minecraft:ancient_debris",
        name: "Ancient Debris",
        hardness: 30,
        blastResistance: 1200,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Diamond",
            silkTouch: false
        },
        drops: ["Ancient Debris"],
        generation: {
            dimension: "Nether",
            yRange: "8-22 (most common at 15)"
        },
        description: "Ancient Debris is a rare ore found in the Nether, serving as the primary source for Netherite. It is immune to normal explosions, lava, and fire (item form floats in lava). It must be mined with a diamond or netherite pickaxe; otherwise, it drops nothing. Ancient debris generates in small veins, most commonly at Y-level 15. Smelting it in a furnace or blast furnace produces Netherite Scrap, which is combined with gold ingots to create Netherite Ingots."
    },
    "minecraft:emerald_ore": {
        id: "minecraft:emerald_ore",
        name: "Emerald Ore",
        hardness: 3.0,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Emerald (1 with Fortune I, 1-2 with Fortune II, 1-4 with Fortune III)"],
        generation: {
            dimension: "Overworld",
            yRange: "-16 to 320 (peaks at Y 232)"
        },
        description: "Emerald Ore is a rare mineral block that generates only in mountain and windswept hills biomes. It drops emeralds when mined, or itself if mined with Silk Touch. It generates from Y -16 to 320, with the highest concentration at Y 232, making it one of the rarest ores due to its biome restriction. Emeralds are the primary currency for trading with villagers and used to craft blocks of emerald for decoration. Unlike most ores, emerald ore can generate exposed to air."
    },
    "minecraft:deepslate_diamond_ore": {
        id: "minecraft:deepslate_diamond_ore",
        name: "Deepslate Diamond Ore",
        hardness: 4.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Diamond (1 with Fortune I, 1-2 with Fortune II, 1-3 with Fortune III)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 15 (deepslate layers)"
        },
        description: "Deepslate Diamond Ore is a variant of diamond ore that generates in deepslate and tuff layers, found more commonly than regular diamond ore due to its lower altitude generation. It requires an iron pickaxe or better to mine. Like regular diamond ore, it drops diamonds when mined without Silk Touch, with increased yields from Fortune enchantment. Deepslate diamond ore also generates as part of fossils that generate below Y=0, replacing some bone blocks."
    },
    "minecraft:deepslate_coal_ore": {
        id: "minecraft:deepslate_coal_ore",
        name: "Deepslate Coal Ore",
        hardness: 4.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: true
        },
        drops: ["Coal (1)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 0 (deepslate layers)"
        },
        description: "Deepslate Coal Ore is a rare variant of coal ore that generates in deepslate and tuff layers, typically between Y=-64 and Y=0. It is significantly harder to mine than regular coal ore, requiring a pickaxe. When mined without Silk Touch, it drops a single piece of coal, which can be increased with the Fortune enchantment. Although rare due to coal's high-altitude generation bias, it can be found in the transition layer where stone meets deepslate. Like regular coal, it provides experience when mined."
    },
    "minecraft:deepslate_iron_ore": {
        id: "minecraft:deepslate_iron_ore",
        name: "Deepslate Iron Ore",
        hardness: 4.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Iron (1)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 0 (deepslate layers)"
        },
        description: "Deepslate Iron Ore is a harder variant of iron ore found in the deepslate layers of the Overworld, appearing between Y=-64 and Y=0. It requires a stone pickaxe or better to mine. When broken, it drops Raw Iron, which must be smelted into iron ingots for use in tools and armor. Fortune enchantments increase the amount of Raw Iron dropped. Due to its generation at lower depths, it is often found alongside other deep minerals and is a crucial resource for players transitioning to the mid-game while exploring deep cave systems."
    },
    "minecraft:deepslate_copper_ore": {
        id: "minecraft:deepslate_copper_ore",
        name: "Deepslate Copper Ore",
        hardness: 4.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Stone",
            silkTouch: true
        },
        drops: ["Raw Copper (2-5)"],
        generation: {
            dimension: "Overworld",
            yRange: "-16 to 0 (deepslate layers)"
        },
        description: "Deepslate Copper Ore generates within deepslate and tuff layers, usually found from Y=-16 to Y=0. It is tougher than stone-based copper ore but shares the same properties when mined, dropping 2-5 Raw Copper. This yield can be further increased with Fortune. The raw copper can be smelted into ingots for crafting lightning rods, spyglasses, or decorative copper blocks that oxidize over time. While most copper is found at higher elevations, deepslate variants provide a reliable source for explorers in deep caves."
    },
    "minecraft:deepslate_gold_ore": {
        id: "minecraft:deepslate_gold_ore",
        name: "Deepslate Gold Ore",
        hardness: 4.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Raw Gold (1)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 0 (deepslate layers)"
        },
        description: "Deepslate Gold Ore is a rare mineral block found at deep underground levels, typically between Y=-64 and Y=0. It must be mined with an iron pickaxe or better to obtain Raw Gold. Like its stone counterpart, it is often found in small veins and is essential for crafting golden apples, powered rails, and bartering with Piglins. Generating in the deepslate layer makes it harder to break, but it remains a prized find for players seeking valuable resources in the deepest parts of the Overworld."
    },
    "minecraft:deepslate_redstone_ore": {
        id: "minecraft:deepslate_redstone_ore",
        name: "Deepslate Redstone Ore",
        hardness: 4.5,
        blastResistance: 3.0,
        flammability: false,
        gravityAffected: false,
        transparent: false,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Iron",
            silkTouch: true
        },
        drops: ["Redstone Dust (4-5)"],
        generation: {
            dimension: "Overworld",
            yRange: "-64 to 0 (deepslate layers)"
        },
        description: "Deepslate Redstone Ore is a variant of redstone ore that generates in the deepslate layers, appearing from Y=-64 up to Y=0. When stepped on or clicked, it glows and emits redstone particles. Mining it requires an iron pickaxe or better and yields 4-5 units of Redstone Dust, which can be increased with Fortune. This ore is a core component for advanced mechanics and automation. Its location at great depths makes it abundant for those exploring the deep dark or searching for diamonds near the world's bottom."
    }
};
