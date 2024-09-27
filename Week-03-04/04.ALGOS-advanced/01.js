function ransome(note, magazine) {
  let noteArr = note.split(" ");
  let magazineArr = magazine.split(" ");

  let magData = {};
  let noteData = {};

  for (let i = 0; i < magazineArr.length; i++) {
    if (magData[magazineArr[i]]) {
      magData[magazineArr[i]]++;
    } else {
      magData[magazineArr[i]] = 1;
    }
  }
  for (let i = 0; i < noteArr.length; i++) {
    if (noteData[noteArr[i]]) {
      noteData[noteArr[i]]++;
    } else {
      noteData[noteArr[i]] = 1;
    }
  }

  for (let i = 0; i < noteArr.length; i++) {
    if (magazineArr.includes(noteArr[i])) {
      if (magData[noteArr[i]] > 0) {
        magData[noteArr[i]]--;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(
  ransome(
    "this is a secret note to you from a secret admirer",
    "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
  )
);
