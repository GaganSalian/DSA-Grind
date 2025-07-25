// Problem 22: Sort an Array Using Bubble Sort

// ✅ When We Write Loop Inside a Loop:
// The outer loop (i)
// Think of it like:
// 👉 “How many rounds or passes do I want to make?”

// It doesn’t do the comparisons.

// It controls how many times we check/sort the array.

// The inner loop (j)
// It’s the one that actually does the work of comparing and swapping.

// Think of j as the worker:
// 👉 “I go through the array and compare neighboring elements.”


// 🔑 Remember:
// Put let swapped = false; inside the outer loop.

// Reset it every pass.

// Saves time in best-case scenarios!

// ✅ Why we write j < n - 1 - i
// 1st pass (i = 0): check all pairs → j < n - 1

// 2nd pass (i = 1): check one less → j < n - 2

// 3rd pass (i = 2): check two less → j < n - 3

// …

// Each pass: biggest value “bubbles” to the end → no need to compare it again.

// So:

// css
// Copy
// Edit
// j < n - 1 - i
// → skips already sorted values at the end.

// ✅ Key idea:

// Each outer loop pass locks one element at the end.

// So inner loop becomes shorter each time.


function bubbleSort(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let swapped=false;

        for( let j=0;j<n-1-i;j++){
        if (arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;

            swapped=true;
        }
    }
    if(!swapped)break;
    }
    return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8])); // ➝ [1, 2, 4, 5, 8]
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // ➝ [11, 12, 22, 25, 34, 64, 90]
console.log(bubbleSort([])); // ➝ []
console.log(bubbleSort([1])); // ➝ [1]
