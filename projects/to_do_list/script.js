const toDo = document.querySelector(".toDo");
const div = document.querySelector(".div");
const main = document.querySelector(".main");
const addButton = document.querySelector(".addButton");

let toDoItem = null;
let isWrite = false;

function addToDoHandler() {
  //parent div
  const row = document.createElement("div");
  document.body.appendChild(row);
  main.appendChild(row);
  row.classList.add("toDoItems");
  const text = document.createElement("span");
  row.appendChild(text);
  text.innerText = toDoItem;

  //childs
  //remove
  const deleteIcon = document.createElement("div");
  document.body.appendChild(deleteIcon);
  row.appendChild(deleteIcon);
  deleteIcon.classList.add("deleteIcon");

  deleteIcon.addEventListener("click", () => {
    row.remove();
  });

  //line-through
  const crossToDo = document.createElement("div");
  document.body.appendChild(crossToDo);
  row.appendChild(crossToDo);
  crossToDo.classList.add("crossToDo");

  crossToDo.addEventListener("click", () => {
    text.style.textDecoration = "line-through";
  });
}

addButton.addEventListener("click", () => {
  if (isWrite) {
    addToDoHandler();
    toDo.value = "";
  }
});

toDo.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    toDoItem = e.target.value;
    isWrite = true;
  } else {
    toDoItem = "";
  }
});
