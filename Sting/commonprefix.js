// Problem 51: Longest Common Prefix
// Write a function to find the longest common starting substring among an array of strings.
// If there is no common prefix, return "".

function longestCommonPrefix(strs){
    if(!strs.length)return "";

    for(let i=0;i<strs[0].length;i++){
        let char=strs[0][i];

        for(let j=1;j<strs.length;j++){
            if(i>=strs[j].length||strs[j][i]!==char){
                return strs[0].slice(0,i)
            }
        }
    }
        return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
console.log(longestCommonPrefix(["interschool", "interview"])); // "inter"
console.log(longestCommonPrefix(["a"]));                        // "a"
console.log(longestCommonPrefix([""]));                         // ""

