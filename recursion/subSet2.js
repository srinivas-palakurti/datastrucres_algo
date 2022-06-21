var subsetsWithDup = function(nums) {
    
    const result = [];
    nums.sort((a, b) => a - b);

    let helper = (nums, position, subArray) => {
        
        //base condition
        if (position >= nums.length) {
            result.push([...subArray]);
            return result;
        }
        
        helper(nums, position+1, subArray);
        subArray.push(nums[position]);
        helper(nums, position+1, subArray);
        subArray.pop();
        
    }
    
    helper(nums, 0, []);
    console.log('before removing duplicates ', result);
    let resultsSet =  new Set(result.map(result => JSON.stringify(result)));
    console.log('resultsSet ', resultsSet);

    return Array.from(resultsSet).map(elem => JSON.parse(elem));
   
    
};

const nums = [1,2,2];
const resultSet = subsetsWithDup(nums);
console.log(resultSet);