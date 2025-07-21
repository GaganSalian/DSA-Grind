// problem 10:Best Time to Buy and Sell Stock.


// 🧠 Step-by-Step Strategy (Smart & Efficient)
// We want to:

// Buy at the lowest price

// Sell at the highest price after buying

// 🔹 Plan:
// Track the minimum price seen so far

// At each step, calculate the potential profit: price - minPrice

// Update maxProfit if the current profit is higher

// 💡 Think in terms of:
// “What if I bought at the lowest price before today?”

// “What’s the best profit I could get selling today?”

function maxProfit(price){

    if(price.length===0)return 0;

    let minPrice=price[0];
    let maxProfit=0;

    for(let i=1;i<price.length;i++){
        if(price[i]<minPrice){
            minPrice=price[i]
        }
        else{
            let profit=price[i]-minPrice;
            maxProfit=Math.max(maxProfit,profit)
        }
    }
    return {maxProfit:maxProfit};
}


console.log(maxProfit([7, 1, 5, 11, 6, 4]))     // Buy at 1, sell at 11
console.log(maxProfit([7, 6, 4, 16, 1]) )      // No profit
