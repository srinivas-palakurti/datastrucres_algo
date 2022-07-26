/* https://leetcode.com/problems/move-zeroes/
Given an integer array nums, move all 0's to the end of it while maintaining 
    the relative order of the non-zero elements.
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function(nums) {

    let pointer = 0
    for (let i = 0; i < nums.length; i++){
        console.log(nums, ' nums[i] ', nums[i], ' pointer ', pointer, i);
        if (nums[i] !== 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        }
    }
    console.log(nums);
};

let nums = [0,1,0,3,12];
moveZeroes(nums);
