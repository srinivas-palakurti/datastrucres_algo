var merge = function(nums1, m, nums2, n) {
    
    // nums1 = [...nums1.slice(0, m).concat(...nums2.slice(0, n)).sort((a,b) => a-b)] 

    nums1 = nums1.slice(0, m);
    nums2 = nums2.slice(0, n);
    
    console.log(nums1 + '--' + nums2);
    nums1 = [...nums1, ...nums2];
    console.log('finalArray ', nums1);

    nums1.sort((a, b) => a-b);
    
    // let finalSet = new Set(finalArray);
    
    console.log('finalSet ', nums1);
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

merge(nums1, m, nums2, n);