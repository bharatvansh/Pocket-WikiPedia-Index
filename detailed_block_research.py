#!/usr/bin/env python3
"""
Detailed research for specific Minecraft Bedrock blocks
"""

import os
from tavily import TavilyClient

def main():
    api_key = os.environ.get("TAVILY_API_KEY")
    if not api_key:
        print("Error: TAVILY_API_KEY not set")
        return
    
    client = TavilyClient(api_key=api_key)
    
    # Research specific blocks
    blocks = [
        {
            "name": "Chiseled Copper",
            "query": "Minecraft Bedrock chiseled copper block exact hardness blast resistance mining tool crafting recipe"
        },
        {
            "name": "Weathered Copper Bulb",
            "query": "Minecraft Bedrock weathered copper bulb exact light level hardness blast resistance redstone behavior"
        },
        {
            "name": "Tuff Brick Slab",
            "query": "Minecraft Bedrock tuff brick slab exact hardness blast resistance crafting recipe usage"
        }
    ]
    
    print("=== Detailed Block Research ===\n")
    
    for block in blocks:
        print(f"\n{'='*80}")
        print(f"BLOCK: {block['name']}")
        print(f"{'='*80}\n")
        
        try:
            response = client.search(
                query=block['query'],
                search_depth="advanced",
                max_results=5
            )
            
            answer = response.get('answer', 'No answer available')
            print(f"SUMMARY:\n{answer}\n")
            
            print("SOURCES:")
            for i, result in enumerate(response.get('results', [])[:5], 1):
                print(f"\n{i}. {result.get('title', 'No title')}")
                print(f"   URL: {result.get('url', 'No URL')}")
                content = result.get('content', 'No content')
                print(f"   Content: {content[:400]}...")
            
        except Exception as e:
            print(f"Error: {e}")
        
        print("\n")

if __name__ == "__main__":
    main()
