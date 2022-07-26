/** https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {    
    let currentSum = 0;
    let maxSubArraySum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        maxSubArraySum = Math.max(maxSubArraySum, nums[i]);
        console.log(maxSubArraySum);
    }
    console.log(maxSubArraySum);
    return maxSubArraySum;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums);

//  by sliding window principle, 
/* var maxSubArray = function(nums) {    
    let currentSum = 0;
    let maxSubArraySum = nums[0];
    for (let num of nums) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += num;
        maxSubArraySum = Math.max(maxSubArraySum, currentSum);
        console.log(currentSum, maxSubArraySum);
    }
    console.log(maxSubArraySum);
    return maxSubArraySum;
}; */

//  with 2 loops, giving Time limit exceed error
/* var maxSubArray = function(nums) {    
    let maxSubArraySum = Number.MIN_SAFE_INTEGER;
    for (let i=0; i<nums.length; i++) {
        let subArraySum = 0;
        
        for (let j=i; j<nums.length; j++) {
            subArraySum += nums[j];
            
            if (subArraySum > maxSubArraySum) {
                maxSubArraySum = subArraySum;
            }
        }
    }
    return maxSubArraySum;
}; */