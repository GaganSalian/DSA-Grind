// 1: Find the Maximum Number 
// .

// 🧠 Step-by-Step Thinking
// ❓ What’s the problem asking?
// You’re given an array of numbers like [3, 7, 2, 9, 5].
// You need to write a function that finds and returns the biggest number.

// 🪜 Step-by-step breakdown:
// 1. Input:
// An array of numbers (e.g., [3, 7, 2, 9, 5])

// 2. Output:
// A single number — the largest one in the array (e.g., 9)

// 3. How do we solve it?
// We’ll follow a simple logic:

// Start with the first number as the current maximum.

// Loop through the array.

// At each step, check:

// If the current number is greater than the stored maximum:

// Update the maximum.

// Return the maximum after the loop ends.



function findMax(arr){
    if(arr.length===0){
        return null;   //in case of empty array
    }

    let max=arr[0];  //assuming 1st number has max

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];  //step2    findin anew max
        }
    }
    return max;
}

console.log(findMax([2,6,9,1,3,5]))