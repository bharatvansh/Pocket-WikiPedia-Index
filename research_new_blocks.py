#!/usr/bin/env python3
import os
from tavily import TavilyClient

# Use the API key from environment
api_key = os.getenv('tavilyApiKey')
if not api_key:
    print("Error: tavilyApiKey environment variable not found")
    exit(1)

client = TavilyClient(api_key=api_key)

print("=== Researching New Minecraft 1.21 Bedrock Blocks ===\n")

# Research specific 1.21 blocks
queries = [
    "Minecraft 1.21 Bedrock complete list new blocks trial chambers",
    "minecraft:chiseled_tuff block properties crafting generation",
    "minecraft:heavy_core uses crafting recipe properties",
    "minecraft:potted_pale_oak_sapling Pale Garden plants 1.20.5",
    "minecraft:trim_tuff block decorative variants 1.21"
]

for i, query in enumerate(queries):
    print(f"{i+1}. {query}")
    print("-" * 60)
    
    response = client.search(query, max_results=4, search_depth="advanced")
    
    for j, result in enumerate(response['results']):
        print(f"\nResult {j+1}:")
        print(f"Title: {result['title']}")
        print(f"URL: {result['url']}")
        print(f"Content: {result['content'][:400]}...")
    
    print("\n")