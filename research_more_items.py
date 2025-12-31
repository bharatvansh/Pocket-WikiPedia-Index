#!/usr/bin/env python3
"""Research more Minecraft Bedrock 1.21+ items using Tavily"""

import os
from tavily import TavilyClient

# Initialize Tavily client
api_key = os.environ.get('tavilyApiKey')
client = TavilyClient(api_key=api_key)

print("=" * 80)
print("Researching Breeze Rod (Minecraft Bedrock 1.21)")
print("=" * 80)
breeze_rod_result = client.search(
    query="Breeze Rod Minecraft Bedrock 1.21 crafting uses stats item",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Breeze Rod:")
for i, result in enumerate(breeze_rod_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:600]}...")

print("\n" + "=" * 80)
print("Researching Copper Grate (Minecraft Bedrock 1.21)")
print("=" * 80)
copper_grate_result = client.search(
    query="Copper Grate Minecraft Bedrock 1.21 crafting uses properties block",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Copper Grate:")
for i, result in enumerate(copper_grate_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:600]}...")

print("\n" + "=" * 80)
print("Researching Chiseled Copper (Minecraft Bedrock 1.21)")
print("=" * 80)
chiseled_copper_result = client.search(
    query="Chiseled Copper Minecraft Bedrock 1.21 crafting uses decorative block",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Chiseled Copper:")
for i, result in enumerate(chiseled_copper_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:600]}...")

print("\n" + "=" * 80)
print("Researching Ominous Bottle (Minecraft Bedrock 1.21)")
print("=" * 80)
ominous_bottle_result = client.search(
    query="Ominous Bottle Minecraft Bedrock 1.21 crafting uses raid omen Bad Omen effect",
    search_depth="advanced",
    max_results=10
)
print("\nResults for Ominous Bottle:")
for i, result in enumerate(ominous_bottle_result['results'][:5], 1):
    print(f"\n{i}. {result['title']}")
    print(f"   URL: {result['url']}")
    print(f"   Content: {result['content'][:600]}...")
