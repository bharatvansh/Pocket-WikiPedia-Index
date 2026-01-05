# Pocket Wikipedia Foundation

A scalable wiki system for Minecraft Bedrock Edition that provides information about blocks, items, and mobs.

- **MCPEDL**: [Pocket Wikipedia Knowledge](https://mcpedl.com/pocket-wikipedia-knowledge/)

## Architecture Overview

This implementation follows a scalable architecture that separates the search index from detailed content:

### 1. Data Layer
- **Search Index** (`scripts/data/search/index.js`): Lightweight registry with only essential metadata
- **Content Providers** (`scripts/data/providers/`): On-demand detailed content retrieval

### 2. UI Layer
- **Dynamic UI Factory** (`scripts/ui/ui_factory.js`): Type-specific rendering
- **Modal Forms**: For search and detail views
- **Action Forms**: For result lists

### 3. Event Handling
- Triggered by using a book (`minecraft:book`)
- Flow: Search → Results → Detail View

## Sample Entries

The foundation includes a growing set of sample entries in each category. Examples:

### Blocks
- Dirt: Common building block
- Stone: Durable construction material

### Items  
- Iron Sword: Versatile weapon
- Apple: Common food source

### Mobs
- Creeper: Hostile explosive mob
- Pig: Passive farm animal
- Camel: Two-player mount found in desert villages
- Breeze: Trial Chambers mob that attacks with wind charges

## Usage

1. Hold a book in your hand
2. Use the book (right-click/activate)
3. Search for any block, item, or mob
4. Select an entry from the results
5. View detailed information

## Technical Details

- **APIs Used**: `@minecraft/server` v1.17.0, `@minecraft/server-ui` v1.3.0

## ⚠️ Development Status

> **Note:** This addon is still in active development. Many entries still need to be added, and there may be inaccurate information or mistakes. If you'd like to help improve the content, you can contribute directly via GitHub or contact me through Discord!

## Future Expansion

To add more entries:
1. Add a lightweight entry to the appropriate search index file in `scripts/data/search/` (e.g. `mob_index.js`)
2. Add the detailed data in the matching provider registry under `scripts/data/providers/`
3. The UI will automatically adapt based on category

## Credits

- **ModMC** on [CurseForge](https://www.curseforge.com/members/modmc) & [MCPEDL](https://mcpedl.com/user/modmc/)
- **bharatvansh** on [GitHub](https://github.com/bharatvansh)

## Support & Community

- 💬 **Discord**: [Join our server](https://discord.gg/Wvst4znsgk)
- ☕ **Ko-fi**: [Support the project](https://ko-fi.com/modmcpe)
