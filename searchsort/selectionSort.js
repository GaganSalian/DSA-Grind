// Problem 23: Sort an Array Using Selection Sort

function selectionSort(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let minIndex=i;

        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }

        if(minIndex!==i){
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
    return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // ➝ [11, 12, 22, 25, 64]
console.log(selectionSort([5, 4, 3, 2, 1]));      // ➝ [1, 2, 3, 4, 5]
console.log(selectionSort([]));                  // ➝ []
console.log(selectionSort([1]));                 // ➝ [1]
