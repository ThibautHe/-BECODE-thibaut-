function caesarCipher(str, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = [];
  let strArr = str.toLowerCase().split(" ");

  strArr.forEach((word) => {
    let letters = word.split("");
    let newWord = "";
    letters.forEach((letter) => {
        let letterindex = alphabet.indexOf(letter);
        let newIndex = (26 + letterindex + n) % 26;
        
        newWord += alphabet[newIndex]

    //   if (alphabet[letterindex + n]) {
    //     newWord += alphabet[letterindex + n];
    //   } else {
    //     let newindex = 0;
    //     if (n >= 0) {
    //       newindex = Math.abs(alphabet.length - (letterindex + n));
    //     } else {
    //       newindex = alphabet.length + (letterindex + n);
    //     }

    //     newWord += alphabet[newindex];
    //   }
    });
    newStr.push(newWord);
  });

  return newStr.join(" ");
}

console.log(caesarCipher("zoo keeper", 2)); // ----> "bqq mggrgt"

console.log(caesarCipher("bqq mggrgt", -2)); //----> "zoo keeper"

console.log(caesarCipher("My name is Henrique", 3)); // ----> "pb qdph lv khqultxh "
