// Problem 55   Approach 2: Character Frequency as Hash Key
// 🧠 Core Idea:
// Instead of sorting each word, build a frequency array of 26 characters (for a–z).

// Convert that array to a string key, and group words by that key.

// Example:
// "eat" → { e:1, a:1, t:1 } → key: 1,1,0,...,1,...

// "tea", "ate" will have same key

function groupAnagrams(words){
    const map={};
    for(let word of words){
        const count=new Array(26).fill(0);

        for(let char of word){
            count[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }
        const key=count.join('#');
        if(!map[key]){
            map[key]=[];
        }
        map[key].push(word)
    }
    return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

console.log(groupAnagrams(["a"])); 
// Output: [["a"]]

console.log(groupAnagrams([""])); 
// Output: [[""]]
