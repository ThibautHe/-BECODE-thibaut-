const mystery = "Pp7zerazefazg"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
} else {
  console.log("TRY AGAIN");
}

function keylessCar() {
  let age = prompt("age");

  if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else {
    alert("Powering On. Enjoy the ride!");
  }
}

// keylessCar();

function fruits() {
  let fruit = prompt("whats your favorite fruit?").toLowerCase();

  switch (fruit) {
    case "grape": {
      let color = prompt("what color ? green or purple?").toLowerCase();
      if (color == "green") {
        console.log("hmm they are ok");
      } else if (color == "purple") {
        console.log("i dont like purple");
      } else {
        console.log("i dont understand what you are saying");
      }
      break;
    }
    case "bananas": {
      console.log("i like it too!");
      break;
    }
    case "strawberries": {
      console.log("i LOVE strawberries");
      break;
    }
    default: {
      console.log(`i dont understand ${fruit}`);
    }
  }
}

// fruits();
