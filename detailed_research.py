#!/usr/bin/env python3
import os
from tavily import TavilyClient

# Use the API key from environment
api_key = os.getenv('tavilyApiKey')
if not api_key:
    print("Error: tavilyApiKey environment variable not found")
    exit(1)

client = TavilyClient(api_key=api_key)

blocks_to_research = [
    "minecraft:heavy_core",
    "minecraft:armadillo_scute_block", 
    "minecraft:pale_hanging_moss",
    "minecraft:bogged"
]

print("Researching 1.21+ Minecraft Bedrock blocks...")
print("=" * 80)

queries = [
    "Minecraft 1.21 Bedrock heavy core block features properties statistics loot",
    "Minecraft 1.21 armadillo scute block armadillo Minecraft Bedrock Edition",
    "Pale Garden pale hanging moss block Minecraft Bedrock 1.20.5",
    "Minecraft 1.21 spooky blocks pale garden new vegetation"
]

for i, query in enumerate(queries):
    print(f"\n{i+1}. Query: {query}")
    print("-" * 50)
    response = client.search(query, max_results=3, search_depth="advanced")
    
    for j, result in enumerate(response['results']):
        print(f"\nResult {j+1}:")
        print(f"Title: {result['title']}")
        print(f"URL: {result['url']}")
        print(f"Content: {result['content'][:400]}...")

print("\n" + "=" * 80)
print("Research complete!")