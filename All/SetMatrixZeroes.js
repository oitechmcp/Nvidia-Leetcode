/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    //length of matrix
    const M = matrix.length;
    //length of the row, in matrix every row have the same length
    const N = matrix[0].length;
    const cords = [];

//finding every 0 and storing its row and col index in cords arr
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === 0) {
                cords.push([i, j]);
            }
        }
    }

    //making every element in row 0 for all rows
    //cords[i][0] tells us, what row we need to make 0
    for (let i = 0; i < cords.length; i++) {
        for (let j = 0; j < N; j++) {
            matrix[cords[i][0]][j] = 0;
        }
    }

    //making cols 0
    //cords[i][1] tells us, what cols we should make 0
    for (let i = 0; i < cords.length; i++) {
        for (let j = 0; j < M; j++) {
            matrix[j][cords[i][1]] = 0;
        }
    }

};