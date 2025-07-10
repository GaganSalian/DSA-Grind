// Problem 21: Find an Element in Sorted Array Using Binary Search

function binarySearch(arr,target){

    let start=0;
    let end=arr.length-1;

    while (start<=end){
        let mid=Math.floor((start+end)/2);

        if(arr[mid]===target)return mid;
        else if(arr[mid]<target)start=mid+1;
        else end=mid-1;
    }
    return -1;

}

console.log(binarySearch([1, 3, 5, 7, 9], 5));  // ➝ 2
console.log(binarySearch([1, 3, 5, 7, 9], 4));  // ➝ -1
console.log(binarySearch([2, 4, 6, 8, 10], 10)); // ➝ 4
console.log(binarySearch([], 5));              // ➝ -1
