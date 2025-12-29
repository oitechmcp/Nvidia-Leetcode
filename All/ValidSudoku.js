const isValidSudoku = board => {
    const checkRow = board => {
        for (let i = 0; i < 9; i++) {
            const R = new Set();
            for (let j = 0; j < 9; j++) {
                const c = board[i][j];
                if (c !== '.') {
                    if (!R.has(c)) {
                        R.add(c)
                    } else {
                        return false;
                    }
                }
            }
            R.clear();

        }
        return true;
    }

    const checkCol = board => {
        for (let i = 0; i < 9; i++) {
            const R = new Set();
            for (let j = 0; j < 9; j++) {
                const c = board[j][i];
                if (c !== '.') {
                    if (!R.has(c)) {
                        R.add(c)
                    } else {
                        return false;
                    }
                }
            }
            R.clear();

        }
        return true;
    }

    const checkThree = (board, row, col) => {
        const R = new Set();
        for (let i = row; i < (row + 3); i++) {
            for (let j = col; j < (col + 3); j++) {
                const c = board[i][j];
                console.log(c)
                if (c !== '.') {
                    if (!R.has(c)) {
                        R.add(c)
                    } else {
                        return false;
                    }
                }
            }

        }
        R.clear();
        return true;
    }

    const checkGrid = board => {
        return checkThree(board, 0, 0) && checkThree(board, 0, 3) && checkThree(board, 0, 6) &&
            checkThree(board, 3, 0) && checkThree(board, 3, 3) && checkThree(board, 3, 6) &&
            checkThree(board, 6, 0) && checkThree(board, 6, 3) && checkThree(board, 6, 6)
    }

    return checkRow(board) && checkCol(board) && checkGrid(board)
};