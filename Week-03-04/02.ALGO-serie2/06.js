function sortIt(arr) {
    return arr.sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      
      if (Array.isArray(a) && Array.isArray(b)) {
        return a[0] - b[0];
      }
      
      if (typeof a === 'number' && Array.isArray(b)) {
        return a - b[0];
      }
      
      if (Array.isArray(a) && typeof b === 'number') {
        return a[0] - b;
      }
    });
  }
  

  console.log(sortIt([4, 1, 3]));                // ➞ [1, 3, 4]
  console.log(sortIt([[4], [1], [3]]));          // ➞ [[1], [3], [4]]
  console.log(sortIt([4, [1], 3]));              // ➞ [[1], 3, 4]
  console.log(sortIt([[4], 1, [3]]));            // ➞ [1, [3], [4]]
  console.log(sortIt([[3], 4, [2], [5], 1, 6])); // ➞ [1, [2], [3], 4, [5], 6]
  