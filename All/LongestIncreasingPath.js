function longestIncreasingPath(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(-1));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(i, j, prevVal) {
        if (i < 0 || j < 0 || i >= m || j >= n || matrix[i][j] <= prevVal) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        let maxPath = 1;

        for (const [dx, dy] of directions) {
            maxPath = Math.max(maxPath, 1 + dfs(i + dx, j + dy, matrix[i][j]));
        }

        dp[i][j] = maxPath;
        return maxPath;
    }

    let result = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result = Math.max(result, dfs(i, j, -1));
        }
    }

    return result;
}