//  Problem 43: Find Word Containing a Special Character
// Given an array of words (strings), return all words that contain at least one special character.
// Special characters are anything not a-z, A-Z, or 0-9.

function findSpecialCharacter(words){
    const result=[];
    const regex=/[^a-zA-Z0-9]/;


    for(let word of words){
        if(regex.test(word)){
            result.push(word);
        }
    }
        return result;
}


console.log(findSpecialCharacter(["hello", "w0rld!", "java$", "node_js", "clean"]));
// Output: ["w0rld!", "java$", "node_js"]

console.log(findSpecialCharacter(["alpha", "bravo", "charlie"]));
// Output: []

console.log(findSpecialCharacter(["123", "abc!", "@home", "safe"]));
// Output: ["abc!", "@home"]
