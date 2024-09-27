function findBrokenKeys(a, b) {
  let aArr = a.split("");
  let bArr = b.split("");

  let result = [];

  for (let i = 0; i < aArr.length; i++) {
    if (aArr[i] !== bArr[i]) {
      if (result.includes(aArr[i])) {
        continue;
      }
      result.push(aArr[i]);
    }
  }
  return result;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday")); //➞ ["p"]

console.log(findBrokenKeys("starry night", "starrq light")); //➞ ["y", "n"]

console.log(findBrokenKeys("beethoven", "affthoif5")); //➞ ["b", "e", "v", "n"]
