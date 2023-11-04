

let submit=()=>{
    // Username
    let userInput=document.getElementById("name").value;
    let userName=document.createElement("p");
    userName.textContent=userInput;
    info.name=userInput;

    // gender
    let  gender=document.getElementById("gender").value;
    let sex=document.createElement("p");
    sex.textContent=gender;
    info.sex=gender;

    // class 
    let class_room=document.getElementsByName("classroom");
    for(value of class_room){
        if(value.checked){
            info.class=value.value;
        }
    }

    // sports 
    let sports=document.getElementsByName("sport");
    for(value of sports){
        if(value.checked){
            fav_sport.push(value.value);
        }
    }
    info.sports=fav_sport;
    console.log(info)
}

// variable
let info={};
let fav_sport=[];

// main
let btn_submit=document.getElementById("btn-submit").addEventListener("click", submit); 



