/** @typedef {{ name: string, color: string }} Oveja */

/**
 * @param { Oveja[] } ovejas
 * @returns { Oveja[] }
 */
export function contarOvejas(ovejas) {
    return ovejas.filter(
        ({ color, name }) => color === 'rojo' 
            && name.toLowerCase().includes('a')
            && name.toLowerCase().includes('n')
    )
}

