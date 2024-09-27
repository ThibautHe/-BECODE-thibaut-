const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(
  temperature
)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

// let name = prompt(`what is your name?`);
// let age = prompt("whats you age?");
// let adress = prompt("where do you live?");

// alert(`hello, ${name} is ${age} years old and lives in ${adress}`);

function VAT(message) {
  let n = prompt(message);
  console.log(typeof n);
  if (isNaN(n)) {
    return VAT("please enter a valid number");
  }
  alert(n * 1.21);
}

// VAT("enter a number without VAT");

function cirlceSurface() {
  let radius = prompt("radius of circle");

  alert("the circumference is " + radius * 2 * Math.PI);
}

// cirlceSurface();

function sum() {
  let x = prompt("number 1");
  let y = prompt("number 2");

  alert(x + y);
}
