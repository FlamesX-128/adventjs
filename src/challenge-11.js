export default function shouldBuyFidelity(times) {
    const price = 12;
    let cost = 0;

    for (let i = 1; i < times + 1; i++) {
        cost += price * 0.75 ** i;
    }

    return times * price > 250 + cost
}
