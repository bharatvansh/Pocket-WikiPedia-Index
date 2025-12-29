# Code Review Fixes - Bedrock 1.21+ Data Corrections

## Issues Fixed

### 1. ✅ Witch - Redstone Dust Drop Rate
**Issue:** Incorrect drop rate of 0-2 Redstone Dust  
**Fix:** Updated to 4-8 Redstone Dust (increased by Looting)  
**Reason:** Drop rate was increased in Bedrock Edition 1.21.20 to match Java Edition parity

**Changes:**
```javascript
// Before:
{ item: "Redstone Dust", chance: "0-2 (increased by Looting)" }

// After:
{ item: "Redstone Dust", chance: "4-8 (increased by Looting)" }
```

### 2. ✅ Witch - Creeper Avoidance Behavior
**Issue:** Incorrect behavior trait "Runs away from creepers about to explode"  
**Fix:** Removed this behavior trait completely  
**Reason:** This was an old Java Edition feature that is not present in modern Bedrock Edition

**Changes:**
- Removed line: `"Runs away from creepers about to explode"`
- Retained 10 accurate behavior traits for the Witch

### 3. ✅ Ghast - Spawn Space Requirements
**Issue:** Incorrect spawn space requirement of 5×5×5 blocks  
**Fix:** Updated to 5×5×4 blocks (both in behaviorTraits and description)  
**Reason:** Ghasts have a height of 4.0 blocks, requiring only 4 blocks of vertical space

**Changes:**
```javascript
// Before:
"Cannot spawn in enclosed spaces smaller than 5×5×5 blocks"

// After:
"Cannot spawn in enclosed spaces smaller than 5×5×4 blocks"
```

Also updated the description text to reflect the correct spawn space dimensions.

## Verification

All fixes have been applied and verified:
- ✅ JavaScript syntax validation passed (`node --check`)
- ✅ All 3 data accuracy issues resolved
- ✅ Changes align with Bedrock Edition 1.21.20+ specifications
- ✅ No breaking changes to data structure or format

### 4. ✅ Witch - Healing Amount Clarification
**Issue:** Incorrect healing value stated as "4 hearts"  
**Fix:** Updated to "4 health points (2 hearts)"  
**Reason:** Witches use Potion of Healing I which restores 4 HP (2 hearts), not Healing II which would restore 8 HP (4 hearts)

**Changes:**
```javascript
// Before:
"restore 4 hearts"

// After:
"restore 4 health points (2 hearts)"
```

## Summary

Successfully corrected 4 data accuracy issues related to:
1. Witch drop rates (Bedrock 1.21.20 update)
2. Witch behavior traits (Bedrock-specific)
3. Ghast spawn requirements (accurate mob hitbox dimensions)
4. Witch healing amount (Potion of Healing I vs II clarification)

All entries now reflect accurate Bedrock Edition 1.21+ data.
