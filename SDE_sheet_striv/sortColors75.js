/** https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    for (let j = 0; j < nums.length; j++) {
        for (let i = j+1; i < nums.length; i++) {
            if (nums[j] > nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    console.log(nums);
    return nums;
};

let nums = [2,0,2,1,1,0]
sortColors(nums);