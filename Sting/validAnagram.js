// Problem52: Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An anagram means the characters are the same and used the same number of times, just in different order.

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  return s.split('').sort().join('') === t.split('').sort().join('');
}


console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("a", "a"));             // true
console.log(isAnagram("abc", "ab"));          // false
