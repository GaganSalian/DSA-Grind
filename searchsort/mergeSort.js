// Problem 25: Sort an Array Using Merge Sort (Recursively)

function mergeSort(arr){
    if(arr.length<=1) return arr;

    const mid=Math.floor(arr.length/2);
    const left=mergeSort(arr.slice(0,mid));
    const right=mergeSort(arr.slice(mid));

    return merge(left,right)

}
function merge(left,right){
    const result=[];
    let i=0,j=0;

    while (i<left.length&&j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }
        else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));

}

console.log(mergeSort([5, 2, 4, 1]));        // ➝ [1, 2, 4, 5]
console.log(mergeSort([10, -1, 3, 7, 6]));   // ➝ [-1, 3, 6, 7, 10]
console.log(mergeSort([]));                 // ➝ []
console.log(mergeSort([2,1]));                // ➝ [1]
