// Problem 67: Rotting Oranges❓ Description:
// You are given a grid of integers where:

// 0 → empty cell

// 1 → fresh orange

// 2 → rotten orange

// Each minute, every rotten orange rots adjacent fresh oranges (up, down, left, right).
// Return the minimum number of minutes until no fresh orange remains.
// If it's impossible, return -1.

// Approach: Breadth-First Search (BFS)
// We treat all initial rotten oranges as multiple BFS sources.

// ✅ Steps:
// Initialize a queue with all rotten oranges (value 2).

// Count all fresh oranges.

// For each minute:

// Process all rotten oranges currently in queue.

// For each, rot its 4-directional neighbors (if fresh), decrement fresh count, and add newly rotten orange to queue.

// Count minutes until queue is empty.

// If fresh count > 0 after BFS → return -1 (some fresh oranges unreachable).

function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let fresh = 0;

  // Step 1: Initialize queue and fresh count
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  const directions = [
    [0, 1], [1, 0], [-1, 0], [0, -1]
  ];

  let minutes = 0;

  // Step 2: BFS loop
  while (queue.length && fresh > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;
          fresh--;
          queue.push([nr, nc]);
        }
      }
    }

    minutes++;
  }

  return fresh === 0 ? minutes : -1;
}


console.log(orangesRotting([
  [2,1,1],
  [1,1,0],
  [0,1,1]
])); // ➤ 4

console.log(orangesRotting([
  [2,1,1],
  [0,1,1],
  [1,0,1]
])); // ➤ -1 (some can't rot)

console.log(orangesRotting([
  [0,2]
])); // ➤ 0 (no fresh oranges)

// 📌 Time & Space:
// Time: O(m × n)

// Space: O(m × n) (queue)


// 🧪 Let's Use the Example:
// js
// Copy
// Edit
// console.log(orangesRotting([
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ])); // ➤ 4
// Let’s walk minute-by-minute:

// 🕐 Minute 0 — Initial State
// csharp
// Copy
// Edit
// [2, 1, 1]
// [1, 1, 0]
// [0, 1, 1]
// 2 is the starting rotten orange at top-left.

// Count of fresh = 8

// Rotten queue = [[0,0]]

// 🕑 Minute 1
// Orange at (0,0) makes its neighbors rotten:

// (0,1) → 1 → 2

// (1,0) → 1 → 2

// Now grid becomes:

// csharp
// Copy
// Edit
// [2, 2, 1]
// [2, 1, 0]
// [0, 1, 1]
// Fresh left: 6

// New rotten positions: [[0,1], [1,0]]

// 🕒 Minute 2
// From (0,1) and (1,0):

// (0,2) → 1 → 2

// (1,1) → 1 → 2

// New grid:

// csharp
// Copy
// Edit
// [2, 2, 2]
// [2, 2, 0]
// [0, 1, 1]
// Fresh left: 4

// New rotten: [[0,2], [1,1]]

// 🕓 Minute 3
// From (0,2) and (1,1):

// (2,1) → 1 → 2

// New grid:

// csharp
// Copy
// Edit
// [2, 2, 2]
// [2, 2, 0]
// [0, 2, 1]
// Fresh left: 3

// New rotten: [[2,1]]

// 🕔 Minute 4
// From (2,1):

// (2,2) → 1 → 2

// New grid:

// csharp
// Copy
// Edit
// [2, 2, 2]
// [2, 2, 0]
// [0, 2, 2]
// Fresh left: 0 ✅

// All fresh oranges are now rotten!
