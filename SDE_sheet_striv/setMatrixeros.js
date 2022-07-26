/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 */
var setZeroes = function(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                setZerosHelper(matrix, i, j);
            }
        }
    }
    console.log(matrix);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === null) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
};

const setZerosHelper = (matrix, row, col) => {
    for (let i = 0; i < matrix[0].length; i++) {
        if(matrix[row][i] !== 0) {
            matrix[row][i] = null;
        }
    }

    for (let j = 0; j < matrix.length; j++) {
        if(matrix[j][col] !== 0) {
            matrix[j][col] = null;
        }
    }
}

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix);