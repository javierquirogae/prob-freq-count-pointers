// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const average = (arr[left] + arr[right]) / 2;
  
      if (average === target) {
        return true;
      } else if (average < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return false;
  }
  
  // Example usage:
  console.log(averagePair([1, 2, 3], 2.5)); // true
  console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
  console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
  console.log(averagePair([], 4)); // false
  
