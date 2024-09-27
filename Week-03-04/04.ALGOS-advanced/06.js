function FindSum(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (j === i) {
        continue;
      }
      if (arr[i] + arr[j] === sum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

// For "sum" = 7
console.log(FindSum([1, 6, 4, 5, 3, 3], 7)); // ---> [[6,1], [3,4], [3,4]]
