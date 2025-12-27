// Pocket Wikipedia Foundation - UI Factory (Enhanced)
// Rich visual rendering with progress bars and better hierarchy

import { ActionFormData } from "@minecraft/server-ui";

// Minecraft formatting codes
const FMT = {
    reset: "§r",
    bold: "§l",
    italic: "§o",
    // Colors
    black: "§0",
    darkBlue: "§1",
    darkGreen: "§2",
    darkAqua: "§3",
    darkRed: "§4",
    purple: "§5",
    gold: "§6",
    gray: "§7",
    darkGray: "§8",
    blue: "§9",
    green: "§a",
    aqua: "§b",
    red: "§c",
    pink: "§d",
    yellow: "§e",
    white: "§f"
};

// Category styling
const CATEGORY_STYLE = {
    block: { color: FMT.gold, icon: "▣", label: "BLOCK", accent: FMT.yellow },
    item: { color: FMT.aqua, icon: "◆", label: "ITEM", accent: FMT.blue },
    mob: { color: FMT.red, icon: "♦", label: "MOB", accent: FMT.darkRed }
};

/**
 * Create a visual progress bar
 * @param {number} value - Current value
 * @param {number} max - Maximum value
 * @param {number} width - Bar width in characters
 * @param {string} fillColor - Color for filled portion
 * @param {string} emptyColor - Color for empty portion
 */
function progressBar(value, max, width = 10, fillColor = FMT.green, emptyColor = FMT.darkGray) {
    const ratio = Math.max(0, Math.min(1, value / max)); // Clamp between 0 and 1
    const filled = Math.round(ratio * width);
    const empty = width - filled;
    return `${fillColor}${"█".repeat(filled)}${emptyColor}${"░".repeat(empty)}${FMT.reset}`;
}

/**
 * Create a colored badge/tag
 */
function badge(text, bgColor = FMT.darkGray, textColor = FMT.white) {
    return `${bgColor}[${textColor}${text}${bgColor}]${FMT.reset}`;
}

/**
 * Render detail view based on entry category
 * @param {import("@minecraft/server").Player} player
 * @param {Object} entry - Search entry
 * @param {Object} details - Entry details
 * @param {Function} onBack - Callback for back button (returns to search results)
 * @param {Function} onMainMenu - Callback for main menu button
 */
export function renderDetailView(player, entry, details, onBack, onMainMenu) {
    switch (entry.category) {
        case "block":
            renderBlockDetail(player, entry, details, onBack, onMainMenu);
            break;
        case "item":
            renderItemDetail(player, entry, details, onBack, onMainMenu);
            break;
        case "mob":
            renderMobDetail(player, entry, details, onBack, onMainMenu);
            break;
        default:
            renderUnknownEntry(player, entry, onBack, onMainMenu);
    }
}

/* -------------------- Common Helpers -------------------- */

// Decorative line styles
const LINES = {
    solid: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    double: "══════════════════════════════════════",
    dotted: "┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈",
    dashed: "╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌",
    thin: "────────────────────────────────────────",
    mixed: "━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─━─",
    fancy: "◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆",
    pointed: "◄━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━►",
    arrow: "»━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━«"
};

function createBaseForm(entry, category) {
    const style = CATEGORY_STYLE[category] || { color: FMT.white, icon: "●", label: category, accent: FMT.gray };
    const form = new ActionFormData()
        .title(`${style.icon} ${style.label} - ${entry.name}`);
    
    // Header with category badge and fancy border
    // Entry themeColor is used for the ID text - never use black (§0), use darkGray (§8) for dark colors
    const idColor = entry.themeColor || FMT.gray;
    form._bodyText = `${style.accent}${LINES.fancy}${FMT.reset}\n`;
    form._bodyText += `  ${badge(style.label, style.color, FMT.white)} ${idColor}${entry.id}${FMT.reset}\n`;
    form._bodyText += `${style.accent}${LINES.fancy}${FMT.reset}\n`;
    return form;
}

function addSection(form, icon, title, lines, color = FMT.yellow) {
    if (!lines || lines.length === 0) return;
    form._bodyText += `\n${color}${icon} ${FMT.bold}${title}${FMT.reset}\n`;
    form._bodyText += `${FMT.darkGray}${LINES.dotted}${FMT.reset}\n`;
    for (const line of lines) {
        form._bodyText += `  ${color}│${FMT.reset} ${line}\n`;
    }
}

function addQuickFacts(form, facts, accentColor) {
    if (!facts || facts.length === 0) return;
    form._bodyText += `\n${accentColor}┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓${FMT.reset}\n`;
    for (const fact of facts) {
        form._bodyText += `${accentColor}┃${FMT.reset} ${fact}\n`;
    }
    form._bodyText += `${accentColor}┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛${FMT.reset}\n`;
}

function addDescription(form, description, accentColor) {
    if (!description) return;
    form._bodyText += `\n${accentColor}${LINES.arrow}${FMT.reset}\n`;
    form._bodyText += `${FMT.darkGray}> ${FMT.gray}${description}${FMT.reset}\n`;
    form._bodyText += `${accentColor}${LINES.arrow}${FMT.reset}\n`;
}

function finalizeForm(form) {
    form.body(form._bodyText);
    return form;
}

function statLine(icon, label, value, valueColor = FMT.white) {
    return `${icon} ${FMT.gray}${label}: ${valueColor}${value}${FMT.reset}`;
}

function booleanIndicator(value, trueText = "Yes", falseText = "No") {
    return value 
        ? `${FMT.green}✓ ${trueText}${FMT.reset}`
        : `${FMT.red}✗ ${falseText}${FMT.reset}`;
}

/* -------------------- Block -------------------- */

function renderBlockDetail(player, entry, details) {
    const form = createBaseForm(entry, "block");
    const style = CATEGORY_STYLE.block;

    // Quick facts box
    const quickFacts = [];
    if (details.hardness != null) {
        const hardnessBar = progressBar(Math.min(details.hardness, 5), 5, 10, FMT.gold);
        quickFacts.push(`${FMT.gold}*${FMT.reset} Hardness: ${hardnessBar} ${FMT.white}${details.hardness}`);
    }
    if (details.blastResistance != null) {
        const resistBar = progressBar(Math.min(details.blastResistance, 10), 10, 10, FMT.red);
        quickFacts.push(`${FMT.red}*${FMT.reset} Blast Res: ${resistBar} ${FMT.white}${details.blastResistance}`);
    }
    if (details.luminance != null && details.luminance > 0) {
        const lightBar = progressBar(details.luminance, 15, 10, FMT.yellow);
        quickFacts.push(`${FMT.yellow}*${FMT.reset} Light:     ${lightBar} ${FMT.white}${details.luminance}`);
    }
    addQuickFacts(form, quickFacts, style.accent);

    // Properties with visual indicators
    addSection(form, "◈", "Properties", [
        details.flammability != null ? statLine("*", "Flammable", booleanIndicator(details.flammability)) : null,
        details.gravityAffected ? `${FMT.yellow}▼${FMT.reset} ${FMT.gray}Affected by gravity` : null,
        details.transparent ? `${FMT.aqua}◇${FMT.reset} ${FMT.gray}Transparent block` : null
    ].filter(Boolean), style.color);

    // Mining info
    if (details.mining) {
        const miningLines = [];
        if (details.mining.tool) {
            const toolIcon = getToolIcon(details.mining.tool);
            miningLines.push(`${toolIcon} ${FMT.gray}Tool: ${FMT.aqua}${details.mining.tool}${FMT.reset}`);
        }
        if (details.mining.minTier) {
            const tierColor = getTierColor(details.mining.minTier);
            miningLines.push(`${FMT.gray}   └─ Min Tier: ${tierColor}${details.mining.minTier}${FMT.reset}`);
        }
        if (details.mining.silkTouch) {
            miningLines.push(`${FMT.pink}✦${FMT.reset} ${FMT.gray}Silk Touch compatible`);
        }
        addSection(form, "⛏", "Mining", miningLines, FMT.blue);
    }

    // Drops
    if (details.drops?.length > 0) {
        addSection(form, "▽", "Drops", details.drops.map(d => 
            `${FMT.green}+${FMT.reset} ${FMT.white}${d}`
        ), FMT.green);
    }

    // World generation
    if (details.generation) {
        addSection(form, "◎", "World Generation", [
            details.generation.dimension ? `${FMT.purple}⬡${FMT.reset} ${FMT.gray}Dimension: ${FMT.purple}${details.generation.dimension}` : null,
            details.generation.yRange ? `${FMT.aqua}↕${FMT.reset} ${FMT.gray}Y-Level: ${FMT.aqua}${details.generation.yRange}` : null
        ].filter(Boolean), FMT.purple);
    }

    addDescription(form, details.description, style.accent);
    finalizeForm(form)
        .button("§c« Back to Results")
        .button("§e« Main Menu");
    
    form.show(player).then((response) => {
        if (response?.selection === 0 && onBack) onBack();
        if (response?.selection === 1 && onMainMenu) onMainMenu();
    });
}

/* -------------------- Item -------------------- */

function renderItemDetail(player, entry, details, onBack, onMainMenu) {
    const form = createBaseForm(entry, "item");
    const style = CATEGORY_STYLE.item;

    // Quick facts
    const quickFacts = [];
    quickFacts.push(`${FMT.white}■${FMT.reset} Stack: ${FMT.aqua}${details.maxStack}${FMT.reset}`);
    if (details.durability > 0) {
        const durBar = progressBar(Math.min(details.durability, 500), 500, 10, FMT.green);
        quickFacts.push(`${FMT.green}♦${FMT.reset} Durability: ${durBar} ${FMT.white}${details.durability}`);
    }
    if (details.combat?.attackDamage != null) {
        const dmgBar = progressBar(details.combat.attackDamage, 12, 10, FMT.red);
        quickFacts.push(`${FMT.red}⚔${FMT.reset} Damage:     ${dmgBar} ${FMT.white}${details.combat.attackDamage}`);
    }
    addQuickFacts(form, quickFacts, style.accent);

    // Properties
    addSection(form, "◈", "Properties", [
        statLine("✦", "Enchantable", booleanIndicator(details.enchantable)),
        details.combat?.attackSpeed != null ? statLine("⚡", "Attack Speed", `${FMT.yellow}${details.combat.attackSpeed}`) : null
    ].filter(Boolean), style.color);

    // Usage
    if (details.usage) {
        addSection(form, "►", "Usage", [
            details.usage.primaryUse ? `${FMT.green}●${FMT.reset} ${FMT.white}${details.usage.primaryUse}` : null,
            details.usage.secondaryUse ? `${FMT.gray}○${FMT.reset} ${FMT.gray}${details.usage.secondaryUse}` : null
        ].filter(Boolean), FMT.green);
    }

    // Crafting
    if (details.crafting) {
        const craftLines = [];
        if (details.crafting.recipeType) {
            craftLines.push(`${FMT.gold}⚒${FMT.reset} ${FMT.gray}Recipe: ${FMT.gold}${details.crafting.recipeType}`);
        }
        if (details.crafting.ingredients?.length > 0) {
            craftLines.push(`${FMT.gray}   Ingredients:`);
            for (const ing of details.crafting.ingredients) {
                craftLines.push(`${FMT.gray}   └─ ${FMT.white}${ing}`);
            }
        }
        addSection(form, "✦", "Crafting", craftLines, FMT.gold);
    }

    // Special notes
    if (details.specialNotes?.length > 0) {
        addSection(form, "★", "Tips & Notes", details.specialNotes.map(n => 
            `${FMT.yellow}★${FMT.reset} ${FMT.gray}${n}`
        ), FMT.yellow);
    }

    addDescription(form, details.description, style.accent);
    finalizeForm(form)
        .button("§c« Back to Results")
        .button("§e« Main Menu");
    
    form.show(player).then((response) => {
        if (response?.selection === 0 && onBack) onBack();
        if (response?.selection === 1 && onMainMenu) onMainMenu();
    });
}

/* -------------------- Mob -------------------- */

function renderMobDetail(player, entry, details, onBack, onMainMenu) {
    const form = createBaseForm(entry, "mob");
    const style = CATEGORY_STYLE.mob;

    // Quick facts with health bar
    const quickFacts = [];
    const healthBar = progressBar(details.health, 100, 10, FMT.red, FMT.darkGray);
    quickFacts.push(`${FMT.red}♥${FMT.reset} Health: ${healthBar} ${FMT.white}${details.health} HP`);
    
    if (details.stats?.attackDamage != null) {
        const dmgBar = progressBar(details.stats.attackDamage, 20, 10, FMT.gold);
        quickFacts.push(`${FMT.gold}⚔${FMT.reset} Attack: ${dmgBar} ${FMT.white}${details.stats.attackDamage}`);
    }
    if (details.classification?.type) {
        const typeColor = getTypeColor(details.classification.type);
        const typeIcon = getTypeIcon(details.classification.type);
        quickFacts.push(`${typeColor}${typeIcon}${FMT.reset} Type: ${typeColor}${details.classification.type}`);
    }
    addQuickFacts(form, quickFacts, style.accent);

    // Classification details
    if (details.classification) {
        const classLines = [];
        if (details.classification.undead) {
            classLines.push(`${FMT.darkGreen}☠${FMT.reset} ${FMT.gray}Undead creature`);
            classLines.push(`${FMT.gray}   └─ ${FMT.darkGreen}Healed by Harming, damaged by Healing`);
        }
        if (details.stats?.movementSpeed != null) {
            classLines.push(`${FMT.aqua}»${FMT.reset} ${FMT.gray}Speed: ${FMT.aqua}${details.stats.movementSpeed}`);
        }
        if (classLines.length > 0) {
            addSection(form, "◆", "Classification", classLines, FMT.purple);
        }
    }

    // Spawning conditions
    if (details.spawning) {
        const spawnLines = [];
        if (details.spawning.biomes?.length > 0) {
            spawnLines.push(`${FMT.green}◎${FMT.reset} ${FMT.gray}Biomes:`);
            for (const biome of details.spawning.biomes) {
                spawnLines.push(`${FMT.gray}   └─ ${FMT.green}${biome}`);
            }
        }
        if (details.spawning.lightLevel) {
            const isHostile = details.classification?.type === "Hostile";
            const lightIcon = isHostile ? "●" : "○";
            spawnLines.push(`${FMT.yellow}${lightIcon}${FMT.reset} ${FMT.gray}Light Level: ${FMT.yellow}${details.spawning.lightLevel}`);
        }
        if (details.spawning.groupSize) {
            spawnLines.push(`${FMT.white}▪${FMT.reset} ${FMT.gray}Group Size: ${FMT.white}${details.spawning.groupSize}`);
        }
        addSection(form, "◎", "Spawning", spawnLines, FMT.blue);
    }

    // Behavior
    if (details.behaviorTraits?.length > 0) {
        addSection(form, "►", "Behavior", details.behaviorTraits.map(b => 
            `${FMT.gold}▸${FMT.reset} ${FMT.gray}${b}`
        ), FMT.gold);
    }

    // Drops
    if (details.drops?.length > 0) {
        addSection(form, "▽", "Drops", details.drops.map(d => {
            const chanceText = d.chance ? ` ${FMT.darkGray}(${d.chance})` : "";
            return `${FMT.green}+${FMT.reset} ${FMT.white}${d.item}${chanceText}`;
        }), FMT.green);
    }

    addDescription(form, details.description, style.accent);
    finalizeForm(form)
        .button("§c« Back to Results")
        .button("§e« Main Menu");
    
    form.show(player).then((response) => {
        if (response?.selection === 0 && onBack) onBack();
        if (response?.selection === 1 && onMainMenu) onMainMenu();
    });
}

/* -------------------- Utility Functions -------------------- */

function getTypeColor(type) {
    switch (type?.toLowerCase()) {
        case "hostile": return FMT.red;
        case "passive": return FMT.green;
        case "neutral": return FMT.yellow;
        default: return FMT.white;
    }
}

function getTypeIcon(type) {
    switch (type?.toLowerCase()) {
        case "hostile": return "⚠";
        case "passive": return "♡";
        case "neutral": return "◐";
        default: return "●";
    }
}

function getToolIcon(tool) {
    switch (tool?.toLowerCase()) {
        case "pickaxe": return "▪";
        case "shovel": return "▪";
        case "axe": return "▪";
        case "hoe": return "▪";
        case "shears": return "▪";
        default: return "▪";
    }
}

function getTierColor(tier) {
    switch (tier?.toLowerCase()) {
        case "wood":
        case "wooden": return FMT.gold;
        case "stone": return FMT.gray;
        case "iron": return FMT.white;
        case "gold":
        case "golden": return FMT.yellow;
        case "diamond": return FMT.aqua;
        case "netherite": return FMT.darkRed;
        default: return FMT.white;
    }
}

/* -------------------- Unknown -------------------- */

function renderUnknownEntry(player, entry, onBack, onMainMenu) {
    const form = new ActionFormData()
        .title("? Unknown Entry")
        .body(`${FMT.red}━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n` +
              `${FMT.red}⚠ This entry type is not supported.${FMT.reset}\n\n` +
              `${FMT.gray}Name: ${FMT.white}${entry.name}\n` +
              `${FMT.gray}ID: ${FMT.white}${entry.id}\n` +
              `${FMT.gray}Category: ${FMT.white}${entry.category}`)
        .button("§c« Back to Results")
        .button("§e« Main Menu");

    form.show(player).then((response) => {
        if (response?.selection === 0 && onBack) onBack();
        if (response?.selection === 1 && onMainMenu) onMainMenu();
    });
}
