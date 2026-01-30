// Pocket Wikipedia Foundation - Projectiles Data
// ============================================
// This file contains: Arrow, spectral arrow, tipped arrows (all types),
// firework rocket, snowball, egg, ender pearl, eye of ender,
// fire charge, wind charge
// ============================================

/**
 * Projectile items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const projectiles = {
    "minecraft:wind_charge": {
        id: "minecraft:wind_charge",
        name: "Wind Charge",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Firing a projectile that creates a wind burst upon impact",
            secondaryUse: "Launching entities, activating redstone, and propelling players upward"
        },
        combat: {
            attackDamage: 0, // Deals knockback and small damage on direct hit, but doesn't have a fixed melee damage
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Breeze Rod (1 yields 4 Wind Charges)"]
        },
        specialNotes: [
            "Deals a small amount of damage on a direct hit",
            "Creates a 'Wind Burst' effect that knocks back nearby entities",
            "If used by a player to jump, it negates fall damage from the resulting leap",
            "Has a 0.5-second cooldown in Bedrock Edition",
            "Can be fired from Dispensers",
            "Interacts with certain blocks like trapdoors, buttons, and levers"
        ],
        description: "The Wind Charge is a versatile projectile item dropped by Breezes in Trial Chambers or crafted from Breeze Rods. When thrown, it travels in a straight line and explodes upon impact, creating a wind burst that knocks back entities and can interact with redstone components. Players often use Wind Charges for 'wind jumping,' allowing them to reach high places while safely negating any fall damage from the boost. In Bedrock Edition, the Wind Charge has a short half-second cooldown, making it a dynamic tool for both combat and traversal."
    },
    "minecraft:arrow": {
        id: "minecraft:arrow",
        name: "Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ammunition for Bows, Crossbows, and Dispensers",
            secondaryUse: "Can be modified into Tipped Arrows"
        },
        combat: {
            attackDamage: 2, // Base damage, varies by bow charge
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Flint", "Stick", "Feather"]
        },
        specialNotes: [
            "Crafted using Flint, Stick, and Feather (yields 4)",
            "Dropped by Skeletons, Strays, and Pillagers",
            "Damage depends on the speed/charge of the bow",
            "Can be tipped with potions for status effects",
            "Used by Dispensers to fire projectiles",
            "Can be retrieved if it hits a block (unless from Infinity bow)"
        ],
        description: "The Arrow is the fundamental ammunition for ranged combat in Minecraft, used with Bows, Crossbows, and Dispensers. It is crafted from flint, a stick, and a feather, producing four arrows per batch. In Bedrock Edition, arrows deal damage proportional to their velocity, and they can be tipped with potions to inflict status effects. Skeletons and Pillagers frequently drop them, making them a renewable resource even without crafting."
    },
    "minecraft:snowball": {
        id: "minecraft:snowball",
        name: "Snowball",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Thrown as a projectile to knock back mobs",
            secondaryUse: "Crafting snow blocks and damaging blazes"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Found",
            ingredients: ["Shoveling snow blocks or layers", "Dropped by Snow Golems"]
        },
        specialNotes: [
            "Deals no damage to most mobs but provides knockback",
            "Deals 3 damage (1.5 hearts) to Blazes in Bedrock Edition",
            "Can be crafted into snow blocks using 4 snowballs",
            "Obtained by using a shovel on snow or from snow golems",
            "Max stack size is 16 instead of the usual 64",
            "Can be fired from dispensers to defend areas"
        ],
        description: "Snowballs are projectile items obtained by shoveling snow or from snow golems. While they deal no damage to most mobs, they provide knockback and are particularly effective against Blazes, dealing 3 points of damage per hit in Bedrock Edition. They can also be crafted into full snow blocks for building. Their low stack size of 16 makes them unique among projectiles, and they are frequently used for both lighthearted snowball fights and serious blaze management in the Nether."
    },
    "minecraft:tipped_arrow": {
        id: "minecraft:tipped_arrow",
        name: "Tipped Arrow",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Ranged combat with added status effects",
            secondaryUse: "Tactical support or crowd control"
        },
        combat: {
            attackDamage: 2, // Base damage, same as regular arrow
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Crafting/Cauldron",
            ingredients: ["Regular Arrows + Lingering Potion", "Regular Arrows + Potion (Cauldron in Bedrock)"]
        },
        specialNotes: [
            "In Bedrock, can be made by using arrows on a Potion-filled cauldron",
            "One cauldron bottle layer can tip up to 16 arrows",
            "Inflicts the potion's effect on the target upon impact",
            "Effect duration is generally 1/8th of the original potion's duration",
            "Does not work with the Infinity enchantment; consumed upon use",
            "Includes effects like Poison, Harming, Weakness, and Strength"
        ],
        description: "Tipped Arrows are advanced projectiles that combine standard ranged damage with the utility of status effects. In Bedrock Edition, they feature a unique crafting method where players can dip regular arrows into a cauldron filled with a potion, providing a highly efficient way to mass-produce them. These arrows are invaluable for tactical combat, allowing players to weaken foes from a distance or apply helpful buffs to allies. Because they are consumed even with the Infinity enchantment, they are often saved for critical encounters."
    },
    "minecraft:arrow_of_decay": {
        id: "minecraft:arrow_of_decay",
        name: "Arrow of Decay",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inflicting the Wither effect on targets from a distance",
            secondaryUse: "Tactical combat against players and most mobs"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Decay (in Cauldron)"]
        },
        specialNotes: [
            "Exclusive to Minecraft Bedrock Edition (and Education Edition)",
            "Inflicts the Wither status effect, which deals damage over time",
            "Wither damage can kill a target, unlike Poison which leaves them at 1/2 heart",
            "Can be found as rare loot in Buried Treasure chests",
            "One of the most powerful tipped arrows for PvP combat"
        ],
        description: "The Arrow of Decay is a powerful and rare tipped arrow exclusive to Bedrock and Education Editions. It inflicts the Wither status effect on hit, which progressively drains the target's health. Unlike poison, the Wither effect can be fatal, making these arrows extremely dangerous in combat. They are primarily obtained by dipping regular arrows into a cauldron filled with a Potion of Decay, or by finding them in Buried Treasure chests. Their scarcity and high damage potential make them a prized asset for late-game players."
    },
    "minecraft:arrow_of_wind_charging": {
        id: "minecraft:arrow_of_wind_charging",
        name: "Arrow of Wind Charging",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inflicting the Wind Charged effect on a target",
            secondaryUse: "Tactical use to create wind bursts upon entity death"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Wind Charging (in Cauldron)"]
        },
        specialNotes: [
            "Introduced in the 1.21 Tricky Trials update",
            "Applies the Wind Charged effect for 22 seconds (Bedrock tipped arrow duration)",
            "Causes the target to emit a wind burst upon death, knocking back nearby mobs",
            "Obtained by using arrows on a cauldron filled with Potion of Wind Charging",
            "Also found as a common reward from Ominous Vaults in Trial Chambers"
        ],
        description: "The Arrow of Wind Charging is a specialized tipped arrow introduced in Minecraft 1.21. When it hits a target, it applies the Wind Charged effect, which causes the entity to release a powerful burst of air upon death. This effect can be used tactically to clear out groups of enemies or manipulate mob movement. In Bedrock Edition, these arrows are efficiently crafted using a cauldron filled with the corresponding potion. They are also frequently discovered within Ominous Vaults, rewarding players who overcome the heightened challenges of Trial Chambers."
    },
    "minecraft:arrow_of_infestation": {
        id: "minecraft:arrow_of_infestation",
        name: "Arrow of Infestation",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inflicting the Infested status effect on entities",
            secondaryUse: "Tactical combat to spawn silverfish from damaged targets"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Infestation (in Cauldron)"]
        },
        specialNotes: [
            "Adds a 10% chance for the target to spawn 1-2 silverfish when hurt",
            "Effect lasts for 22 seconds in Bedrock Edition",
            "Highly effective against players and high-health mobs in PvP",
            "Obtained from Ominous Vaults or via potion cauldrons",
            "Can create chaotic distractions by introducing hostile silverfish into a fight"
        ],
        description: "The Arrow of Infestation is a tactical projectile that applies the Infested effect to its target. While under this effect, the entity has a 10% chance to spawn one or two silverfish whenever it takes damage. This can create chaos in enemy ranks, especially when used against high-health mobs or in crowded areas. Like other 1.21 tipped arrows, it is primarily obtained through Ominous Vaults or by using arrows on a cauldron filled with Potion of Infestation. It is a unique tool for players seeking to use environmental hazards against their foes."
    },
    "minecraft:arrow_of_oozing": {
        id: "minecraft:arrow_of_oozing",
        name: "Arrow of Oozing",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inflicting the Oozing status effect on entities",
            secondaryUse: "Spawning slimes upon the death of a target"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Oozing (in Cauldron)"]
        },
        specialNotes: [
            "Causes two medium-sized slimes to spawn from the target upon death",
            "Effect duration is 22 seconds in Minecraft Bedrock Edition",
            "Useful for mob farm automation or battlefield control",
            "Obtained from Ominous Vaults or via cauldron tipping",
            "Introduced as part of the Tricky Trials (1.21) update"
        ],
        description: "The Arrow of Oozing is a unique tipped arrow that inflicts the Oozing effect. Upon the death of an entity affected by this arrow, two medium-sized slimes will spawn at its location. This makes it an excellent tool for farm automation or creating distractions in combat. Introduced in the 1.21 update, it can be found in Ominous Vaults or crafted in Bedrock Edition using a potion-filled cauldron. The ability to spawn additional mobs upon a target's defeat adds a new layer of strategy to ranged engagement, turning every kill into a potential defensive obstacle for remaining enemies."
    },
    "minecraft:arrow_of_weaving": {
        id: "minecraft:arrow_of_weaving",
        name: "Arrow of Weaving",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Inflicting the Weaving effect on entities",
            secondaryUse: "Spawning cobwebs upon the death of a target"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Weaving (in Cauldron)"]
        },
        specialNotes: [
            "Applies the Weaving effect for 22 seconds in Bedrock Edition",
            "Target spawns 2-3 cobwebs upon death",
            "Affected targets can move through cobwebs slightly faster",
            "Obtained from Ominous Vaults or via cauldron tipping",
            "Excellent for area denial and crowd control"
        ],
        description: "The Arrow of Weaving is a tactical projectile added in the 1.21 update. When it impacts a target, it applies the Weaving effect, which triggers the spawning of multiple cobwebs upon the entity's death. This unique mechanic allows players to transform their defeated foes into environmental traps, slowing down remaining enemies. In Bedrock Edition, these arrows are efficiently produced by using standard arrows on a cauldron filled with a Potion of Weaving, making them a powerful tool for battlefield control and survival."
    },
    "minecraft:arrow_of_splashing": {
        id: "minecraft:arrow_of_splashing",
        name: "Arrow of Splashing",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Projectile with no effect",
            secondaryUse: "Collectible unique item"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Water (in Cauldron)"]
        },
        specialNotes: [
            "Bedrock Edition exclusive tipped arrow variant",
            "Created by dipping arrows into a cauldron filled with water",
            "Does not apply any status effects to the target",
            "Functional as a normal arrow but visibly distinct in the inventory",
            "Commonly considered a curiosity due to its lack of specific effects"
        ],
        description: "The Arrow of Splashing is a specialized tipped arrow unique to Minecraft Bedrock Edition. Unlike other tipped arrows that apply status effects, the Arrow of Splashing is created by dipping arrows into a cauldron filled with water. It does not apply any additional effects to targets beyond standard arrow damage, but it serves as a unique collectible or a way to use up excess water in cauldrons. It retains the standard projectile properties of a regular arrow when fired from a bow or crossbow."
    },
    "minecraft:arrow_of_slow_falling": {
        id: "minecraft:arrow_of_slow_falling",
        name: "Arrow of Slow Falling",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Applying Slow Falling effect to targets",
            secondaryUse: "Preventing fall damage during tactical retreats"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Slow Falling (in Cauldron)"]
        },
        specialNotes: [
            "Applies the Slow Falling status effect for a short duration",
            "Prevents fall damage and slows vertical descent for the target",
            "In Bedrock, crafted efficiently using a cauldron with Potion of Slow Falling",
            "Commonly used to assist teammates or manipulate mob physics",
            "Vibrant white color makes it easy to distinguish from other tipped arrows"
        ],
        description: "The Arrow of Slow Falling is a tactical tipped arrow that applies the Slow Falling effect to any entity it strikes. In Bedrock Edition, it is most efficiently crafted using a cauldron filled with a Potion of Slow Falling. This arrow is particularly useful for saving allies from long falls or preventing hostile mobs from falling quickly, allowing for better battlefield control. Affected entities fall at a significantly reduced rate and take no fall damage while the effect is active, making it a versatile tool for both rescue and strategy."
    },
    "minecraft:arrow_of_water_breathing": {
        id: "minecraft:arrow_of_water_breathing",
        name: "Arrow of Water Breathing",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Granting Water Breathing effect to entities",
            secondaryUse: "Tactical support for underwater exploration"
        },
        combat: {
            attackDamage: 2,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Cauldron (Bedrock Only)",
            ingredients: ["Arrow", "Potion of Water Breathing (in Cauldron)"]
        },
        specialNotes: [
            "Grants the Water Breathing effect, preventing drowning",
            "Crucial for supporting players or pets during underwater operations",
            "In Bedrock Edition, produced by dipping arrows in a Potion of Water Breathing cauldron",
            "A single potion bottle in a cauldron can dip up to 64 arrows if filled with 3 bottles",
            "Distinct teal color identifies its aquatic utility"
        ],
        description: "The Arrow of Water Breathing is a specialized projectile that grants the Water Breathing status effect upon hitting a target. This allows players to support allies or pets by preventing them from drowning during deep-sea exploration or underwater combat. In Minecraft Bedrock Edition, these arrows are crafted using the cauldron tipping mechanic, making them highly efficient to produce. It essentially delivers the benefits of a Potion of Water Breathing at a distance, providing a unique tactical option for teams working together in aquatic biomes."
    },
    "minecraft:ice_bomb": {
        id: "minecraft:ice_bomb",
        name: "Ice Bomb",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Freezing water blocks into ice",
            secondaryUse: "Creating paths across water"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "None",
            ingredients: ["Sodium Acetate x4 in Lab Table"]
        },
        specialNotes: [
            "Turns water into ice in a small radius upon impact.",
            "Does not deal damage to entities.",
            "Found in Education Edition or Bedrock with Education features enabled."
        ],
        description: "The Ice Bomb is a throwable projectile that instantly turns water blocks into ice upon contact. It is extremely useful for crossing large oceans or lakes without needing a boat or Frost Walker enchantments. While it doesn't deal any damage to mobs, its utility in world navigation is significant. It is crafted in the Lab Table using Sodium Acetate, a chemistry feature exclusive to Education and Bedrock Editions."
    }
};
