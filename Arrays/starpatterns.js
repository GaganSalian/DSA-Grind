// Problem 4: Print a Right-Angled Triangle of Stars


// 🧠 Step-by-Step Thinking
// 1. Input:
// A single number n (how many rows you want in the triangle).

// Example:

// js
// Copy
// Edit
// printStarPattern(4);
// 2. Output:
// Printed rows in the console that look like a triangle.

// 3. How to solve it?
// Let’s think in terms of rows and columns:

// For row 1 → print 1 star

// For row 2 → print 2 stars

// For row 3 → print 3 stars
// ...and so on up to n rows.

// This is a nested loop problem:

// Outer loop: Controls the number of rows

// Inner loop: Builds the actual stars per row



// 🔍 Breakdown of Logic
// Variable	Meaning
// i	Row number (from 1 to n)
// j	Column number (how many stars to print in that row)
// row	A string that stores stars for each row before printing


function printStarPttern(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row += "* "
        }
        console.log(row)
    }
}

console.log(printStarPttern(4))


// note:
// 🔄 How it works (step-by-step for n = 4)
// Outer loop (i)	What happens?
// i = 1	row = "" → add 1 star → row = "* " → console.log(row) prints: *
// i = 2	row = "" again → add 2 stars → row = "* * " → prints: * *
// i = 3	row = "" again → add 3 stars → row = "* * * " → prints: * * *
// i = 4	row = "" again → add 4 stars → row = "* * * * " → prints: * * * *

// Every time the outer loop starts a new row, the variable row is cleared (reset to empty string). This ensures that:

// You start fresh for each row

// You only print stars for the current row