# Added Entries - Pocket Wikipedia Foundation

This document summarizes the 6 new entries (2 per category) added to the Pocket Wikipedia Foundation.

## Summary

- **Total new entries:** 6
- **Blocks:** 2 (Amethyst Block, Obsidian)
- **Items:** 2 (Netherite Sword, Trident)
- **Mobs:** 2 (Warden, Blaze)

All data was researched using Tavily internet search to ensure accuracy and up-to-date information for Minecraft Bedrock Edition.

---

## New Block Entries

### 1. Block of Amethyst (`minecraft:amethyst_block`)
- **Theme Color:** §5 (purple)
- **Hardness:** 1.5
- **Blast Resistance:** 1.5
- **Mining Tool:** Pickaxe (any tier)
- **Location:** Found in Amethyst Geodes (Y: 0-64)
- **Description:** Decorative purple crystalline block that makes chiming sounds

### 2. Obsidian (`minecraft:obsidian`)
- **Theme Color:** §8 (dark gray)
- **Hardness:** 50.0
- **Blast Resistance:** 1200.0
- **Mining Tool:** Diamond or Netherite Pickaxe required
- **Location:** Forms where lava meets water
- **Description:** Extremely durable block used for nether portals, highly blast-resistant

---

## New Item Entries

### 1. Netherite Sword (`minecraft:netherite_sword`)
- **Theme Color:** §8 (dark gray/netherite)
- **Durability:** 2031
- **Attack Damage:** 9 (Bedrock Edition)
- **Attack Speed:** 1.6
- **Enchantable:** Yes
- **Crafting:** Smithing Table (Diamond Sword + Netherite Ingot + Netherite Upgrade Template)
- **Description:** Highest tier sword, immune to lava/fire, strongest melee weapon

### 2. Trident (`minecraft:trident`)
- **Theme Color:** §b (aqua/cyan)
- **Durability:** 250
- **Attack Damage:** 9 (melee), 8 (ranged)
- **Attack Speed:** 1.1
- **Enchantable:** Yes (Loyalty, Riptide, Channeling, Impaling)
- **Obtained:** Drops from Drowned (15% chance in Bedrock Edition)
- **Description:** Unique dual-purpose weapon for melee and ranged combat

---

## New Mob Entries

### 1. Warden (`minecraft:warden`)
- **Theme Color:** §8 (dark gray/black)
- **Health:** 500 HP (250 hearts)
- **Attack Damage:** 30 (melee), plus sonic boom attack
- **Classification:** Hostile
- **Spawning:** Deep Dark biome (summoned by Sculk Shriekers)
- **Behavior:** Blind, detects vibrations, immune to knockback and fire
- **Drops:** Sculk Catalyst
- **Description:** Most powerful hostile mob, tracks via vibrations, sonic boom pierces armor

### 2. Blaze (`minecraft:blaze`)
- **Theme Color:** §6 (gold/orange - fire)
- **Health:** 20 HP (10 hearts)
- **Attack Damage:** 6
- **Classification:** Hostile
- **Spawning:** Nether Fortress (light level 11 or less)
- **Behavior:** Flying mob, shoots three fireballs, immune to fire/lava, weak to water
- **Drops:** Blaze Rod (0-1, increased with Looting), Glowstone Dust (rare)
- **Description:** Flying hostile mob essential for brewing, drops blaze rods

---

## Files Modified

1. **scripts/data/search_index.js**
   - Added 6 new search index entries with proper metadata

2. **scripts/data/providers/block_provider.js**
   - Added detailed data for Amethyst Block and Obsidian

3. **scripts/data/providers/item_provider.js**
   - Added detailed data for Netherite Sword and Trident

4. **scripts/data/providers/mob_provider.js**
   - Added detailed data for Warden and Blaze

## Data Verification

All entries have been verified to:
- Follow existing data schema and JSDoc types
- Use appropriate Minecraft color codes (avoiding §0/black)
- Include accurate stats from Minecraft Bedrock Edition
- Provide comprehensive descriptions and gameplay information
- Be properly accessible through the provider system

## Total Entries Count

- **Blocks:** 6 (was 4, now 6)
- **Items:** 6 (was 4, now 6)
- **Mobs:** 6 (was 4, now 6)
- **Total:** 18 entries (was 12, now 18)
