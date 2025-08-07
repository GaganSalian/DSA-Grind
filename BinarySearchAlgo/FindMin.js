Problem 75: Find the Minimum in Rotated Sorted Array
You are given a rotated sorted array of distinct integers, e.g.,
[4,5,6,7,0,1,2].
Find the minimum element in the array.


Constraints:
Strictly increasing, then rotated

All elements are unique

Must run in O(log n) time (binary search!)

🧠 Binary Search Logic:
Key Insight:

In a rotated array, the minimum element is the only one where the previous element is greater than it.

If nums[mid] > nums[right] → minimum is to the right

Else → minimum is to the left or at mid

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      // Min is in the right half
      left = mid + 1;
    } else {
      // Min is in the left half (could be mid too)
      right = mid;
    }
  }

  return nums[left];
}


console.log(findMin([3,4,5,1,2]));         // ➤ 1
console.log(findMin([4,5,6,7,0,1,2]));     // ➤ 0
console.log(findMin([11,13,15,17]));       // ➤ 11
console.log(findMin([2,3,4,5,1]));         // ➤ 1
console.log(findMin([1]));                 // ➤ 1
