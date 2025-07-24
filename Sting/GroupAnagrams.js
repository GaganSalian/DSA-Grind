//     Problem 54: Group Anagrams (Approach 1: Sorted Keys)
// Given an array of strings, group the anagrams together.

// 🧠 Definition:
// Two words are anagrams if their letters can be rearranged to match each other.
// So, words that are anagrams will have the same sorted character string.

function groupAnagrams(words){
    const map={};
    for(let word of words){
        const sorted=word.split('').sort().join('');

        if(!map[sorted]){
            map[sorted]=[];
        }
        map[sorted].push(word);
    }
    return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]

console.log(groupAnagrams([""])); 
// [[""]]

console.log(groupAnagrams(["a"])); 
// [["a"]]

