// /(\d)(?=.*\1)/ for searching duplicated numbers

function findFirstRepeated(gifts: number[]) {
    return gifts.find((e, i, arr) => arr.indexOf(e) != i) ?? -1
}

export { findFirstRepeated }
