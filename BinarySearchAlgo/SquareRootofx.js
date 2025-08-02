//  Problem69: Square Root of X (Leetcode #69)
//  🔍 What is Binary Search?
// Binary Search is an efficient algorithm to find an element in a sorted array by repeatedly dividing the search space in half.

// ⚡ Time Complexity:
// O(log n) — because the search space is halved each time.
//  🔍 Description:
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// You are not allowed to use built-in Math.sqrt().

// 🧠 Key Insight:
// We use binary search to find the largest number mid such that mid * mid ≤ x.

function mySqrt(x){
    if(x<2)return x;

    let left=1;
    let right=Math.floor(x/2);
    let result=0;

    while(left<=right){
        const mid=Math.floor((left+right)/2);
        const square=mid*mid;

        if(square===x)return mid;

        if(square<x){
            result=mid;
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return result;
}

console.log(mySqrt(4));  // ➤ 2
console.log(mySqrt(8));  // ➤ 2
console.log(mySqrt(16)); // ➤ 4
console.log(mySqrt(1));  // ➤ 1
console.log(mySqrt(0));  // ➤ 0

// 🧠 Why Binary Search Works:
// Square root grows monotonically.

// We’re guaranteed that mid * mid will only increase as mid increases.

// So we can use binary search on numbers from 1 to x/2.

// ⏱ Time and Space:
// Time: O(log x)

// Space: O(1)