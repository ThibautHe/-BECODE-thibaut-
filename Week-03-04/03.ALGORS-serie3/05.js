function convert(str) {
  let result = "Error";

  if (str.includes("F")) {
    result = `${((parseInt(str) - 32) * 5) / 9} °C`;
  } else if (str.includes("C")) {
    result = `${parseInt(str) * (9 / 5) + 32} °F`;
  }

  return result;
}

console.log(convert("35°C")); //➞ "95°F"

console.log(convert("19°F")); //➞ "-7°C"

console.log(convert("33")); //➞ "Error"
