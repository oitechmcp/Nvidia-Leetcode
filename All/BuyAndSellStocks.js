/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let profit = 0;
    let maxP = 0;

    while (r < prices.length){
        if(prices[l] < prices[r]){
            profit = prices[r] - prices[l];
            maxP = Math.max(maxP, profit);
        } else{
            l = r;
        }
        r++
    }
    return maxP
};