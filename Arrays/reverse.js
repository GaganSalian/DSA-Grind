// Problem 9:reverse string


function reverseString(str){
    let reversed=""

    for(let i=str.length-1;i>=0;i--){
        reversed +=str[i]
    }
    return reversed;
}