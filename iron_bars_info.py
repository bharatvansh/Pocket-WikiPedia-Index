import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
client = TavilyClient(api_key=api_key)

# Get iron bars info as reference
query = "site:minecraft.wiki \"Iron Bars\" hardness blast resistance"
print(f"Searching: {query}")
result = client.search(query, search_depth="advanced", max_results=3)
for i, item in enumerate(result['results'], 1):
    print(f"\n{'='*80}")
    print(f"{i}. {item['title']}")
    print(f"{'='*80}")
    print(f"{item['content'][:1500]}...")
