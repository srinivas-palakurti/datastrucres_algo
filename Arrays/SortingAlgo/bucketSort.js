//https://www.tutorialspoint.com/program-to-implement-bucket-sort-in-javascript#:~:text=The%20Bucket%20Sort%20works%20by,on%20the%20expected%20input%20size.

const bucketSort = arr => {
    if (arr.length === 0) {
       return arr;
    }
    let i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = 5;
    arr.forEach(function (currentVal) {
       if (currentVal < minValue) {
          minValue = currentVal;
       } else if (currentVal > maxValue) {
          maxValue = currentVal;
       }
    })
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let allBuckets = new Array(bucketCount);
    for (i = 0; i < allBuckets.length; i++) {
       allBuckets[i] = [];
    }
    arr.forEach(function (currentVal) {
       allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
    console.log(allBuckets);
    arr.length = 0;
    allBuckets.forEach(function(bucket) {
       insertion(bucket);
       bucket.forEach(function (element) {
          arr.push(element)
       });
    });
    console.log(arr);
    return arr;
 }
 const insertion = arr => {
    let length = arr.length;
    let i, j;
    for(i = 1; i < length; i++) {
       let temp = arr[i];
       for(j = i - 1; j >= 0 && arr[j] > temp; j--) {
          arr[j+1] = arr[j];
       }
       arr[j+1] = temp;
    }
    return arr;
 };
 

const arr = [32, 6, 34, 4, 1, 4, 34, 7];
bucketSort(arr);