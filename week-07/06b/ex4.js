const container = document.querySelector(".container");

for (let i = 0; i < 151; i++) {
  let img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  container.appendChild(img);
}
