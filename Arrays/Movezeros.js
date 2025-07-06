// Problem 12: Move All Zeros to the End of the Array


// 🧠 Strategy: Two-Pointer (Efficient)
// Idea:
// Use one pointer i to track position to place next non-zero

// Loop with j through the array

// When you find a non-zero, move it to i, then i++

// Step-by-Step:
// First pass: Move non-zeros to front.

// Second pass: Fill rest with zeros.

// time complexity is O(n):
// because both loops runs one time :O(n) + O(n) = O(2n) = O(n)


function moveZeros(arr){
    let i=0;

    for(let j=0;j<arr.length;j++){
        if(arr[j]!==0){
            arr[i]=arr[j];
            i++;
        }
    }
    while(i<arr.length){
        arr[i]=0;
        i++;
    }
    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));    // [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 1]));           // [1, 0, 0]
console.log(moveZeros([1, 2, 3]));           // [1, 2, 3]
console.log(moveZeros([0, 0, 0]));   