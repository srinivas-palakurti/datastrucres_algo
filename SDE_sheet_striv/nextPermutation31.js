/** https://leetcode.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    for (let i = nums.length-2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {      //first decreasing element from backwards
            const large = nextLarge(i);     //getting the next large from right of the "i"
            [nums[i], nums[large]] = [nums[large], nums[i]];    //swap the first decreaing element with next large from it's right
            reverse(i+1);
            return;
        }
        
    }

    // if there is next permutation, reverse the arr
    nums.reverse();

    function reverse(idx) {
        let start = idx, end = nums.length-1;

        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }
};



let arr = [1,2,3]
nextPermutation(arr);