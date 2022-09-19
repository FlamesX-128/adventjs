export default function listGifts(letter) {
    const gifts = {}

    letter.split(' ').forEach((gift) =>
        (gift[0] !== '_' && gift.length) && (gifts[gift] = gifts[gift] + 1 || 1)
    )

    return gifts
}
