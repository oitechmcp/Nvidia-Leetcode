/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

    const n = prices.length;
    if (n === 0) return 0;
    const dp = Array.from({ length: k+1 }, () => Array(n).fill(0));

    // we iterate over number of transactions: 1 .. k
    for (let t = 1; t <= k; t++) {
        
        let maxDiff = 0 - prices[0];       // max of (dp[t-1][j] - prices[j]) for j < i

        for (let i = 1; i < n; i++) {

            dp[t][i] = Math.max(dp[t][i - 1], prices[i] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[t - 1][i] - prices[i]);
        }
    }

    return dp[k][n - 1];
    
};