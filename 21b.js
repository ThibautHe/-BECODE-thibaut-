function throwDices(faces, throws) {
  for (let index = 0; index < throws; index++) {
    console.log(
      "dice " + (index + 1) + ": " + Math.floor(Math.random() * faces + 1)
    );
  }
}

throwDices(6, 10);


