/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
/* var subsets = function(nums) {
    
    let resultSet = subsetsHelper(0, nums, [], []);
    console.log(resultSet);
    return resultSet
}; */

/* var subsets = (indexVal, nums, subset, resultSet) => {
    if (indexVal == nums.length) {
        resultSet.push(subset);
    } else {
        subsets(indexVal+1, nums, subset, resultSet);
        // console.log('subset removal', [...subset, nums[indexVal]]);
        subsets(indexVal+1, nums, [...subset, nums[indexVal]], resultSet);
    }
    // console.log(resultSet)
    return resultSet;
    
} */

var subsets = function(nums) {
    
    const subsetCount = Math.pow(2, nums.length);
    
    const resultSet = [];
    for (let i=0; i<subsetCount; i++) {
        const binaryString = i.toString(2).padStart(nums.length, "0");
        console.log(binaryString);
        const subset = [];
        for (let j = 0; j < binaryString.length; j++) {
            if (binaryString[j] === "1") {
                subset.push(nums[j]);
            }            
        }
        resultSet.push(subset);
    }
    return resultSet
};

const nums = [1,2,3];
const resultSet = subsets(nums);
// const resultSet = subsets(0, nums, [], []);
console.log(resultSet);

// subsets(nums);