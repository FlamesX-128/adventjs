const dieresis_accent = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u',
    'ü': 'u',
    'ä': 'a',
    'ë': 'e',
    'ï': 'i',
    'ö': 'o',
    'ü': 'u',
}

export default function pangram(letter) {
    let alpha = new Set("abcdefghijklmñnopqrstuvwxyz")

    for (const key of Object.keys(dieresis_accent))
        letter = letter.toLowerCase().replace(key, dieresis_accent[key])

    for (let c of letter.toLowerCase()) alpha.delete(c)

    return alpha.size == 0
}
