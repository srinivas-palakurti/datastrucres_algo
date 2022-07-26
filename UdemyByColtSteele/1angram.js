
/*
    Frequency Counter Pattern example
    Anagram -> when all characters (incliding count) in 2 strings is equal
    Ex: cinema, iceman
*/

function isValidAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let charMap1 = {}, charMap2 = {};
    for (const char of str1) {
        charMap1[char] = (charMap1[char] + 1 )|| 1
    }
    for (const char of str2) {
        charMap2[char] = (charMap2[char] + 1 )|| 1
    }

    for (const char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }
    
    return true;
}
console.log(isValidAnagram("cinema", "iceman"));