isPalindromeHelper = (l, r, s) =>{
    if (l >= r) 
        return true;
    else {
        if (s[l] !== s[r])
            return false;
        else {
            l = l+1;
            r = r-1;
            return isPalindromeHelper(l, r, s);
        }
    }
    
}

isPalindrome = (str) => {
    var l = 0;
    var r = str.length-1;
    return (isPalindromeHelper(0, str.length-1, str)) ? 1 : 0;
    
}

const str = 'refer';
const result = isPalindrome(str);
console.log(`Given String "${str}" is Palindrome ? ${result ? 'Yes' : 'No'}`)

//another way
function isPalindrome(str) { 

  return str === str.split(”).reverse().join(”); 

}
