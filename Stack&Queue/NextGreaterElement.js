// 🧠 Problem64: Next Greater Element
// ❓ Description:
// Given an array of integers, for each element, find the next greater element to its right.
// If no such element exists, return -1.
// 📦 Example:
// js

// Input: [2, 1, 2, 4, 3]
// Output: [4, 2, 4, -1, -1]
// 2 → 4

// 1 → 2

// 2 → 4

// 4 → -1

// 3 → -1
// 💡 Approach: Monotonic Stack
// We use a stack to track indexes of elements, and go from right to left:

// Traverse the array in reverse.

// For each element:

// Pop from stack while top of stack ≤ current element.

// The top of the stack (if it exists) is the next greater element.

// Push current element onto the stack

function nextGreaterElements(nums) {
  const stack = [];
  const result = new Array(nums.length).fill(-1);

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(nums[i]);
  }

  return result;
}
console.log(nextGreaterElements([2, 1, 2, 4, 3])); // [4, 2, 4, -1, -1]
console.log(nextGreaterElements([1, 3, 2, 4]));    // [3, 4, 4, -1]
console.log(nextGreaterElements([6, 5, 4, 3]));    // [-1, -1, -1, -1]


// 📌 Key Insights:
// Stack stores values in monotonically decreasing order.

// Efficient: O(n) time complexity.

// Useful for interview patterns like: Next Greater/Smaller Element, Daily Temperatures, etc.
