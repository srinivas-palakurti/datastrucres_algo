/*
    insertion sort example for understanding 
*/

function insertionSort(nums) {
    
    for (let i = 1; i < nums.length; i++) {
        const insertingElement = nums[i];
        let j = i-1;
        while (i >= 0 && nums[j] > insertingElement) {
            nums[j+1] = nums[j];
            j--;
            console.log('nums ', nums + ' i ', i + ' j ', j + ' insertingElement ', insertingElement);
        }
        nums[j+1] = insertingElement;
        console.log('nums in for', nums);

    }
    console.log('nums final', nums)
}

let nums = [8, 20, -2, 4, -6];
insertionSort(nums);