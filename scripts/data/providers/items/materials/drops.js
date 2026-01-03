// Pocket Wikipedia Foundation - Mob Drops Data
// ============================================
// This file contains: String, leather, feather, bone, gunpowder,
// slime ball, ender pearl, blaze rod, ghast tear, magma cream,
// nether star, shulker shell, phantom membrane, rabbit hide,
// rabbit foot, ink sac, glow ink sac, spider eye, rotten flesh,
// breeze rod, armadillo scute, turtle scute, nautilus shell,
// heart of the sea, dragon breath, totem of undying, gold nugget
// ============================================

/**
 * Mob drop items data registry
 * @type {Object.<string, import('../../item_types').ItemDetails>}
 */
export const mobDrops = {
    "minecraft:phantom_membrane": {
        id: "minecraft:phantom_membrane",
        name: "Phantom Membrane",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Repairing Elytra",
            secondaryUse: "Brewing Potion of Slow Falling"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Phantoms", "Cat gifts"]
        },
        specialNotes: [
            "Phantoms drop 0-1 membranes when killed by a player",
            "Looting enchantment increases the maximum drop by 1 per level",
            "Cats have a 3.22% chance to bring a phantom membrane as a morning gift",
            "Repairing an Elytra with a membrane restores 108 durability points (25% of total)",
            "Brewing ingredient for Potion of Slow Falling (Awkward Potion + Phantom Membrane)"
        ],
        description: "The Phantom Membrane is a skin-like material dropped by Phantoms, the flying hostile mobs that attack players who haven't slept for three in-game days. It serves two primary functions: it is the only item capable of repairing Elytra in an anvil, and it is the essential ingredient for brewing Potions of Slow Falling. Since Phantoms only spawn under specific conditions, obtaining membranes requires players to deliberately avoid sleep and engage in night combat. Cats may also occasionally gift them to their owners."
    },
    "minecraft:turtle_scute": {
        id: "minecraft:turtle_scute",
        name: "Turtle Scute",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Turtle Shells",
            secondaryUse: "Repairing Turtle Shells"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by baby turtles when they grow up"]
        },
        specialNotes: [
            "Dropped by baby turtles when they mature into adults (1 scute per turtle)",
            "Not dropped if the baby turtle is killed",
            "5 Turtle Scutes are required to craft a Turtle Shell helmet",
            "Can be used to repair Turtle Shells in an anvil",
            "Used to brew Potion of the Turtle Master (Awkward Potion + Turtle Shell)",
            "Renamed from 'Scute' to 'Turtle Scute' in Bedrock Edition 1.20.60 to distinguish from Armadillo Scutes"
        ],
        description: "Turtle Scutes are small, hard plates shed by baby turtles as they grow into adults. Unlike most mob drops which are obtained by killing, scutes are a reward for nurturing life; players must protect turtle eggs until they hatch and then wait for the babies to mature to collect them. Five scutes can be crafted into a Turtle Shell, a unique helmet that provides the Water Breathing effect. Additionally, Turtle Scutes (via the Turtle Shell) are the key to brewing the Potion of the Turtle Master, which grants high resistance at the cost of movement speed."
    },
    "minecraft:dragon_breath": {
        id: "minecraft:dragon_breath",
        name: "Dragon's Breath",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Lingering Potions",
            secondaryUse: "Crafting Tipped Arrows (via Lingering Potions)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Collected from Ender Dragon's breath attack using a Glass Bottle"]
        },
        specialNotes: [
            "Obtained by right-clicking (or using) a Glass Bottle on the purple breath clouds derived from the Ender Dragon's attack",
            "Essential for creating Lingering Potions (Splash Potion + Dragon's Breath)",
            "Lingering Potions create an area of effect cloud when thrown",
            "Lingering Potions are required to craft Tipped Arrows in a crafting grid (8 arrows + 1 lingering potion)",
            "The purple particle clouds from the dragon deal damage, so collection can be dangerous",
            "Does not have a consumption animation like drinking potions"
        ],
        description: "Dragon's Breath is a rare brewing ingredient collected during the fight with the Ender Dragon. By using an empty glass bottle on the purple clouds of acid breath the dragon spits or the lingering clouds from its fireballs, players can bottle the substance. This item is critical for advanced alchemy, as it is used to convert Splash Potions into Lingering Potions. These lingering potions leave a cloud of the effect on the ground and can be used to craft Tipped Arrows, allowing players to utilize potion effects in ranged combat."
    },
    "minecraft:breeze_rod": {
        id: "minecraft:breeze_rod",
        name: "Breeze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wind Charges and the Mace",
            secondaryUse: "Repairing Maces at an Anvil and duplicating Flow Armor Trim templates"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Breezes upon death", "Can also be found in Vaults and Ominous Vaults"]
        },
        specialNotes: [
            "Breezes drop 1-2 Breeze Rods (up to 8 with Looting III in Bedrock)",
            "Has an 11.5% chance to drop from standard Vaults",
            "Has a 5.5% chance to drop from Ominous Vaults",
            "One Breeze Rod can be crafted into four Wind Charges",
            "Required to craft the Mace when combined with a Heavy Core"
        ],
        description: "The Breeze Rod is a unique item dropped exclusively by Breezes in Trial Chambers. Similar to Blaze Rods, they serve as a fundamental crafting component for specialized items introduced in the 1.21 Tricky Trials update. A single Breeze Rod can be broken down into four Wind Charges or combined with a Heavy Core to create the powerful Mace weapon. Beyond crafting, Breeze Rods are essential for maintaining a Mace's durability at an anvil and can be used to duplicate the rare Flow Armor Trim smithing template."
    },
    "minecraft:armadillo_scute": {
        id: "minecraft:armadillo_scute",
        name: "Armadillo Scute",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Wolf Armor to protect tamed wolves",
            secondaryUse: "Repairing damaged Wolf Armor"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by armadillos every 5-10 minutes", "Can also be obtained by brushing armadillos with a Brush"]
        },
        specialNotes: [
            "Dropped by armadillos every 5-10 minutes naturally",
            "Can also be obtained by brushing armadillos with a Brush",
            "Armadillos can be brushed while rolled up to obtain scutes",
            "Required to craft Wolf Armor, which provides wolves with 11 armor points",
            "Using an armadillo scute on a wolf wearing damaged armor repairs 8 durability points"
        ],
        description: "Armadillo Scutes are materials introduced in Minecraft 1.21, dropped by armadillos or obtained by brushing them. They are primarily used to craft Wolf Armor, a defensive item that significantly boosts the survivability of tamed wolves. While equipped, Wolf Armor absorbs damage and can be repaired by using additional scutes on the armored wolf. Armadillos themselves curl into a ball when they feel threatened, but they can still be brushed for scutes. This item is vital for protecting canine companions from the various hazards found in the game world."
    },
    "minecraft:resin_clump": {
        id: "minecraft:resin_clump",
        name: "Resin Clump",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Block of Resin (9 clumps = 1 block)",
            secondaryUse: "Smelting into Resin Bricks in a furnace or smoker"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained by attacking a Creaking Heart or hitting a Creaking mob linked to its heart", "Drops 1-3 Resin Clumps per hit"]
        },
        specialNotes: [
            "Creaking Hearts drop 1-3 Resin Clumps when attacked in Bedrock Edition",
            "Hitting a Creaking mob while it's linked to its heart also yields Resin Clumps",
            "Nine Resin Clumps can be crafted into one Block of Resin",
            "Resin Clumps can be smelted in a furnace or smoker to create Resin Bricks",
            "Block of Resin can be used to craft a Creaking Heart",
            "Added in Minecraft Bedrock Edition 1.21.50 as part of the Pale Garden biome content",
            "The Resin Clump has a vibrant orange color matching the Creaking aesthetic"
        ],
        description: "Resin Clumps are resources obtained from the Creaking Heart and Creaking mobs in Pale Garden biomes. Attacking a Creaking Heart or a linked Creaking drops 1-3 clumps. These are used to craft Blocks of Resin (3x3 grid) or smelted into Resin Bricks. Introduced in the 1.21 update, this material allows players to incorporate the unique orange aesthetic of the Pale Garden into their builds. The harvesting process is tied to the interactive mechanics of the Creaking mob, rewarding players for engaging with this atmospheric threat."
    },
    "minecraft:blaze_rod": {
        id: "minecraft:blaze_rod",
        name: "Blaze Rod",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Brewing Stand, Blaze Powder, End Rods, and Copper Bulbs",
            secondaryUse: "Fuel for furnaces (smelts 12 items per rod)"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Blazes in Nether fortresses"]
        },
        specialNotes: [
            "Dropped by Blazes (0-1; up to 4 with Looting); spawns in Nether Fortresses",
            "Crafts Blaze Powder (2x), Brewing Stand, End Rods, and Copper Bulbs",
            "Furnace fuel: smelts 12 items per rod",
            "Blaze Powder is essential for Eyes of Ender and potions",
            "Critical item for accessing the End dimension"
        ],
        description: "Blaze Rods are essential items dropped by Blazes in Nether fortresses. They are primarily used to craft Blaze Powder, which is required for brewing potions and making Eyes of Ender to reach the End. A single rod yields two powder or can be used as fuel to smelt 12 items. They are also a key component in crafting Brewing Stands, End Rods, and Copper Bulbs. Because they are necessary for both high-level alchemy and accessing the Ender Dragon boss fight, Blaze Rods are a critical milestone in survival gameplay. Looting enchantments increase the drop rate from Blazes."
    },
    "minecraft:nautilus_shell": {
        id: "minecraft:nautilus_shell",
        name: "Nautilus Shell",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Conduits for underwater power",
            secondaryUse: "Decorative item and trading resource"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Obtained from fishing", "Dropped by Drowned", "Purchased from Wandering Traders"]
        },
        specialNotes: [
            "Can be caught as 'treasure' while fishing (1.2% chance with a regular rod)",
            "Drowned have an 8% chance to spawn holding a shell in their off-hand; they always drop it upon death",
            "Wandering Traders sell them for 5 Emeralds each",
            "Essential for crafting Conduits (8 Nautilus Shells + 1 Heart of the Sea)",
            "Unlike some other shells, it cannot be placed as a block"
        ],
        description: "The Nautilus Shell is a spiral-patterned item essential for underwater exploration. Combining eight shells with a Heart of the Sea creates a Conduit, which provides the Conduit Power effect, granting players water breathing, night vision, and increased mining speed while submerged. These shells can be obtained through three primary methods: as a rare treasure caught while fishing, purchased from Wandering Traders for emeralds, or dropped by Drowned mobs that are occasionally spawned holding them. They are vital for players looking to establish permanent underwater bases."
    },
    "minecraft:slime_ball": {
        id: "minecraft:slime_ball",
        name: "Slimeball",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Sticky Pistons, Magma Cream, Slime Blocks, and Leads",
            secondaryUse: "Breeding Frogs and speeding up Tadpole growth"
        },
        crafting: {
            recipeType: "Uncraftable",
            ingredients: ["Dropped by Slimes", "Sneezed by Baby Pandas", "Sold by Wandering Traders"]
        },
        specialNotes: [
            "Dropped by Slimes, sneezed by Baby Pandas (rare), or sold by Wandering Traders",
            "Crafts Sticky Pistons, Slime Blocks (9x), Leads, and Magma Cream",
            "Essential for redstone machines and sticky mechanics",
            "Used to breed Frogs and accelerate Tadpole growth"
        ],
        description: "The Slimeball is a gelatinous material primarily obtained from defeating small slimes. It is a fundamental component for advanced Redstone engineering, as it is required to craft Sticky Pistons and Slime Blocks, both of which are essential for moving blocks in complex machines. Beyond engineering, slimeballs are used to create Leads for leashing mobs and Magma Cream for potion brewing. They also serve a biological purpose, acting as the breeding food for frogs and a growth accelerant for tadpoles."
    },
    "minecraft:magma_cream": {
        id: "minecraft:magma_cream",
        name: "Magma Cream",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Brewing Potion of Fire Resistance",
            secondaryUse: "Crafting Magma Blocks"
        },
        crafting: {
            recipeType: "Shapeless",
            ingredients: ["Slimeball", "Blaze Powder"]
        },
        specialNotes: [
            "Dropped by Magma Cubes upon death",
            "Obtained by crafting a slimeball and blaze powder together",
            "Used to brew Potions of Fire Resistance (Awkward Potion + Magma Cream)",
            "Required to craft Magma Blocks (4x Magma Cream)",
            "Looting enchantment increases the maximum drop amount from Magma Cubes"
        ],
        description: "Magma Cream is a hot, gelatinous substance primarily used in brewing and crafting. It is the essential ingredient for creating Potions of Fire Resistance, making it invaluable for exploring the Nether or swimming in lava. While it can be obtained by hunting Magma Cubes in the Nether, it can also be manually crafted by combining a slimeball with blaze powder. Additionally, four pieces of magma cream can be compacted into a single Magma Block, providing a source of light and a damaging surface for mob traps."
    },
    "minecraft:rabbit_hide": {
        id: "minecraft:rabbit_hide",
        name: "Rabbit Hide",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Leather for bookbinding and armor",
            secondaryUse: "Alternative leather source when cows are unavailable"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Rabbit Hide x4"]
        },
        specialNotes: [
            "Dropped by rabbits (0-2 per rabbit; increased by Looting)",
            "4 Rabbit Hides can be crafted into 1 Leather",
            "Rabbits also drop raw rabbit meat and occasionally Rabbit's Foot",
            "Provides renewable leather in biomes where cows don't spawn naturally",
            "Essential for crafting books and leather armor in rabbit-rich environments",
            "Small rabbits are quick and difficult to farm but provide useful drops"
        ],
        description: "Rabbit Hide is a skin material dropped by rabbits when killed, typically dropping 0-2 hides per rabbit with increased yields from Looting enchantments. While rabbits are small and fast, their hides provide a renewable source of leather, particularly valuable in biomes where cows are scarce or absent. Four rabbit hides can be crafted into a single piece of leather in a 2x2 crafting grid, which can then be used to create books, item frames, and leather armor. This makes rabbit farming a viable alternative for players who struggle to find cattle in their world."
    },
    "minecraft:bone": {
        id: "minecraft:bone",
        name: "Bone",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting Bone Meal for farming and white dye",
            secondaryUse: "Taming and breeding wolves"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Bone"]
        },
        specialNotes: [
            "Dropped by skeletons, strays, and bogged (0-2 bones)",
            "Looting enchantment increases the maximum drop by 1 per level",
            "Can be crafted into 3 Bone Meal in a crafting grid",
            "Bone Meal is a white dye and accelerates crop, sapling, and plant growth",
            "Used to tame wolves with a 1/3 success rate per bone",
            "Wolves can be bred using bones after being tamed",
            "Can be found in desert temples, jungle temples, and woodland mansions"
        ],
        description: "Bones are skeletal items primarily obtained from defeating skeleton-type mobs such as skeletons, strays, and bogged. Their most common use is crafting Bone Meal, which serves as an effective fertilizer for crops, saplings, and flowers, as well as being a white dye for coloring blocks and items. Bones are also essential for interacting with wolves, as they are the only item that can tame wild wolves and breed tamed ones. With a 1/3 chance to tame a wild wolf per bone used, players typically need several bones to successfully befriend a canine companion."
    },
    "minecraft:string": {
        id: "minecraft:string",
        name: "String",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting bows, fishing rods, and leads",
            secondaryUse: "Redstone component for tripwires"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["String"]
        },
        specialNotes: [
            "Dropped by spiders, cave spiders, and cats (0-2 string)",
            "Obtained by breaking cobwebs with a sword or shears",
            "Breaking tripwire blocks also drops string",
            "Cats have a 50% chance to bring string as a morning gift",
            "Can be crafted into bows (3x), fishing rods (2x), and leads (2x)",
            "Used to create tripwire hooks for redstone traps and mechanisms",
            "Wool blocks can be crafted into 4 strings each"
        ],
        description: "String is a versatile crafting material commonly dropped by spiders and cave spiders, or collected by breaking cobwebs found in abandoned mineshafts and strongholds. It is a fundamental component in several essential recipes: three strings create a bow, two strings make a fishing rod, and two strings are needed for leads to leash animals. String also has a redstone application when used to craft tripwire hooks, allowing players to create detection circuits and traps. Domestic cats may occasionally gift string to their owners, and wool blocks can be broken down into string in a crafting table."
    },
    "minecraft:feather": {
        id: "minecraft:feather",
        name: "Feather",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting arrows for bows",
            secondaryUse: "Crafting Book and Quill for writing"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Feather"]
        },
        specialNotes: [
            "Dropped by chickens (0-2 feathers; 66% chance per chicken)",
            "Dropped by parrots (1-2 feathers; 100% chance)",
            "Looting enchantment increases the maximum drop from chickens",
            "Primary ingredient for crafting arrows (1 feather + 1 stick + 1 flint)",
            "Can be used with a book and ink sac to craft Book and Quill",
            "Book and Quill allows players to write and edit custom text",
            "Feathers are a renewable resource from chicken and parrot farms"
        ],
        description: "Feathers are lightweight items primarily obtained from chickens, which drop 0-2 feathers upon death with a 66% chance of dropping at least one. Parrots also drop feathers reliably when killed. The main purpose of feathers is arrow production, with each arrow requiring one feather, one stick, and one flint. This makes feathers essential for ranged combat and hunting. Additionally, feathers can be combined with a book and ink sac to create a Book and Quill, an item that allows players to write up to 50 pages of custom text, making them useful for storytelling, sign-making, or documenting in-game discoveries."
    },
    "minecraft:gold_nugget": {
        id: "minecraft:gold_nugget",
        name: "Gold Nugget",
        maxStack: 64,
        durability: 0,
        enchantable: false,
        usage: {
            primaryUse: "Crafting golden carrots, glistering melon slices, and gold ingots",
            secondaryUse: "Fuel for furnaces and crafting golden apples"
        },
        crafting: {
            recipeType: "Shaped",
            ingredients: ["Gold Nugget"]
        },
        specialNotes: [
            "Dropped by zombie piglins and gilded hoglins (2-6 nuggets)",
            "Looting increases the maximum nugget drop from zombie piglins",
            "Obtained by smelting golden tools, armor, and equipment",
            "Obtained by mining Nether gold ore",
            "9 nuggets craft into 1 Gold Ingot in a 3x3 grid",
            "Used to craft Golden Carrots, Glistering Melon Slices, and Golden Apples",
            "Can be used as furnace fuel, smelting 0.1 items per nugget"
        ],
        description: "Gold Nuggets are small fragments of gold primarily obtained by killing zombie piglins in the Nether or gilded hoglins in Bastion remnants. Zombie piglins drop 2-6 nuggets upon death, with Looting enchantments increasing the maximum yield. These nuggets serve as a compact form of gold that can be smelted from golden tools or mined from Nether gold ore. Their primary uses involve advanced food items: nine nuggets combine with a golden carrot for high saturation food, eight nuggets with a melon slice create glistering melon for potion brewing, and eight nuggets with an apple make a golden apple. They can also be crafted back into gold ingots or used as inefficient furnace fuel."
    }
};
