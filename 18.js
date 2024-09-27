function game() {
  let maxNumber = prompt("enter a max number to start the game");
  if (isNaN(maxNumber)) {
    return game();
  }

  let RandomNumber = Math.floor(Math.random() * maxNumber + 1);
  console.log(RandomNumber);

  round(RandomNumber);
}

function round(RandomNumber) {
  let guess = getGuess();
  guess = Number(guess);

  if (guess == RandomNumber) {
    console.log("CONGRATULATIONS!");
    alert("CONGRATULATIONS!")
  } else if (guess < RandomNumber) {
    console.log("guess higher");
    guess = round(RandomNumber);
  } else if (guess > RandomNumber) {
    console.log("guess lower");
    guess = round(RandomNumber);
  }
}

function getGuess() {
  let guess = prompt("guess the number between 1 and your number");
  if (isNaN(guess)) {
    alert("non valid answer");
    return getGuess();
  }
  return guess;
}

// game();


function rotateArray(arr, steps) {
  // Your code here
  const n = arr.length;
  steps %= n;

  const rotated = [];
  for (let i = 0; i < n; i++) {
      rotated[(i + steps) % n] = arr[i];
  }

  for (let i = 0; i < n; i++) {
      arr[i] = rotated[i];
  }
}

rotateArray([1,2,3,4,5],1)