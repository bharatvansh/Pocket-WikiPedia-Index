// Pocket Wikipedia Foundation - Main Entry Point
// This script handles the main event flow for the Pocket Wikipedia addon

import { world } from "@minecraft/server";
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

// Main entry point - triggered by using a book
world.afterEvents.itemUse.subscribe((event) => {
    const { itemStack, source } = event;

    // Only trigger on book usage
    if (itemStack.typeId === "minecraft:book") {
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
    // Filter search index based on search term
    const results = searchIndex.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm) ||
        entry.id.toLowerCase().includes(searchTerm)
    );

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