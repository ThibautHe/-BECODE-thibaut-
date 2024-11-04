const myList = document.querySelector("ul");
const myItem = document.createElement("li");

myList.appendChild(myItem);

const firstli = document.querySelector("li.list-item");
const newli = document.createElement("li");

newli.innerText = firstli.innerText;
myList.appendChild(newli);

const allLi = document.querySelectorAll("li");

allLi.forEach((li) => (li.style.color = "purple"));

myList.lastChild.style.color = "gold";

allLi.forEach((li) => {
  let words = li.innerText.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i] === "Hall") {
        innerHTML.replace('Hall', '<span style="color:red;">Hall</span>');
    //   li.innerHTML = `${words[i - 1]} <span style="color:red">${
    //     words[i]
    //   }</span>`;
    }
  }
  console.log(words);
});