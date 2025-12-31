#!/usr/bin/env python3
"""Research Minecraft Bedrock 1.21+ items using Tavily"""

import os
from tavily import TavilyClient

# Initialize Tavily client with API key from environment
api_key = os.environ.get('tavilyApiKey')
if not api_key:
    print("Error: tavilyApiKey environment variable not set")
    exit(1)

client = TavilyClient(api_key=api_key)

print("=" * 80)
print("Researching Mace (Minecraft Bedrock 1.21)")
print("=" * 80)
mace_result = client.search(
    query="Mace weapon Minecraft Bedrock 1.21 Tricky Trials update stats crafting",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Mace:")
for i, result in enumerate(mace_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:500]}...")

print("\n" + "=" * 80)
print("Researching Ominous Bottle (Minecraft Bedrock 1.21)")
print("=" * 80)
ominous_result = client.search(
    query="Ominous Bottle Minecraft Bedrock 1.21 Tricky Trials raid omen effect crafting",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Ominous Bottle:")
for i, result in enumerate(ominous_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:500]}...")

print("\n" + "=" * 80)
print("Researching Wind Charge (Minecraft Bedrock 1.21)")
print("=" * 80)
wind_result = client.search(
    query="Wind Charge Minecraft Bedrock 1.21 Tricky Trials Breeze projectile stats crafting",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Wind Charge:")
for i, result in enumerate(wind_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:500]}...")

print("\n" + "=" * 80)
print("Researching Heavy Core (Minecraft Bedrock 1.21)")
print("=" * 80)
heavy_core_result = client.search(
    query="Heavy Core Minecraft Bedrock 1.21 Tricky Trials mace crafting item",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Heavy Core:")
for i, result in enumerate(heavy_core_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:500]}...")
