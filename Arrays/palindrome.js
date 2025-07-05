// problem 6:Check if a Number or String is a Palindrome



function isPalindrome(input){
    let str=input.toString();
    let reversed=str.split("").reverse().join("");
    return str===reversed;
}


console.log(isPalindrome(121));