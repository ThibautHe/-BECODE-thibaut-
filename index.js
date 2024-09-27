function test(obj, v) {
  let objet = {
    [obj]: v,
  };
  console.log(objet[obj]);

  return objet[obj];
}

test("test", "TESETSET");

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
// YOUR CODE BELOW THIS LINE:
let whisper = message.toLocaleLowerCase().trim();

console.log(whisper);

const lastLetterWord = "dumbeldore";

console.log(lastLetterWord[lastLetterWord.length - 1]);

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialhair = word.slice(5).replace("o", "e");
console.log(facialhair);
