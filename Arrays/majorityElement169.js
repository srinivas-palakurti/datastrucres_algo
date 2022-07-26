/* https://leetcode.com/problems/majority-element/
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

var majorityElement = function(nums) {
    
    let numsMap = new Map();

    nums.forEach(num => {
        if (numsMap.has(num)) {
            numsMap.set(num, numsMap.get(num)+1);
        } else {
            numsMap.set(num, 1);
        } 
        console.log(numsMap);

        console.log(nums.length/2, numsMap.get(num));
        if (numsMap.get(num) > nums.length/2) {
            console.log(num)
            return num;
        }
        
    });
    
    

};


let nums = [3,2,3];

majorityElement(nums);
