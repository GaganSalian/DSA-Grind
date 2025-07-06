// problem 15:Find the Unique Element in an Array

// 🧠 Strategy 1: Using XOR (Best & Smartest)
// Why XOR?
// a ^ a = 0 → Same numbers cancel each other

// a ^ 0 = a → XOR with 0 returns the number

// XOR is commutative & associative, so order doesn’t matter

// what is XOR ?:
// 🔍 What Does ^ Mean in JavaScript?
// The ^ symbol means XOR (Exclusive OR).

// It works on binary numbers (0s and 1s).
// Let’s look at the basic XOR truth table:

// A	B	A ^ B
// 0	0	0
// 0	1	1
// 1	0	1
// 1	1	0

// 👉 XOR gives 1 only when the two bits are different.


// so if we have same number like 5^5 the binar of this gives 0

function findUnique(array){
    let unique=0;

    for (let i=0;i<array.length;i++){
        unique=unique^array[i];
    }
    return unique;
}
console.log(findUnique([4, 1, 2, 1, 2])) //4