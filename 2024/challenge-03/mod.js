/**
 * @typedef {Object} InventoryItem
 * @property {string} name - The name of the inventory item.
 * @property {number} quantity - The quantity of the inventory item.
 * @property {string} category - The category of the inventory item.
 */

/**
 * @typedef {Object.<string, Object.<string, number>>} OrganizedInventory
 */

/**
 * @param {InventoryItem[]} inventory
 * @returns {OrganizedInventory}
 */
function organizeInventory(inventory) {
    return inventory.reduce((acc, item) => {
        const { category, name, quantity } = item;

        acc[category] ||= {};
        acc[category][name] = (acc[category][name] ?? 0) + quantity;

        return acc;
    }, {});
}
