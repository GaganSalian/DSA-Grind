// Problem 19: Power of Two using Recursion




function isPowerOfTwo(n){
    if(n===1)return true;

    if(n<=0 || n%2!==0)return false;

    return isPowerOfTwo(n/2);

}

console.log(isPowerOfTwo(1));     // true
console.log(isPowerOfTwo(2));     // true
console.log(isPowerOfTwo(8));     // true
console.log(isPowerOfTwo(18));    // false
console.log(isPowerOfTwo(1024));