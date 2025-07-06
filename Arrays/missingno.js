// problem 14:Find the Missing Number in a Sequence (1 to n)


// Strategy 1: Sum Formula (Best Way):
// we must know :Sum of 1 to n = n * (n + 1) / 2
// arr = [1, 2, 4, 5, 6]
//  Calculate expected sum:n = 6
// expectedSum = 6 × (6 + 1) / 2
//             = 21
// Calculate actual sum:actualSum = 1 + 2 + 4 + 5 + 6
//           = 18
//  Find missing number:missing = expectedSum − actualSum
//         = 21 − 18
//         = 3


function findMissingNumber(arr){

const n=arr.length+1
const total=(n(n+1))/2;

const actualSum=arr.reduce((sum,num)=>sum+num,0);

return total-actualSum
}

console.log(findMissingNumber([1, 2, 4, 5]));      // 3
console.log(findMissingNumber([3, 1, 2, 5]));      // 4
console.log(findMissingNumber([2, 3, 1, 5, 6]));   // 4
console.log(findMissingNumber([1]));              // 2
