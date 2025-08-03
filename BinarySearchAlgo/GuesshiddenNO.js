// 🎯 Problem71: Guess the Hidden Number (Higher or Lower):
// 🧩 Problem Statement:
// You are trying to guess a number between 1 and n.


// Provided guess API
function guess(num) {
  if (num === pick) return 0;
  else if (num > pick) return -1;
  else return 1;
}

function guessNumber(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    const res = guess(mid); // provided API

    if (res === 0) return mid;       // found
    else if (res < 0) right = mid - 1; // too high
    else left = mid + 1;              // too low
  }

  return -1; // shouldn't reach here
}
pick=42;
console.log(guessNumber(100)); // ➤ 42