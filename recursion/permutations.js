/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

var permute = function(nums) {    
    const finalOutput = permuteHelper(nums, 0, []);
    console.log('finalOutput ', finalOutput);
    return finalOutput;
};

var permuteHelper = (nums, position, result) => {
    
    if (position >= nums.length) {
        result.push([...nums]);
        return result;
    }
    for(let i=position; i < nums.length; i++) {
        // console.log(nums);
        [nums[i], nums[position]] = [nums[position], nums[i]];
        // console.log('updated ', nums);
        permuteHelper(nums, position+1, result);
        [nums[i], nums[position]] = [nums[position], nums[i]];
    }
    
    return result;
}

const nums = [1,2,3];
const resultSet = permute(nums);
// console.log(resultSet);