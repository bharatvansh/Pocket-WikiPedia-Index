import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
client = TavilyClient(api_key=api_key)

# Get detailed information about these blocks
queries = [
    "Copper Torch Minecraft Bedrock hardness blast resistance light level properties",
    "Copper Bars Minecraft Bedrock hardness blast resistance crafting recipe",
    "Copper Lantern Minecraft Bedrock hardness blast resistance light level crafting"
]

for query in queries:
    print(f"\n{'='*80}")
    print(f"Searching: {query}")
    print('='*80)
    result = client.search(query, search_depth="advanced", max_results=3)
    for i, item in enumerate(result['results'], 1):
        print(f"\n{i}. {item['title']}")
        print(f"   {item['content'][:1000]}...")
