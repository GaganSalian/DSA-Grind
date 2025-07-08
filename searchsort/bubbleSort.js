// Problem 22: Sort an Array Using Bubble Sort



function bubbleSort(arr){
    let n=arr.length;

    for(let i=0;i<n-1;i++){
        let swapped=false;

        for( let j=0;j<n-1-i;j++){
        if (arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;

            swapped=true;
        }
    }
    if(!swapped)break;
    }
    return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8])); // ➝ [1, 2, 4, 5, 8]
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // ➝ [11, 12, 22, 25, 34, 64, 90]
console.log(bubbleSort([])); // ➝ []
console.log(bubbleSort([1])); // ➝ [1]
