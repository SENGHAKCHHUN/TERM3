

//  access to button in form and addEventListener-----------------------------------------------
let card = document.querySelector(".card");
let average_btn = card.firstElementChild.lastElementChild;
let dividing_btn = card.firstElementChild.childNodes[11];
let subtraction_btn = card.firstElementChild.childNodes[9];
dividing_btn .type = "button";
average_btn.type = "button";
subtraction_btn .type = "button";

subtraction_btn .addEventListener("click",subtraction);
dividing_btn .addEventListener("click",dividing);
average_btn.addEventListener("click",average);


// get number form input fields-------------------------------------------------------------------
let first_number = document.querySelector("#firstnumber");
let last_number = document.querySelector("#lastnumber");
let number = "00";


// function for solve the exercise ---------------------------------------------------------------
function subtraction(){
   let counter = (first_number .value -  last_number.value);
    number = counter
    show_result()
}

function dividing(){
    let  counter =(first_number .value/ last_number.value)
      number = counter
      show_result()
}

function average(){
    let counter = (Math.floor(first_number .value) +  Math.floor(last_number.value))/2
    number = counter
    show_result()
}


function show_result(){
    if (number!= 0){
        let result = document.querySelector (".result");
        result.firstElementChild.remove();
        let h1 = document.createElement("h1");
        result.appendChild(h1);
        h1.textContent = "Results: " + number;
    }
    
}



