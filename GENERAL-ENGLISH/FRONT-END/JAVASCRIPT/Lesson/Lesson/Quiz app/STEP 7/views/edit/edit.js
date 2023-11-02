// DOMS ELEMENTS  ---------------------------------------------------------
const dom_questions_view = document.querySelector("#questions-view");
const dom_questions_dialog = document.querySelector("#questions-dialog");
let isEdit=true;
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
  // Remove the card container and create a new one
  dom_questions_container = document.querySelector("#questions-container");
  dom_questions_container.remove();
  dom_questions_container = document.createElement("div");
  dom_questions_container.id = "questions-container";
  dom_questions_view.appendChild(dom_questions_container);

  // 2 - For all questions,  create a new div (class : item), and append it the container
  for (let index = 0; index < questions.length; index++) {
    let question = questions[index];

    let card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    dom_questions_container.appendChild(card);

    let questionInfos = document.createElement("div");
    questionInfos.className = "question-info";
    card.appendChild(questionInfos);

    let title = document.createElement("spam");
    title.className = "title";
    title.textContent = question.title;
    questionInfos.appendChild(title);

    // Create spans for title and author
    let actions = document.createElement("div");
    actions.className = "actions";
    card.appendChild(actions);

    let editAction = document.createElement("img");
    editAction.src = "../../img/edit.svg";
    editAction.addEventListener("click", editQuestion);
    actions.appendChild(editAction);

    let trashAction = document.createElement("img");
    trashAction.src = "../../img/trash.png";
    trashAction.addEventListener("click", removeQuestion);
    actions.appendChild(trashAction);
  }
}

function editQuestion(event) {
  // TODO  Get the question index using the dataset
  document.querySelector("menu").lastElementChild.textContent="EDIT";
  let index=event.target.parentElement.parentElement.dataset.index;
  
  // TODO  update the dialog with question information
  document.querySelector("#title").value=questions[index].title;
  document.querySelector("#choiceA").value=questions[index].choiceA;
  document.querySelector("#choiceB").value=questions[index].choiceB;
  document.querySelector("#choiceC").value=questions[index].choiceC;
  document.querySelector("#choiceD").value=questions[index].choiceD;

  // TODO  Show the dialog
  show(dom_questions_dialog)
  questions.splice(index, 1);
}

function removeQuestion(event) {
  //  Get index
  let index = event.target.parentElement.parentElement.dataset.index;

  // Remove question
  questions.splice(index, 1);

  // Save to local storage
  saveQuestions();

  // Update the view
  renderQuestions();
}

function onAddQuestion() {
  document.querySelector("menu").lastElementChild.textContent="CREATE";
  show(dom_questions_dialog);
}

function onCancel(e) {
  resetInput();
  hide(dom_questions_dialog);
  isEdit=false;
}

function onCreate() {
  hide(dom_questions_dialog);
  
  // 1- Create new question
  let newQuestion = {};
  newQuestion.title = document.getElementById("title").value;
  newQuestion.correct = "A";

  newQuestion.choiceA = document.getElementById("choiceA").value;
  newQuestion.choiceB = document.getElementById("choiceB").value;
  newQuestion.choiceC = document.getElementById("choiceC").value;
  newQuestion.choiceD = document.getElementById("choiceD").value;
  questions.push(newQuestion);

  // 2- Save question
  saveQuestions();

  // 3 - Update the view
  renderQuestions();
  resetInput();
}

// Reset function 
let resetInput=()=>{
  document.querySelector("#title").value="";
  document.querySelector("#choiceA").value="";
  document.querySelector("#choiceB").value="";
  document.querySelector("#choiceC").value="";
  document.querySelector("#choiceD").value="";
}

// MAIN  ---------------------------------------------------------

loadQuestions();

renderQuestions();
