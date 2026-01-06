#!/usr/bin/env python3
"""Check character counts of descriptions"""

import re

with open('/home/engine/project/scripts/data/providers/blocks/natural/stone.js', 'r') as f:
    content = f.read()

# Find all descriptions
pattern = r'description: "(.*?)"'
matches = re.findall(pattern, content)

print("Description character counts:")
print("=" * 60)
for i, desc in enumerate(matches, 1):
    print(f"{i}. Length: {len(desc)} characters")
    if len(desc) > 600:
        print(f"   ⚠️  EXCEEDS 600 CHARACTER LIMIT!")
    if i <= 3:
        print(f"   Preview: {desc[:100]}...")
    print()

with open('/home/engine/project/scripts/data/providers/blocks/building/bricks.js', 'r') as f:
    content = f.read()

matches = re.findall(pattern, content)

print("\nBricks.js descriptions:")
print("=" * 60)
for i, desc in enumerate(matches, 1):
    print(f"{i}. Length: {len(desc)} characters")
    if len(desc) > 600:
        print(f"   ⚠️  EXCEEDS 600 CHARACTER LIMIT!")
    print(f"   Preview: {desc[:100]}...")
    print()
