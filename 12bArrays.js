const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[3] = "Draco";

const initialArray = [
  null,
  true,
  ["Apple", "two", undefined],
  false,
  ["three", "BeCode"],
  4,
  "I am a big bad wolf",
  ["one"],
];

let newArr = initialArray.filter((element) => {
  //   console.log(element);
  // console.log(typeof element);

  return Array.isArray(element);
});

newArr[0] = newArr[0].slice(1, 2);
newArr[1] = newArr[1].slice(0, 1);


console.log(newArr);
