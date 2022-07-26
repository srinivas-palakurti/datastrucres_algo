/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    if (numRows < 0 ) return [];
    if (numRows === 1) return [[1]];

    let pascalTraingle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let prevRow = pascalTraingle[i-1];
        const currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow[j] = prevRow[j] + prevRow[j-1];
        }
        
        currentRow.push(1);
        pascalTraingle.push(currentRow);
    }
    console.log(pascalTraingle);
};

generate(5);