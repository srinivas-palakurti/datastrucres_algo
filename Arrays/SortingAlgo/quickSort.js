
function quickSort(nums, left = 0, right = nums.length-1) {
    if (left < right) {
        let idX = pivotHelper(nums, left, right);

        quickSort(nums, left, idX-1);
        quickSort(nums, idX+1, right);
    }
    
    console.log(nums);
}

const pivotHelper = (arr, left, right) => {
    let p = right;
    let j = left;
    let i = left-1;
    console.log('arr ', arr);

    while (j <= p) {
        console.log('arr[p] ', arr[p] ,'>', arr[j]);
        console.log('in while ',arr);

        if (arr[j] < arr[p]) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        } else {
            j++;
        }
    }
    i++;
    [arr[i], arr[p]] = [arr[p], arr[i]];
    console.log(arr);
    return i;
}

let nums = [8,6,9,2,6,3,5]
// let nums = [10, 80, 30, 90, 40, 50, 70]
quickSort(nums);