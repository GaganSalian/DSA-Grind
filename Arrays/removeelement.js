// problem 8:remove elements

// function removeElement(arr,target){
//     let index=0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==target){
//             arr[index]=arr[i];
//             index++;
//         }
//     }
//     arr.length=index;
//     return arr;
// }


// or

function removeElement(arr, target) {
  return arr.filter((num) => num !== target);
}

console.log(removeElement([22,13,56,11],56));