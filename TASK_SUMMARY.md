# Task Summary: Added 2 New Mob Entries for Bedrock 1.21+

## Objective
Add 2 new unique mob entries with accurate, high-quality data for Minecraft Bedrock Edition 1.21+, verified using tavily-python for internet research.

## Research Methodology
- Installed and used tavily-python to search official Minecraft wikis and documentation
- Verified all information against minecraft.wiki and minecraft.fandom.com
- Ensured all data is specific to Bedrock Edition 1.21+
- Cross-referenced multiple sources for accuracy

## Mobs Added

### 1. Witch (minecraft:witch)
**Classification:** Hostile
**Health:** 26 HP
**Key Features:**
- Throws harmful splash potions (Poison, Harming, Slowness, Weakness)
- Drinks beneficial potions during combat (Instant Health, Fire Resistance, Water Breathing)
- Immune to poison damage and takes reduced magic damage
- Spawns in swamp huts, naturally at light level 0, and during raids (wave 4+)
- Villagers transform into witches when struck by lightning
- Drops valuable brewing ingredients (redstone dust, glowstone dust, sugar, gunpowder, spider eyes, glass bottles, sticks)

**Verified Data:**
- Health: 26 HP (confirmed via Minecraft Wiki)
- Spawning: Light level 0 in Bedrock Edition (not light level 7 like Java)
- Biomes: All Overworld except Mushroom Fields and Deep Dark
- Attack range: 10 blocks
- Movement speed: 0.25

### 2. Ghast (minecraft:ghast)
**Classification:** Hostile
**Health:** 10 HP
**Key Features:**
- Large floating Nether mob with 4×4×4 hitbox
- Shoots explosive fireballs from up to 100 blocks away
- Fireball impact damage: 6 HP (Normal), Explosion damage: 17 HP (at epicenter)
- Iconic fireball deflection mechanic for "Return to Sender" advancement
- Spawns in Nether Wastes, Soul Sand Valley, and Basalt Deltas
- Requires 5×5×5 blocks of space to spawn
- Drops ghast tears (essential for Regeneration potions and End Crystals) and gunpowder

**Verified Data:**
- Health: 10 HP (confirmed via Minecraft Wiki)
- Fireball damage: 6 HP impact + 17 HP explosion (Normal difficulty)
- Explosion power: 1 (destroys netherrack but not cobblestone)
- Immune to fire and lava, but takes drowning damage in water
- Movement speed: 0.3
- Line-of-sight based attacking

## Files Modified

1. **scripts/data/providers/mobs/hostile_mobs.js**
   - Added `minecraft:witch` entry with complete stats and behavior
   - Added `minecraft:ghast` entry with complete stats and behavior

2. **scripts/data/search/mob_index.js**
   - Added Witch search index entry with purple theme color (§5)
   - Added Ghast search index entry with white theme color (§f)

## Verification
- All files pass JavaScript syntax validation (`node --check`)
- Data matches official Minecraft Wiki for Bedrock Edition
- Follows existing code conventions and formatting
- Comprehensive descriptions with accurate behavioral details
- All stats verified against Bedrock Edition 1.21+ sources

## Quality Assurance
✅ Both mobs are real vanilla Minecraft mobs
✅ Data is specific to Bedrock Edition (not Java Edition)
✅ All stats verified via tavily-python research
✅ Comprehensive behavior traits and drop tables
✅ High-quality, engaging descriptions
✅ Follows existing format and conventions
✅ Syntax validated with node --check
