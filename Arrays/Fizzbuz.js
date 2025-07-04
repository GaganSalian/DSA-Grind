// 3: FizzBuzz with Arrays?
// 🧠 Step-by-Step Thinking
// 1. Input:
// A number n (e.g., 15)

// 2. Output:
// An array from 1 to n with FizzBuzz logic applied

// 3. How do we solve it?
// Create an empty result array

// Loop from 1 to n

// For each number i, apply the following:

// If i % 3 === 0 && i % 5 === 0 → push "FizzBuzz"

// Else if i % 3 === 0 → push "Fizz"

// Else if i % 5 === 0 → push "Buzz"

// Else → push the number itself

// Return the result array

function FizzBuzzArray(n){
    let result=[];

    for(let i=1;i<=n;i++){
        if(i%3===0 && i%5===0){
            result.push("FizzBuzz");
        }else if(i%3===0){
            result.push("fizz")
        }else if(i%5===0){
            result.push("Buzz")
        }
        else{
            result.push(i)
        }
    }
    return result;
}

console.log(FizzBuzzArray(25))