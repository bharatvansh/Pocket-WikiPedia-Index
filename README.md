# Pocket Wikipedia Foundation

A scalable wiki system for Minecraft Bedrock Edition that provides information about blocks, items, and mobs.

## Architecture Overview

This implementation follows a scalable architecture that separates the search index from detailed content:

### 1. Data Layer
- **Search Index** (`scripts/data/search_index.js`): Lightweight registry with only essential metadata
- **Content Providers** (`scripts/data/providers/`): On-demand detailed content retrieval

### 2. UI Layer
- **Dynamic UI Factory** (`scripts/ui/ui_factory.js`): Type-specific rendering
- **Modal Forms**: For search and detail views
- **Action Forms**: For result lists

### 3. Event Handling
- Triggered by using a book (`minecraft:book`)
- Flow: Search → Results → Detail View

## Sample Entries

The foundation includes 2 sample entries in each category:

### Blocks
- Dirt: Common building block
- Stone: Durable construction material

### Items  
- Iron Sword: Versatile weapon
- Apple: Common food source

### Mobs
- Creeper: Hostile explosive mob
- Pig: Passive farm animal

## Usage

1. Hold a book in your hand
2. Use the book (right-click/activate)
3. Search for any block, item, or mob
4. Select an entry from the results
5. View detailed information

## Technical Details

- **APIs Used**: `@minecraft/server` v1.17.0, `@minecraft/server-ui` v1.3.0
- **Pattern**: Provider-based content loading
- **Scalability**: Designed to handle 10,000+ entries efficiently

## Future Expansion

To add more entries:
1. Add to `search_index.js` with basic metadata
2. Implement provider functions for detailed content
3. The UI will automatically adapt based on category