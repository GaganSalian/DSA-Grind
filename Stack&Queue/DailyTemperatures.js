// 🧠 Problem65: Daily Temperatures
// Given a list of daily temperatures T, return a list where, for each day, you tell how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0.

// 📦 Example:
// js
// Copy
// Edit
// Input: [73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// Day 0 → 1 day to 74

// Day 1 → 1 day to 75

// Day 2 → 4 days to 76

// Day 6 → no warmer → 0

// 💡 Approach: Monotonic Stack (Index Stack)
// We keep a stack of indices, and we move left to right:

// For each temperature, while the stack is not empty and current temp is greater than the temp at the top index of stack:

// That means we've found a "next warmer" day for that earlier day.

// Calculate the difference in indices to get the wait time.

// Push current index onto stack.

function dailyTemperatures(temperatures){
    const result=new Array(temperatures.length).fill(0);
    const stack=[];//stack of indices

    for(let i=0;i<temperatures.length;i++){
        while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]
        ){
            const prevIndex=stack.pop();
            result[prevIndex]=i-prevIndex;
        }
        stack.push(i);
    }
    return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([30, 40, 50, 60]));
// [1, 1, 1, 0]

console.log(dailyTemperatures([90, 80, 70, 60]));
// [0, 0, 0, 0]


//  Key Concepts:
// Stack tracks indices where the answer is not yet known.

// When you find a warmer temp, compute distance to previous index.

// Time Complexity: O(n)
// (each element is pushed/popped at most once)
