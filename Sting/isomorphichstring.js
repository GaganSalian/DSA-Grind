//  Problem 53: Isomorphic Strings
// Given two strings s and t, check if they are isomorphic.

// 📘 Definition:
// Two strings are isomorphic if:

// The characters in s can be replaced to get t.

// A one-to-one mapping exists between characters in s and t.

// No two characters from s map to the same character in t, but a character can map to itself.


function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((mapST[charS] && mapST[charS] !== charT) ||
        (mapTS[charT] && mapTS[charT] !== charS)) {
      return false;
    }

    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  return true;
}

console.log(isIsomorphic("egg", "add"));     // true
console.log(isIsomorphic("foo", "bar"));     // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("ab", "aa"));       // false
console.log(isIsomorphic("badc", "baba"));   // false
