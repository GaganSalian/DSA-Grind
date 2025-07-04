// for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         for(let k=0;k<3;k++){
//         console.log("i="+i+",j="+j+",K="+k)
//         }
//     }
// }

// let rows=3;
// let cols=3;

// for(let i=0;i<rows;i++){
//   let str= "         ";
//   for(let j=0;j<cols;j++){
//     str +="* "
//   }
//   console.log(str);
// }


// let n=4;

// for (let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=1;j++){
//         str +="* "
//     }
//     console.log(str);
// }


// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }

// let n = 4;

// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let str = "";

//   // spaces
//   for (let s = 1; s <= n - i; s++) {
//     str += " ";
//   }

//   // stars
//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }

//   console.log(str);
// }
 let n = 5; // height of the diamond

// Top half
for (let i = 1; i <= n; i++) {
  let str = "";

  // Add spaces
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }

  // Add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }

  console.log(str);
}

// Bottom half
for (let i = n - 1; i >= 1; i--) {
  let str = "";

  // Add spaces
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }

  // Add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += "*";
  }

  console.log(str);
}
