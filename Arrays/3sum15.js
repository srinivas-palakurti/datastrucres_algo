/** https://leetcode.com/problems/3sum/
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 */

var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let targetArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue;
        
        const target = nums[i]*-1;
        let subResult = twoSum(i+1, target, nums);
        targetArr.push(...subResult);
        // }
    }
    console.log(targetArr);
    return targetArr;
};

const twoSum = (j, target, nums) => {
    let k = nums.length-1;
    let result = [];

    while (j < k) {
        let leftVal = nums[j];
        let rightVal = nums[k];

        if (leftVal+rightVal > target) {
            k--;
        } else if (leftVal+rightVal < target) {
            j++;
        } else {
            result.push([target*-1, leftVal, rightVal]);

            while (j < k && nums[j] === nums[j+1]) {
                j++;
            }
            while (j < k && nums[k] === nums[k-1]) {
                k++;
            }

            j++;
            k--;
        }
    }
    console.log(result);
    return result;
}

let nums = [-1,0,1,2,-1,-4]; -4,-1,-1,0,1,2
threeSum(nums);