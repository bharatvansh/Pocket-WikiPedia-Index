// Pocket Wikipedia Foundation - Dyes Data
// ============================================
// This file contains: All 16 dye colors (white, orange, magenta,
// light blue, yellow, lime, pink, gray, light gray, cyan, purple,
// blue, brown, green, red, black), glow ink sac, ink sac
// ============================================

/**
 * Dye items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const dyes = {
    "minecraft:glow_ink_sac": {
        id: "minecraft:glow_ink_sac",
        name: "Glow Ink Sac",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Making signs and item frames glow",
            secondaryUse: "Creating glowing decorative displays and text"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Glowing Squids"]
        },
        specialNotes: [
            "Dropped by Glowing Squids (1-3 per kill; increased by Looting)",
            "Applied to signs to make text glow and be readable in darkness",
            "Applied to item frames to make them emit light level 7",
            "Glowing text appears brighter and can be read from further distances",
            "Can be removed from signs using a regular Ink Sac",
            "Glowing Item Frames provide both light and item display",
            "Does not dye sheep or wool (unlike regular Ink Sac)"
        ],
        description: "A Glow Ink Sac is a luminescent dye item dropped exclusively by Glowing Squids, the aquatic variant of squids that spawn in dark underwater environments. Its primary function is to make objects glow: applying it to signs causes the text to become luminescent and readable even in complete darkness, while using it on Item Frames makes them emit light level 7. This makes it invaluable for navigation, as glowing signs can mark paths and locations without requiring torches. The glowing effect can be removed from signs by using a regular Ink Sac, restoring normal text appearance."
    }
};
