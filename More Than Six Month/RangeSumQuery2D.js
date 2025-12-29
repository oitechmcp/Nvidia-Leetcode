let NumMatrix = function (matrix) {
    if (matrix.length == 0) return 0;

    this.getSum = (row1, col1, row2, col2) => {
        let sum = 0;

        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum = sum + matrix[i][j]
            }
        }

        return sum
    }
}

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.getSum(row1, col1, row2, col2);
}