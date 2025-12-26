// Pocket Wikipedia Foundation - UI Factory
// Dynamic UI rendering based on entry type

import { ModalFormData } from "@minecraft/server-ui";

/**
 * Render detail view based on entry category
 * @param {import("@minecraft/server").Player} player
 * @param {import("../data/search_index.js").SearchEntry} entry
 * @param {Object} details
 */
export function renderDetailView(player, entry, details) {
    switch (entry.category) {
        case "block":
            renderBlockDetail(player, entry, details);
            break;
        case "item":
            renderItemDetail(player, entry, details);
            break;
        case "mob":
            renderMobDetail(player, entry, details);
            break;
        default:
            showUnknownEntry(player, entry);
    }
}

/**
 * Render block detail view
 * @param {import("@minecraft/server").Player} player
 * @param {import("../data/search_index.js").SearchEntry} entry
 * @param {import("../data/providers/block_provider.js").BlockDetails} details
 */
function renderBlockDetail(player, entry, details) {
    const form = new ModalFormData()
        .title(`${entry.name} - Block`)
        .textField("Name", entry.name)
        .textField("ID", entry.id)
        .textField("Blast Resistance", details.blastResistance.toString())
        .textField("Hardness", details.hardness.toString())
        .textField("Flammable", details.flammability ? "Yes" : "No")
        .textField("Description", details.description);
    
    form.show(player);
}

/**
 * Render item detail view
 * @param {import("@minecraft/server").Player} player
 * @param {import("../data/search_index.js").SearchEntry} entry
 * @param {import("../data/providers/item_provider.js").ItemDetails} details
 */
function renderItemDetail(player, entry, details) {
    const form = new ModalFormData()
        .title(`${entry.name} - Item`)
        .textField("Name", entry.name)
        .textField("ID", entry.id)
        .textField("Max Stack", details.maxStack.toString())
        .textField("Durability", details.durability > 0 ? details.durability.toString() : "N/A")
        .textField("Enchantable", details.enchantable ? "Yes" : "No")
        .textField("Description", details.description);
    
    form.show(player);
}

/**
 * Render mob detail view
 * @param {import("@minecraft/server").Player} player
 * @param {import("../data/search_index.js").SearchEntry} entry
 * @param {import("../data/providers/mob_provider.js").MobDetails} details
 */
function renderMobDetail(player, entry, details) {
    const form = new ModalFormData()
        .title(`${entry.name} - Mob`)
        .textField("Name", entry.name)
        .textField("ID", entry.id)
        .textField("Health", details.health.toString())
        .textField("Behavior", details.behavior)
        .textField("Drops", details.drops.join(", "))
        .textField("Description", details.description);
    
    form.show(player);
}

/**
 * Fallback for unknown entry types
 * @param {import("@minecraft/server").Player} player
 * @param {import("../data/search_index.js").SearchEntry} entry
 */
function showUnknownEntry(player, entry) {
    const form = new ModalFormData()
        .title("Unknown Entry")
        .textField("Name", entry.name)
        .textField("ID", entry.id)
        .textField("Category", entry.category)
        .textField("Error", "Unknown entry type");
    
    form.show(player);
}