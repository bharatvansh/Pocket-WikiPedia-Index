#!/usr/bin/env python3
import os
from tavily import TavilyClient

# Use the API key from environment
api_key = os.getenv('tavilyApiKey')
if not api_key:
    print("Error: tavilyApiKey environment variable not found")
    exit(1)

client = TavilyClient(api_key=api_key)

# Specific questions about 1.21 blocks we need
queries = [
    "minecraft:heavy_core block properties hardness blast resistance drops 1.21",
    "minecraft:pale_hanging_moss block Pale Garden biome generation 1.20.5",
    "minecraft:tuff_bricks block properties crafting generation 1.21",
    "Minecraft Bedrock 1.21 decorative blocks tuff blocks variants"
]

print("=== Researching Specific Minecraft 1.21+ Blocks ===\n")

for i, query in enumerate(queries):
    print(f"{i+1}. {query}")
    print("-" * 50)
    
    response = client.search(query, max_results=3)
    
    for j, result in enumerate(response['results']):
        print(f"\nResult {j+1}:")
        print(f"Title: {result['title']}")
        print(f"URL: {result['url']}")
        print(f"Content: {result['content'][:500]}...")
    
    print("\n")