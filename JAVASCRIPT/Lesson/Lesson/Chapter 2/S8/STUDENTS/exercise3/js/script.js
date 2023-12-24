// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function displayArray(array) {
  //1- You have to delete the old node parent were is stored the items of your list
  let parent = document.querySelector("body");
  parent.lastElementChild.remove();

  // 2-Create a new container that will contain the items in your list
  let container = document.createElement("div");
  container.className = "container";

  // 3 - For all tasks,  create a new div (class : item), and append it the container
  for (let value of array) {
    let div = document.createElement("div");
    div.className = "item";
    div.textContent = value.description;

    // 3.1 the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
    if (value.priority == 1) {
      div.style.background = "red"
    }
    else {
      div.style.background = "gray"
    }
    container.appendChild(div);
  }
  document.body.appendChild(container);
}

function addItem() {
  // 1- Create a new task
  let newTask = {};

  //  2- Set the description from the text field
  let description = document.querySelector("#description").value;
  newTask.description = description;

  // 3- Set the priority from select field
  let priority = document.querySelector("#priority").value;
  if (priority != "Low") {
    newTask.priority = 1;
  }
  else {
    newTask.priority = 0;
  }

  // 4- Add the new object to the array
  if (tasks.length == 0 && newTask.description != "") {
    tasks.push(newTask);
  }
  else {
    let count = 0;
    for (let index in tasks) {
      if (newTask.description == tasks[index].description) {
        count++;
        tasks.splice(index,1);
      }
    }
    if (count == 0 && newTask.description != "") {
      tasks.push(newTask);
    }
    else if(count != 0){
      tasks.push(newTask);
    }
  }

  // 5- Call  the displayArray function to refresh the DOM
  displayArray(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
