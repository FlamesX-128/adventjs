export default function canReconfigure(from, to) {
    const reconfigure = {};

    if (from.length !== to.length) return false

    for (let i = 0; i < from.length; i++) {
        if (
            Object.keys(reconfigure).includes(from[i]) &&
            reconfigure[from[i]] !== to[i]
        ) return false
        
        if (
            Object.values(reconfigure).includes(to[i]) &&
            !Object.keys(reconfigure).includes(from[i])
        ) return false

        reconfigure[from[i]] = to[i];
    }

    return true
}
