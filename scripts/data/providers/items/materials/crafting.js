export const craftingItems = {
    "minecraft:heavy_core": {
        id: "minecraft:heavy_core",
        name: "Heavy Core",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting the Mace",
            secondaryUse: "Decorative block"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from Ominous Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Extremely rare drop from Ominous Vaults (7.5% chance)",
            "Required to craft the Mace when combined with a Breeze Rod",
            "Can be placed as a decorative block",
            "Has a unique sound when placed and broken",
            "Immune to fire and lava",
            "Was introduced in the 1.21 Tricky Trials update"
        ],
        description: "The Heavy Core is a rare and dense block found exclusively in Ominous Vaults within Trial Chambers. Its primary purpose is the creation of the Mace, a powerful weapon that deals increased damage based on fall distance. Beyond its utility in combat crafting, the Heavy Core can also be used as a unique decorative block, boasting a metallic and industrial appearance that signifies its rarity and the challenge required to obtain it."
    },
    "minecraft:skull_pottery_sherd": {
        id: "minecraft:skull_pottery_sherd",
        name: "Skull Pottery Sherd",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Decorated Pots with a Skull motif",
            secondaryUse: "Creating spooky or danger-themed decorations"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by brushing Suspicious Sand in Desert Temples"]
        },
        specialNotes: [
            "Found exclusively by brushing Suspicious Sand in Desert Temples",
            "Features a design depicting a skeleton skull",
            "Has a 12.5% chance to appear when brushing suspicious sand in desert temples",
            "Used in crafting Decorated Pots to display the skull pattern on one side",
            "Breaking a Decorated Pot without Silk Touch returns the sherds used in crafting",
            "Stacks up to 64 in Bedrock Edition",
            "Part of the archaeology system introduced in the Trails & Tales update"
        ],
        description: "The Skull Pottery Sherd is an archaeological artifact found in Desert Temples by brushing Suspicious Sand. This pottery fragment features a clear skull design, representing danger or death. It is a tribute to the dangers of the desert and ancient temples. When used to craft a Decorated Pot, the Skull pattern creates a thematic decoration perfect for dungeons, graveyards, or any build that celebrates the macabre."
    }
};
