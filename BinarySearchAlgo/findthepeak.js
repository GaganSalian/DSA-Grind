// 🧩 Problem 78
// You’re given a mountain array — meaning:

// It strictly increases until some peak element.

// Then it strictly decreases.

// Goal: Find the index of the peak element in O(log n) time.

// Example:
// js
// Copy
// Edit
// Input: [0, 2, 4, 5, 3, 1]
// Output: 3  // (value 5 is the peak)

// 🧠 Approach (Binary Search)
// Set left = 0 and right = arr.length - 1.

// Find mid.

// If arr[mid] < arr[mid + 1] → we are still going up the mountain → move left = mid + 1.

// Else → we are on the down slope or at the peak → move right = mid.

// Loop until left === right → That’s the peak index.


function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // Peak is to the right
      left = mid + 1;
    } else {
      // Peak is at mid or to the left
      right = mid;
    }
  }

  return left; // or right, same thing here
}

// 🧪 Test Cases
console.log(peakIndexInMountainArray([0, 2, 4, 5, 3, 1])); // ➤ 3
console.log(peakIndexInMountainArray([1, 3, 5, 6, 4, 2])); // ➤ 3
console.log(peakIndexInMountainArray([0, 10, 5, 2]));      // ➤ 1
console.log(peakIndexInMountainArray([3, 5, 3, 2, 0]));    // ➤ 1


// 📊 Complexity
// Time: O(log n) (binary search)

// Space: O(1)