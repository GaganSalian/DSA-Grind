// Problem 13: Maximum Consecutive 1s in a Binary Array

// what is consecutive :it means one after the another
// what is max Consecutive 1s means:How many 1s appear continuously (one after the other) in the longest group
// like [1, 1, 0, 1, 1, 1] in this Group 1: [1, 1] → 2  and Group 2: [1, 1, 1] → ✅ 3
// So answer is: 3

//     🧠 Strategy: One Pass, Count + Reset
// Idea:
// Loop through array

// Keep track of:

// count: current consecutive 1s

// maxCount: maximum found so far

// If 1, increase count

// If 0, reset count to 0

// Update maxCount every step


function maxConsecutiveOnes(arr){
    let count=0;
    let maxCount=0;


    for(let i=0;i<arr.lenght;i++){

            if(arr[i]===1){
                count++;
                maxCount=Math.max(maxCount,count)
            }else{
                count=0
            }
    }
    return maxCount;

}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));  // 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]));  // 2
console.log(maxConsecutiveOnes([0, 0, 0]));           // 0
console.log(maxConsecutiveOnes([1, 1, 1, 1]));        // 4
