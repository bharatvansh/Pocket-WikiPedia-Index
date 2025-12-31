import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
client = TavilyClient(api_key=api_key)

# Get detailed information about copper torch
query = "Copper Torch Minecraft Bedrock block hardness blast resistance light level recipe crafting"
print(f"Searching: {query}")
result = client.search(query, search_depth="advanced", max_results=5)
for i, item in enumerate(result['results'], 1):
    print(f"\n{'='*80}")
    print(f"{i}. {item['title']}")
    print(f"{'='*80}")
    print(f"{item['content'][:1500]}...")
