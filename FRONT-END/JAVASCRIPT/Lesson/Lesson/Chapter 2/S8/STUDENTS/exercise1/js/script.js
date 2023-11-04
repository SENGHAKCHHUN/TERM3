// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let div = document.createElement("div");
  div.className="container";
  document.body.appendChild(div);
  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for(let i in array) {
    let newDiv=document.createElement("div");
    newDiv.className="item";
    newDiv.textContent=tasks[i].description;
    div.appendChild(newDiv);
  }
  // 3- The priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
  for(let index in array){
    if(array[index].priority==1){
      div.children[index].style.background="red";
    }
    else{
      div.children[index].style.background="gray";
    }
  }
}

displayArray(tasks);
