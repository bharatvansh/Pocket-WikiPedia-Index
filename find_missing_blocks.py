#!/usr/bin/env python3
"""
Research script to find missing Minecraft Bedrock blocks using Tavily API
"""

import os
import json
import sys

try:
    from tavily import TavilyClient
    tavily_available = True
except ImportError:
    tavily_available = False

# Existing blocks from block_index.js
EXISTING_BLOCKS = {
    "dirt", "stone", "deepslate", "copper_ore", "amethyst_block", "glowstone",
    "mud_bricks", "obsidian", "pink_petals", "prismarine", "trial_spawner", "vault",
    "crafter", "copper_bulb", "copper_door", "copper_trapdoor", "copper_grate",
    "tuff_bricks", "chiseled_tuff_bricks", "heavy_core", "pale_hanging_moss",
    "pale_moss_block", "resin_block", "chiseled_tuff", "polished_tuff",
    "polished_tuff_stairs", "tuff_wall", "chiseled_copper", "pale_oak_log",
    "pale_oak_leaves", "creaking_heart", "copper_lantern", "copper_bars",
    "exposed_copper_grate", "weathered_copper_grate", "oxidized_copper_grate",
    "oxidized_copper_bulb", "exposed_copper_bulb", "weathered_copper_bulb",
    "exposed_copper_trapdoor", "weathered_copper_trapdoor", "oxidized_copper_trapdoor",
    "resin_bricks", "chiseled_resin_bricks", "pale_oak_planks", "pale_moss_carpet",
    "tuff_slab", "polished_tuff_slab", "cherry_planks", "calibrated_sculk_sensor",
    "exposed_copper_door", "weathered_copper_door", "sculk_shrieker", "sculk_catalyst",
    "budding_amethyst", "reinforced_deepslate", "decorated_pot", "chiseled_bookshelf"
}

# Potential missing blocks to research
RESEARCH_QUERIES = [
    "Minecraft Bedrock 1.21 Trial Chambers complete block list all blocks",
    "Minecraft Bedrock 1.21.50 Pale Garden resin blocks complete list",
    "Minecraft Bedrock missing tuff variants blocks",
    "Minecraft Bedrock copper block variants not in database",
    "Minecraft Bedrock stone and brick variants complete list 2024"
]

def get_tavily_client():
    """Get Tavily client from environment variable"""
    api_key = os.environ.get('TAVILY_API_KEY')
    if not api_key:
        print("TAVILY_API_KEY environment variable not set")
        print("Please set it with: export TAVILY_API_KEY='your-key-here'")
        return None
    return TavilyClient(api_key=api_key)

def search_blocks(query, client):
    """Search for block information using Tavily"""
    try:
        print(f"\nSearching: {query}")
        result = client.search(query, search_depth="advanced", max_results=10)
        return result
    except Exception as e:
        print(f"Error searching: {e}")
        return None

def extract_block_names(text):
    """Extract potential block names from search results"""
    # Common block naming patterns
    block_keywords = [
        "slab", "stairs", "wall", "bricks", "polished", "chiseled",
        "block", "ore", "pillar", "tiles", "planks", "log", "leaves",
        "lantern", "bulb", "door", "trapdoor", "bars", "grate", "fence",
        "button", "pressure_plate", "brick", "stone", "sand", "dirt"
    ]
    
    import re
    potential_blocks = []
    
    # Look for patterns like "minecraft:block_name"
    minecraft_pattern = r'minecraft:(\w+)'
    matches = re.findall(minecraft_pattern, text.lower())
    potential_blocks.extend(matches)
    
    return list(set(potential_blocks))

def main():
    if not tavily_available:
        print("Error: tavily-python package not installed")
        print("Install it with: pip install tavily-python")
        return
    
    client = get_tavily_client()
    if not client:
        return
    
    print("=" * 60)
    print("Finding Missing Minecraft Bedrock Blocks")
    print("=" * 60)
    
    found_blocks = set()
    
    for query in RESEARCH_QUERIES:
        result = search_blocks(query, client)
        if result and 'results' in result:
            for item in result['results']:
                content = item.get('content', '') + ' ' + item.get('title', '')
                blocks = extract_block_names(content)
                found_blocks.update(blocks)
    
    # Filter out existing blocks
    missing_blocks = found_blocks - EXISTING_BLOCKS
    
    print("\n" + "=" * 60)
    print("POTENTIAL MISSING BLOCKS")
    print("=" * 60)
    
    # Group by category
    decorative = []
    building = []
    functional = []
    natural = []
    
    for block in sorted(missing_blocks):
        if any(x in block for x in ['ore', 'stone', 'dirt', 'sand', 'deepslate']):
            natural.append(block)
        elif any(x in block for x in ['crafting', 'furnace', 'chest', 'spawner', 'sensor']):
            functional.append(block)
        elif any(x in block for x in ['bricks', 'slab', 'stairs', 'planks', 'polished', 'chiseled']):
            building.append(block)
        else:
            decorative.append(block)
    
    if natural:
        print("\n[Natural Blocks]")
        for block in natural[:10]:
            print(f"  - {block}")
    
    if building:
        print("\n[Building Blocks]")
        for block in building[:10]:
            print(f"  - {block}")
    
    if functional:
        print("\n[Functional Blocks]")
        for block in functional[:10]:
            print(f"  - {block}")
    
    if decorative:
        print("\n[Decorative Blocks]")
        for block in decorative[:10]:
            print(f"  - {block}")
    
    print(f"\nTotal unique potential missing blocks found: {len(missing_blocks)}")

if __name__ == "__main__":
    main()
