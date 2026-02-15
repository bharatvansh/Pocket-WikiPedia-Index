// Pocket Wikipedia Foundation - Glass Blocks Data
// ============================================
// This file contains: Glass, stained glass (all 16 colors),
// tinted glass, glass panes, stained glass panes (all 16 colors)
// ============================================

/**
 * Glass blocks data registry
 * @type {Object.<string, import('../../block_types').BlockDetails>}
 */
export const glassBlocks = {
    "minecraft:tinted_glass": {
        id: "minecraft:tinted_glass",
        name: "Tinted Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Tinted Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted from 1 glass and 4 amethyst shards"
        },
        description: "Tinted Glass is a unique decorative block that allows players to see through it while completely blocking light from passing through. Unlike regular or stained glass, tinted glass drops itself as an item when broken without needing the Silk Touch enchantment. This makes it highly versatile for builds requiring specific lighting conditions, such as mob farms, where players want to observe mobs without letting light inside. It is crafted by surrounding a single glass block with four amethyst shards. It cannot be crafted into glass panes."
    },
    "minecraft:glass": {
        id: "minecraft:glass",
        name: "Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Glass"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Sand x4 in Furnace, Ocean Monuments (glass panes)"
        },
        description: "Glass is a fundamental transparent building block crafted by smelting sand in a furnace. It serves as a versatile construction material that allows light to pass through while providing weather protection. Glass is essential for building greenhouses, windows, modern architecture, and underwater structures. While fragile with low hardness and blast resistance (0.3 each), glass can be crafted into glass panes for more efficient space usage and lighter visual weight. Glass blocks are non-flammable and provide complete visibility from both sides. They're perfect for creating bright, airy interiors and are especially valuable for farming setups, aquariums, and decorative lighting effects. In Bedrock Edition, glass drops itself when broken, making collection straightforward without the need for Silk Touch enchantment."
    },
    "minecraft:white_stained_glass": {
        id: "minecraft:white_stained_glass",
        name: "White Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["White Stained Glass (with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Glass x8 and White Dye"
        },
        description: "White Stained Glass is a transparent block created by surrounding a piece of White Dye with eight glass blocks. It retains the transparency of regular glass while adding a soft white tint, perfect for modern windows or decorative light filters. Like regular glass, it is fragile and requires a Silk Touch tool to be harvested; otherwise, it shatters when broken."
    },
    "minecraft:blue_stained_glass": {
        id: "minecraft:blue_stained_glass",
        name: "Blue Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:blue_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Blue Stained Glass is a transparent decorative block created by surrounding blue dye with eight glass blocks. It retains the transparency of regular glass while adding a rich blue tint. Notably in Bedrock Edition, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons in various architectural designs."
    },
    "minecraft:blue_stained_glass_pane": {
        id: "minecraft:blue_stained_glass_pane",
        name: "Blue Stained Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Blue Stained Glass Pane (with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Blue Stained Glass Panes are thin, transparent decorative blocks that provide a delicate alternative to full glass blocks. They are crafted by combining glass panes with blue dye or by crafting blue stained glass blocks into panes. They connect to adjacent blocks and other panes to form seamless, colorful windows. In Bedrock Edition, they offer excellent visibility while adding a rich blue tint to passing light. While they are fragile and require a tool with Silk Touch to be harvested, they are highly resource-efficient, providing sixteen panes from just six glass blocks."
    },
    "minecraft:red_stained_glass": {
        id: "minecraft:red_stained_glass",
        name: "Red Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:red_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Red Stained Glass is a vibrant, transparent decorative block created by surrounding a piece of red dye with eight glass blocks. It retains the transparency of regular glass while adding a bold red tint. Notably in Bedrock Edition, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons in various architectural designs, offering a striking visual impact in both modern and traditional builds."
    },
    "minecraft:red_stained_glass_pane": {
        id: "minecraft:red_stained_glass_pane",
        name: "Red Stained Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Red Stained Glass Pane"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Red Stained Glass Panes are thin, transparent decorative blocks that provide a vibrant alternative to full glass blocks. They are crafted by combining glass panes with red dye or by crafting red stained glass blocks into panes. In Bedrock Edition 1.21+, they drop themselves when broken even without the Silk Touch enchantment. They connect to adjacent blocks to form seamless windows, perfect for adding a bold splash of color to any build while remaining resource-efficient."
    },
    "minecraft:green_stained_glass": {
        id: "minecraft:green_stained_glass",
        name: "Green Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:green_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Green Stained Glass is a transparent decorative block created by surrounding a piece of green dye with eight glass blocks. It retains the transparency of regular glass while adding a rich green tint. Notably in Bedrock Edition, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons in various architectural designs, providing a natural and vibrant aesthetic."
    },
    "minecraft:brown_stained_glass": {
        id: "minecraft:brown_stained_glass",
        name: "Brown Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:brown_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Brown Stained Glass is a transparent decorative block created by surrounding brown dye with eight glass blocks. It retains the transparency of regular glass while adding an earthy brown tint. Notably in Bedrock Edition, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons, especially in rustic or autumn-themed builds where a warmer, muted tone is desired."
    },
    "minecraft:black_stained_glass": {
        id: "minecraft:black_stained_glass",
        name: "Black Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:black_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Black Stained Glass is a transparent decorative block created by surrounding a piece of black dye with eight glass blocks. It retains the transparency of regular glass while adding a deep black tint, making it perfect for modern architecture and sleek window designs. Notably in Minecraft Bedrock Edition, stained glass blocks drop themselves when broken even without the Silk Touch enchantment, unlike in Java Edition. It can be used to create artistic beacons or decorative light filters that provide a sophisticated and mysterious aesthetic to any structure."
    },
    "minecraft:black_stained_glass_pane": {
        id: "minecraft:black_stained_glass_pane",
        name: "Black Stained Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Black Stained Glass Pane (with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Black Stained Glass Panes are thin, transparent decorative blocks that offer a sleek and sophisticated alternative to full glass blocks. They are crafted by combining glass panes with black dye or by crafting black stained glass blocks into panes. Like other glass panes, they connect to adjacent blocks and other panes to create seamless, dark-tinted windows. In Bedrock Edition, they require a tool with Silk Touch to be harvested; otherwise, they shatter and drop nothing. They are highly resource-efficient for large-scale window designs."
    },
    "minecraft:magenta_stained_glass": {
        id: "minecraft:magenta_stained_glass",
        name: "Magenta Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:magenta_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Magenta Stained Glass is a vibrant, transparent decorative block created by surrounding a piece of magenta dye with eight glass blocks. It retains the transparency of regular glass while adding a bold magenta tint. Notably in Bedrock Edition 1.21+, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons in various architectural designs, offering a striking visual impact in both modern and traditional builds."
    },
    "minecraft:magenta_stained_glass_pane": {
        id: "minecraft:magenta_stained_glass_pane",
        name: "Magenta Stained Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["minecraft:magenta_stained_glass_pane (with Silk Touch)"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Magenta Stained Glass Panes are thin, transparent decorative blocks that offer a vibrant alternative to full glass blocks. They are crafted by combining glass panes with magenta dye or by crafting magenta stained glass blocks into panes. Like other glass panes, they connect to adjacent blocks and other panes to create seamless, colorful windows. In Bedrock Edition, they require a tool with Silk Touch to be harvested; otherwise, they shatter and drop nothing. They are highly resource-efficient for large-scale window designs and modern architectural builds."
    },
    "minecraft:pink_stained_glass": {
        id: "minecraft:pink_stained_glass",
        name: "Pink Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Pink Stained Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Glass x8 and Pink Dye"
        },
        description: "Pink Stained Glass is a transparent decorative block created by surrounding pink dye with eight glass blocks. It retains the transparency of regular glass while adding a soft pink tint. Notably in Bedrock Edition 1.21+, stained glass blocks drop themselves when broken even without the Silk Touch enchantment. It is perfect for creating colorful windows, decorative light filters, and artistic beacons in various architectural designs. It provides a delicate and warm aesthetic, making it a popular choice for floral-themed builds, modern interiors, and whimsical structures."
    },
    "minecraft:cyan_stained_glass": {
        id: "minecraft:cyan_stained_glass",
        name: "Cyan Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Cyan Stained Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Cyan Stained Glass is a transparent building block with a distinctive blue-green tint. It is crafted by surrounding cyan dye with eight glass blocks. Like other glass blocks in Bedrock Edition, it can be harvested without Silk Touch in recent versions (1.21+). It is commonly used for decorative windows, color-coded light filters for beacons, and modern architectural accents. It does not block light and can be used to create colorful shadows when sunlight passes through it."
    },
    "minecraft:glass_pane": {
        id: "minecraft:glass_pane",
        name: "Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: true
        },
        drops: ["Glass Pane (with Silk Touch)"],
        generation: {
            dimension: "Overworld",
            yRange: "Crafted from Glass x6, also found in Villages and Structures"
        },
        description: "Glass Panes are thin, transparent blocks that offer a more delicate alternative to full glass blocks. They are highly resource-efficient, as six glass blocks can be crafted into sixteen panes. Unlike full blocks, they connect to adjacent blocks and other panes, creating a thin, seamless glass wall. While they provide excellent visibility and light, they are fragile and require Silk Touch for retrieval, otherwise they will drop nothing when broken."
    },
    "minecraft:hard_glass": {
        id: "minecraft:hard_glass",
        name: "Hardened Glass",
        hardness: 10.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Hardened Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened Glass is a reinforced variant of glass available in Bedrock Edition when Education Edition features are active. Unlike standard glass, which is fragile, Hardened Glass boasts a significantly higher hardness of 10 and a blast resistance of 9, making it much more durable against physical impact and explosions. It is crafted in a Compound Creator by combining Aluminum Oxide and Boron Trioxide with Glass. This makes it ideal for underwater bases or high-security windows where visibility and strength are both required."
    },
    "minecraft:hard_glass_pane": {
        id: "minecraft:hard_glass_pane",
        name: "Hardened Glass Pane",
        hardness: 10.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Hardened Glass Pane"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "The Hardened Glass Pane is a thin, reinforced transparent block available in Bedrock Edition with Education features enabled. It is the pane variant of Hardened Glass, offering the same significantly increased durability with a hardness of 10 and blast resistance of 9. Crafted by combining Hardened Glass blocks, these panes provide a sleek, lightweight look while remaining resistant to explosions and physical impact. Unlike regular glass panes that shatter easily, hardened panes require a pickaxe to mine efficiently and drop as items even without Silk Touch."
    },
    "minecraft:hard_light_blue_stained_glass": {
        id: "minecraft:hard_light_blue_stained_glass",
        name: "Hardened Light Blue Stained Glass",
        hardness: 10.0,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "Pickaxe",
            minTier: "Wood",
            silkTouch: false
        },
        drops: ["Hardened Light Blue Stained Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened Light Blue Stained Glass is a reinforced variant of stained glass exclusive to Bedrock Edition's Education features. Combining the aesthetic appeal of a light blue tint with superior durability, it possesses a hardness of 10 and blast resistance of 9, making it highly resistant to explosions and physical impact. Unlike standard stained glass which is fragile, hardened variants can be harvested using a pickaxe and drop themselves even without Silk Touch. It is crafted in a Compound Creator by combining Aluminum Oxide and Boron Trioxide with Light Blue Stained Glass."
    },
    "minecraft:lime_stained_glass": {
        id: "minecraft:lime_stained_glass",
        name: "Lime Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Lime Stained Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Lime Stained Glass is a vibrant, transparent decorative block. In Bedrock Edition 1.21+, it has the unique property of dropping itself when broken even without Silk Touch. It allows light to pass through while adding a lime tint to the view. Crafted by surrounding lime dye with eight glass blocks, it is perfect for greenhouses, modern builds, and beacons."
    },
    "minecraft:brown_stained_glass_pane": {
        id: "minecraft:brown_stained_glass_pane",
        name: "Brown Stained Glass Pane",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Brown Stained Glass Pane"],
        generation: {
            dimension: "None",
            yRange: "Crafted only"
        },
        description: "Brown Stained Glass Panes are thin, transparent decorative blocks that offer a warm, earthy alternative to full glass blocks. They are crafted by combining glass panes with brown dye or by crafting brown stained glass blocks into panes. In Bedrock Edition 1.21+, they drop themselves when broken even without Silk Touch. They connect to adjacent blocks to form seamless windows, making them perfect for rustic or autumn-themed builds while remaining highly resource-efficient."
    },
    "minecraft:hard_white_stained_glass": {
        id: "minecraft:hard_white_stained_glass",
        name: "Hardened White Stained Glass",
        hardness: 0.3,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["Hardened White Stained Glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened White Stained Glass is a reinforced variant of stained glass available in Bedrock Edition with Education Edition features enabled. Combining a clean white tint with superior durability, it boasts a hardness of 0.3 and a blast resistance of 9. Unlike regular stained glass, it does not shatter easily and can be harvested by hand. It is crafted in a Compound Creator using Aluminum Oxide, Boron Trioxide, and White Stained Glass. This block is ideal for high-security windows and underwater bases where both visibility and strength are required."
    },
    "minecraft:hard_red_stained_glass": {
        id: "minecraft:hard_red_stained_glass",
        name: "Hardened Red Stained Glass",
        hardness: 0.3,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:hard_red_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened Red Stained Glass is a reinforced variant of stained glass available in Bedrock Edition with Education Edition features enabled. Combining a vibrant red tint with superior durability, it boasts a hardness of 0.3 and a blast resistance of 9.0. Unlike regular stained glass, it does not shatter easily and can be harvested by hand without requiring Silk Touch. It is crafted in a Compound Creator using Aluminum Oxide, Boron Trioxide, and Red Stained Glass. This block is ideal for high-security windows and underwater bases where both visibility and strength are required."
    },
    "minecraft:hard_blue_stained_glass": {
        id: "minecraft:hard_blue_stained_glass",
        name: "Hardened Blue Stained Glass",
        hardness: 0.3,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:hard_blue_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened Blue Stained Glass is a reinforced variant of stained glass available in Bedrock Edition with Education Edition features enabled. Combining a rich blue tint with superior durability, it features a blast resistance of 9.0, making it much more resistant to explosions than standard glass. It is crafted in a Compound Creator by combining Aluminum Oxide and Boron Trioxide with Blue Stained Glass. Unlike regular glass, it does not shatter easily and can be harvested by hand without Silk Touch, making it ideal for high-security builds and underwater observatories."
    },
    "minecraft:hard_black_stained_glass": {
        id: "minecraft:hard_black_stained_glass",
        name: "Hardened Black Stained Glass",
        hardness: 0.3,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:hard_black_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened Black Stained Glass is a reinforced variant of stained glass available in Bedrock Edition when Education features are active. It combines a sleek black tint with exceptional durability, boasting a blast resistance of 9.0. This makes it a perfect choice for modern architectural designs that require both aesthetic appeal and protection from explosions. It is produced in a Compound Creator using Aluminum Oxide, Boron Trioxide, and Black Stained Glass. It can be harvested without Silk Touch and provides a sophisticated, darkened view while maintaining structural integrity."
    },
    "minecraft:hard_orange_stained_glass": {
        id: "minecraft:hard_orange_stained_glass",
        name: "Hardened Orange Stained Glass",
        hardness: 0.3,
        blastResistance: 9.0,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:hard_orange_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted only (Education Edition)"
        },
        description: "Hardened Orange Stained Glass is a reinforced variant of stained glass available in Bedrock Edition when Education features are enabled. It combines a vibrant orange tint with superior durability, featuring a blast resistance of 9.0, making it much more resistant to explosions than standard glass. It is produced in a Compound Creator by combining Aluminum Oxide and Boron Trioxide with Orange Stained Glass. Unlike regular glass, it does not shatter easily and can be harvested by hand without Silk Touch, making it ideal for high-security builds and underwater observatories."
    },
    "minecraft:light_blue_stained_glass": {
        id: "minecraft:light_blue_stained_glass",
        name: "Light Blue Stained Glass",
        hardness: 0.3,
        blastResistance: 0.3,
        flammability: false,
        gravityAffected: false,
        transparent: true,
        luminance: 0,
        mining: {
            tool: "None",
            minTier: "None",
            silkTouch: false
        },
        drops: ["minecraft:light_blue_stained_glass"],
        generation: {
            dimension: "None",
            yRange: "Crafted from Glass x8 and Light Blue Dye"
        },
        description: "Light Blue Stained Glass is a transparent decorative block that offers a soft, airy blue tint while maintaining the clear visibility of regular glass. It is crafted by surrounding a piece of light blue dye with eight glass blocks. In Bedrock Edition 1.21+, stained glass blocks have the unique property of dropping themselves as items when broken, even without the Silk Touch enchantment. This makes them highly practical for creative building, allowing for easy collection and relocation. They are ideal for creating sky-themed windows, modern aquariums, and vibrant beacon filters."
    }
};
