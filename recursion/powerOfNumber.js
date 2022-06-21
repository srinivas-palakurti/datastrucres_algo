var myPow = function(x, n) {
    
    let result = 1;
    
    if (n <= 1) {
        return 1;
    }
    
    while (n > 0) {
        result *= x;
        n--;
    }
    
    return result;
       
};

console.log(myPow(2, 10));

