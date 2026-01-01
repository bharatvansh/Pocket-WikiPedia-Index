// Pocket Wikipedia Foundation - Banner Patterns Data
// ============================================
// This file contains: All banner pattern items (creeper charge,
// skull charge, flower charge, thing, globe, snout, piglin,
// flow, guster)
// ============================================

/**
 * Banner pattern items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const bannerPatterns = {
    "minecraft:guster_banner_pattern": {
        id: "minecraft:guster_banner_pattern",
        name: "Guster Banner Pattern",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying the 'Guster' pattern to a banner in a Loom",
            secondaryUse: "Creating distinctive decorative banners with a wind-vortex design"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained as a reward from Vaults in Trial Chambers"]
        },
        specialNotes: [
            "Has a 3.6% chance to drop from standard Vaults in Bedrock Edition",
            "Features a swirling wind pattern inspired by the Breeze mob's appearance",
            "Added in the 1.21 Tricky Trials update",
            "Cannot be crafted; must be found within Trial Chamber Vaults",
            "Used in a Loom with a banner and any color dye"
        ],
        description: "The Guster Banner Pattern is a specialized decorative item introduced in the 1.21 Tricky Trials update, obtainable exclusively from Vaults within Trial Chambers. This pattern allows players to customize banners with a 'Guster' design, which features a dynamic swirling vortex reminiscent of the Breeze mob's wind-based attacks. Because it cannot be crafted like many traditional banner patterns, it serves as a notable collectible for players exploring the subterranean structures. When used in a Loom along with a banner and dye, it creates a striking visual that is perfect for marking territory or decorating bases with a wind-themed aesthetic."
    }
};
