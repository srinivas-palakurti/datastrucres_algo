function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// helper
function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// helper
function mostDigits(nums) {
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function radixSort(nums) {
    let maxDigits = mostDigits(nums);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []);
        console.log('buckets ', buckets)
        for (let num of nums) {
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }
        console.log('buckets after', buckets)
        nums = [].concat(...buckets);
        console.log('nums after', nums)

    }
    return nums;
}


const arr = [11, 31, 2678, 89, 5, 1, 5, 166, 2, 7];
console.log(radixSort(arr));