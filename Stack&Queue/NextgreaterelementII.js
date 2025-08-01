//  Problem66: Next Greater Element II (Circular Array)
// Given a circular array, return the next greater element for every element.
// If no such element exists, return -1.
// monotonic stack problems

// 🧠 Core Idea:
// We treat the array as if it repeats itself twice.

// ✅ Steps:
// Loop from 2n - 1 → 0 (simulate going around twice).

// Use a stack to store possible next greater candidates.

// Use i % n to wrap around the circular array.

// For index i:

// Pop from stack while stack top ≤ current element.

// If stack is not empty, that top is the next greater.

// Push current element onto the stack.

function nextGreat(nums){
    const n=nums.length;
    const result=new Array(n).fill(-1);
    const stack=[];

    for(let i=2*n-1;i>=0;i--){
        const num=nums[i%n];

        while(stack.length && stack[stack.length-1]<=num){
            stack.pop();
        }
        if(i<n){
            if(stack.length)result[i]=stack[stack.length-1];
        }
        stack.push(num)
    }
    return result;
}

console.log(nextGreat([1, 2, 1]));          // [2, -1, 2]
console.log(nextGreat([5, 4, 3, 2, 1]));    // [-1, 5, 5, 5, 5]
console.log(nextGreat([2, 1, 2, 4, 3]));    // [4, 2, 4, -1, 4]


// 📌 Key Concepts:
// Circular Array Simulation = 2 * n loop and use i % n

// Stack = stores possible next greater elements

// Time: O(n), Space: O(n)