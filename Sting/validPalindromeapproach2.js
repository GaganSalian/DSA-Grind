// Problem 49: Valid Palindrome
// Return true if a string is a valid palindrome — after:

// Removing all non-alphanumeric characters

// Ignoring case
  function isPalindrome(s){
    let left=0;
    let right=s.length-1;

    while(left<right){
        while(left<right&&!isAlphaNum(s[left]))left++;
        while(left<right&&!isAlphaNum(s[right]))right--;

        if(s[left].toLowerCase()!==s[right].toLowerCase())return false;

        left ++;
        right ++;
    }
    return true;
  }
function isAlphaNum(char) {
  return /^[a-z0-9]$/i.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome(""));                                // true
console.log(isPalindrome("0P"));                              // false
console.log(isPalindrome("Madam, I'm Adam"));                 // true
