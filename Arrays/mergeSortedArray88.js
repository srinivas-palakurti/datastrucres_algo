/* https://leetcode.com/problems/merge-sorted-array/ 
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

*/

var merge = function(nums1, m, nums2, n) {
    let i=m+n-1;

    m--;
    n--;
    // console.log('i ', i)
    while (n>=0) {
        nums1[i--] = nums1[m]>nums2[n] ? nums1[m--] : nums2[n--];

        console.log(nums1)
    }
    console.log(nums1)

};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

merge(nums1, m, nums2, n);