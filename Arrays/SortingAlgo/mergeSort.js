/** https://leetcode.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let mid = Math.floor(nums.length/2);

    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));

    // console.log('left ', left);
    // console.log('right ', right);
    let finalResult = mergeHelper(left, right);
    console.log('finalResult ', finalResult);
    return finalResult;
};

const mergeHelper = (leftArr, rightArr) => {
    console.log('leftArr ', leftArr, ' rightArr ', rightArr);
    let result = [];
    let i = 0, j = 0;

    while ((leftArr !== undefined && i < leftArr.length) 
            && (rightArr !== undefined && j < rightArr.length)) {

        /* if (leftArr[i] <= rightArr[j]) {
            result.push(leftArr[i]);
            i++;
        } else {
            result.push(rightArr[j]);
            j++;
        } */
        leftArr[i] < rightArr[j] ? result.push(leftArr[i++]) : result.push(rightArr[j++]);
    }

    while (leftArr !== undefined && i < leftArr.length) {
        result.push(leftArr[i]);
        i++;
    }

    while (rightArr !== undefined && j < rightArr.length) {
        result.push(rightArr[j]);
        j++;
    }
    console.log('result ', result);
    return result;
}

sortArray([7, 1, 4, 5, 3, 2]);
