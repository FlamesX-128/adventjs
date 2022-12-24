interface Gift {
    quantity: number
    name: string
}

function printTable(gifts: Gift[]) {
    const quantitySize = Math.max(
        8, ...gifts.map((e) => e.quantity.toString().length)
    )

    const giftSize = Math.max(
        4, ...gifts.map((e) => e.name.length)
    )

    const table = ['+'.repeat(giftSize + quantitySize + 7)]

    table.push(
        `| Gift${' '.repeat(giftSize - 3)}` +
        `| Quantity${' '.repeat(quantitySize - 7)}|`
    )

    table.push(
        `| ${'-'.repeat(giftSize)} | ${'-'.repeat(quantitySize)} |`
    )

    for (const gift of gifts) {
        table.push(
            `| ${gift.name}${' '.repeat(giftSize - gift.name.length + 1)}` +
            `| ${gift.quantity}${' '.repeat(quantitySize - gift.quantity.toString().length + 1)}|`
        )
    }

    table.push('*'.repeat(giftSize + quantitySize + 7))

    return table.join('\n')
}

// Only exporting the function to test it.
export { printTable }
