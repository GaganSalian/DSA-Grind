//  Problem62: Remove Outermost Parentheses (with a real stack);
// 🧠 Stack-Based Approach:
// Instead of using a counter like before, we’ll now actually use a stack to track open parentheses.

// Key Idea:
// Push '(' to the stack.

// When the stack is not empty before pushing, add '(' to the result (not outermost).

// When popping '(' after seeing ')':

// Only add ')' if the stack is not empty after popping (not outermost).

function removeParenthese(s){
    const stack=[];
    let result="";
    for(let char of s){
        if(char==='('){
            if(stack.length>0){
                result += char;
            }
            stack.push(char);
        }else if(char===')'){
            stack.pop();
            if(stack.length>0){
                result += char;
            }
        }
    }
return result;
}