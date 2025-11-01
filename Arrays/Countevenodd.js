// 2: Count Even and Odd Numbers
// 🧠 Step-by-Step Thinking
// ❓ What’s the problem asking?
// You're given an array of numbers like [1, 2, 3, 4, 5, 6].
// You need to:

// Count how many numbers are even

// Count how many numbers are odd

// Return both counts in an object

// 🪜 Step-by-step breakdown:
// 1. Input:
// An array of integers (e.g., [1, 2, 3, 4])

// 2. Output:
// An object like { even: 2, odd: 2 }

// 3. How to solve it?
// Create two counters: even and odd

// Loop through the array

// For each number:

// If it's divisible by 2 → increment even

// Else → increment odd

// Return the result as { even, odd }

function countEvenOdd(arr){
    let even=0;
    let odd=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even++;
        }
        else{
            odd++;
        }
    }
    return {even:even,odd:odd};
}

console.log(countEvenOdd([1,2,3,4,5,6,7,8,9]))

// Modern Loop Techniques
// 🔹 Using for...of

function  countEvenOdd(arr){
      let even = 0;
  let odd = 0;

for(let num of arr){
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return { even, odd };

}

// 🔹 Using forEach()
// forEach() is a high-order function, great for short, readable loops.


function countEvenOdd(arr){
      let even = 0;
  let odd = 0;

  arr.forEach((num)=>{
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  });

  return { even, odd };
  
}

//find a max number
// function findMaxNumber(arr){
//   if(!Array.isArray(arr)||arr.length===0){
//     return null
//   }
//   const copy=[...arr];
//   let max=copy[0]
//   for(let i=1;i<copy.length;i++){
//     if(copy[i]>max){
//       max=copy[i];
//     }
//   }
//   return max;
// }
// console.log(findMaxNumber([[1,2,3,4,5,6,7]])); // output:7