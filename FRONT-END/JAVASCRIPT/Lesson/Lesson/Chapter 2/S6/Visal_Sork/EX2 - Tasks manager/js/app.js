function addTask(event) {
  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  // TODO
  event.preventDefault();

  // 2- Get the form inputs  information
  // TODO
  let text=document.querySelector("#taskId").value;
  let color=document.querySelector("#color").value;
  console.log(color)
  let date=document.querySelector("#date").value;
  console.log(date);
  
  // 3- Check if task text, color, date are defined :
  //    If not defined, display a warnning        "You must fill all inputs"
  // TODO
  if(text===""|| color===""|| date===""){
    alert("You must fill all inputs");
  }

  // 4 - If defined:
  else{
    // 4-1- Create a span for the taks name
    //    - class = "task-name"
    // TODO
    let spanName=document.createElement("span");
    spanName.className="task-name";
    spanName.textContent=text;

    // 4-2- Create a span for the taks date
    //    - class = "task-date"
    // TODO
    let spanDate=document.createElement("span");
    spanDate.className="task-date";
    spanDate.textContent=date;  

    // 4-3- Create a p containing the 2 spans
    // TODO
    let p=document.createElement("p");
    p.appendChild(spanName);
    p.appendChild(spanDate);
  
    // 4-4- the P background color is the selected color - the text is back
    // TODO
    p.style.backgroundColor=color;
    p.style.color="black";

    let display=document.querySelector(".dashboard");
    display.appendChild(p);
  }
}

// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);

