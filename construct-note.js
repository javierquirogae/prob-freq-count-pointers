// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // Create frequency counters for both the message and letters
    const messageFreq = createFrequencyCounter(message);
    const lettersFreq = createFrequencyCounter(letters);
  
    // Check if all the characters in the message can be formed using the available letters
    for (const char in messageFreq) {
      if (!lettersFreq[char] || lettersFreq[char] < messageFreq[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  function createFrequencyCounter(str) {
    const frequencyCounter = {};
  
    for (const char of str) {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
  
    return frequencyCounter;
  }
  
  // Example usage:
  console.log(constructNote('aa', 'abc')); // false
  console.log(constructNote('abc', 'dcba')); // true
  console.log(constructNote('aabbcc', 'bcabcaddff')); // true
