// Problem 25: Sort an Array Using Merge Sort (Recursively)

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
