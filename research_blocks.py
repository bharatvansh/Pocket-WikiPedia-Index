import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
if not api_key:
    print("Error: tavilyApiKey environment variable not set")
    exit(1)

client = TavilyClient(api_key=api_key)

# Search for Minecraft Bedrock 1.21+ blocks
query = """
Minecraft Bedrock Edition 1.21 new blocks unique crafting decorative functional
trial chambers update copper tuff chiseled crafter vault trial spawner
"""

result = client.search(query, search_depth="advanced", max_results=10)
print("Search Results:")
print("=" * 80)
for i, item in enumerate(result['results'], 1):
    print(f"\n{i}. {item['title']}")
    print(f"   URL: {item['url']}")
    print(f"   Content: {item['content'][:500]}...")
    print("-" * 80)
