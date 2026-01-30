import sys

filepath = "/home/engine/project/scripts/data/search/block_index.js"
with open(filepath, "r") as f:
    content = f.read()

insert_pos = content.rfind("    }")
if insert_pos == -1:
    print("Could not find insertion point")
    sys.exit(1)

new_entries = """,
    {
        id: "minecraft:acacia_hanging_sign",
        name: "Acacia Hanging Sign",
        category: "block",
        icon: "textures/blocks/hanging_sign_acacia",
        themeColor: "§6" // orange
    },
    {
        id: "minecraft:bamboo_mosaic_slab",
        name: "Bamboo Mosaic Slab",
        category: "block",
        icon: "textures/blocks/bamboo_mosaic",
        themeColor: "§e" // yellow
    },
    {
        id: "minecraft:cherry_button",
        name: "Cherry Button",
        category: "block",
        icon: "textures/blocks/cherry_button",
        themeColor: "§d" // light purple
    }"""

new_content = content[:insert_pos + 5] + new_entries + content[insert_pos + 5:]

with open(filepath, "w") as f:
    f.write(new_content)
