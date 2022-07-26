/* https://leetcode.com/problems/two-sum/ 
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1] */


var twoSum = function (nums, target) {
    if (nums.length >= 2) {
        let mapObj = new Map();
        for (let i = 0; i < nums.length; i++) {
            let required = target-nums[i];
            if (mapObj.has(required)) {
                return [i, mapObj.get(required)];
            }
            mapObj.set(nums[i], i);
        }
    }
    return[-1, -1];


};
let nums = [3, 2, 3], target = 6;

let result = twoSum(nums, target);
console.log("result ", result);
