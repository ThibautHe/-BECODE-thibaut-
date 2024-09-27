function sevenBoom(arr) {
    let result = "theres no 7"
  for (let i = 0; i < arr.length; i++) {
    arr[i]
      .toString()
      .split("")
      .forEach((n) => {
        if (parseInt(n) == 7) {
          result = "Boom!";
        }
      });
  }
  return result;
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); //➞ "Boom!"
// 7 contains the number seven.

console.log(sevenBoom([8, 6, 33, 100])); //➞ "there is no 7 in the array"
// None of the items contain 7 within them.

console.log(sevenBoom([2, 55, 60, 97, 86])); //➞ "Boom!"
// 97 contains the number seven.
