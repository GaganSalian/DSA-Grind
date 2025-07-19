// Problem 48: Valid Palindrome (LeetCode #125)
// A string is a valid palindrome if, after removing all non-alphanumeric characters and converting it to lowercase, it reads the same forward and backward


function isPalindrome(s){

    const cleaned=s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    const reversed=cleaned.split('').reverse().join('');
    return cleaned===reversed;

}

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome(""));                                // true (empty is palindrome)
console.log(isPalindrome("0P"));                              // false
console.log(isPalindrome("No lemon, no melon"));              // true
