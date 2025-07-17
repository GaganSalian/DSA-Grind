//  Problem 42: Length of Last Word

// Goal: Traverse once from right to left and return the length of the last word — skipping spaces and counting letters in a single loop.


function lengthofLastWord(s){
    let length=0;
    let i=s.length-1;

    while(i>=0){
        if(s[i]!==' '){
            length++;
        }else if(length>0){
            break;
        }
        i--;
    }
    return length;
}

console.log(lengthOfLastWord("Hello World"));                 // 5
console.log(lengthOfLastWord("  fly me   to   the moon  "));  // 4
console.log(lengthOfLastWord("luffy is still joyboy"));       // 6
console.log(lengthOfLastWord("a"));                           // 1
console.log(lengthOfLastWord("a "));                          // 1
console.log(lengthOfLastWord("   "));                         // 0
