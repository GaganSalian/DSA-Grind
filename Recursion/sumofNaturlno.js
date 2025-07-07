//  Problem 16: Calculate the Sum of First N Natural Numbers using Recursion

// 🔄 How It “Works Back Up”
// Now let’s substitute the numbers as we go back up the call stack.

// sum(1)
// Already returns 1.

// scss
// Copy
// Edit
// sum(1) → 1
// sum(2)
// bash
// Copy
// Edit
// sum(2) = 2 + sum(1)
//         = 2 + 1
//         = 3
// sum(3)
// bash
// Copy
// Edit
// sum(3) = 3 + sum(2)
//         = 3 + 3
//         = 6
// sum(4)
// bash
// Copy
// Edit
// sum(4) = 4 + sum(3)
//         = 4 + 6
//         = 10
// sum(5)
// bash
// Copy
// Edit
// sum(5) = 5 + sum(4)
//         = 5 + 10
//         = 15
// So the final answer is 15.

// ✅ Why The Calculation Waits
// Think of recursion like piling up plates:

// You keep stacking plates (calls) → sum(5), sum(4), sum(3)…

// Once you hit sum(1), you start removing plates:

// sum(1) returns 1

// sum(2) returns 2 + 1 = 3

// sum(3) returns 3 + 3 = 6

// etc.

// The addition happens while unstacking the plates.




function sum(n){
    if(n===1){
        return 1;
    }
    return n+sum(n-1)
}

console.log(sum(5));//15