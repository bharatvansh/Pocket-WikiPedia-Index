#!/usr/bin/env python3
"""
Use Tavily to research Minecraft Bedrock items that aren't in the wiki yet
"""

import os
from tavily import TavilyClient

def research_minecraft_items():
    """Research Minecraft Bedrock items using Tavily"""

    # Initialize Tavily client
    api_key = os.getenv('TAVILY_API_KEY')
    if not api_key:
        print("Warning: TAVILY_API_KEY not found. Using fallback research.")
        return research_fallback()

    client = TavilyClient(api_key=api_key)

    # Search for Minecraft Bedrock items not yet in the database
    search_queries = [
        "Minecraft Bedrock Edition unique items list complete 2024",
        "Minecraft 1.21 Bedrock all new items trial chambers update",
        "Minecraft BedrockEdition wind charge mace resin clump detailed info",
        "Minecraft Bedrock Edition crafting items list complete",
        "Minecraft Bedrock Edition special items chorus fruit chorus flower"
    ]

    results = {}

    for query in search_queries:
        print(f"Searching: {query}")
        try:
            search_result = client.search(query, max_results=5)
            results[query] = search_result
            print(f"✓ Found {len(search_result.get('results', []))} results")

            # Print key information from results
            for i, result in enumerate(search_result.get('results', [])[:2], 1):
                print(f"  {i}. {result.get('title', 'No title')}")
                print(f"     {result.get('url', 'No URL')}")
                print()
        except Exception as e:
            print(f"✗ Error searching: {e}")
            results[query] = {"error": str(e)}

    return results

def research_fallback():
    """Fallback research without Tavily API"""
    print("Using fallback research method...")

    # Items that might not be in the database yet (need to check)
    potential_items = [
        {
            "id": "minecraft:chorus_flower",
            "name": "Chorus Flower",
            "category": "materials",
            "verified": False,
            "source": "End dimension material"
        },
        {
            "id": "minecraft:chorus_fruit",
            "name": "Chorus Fruit",
            "category": "consumables",
            "verified": False,
            "source": "End dimension teleportation food"
        },
        {
            "id": "minecraft:dragon_egg",
            "name": "Dragon Egg",
            "category": "misc",
            "verified": False,
            "source": "End dimension trophy"
        },
        {
            "id": "minecraft:totem_of_undying",
            "name": "Totem of Undying",
            "category": "misc",
            "verified": False,
            "source": "Evoker drop"
        },
        {
            "id": "minecraft:nautilus_shell",
            "name": "Nautilus Shell",
            "category": "materials",
            "verified": False,
            "source": "Fishing and buried treasure"
        },
        {
            "id": "minecraft:prismarine_shard",
            "name": "Prismarine Shard",
            "category": "materials",
            "verified": False,
            "source": "Ocean monument drops"
        },
        {
            "id": "minecraft:prismarine_crystals",
            "name": "Prismarine Crystals",
            "category": "materials",
            "verified": False,
            "source": "Ocean monument drops"
        },
        {
            "id": "minecraft:shulker_shell",
            "name": "Shulker Shell",
            "category": "materials",
            "verified": False,
            "source": "Shulker drops"
        },
        {
            "id": "minecraft:phantom_membrane",
            "name": "Phantom Membrane",
            "category": "materials",
            "verified": False,
            "source": "Phantom drops"
        },
        {
            "id": "minecraft:blaze_rod",
            "name": "Blaze Rod",
            "category": "materials",
            "verified": False,
            "source": "Blaze drops"
        },
        {
            "id": "minecraft:ghast_tear",
            "name": "Ghast Tear",
            "category": "materials",
            "verified": False,
            "source": "Ghast drops"
        },
        {
            "id": "minecraft:magma_cream",
            "name": "Magma Cream",
            "category": "materials",
            "verified": False,
            "source": "Magma cube drops"
        }
    ]

    return potential_items

if __name__ == "__main__":
    results = research_minecraft_items()
    print("\n=== RESEARCH RESULTS ===")
    print(results)
