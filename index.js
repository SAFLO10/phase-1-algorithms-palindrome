function isPalindrome(word) {
  const lowercaseWord = word.toLowerCase();
  const reversedWord = lowercaseWord.split('').reverse().join('');
return lowercaseWord === reversedWord;
}

/* 
  isPalindrome should return true if the string is a palindrome
  and return false if not 
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
}

module.exports = isPalindrome;
