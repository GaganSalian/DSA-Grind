// Problem 17: Sum of All Elements in an Array

// recursion: calling of function inside that function is called recursion.
// “By calling itself, a function gets the ability to loop over smaller numbers until it hits the base.”


function sumArray(arr,i=0){

    if(i===arr.length) return 0;

    return arr[i] +sumArray(arr,i+1)

}

console.log(sumArray([1, 2, 3, 4]));//output:10