/* https://leetcode.com/problems/find-pivot-index/
    Input: nums = [1,7,3,6,5,6]
    Output: 3
    Explanation:
    The pivot index is 3.
    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

var pivotIndex = function(nums) {

    let totalSum = nums.reduce((a,b)=>a+b, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum -= nums[i];
        if (leftSum === totalSum) {
            console.log(i)
            return i;
        }
        leftSum += nums[i];        
    }
    return -1;
};

let nums = [1,7,3,6,5,6];
pivotIndex(nums);