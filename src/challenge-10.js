const coins = {
    0: 1,
    1: 2,
    2: 5,
    3: 10,
    4: 20,
    5: 50,
}

export default function getCoins(change) {
    const result = [];

    for (let i = 5; i >= 0; i--) {
        let coin = 0;

        while (change >= coins[i]) {
            coin++;
            change -= coins[i];
        }

        result.push(coin)
    }

    return result.reverse()
}
