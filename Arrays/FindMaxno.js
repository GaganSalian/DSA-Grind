function findMax(arr){
    if(arr.length===0){
        return null;   //in case of empty array
    }

    let max=arr[0];  //assuming 1st number has max

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];  //step2    findin anew max
        }
    }
    return max;
}

console.log(findMax([2,6,9,1,3,5]))