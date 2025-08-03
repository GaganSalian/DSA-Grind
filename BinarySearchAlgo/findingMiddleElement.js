// Problem 70:Binary Search Function (with Safe Mid):


// ✅ Why You Still Need to Learn This “Again” (Deeply)
// 1. You’re learning how to think like an engineer
// Earlier, you solved problems using working code.
// Now you're learning how to write safe, scalable code.

// 👉 This shift from "it works" to "it works reliably under all edge cases" is what separates a coder from a developer.

// 2. You’re preparing for real-world interviews
// In tech interviews (FAANG and startups), they don’t just want:

// “I solved it.”

// They want:

// “I solved it efficiently and safely, and I understand how to prevent bugs like overflow.”
// That’s why mid = left + (right - left) / 2 is a classic must-know.

function safeBinarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=left+Math.floor((right-left)/2);

        if(arr[mid]===target)return mid;
        else if(arr[mid]<target)left=mid+1;
        else right=mid-1;
    }
    return -1;
}

safeBinarySearch([1,3,4,5,7,9],5)//2