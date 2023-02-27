// This todo list design is pure css. The css and html are ready, but we need to code the Javascript part of the application. Use html from file todo_list.html.

// As you can see, when you initially run, the ability to delete or add items to the to-do list does not yet exist!

// 📝 Instructions: Please add the "delete task" and "add task" functionality. 💡 Hints: Analize the HTML code, how the list is designed and built, what do you have to add into the HTML if you want a new item appear inside the list?

// If we were to delete any particular element, we would have to add a listener to the click handler on the trash icon and then delete the entire li in which the icon.

// You don't have to edit anything from the HTML nor the CSS, only the javascript!

const taskInput = document.getElementById("new-task"); //input to create new task.
const addButton = document.querySelector("button.add"); //add button
const tasksHolder = document.getElementById("tasks-list"); //ul of todos

const createNewTaskElement = (newTodo) => {
  const markUp = ` <li>
    <input type="checkbox" />
      <label>${newTodo}</label>
      <input type="text" value="${newTodo}" />
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </li>`;
    tasksHolder.insertAdjacentHTML("afterbegin", markUp);
};

const addTask = () => {
  const taskString = taskInput.value;
  createNewTaskElement(taskString);
  taskInput.value = "";

};

const editTask = () => {};

const deleteTask = () => {};

addButton.addEventListener("click", addTask);
tasksHolder.addEventListener("click", editTask);
tasksHolder.addEventListener("click", deleteTask);
