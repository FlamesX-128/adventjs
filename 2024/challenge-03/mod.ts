type OrganizedInventory = Record<string, Record<string, number>>;

type InventoryItem = {
    name: string;
    quantity: number;
    category: string;
};

function organizeInventory(inventory: InventoryItem[]): OrganizedInventory {
    return inventory.reduce<OrganizedInventory>((acc, item) => {
        const { category, name, quantity } = item;

        acc[category] ||= {};
        acc[category][name] = (acc[category][name] ?? 0) + quantity;

        return acc;
    }, {});
}
