// Pocket Wikipedia Foundation - Education Edition Items Data
// ============================================
// This file contains: Balloon, Ice Bomb, Bleach, Sparkler,
// Glow Stick, Super Fertilizer, Medicine (Antidote)
// ============================================

/**
 * Education edition items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const educationItems = {
    "minecraft:balloon": {
        id: "minecraft:balloon",
        name: "Balloon",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Lifting mobs into the air",
            secondaryUse: "Decorative floating object"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Latex x6", "Lead", "Helium", "Dye"]
        },
        specialNotes: [
            "Can be attached to fences or most mobs",
            "Attaching to a mob makes it fly upward and eventually despawn",
            "Poppable with arrows or by hitting it",
            "Speed of ascent varies by the size of the mob",
            "Latex is made from Carbon and Hydrogen in the Compound Creator",
            "Available only when Education Edition features are enabled"
        ],
        description: "Balloons are chemistry-based items in Minecraft Bedrock Edition that can be used to lift passive mobs into the sky. When attached to a mob, such as a cow or pig, the mob will float upward at a steady pace. Balloons can also be tied to fences, where they will float and wobble in the air. They are crafted in a Crafting Table using Latex, Helium, a Lead, and dye for color. While primarily decorative, they offer a whimsical way to relocate animals or create festive displays in your world."
    },
    "minecraft:ice_bomb": {
        id: "minecraft:ice_bomb",
        name: "Ice Bomb",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Freezing water into ice upon impact",
            secondaryUse: "Creating paths across water quickly"
        },
        combat: {
            attackDamage: 0,
            attackSpeed: 0
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Sodium Acetate x4"]
        },
        specialNotes: [
            "Converts a 3x3x3 area of water into ice",
            "Affects both source blocks and flowing water",
            "Deals no damage to entities or blocks",
            "Useful for traversing large oceans without a boat",
            "Sodium Acetate is made from Carbon, Hydrogen, Sodium, and Oxygen",
            "Only available with Education Edition toggles"
        ],
        description: "The Ice Bomb is a throwable projectile that instantly turns water into ice. When it hits a water surface, it creates a small platform of ice blocks, allowing players to walk across lakes or oceans with ease. Unlike Frost Walker boots, the ice created by an Ice Bomb does not melt over time. It is created in the Lab Table by combining four units of Sodium Acetate. While it has no combat utility, it is an essential tool for explorers and scientists in the Education Edition of Minecraft."
    },
    "minecraft:bleach": {
        id: "minecraft:bleach",
        name: "Bleach",
        maxStack: 16,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Removing dye from colored items",
            secondaryUse: "Reverting wool, beds, and banners to white"
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Water x3", "Sodium Hypochlorite x3"]
        },
        specialNotes: [
            "Turns colored wool, carpets, beds, and banners into their white versions",
            "Works on all 16 colors of Minecraft materials",
            "Cannot be used on terracotta or concrete",
            "Sodium Hypochlorite is a compound created in the Compound Creator",
            "Does not have a drinking animation; used in GUI or crafting",
            "A key part of the Minecraft Chemistry feature set"
        ],
        description: "Bleach is a powerful chemical cleaning agent used to reset the color of various dyed items in Minecraft. By combining Bleach with colored wool, beds, or banners in a crafting grid, players can instantly return them to their original white state. This is particularly useful for recycling materials or fixing accidental dyeing. It is produced in the Lab Table by mixing three units of Water with three units of Sodium Hypochlorite. Like all chemistry items, it requires Education Edition features to be active."
    },
    "minecraft:sparkler": {
        id: "minecraft:sparkler",
        name: "Sparkler",
        maxStack: 1,
        durability: 100, // Represents fuel/burn time
        enchantable: false,
        usage: {
            primaryUse: "Emitting colorful particles when held",
            secondaryUse: "Celebratory decoration"
        },
        crafting: {
            recipeType: "Crafting Table",
            ingredients: ["Magnesium", "Stick", "Metal Chloride (varies color)"]
        },
        specialNotes: [
            "Comes in Blue, Green, Orange, Purple, and Red variants",
            "Must be lit (activated) to start emitting particles",
            "Durability bar decreases as it burns; disappears once empty",
            "Emits light level 0 (purely visual particles)",
            "Color depends on the metal chloride used (e.g., Calcium Chloride for Orange)",
            "Cannot be placed on the ground; must be held in hand"
        ],
        description: "Sparklers are decorative chemistry items that produce vibrant colored sparks when held. They are perfect for celebrations, signaling other players, or adding atmosphere to nighttime events. To craft one, players must combine Magnesium, a Stick, and a specific metal chloride (like Potassium Chloride for Purple) in a Crafting Table. Once activated, the sparkler will continue to burn for about 100 seconds before being consumed. They represent the fun, experimental side of Minecraft's Education Edition."
    },
    "minecraft:glow_stick": {
        id: "minecraft:glow_stick",
        name: "Glow Stick",
        maxStack: 1,
        durability: 100, // Burn time
        enchantable: false,
        usage: {
            primaryUse: "Emitting light while held in hand",
            secondaryUse: "Underwater illumination"
        },
        crafting: {
            recipeType: "Crafting Table",
            ingredients: ["Polyethylene x6", "Luminol", "Hydrogen Peroxide", "Dye"]
        },
        specialNotes: [
            "Available in all 16 Minecraft colors",
            "Must be 'used' (shaken) to activate its glow",
            "Emits light even while the player is underwater",
            "Lasts for several minutes before the durability runs out",
            "Requires several complex compounds from the Compound Creator",
            "Does not emit light when placed in an item frame; must be held"
        ],
        description: "Glow Sticks are handheld light sources that provide colorful illumination, even in environments where torches might fail. Perfect for underwater exploration or cave diving, they emit light in the player's chosen color for the duration of their life. To create one, players must craft Polyethylene, Luminol, and Hydrogen Peroxide in the Compound Creator and then mix them with dye in a Crafting Table. Once activated by shaking, they serve as a reliable, if temporary, light source for any adventurer."
    },
    "minecraft:super_fertilizer": {
        id: "minecraft:super_fertilizer",
        name: "Super Fertilizer",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Instantly growing plants to maturity",
            secondaryUse: "Massive agricultural efficiency"
        },
        crafting: {
            recipeType: "Lab Table",
            ingredients: ["Ammonia", "Phosphorus"]
        },
        specialNotes: [
            "Guarantees instant 100% growth for any plant it is applied to",
            "Much more powerful than standard Bone Meal, which can take several uses",
            "Works on crops, saplings, and underwater plants like seaweed",
            "Created by mixing Ammonia and Phosphorus in the Lab Table",
            "Ammonia is a compound of Nitrogen and Hydrogen",
            "Essential for large-scale farming in Education-enabled worlds"
        ],
        description: "Super Fertilizer is an advanced version of Bone Meal that guarantees reaching the final growth stage of any plant in a single application. While regular Bone Meal may require multiple uses to grow a tree or mature wheat, Super Fertilizer always works instantly. This makes it an incredibly powerful tool for farmers looking to maximize output in record time. It is a product of high-level chemistry, requiring the synthesis of Ammonia and its combination with Phosphorus in a Lab Table."
    },
    "minecraft:medicine": {
        id: "minecraft:medicine",
        name: "Antidote",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Curing the Poison status effect",
            secondaryUse: "Alternative to Milk for specific effect removal"
        },
        food: {
            hunger: 0,
            saturation: 0
        },
        crafting: {
            recipeType: "Brewing Stand",
            ingredients: ["Silver", "Awkward Potion"]
        },
        specialNotes: [
            "Specifically removes the Poison status effect only",
            "Unlike Milk, it does not remove helpful buffs",
            "Stackable up to 64, making it more efficient than Milk buckets",
            "CRAFTING: Brew Silver (element) into an Awkward Potion",
            "One of four 'Medicine' types (Antidote, Elixir, Eye Drops, Tonic)",
            "A vital survival tool for dealing with Cave Spiders or Witches"
        ],
        description: "The Antidote is a specialized medicinal potion used to instantly cure the Poison status effect. Unlike a bucket of Milk, which removes every active status effect from the player, the Antidote is precise—it only clears the Poisoned state, leaving your helpful buffs (like Strength or Haste) intact. It is brewed in a Brewing Stand by adding the element Silver to an Awkward Potion. For players exploring abandoned mineshafts or fighting Witches, carrying a stack of Antidotes is much more inventory-efficient than carrying multiple buckets of milk."
    }
};
