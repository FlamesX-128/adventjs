/**
 * @typedef {Object} AgendaEntry
 * @property {string} name 
 * @property {string} address
 */

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {AgendaEntry | null}
 */
function findInAgenda(agenda, phone) {
    /** @type {AgendaEntry[]} */
    const data = [];

    for (const entry of agenda.split("\n")) {
        const [matchedPhone] = entry.match(/\+[-\d]+/) || [];
        const [_, name] = entry.match(/<([^>]+)>/) || [];

        if (!matchedPhone.includes(phone)) continue;

        const address = entry
            .replace(matchedPhone, "")
            .replace(`<${name}>`, "");

        data.push({
            address: address.trim(),
            name: name.trim()
        });
    }

    return data.length === 1
        ? data[0]
        : null;
}
