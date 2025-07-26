// ✅ Problem59: Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid.

// ✅ A string is valid if:
// Every opening bracket has a corresponding closing bracket of the same type.

// Brackets are closed in the correct order.

// 🧠 Stack Logic
// Use a stack to track open brackets.
// For each character in the string:

// If it’s an opening bracket → push it.

// If it’s a closing bracket → check if top of stack matches, then pop.

function isValid(s){
    const stack=[];
    const map={
        ')':'(',
        '}':'{',
        ']':'['
    };

    for(let char of s){
        if(char==='('||char === '{'||char==='['){
            stack.push(char);
        }else{
            if(stack.length===0||stack[stack.length-1]!==map[char]){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0;
}

console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true


