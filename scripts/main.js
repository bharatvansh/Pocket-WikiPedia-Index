// Pocket Wikipedia Foundation - Main Entry Point
// This script handles the main event flow for the Pocket Wikipedia addon

import { world } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import { searchIndex } from "./data/search_index.js";
import { getBlockDetails } from "./data/providers/block_provider.js";
import { getItemDetails } from "./data/providers/item_provider.js";
import { getMobDetails } from "./data/providers/mob_provider.js";
import { renderDetailView } from "./ui/ui_factory.js";

// Main entry point - triggered by using a book
world.afterEvents.itemUse.subscribe((event) => {
    const { itemStack, source } = event;
    
    // Only trigger on book usage
    if (itemStack.typeId === "minecraft:book") {
        showMainMenu(source);
    }
});

/**
 * Shows the main search menu
 * @param {import("@minecraft/server").Player} player
 */
function showMainMenu(player) {
    const form = new ModalFormData()
        .title("Pocket Wikipedia")
        .textField("Search", "Enter item/block/mob name", "");
    
    form.show(player).then((response) => {
        if (response && response.formValues) {
            const searchTerm = response.formValues[0]?.toString().toLowerCase() || "";
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
        const form = new ModalFormData()
            .title("No Results")
            .textField("No entries found", "Try a different search term", "");
        form.show(player);
        return;
    }
    
    // Create action form with results
    const form = new ActionFormData()
        .title("Search Results")
        .body(`Found ${results.length} entries:`);
    
    // Add buttons for each result (max 10 to avoid UI issues)
    results.slice(0, 10).forEach(entry => {
        form.button(entry.name, entry.icon);
    });
    
    form.show(player).then((response) => {
        if (response && response.selection !== undefined && response.selection < results.length) {
            const selectedEntry = results[response.selection];
            showEntryDetails(player, selectedEntry);
        }
    });
}

/**
 * Shows detailed view for a specific entry
 * @param {import("@minecraft/server").Player} player
 * @param {import("./data/search_index.js").SearchEntry} entry
 */
async function showEntryDetails(player, entry) {
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
        
        // Render the appropriate UI based on the entry type
        renderDetailView(player, entry, details);
    } catch (error) {
        console.error(`Failed to load details for ${entry.id}:`, error);
        const form = new ModalFormData()
            .title("Error")
            .textField("Failed to load details", "An error occurred while loading this entry", "");
        form.show(player);
    }
}