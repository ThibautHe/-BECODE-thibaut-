function callTwice(func, calls) {
  for (let index = 0; index < calls; index++) {
    func();    
  }
}

// Here, the callTwice function takes another function as a parameter and call it two times

function rollDie() {
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
}

callTwice(rollDie,2);
