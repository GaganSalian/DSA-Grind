// Problem 73: First Bad Version
// You are a software engineer. You have n versions [1, 2, ..., n], and you are told that some version is the first bad one.
// You're given an API function:

// js
// Copy
// Edit
// isBadVersion(version: number): boolean
// Your job is to find the first version that is bad, using the minimum number of calls to isBadVersion.

// 🧠 Intuition & Approach
// This is a binary search problem:

// If mid is bad, then the first bad must be before or at mid.

// If mid is good, then the first bad must be after mid.

// This simulates the bad version — for testing
let badVersion = 4;

function isBadVersion(version) {
  return version >= badVersion;
}

function firstBadVersion(n) {
  let left = 1;
  let right = n;
  let answer = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (isBadVersion(mid)) {
      answer = mid;        // Possible candidate
      right = mid - 1;     // But try to find earlier
    } else {
      left = mid + 1;
    }
  }

  return answer;
}


badVersion = 4;
console.log(firstBadVersion(5));  // ➤ 4

badVersion = 1;
console.log(firstBadVersion(1));  // ➤ 1

badVersion = 2;
console.log(firstBadVersion(10)); // ➤ 2


// 📊 Complexity
// Time Complexity: O(log n)

// Space Complexity: O(1)

// 🧠 Why It's Important
// This is a real-world simulation of debugging problems using minimal trials.

// Appears frequently in system design interviews and product debugging systems.