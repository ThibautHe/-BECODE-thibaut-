const container = document.querySelector(".container");

container.previousElementSibling.innerText =
  "There are a lot of buttons here !";

for (let i = 0; i < 100; i++) {
  let btn = document.createElement("button");
  btn.innerText = `I am button ${i + 1}`;
  setTimeout(() => {
    container.appendChild(btn);
  }, 2000);
}
