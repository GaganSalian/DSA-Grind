// problem 11:Merge Two Sorted Arrays

// 🧠 Strategy: Two Pointers Technique
// Because both arrays are already sorted:

// Use two pointers: i for arr1, j for arr2

// Compare elements at arr1[i] and arr2[j]

// Push the smaller one to result, move that pointer

// After loop, add remaining elements from both arrays


// How to findout of time coplexity is:O(n+m)

    // both pointers traversloop once so it is O(),
    // and both merge together at final so it is m+n,
    // together they are :O(n+m)




function mergeSorted(arr1,arr2){
    let i=0,j=0;
    const result=[];


    while(i<arr1.length && j<arr2.length){

        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;

}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(mergeSorted([1, 2], [3, 4]));        // [1, 2, 3, 4]
console.log(mergeSorted([], [0, 1]));            // [0, 1]
