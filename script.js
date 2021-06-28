const formTodo = document.getElementById("todo");
const todoItems = document.getElementById("todoItems");

var todoList = [];

function createItem(activity) {
  let item = {
    activity: activity,
    state: false,
  };

  todoList.push(item);

  return item;
}

formTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputValue = document.getElementById("item").value;
  createItem(inputValue);
  saveItem();
  formTodo.reset();
});

function saveItem() {
  localStorage.setItem("todo", JSON.stringify(todoList));
  showItem();
}

function showItem() {
  todoItems.innerHTML = "";
  todoList = JSON.parse(localStorage.getItem("todo"));
  if (todoList == null) {
    todoList = [];
  } else {
    todoList.forEach((element) => {
      todoItems.innerHTML += `<div id="todoItems">
     <div class="alert alert-success mt-4" role="alert">
       <i class="fas fa-cookie-bite mr-3"></i> <b>${element.activity}!</b>
       <span class="float-right"
         ><i class="far fa-check-circle mr-2"> </i
         ><i class="far fa-trash-alt"></i>
       </span>
     </div>`;
    });
  }
}

//the event make reference to when the page its loaded.
document.addEventListener("DOMContentLoaded", showItem);
