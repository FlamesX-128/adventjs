export default function contarOvejas(ovejas) {
    return ovejas.filter(
        (x) => x.color === 'rojo'
            && x.name.toLowerCase().includes('a')
            && x.name.toLowerCase().includes('n')
    )
}
