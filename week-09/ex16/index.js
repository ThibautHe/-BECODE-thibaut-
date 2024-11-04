const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

const submitBtn = document.querySelector("button");
const seachInput = document.querySelector("input");
const contentContainer = document.querySelector(".swiper-wrapper");
const modal = document.querySelector(".modal");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getData(BASE_URL, seachInput.value);
});

async function getData(url, dish) {
  console.log("test");

  const result = await fetch(`${url}?s=${dish}`);
  const data = await result.json();

  data.meals.forEach((element) => {
    createMealElement(element);
  });
}

function createMealElement(mealObj) {
  const mealdiv = document.createElement("div");
  mealdiv.classList.add("mealItem");
  mealdiv.classList.add("swiper-slide");

  const mealTitle = document.createElement("h1");
  mealTitle.innerText = mealObj.strMeal;

  const mealImage = document.createElement("img");
  mealImage.src = mealObj.strMealThumb;

  mealdiv.appendChild(mealImage);
  mealdiv.appendChild(mealTitle);

  contentContainer.appendChild(mealdiv);
  mealdiv.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    handleModal(mealObj);
  });
}

function handleModal(mealObj) {
  modal.style.display = "block";
  document.querySelector(".modal-title").innerText = mealObj.strMeal;
  document.querySelector(".modal-img").src = mealObj.strMealThumb;

  const list = document.querySelector(".modal-ingredients");
  list.innerHTML = "";

  document.querySelector(".instructions").innerText = mealObj.strInstructions;

  for (let i = 1; i <= 20; i++) {
    if (!mealObj[`strIngredient${i}`]) {
      return;
    }
    const ingredient = mealObj[`strIngredient${i}`];
    const measure = mealObj[`strMeasure${i}`];

    const newli = document.createElement("li");
    newli.innerText = ingredient + " " + measure;
    list.appendChild(newli);
  }
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
