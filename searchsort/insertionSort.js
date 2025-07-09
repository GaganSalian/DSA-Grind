// Problem 24: Sort an Array Using Insertion Sort




function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;

        while (j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}

console.log(insertionSort([5, 3, 4, 1]));       // ➝ [1, 3, 4, 5]
console.log(insertionSort([12, 11, 13, 5, 6])); // ➝ [5, 6, 11, 12, 13]
console.log(insertionSort([]));                // ➝ []
console.log(insertionSort([1]));    