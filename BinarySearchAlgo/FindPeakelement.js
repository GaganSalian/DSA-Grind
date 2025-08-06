//  Problem 74: Find Peak Element
//  You're given an array nums, where a peak element is an element that is strictly greater than its neighbors
//  Return any peak element's index.

// You may assume that nums[-1] = -∞ and nums[n] = -∞, meaning the array is virtually bounded by negative infinity at both ends.

// 🧠 Binary Search Approach (Smart Logic)
// At every mid:

// If nums[mid] > nums[mid + 1]:
// ➤ You're on a descending slope → Peak is left side (including mid)

// Else:
// ➤ You're on an ascending slope → Peak is right side

// Keep shrinking until left == right → that's the peak index.

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // Peak is to the left, including mid
      right = mid;
    } else {
      // Peak is to the right
      left = mid + 1;
    }
  }

  return left; // or right
}

console.log(findPeakElement([1, 2, 3, 1]));        // ➤ 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // ➤ 1 or 5
console.log(findPeakElement([5]));                 // ➤ 0
console.log(findPeakElement([1, 2]));              // ➤ 1
console.log(findPeakElement([2, 1]));              // ➤ 0


//  Time & Space Complexity
// Time: O(log n) – because we reduce search space by half

// Space: O(1) – no extra space used