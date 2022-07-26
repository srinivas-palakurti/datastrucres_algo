var selectionSort = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        console.log(nums);
    }
    console.log('final ', nums);
    return nums;
}

let nums = [7, 1, 4, 5, 3, 2]
selectionSort(nums);