// Problem 47: Reverse String II
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them.
// If there are between k and 2k characters, reverse the first k and leave the rest as-is.


function reverseStr(s,k){
    const arr=s.split('');

    for(let i=0;i<arr.length;i+=2*k){
        let left=i;
        let right=Math.min(i+k-1,arr.length-1);


        while(left<right){
            [arr[left],arr[right]]=[arr[right],arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
}

console.log(reverseStr("abcdefg", 2));     // Output: "bacdfeg"
console.log(reverseStr("abcd", 2));        // Output: "bacd"
console.log(reverseStr("a", 2));           // Output: "a"
console.log(reverseStr("abcdefghi", 3));   // Output: "cbadefihg"
console.log(reverseStr("abcdefg", 4));