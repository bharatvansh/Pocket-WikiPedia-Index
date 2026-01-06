#!/usr/bin/env python3
"""
Research script to find unique Minecraft Bedrock blocks using Tavily
"""

import os
from tavily import TavilyClient

def main():
    # Initialize Tavily client
    api_key = os.environ.get("TAVILY_API_KEY")
    if not api_key:
        print("Error: TAVILY_API_KEY not set")
        return
    
    client = TavilyClient(api_key=api_key)
    
    # Research queries for Minecraft Bedrock blocks
    queries = [
        "Minecraft Bedrock chiseled copper block properties stats hardness blast resistance 1.21",
        "Minecraft Bedrock weathered copper bulb block light level properties stats",
        "Minecraft Bedrock tuff brick slab block properties hardness mining tool"
    ]
    
    print("=== Minecraft Bedrock Block Research ===\n")
    
    for query in queries:
        print(f"Researching: {query}")
        print("-" * 80)
        
        try:
            # Search with Tavily
            response = client.search(
                query=query,
                search_depth="advanced",
                max_results=5
            )
            
            print(f"\nAnswer: {response.get('answer', 'No answer available')}\n")
            
            # Print top results
            for i, result in enumerate(response.get('results', [])[:3], 1):
                print(f"{i}. {result.get('title', 'No title')}")
                print(f"   {result.get('url', 'No URL')}")
                print(f"   {result.get('content', 'No content')[:200]}...")
                print()
            
        except Exception as e:
            print(f"Error searching: {e}")
        
        print("=" * 80)
        print()

if __name__ == "__main__":
    main()
