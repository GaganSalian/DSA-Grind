// 🧩 Problem 76: Find First and Last Position in Sorted Array
// Given a sorted array of integers and a target value, find the starting and ending position of the target value.
// If the target is not found, return [-1, -1].

// 🧠 Logic
// We can use binary search twice:

// First search: Find the first occurrence of target

// Second search: Find the last occurrence of target

// Both searches take O(log n).

// ⏱ Complexity
// Time: O(log n) for each search → still O(log n) overall.

// Space: O(1)

function searchRange(nums, target) {
  function findFirst() {
    let left = 0, right = nums.length - 1, idx = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      if (nums[mid] === target) idx = mid;
    }
    return idx;
  }

  function findLast() {
    let left = 0, right = nums.length - 1, idx = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      if (nums[mid] === target) idx = mid;
    }
    return idx;
  }

  return [findFirst(), findLast()];
}
  

console.log(searchRange([5,7,7,8,8,10], 8)); // ➤ [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // ➤ [-1, -1]
console.log(searchRange([], 0));             // ➤ [-1, -1]
console.log(searchRange([1,2,3,3,3,4], 3));  // ➤ [2, 4]
