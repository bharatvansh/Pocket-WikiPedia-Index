// Pocket Wikipedia Foundation - Main Entry Point
// This script handles the main event flow for the Pocket Wikipedia addon

import { world, system } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { searchIndex, indexCounts } from "./data/search/index.js";
import { getBlockDetails } from "./data/providers/blocks/index.js";
import { getItemDetails } from "./data/providers/items/index.js";
import { getMobDetails } from "./data/providers/mobs/index.js";
import { renderDetailView } from "./ui/ui_factory.js";


// Formatting codes
const FMT = {
    reset: "§r",
    bold: "§l",
    gray: "§7",
    darkGray: "§8",
    gold: "§6",
    yellow: "§e",
    green: "§a",
    aqua: "§b",
    red: "§c",
    white: "§f"
};

// ============================================
// Addon Detection & Inter-Addon Communication
// ============================================

// Scoreboard objective for addon detection (shared by both addons)
const PWI_DETECTION_OBJECTIVE = "pwi_addons";
const INDEX_PARTICIPANT = "pwi_index_active";
const KNOWLEDGE_PARTICIPANT = "pwi_knowledge_active";

// Register this addon's presence via scoreboard score
// Strategy: Clear ALL scores first (removes stale entries), then set our own after delay
try {
    // Create shared objective if it doesn't exist
    try {
        world.scoreboard.addObjective(PWI_DETECTION_OBJECTIVE, "PWI Addon Detection");
    } catch (e) {
        // Objective already exists, that's fine
    }

    const objective = world.scoreboard.getObjective(PWI_DETECTION_OBJECTIVE);
    if (objective) {
        // First, clear ALL scores to remove any stale entries from removed addons
        try { objective.removeParticipant(INDEX_PARTICIPANT); } catch (e) { }
        try { objective.removeParticipant(KNOWLEDGE_PARTICIPANT); } catch (e) { }

        // After a short delay, set our score
        // This ensures if both addons are present, both will have set their scores
        system.runTimeout(() => {
            try {
                const obj = world.scoreboard.getObjective(PWI_DETECTION_OBJECTIVE);
                if (obj) {
                    obj.setScore(INDEX_PARTICIPANT, 1);
                }
            } catch (e) {
                console.warn("Failed to set Index addon score:", e);
            }
        }, 10); // 10 ticks = 0.5 seconds delay
    }
} catch (e) {
    console.warn("Failed to register Index addon presence:", e);
}

/**
 * Check if Knowledge addon is currently running by looking for its score
 */
function isKnowledgeAddonActive() {
    try {
        const objective = world.scoreboard.getObjective(PWI_DETECTION_OBJECTIVE);
        if (!objective) return false;

        // Check if Knowledge addon has set its score
        const participants = objective.getParticipants();
        return participants.some(p => p.displayName === KNOWLEDGE_PARTICIPANT);
    } catch (e) {
        return false;
    }
}

// Listen for hub menu commands via scriptEvent
system.afterEvents.scriptEventReceive.subscribe((event) => {
    if (event.id === "pwi:open_index" && event.sourceEntity) {
        const player = event.sourceEntity;
        if (player.typeId === "minecraft:player") {
            showMainMenu(player);
        }
    }
});

// Main entry point - triggered by using a book
world.afterEvents.itemUse.subscribe((event) => {
    const { itemStack, source } = event;

    // Only trigger on book usage
    if (itemStack.typeId === "minecraft:book") {
        // Check if Knowledge addon is also installed
        if (isKnowledgeAddonActive()) {
            // Knowledge addon will handle the hub menu, do nothing here
            return;
        }

        // We're alone - show Index menu directly
        showMainMenu(source);
    }
});

/**
 * Shows the main menu with search bar
 * @param {import("@minecraft/server").Player} player
 */
function showMainMenu(player) {
    // Use pre-computed counts (no more filtering on every menu open!)
    const blockCount = indexCounts.blocks;
    const itemCount = indexCounts.items;
    const mobCount = indexCounts.mobs;
    const totalCount = indexCounts.total;

    const form = new ModalFormData()
        .title("§l Pocket Wikipedia")
        .textField(
            `${FMT.gold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n` +
            `${FMT.white}Welcome to the Pocket Wikipedia!${FMT.reset}\n` +
            `${FMT.gray}Your guide to everything Minecraft.${FMT.reset}\n` +
            `${FMT.gold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n` +
            `${FMT.yellow}◆ ${FMT.white}Total Entries: ${FMT.green}${totalCount}${FMT.reset}\n` +
            `${FMT.gray}  ├─ ${FMT.gold}▣${FMT.gray} Blocks: ${FMT.white}${blockCount}${FMT.reset}\n` +
            `${FMT.gray}  ├─ ${FMT.aqua}◆${FMT.gray} Items: ${FMT.white}${itemCount}${FMT.reset}\n` +
            `${FMT.gray}  └─ ${FMT.red}♦${FMT.gray} Mobs: ${FMT.white}${mobCount}${FMT.reset}\n` +
            `${FMT.green}⚲ Search${FMT.reset}`,
            "Enter name or ID...",
            ""
        );

    form.show(player).then((response) => {
        if (response?.canceled) return;

        const searchTerm = response.formValues[0]?.toString().toLowerCase().trim() || "";
        if (searchTerm !== "") {
            showSearchResults(player, searchTerm);
        }
    });
}

/**
 * Shows search results based on user input
 * @param {import("@minecraft/server").Player} player
 * @param {string} searchTerm
 */
function showSearchResults(player, searchTerm) {
    // Fast search with early exit - uses pre-computed _sn/_si keys
    const MAX_RESULTS = 10;
    const results = [];
    const term = searchTerm.toLowerCase();

    for (const entry of searchIndex) {
        if (entry._sn.includes(term) || entry._si.includes(term)) {
            results.push(entry);
            if (results.length >= MAX_RESULTS) break; // Early exit!
        }
    }

    if (results.length === 0) {
        const form = new ActionFormData()
            .title("§c✗ No Results")
            .body(
                `${FMT.red}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n` +
                `${FMT.gray}No entries found for:${FMT.reset}\n` +
                `${FMT.white}"${searchTerm}"${FMT.reset}\n` +
                `${FMT.red}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n\n` +
                `${FMT.gray}Try a different search term.${FMT.reset}`
            )
            .button("§c« Back to Menu");

        form.show(player).then(() => showMainMenu(player));
        return;
    }

    // Create action form with results
    const form = new ActionFormData()
        .title("§a⚲ Search Results")
        .body(
            `${FMT.green}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n` +
            `${FMT.gray}Search: ${FMT.white}"${searchTerm}"${FMT.reset}\n` +
            `${FMT.gray}Found ${FMT.green}${results.length}${FMT.gray} entries${FMT.reset}\n` +
            `${FMT.green}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}`
        );

    // Add buttons for each result (max 10 to avoid UI issues)
    results.slice(0, 10).forEach(entry => {
        const catLabel = entry.category === "block" ? "§6▣ Block" :
            entry.category === "item" ? "§b◆ Item" : "§c♦ Mob";
        form.button(`${catLabel} §8- §f${entry.name}`, entry.icon);
    });

    // Add back button
    form.button("§c« Back to Menu");

    form.show(player).then((response) => {
        if (response?.selection !== undefined) {
            const maxResults = Math.min(results.length, 10);
            if (response.selection < maxResults) {
                const selectedEntry = results[response.selection];
                showEntryDetails(player, selectedEntry, searchTerm);
            } else {
                showMainMenu(player);
            }
        }
    });
}

/**
 * Shows detailed view for a specific entry
 * @param {import("@minecraft/server").Player} player
 * @param {import("./data/search/index.js").SearchEntry} entry
 * @param {string} searchTerm - The original search term for back navigation
 */
async function showEntryDetails(player, entry, searchTerm) {
    try {
        // Get detailed content based on entry type
        let details;
        switch (entry.category) {
            case "block":
                details = await getBlockDetails(entry.id);
                break;
            case "item":
                details = await getItemDetails(entry.id);
                break;
            case "mob":
                details = await getMobDetails(entry.id);
                break;
            default:
                throw new Error(`Unknown category: ${entry.category}`);
        }

        // Render the appropriate UI with navigation callbacks
        renderDetailView(
            player,
            entry,
            details,
            () => showSearchResults(player, searchTerm),
            () => showMainMenu(player)
        );
    } catch (error) {
        console.error(`Failed to load details for ${entry.id}:`, error);
        const form = new ActionFormData()
            .title("§c✗ Error")
            .body(
                `${FMT.red}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}\n` +
                `${FMT.red}Failed to load entry details.${FMT.reset}\n` +
                `${FMT.gray}Entry: ${FMT.white}${entry.name}${FMT.reset}\n` +
                `${FMT.red}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${FMT.reset}`
            )
            .button("§c« Back to Menu");

        form.show(player).then(() => showMainMenu(player));
    }
}