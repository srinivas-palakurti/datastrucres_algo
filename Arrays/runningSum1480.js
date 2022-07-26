/* https://leetcode.com/problems/running-sum-of-1d-array/
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i-1] + nums[i];
    }
    console.log(nums);
    return nums;
};

let nums = [1,2,3,4]
runningSum(nums);