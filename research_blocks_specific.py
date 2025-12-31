import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
client = TavilyClient(api_key=api_key)

# Get more specific details
queries = [
    "Copper Lantern crafting recipe Bedrock Edition 1.21 copper nugget",
    "Copper Bars crafting recipe Bedrock Edition 1.21 oxidation stages"
]

for query in queries:
    print(f"\n{'='*80}")
    print(f"Searching: {query}")
    print('='*80)
    result = client.search(query, search_depth="advanced", max_results=3)
    for i, item in enumerate(result['results'], 1):
        print(f"\n{i}. {item['title']}")
        print(f"   {item['content'][:1200]}...")
