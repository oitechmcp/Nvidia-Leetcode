/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

    const m = matrix.length;
    const n = matrix[0].length;

    // we add extra row and column to simplify boundary conditions
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    let maxSize = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (matrix[i - 1][j - 1] === '1') {
                
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // above
                    dp[i][j - 1],     // left
                    dp[i - 1][j - 1]  // top-left
                );

                maxSize = Math.max(maxSize, dp[i][j]);
            }
        }
    }

    return maxSize * maxSize; // area of largest square
};