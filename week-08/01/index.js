const todo = document.querySelector("input");
const addBtn = document.querySelector(".add");
const todocontainer = document.querySelector(".todoHolder");




let localStorageKeys = Object.keys(localStorage);

localStorageKeys.forEach((key) => {
    createEl(key,localStorage.getItem(key));
});


addBtn.addEventListener("click",(e) => {
    addTodo();
} );

function addTodo()
{
    let newTodo = todo.value;
    let randomId = Math.round(Math.random()*100);
    console.log(newTodo);

   createEl(randomId,newTodo);

    localStorage.setItem(randomId.toString(), newTodo);
}

function createEl(id,string)
{
    const todoElement = document.createElement("div");
    todoElement.classList.add("todoItem");

    let item = document.createElement("p");
    item.innerText = string;

    let deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => {localStorage.removeItem(id);
        location.reload();
    });
    deleteBtn.innerText = "Delete";

    todoElement.appendChild(item);
    todoElement.appendChild(deleteBtn);

    todocontainer.appendChild(todoElement);
}
