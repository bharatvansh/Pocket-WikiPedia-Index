#!/usr/bin/env python3
"""
Final detailed research for the 3 blocks we'll add
"""

import os
from tavily import TavilyClient
import json

def main():
    api_key = os.environ.get("TAVILY_API_KEY")
    if not api_key:
        print("Error: TAVILY_API_KEY not set")
        return
    
    client = TavilyClient(api_key=api_key)
    
    blocks = [
        {
            "id": "minecraft:tuff_brick_slab",
            "name": "Tuff Brick Slab",
            "queries": [
                "Minecraft Bedrock tuff brick slab hardness 1.5 blast resistance 6 crafting recipe",
                "tuff brick slab Minecraft properties uses building decoration"
            ]
        },
        {
            "id": "minecraft:waxed_weathered_copper_bulb",
            "name": "Waxed Weathered Copper Bulb",
            "queries": [
                "Minecraft Bedrock waxed weathered copper bulb light level 8 redstone properties",
                "waxed weathered copper bulb Minecraft stats hardness crafting honeycomb"
            ]
        },
        {
            "id": "minecraft:exposed_chiseled_copper",
            "name": "Exposed Chiseled Copper",
            "queries": [
                "Minecraft Bedrock exposed chiseled copper hardness 3 blast resistance 6 crafting",
                "exposed chiseled copper Minecraft properties oxidation decorative"
            ]
        }
    ]
    
    for block in blocks:
        print("\n" + "="*100)
        print(f"BLOCK: {block['name']} ({block['id']})")
        print("="*100)
        
        all_content = []
        
        for query in block['queries']:
            print(f"\n>>> Query: {query}")
            try:
                response = client.search(
                    query=query,
                    search_depth="advanced",
                    max_results=3
                )
                
                answer = response.get('answer', '')
                if answer:
                    print(f"Answer: {answer}")
                    all_content.append(answer)
                
                for result in response.get('results', [])[:3]:
                    content = result.get('content', '')[:300]
                    all_content.append(content)
                    print(f"  • {result.get('title')}")
                    print(f"    {content}...")
                    
            except Exception as e:
                print(f"Error: {e}")
        
        print(f"\n{'='*100}")
        print(f"SUMMARY for {block['name']}:")
        print(f"{'='*100}")
        print("\n".join(all_content[:5]))
        print("\n")

if __name__ == "__main__":
    main()
