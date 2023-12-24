
// access to user input fields---------------------------------------------------------------
let student_name = document.querySelector("#name");
let gender = document.querySelector("#gender");
let sports = document.querySelectorAll("#sport");
let message = document.querySelector("#message");
let submit_btn = document.querySelector("#submit");
submit_btn.type = "button";
submit_btn.addEventListener("click",submit);
// access to HTML elements---------------------------------------------------------------------
let result = document.querySelector("#result");

// function submit for show data --------------------------------------------------------------
function submit(){
    
    // createElement card in html
    let card = document.createElement("div");
    result.appendChild(card);
    let h1 = document.createElement("h1");
    card.appendChild(h1)
    // check the gender and add className
    if (gender.value ==="Male" ){
        card.className = "card male"
        h1.textContent = "Mr. " + student_name.value
    }
    else if (gender.value ==="Female" ){
        card.className = "card female"
        h1.textContent = "MS. " + student_name.value
    }

    // get sports that user checked 
    let sport_chose = ""
    for (let i in sports){
        if (sports[i].checked){
            sport_chose += sports[i].value + " "
            sports[i].checked = false;
            
        }
    }

    // show the favorite sport that user checked
    let favorite_sports = document.createElement("p");
    favorite_sports.textContent = "interest:"+" "+sport_chose;
    card.appendChild(favorite_sports);

    // access and show the message 
    let description = document.createElement("p");
    description.textContent = message.value;
    card.appendChild(description)

    //  call function clear data after user submit
    clear_data();
}


// function clear data ----------------------------------------------------------------------------
function clear_data(){
    student_name.value = "";
    gender.value = "";
    message.value = "";
    submit_btn.value = "";
}