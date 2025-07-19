// Problem 46: Split a String into Maximum Balanced Substrings.

function balancedString(s){
    let balance=0;
    let count=0;


    for(let ch of s){
        if(ch==='R')balance++;
        else if(ch==='L')balance--;

        if(balance===0)count++;
    }
    return count;           
}

console.log(balancedString("RLRRLLRLRL"));  // 4
console.log(balancedString("RLRRRLLRLL"));  // 2
console.log(balancedString("LLLLRRRR"));    // 1
console.log(balancedString("LRLRLRLR"));    // 4
console.log(balancedString("RRRR"));  