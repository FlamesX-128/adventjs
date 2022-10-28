export default function wrapGifts(gifts) {
    if (gifts.length === 0) return [];

    const gift_box = '*'.repeat(2 + gifts[0].length);
    const wrappedGifts = []
    
    wrappedGifts.push(gift_box, gift_box);
    
    for (let i = 0; i < gifts.length; i++) wrappedGifts.splice(
        wrappedGifts.length - 1, 0, `*${gifts[i]}*`
    )
    
    return wrappedGifts;
}
