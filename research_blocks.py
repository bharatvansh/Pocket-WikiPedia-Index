#!/usr/bin/env python3
import os
from tavily import TavilyClient

# Use the API key from environment
api_key = os.getenv('tavilyApiKey')
if not api_key:
    print("Error: tavilyApiKey environment variable not found")
    exit(1)

client = TavilyClient(api_key=api_key)

# Research Minecraft 1.21 blocks using tavily
query = "Minecraft 1.21 Bedrock Edition new blocks changelog vault trial spawner copper bulb"
response = client.search(query, max_results=5)

print("Search results for:", query)
print("=" * 60)
for result in response['results']:
    print(f"Title: {result['title']}")
    print(f"URL: {result['url']}")
    print(f"Content: {result['content'][:300]}...")
    print("-" * 40)