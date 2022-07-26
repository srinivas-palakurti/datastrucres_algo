function maxSubArraySum(arr, n) {
    if (arr.length < n) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        // console.log(tempSum);
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

