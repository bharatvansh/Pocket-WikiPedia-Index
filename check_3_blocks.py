#!/usr/bin/env python3
"""Check character counts for our 3 new blocks"""

import re

# Check Polished Deepslate and Cracked Stone Bricks
with open('/home/engine/project/scripts/data/providers/blocks/natural/stone.js', 'r') as f:
    content = f.read()
    match = re.search(r'"minecraft:polished_deepslate".*?description: "(.*?)"', content, re.DOTALL)
    if match:
        desc = match.group(1).replace('\n', ' ').strip()
        print(f"Polished Deepslate: {len(desc)} characters")
        if len(desc) > 600:
            print("  ⚠️ EXCEEDS LIMIT")
        print(f"  {desc[:80]}...\n")

    match = re.search(r'"minecraft:cracked_stone_bricks".*?description: "(.*?)"', content, re.DOTALL)
    if match:
        desc = match.group(1).replace('\n', ' ').strip()
        print(f"Cracked Stone Bricks: {len(desc)} characters")
        if len(desc) > 600:
            print("  ⚠️ EXCEEDS LIMIT")
        print(f"  {desc[:80]}...\n")

# Check Chiseled Quartz Block
with open('/home/engine/project/scripts/data/providers/blocks/building/bricks.js', 'r') as f:
    content = f.read()
    match = re.search(r'"minecraft:chiseled_quartz_block".*?description: "(.*?)"', content, re.DOTALL)
    if match:
        desc = match.group(1).replace('\n', ' ').strip()
        print(f"Chiseled Quartz Block: {len(desc)} characters")
        if len(desc) > 600:
            print("  ⚠️ EXCEEDS LIMIT")
        print(f"  {desc[:80]}...\n")
