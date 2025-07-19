// Problem 50: Largest Odd Number in a String
// 🔹 Description:
// Given a numeric string s, return the largest-valued odd number that is a non-empty substring of s, taken from left to right (prefix).

// A number is odd if its last digit is odd: 1, 3, 5, 7, 9.

function largestoddno(){
    for(let i=s.length-1;i>=0;i--){
        const digit=parseInt(s[i]);
        if(digit%2===1){
            return s.slice(0,i+1)
        }
    }
    return "";
}

console.log(largestoddno("35427"));  // "35427"
console.log(largestoddno("4206"));   // ""
console.log(largestoddno("52"));     // "5"
console.log(largestoddno("7310"));   // "731"
console.log(largestoddno("2468"));   // ""
console.log(largestoddno("1"));   