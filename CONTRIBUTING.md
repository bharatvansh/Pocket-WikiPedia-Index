# Contributing to Pocket Wikipedia Foundation

Thank you for your interest in contributing to the Pocket Wikipedia Foundation! This project aims to create a comprehensive wiki for Minecraft Bedrock Edition, and we welcome contributions of new data entries for **mobs**, **blocks**, and **items**.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Adding New Entries](#adding-new-entries)
  - [Adding Mobs](#adding-mobs)
  - [Adding Blocks](#adding-blocks)
  - [Adding Items](#adding-items)
- [Data Formats](#data-formats)


---

## Project Structure

The data is organized into two layers:

```
scripts/data/
├── search/                    # Lightweight search index entries
│   ├── index.js               # Main search index aggregator
│   ├── mob_index.js           # Mob search entries
│   ├── block_index.js         # Block search entries
│   └── item_index.js          # Item search entries
│
└── providers/                 # Detailed content data
    ├── mobs/
    │   ├── index.js           # Mob provider aggregator
    │   ├── hostile_mobs.js    # Hostile mob data
    │   ├── passive_mobs.js    # Passive mob data
    │   └── neutral_mobs.js    # Neutral mob data
    │
    ├── blocks/
    │   ├── index.js           # Block provider aggregator
    │   ├── natural/           # Natural blocks (dirt, stone, ores, etc.)
    │   ├── building/          # Building blocks
    │   ├── functional/        # Functional blocks
    │   ├── decorative/        # Decorative blocks
    │   └── dimension/         # Dimension-specific blocks
    │
    └── items/
        ├── index.js           # Item provider aggregator
        ├── tools/             # Tool items
        ├── weapons/           # Weapon items
        ├── armor/             # Armor items
        ├── consumables/       # Food and potions
        ├── materials/         # Crafting materials
        └── misc/              # Miscellaneous items
```

> [!IMPORTANT]
> Every entry requires **two additions**:
> 1. A **search index entry** in `scripts/data/search/`
> 2. A **detailed provider entry** in `scripts/data/providers/`

---

## Adding New Entries

### Adding Mobs

#### Step 1: Add Search Index Entry

Add an entry to `scripts/data/search/mob_index.js`:

```javascript
{
    id: "minecraft:your_mob",
    name: "Your Mob Name",
    category: "mob",
    icon: "textures/items/spawn_eggs/spawn_egg_your_mob.png",
    themeColor: "§a" // Minecraft color code
}
```

#### Step 2: Add Detailed Provider Entry

Add the detailed data to the appropriate file in `scripts/data/providers/mobs/`:
- `hostile_mobs.js` - For hostile mobs (Creeper, Zombie, etc.)
- `passive_mobs.js` - For passive mobs (Pig, Sheep, etc.)
- `neutral_mobs.js` - For neutral mobs (Wolf, Bee, etc.)

```javascript
"minecraft:your_mob": {
    id: "minecraft:your_mob",
    name: "Your Mob Name",
    health: 20,
    stats: {
        attackDamage: 5,
        movementSpeed: 0.25
    },
    classification: {
        type: "Hostile",  // or "Passive" / "Neutral"
        undead: false
    },
    spawning: {
        biomes: ["Biome1", "Biome2"],
        lightLevel: "0-7",
        groupSize: "1-4"
    },
    behaviorTraits: [
        "Behavior trait 1",
        "Behavior trait 2"
    ],
    drops: [
        { item: "Item Name", chance: "0-2" },
        { item: "Rare Item", chance: "Rare (2.5%)" }
    ],
    description: "A detailed description of the mob, its behavior, and any notable characteristics. This should be informative and accurate to the actual Minecraft mob."
}
```

---

### Adding Blocks

#### Step 1: Add Search Index Entry

Add an entry to `scripts/data/search/block_index.js`:

```javascript
{
    id: "minecraft:your_block",
    name: "Your Block Name",
    category: "block",
    icon: "textures/blocks/your_block",
    themeColor: "§7" // Minecraft color code
}
```

#### Step 2: Add Detailed Provider Entry

Add the detailed data to the appropriate subcategory in `scripts/data/providers/blocks/`:

| Folder | Use For |
|--------|---------|
| `natural/` | Dirt, stone, ores, vegetation, wood |
| `building/` | Bricks, planks, concrete, etc. |
| `functional/` | Crafting tables, furnaces, chests |
| `decorative/` | Decorative blocks, coral, flowers |
| `dimension/` | Nether/End specific blocks |

```javascript
"minecraft:your_block": {
    id: "minecraft:your_block",
    name: "Your Block Name",
    hardness: 1.5,
    blastResistance: 6.0,
    flammability: false,
    gravityAffected: false,
    transparent: false,
    luminance: 0,  // 0-15 light level
    mining: {
        tool: "Pickaxe",  // or "Shovel", "Axe", "None"
        minTier: "Wood",  // or "Stone", "Iron", "Diamond", "Netherite", "None"
        silkTouch: true
    },
    drops: ["Your Block"],
    generation: {
        dimension: "Overworld",  // or "Nether", "End"
        yRange: "-64 to 320"
    },
    description: "A detailed description of the block, its uses, and any notable characteristics."
}
```

---

### Adding Items

#### Step 1: Add Search Index Entry

Add an entry to `scripts/data/search/item_index.js`:

```javascript
{
    id: "minecraft:your_item",
    name: "Your Item Name",
    category: "item",
    icon: "textures/items/your_item",
    themeColor: "§f" // Minecraft color code
}
```

#### Step 2: Add Detailed Provider Entry

Add the detailed data to the appropriate subcategory in `scripts/data/providers/items/`:

| Folder | Use For |
|--------|---------|
| `tools/` | Pickaxes, shovels, axes, hoes |
| `weapons/` | Swords, bows, tridents, crossbows |
| `armor/` | Helmets, chestplates, leggings, boots |
| `consumables/` | Food, potions, golden apples |
| `materials/` | Ingots, gems, crafting materials |
| `misc/` | Other items (maps, compasses, etc.) |

```javascript
"minecraft:your_item": {
    id: "minecraft:your_item",
    name: "Your Item Name",
    maxStack: 64,
    durability: 0,  // 0 for non-durability items
    enchantable: false,
    usage: {
        primaryUse: "Primary use description",
        secondaryUse: "Optional secondary use"
    },
    combat: {  // Only for weapons/tools
        attackDamage: 7,
        attackSpeed: 1.6
    },
    crafting: {
        recipeType: "Shaped",  // or "Shapeless", "Smelting", "Smithing"
        ingredients: ["Material x2", "Stick"]
    },
    specialNotes: [
        "Special note 1",
        "Special note 2"
    ],
    description: "A detailed description of the item, its uses, and any notable characteristics."
}
```

---

## Data Formats

### Minecraft Color Codes

Use these codes for `themeColor`:

| Code | Color | Code | Color |
|------|-------|------|-------|
| `§0` | Black | `§8` | Dark Gray |
| `§1` | Dark Blue | `§9` | Blue |
| `§2` | Dark Green | `§a` | Green |
| `§3` | Dark Aqua | `§b` | Aqua |
| `§4` | Dark Red | `§c` | Red |
| `§5` | Dark Purple | `§d` | Light Purple |
| `§6` | Gold | `§e` | Yellow |
| `§7` | Gray | `§f` | White |

### Required Fields

> [!CAUTION]
> Missing required fields will cause the validation to fail!
> Always ensure you add all suitable fields.

### Content Constraints

> [!IMPORTANT]
> The following field limits are strictly enforced by the validation system:
> - **Description**: Must be under 600 characters.
> - **Behavior Traits** (Mobs): Maximum 7 entries. Each trait must be under 120 characters.
> - **Special Notes** (Items): Maximum 7 entries. Each note must be under 120 characters.

### ID Format

All IDs must:
- Start with `minecraft:` prefix
- Use lowercase with underscores (e.g., `minecraft:iron_golem`)
- Match the actual Minecraft Bedrock Edition ID

---

### PR Title Format

Use a clear title format:
- `Add [Mob Name] mob entry`
- `Add [Block Name] block entry`
- `Add [Item Name] item entry`
- `Add multiple mob entries: [List]`

### PR Description Template

```markdown
## Summary
Brief description of what entries you're adding.

## Entries Added
- [ ] Search index entry added
- [ ] Provider entry added
- [ ] All required fields included

## Type
- [ ] Mob
- [ ] Block
- [ ] Item

## Verification
- [ ] I have verified the information is accurate
- [ ] IDs match official Minecraft Bedrock Edition IDs
```

---

## Tips for Quality Contributions

1. **Research thoroughly** - Use the [Minecraft Wiki](https://minecraft.wiki/) as a reference
2. **Be accurate** - Double-check health values, damage numbers, and spawn conditions
3. **Write detailed descriptions** - Aim for 2-4 sentences minimum
4. **Include behavior traits** - For mobs, document unique behaviors
5. **Verify IDs** - Ensure IDs match the actual Bedrock Edition identifiers
6. **Strictly Follow format** - Follow the format for new entries
7. **No Duplicates** - Do not add duplicate entries. Always check existing entries before adding new ones.

---

**Thank you for contributing to the Pocket Wikipedia Foundation! 🎮📚**