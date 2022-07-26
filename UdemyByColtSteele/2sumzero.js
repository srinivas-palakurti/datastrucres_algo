/*
    Multiple Pointer Pattern example 
    find the pair of values which equal to zero in a sorted Array
*/

function findZeroSumPair(arr) {
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(findZeroSumPair([-4, -3, -2, 0, 1, 2, 5, 6]));
console.log(findZeroSumPair([-4, -3, -2, 0, 1, 3, 5, 6]));
console.log(findZeroSumPair([-4, -3, -2, 0, 1, 5, 6]));