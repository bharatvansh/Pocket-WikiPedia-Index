import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
client = TavilyClient(api_key=api_key)

# Search for specific copper blocks in Bedrock 1.21
blocks_to_research = [
    "Copper Torch Minecraft Bedrock 1.21",
    "Copper Bars Minecraft Bedrock 1.21",
    "Copper Lantern Minecraft Bedrock 1.21",
]

for query in blocks_to_research:
    print(f"\n{'='*80}")
    print(f"Searching: {query}")
    print('='*80)
    result = client.search(query, search_depth="advanced", max_results=3)
    for i, item in enumerate(result['results'], 1):
        print(f"\n{i}. {item['title']}")
        print(f"   {item['content'][:800]}...")
