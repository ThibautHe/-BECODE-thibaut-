const BASE_URL = "https://swapi.dev/api/";

async function main() {
  let data = await getData(BASE_URL, "films/1/");
  let characters = await getData(data.characters[0]);
  let ships = await Promise.all(
    characters.starships.map((element) => getData(element))
  );

  console.log(ships);

  createSmthg(characters);

  console.log(characters);
}

async function getData(url, extra = "") {
  try {
    let data = await fetch(url + extra);
    let result = await data.json();
    return result;
  } catch (error) {
    console.log("something went wrong" + error);
  }
}

main();

function createSmthg(data) {
  console.log(data);
}
