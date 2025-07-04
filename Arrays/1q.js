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

console.log(secondLargest([10, 5, 20, 20]));   