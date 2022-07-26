const countingSort = (nums) => {
    if (nums.length < 2) {
        return nums;
    }

    let maxValue = Math.max(...nums);
    /* let maxValue = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i];
        }
    } */
    console.log(maxValue);
    let countingArray = new Array(maxValue + 1);

    for (const num of nums) {
        if (!countingArray[num]) {
            countingArray[num] = 0;
        }
        countingArray[num]++;
    }
    console.log(countingArray);
    let result = [];
    for (let i = 0; i < countingArray.length; i++) {
        while (countingArray[i] > 0) {
            console.log(i);
            result.push(i);
            console.log(result);
            countingArray[i]--;
        }
    }

    console.log(result);
}

let nums = [7, 1, 4, 5, 3, 3]
countingSort(nums);