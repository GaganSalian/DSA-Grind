// Problem 25: Sort an Array Using Merge Sort (Recursively)


// Initial State
// ini
// Copy
// Edit
// left = [5]
// right = [2]
// result = []
// i = 0
// j = 0
// 1️⃣ First Comparison
// Check:

// css
// Copy
// Edit
// left[i] < right[j] → 5 < 2 → false
// So we run the else block:

// js
// Copy
// Edit
// result.push(right[j]); // push 2
// j++;
// Now:

// ini
// Copy
// Edit
// result = [2]
// i = 0
// j = 1
// 2️⃣ Check While Again
// Test condition:

// css
// Copy
// Edit
// i < left.length && j < right.length
// → 0 < 1 && 1 < 1 → false
// So we exit the while loop.

// 3️⃣ Add Remaining from Left
// Left has leftover item(s):

// ini
// Copy
// Edit
// left = [5]
// i = 0
// So run:

// js
// Copy
// Edit
// while (i < left.length) {
//   result.push(left[i]);
//   i++;
// }
// Push 5:

// ini
// Copy
// Edit
// result = [2, 5]
// i = 1
// 4️⃣ Right Has Nothing Left
// No more items in right:

// ini
// Copy
// Edit
// right = [2]
// j = 1
// Already done!

// ✅ Merge Finished!
// The merged result:

// csharp
// Copy
// Edit
// [2, 5]


function mergeSort(arr) {
  // Base case: if array has 0 or 1 elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index
  const mid = Math.floor(arr.length / 2);

  // Split the array into left and right halves
  const leftPart = arr.slice(0, mid);
  const rightPart = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftPart);
  const sortedRight = mergeSort(rightPart);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];

  let i = 0; // pointer for left array
  let j = 0; // pointer for right array

  // Compare elements from left and right arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from left
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add any remaining elements from right
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Example usage:
console.log(mergeSort([5, 2, 4, 1]));        // ➝ [1, 2, 4, 5]
console.log(mergeSort([10, -1, 3, 7, 6]));   // ➝ [-1, 3, 6, 7, 10]
console.log(mergeSort([]));                 // ➝ []
console.log(mergeSort([2,1]));                // ➝ [1]
