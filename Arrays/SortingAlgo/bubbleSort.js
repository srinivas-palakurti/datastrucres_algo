var bubbleSort = function(nums) {
    for (let i = 0; i < nums.length-2; i++) {
        for (let j = 0; j < nums.length-1-i; j++) {
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }
        console.log(nums);
    }
    // console.log(nums);
    return nums;
};

let nums = [7, 1, 4, 5, 3, 2]
bubbleSort(nums);