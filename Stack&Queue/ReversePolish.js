// 🧠 Problem: Evaluate Reverse Polish Notation
// Input:
// A list of strings, each string is either:

// An operand (e.g. "2", "-3")

// An operator ("+", "-", "*", "/")

// Goal:
// Return the result after evaluating the expression.

// 📦 Example:
// Input: ["2", "1", "+", "3", "*"]
// => ((2 + 1) * 3) = 9

// Input: ["4", "13", "5", "/", "+"]
// => (4 + (13 / 5)) = 6

// 🔧 Core Idea:
// We use a stack:

// Push operands onto the stack.

// When we see an operator:

// Pop the top two numbers,

// Apply the operation,

// Push the result back on the stack.

// At the end, the stack has the final result.

function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const b = stack.pop();
      const a = stack.pop();
      let result;

      switch (token) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = Math.trunc(a / b); break; // Truncate toward zero
      }

      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
}


console.log(evalRPN(["2", "1", "+", "3", "*"]));       // 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));      // 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "*"])); // 30


// 📌 Notes:
// Math.trunc() is used for integer division truncation toward zero, which matches the problem on platforms like LeetCode.

// Stack is ideal for postfix expression, because it naturally supports LIFO operand management.
