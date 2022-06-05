// SOLUTION FROM THE VIDEO
function isPalindrome(word) {
  
    // reverse the input string
    const reversedWord = reverse(word)
    // if the reversed string is the same as the input
    //   return true
    if(word === reversedWord) {
      return true
    }
    // else
    //   return false
    return false
  
  
}

function reverse(word){
  const wordArray = word.split('')
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join('')
  return reversedWord;

}



// MY SECOND SOLUTION
// function isPalindrome(word) {
//   // Write your algorithm here
//   const reversedWord = reverse(word)
//   if(word === reversedWord) {
//     return true
//   }
//   return false
// }

// function reverse (word) {
//   let reversedWord = ''
//   for(let i = word.length - 1; i >= 0; i--) {  //irerate over the word backwards
//     reversedWord += word[i] //add the character to the reversed word
//     // console.log(reversedWord)
//   }
//   return reversedWord
// }



console.log(isPalindrome("dilara"))
console.log(isPalindrome("mom"))
/* 
  Add your pseudocode here

  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
