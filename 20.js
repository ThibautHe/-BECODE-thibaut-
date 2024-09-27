let command = "";
let todos = [];

while (command !== "quit") {
  command = prompt("enter a command : add / list / delete / quit");
  console.log(command);

  switch (command) {
    case "add":
      console.log(command);
      let todo = prompt("add a todo");
      todos.push(todo);
      break;
    case "list":
      console.log("test");

      todos.forEach((element, index) => {
        console.log(`${index} ${element}`);
      });
      break;
    case "delete":
      let itemId = prompt("enter id to delete");
      while (isNaN(itemId) || itemId >= todos.length || itemId < 0) {
        if (itemId == "quit") {
          break;
        }
        itemId = prompt("enter a number pls");
      }
      todos.splice(itemId, 1);
      break;
  }
}

function throwDices() {
  let dice = readline.questionInt("How many dice do you want to roll? ");
  let diceArr = [];
  let randomDice;
  for (let i = 0; i < dice; i++) {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    diceArr.push(randomDice);
  }
  console.log("The thrown die are: ", diceArr);
  let frequency = {};
  diceArr.forEach((die) => {
    if (frequency[die]) {
      frequency[die]++;
    } else {
      frequency[die] = 1;
    }
  });
  console.log(frequency);
}
