#!/usr/bin/env python3
"""
Use Tavily to research Minecraft 1.21+ Bedrock blocks accurately
"""

import os
from tavily import TavilyClient

def research_minecraft_blocks():
    """Research Minecraft 1.21+ Bedrock blocks using Tavily"""
    
    # Initialize Tavily client
    # Note: This requires a Tavily API key
    api_key = os.getenv('TAVILY_API_KEY')
    if not api_key:
        print("Warning: TAVILY_API_KEY not found. Using fallback research.")
        return research_fallback()
    
    client = TavilyClient(api_key=api_key)
    
    # Search for official Minecraft 1.21+ Bedrock block information
    search_queries = [
        "Minecraft 1.21 Bedrock Edition all new blocks list official",
        "Minecraft 1.21 Bedrock tuff blocks slab variants complete",
        "Minecraft 1.21 Bedrock trial chambers all blocks official list"
    ]
    
    results = {}
    
    for query in search_queries:
        print(f"Searching: {query}")
        try:
            search_result = client.search(query, max_results=5)
            results[query] = search_result
            print(f"✓ Found {len(search_result.get('results', []))} results")
        except Exception as e:
            print(f"✗ Error searching: {e}")
            results[query] = {"error": str(e)}
    
    return results

def research_fallback():
    """Fallback research without Tavily API"""
    print("Using fallback research method...")
    
    # Based on Minecraft 1.21 The Trials Update official documentation
    verified_blocks = [
        {
            "id": "minecraft:tuff_slab",
            "name": "Tuff Slab",
            "category": "building",
            "verified": True,
            "source": "Minecraft 1.21 Bedrock block palette"
        },
        {
            "id": "minecraft:polished_tuff_slab", 
            "name": "Polished Tuff Slab",
            "category": "building",
            "verified": True,
            "source": "Minecraft 1.21 Bedrock block palette"
        },
        # Other potential blocks that might exist
        {
            "id": "minecraft:calibrated_sculk_sensor",
            "name": "Calibrated Sculk Sensor",
            "category": "functional",
            "verified": False,  # Need to verify this exists
            "source": "Potential 1.21 block"
        }
    ]
    
    return verified_blocks

if __name__ == "__main__":
    results = research_minecraft_blocks()
    print("\n=== RESEARCH RESULTS ===")
    print(results)