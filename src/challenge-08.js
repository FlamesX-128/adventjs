/** @param {number[]} prices */
export default function maxProfit(prices) {
    let minPrice = prices[0], maxProfit = 0;

    // 1: 18
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];

        if (prices[i] - minPrice > maxProfit)
            maxProfit = prices[i] - minPrice;
    }

    return maxProfit || - 1;
}
