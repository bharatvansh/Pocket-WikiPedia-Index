// Pocket Wikipedia Foundation - Utility Items Data
// ============================================
// This file contains: Spyglass, Recovery Compass, and other navigation/utility items
// ============================================

/**
 * Utility items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const utilityItems = {
    "minecraft:spyglass": {
        id: "minecraft:spyglass",
        name: "Spyglass",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Zooming in on distant objects and landscapes",
            secondaryUse: "Scouting terrain, locating structures, and observing mobs from afar"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Amethyst Shard x1", "Copper Ingot x2"]
        },
        specialNotes: [
            "Reduces field of view to 1/10 of normal (from 60° to 6° in Bedrock Edition)",
            "Does not use durability and can be used infinitely",
            "Slows player movement while active",
            "Applies a vignette overlay around the edges while zooming",
            "Square overlay present to simulate looking through a telescope",
            "Removes pumpkin blur when worn with carved pumpkin helmet",
            "Introduced in Minecraft 1.17 (Caves & Cliffs Part I)",
            "Requires amethyst geodes and copper ore to craft",
            "Useful for finding far-away structures like villages, monuments, and strongholds"
        ],
        description: "The Spyglass is an optical tool that allows players to zoom in on distant objects with remarkable precision, reducing the field of view to one-tenth of its normal size for enhanced long-range observation. Crafted from one amethyst shard and two copper ingots, this telescope-like item combines materials from the 1.17 Caves & Cliffs update to create an invaluable navigation and exploration tool. The Spyglass has no durability and can be used infinitely, making it perfect for scouting terrain, locating structures from high vantage points, and observing mobs without alerting them to your presence. When activated, it applies a square telescope overlay with a darkened vignette around the edges, creating an immersive viewing experience. The tool slows player movement while in use to improve aiming stability, and it even removes the visual obstruction from carved pumpkin helmets when both are equipped. Whether you're searching for ocean monuments across vast seas, tracking down distant villages from mountaintops, or simply admiring Minecraft's scenic vistas, the Spyglass provides unparalleled visual clarity for long-range observation and strategic planning."
    },
    "minecraft:recovery_compass": {
        id: "minecraft:recovery_compass",
        name: "Recovery Compass",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Points to the player's last death location",
            secondaryUse: "Recovering lost items and navigating back to death points"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Echo Shard x8", "Compass x1"]
        },
        specialNotes: [
            "Only functions when the player has died at least once",
            "Must be in the same dimension as the death location to work",
            "Spins randomly if player hasn't died or is in a different dimension",
            "Points directly to death coordinates, not respawn point",
            "Echo shards can only be found in Ancient City chests in the Deep Dark",
            "Unlike regular compass, does not point to world spawn or lodestone",
            "Introduced in Minecraft 1.19 (The Wild Update)",
            "Does not use durability and can be reused for all future deaths",
            "Can be placed in item frames but will not function as decoration",
            "Extremely useful for hardcore players and high-stakes survival situations"
        ],
        description: "The Recovery Compass is a specialized navigational tool that guides players back to the exact coordinates of their most recent death, making it an essential item for recovering valuable lost equipment. Crafted by surrounding a standard compass with eight echo shards obtained from Ancient City chests in the Deep Dark biome, this advanced compass variant represents one of the most player-friendly additions to Minecraft. Unlike a regular compass that points to world spawn, the Recovery Compass dynamically tracks death locations and updates each time the player dies, always pointing toward the most recent death coordinates as long as the player remains in the same dimension. If the player hasn't died yet or travels to a different dimension than where they died, the compass needle will spin aimlessly until the conditions are met again. The Recovery Compass has no durability, meaning it can be used indefinitely across countless deaths throughout your adventures. This makes it particularly valuable for dangerous expeditions into the Nether, End, or deep underground mining operations where death is a constant risk and items may be difficult to relocate. The compass is equally useful in multiplayer servers where death locations may be far from spawn points or in unfamiliar territory. By combining the challenge of locating Ancient Cities with the reward of never losing track of your dropped items again, the Recovery Compass provides both motivation for Deep Dark exploration and peace of mind for high-risk gameplay scenarios."
    }
};
