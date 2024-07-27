const reverseArrayHelper = (l, r, arr) => {
    console.log(l, r, arr);

    if (l >= r || r < 0) {
        return arr;
    } else {
        /* const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp; */
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l = l+1;
        r = r-1;
        return reverseArrayHelper(l, r, arr);
    }
}

const reverseArray = (arr) => {
    return reverseArrayHelper(0, arr.length - 1, arr);
}
const arr = [2, 3, 1, 5, 6];
console.log('array [' + arr + '] and reverse of an array \n [' + reverseArray(arr) + ']');

//another way
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap the elements at left and right indices
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
