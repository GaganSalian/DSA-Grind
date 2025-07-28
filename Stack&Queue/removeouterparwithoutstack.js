//  Problem 62: Remove Outermost Parentheses-without using stack
// 🔧 Given:
// A valid parentheses string (VPS), e.g., "(()())(())".

// 🎯 Goal:
// Remove the outermost parentheses of every primitive string in the input.

// 🔍 What’s a "Primitive"?
// A primitive is a non-empty valid parentheses string that cannot be split further into two valid parts.

// Example:

// "(()())(())" → has two primitives: "(()())" and "(())"

// Each primitive's outermost parentheses should be removed:

// "(()())" → "()()"

// "(())" → "()"

// So result: "()()()"

// 💡 Stack-Based Logic:
// Steps:
// Use a counter to simulate stack depth.

// Loop through each character.

// When '(' is found:

// If depth > 0, add it to result (it's not outermost)

// Increase depth

// When ')' is found:

// Decrease depth

// If depth > 0, add it to result (it's not outermost)

// This way we avoid storing full stacks, just simulate.


function removeOuterMost(s){
    let result="";
    let depth=0;

    for(let char of s){
        if(char==='('){
            if(depth>0)result += char;
            depth++;
        }else{
            depth--;
            if(depth>0)result +=char;
        }
    }
    return result;
}

console.log(removeOuterMost("(()())(())"));       // "()()()"
console.log(removeOuterMost("(()())(())(()(()))"));// "()()()()(())"
console.log(removeOuterMost("()()"));              // ""
