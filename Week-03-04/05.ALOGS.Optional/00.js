let settest = new Set([1, 2, 3, 45, 6]);

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

//console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// Result : [4, 9, 5, 1, 3, 2, 8]

//console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
// Result : ['hello', 'world', 'goodbye']

//console.log(removeDuplicates([true, true, false, true, true, false]));
// Result : [true, false]

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//console.log(capitalize("test"));

function dayDif(date1, date2) {
  console.log(
    Math.abs((date1.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24)
  );
}

dayDif(new Date("2020-10-21"), new Date("2021-10-23"));
// Result : 366

function average(arr) {
  return arr.reduce((acc, current) => (acc += current), 0) / arr.length;
}

console.log(average([1, 2, 3, 5]));
// Result: 2.5

function getSmallest(arr) {
  return Math.min(...arr);
}

const arr = [13, 7, 11, 3, 9, 15, 17, 1];

console.log(getSmallest(arr)); // Result: 3

function areEqual(arr1, arr2) {
  return arr1.sort().toString() == arr2.sort().toString();
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];

console.log(areEqual(arr1, arr2));
// Result : true

console.log(areEqual(arr1, arr3));
// Result : false

console.log("EXERCISE 3");

let user = { name: "John", age: 30 };

// your code to the left side:
let { name, age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
console.log();

function occurencies(str, letter) {
  return str.split(letter).length - 1;
}

console.log(occurencies("hello", "l"));
// Result : 2

console.log(occurencies("abracadabra", "a"));
// Result : 5

console.log(occurencies("oups", "z"));
// Result : 0

function onlyPositives(arr) {
  return arr.reduce(
    (acc, current) => (current > 0 ? (acc += current) : acc));
}

console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// Result : 14

console.log(onlyPositives([-3, -4, -2]));
// Result : 0

function randomRgb() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
}

function scanAndFind(arr, id) {
  console.log(
    arr.filter((el) => el[Object.keys(id)[0]] === Object.values(id)[0])
  );
}

scanAndFind(
  [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "Jon",
      lastName: "Snow",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Michal",
      lastName: "Corleone",
    },
  ],
  {
    lastName: "Corleone",
  }
);

// Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]

scanAndFind(
  [
    { fullName: "Roi Baudoin", id: 49762 },
    { fullName: "Margareth Tatcher", id: 94357 },
    { fullName: "Barack Obama", id: 76458 },
    { fullName: "Emmanuel Macron", id: 10687 },
    { fullName: "Charles de Gaulle", id: 67098 },
    { fullName: "Boris Johnson", id: 16437 },
  ],
  { id: 10687 }
);
// Result : [{fullName: "Emmanuel Macron", id: 10687}]

console.log("EXERCICE 8");

function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: "Once Upon a Time",
    protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },
      ],
    },
  };

  const {
    title,
    protagonist: {
      name: protagonistName,
      enemies: [
        ,
        ,
        { name: enemyName, title: enemyTitle },
        { name: enemyName2, title: enemyTitle2 },
      ],
    },
  } = info;
  //const { title, protagonist:{name:protagonistName,enemies:[, , ,{name:enemyName, title:enemyTitle}]} } = info // <-- replace the next few `const` lines with this
  //const title = info.title
  //const protagonistName = info.protagonist.name
  //const enemy = info.protagonist.enemies[3]
  //const enemyTitle = enemy.title
  //const enemyName = enemy.name
  console.log(
    `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
  );
}

nestedArrayAndObject();

// bankAccount.js

class BankAccount {
  constructor(name, iban, initialDeposit, password) {
    this.money = initialDeposit;
    this.transactions = [];
  }

  withdraw(amount) {
    this.addTransaction(amount);
    console.log(`you withdrew ${amount} you now have ${this.money} left over`);
  }

  deposit(amount) {}

  transactionsHistory(args = {}) {}

  getIban() {
    // Partial getter (hides the middle of the IBAN like FR14**************606)
  }

  toString() {
    // TODO: return a string with the account owner, the hidden iban and the balance of the account
  }

  addTransaction(amount) {
    this.transactions.push(amount);
    this.money += amount;
  }
}
