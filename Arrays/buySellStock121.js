/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. */

var maxProfit = function(prices) {
    let result = 0;
    let buyVal = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - buyVal > result) {
            result = prices[i] - buyVal;
        }
        if (buyVal > prices[i]) {
            buyVal = prices[i];
        }

    }
    return result;
};

let prices = [7,1,5,3,6,4]

let result = maxProfit(prices);
console.log("maxProfit ", result);

