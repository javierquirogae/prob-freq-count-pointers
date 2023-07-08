// add whatever parameters you deem necessary
function longestFall(arr) {
    if (arr.length === 0) return 0;
    let longestLength = 0;
    let currentLength = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        currentLength++;
      } else {
        longestLength = Math.max(longestLength, currentLength);
        currentLength = 0;
      }
    }
  
    return Math.max(longestLength, currentLength) + 1;
  }
  
  // Example usage:
  console.log(longestFall([5, 3, 1, 3, 0])); // 3
  console.log(longestFall([2, 2, 1])); // 2
  console.log(longestFall([2, 2, 2])); // 1
  console.log(longestFall([5, 4, 4, 4, 3, 2])); // 3
  console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])); // 5
  console.log(longestFall([])); // 0
  
