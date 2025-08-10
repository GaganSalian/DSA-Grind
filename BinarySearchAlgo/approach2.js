// 🧩 Problem 77 Recap
// Same as before:

// Given a sorted array, find the starting and ending index of the target. If not found, return [-1, -1].

// 🧠 Optimized Idea (Approach 2 — Two Similar Binary Searches but Cleaner)
// Instead of doing completely separate functions, we’ll create one helper function that can find either:

// The first index (findFirst = true)

// The last index (findFirst = false)

// This avoids duplicate code and still works in O(log n) time.

// ⏱ Complexity
// Time: O(log n)

// Space: O(1)

function searchRange(nums, target) {
  function binarySearch(findFirst) {
    let left = 0, right = nums.length - 1;
    let idx = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (target < nums[mid]) {
        right = mid - 1;
      } else if (target > nums[mid]) {
        left = mid + 1;
      } else {
        idx = mid;
        if (findFirst) {
          right = mid - 1; // keep searching left
        } else {
          left = mid + 1;  // keep searching right
        }
      }
    }

    return idx;
  }

  return [binarySearch(true), binarySearch(false)];
}


console.log(searchRange([5,7,7,8,8,10], 8)); // ➤ [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // ➤ [-1, -1]
console.log(searchRange([], 0));             // ➤ [-1, -1]
console.log(searchRange([1,2,3,3,3,4], 3));  // ➤ [2, 4]
