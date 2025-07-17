// Problem41: Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring of non-space characters.


function lengthofLastWord(s){
    let i=s.length-1;
    let length=0;


    while(i>=0&&s[i]===' '){
        i--;
    }

    while(i>=0&&s[i]!==' '){
        length++;
        i--;
    }
    return length;
}

console.log(lengthOfLastWord("Hello World"));                 // 5
console.log(lengthOfLastWord("  fly me   to   the moon  "));  // 4
console.log(lengthOfLastWord("luffy is still joyboy"));       // 6
console.log(lengthOfLastWord("a"));                           // 1
console.log(lengthOfLastWord("a "));                          // 1
console.log(lengthOfLastWord("   "));    