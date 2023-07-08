// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const frequencyCounter1 = createFrequencyCounter(num1.toString());
    const frequencyCounter2 = createFrequencyCounter(num2.toString());
  
    for (const digit in frequencyCounter1) {
      if (frequencyCounter1[digit] !== frequencyCounter2[digit]) {
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
  console.log(sameFrequency(182, 281)); // true
  console.log(sameFrequency(34, 14)); // false
  console.log(sameFrequency(3589578, 5879385)); // true
  console.log(sameFrequency(22, 222)); // false
  
