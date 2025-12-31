import os
from tavily import TavilyClient

api_key = os.environ.get("tavilyApiKey")
client = TavilyClient(api_key=api_key)

# Final research to get specific values
blocks = [
    ("Copper Bars", "Copper Bars Minecraft Bedrock hardness blast resistance tool required pickaxe recipe"),
    ("Copper Lantern", "Copper Lantern Minecraft Bedrock hardness blast resistance luminance light level 15"),
]

for block_name, query in blocks:
    print(f"\n{'='*80}")
    print(f"Researching: {block_name}")
    print('='*80)
    result = client.search(query, search_depth="advanced", max_results=3)
    for i, item in enumerate(result['results'], 1):
        print(f"\n{i}. {item['title']}")
        print(f"   URL: {item['url']}")
        content = item['content'][:1500]
        # Look for hardness and blast resistance
        if 'Hardness' in content or 'hardness' in content:
            print(f"   [Contains hardness info]")
        if 'Blast resistance' in content or 'blast resistance' in content:
            print(f"   [Contains blast resistance info]")
        print(f"   {content}...")
        print("-" * 80)
