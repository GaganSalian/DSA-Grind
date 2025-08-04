// Problem 72: Search in a Rotated Sorted Array
// You are given a rotated sorted array nums (no duplicates) and an integer target.
// 🔍 You need to return the index of the target, or -1 if not found.

// 🧠 Approach (Binary Search with Conditions)
// Even though the array is rotated, one half is always sorted. So at each step:

// Use binary search to find the mid.

// Determine if the left half is sorted or the right half is.

// Decide which half to move toward based on where the target lies.

function search(nums,target){
    let left=0,right=nums.lenght-1;

    while(left<=right){
        let mid=left+Math.floor((right-left)/2);
        if(nums[mid]===target)return mid;

        if(nums[left]<=nums[mid]){
            if(nums[left]<=target&& target<nums[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        else{
            if(nums[mid]<target && target<=nums[right]){
                left=mid+1;
            }else{
                right=mid-1
            }
        }
    }
    return -1;
}

console.log(search([4,5,6,7,0,1,2],0))//4

// 🧠 Time Complexity:
// Time: O(log n) — it's a modified binary search

// Space: O(1)