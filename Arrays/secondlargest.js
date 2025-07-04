// problem5:Write a function that returns the second largest number from an array

// 🧠 Efficient Approach (1 pass, O(n) time)
//  If you can solve a problem by scanning the array once, doing simple checks/updates → you're likely writing an O(n) solution.
// 🔹 Logic:
// Keep track of:

// max (largest)

// secondMax (second largest)

// Loop once through the array

// For each number:

// If it’s bigger than max, update both max and secondMax

// Else if it’s less than max but greater than secondMax, update secondMax





function secondLargest(arr){
    if(arr.length<2)return null;


    let max=arr[0];
    let secondMax=arr[1];


    if(secondMax>max){
        let temp=max;
        max=secondMax;
        secondMax=temp;
    }
    for(i=2;i<arr.length;i++){
        let num=arr[i];
        if(num>max){
            secondMax=max;
            max=num;
        }
        else if(num<max&&num>secondMax){
                secondMax=num;
        }
        if(secondMax===max || secondMax === undefined){

        }
    }
    return secondMax;
}

console.log(secondLargest([5, 10, 3, 8])); 
console.log(secondLargest([9, 9, 9]));     
console.log(secondLargest([4]));    