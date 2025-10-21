//find the secound largest number in array efficiently

// Given an array of integers, write a function to find the second largest number in
//  the array efficiently,in O(n) time and O(1) space
//   (i.e., without using extra data structures like sorting or sets).

// ✨ Requirements:
// Time complexity: O(n) (only one pass through the array)

// Space complexity: O(1) (no sorting, no extra arrays/sets)

// Must handle duplicates and edge cases correctly

function secondLargest(arr){
    if(arr.length<2)return null;

    let first=-Infinity;
    let second=-Infinity;
    // Infinity represents a value larger than any real number (like +∞).
// -Infinity represents a value smaller than any real number (like -∞).
// We use -Infinity here so that any real number in the array will be greater.
// 'first' will hold the largest number, and 'second' will hold the second largest.


    for(let num of arr){  //here num of arr means take each value from arr one by one and store it in the variable num during each loop.
        if(num>first){
            second=first;
            first=num;
        }else if(num >second && num<first){
            second=num;

        }
    }
    return second === -Infinity?null:second;
}

console.log(secondLargest([10, 5, 20, 11]));   


// write a function that splits an arrayinto  chunks

// function chunkarray(arr,n){
//     result=[];
//     for(let i=0;i<arr.length;i+=n){
//         result.push(arr.slice(i,i+n))
//     }
//     return result;
// }
// comsole.log(chunkarray([1,2,3,4,5,6,7],3))