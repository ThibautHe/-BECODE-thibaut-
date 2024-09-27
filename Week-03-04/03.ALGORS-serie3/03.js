function isSmooth(str) {
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i + 1]) {
      if (strArr[i][strArr[i].length - 1] !== strArr[i + 1][0]) {
        return false;
      }
    }

    return true;
  }
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); //➞ true

console.log(isSmooth("Someone is outside the doorway")); //➞ false

console.log(isSmooth("She eats super righteously")); //➞ true
