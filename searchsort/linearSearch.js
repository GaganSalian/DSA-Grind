// Problem 20: Find an Element Using Linear Search

function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(a[i]===target)return i;
    }
    return -1;

}

console.log(linearSearch([10, 20, 30, 40], 30)); // ➝ 2
console.log(linearSearch([5, 8, 12], 10));       // ➝ -1
console.log(linearSearch([], 5));               // ➝ -1
console.log(linearSearch([7, 7, 7, 7], 7));