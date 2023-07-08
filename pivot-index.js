// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let totalSum = 0;
    let leftSum = 0;
  
    // Calculate the total sum of all elements in the array
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
    }
  
    for (let i = 0; i < arr.length; i++) {
      // Subtract the current element from the total sum
      totalSum -= arr[i];
  
      // Check if the sum of elements to the left is equal to the sum of elements to the right
      if (leftSum === totalSum) {
        return i;
      }
  
      // Add the current element to the sum of elements to the left
      leftSum += arr[i];
    }
  
    // If no valid pivot index is found, return -1
    return -1;
  }
  
  // Example usage:
  console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // 3
  console.log(pivotIndex([5, 2, 7])); // -1
  console.log(pivotIndex([-1, 3, -3, 2])); // 1
  
