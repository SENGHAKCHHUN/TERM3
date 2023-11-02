// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

// HIDE / SHOW ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

//  LOCAL STORAGE ---------------------------------------------------------
function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

function loadQuestions() {
  let questionsStorage = JSON.parse(localStorage.getItem("questions"));
  if (questionsStorage !== null) {
    questions = questionsStorage;
  }
}

//  EDIT ---------------------------------------------------------

function renderQuestions() {
  // 1 - Remove the card container and create a new one
  document.querySelector("#questions-container").remove();
  let container=document.createElement("div");
  container.id="questions-container";

  // 2 - For all questions,  create a new div (class : card), and append it the container
  for(index in questions){
    // create card  and set dataset 
    let card=document.createElement("div");
    card.className="card";
    card.dataset.index = index;  

    // create question_info
    let question_info = document.createElement("div");
    question_info.className="question-info";

    // create span 
    let span=document.createElement("span");
    span.className="title";
    span.textContent=questions[index].title;

    // create actions
    let actions=document.createElement("div");
    actions.className="actions";

    // creat delete and edit images
    let delete_img=document.createElement("img");
    let edit_img=document.createElement("img");
    delete_img.src= "../../img/trash.png";
    edit_img.src="../../img/edit.svg";


    // append images to actions 
    actions.appendChild(edit_img);
    actions.appendChild(delete_img);
    
    // append span to question_info
    question_info.appendChild(span);
    
    // append question_info and actions to card 
    card.append(question_info, actions);
    
    // append card to container
    container.appendChild(card);

    // button delete 
    delete_img.addEventListener("click", removeQuestion);
  }
  dom_questions_view.appendChild(container);
}

function editQuestion(event) {}

function removeQuestion(event) {
  //  Get index from the dataset
  let index = event.target.parentElement.parentElement.dataset.index;

  // TODO Remove question at given index
  questions.splice(index, 1);

  // TODO changes to local storage
  saveQuestions()

  // TODO Update the view
  location.reload()
}


// MAIN  ---------------------------------------------------------
loadQuestions();
renderQuestions();
