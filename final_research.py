#!/usr/bin/env python3
import os
from tavily import TavilyClient

# Use the API key from environment
api_key = os.getenv('tavilyApiKey')
if not api_key:
    print("Error: tavilyApiKey environment variable not found")
    exit(1)

client = TavilyClient(api_key=api_key)

print("=== Final Verification for 3 New Blocks ===\n")

# Get detailed info on the three blocks I plan to add
queries = [
    "minecraft:heavy_core exact ID properties blast resistance hardness 1.21 Bedrock",
    "minecraft:pale_hanging_moss exact block name ID Pale Garden 1.20.5 Bedrock",
    "minecraft:potted_pale_oak_sapling block properties crafting 1.20.5",
    "minecraft:chiseled_tuff block properties crafting generation 1.21"
]

for i, query in enumerate(queries):
    print(f"{i+1}. {query}")
    print("-" * 60)
    
    response = client.search(query, max_results=5, search_depth="advanced")
    
    for j, result in enumerate(response['results']):
        if j < 2:  # Show top 2 results
            print(f"\nResult {j+1}:")
            print(f"Title: {result['title']}")
            print(f"URL: {result['url']}")
            print(f"Content: {result['content'][:300]}...")
    
    print("\n")