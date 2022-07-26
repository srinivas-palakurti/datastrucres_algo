/* 
    Multiple Pointer Pattern example 
    count unique values from a sorted array
    Ex: [-2, -1, -1, 0, 1] result = 4 
    we are having 4 unique values in the above array
*/

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }
    let counter = 1
    let i = 1
    while (i < arr.length) {

        if (arr[i] !== arr[i-1]) {
            i++;
            counter++;
        } else {
            i++;
        }
    }
    return counter;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

console.log(countUniqueValues([1,2,2,5,7,7,99]));


/* // Sliding window pattern by using 2 pointers 
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99]) 
*/
