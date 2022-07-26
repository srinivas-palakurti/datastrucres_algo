var insertionSort = function(nums) {
    // let arr = [...nums];
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j] < nums[j-1]) {
            [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
            j--;
        }
        console.log(nums);
    }
    console.log('final ', nums);
    return nums;
}

let nums = [7, 1, 4, 5, 3, 2]
insertionSort(nums);