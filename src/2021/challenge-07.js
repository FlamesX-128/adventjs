/** @typedef {{ [key: string]: Product | string }} Product */

/**
 * @param {Product} store
 * @param {string} product
 * @returns {boolean}
 */
export default function contains(store, product) {
    return Object.values(store).some((value) => typeof value === "object"
        ? contains(value, product)
        : value === product
    )
}
