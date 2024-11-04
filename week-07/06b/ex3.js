const list = document.querySelector("ul");

console.log(list.children[0]);

for (let i = 0; i < list.children.length; i++) {
  list.children[i].classList.toggle("highlight");
}
