#!/usr/bin/env python3
"""
Find blocks that might be missing from the index
"""

import os
from tavily import TavilyClient

def main():
    api_key = os.environ.get("TAVILY_API_KEY")
    if not api_key:
        print("Error: TAVILY_API_KEY not set")
        return
    
    client = TavilyClient(api_key=api_key)
    
    # Search for comprehensive lists of 1.21 blocks
    query = "Complete list all Minecraft Bedrock Edition 1.21 1.21.50 new blocks tuff brick slab waxed copper chiseled"
    
    print("=== Researching Complete 1.21 Block List ===\n")
    
    try:
        response = client.search(
            query=query,
            search_depth="advanced",
            max_results=5
        )
        
        print(f"ANSWER: {response.get('answer', 'No answer')}\n")
        
        for i, result in enumerate(response.get('results', [])[:5], 1):
            print(f"\n{i}. {result.get('title', 'No title')}")
            print(f"   URL: {result.get('url', 'No URL')}")
            print(f"   {result.get('content', 'No content')[:500]}...")
        
    except Exception as e:
        print(f"Error: {e}")
    
    # Now research specific blocks
    print("\n\n" + "="*80)
    print("=== Researching Specific Blocks ===")
    print("="*80 + "\n")
    
    specific_blocks = [
        "Minecraft Bedrock tuff brick slab exact stats hardness crafting",
        "Minecraft Bedrock waxed weathered copper bulb light level stats",
        "Minecraft Bedrock exposed chiseled copper block stats properties"
    ]
    
    for query in specific_blocks:
        print(f"\nQuery: {query}")
        print("-" * 80)
        try:
            response = client.search(query=query, max_results=3)
            answer = response.get('answer', 'No answer')
            print(f"Answer: {answer}")
            
            for result in response.get('results', [])[:2]:
                print(f"  - {result.get('title')}: {result.get('content')[:200]}...")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    main()
