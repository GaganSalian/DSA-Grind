// Problem44: Jewels and Stones
// You’re given two strings:

// jewels: characters that represent types of jewels (e.g. "aA")

// stones: characters that represent the stones you have (e.g. "aAAbbbb")

// Return how many stones you have that are also jewels.


function numJewelsInStones(jewels,stones){

    const jewelSet=new Set(jewels);
    let count=0;

    for(let ch of stones){
        if(jewelSet.has(ch)){
            count++;
        }
    }
    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));   // 3
console.log(numJewelsInStones("z", "ZZ"));         // 0
console.log(numJewelsInStones("b", "bbbBBb"));     // 4
console.log(numJewelsInStones("", "abc"));         // 0
console.log(numJewelsInStones("abc", ""));         // 0
