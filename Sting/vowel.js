//  Problem 45: Most Frequent Vowel & Consonant
// 🧾 Description:
// Given a string, find:

// The most frequent vowel

// The most frequent consonant

// Ignore case (treat uppercase and lowercase the same).
// Return both most frequent vowel and consonant as characters.

function vowelConsonant(str){

    const vowels=new Set(['a','e','i','o','u']);
    const vowelCount={};
    const consonantCount={};

    str=str.toLowerCase();

    for(let ch of str){
        if(/[a-z]/.test(ch)){
            if(vowels.has(ch)){
                vowelCount[ch]=(vowelCount[ch]||0)+1;
            }else{
                consonantCount[ch]=(consonantCount[ch]||0)+1;
            }
        }
    }
    const getMax = (countMap) => {
        let maxChar='';
        let maxCount=0;

        for(let char in countMap){
            if (countMap[char] > maxCount) {
        maxChar = char;
        maxCount = countMap[char];
      }
        }
        return maxChar;
    };
    return {
    mostFrequentVowel: getMax(vowelCount),
    mostFrequentConsonant: getMax(consonantCount)
  };

}

console.log(vowelConsonant("Programming is Amazing!"));
// Output: { mostFrequentVowel: 'a', mostFrequentConsonant: 'g' }

console.log(vowelConsonant("Hello World!"));
// Output: { mostFrequentVowel: 'o', mostFrequentConsonant: 'l' }

console.log(vowelConsonant("AEIOU aeioooou"));
// Output: { mostFrequentVowel: 'o', mostFrequentConsonant: '' }

console.log(vowelConsonant("XYZ123$$"));
// Output: { mostFrequentVowel: '', mostFrequentConsonant: 'x' }
