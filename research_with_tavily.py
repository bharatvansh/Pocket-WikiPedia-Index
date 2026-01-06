#!/usr/bin/env python3
"""
Research script to find missing Minecraft Bedrock blocks using Tavily API
"""

import os
import json
import sys
import re

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

# Manual list of important Minecraft Bedrock blocks to check
POTENTIAL_MISSING_BLOCKS = [
    # Trial Chambers (1.21)
    "chiseled_copper_grate",
    "chiseled_tuff",
    "polished_tuff_stairs",
    "tuff_stairs",

    # Copper variants
    "waxed_copper_block",
    "waxed_cut_copper",
    "waxed_cut_copper_stairs",
    "waxed_cut_copper_slab",
    "waxed_exposed_copper",
    "waxed_weathered_copper",
    "waxed_oxidized_copper",
    "copper_spleaves",

    # Tuff variants
    "tuff",
    "polished_tuff_slab",
    "tuff_stairs",

    # Stone variants
    "polished_andesite",
    "polished_diorite",
    "polished_granite",
    "andesite_stairs",
    "diorite_stairs",
    "granite_stairs",
    "andesite_slab",
    "diorite_slab",
    "granite_slab",

    # Deepslate variants
    "polished_deepslate",
    "polished_deepslate_stairs",
    "polished_deepslate_slab",
    "deepslate_brick_slab",
    "deepslate_brick_stairs",
    "deepslate_brick_wall",
    "cobbled_deepslate_wall",
    "cobbled_deepslate_stairs",
    "cobbled_deepslate_slab",

    # Brick variants
    "stone_brick_wall",
    "stone_brick_stairs",
    "stone_brick_slab",
    "mossy_stone_brick_wall",
    "mossy_stone_brick_stairs",
    "mossy_stone_brick_slab",
    "cracked_stone_bricks",

    # Nether
    "polished_blackstone_bricks",
    "cracked_polished_blackstone_bricks",
    "polished_blackstone_brick_stairs",
    "polished_blackstone_brick_slab",
    "polished_blackstone_brick_wall",
    "chiseled_polished_blackstone",

    # End
    "end_stone_bricks",
    "end_stone_brick_wall",
    "end_stone_brick_stairs",
    "end_stone_brick_slab",

    # Prismarine variants
    "prismarine_bricks_stairs",
    "prismarine_bricks_slab",
    "dark_prismarine_stairs",
    "dark_prismarine_slab",

    # Quartz
    "quartz_bricks",
    "quartz_pillar",
    "smooth_quartz",
    "chiseled_quartz_block",

    # Sandstone
    "red_sandstone",
    "smooth_sandstone",
    "smooth_red_sandstone",
    "chiseled_sandstone",
    "chiseled_red_sandstone",
    "cut_sandstone",
    "cut_red_sandstone",

    # Terracotta
    "terracotta",
    "white_terracotta",
    "orange_terracotta",
    "magenta_terracotta",
    "light_blue_terracotta",
    "yellow_terracotta",
    "lime_terracotta",
    "pink_terracotta",
    "gray_terracotta",
    "light_gray_terracotta",
    "cyan_terracotta",
    "purple_terracotta",
    "blue_terracotta",
    "brown_terracotta",
    "green_terracotta",
    "red_terracotta",
    "black_terracotta",

    # Glazed Terracotta
    "white_glazed_terracotta",
    "orange_glazed_terracotta",
    "magenta_glazed_terracotta",
    "light_blue_glazed_terracotta",
    "yellow_glazed_terracotta",
    "lime_glazed_terracotta",
    "pink_glazed_terracotta",
    "gray_glazed_terracotta",
    "light_gray_glazed_terracotta",
    "cyan_glazed_terracotta",
    "purple_glazed_terracotta",
    "blue_glazed_terracotta",
    "brown_glazed_terracotta",
    "green_glazed_terracotta",
    "red_glazed_terracotta",
    "black_glazed_terracotta",

    # Concrete
    "white_concrete",
    "orange_concrete",
    "magenta_concrete",
    "light_blue_concrete",
    "yellow_concrete",
    "lime_concrete",
    "pink_concrete",
    "gray_concrete",
    "light_gray_concrete",
    "cyan_concrete",
    "purple_concrete",
    "blue_concrete",
    "brown_concrete",
    "green_concrete",
    "red_concrete",
    "black_concrete",

    # Concrete Powder
    "white_concrete_powder",
    "orange_concrete_powder",
    "magenta_concrete_powder",
    "light_blue_concrete_powder",
    "yellow_concrete_powder",
    "lime_concrete_powder",
    "pink_concrete_powder",
    "gray_concrete_powder",
    "light_gray_concrete_powder",
    "cyan_concrete_powder",
    "purple_concrete_powder",
    "blue_concrete_powder",
    "brown_concrete_powder",
    "green_concrete_powder",
    "red_concrete_powder",
    "black_concrete_powder",

    # Wool
    "white_wool",
    "orange_wool",
    "magenta_wool",
    "light_blue_wool",
    "yellow_wool",
    "lime_wool",
    "pink_wool",
    "gray_wool",
    "light_gray_wool",
    "cyan_wool",
    "purple_wool",
    "blue_wool",
    "brown_wool",
    "green_wool",
    "red_wool",
    "black_wool",

    # Carpet
    "white_carpet",
    "orange_carpet",
    "magenta_carpet",
    "light_blue_carpet",
    "yellow_carpet",
    "lime_carpet",
    "pink_carpet",
    "gray_carpet",
    "light_gray_carpet",
    "cyan_carpet",
    "purple_carpet",
    "blue_carpet",
    "brown_carpet",
    "green_carpet",
    "red_carpet",
    "black_carpet",

    # Stained Glass
    "white_stained_glass",
    "orange_stained_glass",
    "magenta_stained_glass",
    "light_blue_stained_glass",
    "yellow_stained_glass",
    "lime_stained_glass",
    "pink_stained_glass",
    "gray_stained_glass",
    "light_gray_stained_glass",
    "cyan_stained_glass",
    "purple_stained_glass",
    "blue_stained_glass",
    "brown_stained_glass",
    "green_stained_glass",
    "red_stained_glass",
    "black_stained_glass",

    # Glass
    "glass",
    "glass_pane",

    # Ice
    "ice",
    "packed_ice",
    "blue_ice",
    "frosted_ice",

    # Coral
    "tube_coral",
    "brain_coral",
    "bubble_coral",
    "fire_coral",
    "horn_coral",
    "dead_tube_coral",
    "dead_brain_coral",
    "dead_bubble_coral",
    "dead_fire_coral",
    "dead_horn_coral",

    # Coral Blocks
    "tube_coral_block",
    "brain_coral_block",
    "bubble_coral_block",
    "fire_coral_block",
    "horn_coral_block",
    "dead_tube_coral_block",
    "dead_brain_coral_block",
    "dead_bubble_coral_block",
    "dead_fire_coral_block",
    "dead_horn_coral_block",

    # 1.21.50 Pale Garden
    "pale_oak_fence",
    "pale_oak_fence_gate",
    "pale_oak_door",
    "pale_oak_trapdoor",
    "pale_oak_stairs",
    "pale_oak_slab",
    "pale_oak_pressure_plate",
    "pale_oak_button",
    "pale_oak_sign",

    # Misc decorative
    "flower_pot",
    "pot",
    "ladder",
    "cobweb",
    "soul_sand",
    "soul_soil",
    "basalt",
    "smooth_basalt",
]

def get_tavily_client():
    """Get Tavily client from environment variable"""
    api_key = os.environ.get('TAVILY_API_KEY')
    if not api_key:
        print("TAVILY_API_KEY environment variable not set")
        print("Please set it with: export TAVILY_API_KEY='your-key-here'")
        return None
    return TavilyClient(api_key=api_key)

def search_block_info(block_name, client):
    """Search for specific block information using Tavily"""
    try:
        query = f"Minecraft Bedrock {block_name} block properties hardness blast resistance"
        result = client.search(query, search_depth="basic", max_results=3)
        return result
    except Exception as e:
        print(f"Error searching for {block_name}: {e}")
        return None

def main():
    if not tavily_available:
        print("Error: tavily-python package not installed")
        print("Install it with: pip install tavily-python")
        return

    client = get_tavily_client()
    if not client:
        print("\nProceeding with manual list analysis without API verification...")

    print("=" * 70)
    print("Finding Missing Minecraft Bedrock Blocks")
    print("=" * 70)

    # Filter out existing blocks from our potential list
    missing_blocks = []

    for block in POTENTIAL_MISSING_BLOCKS:
        if block not in EXISTING_BLOCKS:
            missing_blocks.append(block)

    # Group by category
    natural = []
    building = []
    decorative = []

    for block in missing_blocks:
        block_lower = block.lower()
        if any(x in block_lower for x in ['ore', 'stone', 'dirt', 'sand', 'deepslate', 'ice', 'coral', 'soul', 'basalt']):
            natural.append(block)
        elif any(x in block_lower for x in ['bricks', 'slab', 'stairs', 'planks', 'polished', 'chiseled', 'concrete', 'terracotta', 'wool', 'carpet', 'glass']):
            building.append(block)
        else:
            decorative.append(block)

    print(f"\nTotal potential missing blocks: {len(missing_blocks)}")

    if natural:
        print("\n" + "=" * 70)
        print("[Natural Blocks]")
        print("=" * 70)
        for block in sorted(natural):
            print(f"  ✓ {block}")

    if building:
        print("\n" + "=" * 70)
        print("[Building Blocks]")
        print("=" * 70)
        for block in sorted(building):
            print(f"  ✓ {block}")

    if decorative:
        print("\n" + "=" * 70)
        print("[Decorative Blocks]")
        print("=" * 70)
        for block in sorted(decorative):
            print(f"  ✓ {block}")

    # Top recommendations for adding (unique and interesting blocks)
    print("\n" + "=" * 70)
    print("TOP RECOMMENDATIONS (Most Interesting/Missing)")
    print("=" * 70)

    recommendations = [
        "polished_deepslate",
        "chiseled_quartz_block",
        "cracked_stone_bricks",
        "waxed_copper_block",
        "smooth_quartz",
        "andesite_slab",
        "diorite_slab",
        "granite_slab",
        "end_stone_bricks",
        "prismarine_bricks_stairs",
    ]

    for block in recommendations:
        if block in missing_blocks:
            print(f"  ★ {block}")

    print("\n" + "=" * 70)

if __name__ == "__main__":
    main()
