
// let a=10;
// let b=20;
// console.log("sum of 10 and 20 "+ " " +(a+b));

// // when we add number and string it is not addition we call it has concatination

// console.log("hello"-1);
// console.log(true+false);
// console.log(null-5)




// console.log(Number(" "));  
// console.log(Number("0"));  
// console.log(Number(" "));  
// console.log(Boolean("false"));  
// console.log(Boolean("0"));  
// console.log(Boolean([]));  
// console.log(Boolean({}));  



// console.log(0 == false);  
// console.log(" " == 0);  
// console.log("false" == false);  
// console.log(null == undefined);  
// console.log([] == ![]);  
// console.log([1,2,3] == "1,2,3");  


// let age=Number(prompt("Enter a number"));
// console.log(age)
// console.log(Number(" 42 "));  
// console.log(Number("99.9"));  
// console.log(Number(""));  
// console.log(Number("10e3"));  
// console.log(Number("false"));  
// console.log(Number([]));  
// console.log(Number({}));  
// console.log(String(0));  
// console.log(String(NaN));  
// console.log(String([]));  
// console.log(String([10,20,30]));  
// console.log(String({name: "Gagan"}));  
// console.log(Boolean("0"));  
// console.log(Boolean("false"));  
// console.log(Boolean([]));  
// console.log(Boolean({}));  
// console.log(Boolean(NaN));  
// console.log(Boolean(undefined));  
// console.log(Boolean(null));  
// console.log(Boolean(" "));  
// console.log(String(10) + Number("5"));  
// console.log(Number("5") + Boolean("false"));  
// console.log(String(null) + String(undefined));  
// console.log(Number(true) + Number(false));  
// console.log(Boolean("false") == Boolean(""));  
// console.log(Number("  00010  "));  
// console.log(Boolean([]) == Boolean({}));  


// let a=10;
// let b=20;

// let c=a;
// a=b;
// b=c;
// console.log("a is ",a,"and b is ",b)

// [a,b]=[b,a];
// console.log(a,b)

// let ans=Number(prompt("what is u r age"));
// if(isNaN(ans)){
//     console.log("give correct input")
// }
// else if(ans>=18){
//     console.log("u r allowed to drink")
// }
// else{
//     console.log("u rnot allowed to drink")
// }



// let amount=Number(prompt("Enter the amt"));
// let dis=0;
// if(amount>=0&&amount<=5000){
//     dis=0;
// }
// else if(amount>5000&&amount<=7000){
// dis=5;
// }
// else if(amount>7000&&amount<=9000){
// dis=10;
// }
// else if(amount>9000){
// dis=20;
// };

// console.log("u r amt is",amount-Math.floor((dis*amount)/100));


// let unit=Number(prompt("Enter the unit"));
// let amount=0;

// if(unit>400){
//     amount=(unit-400)*13;
//     unit=400
// }
// if(unit>200&&unit<=400){
//     amount+=(unit-200)*8;
//     unit=200
// }
// if(unit>100&&unit<=200){
//     amount=(unit-100)*6;
//     unit=100
// }

// amount+=unit*4;
// console.log(unit)



// let amount=5234;

// if(amount>=500){
//     console.log("500 notes:"+Math.floor(amount/500));
//     amount=amount%500;
// }

// for (var i=1;i<6000;i++){
//     console.log("hello")
// }

// for( var i=200;i>99;i--){
//     console.log(i)
// }

//sum of natural number
// var pr=prompt("how much we should add")

// if(pr===null){
//     console.log("cancelled")
// }
// else
// {var n=Number(pr)

// if(isNaN(n)){
//     console.log("invalid input");
// }
// else{
//     if(n>0){
//         var sum=0;
//         for(var i=1;i<=n;i++){
//             sum=sum+i;
//         }
//         console.log(sum)
//     }
//     else{
//         console.log("should be positive+ or more");
//     }
// }}

//factorial number

// var pr=prompt("how much we should add")

// if(pr===null){
//     console.log("cancelled")
// }
// else
// {var n=Number(pr)

// if(isNaN(n)){
//     console.log("invalid input");
// }
// else{
//     if(n>0){
//         var fact=1;
//         for(var i=1;i<=n;i++){
//             fact=fact+i;
//         }
//         console.log(sum)
//     }
//     else{
//         console.log("should be positive+ or more");
//     }
// }}

//next one

// var pr=prompt("how much we should add")

// if(pr===null){
//     console.log("cancelled")
// }
// else
// {var n=Number(pr)

// if(isNaN(n)){
//     console.log("invalid input");
// }
// else{
//     if(n>0){
//         for(var i=1;i<=Math.floor(n/2);i++){
//            if(n%i==0){
//             console.log(i)
//            }
//         }
//         console.log(n)
//     }
//     else{
//         console.log("should be positive+ or more");
//     }
// }}

// let arr=[10,20,30,40,50];
// let temp=new Array(arr.length);

// let j=0;
// for(let i=arr.lenght-1;i>=0;i--){
//     temp[j]=arr[i];
//     j++
// }
// console.log(temp)

// leftrotate by once

// let arr=[1,2,3,4,5]
// let copy=arr[0];
// for (let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }

// arr[arr.length-1]=copy;
// console.log(arr)

// right rotation by one


// let arr=[1,2,3,4,5]
// console.log(arr.length)
// let copy=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1];
// }

// arr[0]=copy

// console.log(arr)

// for (j=1;j<=4;j++)
// 
// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }
// }
// const fn = outer();
// fn();
// fn();
// fn();
// function once(fn){
//     let called =false;
//     return function(){
//         if(!called){
//             called=true;
//             return fn();
//         }
//         else{
//             console.log("allready called")
//         }
//     }

// }
// const init=once(()=>console.log("Initialized"));

// init();
// init();
// init();
// function createCounter(){
//     let count=0;
//     return{
//         increment(){
//             count++
//             return count;
//         },
//         getCount(){
//             return count;
//         }
//     }
// }


// const counter=createCounter();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.getCount())


function chunkArray(arr,n){
    const result=[]
    for(let i=0;i<arr.length;i+=3){
        result.push(arr.slice(i,i+n))
    }
    return result;

}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))