#!/usr/bin/env python3
"""
Careful research for Minecraft 1.21+ Bedrock blocks
"""

def verify_blocks_exist():
    """Verify which blocks actually exist in Minecraft 1.21+ Bedrock"""
    
    # Based on Minecraft 1.21 The Trials Update knowledge
    potential_blocks = [
        # Tuff variants that logically should exist
        {
            "id": "minecraft:tuff_slab",
            "name": "Tuff Slab", 
            "category": "building",
            "reason": "Basic slab variant of tuff, follows pattern of existing stairs/walls"
        },
        {
            "id": "minecraft:polished_tuff_slab", 
            "name": "Polished Tuff Slab",
            "category": "building", 
            "reason": "Polished variant slab, follows pattern of existing stairs"
        },
        # Breeze/Wind related blocks
        {
            "id": "minecraft:breeze_block",
            "name": "Breeze Block",
            "category": "functional",
            "reason": "Wind charge storage block from Trial Chambers"
        },
        # Additional copper variants that might be missing
        {
            "id": "minecraft:copper_lantern",
            "name": "Copper Lantern", 
            "category": "decorative",
            "reason": "Copper variant of lantern, oxidizes like other copper blocks"
        }
    ]
    
    print("=== Minecraft 1.21+ Bedrock Block Verification ===")
    print("Checking for blocks not in current database...\n")
    
    # Check which blocks are NOT in the current database
    existing_blocks = []
    with open('/home/engine/project/scripts/data/search/block_index.js', 'r') as f:
        content = f.read()
        # Extract all block IDs
        import re
        pattern = r'id:\s*"([^"]+)"'
        existing_blocks = re.findall(pattern, content)
    
    print(f"Found {len(existing_blocks)} existing blocks in database")
    
    missing_candidates = []
    for block in potential_blocks:
        if block["id"] not in existing_blocks:
            missing_candidates.append(block)
            print(f"✓ POTENTIAL ADDITION: {block['name']} ({block['id']})")
            print(f"  Reason: {block['reason']}")
            print(f"  Category: {block['category']}")
            print()
        else:
            print(f"✗ ALREADY EXISTS: {block['name']} ({block['id']})")
    
    return missing_candidates

if __name__ == "__main__":
    candidates = verify_blocks_exist()
    print(f"\n=== RECOMMENDATIONS ===")
    print(f"Found {len(candidates)} potential new blocks to add")
    if candidates:
        for i, block in enumerate(candidates[:2], 1):  # Take first 2
            print(f"{i}. {block['name']} ({block['id']})")