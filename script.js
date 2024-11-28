// Selecting elements
var todoInput = document.getElementById("todo-input");
var addBtn = document.getElementById("add-btn");
var todoList = document.getElementById("todo-list");

// Event listener for adding a task
addBtn.addEventListener("click", function () {
  var task = todoInput.value.trim();
  
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  var listItem = document.createElement("li");
  listItem.className = "todo-item";

  // Create task text
  var taskText = document.createElement("span");
  taskText.textContent = task;
  taskText.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  // Create delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  // Append elements to list item
  listItem.appendChild(taskText);
  listItem.appendChild(deleteBtn);

  // Append list item to the to-do list
  todoList.appendChild(listItem);

  // Clear input
  todoInput.value = "";
});
