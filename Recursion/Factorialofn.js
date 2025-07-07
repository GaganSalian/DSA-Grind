// Problem 18: Calculate Factorial of n Using Recursion


// ex:console.log(factorial(5));  // → 120

// n*factorial(n-1):
// 5*f(4)===>24;=120
// 4*f(3)===>6;
// 3*f(2)===>2;
// 2*f(1)==>>1;


//  Calculating the Multiplications
// factorial(0) → 1

// → factorial(1) = 1 * 1 = 1

// → factorial(2) = 2 * 1 = 2

// → factorial(3) = 3 * 2 = 6

// → factorial(4) = 4 * 6 = 24

// → factorial(5) = 5 * 24 = 120






function factorial(n){
    if(n===0) return 1;

    return n*factorial(n-1);
}

console.log(factorial(5));  // → 120
