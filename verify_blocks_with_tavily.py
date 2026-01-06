#!/usr/bin/env python3
"""
Verify specific Minecraft Bedrock blocks using Tavily API
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

# Blocks to verify
BLOCKS_TO_VERIFY = [
    "polished_deepslate",
    "chiseled_quartz_block",
    "cracked_stone_bricks"
]

def get_tavily_client():
    """Get Tavily client from environment variable"""
    api_key = os.environ.get('TAVILY_API_KEY')
    if not api_key:
        print("TAVILY_API_KEY environment variable not set")
        print("Please set it with: export TAVILY_API_KEY='your-key-here'")
        return None
    return TavilyClient(api_key=api_key)

def search_block_details(block_name, client):
    """Search for specific block details using Tavily"""
    try:
        query = f"Minecraft Bedrock {block_name} block hardness blast resistance flammability mining tool"
        print(f"\n{'='*70}")
        print(f"Searching: {query}")
        print('='*70)
        result = client.search(query, search_depth="advanced", max_results=5)

        if result and 'results' in result:
            print(f"\nFound {len(result['results'])} results:")
            for i, item in enumerate(result['results'], 1):
                print(f"\n--- Result {i} ---")
                print(f"Title: {item.get('title', 'N/A')}")
                print(f"URL: {item.get('url', 'N/A')}")
                print(f"Content Preview: {item.get('content', 'N/A')[:500]}...")
        return result
    except Exception as e:
        print(f"Error searching for {block_name}: {e}")
        return None

def extract_block_stats(content):
    """Extract block stats from content"""
    stats = {}

    # Look for hardness
    hardness_pattern = r'hardness[:\s]*(\d+\.?\d*)'
    hardness_match = re.search(hardness_pattern, content.lower())
    if hardness_match:
        stats['hardness'] = float(hardness_match.group(1))

    # Look for blast resistance
    blast_pattern = r'blast.?resistance[:\s]*(\d+\.?\d*)'
    blast_match = re.search(blast_pattern, content.lower())
    if blast_match:
        stats['blastResistance'] = float(blast_match.group(1))

    # Look for flammability
    if 'flammable' in content.lower() or 'burns' in content.lower():
        stats['flammable'] = True
    elif 'not flammable' in content.lower() or 'fire resistant' in content.lower():
        stats['flammable'] = False

    # Look for tool requirements
    tools = ['pickaxe', 'axe', 'shovel', 'hoe']
    for tool in tools:
        if tool in content.lower():
            stats['tool'] = tool.capitalize()
            break

    return stats

def main():
    if not tavily_available:
        print("Error: tavily-python package not installed")
        return

    client = get_tavily_client()
    if not client:
        return

    print("=" * 70)
    print("Verifying Minecraft Bedrock Block Details")
    print("=" * 70)

    results = {}

    for block in BLOCKS_TO_VERIFY:
        result = search_block_details(block, client)
        results[block] = result

    # Summary
    print("\n" + "=" * 70)
    print("VERIFICATION SUMMARY")
    print("=" * 70)

    for block in BLOCKS_TO_VERIFY:
        if results[block] and 'results' in results[block]:
            print(f"\n✓ {block}: Verified - Found information")
        else:
            print(f"\n✗ {block}: Unable to verify")

if __name__ == "__main__":
    main()
