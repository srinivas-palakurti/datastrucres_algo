/* https://leetcode.com/problems/pascals-triangle/

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

var generate = function(numRows) {
    if (numRows < 1) return [];

    let triangle = [[1]];
    if (numRows === 1) return triangle;


    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i-1];
        console.log(prevRow);
        let currentRow = [1];
        for (let j = 1; j < prevRow.length; j++) {
            console.log('j value ',j);
            // console.log(prevRow[j-1], prevRow[j]);
            currentRow.push(prevRow[j-1]+prevRow[j]);
        }
        currentRow.push(1);
        triangle.push(currentRow);
        // console.log(triangle);
    }
    return triangle;
};

generate(5);